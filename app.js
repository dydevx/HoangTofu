"use strict";

const DESKTOP_MENU_PAGE_SIZE = 12;
const MOBILE_MENU_PAGE_SIZE = 8;

const SOURCE_IMAGES = {
  lososTeriyaki: "https://statics.pancake.vn/web-media-262/20/4f/de/4f/78e9ab6e3a1440dd752f1b5ee1102a948e7bf0466edc7e62e5e10d43-w:1024-h:1024-l:90498-t:image/jpeg.jpg",
  hovadzieNambo: "https://statics.pancake.vn/web-media-262/15/d7/f7/55/73b2a89220ec1029346e5a8fd5c520014c36b99c89504489785582cc-w:1024-h:1024-l:78469-t:image/jpeg.jpg",
  bunCha: "https://statics.pancake.vn/web-media-262/8b/ac/da/ad/e844651f3a641f9351f3166502df4f241a349d8f49fb191fa709b217-w:768-h:1024-l:157535-t:image/jpeg.jpg",
  banhCuon: "https://statics.pancake.vn/web-media-262/93/65/c1/02/7592d5e4b2d57d08f55dd8b5c43927d0d6ed868d97ca71c8119ecf14-w:945-h:1260-l:166628-t:image/jpeg.png",
  pho: "https://statics.pancake.vn/web-media-262/a7/bd/63/33/8f1cfc0cd3e9d9b44a36dfdc2096ae920bae4413e5cc49928a734966-w:369-h:799-l:108165-t:image/png.png",
  bunPolievka: "https://statics.pancake.vn/web-media-262/65/34/08/d9/d38d2ebca9b3eb3446c4404e99d457ccc6c370d700db8f847aef10b9-w:800-h:600-l:58137-t:image/webp.webp",
  korejska: "https://statics.pancake.vn/web-media-262/33/85/2a/ad/d315e2f858ceccfd067809d29aaa0c4e1a1107130cb68223e6aabcef-w:420-h:235-l:94450-t:image/png.jpeg",
  tomYum: "https://statics.pancake.vn/web-media-262/8b/87/3c/98/6ad515f1e3d240ca79d0c193983e60f044afc4c85834b59c66b181b7-w:800-h:800-l:297750-t:image/png.png",
  miso: "https://statics.pancake.vn/web-media-262/8c/93/20/4c/6c45c8e730618bac74d29580b1d40d6f769b7051f9b1923c832b09b9-w:800-h:800-l:263355-t:image/png.png",
  salat: "https://statics.pancake.vn/web-media-262/5b/4a/ae/2d/60d6f0ed8c2e627bea9579ccbd2bdb285fb9bfa8e7e589dc6dab6d0c-w:533-h:800-l:64865-t:image/webp.webp",
  ryza: "https://statics.pancake.vn/web-media-262/d4/be/5c/f4/857f889d965da52e7e9509d3e16d56ebe2cc03f60aca6dcb2c4362c9-w:1260-h:1260-l:705343-t:image/png.jpeg",
  rezance: "https://statics.pancake.vn/web-media-262/42/88/d9/9c/73ff276b16e77587af408497ebb04aab99058a7ffcf8324f2f2de859-w:1204-h:1260-l:1691506-t:image/png.jpeg",
  hranolky: "https://statics.pancake.vn/web-media-262/75/48/0e/37/30c7829c56fb044d09e0c17adaacf25cbed2d260eab768dc6ddca019-w:1260-h:878-l:49219-t:image/jpeg.jpeg",
  kuracie: "https://statics.pancake.vn/web-media-262/91/a0/4f/d2/ddc010f1a1358abfce3076b14a2e19981f4e972d029a5744b0165289-w:1260-h:945-l:2857237-t:image/png.jpeg",
  chrumkaveKura: "https://statics.pancake.vn/web-media-262/9a/07/56/23/c659172ca10890840b87ade3bed16a244f51756c6cea8f42555e67fb-w:1260-h:1260-l:937057-t:image/png.jpeg",
  kacica: "https://statics.pancake.vn/web-media-262/4b/6a/12/92/4fca4d3448b27f5b9c0f4ca55d6b2fd9dd4205b0c2833697182366b5-w:1260-h:1260-l:1237160-t:image/png.jpeg",
  krevety: "https://statics.pancake.vn/web-media-262/0c/57/52/3a/e9dae2c195430e9593cd2f2625452e1cc293686128d5fbab00b4d7be-w:1260-h:1260-l:1118514-t:image/png.jpeg",
  nemRan: "https://statics.pancake.vn/web-media-262/67/36/2f/7c/8f1c892074d964129aa1b21ad969ebdd27704321eab45799a44d4c53-w:1260-h:1260-l:699365-t:image/png.jpeg",
  tofuVeggie: "https://statics.pancake.vn/web-media-262/1b/10/96/ed/05bb092eb765a7b30ae37f37c29f896944e1855ac32db9a7933d13e2-w:840-h:840-l:750770-t:image/png.jpeg",
  sushiBowlLosos: "https://statics.pancake.vn/web-media-262/ee/66/d0/c5/1951c829a2bab9824b783fdf3aa75b428e4cc763c655e51762531630-w:1024-h:683-l:377711-t:image/png.jpg",
  sushiBowlTuna: "https://statics.pancake.vn/web-media-262/f0/2c/68/3f/7a3ce5d7229d83d16098927f352be98629af7f3d10a27ad05a2c4afb-w:1242-h:816-l:576616-t:image/png.png",
  sushiBowlKuracia: "https://statics.pancake.vn/web-media-262/96/75/35/af/9ccf29d17c3a69eacadb2d34fdd04fa447aa02e3a26aa188d01794a7-w:533-h:800-l:341467-t:image/webp.webp",
  sushiBowlLover: "https://statics.pancake.vn/web-media-262/86/4d/98/73/3b0c9ed0af7834afc67544ed10eff3c65a094b2fc4036c59d4720436-w:840-h:840-l:580613-t:image/png.jpeg",
  nigiriLosos: "https://statics.pancake.vn/web-media-262/98/47/eb/a9/66208fae03d31ee97b7f9b2aa700495f751ac3736ae9bee845be4694-w:840-h:614-l:26264-t:image/jpeg.jpeg",
  makiLosos: "https://statics.pancake.vn/web-media-262/f6/94/2e/db/7dd42f96994033f2677f0f948992db4f45ce41feccb2c981b055b97d-w:1260-h:840-l:1122654-t:image/png.jpeg",
  sushiRoll: "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  futomaki: "https://statics.pancake.vn/web-media-262/51/f8/93/ba/0fe6b80d3c5469d4384f666578179d21e6c681096053c047afe1044b-w:630-h:840-l:450347-t:image/png.jpeg",
  sushiSet: "https://statics.pancake.vn/web-media-262/1d/7c/2f/78/8036758b3dde3cfd38fda1ee538de54daec35f9b776d65563926f95f-w:1260-h:1246-l:797555-t:image/png.jpeg",
  tartare: "https://statics.pancake.vn/web-media-262/05/a8/d2/ac/f8e3b5f111b57ec4f517014696e7d348780d1c49f730ba0ff74cb341-w:840-h:708-l:186436-t:image/png.jpeg",
};

