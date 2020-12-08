import React from 'react';
import Link from '../global/Link';
import WordList from './WordList';
import MSPPieContainer from './MSPPieContainer';

function ExplanationContainer() {
  return (
    <div>
      <div className="container">
        <h3>Shy Tories?</h3>
        <p>
          There is a political phenomenon known as the <Link text="Shy Tory Factor" address="https://en.wikipedia.org/wiki/Shy_Tory_factor" />, which theorises that Conservative Party voters would back the party at the ballot box, after telling pollsters they would not. This results in a higher vote share for the Conservative party in than what pollsters predict. The 1992 and 2015 UK General elections are held as examples of this. Is that a factor in this instance?
        </p>

        <p>
          Just to nail my colours to the mast, I am mostly lefty and vote for the SNP in Scotland. As much as I can very easily find agreeable political content on Twitter, it undeniably <Link text="does not" address="https://www.theatlantic.com/international/archive/2020/01/jeremy-corbyn-labour-twitter-primary/604690/" /> reflect real-world political opinion. Bernie Sanders did not win. Jeremy Corbyn did not win. Remain did not win. All three were overwhelmingly expected by Twitter's active, left-wing userbase.
        </p>

        <p>
          Recently, Conservative MPs have made light of the <Link text="abuse" address="https://www.bbc.co.uk/news/election-2019-50687425" /> that they have received from Twitter users. The most recent media furour surrounding this followed the decision by the Conservative government to <Link text="vote against" address="https://www.thestar.co.uk/news/politics/council/south-yorkshire-mp-sent-abuse-twitter-over-free-school-meals-vote-3019189" /> extending free school meals. A cynic could easily suggest that, in taking a leaf our of Trump's playbook, the MPs managed to move the story on from voting against free school meals, to Twitter abuse. It was a politically shrewd move, as the headlines quickly shifted.
        </p>

        <h3>What about Scotland?</h3>

        <p class="mb-0">
          Being Scottish, I was naturally curious to see if this pattern held for Scotland. It does! Well, sorta. With a coincidental surprise thrown in.
        </p>
      </div>

      <MSPPieContainer />

      <div className="container">
        <p>
          Wait, Labour MPs and Labour MSPs have the exact same percentage? I honestly had to double check that I hadn't just copied and pasted wrongly - but no - in a bizarre coincidence, it's a match (raw figs: 161 of 193 MPs, 20 of 24 MSPs).
        </p>

        <p>
          We're dealing with smaller sample sizes here, so the data needs to be afforded some wiggle room, but Labour and SNP percentages are, overall, extremely close. In Scotland, the Conservative MSPs are more likely to mention their political party than their Westminster colleagues.
          </p>

        <p>
          Though Scottish Conservative MSPs may be more likely to mention their party, most of them enter the Scottish Parliament via the regional list system. The regional list system is a great part of our voting system that helps our parliament to be more representative of the national vote. Not perfect, but better than Westminster's pure FPTP. People would probably struggle to name their MSP, but many wouldn't even know that the regional MSPs existed at all. Therefore, the Conservative MSPs who do choose to mention their affiliation in their Twitter bio may be more insulated from Twitter abuse simply because they are relatively unknown. They also have far fewer followers.
        </p>
      </div>

      <div className="container">
        <h3 class="mt-0">MP abuse</h3>
        <p>
          Working for a Lib Dem MP (who was in the Government) during the Coalition meant you were never too far from abuse. In the office I worked in (shared with four other MPs' staff), we used to keep some of the best abuse we received. It wasn't acceptable then, and it's not acceptable now, but MPs receiving abuse is not new.
        </p>

        <p>
          The MP I worked for was not in favour of Scottish Independence and as that vote took place while I was in the job, I would end up hearing from people all around Scotland. A lot of the abuse never made it to the MP, especially if the originator was not someone that the MP represented (vast majority).
        </p>

        <p>
          Though I agree with the general sentiment that political civility is <Link text="designed to reinforce oppressive systems" address="https://twitter.com/chrisinsilico/status/1333068977447243777" />, the abuse that we received (directed at the MPs we worked for) only really impacted our own mental health. We didn't take abusive content to the MP, because they were already too busy helping normal people. Although I haven't personally done this, I'm sure it's fun to write a mean tweet to an MP on Twitter, it can just play into their hands and further cement divisions.
        </p>

        <p>
          All this is to say that the abuse of MPs will still happen after Twitter is gone. Twitter just means that instead of that abuse being shouted down the phone as a lowly parliamentary researcher, aka me 6 years ago, it's public for everyone to see.
        </p>

        <p>
          Given the signifcant left wing presence on Twitter, and the <Link text="increasingly polarised" address="https://www.kcl.ac.uk/policy-institute/assets/divided-britain.pdf" /> politics in our country, I do believe it is a reasonable assumption that some Conservative MPs hide their political party from the biography as some kind of shield from immediate criticism. I was, however, surprised to see that one third of SNP MP/MSPs do not mention their party in any way in their biographies, given their popularity in Scotland.
        </p>

        <h3>What do their biographies say?</h3>

        <img
          src='https://i.postimg.cc/pXytF10G/image.png'
          border='0'
          alt="word cloud of the most common words in the MPs biography"
          style={{
            width: '100%'
          }}
        />

        <WordList />

        <p>
          The above lists have some common phrases and email quirks removed, but it's probably not surprising to see the most common words and phrases being 'mp', 'mp for' and 'of parliament'. One that surprised me was "shadow" in 11th place with 86 mentions - but this could include "former shadow" of which there will have been a significant number after the recent Labour leadership turnover.
        </p>

        <p>
          I think that the word 'mp' appears multiple times because the online counter website I used may have included mentions from email addresses.
        </p>

        <h3>How the information was gathered</h3>
        <p>
          I wrote small program that I ran on my computer which silently opened Google Chrome, visited the MP's twitter page and saved their biography into their CSV file. When it stored their biography into the CSV file, I also inserts their name, handle and TRUE/FALSE which was the product of checking if their biography contained certain phrases.
        </p>

        <p>
          For example, a Liberal Democrat MP might have 'Liberal Democrat' or 'Lib Dem' or '@libdem' or '@scotlibdems'. If any of those phrases popped up, I'd save TRUE into a column, otherwise I'd store FALSE
        </p>

        <p>
          After doing some manual sample checking to check the rigour of my data, I create a second program which checked each row of the CSV. If the column was TRUE, I'd increase a count by one. Otherwise, I would do nothing. That gave me the figures that you see above.
        </p>

        <p>
          It wasn't written to be perfect code, and upon reflection there are probably many efficiency savings to be made. For example, I launch and terminate a chrome browser <i>per MP</i> (589 on Twitter as of December 2020). I realise that this was wasteful, but the purpose wasn't to write the cleanest code, it was just to scrape the data and analyse the count.
        </p>

        <p>
          If you're interested in the code used to generate this, it's <Link text="available here" address="https://github.com/ShetlandJ/mp_twitter_scrape" />.
        </p>
      </div>
    </div>
  );
}

export default ExplanationContainer;
