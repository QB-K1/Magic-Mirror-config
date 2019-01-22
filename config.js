/* Magic Mirror original repo by Michael Teeuw 
 * http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 */

var config = {
	address: "localhost",
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	language: "en",
	timeFormat: 24,
	units: "metric",
	customCss: "css/custom.css",
	modules: [
{
	module: "MMM-RSS-FEED",
	position: "top_bar",
	config: {url: "https://www.lemonde.fr/rss/une.xml"} // ou "https://www.courrierinternational.com/feed/category/6261/rss.xml" par ex
},
{
	module: "MMM-forecast-io", // météo sur 7 jours
	position: "top_left",
	config: {
				apiKey: "API_KEY",
				latitude: 48.856614,
	 			longitude: 2.352222,
				units: "metric",
				updateInterval: 3600000
			}
},
{
	module: "MMM-cryptocurrency", // taux de change cryptos
	position: "top_center",
	config: {
				currency: [
							"ethereum",
							"bitcoin",
							"ripple",
							"litecoin"
						],
				conversion: "EUR",
				showUSD: false,
				headers: ["change24h", "change7d"],
				displayType: "logoWithChanges",
				showGraphs: true,
				coloredLogos: true
			}
},
{
	module: "MMM-OnScreenMenu", // menu de contrôle du dashboard
	position: "top_right",
  	config: {
				touchMode: true,
				enableKeyboard: true,
				menuItems: {
								refresh: {title: "Actualiser", icon: "refresh", source: "ALL"},
		   							// actualise les modules
		    					restart: {title: "Relancer", icon: "spinner", source: "ALL"},
		    						// relance le dashboard
								stop: {title: "Arrêter", icon: "power-off", source: "ALL"},
									// Stop le dashboard
		    					reboot: {title: "Relancer Serveur", icon: "server", source: "ALL"},
		    						// relance l'OS et le serveur
		    					shutdown: {title: "Eteindre Serveur", icon: "plug", source: "ALL"},
		    						// éteins l'OS et le serveur et mets le pi en veille  mais ne l'éteins pas
		    					monitorOff: {title: "Eteindre Ecran", icon: "television", source: "ALL"},
		    						// éteins l'affichage
								toggleTouchMode: {title: "Menu caché/visible", icon: "eye-slash", source: "ALL"}
									// laisse visible ou cache bouton et titres
							}
			}
},
{
	module: "MMM-Timetable", // emploi du temps à remplir à la main ou depuis un .csv
	position: "lower_third",
	config: {
				timeFormat: "hh:mm A",
				mode: "7days",
				refreshInterval: 60000,
				displayEndTime: true,
				schedules: [
	      					{
								title: "Semaine",
								file: null, //ou par ex "semaineDashboard.csv"
								schedule: [
											[1, "0730", "0800", "Breakfast", "ptit dej des champions", "rgba(0,255,0, 0.5)"],
											[2, "0730", "0800", "Breakfast", "ptit dej des champions", "rgba(0,255,0, 0.5)"],
											[3, "0730", "0800", "Breakfast", "ptit dej des champions", "rgba(0,255,0, 0.5)"],
											[4, "0730", "0800", "Breakfast", "ptit dej des champions", "rgba(0,255,0, 0.5)"],
											[5, "0730", "0800", "Breakfast", "ptit dej des champions", "rgba(0,255,0, 0.5)"],
											[6, "0730", "0800", "Breakfast", "ptit dej des champions", "rgba(0,255,0, 0.5)"],
											[7, "0730", "0800", "Breakfast", "ptit dej des champions", "rgba(0,255,0, 0.5)"],
											[1, "1200", "1300", "Lunch", "", "rgba(0,255,0, 0.5)"],
											[2, "1200", "1300", "Lunch", "", "rgba(0,255,0, 0.5)"],
											[3, "1200", "1300", "Lunch", "", "rgba(0,255,0, 0.5)"],
											[4, "1200", "1300", "Lunch", "", "rgba(0,255,0, 0.5)"],
											[5, "1200", "1300", "Lunch", "", "rgba(0,255,0, 0.5)"],
											[6, "1200", "1300", "Lunch", "", "rgba(0,255,0, 0.5)"],
											[7, "1200", "1300", "Lunch", "", "rgba(0,255,0, 0.5)"],
											[1, "2000", "2100", "Dinner", "", "rgba(0,255,0, 0.5)"],
											[2, "2000", "2100", "Dinner", "", "rgba(0,255,0, 0.5)"],
											[3, "2000", "2100", "Dinner", "", "rgba(0,255,0, 0.5)"],
											[4, "2000", "2100", "Dinner", "", "rgba(0,255,0, 0.5)"],
											[5, "2000", "2100", "Dinner", "", "rgba(0,255,0, 0.5)"],
											[6, "2000", "2100", "Dinner", "", "rgba(0,255,0, 0.5)"],
											[7, "2000", "2100", "Dinner", "", "rgba(0,255,0, 0.5)"]
										]
			      			}
						]
	 		}
},
{
	module: "MMM-SystemStats", // stats du magic mirror, shows the processor temperature, system load, available RAM, uptime and free disk space
	position: "bottom_left",
	config: {
				updateInterval: 10000,
				align: "right",
				label: "textAndIcon"
			}
},
{
	module: "MMM-NetworkConnection", //Display network connection status (ping, download speed, upload speed)
	position: "bottom_right",
	config: {
				decimal: 2,
				maxTime: 60000
			}
},
{
	module: 'MMM-Instagram',
	position: 'bottom_right',
	config: {
				access_token: 'API_KEY', //nécessite inscription pour clé API
				count: 50,
				min_timestamp: 0,
				animationSpeed: 3000,
				updateInterval: 15000
			}
},
{
	module: 'MMM-SlackAnnouncements', // récupère dernier mess d'un channel Slack
	position: 'top_right',
	config: {
				title: "Slack History",
				updateMS: 10000,
				channel: "CHANNEL_NAME", // nom du channel
				slackToken: "API_KEY" //nécessite inscription pour clé API
			}
},
{
	module: 'MMM-Trello', // fait défiler tâches d'une liste d'un Trello
	position: 'bottom_center',
	config: {
				api_key: "API_KEY", //nécessite inscription pour clé API
				token: "API_TOKEN", //nécessite inscription pour token API
				list: "LIST_ID" //nécessite inscription pour List ID
			}
},
{
	module: 'MMM-ip', //display both ipv4 and ipv6 IP of the dashboard
	position: 'bottom_left',
	config: {
				showFamily: 'both',
				showType: 'both'
			}
},
{
	module: "MMM-pihole-stats",
	position: "bottom_left",
	config: {
				apiURL: "http://pi.hole/admin/api.php",
				showSources: true,
				updateInterval: 600000
			}
},
{
	module: "MMM-DigClock", // horloge digitale + date & jour semaine
	position: "top_left",
	config: {
				timeFormat: 24,
				showDate: true,
				showWeek: false,
				dateFormat: "ddd, ll",
				timezone: "Europe/Paris"
			}
},
{
	module: "worldclock", //horloge avec différents endroits + drapeaux
	position: "top_left",
	config: {
				timeFormat: "HH:mm A",
				style: "bottom",
				clocks: [
							{
								title: "Paris",
								timezone: "Europe/Paris",
								flag: "fr"
							},
							{
								title: "New York",
								timezone: "America/New_York",
								flag: "us"
							},
							{
								title: "Shanghai",
								timezone: "Asia/Shanghai",
								flag: "cn"
							},
							{
								title: "London",
								timezone: "Europe/London",
								flag: "gb"
							}
						]
			}
},
{
	module: "MMM-Memo",
	position: "bottom_center",
	classes: "default everyone",
	config: {
				memoTitle: "Pense-bete",
				memoDisplayDuration: true,
				memoDisplayIfEmpty: true,
				memoDisplayHeader: true,
				memoColorBackground: "Yellow",
				memoColorFont: "Black",
				memoColorWarning: "Red"
			}
},
{
	module: "MMM-Paris-RATP-PG",
	position: "top_left",
	header: "Connections",
	config: {
				debug: false,
				lineDefault: {
				  				//hideTraffic: [], // pour cacher messages qui resteraient sur la durée (travaux...)
				 				conversion: {"Trafic normal sur l'ensemble de la ligne." : "Traffic normal"}
							},
				lines: [
							{type: "rers", line: "B", stations: "antony", destination: "A", label: "B", firstCellColor: "#7BA3DC"},
							{type: "traffic", line: ["rers", "B"], firstCellColor: "#7BA3DC", lineColor: "green"},
				  			{type: "metros", line: "4", stations: "denfert-rochereau", destination: "R", label: "4", firstCellColor: "#BE418D"},
							{type: "traffic", line: ["metros", "4"], firstCellColor: "#BE418D", lineColor: "green"}
						]
			}
},
{
	module: "MMM-NetworkScanner", // montre les devices sur le réseau WiFi
	position: "top_center",
	config: {
				devices: [
							{macAddress: "MAC_ADDRESS_1", name: "Hybrid", icon: "tablet"},
		               		{macAddress: "MAC_ADDRESS_2", name: "PC", icon: "laptop"},
							{macAddress: "MAC_ADDRESS_3", name: "Tel", icon: "mobile"},
							{macAddress: "MAC_ADDRESS_4", name: "RasPi", icon: "desktop"}
						],
				showUnknown: true,
				showOffline: true,
				showLastSeen: true,
				updateInterval: 60,
				sort: true
			}
},
{
	module: "MMM-LICE", // taux de changes pour le USD (sinon faut compte payant)
	position: "top_right",
	config: { 
				accessKey: "API_KEY", //nécessite inscription pour clé API
				source: "USD", // USD seulement, sinon faut compte payant
				symbols: "EUR,USD,GBP,AUD,CAD,CNY",
				useHeader: false,
				header: "Exchange rate",
				maxWidth: "300px"
			}
},
{
	module: "MMM-MysqlQuery", // requête SELECT sur une database
	position: "top_left",
	config: {
				connection: { // infos de connection à la BDD par MySQL
								host: "HOST",
								port: 3306,
								user: "USER_ID",
								password: "MDP",
								database: "DATABASE_NAME"
							},
				query: `SELECT Name, Description, QuantityInStock, SalePrice
						FROM meal
						ORDER BY Name`,
						intervalSeconds: 600,
				emptyMessage: "No meals",
				columns: [
							{name: "Name", title: "Name", cssClass: "left", nullValue: "???", displayType: "text"},
							{name: "SalePrice", title: "Price", cssClass: "right", precision: 2, suffix: "€", thousandsSeparator: " ", displayType: "text", nullValue: "???"},
 							{name: "QuantityInStock", title: "Stock",  cssClass: "right", displayType: "text", nullValue: "???"},
							{name: "Description", title: "Description", cssClass: "left", displayType: "text", nullValue: "???"}
						]
			}
},
{
	module: "MMM-iHaveBeenThere", // carte avec mes voyages
	position: "middle_center",
	config: {
				title: "MES VOYAGES",
				AnimationEnabled: true,
				pauseDuration: 3.0,
				animationDuration: 10.0,
				zoomLevel: 2.2, //de côte Ouest USA à Chine 
				zoomLongitude: -2.0, //Europe centrale
				zoomLatitude: 46.0, //Europe centrale
				home_lat: 48.856614,
				home_lon: 2.352222,
				home_desc: "Paris",
				away_lat: [
							41.385064,
							39.9042,
							30.04442,
							18.735693,
							55.953252,
							50.718412,
							46.204391,
							51.507351,
							40.416775,
							43.738418,
							40.741895,
							50.075538,
							46.813878,
							41.902242,
							37.77493,
							31.23039,
							43.604652,
							37.270702
						],
				away_lon: [
							2.173403,
							116.407396,
							31.235712,
							-70.162651,
							-3.188267,
							-3.533899,
							6.143158,
							-0.127758,
							-3.70379,
							7.424616,
							-73.989308,
							14.4378,
							-71.207981,
							12.456859,
							-122.419416,
							121.473702,
							1.444209,
							-76.707457
						],
				away_desc: [
								"Barcelona",
								"Beijing",
								"Cairo",
								"Dominican Republic",
								"Edinburgh",
								"Exeter",
								"Geneva",
								"London",
								"Madrid",
								"Monaco",
								"New York",
								"Prague",
								"Quebec",
								"Rome",
								"San Francisco",
								"Shanghai",
								"Toulouse",
								"Williamsburg"
							],
				trip: [ // si false = compte comme aller-retour, si true = compte comme étape suivant la destination précédente
						false,
						false,
						false,
						false
					],
				colorCountries: "#BDBDBD",
				colorCountryBorders: "#000000",
				colorTargetPoints: "#FFFFFF",
				colorPlane: "#FF0000",
				colorPlaneLine: "#FF5E5E",
				colorLegendBorder: "#FFFFFF",
				colorLegendFont: "#FFFFFF",
				colorTitleFont: "#0008FF"
			}
}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
