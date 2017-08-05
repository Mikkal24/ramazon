var appliancesSort = [
	"salesrank",
	"pmrank",
	"price",
	"-price",
	"relevancerank",
	"reviewrank",
	"reviewrank_authority"
]

var artsAndCraftsSort = [	
	"salesrank",
	"pmrank",
	"reviewrank",
	"reviewrank_authority",
	"relevancerank",
	"price",
	"-price"
]

var automotiveSort = [	
	"salesrank",
	"titlerank",
	"-titlerank",
	"relevancerank",
	"price",
	"-price"
]

var babySort = [
	"salesrank",
	"psrank",
	"titlerank",
	"-price",
	"price"	
]

var beautySort =[
	"salesrank",
	"-launch-date",
	"sale-flag",
	"pmrank",
	"price",
	"-price"
]

var BooksSort = [
	"relevancerank",
	"salesrank",
	"reviewrank",
	"pricerank",
	"inverse-pricerank",
	"daterank",
	"titlerank",
	"-titlerank",
	"-unit-sales",
	"price",
	"-price",
	"-publication_date"
]

var CollectiblesSort = [
	"salesrank",
	"price",
	"-price",
	"reviewrank",
	"reviewrank_authority",
	"relevancerank"
]

var ElectronicsSort = [
	"salesrank",
	"price",
	"-price",
	"titlerank",
	"pmrank",
	"reviewrank"
]

var FashionSort = [
	"relevancerank",
	"popularity-rank",
	"price",
	"-price",
	"reviewrank",
	"launch-date"
]

var HandmadeSort = [
	"relevancerank",
	"featured",
	"price",
	"-price",
	"reviewrank",
	"-release-date"
]

var HealthPersonalCareSort = [
	"pmrank",
	"salesrank",
	"pricerank",
	"inverseprice",
	"launch-date",
	"sale-flag"
]

var HomeGardenSort = [
	"salesrank",
	"price",
	"-price",
	"titlerank",
	"-titlerank"
]

var IndustrialSort = [
	"pmrank",
	"salesrank",
	"price",
	"-price",
	"titlerank",
	"-titlerank"
]

var LawnAndGardenSort = [
	"salesrank",
	"price",
	"-price",
	"reviewrank",
	"reviewrank_authority",
	"relevancerank"
]

var LuggageSort = [
	"relevancerank",
	"popularity-rank",
	"price",
	"-price",
	"reviewrank",
	"launch-date"
]

var MagazinesSort = [
	"subslot-salesrank",
	"reviewrank",
	"price",
	"-price",
	"daterank",
	"titlerank",
	"-titlerank",
	"-unit-sales",
	"-publication_date"
]

var MobileAppsSort = [
	"relevancerank",
	"pmrank",
	"price",
	"-price",
	"reviewrank",
	"reviewrank_authority"
]

var MoviesSort = [
	"relevancerank",
	"featured",
	"price",
	"-price",
	"reviewrank",
	"-release-date"
]

var MusicSort = [
	"psrank",
	"salesrank",
	"price",
	"-price",
	"titlerank",
	"-titlerank",
	"artistrank",
	"orig-rel-date",
	"-orig-rel-date",
	"release-date",
	"releasedate",
	"-releasedate",
	"relevancerank"
]

var MusicalInstrumentsSort = [
	"pmrank",
	"salesrank",
	"price",
	"-price",
	"-launch-date",
	"sale-flag"
]

var OfficeProductsSort = [
	"pmrank",
	"salesrank",
	"price",
	"-price",
	"reviewrank",
	"titlerank"
]

var PantrySort = [
	"relevancerank",
	"price",
	"-price",
	"reviewrank"
]

var PCHardwareSort = [
	"psrank",
	"salesrank",
	"price",
	"-price",
	"titlerank"
]

var PetSuppliesSort = [
	"salesrank",
	"price",
	"-price",
	"titlerank",
	"-titlerank",
	"relevance",
	"relevancerank",
	"reviewrank",
	"reviewrank_authority"
]

var SoftwareSort = [
	"pmrank",
	"salesrank",
	"price",
	"-price",
	"titlerank"
]

var SportingGoodsSort = [
	"relevancerank",
	"relevance-fs-rank",
	"price",
	"-price",
	"salesrank",
	"pricerank",
	"inverseprice",
	"launch-date",
	"sale-flag",
	"reviewrank_authority"
]

var ToolsSort = [
	"pmrank",
	"salesrank",
	"price",
	"-price",
	"titlerank",
	"-titlerank"
]

var ToysSort = [
	"pmrank",
	"salesrank",
	"price",
	"-price",
	"titlerank",
	"-age-min"
]

var UnboxVideoSort = [
	"relevancerank",
	"salesrank",
	"price",
	"-price",
	"titlerank",
	"-video-release-date",
	"-launch-date"
]

var VideoGamesSort = [
	"pmrank",
	"salesrank",
	"price",
	"-price",
	"titlerank"
]

var WineSort = [
	"relevancerank",
	"featured",
	"price",
	"-price",
	"reviewrank",
	"reviewscore"
]

var WirelessSort = [
	"salesrank",
	"pricerank",
	"inverse-pricerank",
	"titlerank",
	"-titlerank",
	"daterank",
	"reviewrank"
]

var sortOptions = {
	whichIndex: function(searchIndex){
		switch(searchIndex) {
		    case "Appliances":
		        return appliancesSort;
			case 'ArtsAndCrafts':
				return artsAndCraftsSort;
			case 'Automotive':
				return automotiveSort;
			case 'Baby':
				return babySort;
			case 'Beauty':
				return beautySort;
			case 'Books':
				return BooksSort;
			case 'Collectibles':
				return CollectiblesSort;
			case 'Electronics':
				return ElectronicsSort;
			case 'Fashion':
				return FashionSort;
			case 'Handmade':
				return HandmadeSort;
			case 'HealthPersonalCare':
				return HealthPersonalCareSort;
			case 'HomeGarden':
				return HomeGardenSort;
			case 'Industrial':
				return IndustrialSort;
			case 'LawnAndGarden':
				return LawnAndGardenSort;
			case 'Luggage':
				return LuggageSort;
			case 'Magazines':
				return MagazinesSort;
			case 'MobileApps':
				return MobileApps;
			case 'Movies':
				return MoviesSort;
			case 'Music':
				return MusicSort;
			case 'MusicalInstruments':
				return MusicalInstrumentsSort;
			case 'OfficeProducts':
				return OfficeProductsSort;
			case 'Pantry':
				return PantrySort
			case 'PCHardware':
				return PCHardwareSort;
			case 'PetSupplies':
				return PetSuppliesSort;
			case 'Software':
				return SoftwareSort;
			case 'SportingGoods':
				return SportingGoodsSort;
			case 'Tools':
				return ToolsSort;
			case 'Toys':
				return ToysSort;
			case 'UnboxVideo':
				return UnboxVideoSort;
			case 'VideoGames':
				return VideoGamesSort;
			case 'Wine':
				return WineSort;
			case 'Wireless':
				return WirelessSort;
		}
	}
}

module.exports = sortOptions;