// Menu card images extracted from nha-hang-hoang-tofu.pke.
const PKE_MENU_IMAGES = {
  "alaska": "https://statics.pancake.vn/web-media-262/74/74/c8/44/7b9ff7a1804cb3cfa485fce0c41e04c6397d4a96c5dad350656e6cb3-w:774-h:800-l:52471-t:image/webp.webp",
  "alaska adventures": "https://statics.pancake.vn/web-media-262/0c/d3/39/8e/0fca59f53bf78f6bcc8abe526fb57c272057a02a3ec6f861a56b088c-w:1220-h:1404-l:128738-t:image/webp.webp",
  "avokado": "https://statics.pancake.vn/web-media-262/f6/94/2e/db/7dd42f96994033f2677f0f948992db4f45ce41feccb2c981b055b97d-w:1260-h:840-l:1122654-t:image/png.jpeg",
  "avokado maki": "https://statics.pancake.vn/web-media-262/92/dd/33/f0/5e37128ed877d0fa963a850d1dfbd98920ee86d9ba755ca70318e6af-w:1260-h:921-l:1517806-t:image/png.jpeg",
  "avokadonigiri": "https://statics.pancake.vn/web-media-262/f3/a9/5d/dc/9275bd743e8b9f7e42a243b3ffb16875e24a181df13232735a2f64f6-w:1260-h:921-l:482417-t:image/png.jpeg",
  "banh cuon bravcove grilovane": "https://statics.pancake.vn/web-media-262/19/3c/d9/46/261fe6dceaf23ad0a7b8721178a52b37cf65305b637e8b98e89f8953-w:768-h:1024-l:1137412-t:image/png.jpg",
  "banh cuon hovadzie": "https://statics.pancake.vn/web-media-262/93/65/c1/02/7592d5e4b2d57d08f55dd8b5c43927d0d6ed868d97ca71c8119ecf14-w:945-h:1260-l:166628-t:image/jpeg.png",
  "big ebi tempura": "https://statics.pancake.vn/web-media-262/0c/d3/39/8e/0fca59f53bf78f6bcc8abe526fb57c272057a02a3ec6f861a56b088c-w:1220-h:1404-l:128738-t:image/webp.webp",
  "blazing love": "https://statics.pancake.vn/web-media-262/c1/5f/1b/5d/e75abe94ba1de0c67d18557063c0d334dced25afb8bf2bf6bd50a692-w:600-h:800-l:298377-t:image/webp.webp",
  "boston": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "bun cha": "https://statics.pancake.vn/web-media-262/e7/53/65/67/abf8471536d46a1b0e875b8fc14fc4e4c204fc5837f41fc82d1aa841-w:800-h:800-l:645103-t:image/png.png",
  "bun cha bravcove": "https://statics.pancake.vn/web-media-262/8b/ac/da/ad/e844651f3a641f9351f3166502df4f241a349d8f49fb191fa709b217-w:768-h:1024-l:157535-t:image/jpeg.jpg",
  "bun polievka": "https://statics.pancake.vn/web-media-262/65/34/08/d9/d38d2ebca9b3eb3446c4404e99d457ccc6c370d700db8f847aef10b9-w:800-h:600-l:58137-t:image/webp.webp",
  "california": "https://statics.pancake.vn/web-media-262/70/c1/48/f6/5b33d91516de7f77b6fbae5b67eea8cfc95d90641bb4f31164f5d965-w:1260-h:838-l:702837-t:image/png.jpeg",
  "cerstve jarne zavitky": "https://statics.pancake.vn/web-media-262/49/68/aa/3d/ad2d61cca32ffbdc82113f87812dcd6d64f0648e030f99b736219de1-w:800-h:800-l:84129-t:image/webp.webp",
  "chrumkava kacica": "https://statics.pancake.vn/web-media-262/4b/6a/12/92/4fca4d3448b27f5b9c0f4ca55d6b2fd9dd4205b0c2833697182366b5-w:1260-h:1260-l:1237160-t:image/png.jpeg",
  "chrumkave kura": "https://statics.pancake.vn/web-media-262/9a/07/56/23/c659172ca10890840b87ade3bed16a244f51756c6cea8f42555e67fb-w:1260-h:1260-l:937057-t:image/png.jpeg",
  "crispy rocket": "https://statics.pancake.vn/web-media-262/6f/e9/c0/c0/c91a1c1c5dc90574949aefca3cf567c7cf9d11348e04567a1700a317-w:637-h:800-l:66297-t:image/webp.webp",
  "dragon fire": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "ebi nigiri": "https://statics.pancake.vn/web-media-262/21/51/c9/75/a86d67c31b019fdcff3afda9958d4808fef4f15f855c834269dc7daf-w:1260-h:708-l:656128-t:image/png.jpeg",
  "ebi tempura": "https://statics.pancake.vn/web-media-262/0c/57/52/3a/e9dae2c195430e9593cd2f2625452e1cc293686128d5fbab00b4d7be-w:1260-h:1260-l:1118514-t:image/png.jpeg",
  "fancy veggie": "https://statics.pancake.vn/web-media-262/9f/f5/b5/cc/2b44eaf028aefa33cebf6610fa5df1f7cb0792aa17f849f24c5aa642-w:600-h:800-l:780704-t:image/png.png",
  "fish": "https://statics.pancake.vn/web-media-262/51/f8/93/ba/0fe6b80d3c5469d4384f666578179d21e6c681096053c047afe1044b-w:630-h:840-l:450347-t:image/png.jpeg",
  "fukuyama": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "hanoi veggie": "https://statics.pancake.vn/web-media-262/9f/f5/b5/cc/2b44eaf028aefa33cebf6610fa5df1f7cb0792aa17f849f24c5aa642-w:600-h:800-l:780704-t:image/png.png",
  "horuca panvica": "https://statics.pancake.vn/web-media-262/c2/74/bf/66/1d0cf0e5b9296833132323bc1c3ef8b5182f003565a80287e9515c99-w:800-h:800-l:371329-t:image/webp.webp",
  "hovadzie nambo": "https://statics.pancake.vn/web-media-262/15/d7/f7/55/73b2a89220ec1029346e5a8fd5c520014c36b99c89504489785582cc-w:1024-h:1024-l:78469-t:image/jpeg.jpg",
  "hranolky": "https://statics.pancake.vn/web-media-262/75/48/0e/37/30c7829c56fb044d09e0c17adaacf25cbed2d260eab768dc6ddca019-w:1260-h:878-l:49219-t:image/jpeg.jpeg",
  "korejska polievka": "https://statics.pancake.vn/web-media-262/33/85/2a/ad/d315e2f858ceccfd067809d29aaa0c4e1a1107130cb68223e6aabcef-w:420-h:235-l:94450-t:image/png.jpeg",
  "krevety": "https://statics.pancake.vn/web-media-262/0c/57/52/3a/e9dae2c195430e9593cd2f2625452e1cc293686128d5fbab00b4d7be-w:1260-h:1260-l:1118514-t:image/png.jpeg",
  "krevety maki": "https://statics.pancake.vn/web-media-262/36/67/d2/02/41e3370a9331f223eadec0cd8fe8f0861894514fe558c7b71e047d65-w:1260-h:921-l:1516171-t:image/png.jpeg",
  "krevety tempura": "https://statics.pancake.vn/web-media-262/22/d7/3a/a1/6f1065311cb85c9bf9a687a7a83820a4df94f938800a89e064c22f8f-w:840-h:840-l:559687-t:image/png.jpeg",
  "krevety tempura maki": "https://statics.pancake.vn/web-media-262/21/a2/51/59/8cd97cbda40d1c9f5468d63803932c5b61394ce70a465c46d3f15fdc-w:840-h:840-l:426490-t:image/png.jpeg",
  "kukuricova": "https://statics.pancake.vn/web-media-262/29/e1/f2/0f/7c780f96b9fdc1bf0d128c11073bcd00c34273d7802b709ea08bba90-w:800-h:600-l:240297-t:image/webp.webp",
  "kuraci vyvar": "https://statics.pancake.vn/web-media-262/05/33/27/b2/569b54d2a02128f59d9ae1f479fa7680960b2f50cfef2afa0cf023ae-w:1259-h:1260-l:1306652-t:image/png.jpeg",
  "kuracia tempura": "https://statics.pancake.vn/web-media-262/96/75/35/af/9ccf29d17c3a69eacadb2d34fdd04fa447aa02e3a26aa188d01794a7-w:533-h:800-l:341467-t:image/webp.webp",
  "kuracie kusky": "https://statics.pancake.vn/web-media-262/91/a0/4f/d2/ddc010f1a1358abfce3076b14a2e19981f4e972d029a5744b0165289-w:1260-h:945-l:2857237-t:image/png.jpeg",
  "kuracie tempura": "https://statics.pancake.vn/web-media-262/49/85/da/a9/201919a296fc4f706f1caea9ee27961ffabcac7eefc492f4c6520692-w:1260-h:1260-l:829991-t:image/png.jpeg",
  "losos avokado maki": "https://statics.pancake.vn/web-media-262/2b/32/e2/f4/4b1253dc8f6cfcaf6e57f8f567590f9f41079cbfb95bb3e4730fd9ab-w:840-h:840-l:355819-t:image/png.jpeg",
  "losos maki": "https://statics.pancake.vn/web-media-262/7f/4f/38/da/2ca688ca71de03e327cbf8d32ef93099259759d46d3d88e6e2faa3be-w:840-h:557-l:40855-t:image/jpeg.png",
  "losos nigiri": "https://statics.pancake.vn/web-media-262/98/47/eb/a9/66208fae03d31ee97b7f9b2aa700495f751ac3736ae9bee845be4694-w:840-h:614-l:26264-t:image/jpeg.jpeg",
  "losos sushi bowl": "https://statics.pancake.vn/web-media-262/ee/66/d0/c5/1951c829a2bab9824b783fdf3aa75b428e4cc763c655e51762531630-w:1024-h:683-l:377711-t:image/png.jpg",
  "losos teriyaki": "https://statics.pancake.vn/web-media-262/20/4f/de/4f/78e9ab6e3a1440dd752f1b5ee1102a948e7bf0466edc7e62e5e10d43-w:1024-h:1024-l:90498-t:image/jpeg.jpg",
  "losos wakame salat": "https://statics.pancake.vn/web-media-262/b6/0c/a4/69/1d53ca1256eaf3d8336d4a973cfbb53d969c07e570a6a34a3e5c5a04-w:799-h:622-l:336965-t:image/png.png",
  "lover bowl": "https://statics.pancake.vn/web-media-262/86/4d/98/73/3b0c9ed0af7834afc67544ed10eff3c65a094b2fc4036c59d4720436-w:840-h:840-l:580613-t:image/png.jpeg",
  "maki set": "https://statics.pancake.vn/web-media-262/1d/7c/2f/78/8036758b3dde3cfd38fda1ee538de54daec35f9b776d65563926f95f-w:1260-h:1246-l:797555-t:image/png.jpeg",
  "mango maki": "https://statics.pancake.vn/web-media-262/b3/e9/f6/7f/f439074b2564781dcd7dc5186089438984cccf54d3dc6c89ab529484-w:1260-h:921-l:955878-t:image/png.jpeg",
  "maso na arasidoch": "https://statics.pancake.vn/web-media-262/3b/f0/5c/e3/2eb8ad4851f51438e30f103654f55ee645703bb21d39cf80d4be0290-w:1260-h:1260-l:999316-t:image/png.jpeg",
  "maso na kari": "https://statics.pancake.vn/web-media-262/e2/3d/2b/59/1ddae89720434a5dbcb20168f608cb26b4b8bbdc13d70709bf27b4b5-w:1260-h:1260-l:1152530-t:image/png.jpeg",
  "maso na kimchi": "https://statics.pancake.vn/web-media-262/02/3a/ed/ae/e666b9a7e0db1ca2127814782d2cbc88846b63c43b27b47f7655e985-w:800-h:800-l:71300-t:image/webp.webp",
  "maso na teriyaki": "https://statics.pancake.vn/web-media-262/46/db/a9/f6/3e0b4c12b5b0fa499b42a9fd8f2200e8a3b25b237ddfb987d7c46294-w:800-h:800-l:74816-t:image/webp.webp",
  "maso s cuketou a kesu": "https://statics.pancake.vn/web-media-262/ba/83/f7/af/99048e4014760016a629b1376a90c46988149ae588acfe6af983c2f4-w:1260-h:1260-l:1154043-t:image/png.jpeg",
  "maso s mangom": "https://statics.pancake.vn/web-media-262/7f/b4/bc/34/a5e2c2acdf2557ec4403e1233ee3c7ab7c6084027137920ddde16d25-w:800-h:800-l:396515-t:image/png.png",
  "maso so zeleninou": "https://statics.pancake.vn/web-media-262/ba/83/f7/af/99048e4014760016a629b1376a90c46988149ae588acfe6af983c2f4-w:1260-h:1260-l:1154043-t:image/png.jpeg",
  "miso losos": "https://statics.pancake.vn/web-media-262/58/9e/45/ea/0733b4666130f6a69d04b0edd71327439f6300978412f3797fb78cc4-w:369-h:799-l:153596-t:image/png.png",
  "miso polievka": "https://statics.pancake.vn/web-media-262/8c/93/20/4c/6c45c8e730618bac74d29580b1d40d6f769b7051f9b1923c832b09b9-w:800-h:800-l:263355-t:image/png.png",
  "nam bo": "https://statics.pancake.vn/web-media-262/55/ba/73/92/c85248bb8e7bd932654d18c3dd18fb620679b2172352e126c0f91e9b-w:800-h:800-l:552921-t:image/png.png",
  "opekane rezance": "https://statics.pancake.vn/web-media-262/99/8a/2a/2b/d323c0bd759367ddc393a248f99ee8cd9429f572a07911cd440d9be4-w:1260-h:840-l:1339867-t:image/png.webp",
  "opekane rezance priloha": "https://statics.pancake.vn/web-media-262/42/88/d9/9c/73ff276b16e77587af408497ebb04aab99058a7ffcf8324f2f2de859-w:1204-h:1260-l:1691506-t:image/png.jpeg",
  "ostrokysla": "https://statics.pancake.vn/web-media-262/be/ad/42/60/678c5ec4da5f6fadb10e1221ccc25e16ab06d9d5a71ae95b025f470d-w:800-h:800-l:160306-t:image/webp.webp",
  "pho polievka": "https://statics.pancake.vn/web-media-262/a7/bd/63/33/8f1cfc0cd3e9d9b44a36dfdc2096ae920bae4413e5cc49928a734966-w:369-h:799-l:108165-t:image/png.png",
  "phoenix fire": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "pikantne maso": "https://statics.pancake.vn/web-media-262/1a/98/f1/af/a9dd50959e1e85ad14a84daa2b8696613cb7a0871c4e9ec3ee414cbb-w:800-h:800-l:383635-t:image/webp.webp",
  "rainbow river": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "redkovka maki": "https://statics.pancake.vn/web-media-262/25/14/e7/2f/a209027bb4c189565bc454fb0b99f0c41d0714990f6fc8584c93b5ca-w:840-h:561-l:21046-t:image/jpeg.jpeg",
  "rezance a rizota": "https://statics.pancake.vn/web-media-262/ad/95/f0/64/8132a3e6775dfea4bbc81054e5b2db8e9b40d63981aace91a7faee0a-w:1260-h:1260-l:1020004-t:image/png.jpeg",
  "ryza priloha": "https://statics.pancake.vn/web-media-262/d4/be/5c/f4/857f889d965da52e7e9509d3e16d56ebe2cc03f60aca6dcb2c4362c9-w:1260-h:1260-l:705343-t:image/png.jpeg",
  "ryzove rezance": "https://statics.pancake.vn/web-media-262/74/1e/84/80/c9d5566c0475f191d105dbe3e56ec0eaa7a14b035e65824ca94dc13f-w:994-h:1260-l:54833-t:image/jpeg.jpeg",
  "ryzove rezance priloha": "https://statics.pancake.vn/web-media-262/df/89/ce/a2/843517a3ae8d174c90029b361158c0cc82ed2c4e2f1205748df22f3f-w:1260-h:1206-l:687974-t:image/png.jpeg",
  "ryzove rolky na pare 200gram": "https://statics.pancake.vn/web-media-262/b0/18/a6/cf/3a1b8e23e1fefc6f2593001fadda2d102cbcd4c944a41ca951109f99-w:650-h:450-l:477972-t:image/png.jpg",
  "saigon lover": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "sake fancy": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "salat": "https://statics.pancake.vn/web-media-262/5b/4a/ae/2d/60d6f0ed8c2e627bea9579ccbd2bdb285fb9bfa8e7e589dc6dab6d0c-w:533-h:800-l:64865-t:image/webp.webp",
  "salmon lover": "https://statics.pancake.vn/web-media-262/47/db/65/95/29f1d5824ebe5be7ced12bfe3074a6d857e014282f1d8774cd46d94c-w:799-h:742-l:77031-t:image/webp.webp",
  "salmon tempura": "https://statics.pancake.vn/web-media-262/80/e6/1f/de/652e4829ea9eacd4d41e282d3882ecd6f756de8b99b48e6cbe038b21-w:420-h:280-l:170179-t:image/png.jpeg",
  "samurai": "https://statics.pancake.vn/web-media-262/3e/05/49/b1/ab2014ee608ed47c3ab3bf844ee94c824ba02d0a4594e04d211817fa-w:840-h:840-l:670097-t:image/png.jpeg",
  "samurai tempura": "https://statics.pancake.vn/web-media-262/0c/d3/39/8e/0fca59f53bf78f6bcc8abe526fb57c272057a02a3ec6f861a56b088c-w:1220-h:1404-l:128738-t:image/webp.webp",
  "sizzling temptation": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "siroke rezance": "https://statics.pancake.vn/web-media-262/44/82/f4/89/4a1ca5b86e7e52e4e209e74e7432e0e36c8fc232fb2280fb93cdab16-w:1260-h:1260-l:973576-t:image/png.jpeg",
  "sklenene rezance": "https://statics.pancake.vn/web-media-262/43/ec/43/97/69e814eb4477b152eb99ade5cd54da487589ca4f0279d916d137a7ce-w:994-h:1260-l:61288-t:image/jpeg.jpeg",
  "so zavitkami nem ran 3ks": "https://statics.pancake.vn/web-media-262/67/36/2f/7c/8f1c892074d964129aa1b21ad969ebdd27704321eab45799a44d4c53-w:1260-h:1260-l:699365-t:image/png.jpeg",
  "sojove maso so sparglou": "https://statics.pancake.vn/web-media-262/f8/0b/87/48/ac84c1c0c46f0783fa285adc42df7ec25aaf6aaae438a3786c69240d-w:1260-h:1260-l:762720-t:image/png.jpeg",
  "sojove maso so zeleninou": "https://statics.pancake.vn/web-media-262/6d/36/6c/95/6bcf0bad3044c72de38bcfdbbe0f29188a27f2c03ccde72622a4012d-w:369-h:799-l:22871-t:image/webp.webp",
  "surimi krab maki": "https://statics.pancake.vn/web-media-262/e0/e6/48/bf/017ebaf7dae646e3174fa72d39c71928487ad1bfc189f89d6e6453a6-w:840-h:840-l:387627-t:image/png.jpeg",
  "surimi krab nigiri": "https://statics.pancake.vn/web-media-262/06/66/3a/0c/7cca51028e8cbb006e51d555012c896ecc29ab63d6ab204af18c19d0-w:840-h:840-l:237229-t:image/png.jpeg",
  "tofu hanoi": "https://statics.pancake.vn/web-media-262/fb/7e/6e/5e/dc3056e1142586a974811f715c3c0dc60be01582912e3e3be6b79209-w:800-h:800-l:56339-t:image/webp.webp",
  "tom yum 250ml": "https://statics.pancake.vn/web-media-262/8b/87/3c/98/6ad515f1e3d240ca79d0c193983e60f044afc4c85834b59c66b181b7-w:800-h:800-l:297750-t:image/png.png",
  "tom yum 600ml": "https://statics.pancake.vn/web-media-262/eb/d9/1d/b7/2d4b2f55dede2afbb2e045b159cc0ec8830d6680bb23a8a9a635b2e6-w:1600-h:1600-l:161214-t:image/webp.webp",
  "tuna salmon tartare": "https://statics.pancake.vn/web-media-262/05/a8/d2/ac/f8e3b5f111b57ec4f517014696e7d348780d1c49f730ba0ff74cb341-w:840-h:708-l:186436-t:image/png.jpeg",
  "tuna sushi bowl": "https://statics.pancake.vn/web-media-262/f0/2c/68/3f/7a3ce5d7229d83d16098927f352be98629af7f3d10a27ad05a2c4afb-w:1242-h:816-l:576616-t:image/png.png",
  "uhorka maki": "https://statics.pancake.vn/web-media-262/21/44/a4/57/690b6cce540e93741146e9aff7532aefadd049c9ea25577c4293600e-w:1260-h:1148-l:640238-t:image/png.jpeg",
  "udon": "https://statics.pancake.vn/web-media-262/57/d6/ca/28/a25ab3075e46fb86979aecb13e7500fe360ea38ed1f9452c965a39bf-w:1260-h:838-l:1181074-t:image/png.jpeg",
  "udon rezance": "https://statics.pancake.vn/web-media-262/fa/e0/c9/ea/b096ce5c08ff0b88a810cd2c354b8ff4db7dca7bca9d702ed4de045b-w:768-h:1024-l:67707-t:image/jpeg.jpg",
  "unagi": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "unagi iso": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "unagi maki": "https://statics.pancake.vn/web-media-262/5f/88/22/f9/a3f313fec90ceceb7cdf3e576b54fe00ccb2d2f43695f3aff98202f6-w:1260-h:1260-l:49494-t:image/jpeg.jpeg",
  "unagi nigiri": "https://statics.pancake.vn/web-media-262/03/47/5e/b3/d37293bd9d334cfc402942e3024ee019abaea4ed6d8db34da42813f6-w:1260-h:945-l:246592-t:image/png.jpeg",
  "veganska bun polievka": "https://statics.pancake.vn/web-media-262/65/34/08/d9/d38d2ebca9b3eb3446c4404e99d457ccc6c370d700db8f847aef10b9-w:800-h:600-l:58137-t:image/webp.webp",
  "veganska pho polievka": "https://statics.pancake.vn/web-media-262/a7/bd/63/33/8f1cfc0cd3e9d9b44a36dfdc2096ae920bae4413e5cc49928a734966-w:369-h:799-l:108165-t:image/png.png",
  "veganske arasidy": "https://statics.pancake.vn/web-media-262/e0/48/87/fc/ece31103f38be5467e34dfa2624da4bb224d6bf6d60f349700b03ea5-w:840-h:840-l:642105-t:image/png.jpeg",
  "veganske kari": "https://statics.pancake.vn/web-media-262/3b/f0/5c/e3/2eb8ad4851f51438e30f103654f55ee645703bb21d39cf80d4be0290-w:1260-h:1260-l:999316-t:image/png.jpeg",
  "veganske kungpao": "https://statics.pancake.vn/web-media-262/d9/2b/9e/af/2e90ffbf10ba30d6c51827d7e07fcf4b4f893f3d3de32d32ea0affc0-w:840-h:840-l:719991-t:image/png.jpeg",
  "veganske mango": "https://statics.pancake.vn/web-media-262/d7/16/9f/df/0bd0179f94a255afe0203e79d128f22ffe0cec0a90aedb06504beb8e-w:1260-h:1260-l:943625-t:image/png.jpeg",
  "veganske na kimchi": "https://statics.pancake.vn/web-media-262/2c/f3/71/0a/cc2a2283e506a6edd7a7968268e10c0c47e8b102cc2ff71a720ee85a-w:840-h:840-l:506867-t:image/png.jpeg",
  "veganske nam bo": "https://statics.pancake.vn/web-media-262/63/c8/e8/f5/00259360863f5a4f815e4cd4529f29f2c50102de64ddcf7569805c76-w:800-h:800-l:276048-t:image/webp.webp",
  "veganske platky so cuketou a kesu": "https://statics.pancake.vn/web-media-262/ba/83/f7/af/99048e4014760016a629b1376a90c46988149ae588acfe6af983c2f4-w:1260-h:1260-l:1154043-t:image/png.jpeg",
  "veganske teriyaki": "https://statics.pancake.vn/web-media-262/2c/f3/71/0a/cc2a2283e506a6edd7a7968268e10c0c47e8b102cc2ff71a720ee85a-w:840-h:840-l:506867-t:image/png.jpeg",
  "veggie avokado": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "veggie futomaki": "https://statics.pancake.vn/web-media-262/a3/ce/5c/bf/05dd0acac58ad152e4fba2bf7d64d4107ff3d1c8e7319bad8bdf4dcc-w:1260-h:921-l:860056-t:image/png.jpeg",
  "veggie lover": "https://statics.pancake.vn/web-media-262/32/0e/17/15/1abe83986788077099c4b869a3ced6b029eb440493fd431c34b45a98-w:799-h:781-l:88914-t:image/webp.webp",
  "veggie lover bowl": "https://statics.pancake.vn/web-media-262/1b/10/96/ed/05bb092eb765a7b30ae37f37c29f896944e1855ac32db9a7933d13e2-w:840-h:840-l:750770-t:image/png.jpeg",
  "veggie tempura": "https://statics.pancake.vn/web-media-262/95/27/ee/37/9ff41df057063a32eaeece98ce94b30778c00bfa7d0caee8de42825a-w:1260-h:921-l:1662833-t:image/png.jpeg",
  "vip box": "https://statics.pancake.vn/web-media-262/63/4f/ee/2a/a5fafb2d9e2affdef74b5f5a2a628fb7c3f8d548bb45d03ef3391b4c-w:1045-h:1260-l:448509-t:image/png.jpeg",
  "yeme": "https://statics.pancake.vn/web-media-262/9f/f5/b5/cc/2b44eaf028aefa33cebf6610fa5df1f7cb0792aa17f849f24c5aa642-w:600-h:800-l:780704-t:image/png.png",
};

