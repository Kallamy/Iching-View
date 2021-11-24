pairs = [  
                /*          céu                                   terra                            trovão                                             água                                  montanha                                                                madeira                       fogo                                 lago               */
  /* céu -----*/ ["céu", "céu", "Ch'ien - O criativo", "乾", 1],["terra", "céu", "T'ai - Paz", "泰", 11],["trovão", "céu", "Ta Chuang - O Poder do Grande", "大壯", 34],["água", "céu", "Hsu - A Espera", "需", 5],["montanha", "céu", "Ta Ch'u - O Poder de Domar do Grande", "大畜", 26],["madeira", "céu", "Hsiao Ch'u - O Poder de Domar do Pequeno", "	小畜", 9],["fogo", "céu", "Ta Yu - Grandes Posses", "大有", 14],["lago", "céu", "Kaui - Irromper", "夬", 43],
  /* terra ---*/ ["céu", "terra", "Pi - Estagnação", "否", 12],["terra", "terra", "K'un - O Receptivo", "坤", 2],["trovão", "terra", "Yu - Entusiasmo", "豫", 16],["água", "terra", "Pi - Manter-se Unido", "比", 8],["montanha", "terra", "Po - Desintegração", "剝", 23],["madeira", "terra", "Kuan - Contemplação", "觀", 20],["fogo", "terra", "Chin - Progresso", "晉", 35],["lago", "terra", "Ts'ui - Reunião", "萃", 45],
  /* trovão --*/ ["céu", "trovão", "Wu Wang - Inocência", "無妄", 25],["terra", "trovão", "Fu - Retorno", "	復", 24],["trovão", "trovão", "Chên - O Incitar", "震", 51],["água", "trovão", "Chun - Dificulade Inicial", "屯", 3],["montanha", "trovão", "I - As Bordas da Boca", "頤", 27],["madeira", "trovão", "I - Aumento", "益", 42],["fogo", "trovão", "Shih Ho - Morder", "噬嗑", 21],["lago", "trovão", "Sui - Seguir", "隨", 17],
  /* água ----*/ ["céu", "água", "Sung - Conflito", "訟", 6],["terra", "água", "Shih - O Exército", "師", 7],["trovão", "água", "Hsieh - Liberação", "解", 40],["água", "água", "K'an - O Abismal", "坎", 29],["montanha", "água", "Meng - Insensatez Juvenil", "蒙", 4],["madeira", "água", "Huan - Dispersão", "渙", 59],["fogo", "água", "Wei Chi - Antes da Conclusão", "未濟", 64],["lago", "água", "K'un - Opressão", "困", 47],
  /* montanha */ ["céu", "montanha", "Tun - A Retirada", "遯", 33],["terra", "montanha", "Ch'ien - Modéstia", "謙", 15],["trovão", "montanha", "Hsiao Kuo - A Preponderância do Pequeno", "小過", 62],["água", "montanha", "Chien - Obstrução", "蹇", 39],["montanha", "montanha", "Kên - A Quietude", "艮", 52],["madeira", "montanha", "Chien - Desenvolvimento", "漸", 53],["fogo", "montanha", "Lü - O Viajante", "旅", 56],["lago", "montanha", "Hsien - A Influência", "咸", 31],
  /* madeira -*/ ["céu", "madeira", "Kou - Vir ao Encontro", "姤", 44],["terra", "madeira", "Chêng - Ascensão", "升", 46],["trovão", "madeira", "Heng - Duração", "恆", 32],["água", "madeira", "Ching - O Poço", "井", 48],["montanha", "madeira", "Ku - Trabalho Sobre o que Se Deteriorou", "蠱", 18],["madeira", "madeira", "Sun - A Suavidade", "巽", 57],["fogo", "madeira", "Ting - O Caldeirão", "鼎", 50],["lago", "madeira", "Ta Kuo - A Preponderâcia do Grande", "大過", 28],
  /* fogo ----*/ ["céu", "fogo", "Tung Jên - Comunidade com os Homens", "同人", 13],["terra", "fogo", "Ming I - O Obscurecimento da Luz", "明夷", 36],["trovão", "fogo", "Fêng - Abundância", "豐", 55],["água", "fogo", "Chi Chi - Após a Conclusão", "既濟", 63],["montanha", "fogo", "Pi - Graciosidade", "賁", 22],["madeira", "fogo", "Chia Jen - A Família", "家人", 37],["fogo", "fogo", "Li - Aderir", "離", 30],["lago", "fogo", "Ko - Revolução", "革", 49],
  /* lago ----*/ ["céu", "lago", "Lu - A Conduta", "履", 10],["terra", "lago", "Lin - Aproximação", "臨", 19],["trovão", "lago", "Kuei Mei - A Jovem que se Casa", "歸妹", 54],["água", "lago", "Chieh - Limitação", "節", 60],["montanha", "lago", "Sun - Diminuição", "損", 41],["madeira", "lago", "Chung Fu - Verdade Interior", "中孚", 61],["fogo", "lago", "K'uei - Oposição", "睽", 38],["lago", "lago", "Tui - A Alegria", "兌", 58],
    
];

