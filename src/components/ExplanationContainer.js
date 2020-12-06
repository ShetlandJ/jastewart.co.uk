import React from 'react';
import Link from './Link';

function ExplanationContainer() {
  return (
    <div>
      <div className="container">
        <h3>Shy Tories?</h3>
        <p>
          There is a political phenomenon known as the <Link text="Shy Tory Factor" address="https://en.wikipedia.org/wiki/Shy_Tory_factor" />, which theorises that Conservative Party voters would back the party at the ballot box, after telling pollsters they would not. This resulted in a higher vote share for the Conservative party in than what pollsters predicted. The 1992 and 2015 UK General elections are held as examples of this. Is that a factor in this instance?
        </p>

        <p>
          Just to nail my colours to the mast, I am mostly lefty and vote for the SNP in Scotland. As much as I can very easily find agreeable political content on Twitter, it undeniably <Link text="does not" address="https://www.theatlantic.com/international/archive/2020/01/jeremy-corbyn-labour-twitter-primary/604690/" /> reflect real-world political opinion. Bernie Sanders did not win. Jeremy Corbyn did not win. Remain did not win. All three were overwhelmingly expected by Twitter's active, left-wing users.
        </p>

        <p>
          Recently, Conservative MPs have made light of the <Link text="abuse" address="https://www.bbc.co.uk/news/election-2019-50687425" /> that they have received from Twitter users. The most recent media furour surrounding this followed the decision by the Conservative government to <Link text="vote against" address="https://www.thestar.co.uk/news/politics/council/south-yorkshire-mp-sent-abuse-twitter-over-free-school-meals-vote-3019189" /> extending free school meals. A cynic could easily suggest that, in taking a leaf our of Trump's playbook, the MPs managed to move the story on from voting against free school meals, to Twitter abuse.
        </p>

        <p>
          Working for a Lib Dem MP (who was in the Government) during the Coalition meant you were never too far from abuse. In the office I worked in (shared with four other MPs' staff), we used to keep some of the best abuse we received. It wasn't acceptable then, and it's not acceptable now, but MPs receiving abuse is not new. It will happen after Twitter is gone too. Twitter just means that instead of that abuse being shouted down the phone as a lowly parliamentary researcher, aka me 6 years ago, it's public for everyone to see.
        </p>

        <p>Given the signifcant left wing presense on Twitter, and the <Link text="increasingly polarised" address="https://www.kcl.ac.uk/policy-institute/assets/divided-britain.pdf" />, I do believe it is a reasonable assumption that Conservative MPs hide their political party from the biography as some kind of shield from immediate criticism. I was, however, surprised to see that one third of SNP MPs do not mention their party in any way in their biographies, given their popularity in Scotland.</p>

        <h3>What do their biographies say?</h3>

        <a href="https://postimg.cc/zHg9Cgwm" rel="noreferrer" target="_blank">
          <img
            src="https://i.postimg.cc/sx6sRPv2/image.png"
            border="0"
            alt="word word of the most common words in the MPs biography"
            style={{
              width: '100%'
            }}
          />
        </a>

        <h3>How it was done</h3>
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
          If you're interested in the code used to generate this, it's <Link text="available here" address="https://github.com/ShetlandJ/mp_twitter_scrape" />
        </p>
      </div>
    </div>
  );
}

export default ExplanationContainer;