const dishPhotos = [
  "Ảnh mới/image_1778655692314.jpg",
  "Ảnh mới/image_1778655692317.jpg",
  "Ảnh mới/image_1778655692319.jpg",
  "Ảnh mới/image_1778655692321.jpg",
  "Ảnh mới/image_1778655692322.jpg",
  "Ảnh mới/image_1778655692324.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGP2XIjNArWAejuqfaDrqBrzah-jEcKSvCiM7oHpkHkUBMneyj8PrDneOXjGv0v7XCm4M85-fxstg&oh=03_Q7cD5QGJO62hGZ0j5MhTBpYQ-PqX5wu310iqCadxdTIbZWRpdQ&oe=6A2B8A1B.jpg",
  "Ảnh mới/image_1778655692326.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGYpnret0YjZtPI_Zl-hVrZFHjIAIz2mj2c7UCfnEeOPoK5pbYeH_eJTTYE1PGLLI8ZPhnYkqiwIA&oh=03_Q7cD5QFhIi8v0_kSuQHppCDm4VXq7SzhTwgGm_gRX5on0jPsgA&oe=6A2B8EAB.jpg",
  "Ảnh mới/image_1778655692328.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQG8U8VYwtiXx5qi9kglskgjjXLxh6DB97nXw1D5H9v8Bgchy_z0BLl5-SXDAvuKP0e13C-xvnJK9w&oh=03_Q7cD5QG7k285FLsvsv085uVpCkR33cRqvcZx04VpSJxQEzGL3g&oe=6A2B605E.jpg",
  "Ảnh mới/image_1778655692330.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHOG22bLIhxgHyXut0uX7aaVYLltx-u4M4BTIs8agXGDP8hJwcBUW39s4WYtZzc0Vu2vo4k8zKzYg&oh=03_Q7cD5QE1jtVhpl8iV-edjZnUDDq6ur2A6hwxG_Y1f5rD3XiQUg&oe=6A2B6D19.jpg",
  "Ảnh mới/image_1778655692333.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHB87T6SN7-5upxXc0B4gVYag6nd57JVdNAQ7rQFh912ev_OqNmCbIMx9PXXFkk-Jg2mqpR6ljGYw&oh=03_Q7cD5QGYQHi1db1RXJX2ixJ3dX-Xo_V1dQ-UKTDgkKC5L-5-zQ&oe=6A2B8180.jpg",
  "Ảnh mới/image_1778655692335.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGeXA_jzG1bPA03DCNchCTqE2VfPPeROM0l-RCy0VWAc8UchWALuuEmzIz_CjmfgeO92sauTNeuKQ&oh=03_Q7cD5QHIsaDSmuICHgUgLmmLy6D18f4EDehfscN-j3WfQGWgKQ&oe=6A2B8B42.jpg",
  "Ảnh mới/image_1778655692338.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFAudGEspFP_tnkwc8Saaq7TbeDP7admw1I9aifIAMyac_OQPfv6gQq0MUP2zqViVkA9SqKeJKvNw&oh=03_Q7cD5QExVYBg-EzjNRi06Rs-erb66Cy1Lz5lvn1RqX494YotNg&oe=6A2B682C.jpg",
  "Ảnh mới/image_1778655692340.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGAvHWaQzima9s6l5NzqkTjLUWR7AaDuhzXUtp4CFy9jt9BMC6mE9LlB7XmNswGXCTkB36Q0gGMvA&oh=03_Q7cD5QHEH66Lk6DA8m65xFO1absh09yKTOEfPqWKfvJMIZFuSA&oe=6A2B8490.jpg",
  "Ảnh mới/image_1778655692342.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFtLSujfFzumfy-34GrjybQrR2uzJePqZOm-DnOAqKJZCSlmCeBZc_XCuWUGRmrpextoqsLwQE86Q&oh=03_Q7cD5QEWUMakFws-RkI3jdSQefZImd_YIiJdN5RUORBIjjfDSA&oe=6A2B70A1.jpg",
  "Ảnh mới/image_1778655692346.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQENecmx0-ZzIfYv4ezXB26y9INrIVCVAaHx0ERABx_A86un7aRA7i-MwgcqD77mQPLVIVqeK-FyOw&oh=03_Q7cD5QFTwiPqLcy5GRzgM8Ou77b-I25m_w5soYbTnCFO31OzEQ&oe=6A2B8BC1.jpg",
  "Ảnh mới/image_1778655692349.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGfuuAZ_r4QUrEU6TOHB2nXue9cB7zFeRjcW-cIuZWslm27s_pcdbfT7f9zN3OlPY51-KVK_rIu-A&oh=03_Q7cD5QGkjR_YB-1eTr1nPu6PIGqNkbP6cGs-TS-Va7YEVN46qg&oe=6A2B6680.jpg",
  "Ảnh mới/image_1778655692351.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGPsx4irzd5DGeg6ODAMT1VVlL_ol3citroxpykcXxej_bm36cebM_HxzfdmpxV05zmMtJ0oh3fRA&oh=03_Q7cD5QGGtZsXtVOFcQ-psxRaqVFtJbZVQEll4_gza4LpJmqz5w&oe=6A2B703D.jpg",
  "Ảnh mới/image_1778655692355.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGS2eU835r7rud7N1hAb6eEUgvtLWb3w1CYsofsJ0UqcZvVEuBGHdrSeQaB-NaHqZrTUd4i_bUfXw&oh=03_Q7cD5QGKl8uKlqnwyB289MHOICK7b-2fHWPa4VqQTJz2sik1RQ&oe=6A2B8990.jpg",
  "Ảnh mới/image_1778655692356.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHYTet_Di0ekRYMBoI2Ganmuhm2J8WZrguQBulhdCriG1V72vyvBUl4ZNUbmOD4uy73bzD-WAyflw&oh=03_Q7cD5QGDZTqTiS2Eh_HzCT_mX73oRQUh7N0k7m5ExGNzcxiZkw&oe=6A2B805B.jpg",
  "Ảnh mới/image_1778655692359.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHmXfIqC31CDvHTzw3WG1KDvkS3471oT6HXgYfDO1XH1UlWnaCClC6AYYT_k_jxhlE6KVoI8Qx_SQ&oh=03_Q7cD5QEtJ3zayIczpEa7zdAFa3v1wT_5Va5hj3cvxFHrbY7tww&oe=6A2B6B55.jpg",
  "Ảnh mới/image_1778655692362.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGUkwKhTp54uHPsaKwUAkQGw8JBxH6KMm-nUNJKXX2PC4ImBzGHxox_3gNfhNQ07iLoU0HTpjZR7A&oh=03_Q7cD5QFxHgwT3ZVAklIllqvJxOgZcfDZEJBxAqAbiOBnAkPxEw&oe=6A2B6BBC.jpg",
  "Ảnh mới/image_1778655692365.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHZshvYEUfoi4HRBh1VWMVWENijgKSPq0Hm0tLIs6r3TIIuZdkOkt9YYOjNttCvDIEr7dhvDcGnWg&oh=03_Q7cD5QGsm70dg7HgA8ver4gvzmksW11xsL-KGcDFwNm_nY2a0w&oe=6A2B69E6.jpg",
  "Ảnh mới/image_1778655692366.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFRdKe4MmjsSyW41dXAIafAJjiYxk25VwoGZXScI4FgguawSNN3mKhCi52915lf9BFbE_tbo2V8oA&oh=03_Q7cD5QFDyDlTSXT5m0a0gsh3e8ihWFz9LPqGkF6YvRzZ-L0JQw&oe=6A2B8082.jpg",
  "Ảnh mới/image_1778655692368.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFp9A_XZQZkUg4kkC-DWV4cVi41UCKbKw5OL6YHFtaJdI8Q515pVTZQh6WxJmeEWKDKVBW3g_VRPA&oh=03_Q7cD5QEMYtLqGf8mh3TwQeNBxsosLz71DXqNYH4H8nzTbeb2Kg&oe=6A2B8402.jpg",
  "Ảnh mới/image_1778655692368.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGxfqtmpegx3YmOA2bRd-c_ddbnU6I68teKGXlRuB--Fhh6ODQGF9NLtisxXMkKTnTBBFN4xN-_Iw&oh=03_Q7cD5QHWXshKBl5_8MScsoVULSpqx2Uv8fKfLvtAlB-_xDO20g&oe=6A2B7465.jpg",
  "Ảnh mới/image_1778655692370.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFsb5vLUfO6WdhxxDnYiNZ9whoHQeISuW8Qa-Cycu-M_txYnKnESmNX6CEvMppHCU4612vVbJUSuA&oh=03_Q7cD5QHw9YfkpibSb0aRdNy9ymn8MezW2prqjL4d4llsQzN1cg&oe=6A2B8863.jpg",
  "Ảnh mới/image_1778655692371.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQEz6wXvLVBLmQZ8hhFvT4LmjCFCyu3VcG9KVnetM0SenoNoDoPgngKldUINQ2BnWsPl79pZ62DyYA&oh=03_Q7cD5QHrZ0ogVy01Nwhf7ng3AzeOeFPOnWEr1wX1qd6C7G8SRw&oe=6A2B84C6.jpg",
  "Ảnh mới/image_1778655692374.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQF3RHjY06ECSkPV615dSfiKZdoUmu-3RAKLLYzWRqikX8lTH4E21-SxHbNGiq-XPhSQCU8KTSIclg&oh=03_Q7cD5QEVozNsGL-OJvDxgj7N8pNa0DKfGrzgQD7fvA1mptfQDA&oe=6A2B7632.jpg",
  "Ảnh mới/image_1778655692376.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQEUi1kXB7jibldafd5DH0MHi-HdPcuHLRnc6KYAN8fanLH99Zq2frACUqDX6BY9wwh_UzVH9nv2Vg&oh=03_Q7cD5QFXF-Mh2dwmeVjCh4uKn27FWZkNQFfIkYkSPTUVRSUfzQ&oe=6A2B7008.jpg",
  "Ảnh mới/image_1778655692378.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHZlVZq-liVacfY9Fnk5QT-OnuaSm5PVnXsGQ4n5tTH5H1I4TRVJNJdX9EgFjApXseaVgIm_Xb0ig&oh=03_Q7cD5QGOiTYAiR0q8qPIu75Nit46576nmHCnYiDhgXN7kSThJw&oe=6A2B88DD.jpg",
  "Ảnh mới/image_1778655692379.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGUGbt6xlCz1DLzhzBg0jw0giNnoqlLrg42Ou4WCxWhpPN2_T2yq-2KnarwHKPyQBIgq3IWRLMPdA&oh=03_Q7cD5QGGoKzOTxmm6meNRH8nr3iRgNdT_IOmQNXTO-oWdJTZog&oe=6A2B76EB.jpg",
  "Ảnh mới/image_1778655692380.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHCWkVaiol-q48FhkP1IIn536zo949_j-D_KJUgbVDOwMdCLBwt8Sn_Hm_3NCBn0fNBI4G4fzkCbg&oh=03_Q7cD5QGBgD1-lTkWKC7x4Z_ub72Psqet4RqnZszP7dkLvFjPJg&oe=6A2B7FEB.jpg",
  "Ảnh mới/image_1778655692382.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQFERwQLe_yNFHDuqP9xUoiUX0NOo7smCS7uciF_lwiDIrMmHkjsEIKWSgbhIaFp7ALqcDbWPm-FIA&oh=03_Q7cD5QFGowfOXyVKidkiz39RNQVHBO1unMh8ZuFtk8F63f2UiQ&oe=6A2B7B40.jpg",
  "Ảnh mới/image_1778655692384.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGuNwNm_WrcEK68VZGdFO6YWr12ArGF-OUU3ypRUtTJZbXS0ZRE_pw7AmKWOKXNYdVcTcAv-ieHow&oh=03_Q7cD5QGm0otgVj1Q9aEeRJopod6NSbVW-4rDf7VHcMrxZWE6EQ&oe=6A2B6659.jpg",
  "Ảnh mới/image_1778655692386.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQEb8qyxwdAEtv5Nys567NQAIcrd3yjBmIMkjV4VN4194-sduEu0kvypQCV9q4QVhgQLMlYlW0700g&oh=03_Q7cD5QH7NqSi950BXtN-GQ78AZXYtT1AExTCbDraGaW9JYfyow&oe=6A2B90E6.jpg",
  "Ảnh mới/image_1778655692387.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGVOcs1qBp2vV_4DIVXmJEftw3-84UrrxaVcfzKR2MOuyn2ZqiIykVCdNNUzqWBRoZZXN65hrATyg&oh=03_Q7cD5QH5S5o631L01t1TK9X-utx-mQujfYAQQf8QE-YNVv5_RQ&oe=6A2B9185.jpg",
  "Ảnh mới/image_1778655692390.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQGl-kliypPPFT70FlU1l44ecufzxvW7oPn1N8smQOExZ45oE9ps4kBOXmmVZ1FLGBAHMNbiPvJHIw&oh=03_Q7cD5QEHuMHDj0n-Favw2-BD2prtff9xv6MLTco5TU4DRe8hDg&oe=6A2B6477.jpg",
  "Ảnh mới/image_1778655692393.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQF8Dr7XHqcG2wuttT2-1iiV0lH57eirlMOtdsfvBcOscwFI3VP-dXddi2MnAnDrZ_jrOp5UIwR6Rw&oh=03_Q7cD5QF0CspLXyHV63KIUO26Do1DqNaFr-N2vO2lHkpBLkLfnw&oe=6A2B893B.jpg",
  "Ảnh mới/image_1778655692396.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQHkErDOrFv4Miw-c3OMo6Iw49Q8ky-36VQw39BJ6XfpYqqYJTfOUzg3DptR7VPdcO6koiTw0qavqQ&oh=03_Q7cD5QEq-47fJyEV2_wyKClamgb9ZDSOMmUg56mOvVztgPcFdg&oe=6A2B741F.jpg",
  "Ảnh mới/image_1778655692398.fna&edm=AB0BvfgEAAAA&_nc_tpa=Q5bMBQEchauvb17qlfEDiB4sbFzIgqW_84UhVd2tkBv4qWOQSyk_93G0MJPFlsgv0EZe4qrZFr1wcgArkw&oh=03_Q7cD5QHLDUOte3asgp0wnDMaI4gR5flJ-bQGfxP6qDonjAhOxw&oe=6A2B8ACB.jpg",
];

