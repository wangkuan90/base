global.Common = {
	getRandom: function(Min, Max) {
		Min = Min || 0;
		Max = Max || 1;
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}
};