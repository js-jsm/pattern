const calculateUpgradeMileages = (tripMileages, memberMultiplier) => {
  const upgradeMileage = [];
  for (let i=0; i<tripMileages.length; i++) {
    const calcRewardsMiles = mileage => mileage * memberMultiplier;
    upgradeMileage[i] = calcRewardsMiles(tripMileages[i]);
  }
  return upgradeMileage;
};