const featuredItems = [
  featured("Losos teriyaki", "Ryby", 10.9, SOURCE_IMAGES.lososTeriyaki),
  featured("Hovädzie Nambo", "Rezance a ryža", 8.3, SOURCE_IMAGES.hovadzieNambo),
  featured("Bún Chả bravčové", "Rezance a ryža", 9.2, SOURCE_IMAGES.bunCha),
  featured("Bánh Cuốn hovädzie", "Vietnamské špeciality", 14.9, SOURCE_IMAGES.banhCuon),
];

const menuItems = [
  ...variants("Pho polievka", "Polievky", [["kuracie", 7.5], ["hovädzie", 7.9], ["kačacie", 8.9]]),
  ...variants("Bun polievky", "Polievky", [["kuracie", 7.5], ["hovädzie", 7.9], ["krevety", 8.9], ["kačacie", 8.9], ["rybacie", 9.9]]),
  item("Bun Bo Hue", "Polievky", 9.5),
  ...variants("Kórejské polievky", "Polievky", [["kuracie", 7.3], ["hovädzie", 7.9], ["krevety", 8.9], ["kačacie", 8.9]]),
  item("Ostrokyslá (200ml)", "Polievky", 2.2),
  item("Kukuricová (200ml)", "Polievky", 2.2),
  item("Kurací vývar (250ml)", "Polievky", 2.5),
  item("Miso (200ml)", "Polievky", 3.0),
  item("Miso losos (200ml)", "Polievky", 4.0),
  item("Tom Yum malý - kurací", "Polievky", 3.0),
  item("Tom Yum malý - krevetový", "Polievky", 3.5),
  item("Tom Yum malý - tofu", "Polievky", 3.0),
  item("Tom Yum veľký - kurací", "Polievky", 6.5),
  item("Tom Yum veľký - krevetový", "Polievky", 7.7),
  item("Tom Yum veľký - tofu", "Polievky", 6.5),

  item("Šalát vegan", "Šaláty", 6.5),
  item("Šalát kuracie", "Šaláty", 6.9),
  item("Šalát krevety", "Šaláty", 7.9),
  item("Wakame šalát", "Šaláty", 4.5),

  ...variants("Rezance a rizota", "Rezance a ryža", [["kuracie", 6.9], ["hovädzie", 7.5], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Nam Bo", "Rezance a ryža", [["kuracie", 7.8], ["hovädzie", 8.3], ["krevety", 8.9], ["kačacie", 9.3], ["so závitkami Nem Rán", 8.7]]),
  item("Bun Cha - bravčové", "Rezance a ryža", 9.2),
  item("Bun Cha - Lá Lốt", "Rezance a ryža", 9.2),

  ...variants("Mäso so zeleninou", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9]]),
  ...variants("Mäso so cuketou a kešu", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso na arašidoch", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso s mangom", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso na kari", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso so špargľou", "Mäso", [["kuracie", 6.5], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Mäso na teriyaki", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Pikantné mäso", "Mäso", [["kuracie", 6.3], ["hovädzie", 6.9], ["krevety", 7.9], ["kačacie", 8.9]]),
  ...variants("Horúca panvica", "Mäso", [["kuracie", 7.9], ["hovädzie", 8.9], ["krevety", 8.9], ["kačacie", 8.9], ["losos", 10.9]]),
  ...variants("Mäso na kimchi", "Mäso", [["kuracie", 5.9], ["hovädzie", 6.5], ["krevety", 7.5], ["kačacie", 8.9]]),

  item("Kuracie kúsky 200g", "Vyprážané", 6.5),
  item("Chrumkavé kura 200g", "Vyprážané", 7.0),
  item("Chrumkavá kačica 200g", "Vyprážané", 7.5),
  item("Krevety 5ks", "Vyprážané", 5.9),
  item("Syr hranolky 250g", "Vyprážané", 6.9),
  item("So závitkami Nem Rán 3ks", "Vyprážané", 4.9),
  item("Kuracie tempura 250g", "Vyprážané", 6.5),

  ...variants("Čerstvé jarné závitky", "Závitky", [["kuracie", 4.5], ["hovädzie", 5.0], ["krevety", 5.0], ["tofu", 4.5]]),

  ...variants("Vegánske pho polievky", "Vegánske", [["sójové kačacie", 8.5], ["tofu", 7.5]]),
  ...variants("Vegánske bun polievky", "Vegánske", [["sójové kačacie", 8.9], ["tofu", 7.3]]),
  ...variants("Vegánske rezance a rizota", "Vegánske", [["sójové kačacie", 8.5], ["tofu", 7.5]]),
  ...variants("Vegánske Nam Bo", "Vegánske", [["sójové kačacie", 8.5], ["tofu", 7.5]]),
  ...variants("Sójové mäso so zeleninou", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Veg. plátky so cuketou a kešu", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  item("Tofu Hanoi", "Vegánske", 6.9),
  ...variants("Vegánske Kungpao", "Vegánske", [["sójové kačacie", 7.9], ["tofu", 6.9]]),
  ...variants("Vegánske Mango", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Vegánske Kari", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Vegánske Arašidy", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Sójové mäso so špargľou", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Vegánske Teriyaki", "Vegánske", [["sójové kačacie", 7.5], ["tofu", 6.3]]),
  ...variants("Vegánske na kimchi", "Vegánske", [["sójové kačacie", 7.9], ["tofu", 6.9]]),

  item("Ryža 120g", "Prílohy", 1.8),
  item("Ryžové rezance 180g", "Prílohy", 2.7),
  item("Opekané rezance 180g", "Prílohy", 2.5),
  item("Hranolky 180g", "Prílohy", 2.0),

  ...variants("Maki 8ks", "Sushi", [["losos", 4.9], ["losos - avokádo", 4.9], ["tuna", 5.9], ["krevety", 4.9], ["krevety tempura", 5.0], ["surimi - krab", 4.0], ["unagi", 5.0], ["avokádo", 3.9], ["uhorka", 3.0], ["mango", 3.0], ["reďkovka", 3.0]]),
  ...variants("Nigiri 2ks", "Sushi", [["losos", 4.9], ["tuna", 5.5], ["unagi", 5.5], ["krevety", 4.9], ["avokádo", 3.9], ["surimi - krab", 3.9]]),
  item("Futomaki Fish 12ks", "Sushi", 12.9),
  item("Futomaki Krevety tempura 12ks", "Sushi", 12.9),
  item("Futomaki Krevety 12ks", "Sushi", 11.9),
  item("Futomaki Veggie 12ks", "Sushi", 10.9),
  item("Futomaki Samurai 12ks", "Sushi", 10.9),
  item("Salmon Tempura Big Roll 10ks", "Sushi", 12.9),
  item("Tuna Tempura Big Roll 10ks", "Sushi", 12.9),
  item("Big Ebi Tempura Big Roll 10ks", "Sushi", 11.9),
  item("Samurai Tempura Big Roll 10ks", "Sushi", 10.9),
  item("Veggie Tempura Big Roll 10ks", "Sushi", 10.9),
  item("Sashimi losos 5ks", "Sushi", 13.5),
  item("Sashimi tuna 5ks", "Sushi", 14.5),
  item("Sashimi mix 5ks", "Sushi", 15.5),
  item("ISO Alaska 8ks", "Sushi", 10.5),
  item("ISO Boston 8ks", "Sushi", 10.9),
  item("ISO California 8ks", "Sushi", 9.5),
  item("ISO Ebi Tempura 8ks", "Sushi", 10.5),
  item("ISO Fukuyama 8ks", "Sushi", 10.5),
  item("ISO Unagi 8ks", "Sushi", 11.5),
  item("ISO Veggie Avokádo 8ks", "Sushi", 9.9),
  item("Dragon Fire 8ks", "Sushi", 13.5),
  item("Phoenix Fire 8ks", "Sushi", 13.5),
  item("Avokádo Special Roll 8ks", "Sushi", 13.5),
  item("Sizzling Temptation 8ks", "Sushi", 12.5),
  item("Atula Ebi 8ks", "Sushi", 13.5),
  item("Sake Fancy 8ks", "Sushi", 12.5),
  item("Veggie Lover 8ks", "Sushi", 13.5),
  item("Unagi Special Roll 8ks", "Sushi", 13.5),
  item("Rainbow River 8ks", "Sushi", 12.5),
  item("Hanoi Veggie", "Sushi", 24.0),
  item("Salmon Lover", "Sushi", 13.5),
  item("Fancy Veggie", "Sushi", 18.5),
  item("Alaska Adventures", "Sushi", 21.0),
  item("Blazing Love", "Sushi", 28.5),
  item("Crispy Rocket", "Sushi", 29.0),
  item("Saigon Lover", "Sushi", 75.0),
  item("Tuna / Salmon Tartare", "Sushi", 11.9),

  item("Sushi bowl - Losos", "Sushi bowls", 12.9),
  item("Sushi bowl - Tuna", "Sushi bowls", 13.9),
  item("Sushi bowl - Ebi Tempura", "Sushi bowls", 13.9),
  item("Sushi bowl - Kuracia Tempura", "Sushi bowls", 10.9),
  item("Sushi bowl - Veggie Lover Bowl", "Sushi bowls", 12.9),
  item("Sushi bowl - Lover Bowl", "Sushi bowls", 14.9),

  item("Maki Set", "Sushi sety", 12.0),
  item("Yeme", "Sushi sety", 7.5),
  item("Vip Box", "Sushi sety", 11.5),
].map((entry) => ({
  ...entry,
  key: makeKey(entry.name, entry.category, entry.price),
}));

const els = {
  featuredGrid: document.querySelector("#featured-grid"),
  featuredCount: document.querySelector("#featured-count"),
  menuCount: document.querySelector("#menu-count"),
  menuList: document.querySelector("#menu-list"),
  menuPagination: document.querySelector("#menu-pagination"),
  categoryFilter: document.querySelector("#category-filter"),
  searchInput: document.querySelector("#search-input"),
  photoGallery: document.querySelector("#photo-gallery"),
  imageDialog: document.querySelector("#image-dialog"),
  dialogImage: document.querySelector("#dialog-image"),
  dialogClose: document.querySelector("#dialog-close"),
};

let activeCategory = "Všetko";
let menuPage = 1;
let menuPageSize = getMenuPageSize();

renderStaticSections();
renderCategoryFilter();
renderMenu();
bindEvents();

function item(name, category, price) {
  return { name, category, price };
}

function featured(name, category, price, image) {
  return { name, category, price, image, key: makeKey(name, category, price) };
}

function variants(base, category, options) {
  return options.map(([variantName, price]) => item(`${base} - ${variantName}`, category, price));
}

function makeKey(name, category, price) {
  return normalizeText(`${category}-${name}-${price}`).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function imageLookupKey(value) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function cleanDishKey(value) {
  return imageLookupKey(value)
    .replace(/\b(?:120g|180g|200g|250g|200gram|200ml|250ml|600ml|2ks|3ks|5ks|8ks|10ks|12ks)\b/g, " ")
    .replace(/\b(?:maly|velky)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pushCandidate(list, value) {
  const key = imageLookupKey(value);
  if (key && !list.includes(key)) list.push(key);
}

function menuImageCandidates(entry) {
  const rawName = String(entry.name);
  const name = imageLookupKey(rawName);
  const cleanName = cleanDishKey(rawName);
  const nameParts = rawName.split(" - ");
  const baseName = cleanDishKey(nameParts[0] || rawName);
  const variantName = cleanDishKey(nameParts.slice(1).join(" "));
  const category = imageLookupKey(entry.category);
  const candidates = [];

  pushCandidate(candidates, name);

  if (category === "prilohy") {
    if (cleanName === "ryza") pushCandidate(candidates, "ryza priloha");
    if (cleanName === "ryzove rezance") pushCandidate(candidates, "ryzove rezance priloha");
    if (cleanName === "opekane rezance") pushCandidate(candidates, "opekane rezance priloha");
  }

  if (name.startsWith("tom yum maly")) pushCandidate(candidates, "tom yum 250ml");
  if (name.startsWith("tom yum velky")) pushCandidate(candidates, "tom yum 600ml");
  if (cleanName === "bun bo hue") pushCandidate(candidates, "bun polievka");
  if (cleanName.includes("salat")) pushCandidate(candidates, "salat");
  if (cleanName === "syr hranolky") pushCandidate(candidates, "hranolky");
  if (baseName === "bun polievky") pushCandidate(candidates, "bun polievka");
  if (baseName === "korejske polievky") pushCandidate(candidates, "korejska polievka");
  if (baseName === "miso") pushCandidate(candidates, "miso polievka");
  if (baseName === "maso so cuketou a kesu") pushCandidate(candidates, "maso s cuketou a kesu");
  if (baseName === "veg platky so cuketou a kesu") pushCandidate(candidates, "veganske platky so cuketou a kesu");
  if (baseName === "veganske pho polievky") pushCandidate(candidates, "veganska pho polievka");
  if (baseName === "veganske bun polievky") pushCandidate(candidates, "veganska bun polievka");
  if (baseName === "veganske rezance a rizota") pushCandidate(candidates, "rezance a rizota");

  if (baseName === "maki" && variantName) {
    pushCandidate(candidates, `${variantName} maki`);
  }

  if (baseName === "nigiri" && variantName) {
    if (variantName === "krevety") pushCandidate(candidates, "ebi nigiri");
    if (variantName === "avokado") pushCandidate(candidates, "avokadonigiri");
    pushCandidate(candidates, `${variantName} nigiri`);
  }

  if (name.startsWith("futomaki ")) {
    const futomakiKind = cleanDishKey(rawName.replace(/^futomaki\s+/i, ""));
    if (futomakiKind === "fish") pushCandidate(candidates, "fish");
    if (futomakiKind === "veggie") pushCandidate(candidates, "veggie futomaki");
    if (futomakiKind === "samurai") pushCandidate(candidates, "samurai");
  }

  if (name.includes("big roll")) {
    pushCandidate(candidates, cleanDishKey(rawName.replace(/big roll/gi, "")));
  }

  if (name.startsWith("iso ")) {
    const isoKind = cleanDishKey(rawName.replace(/^iso\s+/i, ""));
    pushCandidate(candidates, isoKind);
    pushCandidate(candidates, `${isoKind} iso`);
  }

  if (name.includes("special roll")) {
    pushCandidate(candidates, cleanDishKey(rawName.replace(/special roll/gi, "")));
  }

  if (name.startsWith("sushi bowl")) {
    const bowlKind = cleanDishKey(rawName.replace(/^sushi bowl\s*-?\s*/i, ""));
    pushCandidate(candidates, `${bowlKind} sushi bowl`);
    pushCandidate(candidates, bowlKind);
  }

  pushCandidate(candidates, cleanName);
  pushCandidate(candidates, baseName);

  return candidates;
}

function pkeImageFor(entry) {
  for (const candidate of menuImageCandidates(entry)) {
    const image = PKE_MENU_IMAGES[candidate];
    if (image) return image;
  }
  return "";
}

function formatCurrency(value) {
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(Number(value) || 0);
}

function getMenuPageSize() {
  return window.matchMedia("(max-width: 560px)").matches ? MOBILE_MENU_PAGE_SIZE : DESKTOP_MENU_PAGE_SIZE;
}

function asset(path) {
  return encodeURI(path).replace(/#/g, "%23");
}

function renderStaticSections() {
  els.featuredCount.textContent = `${featuredItems.length} položiek`;
  els.featuredGrid.replaceChildren(
    ...featuredItems.map((entry) => {
      const card = document.createElement("article");
      card.className = "featured-card";

      const img = document.createElement("img");
      img.src = asset(entry.image);
      img.alt = entry.name;
      img.loading = "lazy";
      img.dataset.image = entry.image;

      const body = document.createElement("div");
      body.className = "featured-body";

      const title = document.createElement("h3");
      title.textContent = entry.name;

      const meta = document.createElement("div");
      meta.className = "featured-meta";
      meta.innerHTML = `<span>${entry.category}</span><strong class="price">${formatCurrency(entry.price)}</strong>`;

      body.append(title, meta);
      card.append(img, body);
      return card;
    })
  );

  els.photoGallery.replaceChildren(
    ...dishPhotos.map((path, index) => imageEl(path, `Foto jedla ${index + 1}`))
  );
}

function imageEl(path, alt) {
  const img = document.createElement("img");
  img.src = asset(path);
  img.alt = alt;
  img.loading = "lazy";
  img.dataset.image = path;
  return img;
}

function menuImageFor(entry) {
  const pkeImage = pkeImageFor(entry);
  if (pkeImage) return pkeImage;

  const text = normalizeText(`${entry.name} ${entry.category}`);

  if (text.includes("losos teriyaki")) return SOURCE_IMAGES.lososTeriyaki;
  if (text.includes("nam bo") || text.includes("nambo")) return SOURCE_IMAGES.hovadzieNambo;
  if (text.includes("bun cha")) return SOURCE_IMAGES.bunCha;
  if (text.includes("pho")) return SOURCE_IMAGES.pho;
  if (text.includes("bun poliev") || text.includes("bun bo hue")) return SOURCE_IMAGES.bunPolievka;
  if (text.includes("korej")) return SOURCE_IMAGES.korejska;
  if (text.includes("tom yum")) return SOURCE_IMAGES.tomYum;
  if (text.includes("miso")) return SOURCE_IMAGES.miso;
  if (text.includes("salat") || text.includes("wakame")) return SOURCE_IMAGES.salat;
  if (text.includes("ryza")) return SOURCE_IMAGES.ryza;
  if (text.includes("rezance")) return SOURCE_IMAGES.rezance;
  if (text.includes("hranolky")) return SOURCE_IMAGES.hranolky;
  if (text.includes("sushi bowl") && text.includes("tuna")) return SOURCE_IMAGES.sushiBowlTuna;
  if (text.includes("sushi bowl") && text.includes("kuracia")) return SOURCE_IMAGES.sushiBowlKuracia;
  if (text.includes("sushi bowl") && text.includes("veggie")) return SOURCE_IMAGES.tofuVeggie;
  if (text.includes("sushi bowl") && text.includes("lover")) return SOURCE_IMAGES.sushiBowlLover;
  if (text.includes("sushi bowl")) return SOURCE_IMAGES.sushiBowlLosos;
  if (text.includes("nigiri")) return SOURCE_IMAGES.nigiriLosos;
  if (text.includes("futomaki")) return SOURCE_IMAGES.futomaki;
  if (text.includes("maki")) return SOURCE_IMAGES.makiLosos;
  if (text.includes("set") || text.includes("lover") || text.includes("box")) return SOURCE_IMAGES.sushiSet;
  if (text.includes("tartare")) return SOURCE_IMAGES.tartare;
  if (text.includes("sushi")) return SOURCE_IMAGES.sushiRoll;
  if (text.includes("chrumkave kura")) return SOURCE_IMAGES.chrumkaveKura;
  if (text.includes("kacica")) return SOURCE_IMAGES.kacica;
  if (text.includes("krevety")) return SOURCE_IMAGES.krevety;
  if (text.includes("zavitkami") || text.includes("nem ran")) return SOURCE_IMAGES.nemRan;
  if (text.includes("kuracie") || text.includes("tempura")) return SOURCE_IMAGES.kuracie;
  if (text.includes("tofu") || text.includes("veg")) return SOURCE_IMAGES.tofuVeggie;
  if (text.includes("maso") || text.includes("hovadzie")) return SOURCE_IMAGES.hovadzieNambo;

  return SOURCE_IMAGES.banhCuon;
}

function renderCategoryFilter() {
  const categories = ["Všetko", ...new Set(menuItems.map((entry) => entry.category))];
  els.categoryFilter.replaceChildren(
    ...categories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = category;
      button.className = category === activeCategory ? "active" : "";
      button.dataset.category = category;
      return button;
    })
  );
}

function renderMenu() {
  const query = normalizeText(els.searchInput.value);
  const visibleItems = menuItems.filter((entry) => {
    const matchesCategory = activeCategory === "Všetko" || entry.category === activeCategory;
    const matchesSearch = !query || normalizeText(`${entry.name} ${entry.category}`).includes(query);
    return matchesCategory && matchesSearch;
  });

  menuPageSize = getMenuPageSize();
  const totalPages = Math.max(1, Math.ceil(visibleItems.length / menuPageSize));
  menuPage = Math.min(Math.max(menuPage, 1), totalPages);
  els.menuCount.textContent = visibleItems.length
    ? `${visibleItems.length} položiek · strana ${menuPage}/${totalPages}`
    : "0 položiek";

  if (!visibleItems.length) {
    const empty = document.createElement("div");
    empty.className = "cart-empty";
    empty.textContent = "Žiadna položka";
    els.menuList.replaceChildren(empty);
    els.menuPagination.replaceChildren();
    return;
  }

  const startIndex = (menuPage - 1) * menuPageSize;
  const pageItems = visibleItems.slice(startIndex, startIndex + menuPageSize);

  els.menuList.replaceChildren(
    ...pageItems.map((entry) => {
      const row = document.createElement("article");
      row.className = "menu-row";
      const imagePath = entry.image || menuImageFor(entry);

      const img = document.createElement("img");
      img.src = asset(imagePath);
      img.alt = entry.name;
      img.loading = "lazy";
      img.dataset.image = imagePath;

      const text = document.createElement("div");
      text.className = "menu-row-body";
      const title = document.createElement("h3");
      title.textContent = entry.name;
      const category = document.createElement("small");
      category.textContent = entry.category;
      text.append(title, category);

      const price = document.createElement("strong");
      price.className = "price";
      price.textContent = formatCurrency(entry.price);

      row.append(img, text, price);
      return row;
    })
  );

  renderMenuPagination(totalPages);
}

function renderMenuPagination(totalPages) {
  if (totalPages <= 1) {
    els.menuPagination.replaceChildren();
    return;
  }

  const nav = document.createElement("nav");
  nav.className = "menu-pagination";
  nav.setAttribute("aria-label", "Stránkovanie menu");

  nav.append(
    paginationButton("‹ Predošlá", menuPage - 1, menuPage === 1),
    ...paginationPages(totalPages),
    paginationButton("Ďalšia ›", menuPage + 1, menuPage === totalPages)
  );

  els.menuPagination.replaceChildren(nav);
}

function paginationButton(label, page, disabled = false, active = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.disabled = disabled;
  button.className = active ? "active" : "";
  button.dataset.menuPage = String(page);
  if (active) button.setAttribute("aria-current", "page");
  return button;
}

function paginationPages(totalPages) {
  const pages = [1, menuPage - 1, menuPage, menuPage + 1, totalPages]
    .filter((page) => page >= 1 && page <= totalPages)
    .filter((page, index, list) => list.indexOf(page) === index)
    .sort((a, b) => a - b);

  const controls = [];
  pages.forEach((page, index) => {
    const previous = pages[index - 1];
    if (previous && page - previous > 1) {
      const gap = document.createElement("span");
      gap.className = "pagination-gap";
      gap.textContent = "…";
      controls.push(gap);
    }
    controls.push(paginationButton(String(page), page, false, page === menuPage));
  });
  return controls;
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const image = event.target.closest("img[data-image]");
    if (image && els.imageDialog.showModal) {
      els.dialogImage.src = image.src;
      els.dialogImage.alt = image.alt;
      els.imageDialog.showModal();
    }
  });

  els.categoryFilter.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    menuPage = 1;
    renderCategoryFilter();
    renderMenu();
  });

  els.searchInput.addEventListener("input", () => {
    menuPage = 1;
    renderMenu();
  });

  els.menuPagination.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-menu-page]");
    if (!button || button.disabled) return;
    menuPage = Number.parseInt(button.dataset.menuPage, 10) || 1;
    renderMenu();
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  window.addEventListener("resize", debounce(() => {
    const nextPageSize = getMenuPageSize();
    if (nextPageSize === menuPageSize) return;
    menuPage = 1;
    menuPageSize = nextPageSize;
    renderMenu();
  }, 160));

  els.dialogClose.addEventListener("click", () => els.imageDialog.close());
  els.imageDialog.addEventListener("click", (event) => {
    if (event.target === els.imageDialog) els.imageDialog.close();
  });
}

function debounce(callback, wait) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), wait);
  };
}
