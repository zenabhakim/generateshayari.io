function generate(){
  var quotes = {
    "-Rumi" : "Unki Mohabbat ke abhi nishaan baki hai,Naam lab par hai aur jaan baki hai .Kya hua agar dekh kar muh pher lete hai,Tasalli hai ki shakal ki pehchaan baki hai…",
    "Hum toot jaenge" :  `"Jab hum duniya se chale jayenge,
                          Apko har tare mai najar aayenge,
                          Hame dekh kar koi dua mang lena,
                          Hum har bar dua puri krne k liye tut jayenge."`,
    "-Rumi" : `"Tum Mere Ho Tumhara Koi Naam Na Le,
    In Bheegti Ankho Ka Koi Jaam Na Le
    Kuch Is Liye Bhi Maine Tumhara Hath Na Chora
    Ki Tum Gir Gaye To Tumhe Koi Thaam Na Le"`,
    "-Rumi" : `Kuch Log Pyar karte Hain Nibhane Ke Liye,
    Kuch Log Pyar Karte He BhuL jane ke Liye,
    Pyar karo To aisa karo ki Dono Tadpe,
    Ek Dusre Ke Paas Aane ke Liye`,
    "Rumi" : `"Tumhari Khamoshi Hamari Aadat Hai,
    In Dooriyon Mein Bhi Hamari Chahat Hai,
    Hamari Zindagi Agar Khoobsurat Hai,
    To Uski Wajah Bhi Aapki Muskurahat Hai"`

  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById('quote').innerHTML = quote;
  document.getElementById('author').innerHTML = author;

}

