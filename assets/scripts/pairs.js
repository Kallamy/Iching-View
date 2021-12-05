pairs = [  
                /*          céu                                   terra                            trovão                                             água                                  montanha                                                                madeira                       fogo                                 lago               */
  /* céu -----*/ ["céu", "céu", "Ch'ien - O criativo", "乾", 1],["terra", "céu", "T'ai - Paz", "泰", 11],["trovão", "céu", "Ta Chuang - O Poder do Grande", "大壯", 34],["água", "céu", "Hsu - A Espera", "需", 5],["montanha", "céu", "Ta Ch'u - O Poder de Domar do Grande", "大畜", 26],["madeira", "céu", "Hsiao Ch'u - O Poder de Domar do Pequeno", "	小畜", 9],["fogo", "céu", "Ta Yu - Grandes Posses", "大有", 14],["lago", "céu", "Kuai - Irromper", "夬", 43],
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
        id: 1,
        sentence: "The Creative works sublime success, <br> Furthering through perseverance.",
        general: "Persistent effort will help you realize your potential for achievement.",
        love: "You need to behave in a compassionate fashion towards your partner.",
        business: "Your ideas are sound but you need to take time to throughly plan out your strategy for making them work.",
        personal: "You need to take time out to relax and enjoy life more.",
        overview: "Ch'ien is pure yang energy. being pure yang it indicates a time when you are in a good position to achieve your objectives (whatever they may be). However, it is a time of potential as there is a lack of yin influence. So now is the time to make those plans and get ready to put them into action. Plan thoroughly and don't be impatient. Although Ch'ien is an auspicious hexagram, for your plans tom have a lasting effect and value your motives need to be virtuous. Be compassionate when you move forward. If you are arrogant you will only breed complacency or resentment in those around you." 
    },
    {
        id: 2,
        sentence: "The Receptive brings about sublime success, <br> Furthering through the perseverance of a mare. <br> If the superior man undertakes something and tries to lead, <br> He goes astray; <br> But if he follows, he finds guidance. <br> It is favorable to find friends in the west and south, <br> To forego friends in the east and north. <br> Quiet perseverance brings good fortune.",
        general: "Be receptive to words of advice or influencefrom those who are worthly of respect. This is a sign of strength, not weakness.",
        love: "Listen to advice of family and friends.",
        business: "Listen to advice of experts in your field and take stock of your business.",
        personal: "Take advice from a counselor you trust.",
        overview: "K'un is pure yin energy. K'un indicates a time that you will benefit from listening to the advice of others whom you respect and trust. Listening to their advice is the only way you will make progress at this time. If you make the mistake of disregarding the advice or not even bothering to listen in the first place then your plans will come to nothing. There will be no progress.",
    },
    {
        id: 3,
        sentence: "Difficulty at the Beginning works supreme success. <br> Furthering through perseverance. <br> Nothing should be undertaken. <br> It furthers one to appoint helpers.",
        general: "The first step towards true learning is acknowledging your inexperience.",
        love: "Provided your learn from the problem you have encountered you will get past the current stumbling block.",
        business: "Assess you business honestly and see how you could do better business.",
        personal: "If you have hit a setback then make adjustments to your lifestyle and the setback will only be temporary.",
        overview: "Chun is a reminder that although problems may be encountered they are often only brief - just like a thunderstorm. And like the land that benefits from the extra rain you too can benefit provided you learn from what has happened. Once any obstacle has been surmounted then your project will have the chance to thrive. But you need to be wary of reckless action. Recognize misleading and corrupt influences and forge alliances with those that are trustworthy. You are most at risk if you let your ignorance blind you to how much you have to learn."
    },
    {
        id: 4,
        sentence: "Youthful Folly has success. <br> It is not I who seek the young fool; The young fool seeks me. <br> At the first oracle I inform him. <br> If he asks two or three times it is importunity. <br> If he importunes, I give him no information. <br> Perseverance furthers.",
        general: "Patience and kindness are the keys to learning and teaching.",
        love: "Let go of any childhood you have about relationships.",
        business: "Being thoughtful will help strengthen new bussines ideas or procedures.",
        personal: "Remember the pleasure of childhood and youth and imitate it. You may need to realse any bad habits from that time.", 
        overview: "Meng builds on the theme of inexperience seen in hexagram 3 (Chun). It suggests that youth (like the flowing stream) has a long way to go before it becomes a mighty river. Meng is about teaching, learning and knowledge. Ignorance should not be punished, rather it should be replaced with knowledge. When the learning is fun the student will learn more. It is a reminder that a teacher should be a mentor, setting the scene for the way the student will behave in adulthood."
    },
    {
        id: 5,
        sentence: "Waiting. <br> If you are sincere, You have light and success. <br> Perseverance brings good fortune. <br> It furthers one to cross the great water.",
        general: "Do not doubt that the wait is necessary.",
        love: "If you are in an existing relationship it will enter a happier time, or if single, your relationship will come in due time.",
        business: "Start your business or continue it if already started, and know that you will succeed.", 
        personal: "Keep your life in perspective and let some of those worries go.",
        overview: "Hsu relates to patience and waiting. It is a warning not be hasty and take action that you may later regret, rather you should bide your time and prepare optimally for the changes that are coming. Hone your plans and strategies. Hsu reminds us that periods of waiting are a necessary part of life and that time is not wasted when you are waiting with the confident knowledge that sooner or later the drought will end."
    },
    {
        id: 6,
        sentence: "Conflict. You are sincere And are being obstructed. <br> A cautious halt halfway brings good fortune. <br> Going through to the end brings good fortune. <br> It furthers one to see the grat man. <br> It does not further one to cross the great water.",
        general: "Antagonism and hostility will increase with the space we create between ourselves.",
        love: "Compassion shold be used to heal ane rifts within your relationship. Listen very carefully to anything your partner has to say.",
        personal: "Become more flexible in your viewpoint. Face you fears.",
        overview: "Sung relates to conflict. Usually with those around us but often within ourselves. It talks of the need to resolve these conflicts. Iedntifying self-righteousness within and dealing with fears and confusion they indicate is paramount. This will prevent escalation of hostilities."
    },
    {
        id: 7,
        sentence: "The Army. The army needs perseverance And a strong man. <br> Good Fortune without blame.",
        general: "Trust is the key to the leadership.",
        love: "Conflicted can be avoided by using your integrity.",
        business: "Staying honest and fair will help gain the respect of those that work for you.",
        personal: "Dicipline and honesty should be incorporated into your approach to life.",
        overview: "Shih relates to dicipline and integrity within all that we do. The IChing likens Shih to an army. A country without an army is vulnerable. A country with an army is still vulnerable if it is undiciplined and poorly led. Mutual rather than personal benefit should be the rule."
    },
    {
        id: 8,
        sentence: "holding Together (Union) brings good fortune. <br> Inquire of the oracle once again <br> Whether you possess sublimity, constancy and perseverance: <br> Then there is no blame. <br> Those who are uncertain gradually join. Whoever come too late Meets with misfortune.",
        general: "A community bound by goodwill is the most potent force for powerful positive change there is.",
        love: "Use goodwill and trust to achieve unity within your relationship.",
        business: "Streghen networks within your business and ties with networks your businnes is a part of.",
        personal: "Form or streghen ties with family and friends.",
        overview: "Pi relates to the need for unity to accomplish positive change. Relationships built on trust and goodwill should be formed and maintained for the benefit of all - not just for personal gain. This applies to not only family and friends but the community around you in general and your business community too."
    },
    {
        id: 9,
        sentence: "The Timing Power of the Small has success. <br> Dense clouds, no rain from our western region.",
        general: "When great changes are not possible then small changes should be undertaken.",
        love: "Develop your communication skills within your relationship and make sure you have fun.",
        business: "Assess your business to see if there are any small matters that need to be dealt with.",
        personal: "Developing your skills and strengths should be your main focus.",
        overview: "Hsiao Ch'u relates to the need to pay attention to detail. It indicates that this is not a time to undertake big changes within life or business but rather to deal with the smaller matters that may need attention. Examine your own attitudes and those of the people around you to see how things may be improved on a smaller scale."
    },
    {
        id: 10,
        sentence: "Treading. <br> Treading upon the tail of the tiger. <br> It does not bite the man. Success.",
        general: "A successful journey can be assured if one careful step at atime is taken.",
        love: "Goodwill is the key to solving any relationship issues.",
        business: "Achieving success within business is the best accomplished treating others with courtesy and respect.",
        personal: "Focus on ridding yourself of any feelings of envy or jealousy.",
        overview: "Lu relates to the need to develop your social skills and to make sure that they are sincere and not insincere. It indicates a need to make sure that jealousy ar envy are not present within your life and if they are, to take steps to resolve them. Lu is all about inequality and the need to avoid it."
    },
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
        id: 12,
        sentence: "Standstill. <br> Evil people do not further The perseverance of the superior man. <br> The great departs; The small approaches.",
        general: "Although this is a time of adversity you should remember that all things change and there is always hope.",
        love: "A lover or potential lover may not be what they seem. Beware of falling in love.", 
        business: "New business ventures may be too good to be true. Examine them carefully.",
        personal: "Strengthen your moral and ethical senses. Don't be led astray.",
        overview: "Pi relates to a time of stagnation and to the fragility of life. If the foundations are weak or unstable then a building will eventually fall. This analogy should also be applied to people. Pi often indicates a time when arrogant individuals come to power or occupy positions of authority. Their arrogance will eventually be their downfall. Beware of individuals trying to subvert your sense of ethics or the consequences will be far-reaching for you."
    },
    {
        id: 13,
        sentence: "Fellowship with the Men in the open: Success. <br> It furthers one to cross the great water. <br> The perseverance of the superior man furthers.",
        general: "You can achieve strength in numbers by dispelling mistrust.",
        love: "To achieve a  is the objective you should work together.",
        business: "Communication with your staff is the key to dispelling misunderstandings.",
        personal: "Develop community spirit by organizing workshops particularly for projects.",
        overview: "Tung Jên relates to organization and fellowship. This hexagram will often appear when it is necessary to organize individuals and/or disorganized groups into an effective and cohesive unity. Although most people can see the advantages of co-operation mistrust will often prevent progress. Suspicion and inwardness undermine community spirit so it is important to be open. Appeal to people's sense of higher common purpose to overcome minor differences. Once the desired end is achieved the smaller disagreements prevalent in the early stages will be forgotten."
    },
    {
        id: 14,
        sentence: "Possession in Great Measure. Supreme success.",
        general: "Those who understand the responsibility that comes with wealth are the ones best fitted to maintain it.",
        love: "Enjoy the current harmonious period but do not allow yourself to become complacent.",
        business: "Opportunities for business success will be there if you look for them. Do not allow yourself to become greedy though.",
        personal: "Take the time to enjoy mental clarity but make sure to watch for any feelings of pride or arrogance or eliminate them if necessary.",
        overview: "Ta Yu relates a time of abundance when all is going well. Although an auspicious time it carries a warning not to allow yourself to become arrogant or greedy. All obstacles in all aspects of life will have disappered and life should be enjoyed. Do not make the mistake of becoming complacent and believing this period will last forever. It won't. Nothing does. Examine the harmonious circumstances that gave rise your current success and do your best to preserve them. this way you will be able to maintain success as long as possible. Generosity and humility are essentials to this process."
    },
    {
        id: 15,
        sentence: "Modesty creates success. <br> The superior man carries things through.",
        general: "Arrogance is the mortal enemy of true greatness.",
        love: "Help draw your partner out of their shell.",
        business: "Do not overlook the quiet achiever in your business. Whether this is a member of staff or an account.",
        personal: "Don't take things at face value - learn to look beneath the surface.",
        overview: "Ch'ien is related to pride and humility. Although pride in achievement is only natural (particularly amoung the young) you should not let that blind you. Take pride but in moderation. The most skilled is one field may be totally inadequate in another. Take pride in your achievements but do not think that a skill elevates you above the rest of the world. Learn that our lives are not as comparable as you might think."
    },
    {
        id: 16,
        sentence: "Enthusiasm. <br> It furthers one to install helpers and to set armies marching.",
        general: "Revitalize your spirit through celebration.",
        love: "Give your partner a pleasant surprise. Suggest an outing or trip.",
        business: "Take a time to celebrate your business successes.",
        personal: "Throw a seasonal party to celebrate the cycles of nature.",
        overview: "Yu is related to rising the energy of not only yourself but of those around you. Just like the thunderstorm Yu suggests our existence and environment can be suddenly changes through celebration. Use your strong leadership to inspire those around you. Don't underestimate the power of shared enthusiasm. It will help increase confidence with will hepl to withstand any future difficulties."
    },
    {
        id: 17,
        sentence: "Following has supreme success. <br> Perseverance furthers. <br> No blame.",
        general: "Balancing the heart and the mind of leadership will help assure steady progress.",
        love: "Show your partner what you require by example rather than words. be gentle with them.",
        business: "Hard work needs to be balanced by rest.",
        personal: "Plan for gradual progress and make sure that hard work is balanced by rest",
        overview: "Sui indicates that you should lead by example rather than just telling everyone what to do. It indicates a time where gradual progress should be the plan and that work should be balanced with a period of rest. Effective leadership is about serving, not about power and ego. A leader has obligations to all those that work for him and this should not be overlooked. Learn the needs of those that follow you and if some of these needs need correcting then do so by gentle persuasion not by harsh words." 
    },
    {
        id: 18,
        sentence: "Work on what has been spoiled Has supreme success. <br> It furthers one to cross the great water. <br> Before the starting point three days, <br> after the starting point, three days.",
        general: "The problems of the past should be addressed so that the future can be approached with confidence.",
        love: "Any differences of opinion with your partner should be resolved at this time.",
        business: "Take the time to assess any demage caused by past problems and deal with them. Doing so now will help avoid stagnation in the present and future.",
        personal: "Bad habits and/or phobias may be holding you back. Now is the time to confront and overcome them.",
        overview: "Ku tends to appear when progress is being hindered in some way. Usually this id because of past obstacles or problems that were not dealt with at the time and so have continued to eat away at your progress unchecked. Ku indicates a need to examine the past issues without guilt or resentment and to deal with them so that future progress is not hindered in the same way. Be sure to ascertain the cause or the destructive cycle will continue."
    },
    {
        id: 19,
        sentence: "Approach has supreme success. <br> Perseverance furthers. <br> When the eighth month comes, There will be misfortune.",
        general: "To make steady progress and avancement you need to learn to recongnize favorable opportunities.",
        love: "Take the time to explore the depths of your relationship and deepen your insight into it.",
        business: "This is a time when expansion and success are possible.",
        personal: "Listem to those with more wisdom and experience that you.",
        overview: "Lin indicates that you have the opportunity to listen to and to learn from those with greater wisdom or experience that you. This opportunity should be welcomed and seized gratefully. As with anything circumstances will change so it is critical that the favorable circumstances currently presented are taken full avantage of. Itis a good time to look at any possible future difficulties and try to deal with them preemptively. Success at this time should be shared with those around you."
    },
    {
        id: 20,
        sentence: "Contemplation. <br> The ablution has been made, but not yet the offering. <br> Full of trust they look up to him.",
        general: "Remaining alert to all that affects you and those around you will help you to understand your role in the world.",
        love: "This could be a time when you are feeling isolated. Make the effort to go out into the community",
        business: "Refamiliarize yourself  with the needs of your customers and clients. Go out into the community and meet with them.",
        personal: "Travel is a good way to combat any feelings of isolation.",
        overview: "Kuan reminds you that although it is always wise to watch out for problems it is possible to become somewhat detached from reality by doing so. When concentrated on to the exclusion of all else there is a danger of the spirit becoming undernourished. Perception may be distorted and dangers go unnoticed. Isolation (meditative or otherwise) should always be balanced by travelling out into the community. Assesssing the world both from afar and close will give you an accurate assessment. If this advice is not followed you will only see a part of the overall picture.",
    },
    {
        id: 21,
        sentence: "Bitting Trough has success. <br> It is favorable to let justice be administered",
        general: "Without justice harmony is unattainable.",
        love: "Don't let unfair treatment go unanswered. Stand up for yourself.",
        business: "Watch out for criminal activities being conducted against your business.",
        personal: "Complex insues can be resolved by receiving insight though meditation.",
        overview: "Shih Ho is all about injustice. When it forms a barrier between individuals and the community steps must be taken to firmly eradicate it. Action should not be taken lightly trough or further disharmony will result. Action taken must be scrupulously just then it will be effective. Shih Ho often appears when crime is the root cause of the problem but not always. Unjustness can exit in other ways. Whether legal or moral the model of justice employed must be honest and honorable."
    },
    {
        id: 22,
        sentence: "Grace has success. <br> In small matters it is favorable to undertake something.",
        general: "Valuing beauty will enable you to cultivate your taste for harmony in all aspects of your life.",
        love: "Beauty is only a skin deep - do not be taken in by superficial appearances. Look beneath the surface to see a person's true character.",
        business: "If a business proposition looks too good to be true then it probably is. Make sure it's exactly what it appears to be.",
        personal: "Enhance your inner beauty.",
        overview: "Pi is about observing natural grace and allowing that observation to inspire you to emulate it in life. Pi also is an warning not to be taken in by superficial beauty or appearence. Instead, make sure that what lies underneath the surface is more enduring. To neglect to do so may well lead to errors of judgment. Remember, the more enduring beauty is seen with the heart. Not with the eye."
    },
    {
        id: 23,
        sentence: "Splitting Apart. <br> It does not further onr to go anywhere.",
        general: "Before beginning a new eterprise you should wait for the collapse of the old one.",
        love: "Your current relationship or an issue within your relationship should be abandoned.",
        business: "Your current business direction has become difficult and it should be revised at the very least, or abandoned if revision is not possible.",
        personal: "Serious thought shoud be given to backing away from any situations that are troublesome.",
        overview: "Po is a reminder that no matter how strongly something was originally built it will eventually desintegrate with time. Once the 'fundations' have been undermined it is only tenuously held together. Such a situation is no longer worth trying to save. Although it is always difficult to give up on a situation do not waste time on formulating a new plan and direction. The disaster implied by Po is not the situation itself but the failure to react to it and regain your balance and direction."
    },
    {
        id: 24,
        sentence: "Return. Success. <br> Going out and coming without error. <br> Friends come without blame. <br> To and fro goes the way. <br> On the seventh day comes return. <br> It furthes one to have somewhere to go.",
        general: "It metters are progressing and showing steady improvement then there is no need to push them.",
        love: "New romance will be rekindled in your life.",
        business: "The next few months will show a steady improvement of your business.",
        personal: "It is a good time to plan for the future.",
        overview: "Fu relates to a gradual improvement over time. it is a very natural progress and will occur without any effort on your part. In some ways the progress is unstoppable. However, you should not make any attempt to force the issue and hurry it along. Let it take its own course and time. Treat this new beginning with care and do not make the mistake of handling it roughly by trying to force it." 
    },
    {
        id: 25,
        sentence: "Innocence. Supreme success. <br> Perseverance furthers. <br> If someone is not as he should be he has misfortune, And it does not further him to undertake anything.",
        general: "To function effectively you must be fully present in each and every moment.",
        love: "It is time to have fun. Not because you need to but just because you can.",
        business: "You will find that the simple approach will work the best. Let go of complex issues.",
        personal: "Enjoy life.",
        overview: "Wu Wang is about innocence and the childlike joy associated with it. Stop trying to impress others in order to gain their approval. Istead of concentrating on this aspect of life which focuses on an imagined future, focus and honor each aspect of life or work. This way you will remain open and alert. Although planning and thought are still needed, Wu Wang is a reminder that it is never possible to foresee every contingency. Learn to react moment to moment rather than wasting too much energy on things that will probably never happen. Find the balance you need between childlike confidence and the wisdom of experience."
    },
    {
        id: 26,
        sentence: "The Taming Power of The Great. <br> Perseverance furthers. <br> Not eating at home brings good fortune. <br> It furthers one to cross the grat water.",
        general: "Wisdom and resources accumulatd in a diciplined manner will help you in all future endeavors.",
        love: "Your relationship will not be helped by being frivolous or impulsive.",
        business: "Be disciplined in your approach and seek wisdom from those with more experience.",
        personal: "Focus on building your inner resources and/or strength.",
        overview: "Ta Ch'u is about accumulating resources. It is not, however, about being miserly and hoarding. Your wealth should be put to work for the benefit of all. Ta Ch'u is also a reminder that there are people around you with more wisdom and experience and you should not br afraid, or see it as a sign of weakness, to seek their advice. It is also about moderation. Use your resources but use them wisely so that you can take care of those around you."
    },
    {
        id: 27,
        sentence: "The Corners of the Mouth. <br> Perseverance brings good fortune. <br> Pay heed to the providing of nourishment and what a man seeks to fill his own mouth with.",
        general: "Spiritual discrimination is a important a physical discrimination.",
        love: "Choose your thoughts and words wisely in your relationship and remember to be tolerant.",
        business: "Use the right words and you will help sustain and nourish your business.",
        personal: "Now is a good time to clear out all that is not worthy from your life.",
        overview: "I relates to nourishment. In the same way that food is used to nourish your body, I suggests that words and ideas be used in the same way. It cautions that as with food your words should be chosen carefully. Just as bad food can upset you or those around you, bad words can do the same. When the body and spirit are both well provided for then you will be at your most powerful and effective."
    },
    {
        id: 28,
        sentence: "Preponderance of the Great. <br> The ridgepole sags to the breaking point. <br> It furthers one to have somewhere to go. <br> Success.",
        general: "Staying alert and then intervening in a timely fashion will help forestall many difficulties.",
        love: "An unresolved conflict may require you to temporarily leave the situation.",
        business: "You may need to retreat from a difficult business venture.",
        personal: "assess your ambitions for the future by letting go of the present.",
        overview: "Ta Kuo is very much a warning. It tells you that a current situation has gone beyond your control and this may mean withdrawing from the situation completely. Failure to do so will spell disaster. In some cases the situation may be capable of still being resolved but in most it will not. The demage is already done. However upsetting it may be it is time to cut your losses."
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
        id: 30,
        sentence: "The Clinging. <br> Perseverance furthers. It brings success. <br> Care of the cow brings good fortune.",
        general: "Tending the 'fires' of your mind and spirit will help illuminate your path.",
        love: "Be enthusiastic about your partner's development and be sure to enjoy this time of inspiration.",
        business: "Enthusiasm is the key to finding creative solutions to current business problems.",
        personal: "Enhance your personal criativity by joining in comunal activities.",
        overview: "Li is about tending your 'inner fires' in an appropriete manner. The key to helping them burning is to fuel them constantly and carefully. It is about learning how best to feed them and how much fuel to use. You don't want it to blaze uncontrollably. Nor do you want it to smolder into non-existence. Your own enthusiasm and that of others can be mutually beneficial to all concerned."
    },
    {
        id: 31,
        sentence: "Influence. Success. <br> Perseverance furthers. <br> To take a maiden to wife brings good fortune.",
        general: "Success is assured when attraction is strengthened by mutual respect and support.",
        love: "If your partner has shared and complementary qualities then you are well matched.",
        business: "Seek a partner or partnership that complements your own strengths.",
        personal: "Cultivate respect and honor toward those around you.",
        overview: "Hsien is about your perception of those arround you whether family, friends or business partners.You will be most successful in any area when the qualities you an they have are shared and complementary. If one of these aspects is missing then the relationship will be undermined. Although Hsien most often appears for romantics situations it is also a reminder that the same qualities are needed in all aspects of life for a relationship to work."
    },
    {
        id: 32,
        sentence: "Duration. Success. No blame. <br> Perseverance furthers. <br> It furthers one to have somewhere to go.",
        general: "True persistence is a process of constant renewal.",
        love: "To deepen your relationship you should adapt to changes around you.",
        business: "You will be rewarded for the effort you have put into your bussiness ventures.",
        personal: "Focus on self-renewal and make sure you avoid inertia.",
        overview: "Heng is telling you that only sure constant in life is change. When mistakes are made in a particular strategy the same mistake is often repeated. It does not show strength of character to formulate  the same strategy (even it has worked in the past). Rather it shows a weakness in your refusal to adapt and change. There will always be obstacles in life. Some may be often repeated. If a strategy taht has worked several times in the past does not work now then change your strategy. It is also about inertia and complacency. You should always be focusing on self-renewal and not becoming complacent. Avoid stagnation."
    },
    {
        id: 33,
        sentence: "Retreat. Success. <br> In what is small, perseverance furthers.",
        general: "It is not an admission of defeat to retreat from an unequal fight.",
        love: "Take the time to strengthen your position when considering engaging in a fight with your partner.",
        business: "Rethink your position and strategy before reentering negotiations. Do not compromise just because it is quicker to do so.",
        personal: "Don't ignore issues but formulate an effective strategy before attempting to deal with it. Avoid destructive confrontations.",
        overview: "Tun is all about retreating from destructive confrontations and it tells you that to do so is not an admission of defeat - just that it is the wisest thing to do in the circumstances. It is not however telling you to forget or ignore the situation. Instead it advises you to formulate an effective strategy before reentering the  'conflict' and dealing with it. Tun signals it is time for a temporary retreat not that is time to run away and hide."
    },
    {
        id: 34,
        sentence: "The Power of the Great. <br> Perseverance furthers.",
        general: "to win an advantage you not only need increase your strength but to accompany it with responsible action.",
        love: "You will find others have a powerful attractionvto you - use this power wisely.",
        business: "This is a favorable time for business but do not try and go far. Make sure you protect yourself and those around you.",
        personal: "Problem issues can be favorably overcome if tackled with honor and compassion.",
        overview: "Ta Chuang relates to the chance to take advantage of the current situation. Unlike Tun which urges a temporary retreat, Ta Chuan urges you to make the most of it. It carries the warning through, that overconfidence can lead to a downfall. Don't be rash, plan your strategy wisely and minimize demage wherever possible. Feeling empowered is good, but don't be narcissistic about it."
    },
    {
        id: 35,
        sentence: "Progress. <br> The powerful prince in honred with horses in large numbers. <br> In a single day he is granted audience three times.",
        general: "An easily won victory should not be taken for granted or treated lightly.",
        love: "Do not despise easy progress with your love life. Cherish it instead",
        business: "Be thankful for your current success.",
        personal: "Take the time to consolidate your success and share it with those around you.",
        overview: "Chin is all about progress. Easy progress adn the feeling of dissatisfaction that can sometimes arise from such progress. Chin urges you to adopt the same attitude in victory as you would in adversity. Levelheadedness is required in both situations. Chi also warns that you should not try and take advantage of an easy victory for personal gain but must share the success with others."
    },
    {
        id: 36,
        sentence: "Derkening of the light. <br> In adversity, it furthers one to be persevering.",
        general: "Concealing your light when danger is around is an effective way of avoiding detection.",
        love: "Detach yourself from the issue and do not reveal your true fellings.",
        business: "This is not a good time to start any new ventures.",
        personal: "Use this time to work on your inner strengths until the current obstrtuctions pass.",
        overview: "Ming I is very about caution and the need to keep a low profile. It is harder to travel by night than it is by day. But is also easier to give yourself away if you show your light. Don't try and make any further progress right now. Now is not the time to issue a challenge or to take anybody on. Keep a low profile and bide your time while strengthening your resources."
    },
    {
        id: 37,
        sentence: "The Family. The perseverance of the woman furthers.",
        general: "Open and respectful communication is the key to making a team work successfully.",
        love: "Communication must be sincere to benefit your relationship.",
        business: "Avoid misunderstandingd within your business by ensuring that each individual fully unsderstands his or her role.",
        personal: "Make sure that you are communicating clearly and effectively with those who are important to you.",
        overview: "Chia Jen is very much about communication and its effectiveness within a team of any sort. If you do not communicate clearly with those around you then you run the risk of misunderstandings, which can hinder your progress. Whatever level this communication takes place on you need to make sure that you are respectful, sincere, and very clear in what you mean."
    },
    {
        id: 38,
        sentence: "Opposition In small matters, good fortune.",
        general: "Reconcilliation must be a key priority if there is disunity.",
        love: "Be as tactful as necessary to overcome a potentially divisive issue.",
        business: "You may find that lack of communication, or refusal to communicate, is causing a period of stagnation. You will need to remedy this before further progress is possible.",
        personal: "It will be necessary to learn to respect your enemy to resolve any crisis you are currently in.",
        overview: "K'uei is about communication. Or the lack of it. Being stubborn or indifernt to a situation and not talking it out will lead to progress being brought to a standstill. K'uei tells you that the only way forward is through effective communication and reconciliation. Extreme tact may be required and if so, this is the course you must take. You must learn to ignore emotion at this time no matter how badly others may be behaving. Do not allow yourself to be provoked and they respond with anger. It will be a mistake and you will lose credibility. Your behavior needs to be exemplary."
    },
    { 
        id: 39,
        sentence: "Obstrtuction. The southwest furthers. <br> The northeast does not further. <br> It furthers one to see the great man. <br> Perseverance brings good fortune.",
        general: "If outward progress is current imposible then concentrate on cultivation your inner strengths.",
        love: "It will be necessary to go within to look for clues to building a relationship if love has gone sour.",
        business: "Do not blame others for current business prblems. Instead, consult them for ideas and support in overcoming the issues.",
        personal: "This is only a temporary setback. Don't start to feel sorry for  yourself. It is not constructive.",
        overview: "Chien is about Obstrtuctions to progress. Although problems may seem insurmountable, they are not. Although external help may eventually manifest itself it is necessary to use this time to gather your strength and use the help of those around you to try and resolve the problems. Work on resolving any internal flaws or weaknesses. Don't allow yourself to become frustrated. This is only a temporary setback. Once these obstacles have passed you will should start to move forward again. But do so cautiously until you are sure that all danger has passed."
    },
    {
        id: 40,
        sentence: "Deliverance. The southwest futhers. <br> If there is no longer anything where one has to go. Return brings good fortune. <br> If there is still something where one has to go. Hastening brings good fortune.",
        general: "Discard any millstones you may be carrying. Bitterness, grievance and recrimination will only hold you back.",
        love: "Do not allow guilt and/or recriminations to get in the way of your relationship with your partner.",
        business: "This is a time to be taking very small steps forward.",
        personal: "Past issues should be released so that you can start to progress again.",
        overview: "Hisieh is about starting to progress once more. Recent difficulties have left you in a weakened state and a period of convalescence is necessary. If an athlet twists an ankle on the Monday then it would be a mistake to try and run a marathon on the Tuesday. Adapt to your new circumstances and make sure your release past issues and grievances. Whether these were self-inflicted or the fault of others - let them go. Only then will you be able to start taking the small steps needed to progress once more."
    },
    {
        id: 41,
        sentence: "Decrease combined with sincerity Brings about supreme good fortune without blame. <br> One may be persevering in this. <br> It futhers one to undertake something. <br> How is this to be carried out? <br> One may use two small bowls for the sicrifice.",
        general: "Make sure you use your resources appropriately apportioned or instability will result.",
        love: "Go back to basics and focus on nourishment and nurturing you relationship.",
        business: "Direct your resources to fundamental operations only. Be frugal with your money.",
        personal: "Direct your energy or finances toward basic concerns only and don't be impatient or resentful in having to do so.",
        overview: "Sun is about the sharing of wealth and resources. If they are shared unequally thorough society then instability can result. Sun tells you that there is a need to balance this situation and that this is a time to be frugal and self-diciplined. It also warns that this will take time and so patience will be needed."
    },
    {
        id: 42,
        sentence: "Increase. It furthers one to undertake something. <br> It furthers one to cross the great water.",
        general: "When accompanied by generosity abundance abundance will endure.",
        love: "Do not be miserly in sharing your love with your partner.",
        business: "This is a time for furthering your business and for rewarding your staff generously.",
        personal: "Take the opportunity to help others and you will achieve great success.",
        overview: "Whereas Sun related to inequality and the need to redress it, I is the very opposity and relates to the time when the inequalities have been addressed. For the wealthier members of society this may initially mean a loss but in the long-term they will reap the benefits of a strengthened communit. I tells you that this is a time of opportunity and that you should take advange of it. And take advange quickly for no situation is permanent."
    },
    {
        id: 43,
        sentence: "Break-through. <br> One must resolutely make the matter known at the court of th king. <br> It must be announced truthfully. Danger. <br> It is necessary to notify one's own city. <br> It does not further to resort to arms. <br> It furthers one to undertake something.",
        general: "When the unscrupulous reveal their weakness be ready to act.",
        love: "this is a time when a breakthrough in your relationship will occur. Be sure to handle it honorably.",
        business: "When an opportunity pressents itself, make sure you use positive strategies to achieve the breakthrough you need.",
        personal: "Any breakthrough on a personal level must be handled ethically.",
        overview: "Kuai is about opportunities being presented through the weakness of others and the need to be ready and prepared to act. Once this opportunity has been presented and you have made a breakthrough you must immediately take advantage of it. It is important for you not to let negative forces regain the upper hand. Kuai also carries a warning not to resort to using your opponents tatics and is a reminder that the end does not justify the means. Replace negativity with a positive alternative.",

    },
    {
        id: 44,
        sentence: "Comming to meet. The maiden is powerful. <br> One should not marry such a maiden.",
        general: "Pernicious influences must be resisted the moment you become aware of them.",
        love: "Do not allow harmful influences to affect your relationship.",
        business: "Protect your business from corruption and unethical practices. Great harm will result if you do not.",
        personal: "Unscrupulous and imoral people should be avoided.",
        overview: "kou is about how easily virtue can be undermined and the need to prevent this from happening. Although situations you encounter may seen unimportant initially if you do not guard against them they will gather momentum and be extremely difficult to deal with. Don't underestimate how quickly this can happen. If you are tempted into meeting with unscrupulous people, acknowledge your own part in this mistake and remove yourself from their presence and the situation.",
    },
    {
        id: 45,
        sentence: "Gathering Together. Success. <br> The king approaches his temple. <br> It furthers one to see the great man. <br> This brings success. Perseverance furthers. <br> To bring great offerings creates good fortune. <br> It furthers one to undertake something.",
        general: "Social harmony is a prerequisite for prosperous times.",
        love: "If both of you work towards a common goal then your relationship will thrive.",
        business: "Large projects need to be handled carefully and respectfully.",
        personal: "If you are involved with any project involving a large group you should focus on a common goal.",
        overview: "The I Ching often talks about the power of the group and this is what Ts'ui relates to. Although great things can be achieved when everyone focuses on a common goal, Ts'ui is a reminder that there will always be some who are uninterested in the common good. Arrogance and ignorance mean that these people will pray on those around them. Ts'ui warns that a leader in times such as these must always be vigilant and make use of foresight if the weaker aspects are to be controlled."
    },
    {
        id: 46,
        sentence: "Pushing Upward has spreme succes. <br> One must see the great man, fear not. <br> Departure toward the south brings good fortune.",
        general: "Everything must come to pass in its own time at its own speed.",
        love: "Patience and quiet nurturing will help your relationship to prosper.",
        business: "Focus on the success of your business to help the antecipated rewards come about.",
        personal: "Keep working on your plans and maintain confidence in their success.",
        overview: "Chêng is about patience and confidence. It is a time when you can't speed things along - they will happen at their own speed. This is very much a time of natural development. Be patient and growth you hope for will come about. Growth is assured, so be patient and let thing happen as they must. Don't keep interfering with what is a very natural progress."
    },
    {
        id: 47,
        sentence: "Oppresion. Success. Perseverance. <br> The great man brings about good fortune, no blame. <br> When one has something to say it is not believed.",
        general: "Your most valuable asset will be a sense of purpose.",
        love: "Take the time to help rejuvenate your relationship rather than despair over it.",
        business: "This is not a time to make important business decisions.",
        personal: "You should focus on rest and recuperation.",
        overview: "K'un appears when times are difficult as regards to your endeavors. It is a particulary dangerous time as you run the risk of falling into despair or getting depressed no matter how much you yearn for success. This can happen at any time and as issues are hard to deal with at such a time, K'un recommends that in future times like this should be prepared for well in advance. This time you need to realize that what is happening is nothing more than a temporary condition and you should treat it as a period of rest and recuperation. Look after your body and your mind - a positive attitude is a must. Strength and purpose will return and your outlook on life will be renewed."
    },
    {
        id: 48,
        sentence: "The Well. <br> The town may be changed but the well cannot be changed. <br> It neither decreases nor increases. <br> They come and go and draw from the well. If one gets down almost to the water and the rope does not go all the way, or the jug breaks, it brings misfortune.",
        general: "Even though times change the spirit has constant needs.",
        love: "Nourish the soul to help sustain your relationship.",
        business: "The basic and constant needs of humanity should be focused on.",
        personal: "Make sure your basic needs are well provided for and that you nurture your spirit.",
        overview: "Ching is a reminder that even though everything around us is constantly changing the soul needs constant nourishing and this need does not change. It is a time to ensure that the nourishment needed for body, mind and soul remains available and untained. Ching also emphasizes that you have a responsibility to help provide this nourishment for those who cannot provide it for themselves."
    },
    {
        id: 49,
        sentence: "Revolution. <br> On your own day you are believed. <br> Supreme success. Furthering through perseverance. <br> Remorse disappears.",
        general: "Only when justified by necessity and clear intent should radical change be undertaken.",
        love: "Your relationship may be in need of a radical change, but first you should plan for all eventualities.",
        business: "The timing for radical change should be chosen wisely to maximize results.",
        personal: "Meditation is the key to taking advantage of the opportunity for radical self-transformation.",
        overview: "Ko appears at the time of potential radical transformation. Although fast, decisive, action is often the best way this is not necessarily so when Ko appears. Timing is crucial. Any action needs to be thoroughly throught out and based on every solid foundations. Action should only be taken when if absolutely necessary. Resist the temptation to act impetuously as that will undermine your efforts and quite possibly have a negative effect.",
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
        id: 51,
        sentence: "Shock brings success. <br> Shock comes - oh, oh! <br> Laughing words - ha, ha! <br> The shock terrifies for a hundred miles and he does not let fall the sacrificial spoon and calice.",
        general: "Don't object to the storm that is needed to clear the air. It is a necessity.",
        love: "Examine your behavior for any destructive habits and rise to the challenge of eradicating them.",
        business: "If your business is facing an alarming setback you will need strengthen your resolve to prevail.",
        personal: "You will become a stronger person by learning to face your fears.",
        overview: "Chên is about fear and appears when there is a need for you to be jolted out of complacency. It encourages you to examine all aspects of life and see where flaws exist or errors have been made etc. and to take steps to deal with them. This examination should be approached conscientiously, which will help you to come through this period a stronger and wiser person provided you do not go back to your old habits. Chên tells you how to react to a crisis. Remember, courage is not the lack of fear, but the willingness to face it."
    },
    {
        id: 52,
        sentence: "Keeping Still. <br> Keeping his back still so that he no longer feels his body. <br> He goes into his courtyard and do not see his people. <br> No blame. ",
        general: "Any and all effective actions must be born out of stillness",
        love: "In order to see things clearly you must let go of any preconceptions.",
        business: "Clear your mind before making any important business decisions.",
        personal: "Learn how to meditate to help achieve a still mind",
        overview: "Kên reminds you that if your mind is full of clutter it will not be able to hold new thoughts and ideas. Ken appears when you have to take a break and withdraw from the world for a moment in order to clear out the old in your mind to make way for the new. Meditation is the key to this process. It is not simply a time for rest. It is not an easy task to free your mind from daily worries, but it is necessary to do so, so that you can see and think more objectively than before. Old thoughts hinder your actions, compelling you to make the same mistakes. Clear them out - don't let them trap you."
    },
    {
        id: 53,
        sentence: "Development. The maiden is given in marriage. Good fortune. <br> Perseverance furthers.",
        general: "It is only possible to perfect every detail of advancement when progress is steady and patient.",
        love: "Deepening your relationship is more likely if you make steady snd unhurried progress.",
        business: "You should take the time to focus on the big and small details of your business.",
        personal: "Focus on the particulars of your life in order to appreciate its fullness.",
        overview: "Chien is all about patience and the need to examine the minutiae of life. Progress at this time is assured so do not be anxious if things are not going as fast as you would like. Instead, use this time as an opportunity to make sure that all your bases are covered. Chien tells you that the smaller details in life are very important and that progress will be slow and steady. You can fly over an area in a matter of seconds, but the man who walks through that area will learn much more. Spending time on the smaller details of life will undoubtedly bring rewards in the future.",
    },
    {
        id: 54,
        sentence: "The Marrying Maiden <br> Undertaking bring misfortune. <br> Nothing that would further.",
        general: "A sense of perspective is the best way to cure disappointment.",
        love: "Love: There is a word of difference between infatuation and true love. Don't mistake one for the other.",
        business: "Do not make impetuous business decisions.",
        personal: "Focus on slow and steady progress when faced with a difficult or a complex situation.",
        overview: "Kuei Mei is one of the most challenging hexagrams of the I Ching. It appears when the warnings carried by hexagram 53 (Chien) have been ignored. This is a time when you may well fell alienated from those around you and that all respect for you has been lost. Kuei Mei carries a very strong warning that when impetuous action or errors of judgment have resulted in the current bad times then it would be a momentous mistake to act impetuously once again. Great diplomacy and slow progress are the only remedies that will be effective. Avoid anger, avoid self-pity. Approach this time and the coming times with fortitude. All things pass and this period is no exception"
    },
    {
        id: 55,
        sentence: "Abundance has success. <br> The King Attains abundance. <br> Be not sad. Be like the sun at midday.",
        general: "Make sure you provide for the future even though you are at the peak of success.",
        love: "Enjoy and celebrate the success of your relationship.",
        business: "Even though you are currently very successful make sure you make plans for the future.",
        personal: "This is a very successful time for you. Make the most of your success for lasting benefits.",
        overview: "Fêng appears when everything is currently very successful. It is a remind that although it is fine to enjoy this period you should not make the mistake of thinking this period will last forever. Everything is transient. Success, like adversity is just as transient. Enjoy this period of life by all means but make plans to provide for the future when times may not be so benefical. Celebrationn is appropriate but guard against making foolish decisions. Major success is all too rare to be taken lightly.",
    },
    {
        id: 56,
        sentence: "The Wanderer. Success through smallness. <br> Perseverance brings good fortune to the wanderer.",
        general: "You will travel best when the journey is a quest rather than a holiday or an escape.",
        love: "Travel will help provide something that is lacking in your relationship provided the journey is not being used as a means of escape.",
        business: "Travel is necessary to help provide something that is lacking in your business. It is a time tact and diplomacy.",
        personal: "Travel can be used as a means of gaining knowledge in an area that is lacking.",
        overview: "Lü represents a time in your life when you feel the need to travel. There is a feeling that something is missing and now is a good time for you to undertake a quest to find out what. Lü is also a reminder that when moving into unfamiliar territory it is wise to tacful and courteous. Just because you do things differently to others doesn't mean you are right and they are wrong. Be aware of differences in customs and behavior and act accordingly. Lü should not be seen as a time to take a trip to escape from difficulties but as a time to gain knowledge."
    },
    {
        id: 57,
        sentence: "The Gentle. Success through  what is small. <br> It furthers one to have somewhere to go. <br> It furthers one to see the great man.",
        general: "Althouth rapid change may be effected by force, enduring change is best effected by gentle persistence.",
        love: "Patient, thoughtful, and thorough action is the best way to develop trust in your relationship.",
        business: "Gentle persistence is by far the best way to further your business plans.",
        personal: "Gentle persistence is the key to successfully achieving your plans.",
        overview: "Sun i.s all about the need to be persistent and gentle in your actions. It does not mean that your plans will be unsuccessful because you are proceeding gently rather than forcefully. Unceasing gentleness, not aggressiveness is the key to progress and success. Persuasion and the birth of trust will be far more enduring than threats and coercion. It is a time to allow your thoughts and ideas to permeate the minds of those you are dealing with at their own speed. Be gently persistent in your approach and you will be successfu. Adapt to each situation and as required. Don't mistake gentleness for docility and don't allow gentleness to become weakness."
    },
    {
        id: 58,
        sentence: "The Joyous. Success. Perseverance is favorable",
        general: "Nothing inspires human spirit more than bliss.",
        love: "You will experience great joy in your relationship.",
        business: "All things are possible at this time so do not be afraid to capitalize on your success.",
        personal: "Enjoy the feeling of bliss in your life and use it as inspiration to advance.",
        overview: "Tui indicates a time of great success and the feeling of bliss that accompanies it. Anxiety and discord are currently banished to the past and there is a feeling that grater things are possible. Tui relates to the past to this feeling of bliss and holds out the promise that there is more to come. It warns though, that  although celebraion is warranted and fitting at this time you should not let that become a distraction and prevent you from capitalizing on your success."
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
    {
        id: 60,
        sentence: "Limitation. Success. <br> Galling limitation must not be perserved in.",
        general: "Although your potential is limitless, your capabilities are not.",
        love: "Don't try to move too fast in your relationship. Start slowly and build a strong and lasting friendship.",
        business: "This is a time for quality not quantity. Do not overreach yourself in business.",
        personal: "Long-term happiness is best achieved slowly.",
        overview: "Chieh represents the need in your life to have pratical limitations. Whereas your potential is limitless your ability to expand and reach that potential is not. You can only do so much. Only achieve so much. When you attempt to do too much you are threatening your existence and your success. Growth is still possible of course and Chieh does not indicate that growth will stop - just that your growth will not be exponential. In effect Chieh advises moderation. Spending beyond your means, trying to expand beyond you means will not be conductive to future a long-term happiness. It is important to understand that though, to mantain a balance. Metaphorically speaking, spending too little is as bad as spending too much."
    },
    {
        id: 61,
        sentence: "Inner Truth. Pigs and fishes. Good Fortune. <br> It furthers one to cross the great water. <br> Perseverance furthers.",
        general: "To have a deep influence on others you must have a thorough understanting of them.",
        love: "For your partner to trust you more deeply you must take the time to thoroughly understand them.",
        business: "Straightforward communication that is honest and sincere will benefit your business partnership immeasurably.",
        personal: "You need to cultivate a deep and compassionate understanding of the people affecting your life.",
        overview: "Chung Fu is about communicating and cooperating effectively with those around you. To do this and be successful you will need to take the time to thoroughly understand their natures. Prejudice, preconceptions, or any other factor must be put aside or receptivity will be lessened. Once you thoroughly understand someone you can work on gaining their trust. Chung Fu warns though, that this needs for your mutual benefit. Failure to heed this need for honesty and sincerity will mean that any progress achieved will be undone."
    },
    {
        id: 63,
        sentence: "After Completion. Success in small matters. Perseverance furthers. <br> At the beginning good fortune. At the end disorder.",
        general: "Every triumph brings new challenges.",
        love: "Your relationship will move into a deeper phase.",
        business: "celebrate your achievements but sure to consolidate your success.",
        personal: "Celebrate your success and make plans for entering a new phase of your life.",
        overview: "Chi Chi relates to successful completion and what comes next. It is now a time that you have achieved great success and have every right to celebrate. Chi Chi reminds your though, that all things change and that you need to be alert for anything that will undermine your current success. Avoid becoming complacent, or arrogant. If you want your success to endure you must immediately take steps to consolidate it. It is important for you to realize that this is the conclusion of a chapter in your life. A new chapter awaits.",
    },
    {
        id: 62,
        sentence: "Preponderance of the Small. Success. <br> Preserverance furthers. <br> Small things may be done; great things should not be done. <br> The flying bird brings the message: It is not well to strive upward, It is well to remain below. <br> Great good fortune.",
        general: "An accumulation of small victories is the best way to achieve greatness at this time.",
        love: "Strengthen the love in your relationship by attending to the small details.",
        business: "The smaller details of a project need to be focused on to achieve great success.",
        personal: "Personal success can be achieved by focusing on the more mundane aspects of life.",
        overview: "Hsiao Kuo appears when there is a need for you to temporarily from trying to attain a great success in one fell swoop. Instead, you need to concentrate on lots of small successes to achieve the overall great success. Hsiao Kuo is all about strength gained from the smaller aspects of life. Although it is not an auspicious time for very ambitious projects that does not mean that progress cannot be made. Progress is more than possible, but only by taking one small step at a time."
    },
    {
        id: 64,
        sentence: "before Completion. Success. <br> But if the little fox, after nearly completing the crossing, <br> gets his tail in the water, There is nothing that would further.",
        general: "You will need to be especially vigilant in the last few yards to success.",
        love: "If you wish to achieve your goal within you relationship, you must not allow yourself to be distracted.",
        business: "Focus on achieving your business goals and do not allow yourself to be distracted.",
        personal: "Do not allow pride or impatience to get in the way of the success that is so near.",
        overview: "Wei Chi relates to that sort of period of time that preceds success. When victory is in sight it is easy to take it for granted and not concentrate on your goals. The end of a chapter in your life is approaching and this is an especially dangerous time when all you have achieved can by undone through inattention. Wei Chi is just like the old saying 'don't count your chickens before they're hatched'. Remain alert to danger and stay focused on the tasks at hand. This way Wei Chi will indicate a successful conclusion."
    }

   

]