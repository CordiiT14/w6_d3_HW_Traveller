const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    const result = this.journeys.map((journey) => {
      return journey.startLocation;
    })
    return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
    const result = this.journeys.map((journey) => {
      return journey.endLocation;
    });
    return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
    const result = this.journeys.filter((journey) => {
      return journey.transport === transport;
    });
    return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    const result = this.journeys.filter((journey) => {
      return journey.distance >= minDistance;
    });
    return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    const result = this.journeys.reduce((counter, journey) => {
      return counter + journey.distance;
    },0);
    return result;
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueTransport = [];
  this.journeys.forEach((journey) => {
    if (!uniqueTransport.includes(journey.transport)){
      uniqueTransport.push(journey.transport);
    }

  });
  return uniqueTransport;
};


module.exports = Traveller;
