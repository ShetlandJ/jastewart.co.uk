import Link from '../global/Link';

function IntroContainer() {
  return (
    <div>
      <h1 className="flex-center small-squeeze mb-0">Do MPs mention their party in their Twitter bio?</h1>
      <div className="container">
        <div class="flex space-between">
          <small>Page last updated: 7 Dec 2020</small>
          <small><Link text="@JAStewart" address="https://www.twitter.com/JAStewart" /></small>
        </div>

        <p>
            I'm a <Link text="developer" address="https://github.com/ShetlandJ" />, <Link text="charity founder" address="https://www.wrestlekind.org"/> and <Link text="cafe owner" address="https://www.gilmartinsbakery.com" /> who changed career from politics to software back in 2018. I previously worked for a Cabinet Minister during the Conservative/Lib Dem coalition and I've always wanted to marry up my new technical abilities with my political interest. That has previously manifested in things like this mischevious <Link text="chrome extension" address="https://chrome.google.com/webstore/detail/liam-foxinator/neighkpnbclgljfgdmijhabhgifdhabn?hl=en" />.
        </p>

        <p>
          When browsing UK politics subreddits, such as <Link text="/r/unitedkingdom" address="https://www.reddit.com/r/unitedkingdom/" /> &amp; <Link text="/r/ukpolitics" address="https://www.reddit.com/r/ukpolitics/" />, I noticed that when a tweet was shared and was clearly from a Conservative MP, the MP's Twitter bio would often not include their party. This let me to the question: are Conservative MPs less likely to include the name of their political party compared to their primary political rivals, the Labour party?
        </p>

        <p>
            As it happens, the answer was yes. The following data was gathered at the end of November 2020. The total count of MPs in that party using Twitter, therefore the sample size, is in brackets next to the party name.
        </p>
      </div>
    </div>
  );
}

export default IntroContainer;
