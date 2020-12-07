import Pie from './Pie';

const totals = {
  conservatives: {
    using: 30,
    mentions: 19,
    colours: ['#028eda', '#e9f4fb']
  },
  labour: {
    using: 24,
    mentions: 20,
    colours: ['#dd0239', '#f2aab7'],
  },
  snp: {
    using: 62,
    mentions: 38,
    colours: ['#d3c201', '#eee7ae']
  }
}

function percentage(partialValue, totalValue) {
  return Math.round((100 * partialValue) / totalValue);
}

const generatePieData = (partyName) => {
  const colours = totals[partyName].colours;
  const usingTwitter = totals[partyName].using;
  const mentionsParty = totals[partyName].mentions;

  const mentionsPartyPercent = percentage(mentionsParty, usingTwitter);

  return [
    { title: 'Mentions party', value: mentionsPartyPercent, color: colours[0] },
    { title: 'Using Twitter', value: 100 - mentionsPartyPercent, color: colours[1] },
  ]
}

function App() {
  return (
    <div className="pie-container big-squeeze">
      <div
        className="pie"
      >
        <Pie
          partyName="Scottish Conservatives (30)"
          data={generatePieData('conservatives')}
        />
      </div>

      <div
        className="pie"
      >
        <Pie
          partyName="Scottish Labour (24)"
          data={generatePieData('labour')}
        />
      </div>

      <div
        className="pie"
      >
        <Pie
          partyName="Scottish National Party (61)"
          data={generatePieData('snp')}
        />
      </div>
    </div>
  );
}

export default App;