about = [
    {
        id: 11,
        sentence: "Peace. The small departs, The great approaches. <br> Good fortune. Success.",
        general: "Although times are harmonious you should not take them for granted. Try to understand why the harmony is there.", 
        love: "Your relationship should be treated to respect and kindness.",
        business: "Your current success should be analyzed to see how it came about.",
        personal: "Do a good deed.",
        overview: "T'ai relates to harmony. Everything should currently be going well. Dont take it for granted though. Examine all the aspects of your life and see how that harmony come about. Nothing is permanent of course, and this is no less so for T'ai. Enjoy the peace and harmony arround you. T'ai is a very auspicious hexagram and indicates a successful time of life." ,
    }, 
    {
        id: 29,
        sentence: "The abysmal repeated. <br> If you are sincere you have success in your heart and whatever you do scceeds.",
        general: "Only when you learn from danger you will triumph over it.",
        love: "Do not overreact to a situation. Make sure you do not allow an argument to become violent or depressive. Avoid emotional outbursts.", 
        business: "This is a potentially dangerous time for your business and a calm head will be need to help resolve the insues.", 
        personal: "Use  meditation to help find creative suluctions to your current problems.", 
        overview: "K'an is about danger and is not considered at all auspicious. Any situation that has potential to cause harm in any way must be carefully monitored in order to minimize demage. Resist panic and despair and look an verbal or written threats as a tool to sharpen your awareness. and prepare you for future success encounters. Do not surrender to feelings or helplessness but rather cultivate calmness and a positive outlook. You can acclimatize even to danger if you try.",
    },
    {
        id: 50,
        sentence: "The Caldron. <br> Supreme good fortune. <br> Success.",
        general: "The nourishment of the body, mind, and spirit is the key to a harmonious existence.",
        love: "Enjoying the harmonious apects of your relationship will help deepen the bounds between you and your partner.", 
        business: "Focus on business that will transform your affairs and make sure that you deal with everything in a sophisticated manner.", 
        personal: "Strengthen the bounds between you and those most important to you by hosting a meal of some sort.", 
        overview: "Ting is very much concerned with the provision of necessities for a comunity to exist harmoniously. Unlike Ching, witch deals with the basics, Ting is about the 'extras'. The sharing of a well-prepared meal is the ritual throughout the world for cultivation the bounds between people. As well as providing for the body Ting reminds you that the spiritual 'extras' should not be overlooked.",
    },
    {
        id: 59,
        sentence: "Dispersion. Success. <br> The king approachs his temple. <br> It furthers one to cross the great water. <br> Perseverance furthers.",
        general: "In order to advance you will need to eliminate causes of disharmony.",
        love: "barriers to your relationship can be removed by strengthening comunication.", 
        business: "persistent comunication is the key to progress within your business.", 
        personal: "You shoud move persistently towards unity and integration to aliviate your conserns.", 
        overview: "Huan is about removing barrriers that are currently stalling any progress. It will be necessary to use different means to help remove these blockages. It may not be possible to remove them all yourself. It may be that an outside mediator is required. A calm and persistent approach is required. This is a time when there is likely to be some demage caused by removal of the obstacles and if so, you must try and limit demage to areas not directly linked to the cause of the conflict. Comunication and cooperation are the keys to success.",
    },
  
]