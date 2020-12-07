import Pie from './Pie';

const totals = {
  conservatives: {
    total: 364,
    using: 316,
    mentions: 130,
    colours: ['#028eda', '#e9f4fb']
  },
  labour: {
    total: 200,
    using: 193,
    mentions: 161,
    colours: ['#dd0239', '#f2aab7'],
  },
  snp: {
    total: 47,
    using: 45,
    mentions: 30,
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
          partyName="Conservatives (316)"
          data={generatePieData('conservatives')}
        />
      </div>

      <div
        className="pie"
      >
        <Pie
          partyName="Labour (193)"
          data={generatePieData('labour')}
        />
      </div>

      <div
        className="pie"
      >
        <Pie
          partyName="Scottish National Party (47)"
          data={generatePieData('snp')}
        />
      </div>
    </div>
  );
}

export default App;
