$(document).ready(function() {
    var maxRdmCel = 64;
    //Loading a random quote together with the page on first load
    // function to find random number
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    
    document.getElementById('quote-box').style.display = "none";
      document.getElementById('spinner').style.display = "block";

      //Fake loading the quote - This will display the quote after a second although than can be done more quickly
      setTimeout(() => {
        document.getElementById('spinner').style.display = "none";
        document.getElementById('quote-box').style.display = "block";
      

        const rdm = getRandomInt(maxRdmCel);
        document.getElementById("text").innerText = quote[rdm].quote;
        document.getElementById("author").innerText = quote[rdm].author;
      }, 1000); 
  
    //button --get a new quote!--
    document.getElementById("new-ans").addEventListener("click", () => {
      
      document.getElementById('quote-box').style.display = "none";
      document.getElementById('spinner').style.display = "block";

      //Fake loading the quote - This will display the quote after a second although than can be done more quickly
      setTimeout(() => {
        document.getElementById('spinner').style.display = "none";
        document.getElementById('quote-box').style.display = "block";
      

        const rdm = getRandomInt(maxRdmCel);
        document.getElementById("text").innerText = quote[rdm].quote;
        document.getElementById("author").innerText = quote[rdm].author;
      }, 500); 
  
      
      
    });

    

  });
  
  var quote = {
    1: {
      author: "NULL",
      quote:
        "গান গাই 🎶, তুমি কি করো ?"
    },
    2: {
      author: "NULL",
      quote:
        "গান শুনি 🎶, তুমি কি করো ?"
    },
    3: {
      author: "NULL",
      quote: "কিছু না। 😢😢😢"
    },
    4: {
      author: "NULL",
      quote:
        "ঢং করতে আসছো ? 😡"
    },
    5: {
      author: "NULL",
      quote:
        "ঘুম থেকে উঠলাম !"
    },
    6: {
      author: "NULL",
      quote:
        "স্পেশাল এগ ফ্রাই উইথ ফ্রেশ অনিওন অ্যান্ড ভার্জিন সী সল্ট অ্যান্ড শেফ স্পেশাল বয়েলড রাইছ খেলাম। (ভাত আর ডিম ভাজি)"
    },
    7: {
      author: "NULL",
      quote:
        "আমার সাথে কথা বলবা না প্লিজ "
    },
    8: {
      author: "NULL",
      quote:
        "শুয়ে আছি, তুমি ?"
    }
    ,
    9: {
      author: "NULL",
      quote:
        "ভাল্লাগে না !"
    }
    ,
    10: {
      author: "Mushfique Ahmed",
      quote:
        "বসে আছি, আবার কি ?"
    } ,
    11: {
      author: "Jenifa Jahan Charu",
      quote:
        "মুড়ি খাই"
    }

    //08 nov
    ,
    12: {
      author: "Aniket Prantor",
      quote:
        "converting oxygen into carbon dioxide"
    },
    13: {
      author: "NULL",
      quote:
        "অই আগেরটাই করি এখনো"
    },
    14: {
      author: "Sharmin Akter",
      quote:
        "পা নাড়াই"
    },
    15: {
      author: "Shahed Alam",
      quote:
        "গিটার বাজাই"
    },
    16: {
      author: "NULL",
      quote:
        "রহস্য করি 😏"
    },
    17: {
      author: "Khan Tajmin Sarna",
      quote:
        "খাই দাই ঘুমাই"
    },
    18: {
      author: "Mohi Uddin Chisty",
      quote:
        "কি এর জায়গায় কই হলে উত্তর ছিলো"
    },
    19: {
      author: "Ankur Chandra Das",
      quote:
        "ট্রেনের চাক্কায় হাওয়া দেই"
    },
    20: {
      author: "Ridita Islam",
      quote:
        "ডিম পাড়ি🙊"
    },
    21: {
      author: "Sadia Hossain",
      quote:
        "গরম ভাত খাই😑"
    },
    22: {
      author: "NULL",
      quote:
        "ঘর পোড়ার মধ্যে আলু পোড়া দেই"
    },
    23: {
      author: "Shohan Ahmed ",
      quote:
        "kiss u nah sorry kichu nah"
    }
    ,
    24: {
      author: "আকিয়া জাহান প্রমেকা",
      quote:
        "পা এর উপর ঠ্যাং তুলে বসে আছি😐"
    },
    25: {
      author: "আবদুর রহমান",
      quote:
        "Chulkassi"
    }
    ,
    26: {
      author: "আরিফুজ্জামান ইফাত",
      quote:
        "কি করা যায় তাই ভাবতেছি"
    },

    27: {
      author: "Mir Md Mahmodul Hossain",
      quote:
        "Chet kori 🙄"
    },
    28: {
      author: "Kazijul Islam Bhuiyan",
      quote:
        "মোবাইল হাতে কিন্তু এক পা আরেক পায়ের উপরে নাই কেনো সেটা নিয়ে খুব চিন্তায় আছি! 😣"
    },
    29: {
      author: "Md Rokonuzzaman Rifat ",
      quote:
        "খাই , দাই, কলকলাই।"
    },
    30: {
      author: "Nafees Imtiaz ",
      quote:
        "এইতো আপনার মেসেজের রিপ্লাই দিচ্ছি।"
    },
    31: {
      author: "Nafees Imtiaz ",
      quote:
        "এই যে আপনার সাথে কথা বলি।"
    },
    32: {
      author: "Nure Marzia Shaky",
      quote:
        "কুইচ্চার মত মোড়াই"
    },
    33: {
      author: "Nausaad Zaman Sa ad",
      quote:
        "উত্তর কি দেওয়া যায় ভাবতেছি।"
    },
    34: {
      author: "Jewel Hasan",
      quote:
        "পরে বলছি"
    },
    35: {
      author: "Lameem Tajwar",
      quote:
        "Eta Sheta"
    },
    36: {
      author: "Mostofa Nayem",
      quote:
        " মুড়ি খাই"
    }
    ,
    37: {
      author: "Mohammad Touhidul Islam",
      quote:
        "এইত ফেসবুক এ আজকাল কি ধরনের লেম পোস্ট হচ্ছে এটাই ভাবছি!"
    }
    ,
    38: {
      author: "null",
      quote:
        "জাবর কাটি"
    }
    ,
    39: {
      author: "Sumaiya Nasrin",
      quote:
        "তারা গুনি"
    }
    ,
    40: {
      author: "Sumaiya Nasrin",
      quote:
        "ঝিঁঝিঁ পোকার শব্দ শুনি। "
    }
    ,
    41: {
      author: "Sumaiya Nasrin",
      quote:
        "এই স্বাভাবিক প্রশ্নের অস্বাভাবিক উত্তর খুঁজি।"
    }
    ,
    42: {
      author: "Xunayed Mahin",
      quote:
        "চাপা কিরকিরাই"
    }
    ,
    43: {
      author: "null",
      quote:
        "ঝিমাই 💤😴"
    }
    ,
    44: {
      author: "Rashid Mahmud Nadim",
      quote:
        "Producing carbon dioxide"
    },
    45: {
      author: "null",
      quote:
        "সকাল বানানোর জন্য রাত্রি জাগি "
    },
    46: {
      author: "এনামুল হক নয়ন",
      quote:
        " রিক্সায় চড়ে আমেরিকা যাই।"
    },
    47: {
      author: "null",
      quote:
        "তোমার / আপনার মেসেজ এর জন্য অপেক্ষা করতেছিলাম"
    },
    48: {
      author: "Ainat Hossan Lovly",
      quote:
        "ঘুমাই "
    },
    49: {
      author: "Kamrul Hasan Shawon",
      quote:
        "শেষ করে জানাচ্ছি"
    },
    50: {
      author: "আমিনুল ইসলাম অপু",
      quote:
        "ভাবতেছি "
    },
    51: {
      author: "অপ্সরী মায়া",
      quote:
        "নাচি🙄তুই নাচবি আয়"
    },
    52: {
      author: "অপ্সরী মায়া",
      quote:
        "তেমন কিছুই না"
    },
    53: {
      author: "Rakib Ahmed",
      quote:
        "Alhamdulillah beche achi"
    },
    54: {
      author: "null",
      quote:
        "মিস করি"
    },
    55: {
      author: "null",
      quote:
        "কমু না"
    },
    56: {
      author: "SC Mondal",
      quote:
        "মানুষের আজাইরা প্রশ্নের উত্তর দেই :p"
    },
    57: {
      author: "Ujjal Chowdhury",
      quote:
        "পুরনো পাপের প্রায়শ্চিত্ত করি। 🐸"
    },
    58: {
      author: "Arafat Dayan",
      quote:
        "ভাল্লাগেনা"
    },
    59: {
      author: "Arafat Dayan",
      quote:
        "ভাল্লাগেনা কিছু করতে"
    },
    60: {
      author: "Arafat Dayan",
      quote:
        "ভাল্লাগেনা বাল ফেসবুক গুতাই"
    }
    ,
    61: {
      author: "Parinoush Afrin",
      quote:
        "নিশ্বাস নেই, যাতে মইর‍্যা না যাই"
    }
    ,
    62: {
      author: "Rahat Hasan Roylin",
      quote:
        "🌚🌚🌚"
    }
    ,
    63: {
      author: "NULL",
      quote:
         "চ্যাট করি"
    }
    ,
    64: {
      author: "মোঃ দ্বীন ইসলাম বাপ্পি",
      quote:
         "বলবো না আমার লজ্জা লাগে।।।।"
    }
    //08 nov
    
















  };
  