const WORDS = [
  {
    "word": "a",
    "phonetic": "/ə/",
    "pos": "",
    "meaning": "(an) art. 一（个、件…）",
    "example": "I have a pen.",
    "exampleTranslation": "我有一支钢笔。"
  },
  {
    "word": "abandon",
    "phonetic": "/əˈbæn.dən/",
    "pos": "v",
    "meaning": "放弃, 遗弃",
    "example": "Many baby girls have been abandoned on the streets of Beijing.",
    "exampleTranslation": "许多女婴被遗弃在北京的街头。"
  },
  {
    "word": "ability",
    "phonetic": "/əˈ.bɪl.ɪ.ti/",
    "pos": "n",
    "meaning": "能力; 才能",
    "example": "This phone has the ability to have its software upgraded wirelessly.",
    "exampleTranslation": "这部手机具有无线升级软件的能力。"
  },
  {
    "word": "able",
    "phonetic": "/ˈeɪ.bl̩/",
    "pos": "adj",
    "meaning": "能够; 有能力的",
    "example": "I’ll see you as soon as I’m able.",
    "exampleTranslation": "我一有空就会去见你。"
  },
  {
    "word": "abnormal",
    "phonetic": "/əbˈnɔɹ.ml̩/",
    "pos": "adj",
    "meaning": "反常的, 不正常的, 变态的, 不规则的",
    "example": "That is abnormal.",
    "exampleTranslation": "那不正常。"
  },
  {
    "word": "aboard",
    "phonetic": "/əˈbɔːd/",
    "pos": "prep",
    "meaning": "在船[飞机、车] 上, 上船[飞机、车]",
    "example": "We all climbed aboard.",
    "exampleTranslation": "我们都爬上了船。"
  },
  {
    "word": "abolish",
    "phonetic": "/əˈbɒlɪʃ/",
    "pos": "v",
    "meaning": "取消, 废除 (制度等)",
    "example": "Slavery was abolished in the nineteenth century.",
    "exampleTranslation": "奴隶制在十九世纪被废除。"
  },
  {
    "word": "abortion",
    "phonetic": "/əˈbɔɹ.ʃn̩/",
    "pos": "n",
    "meaning": "失败, 夭折, 中止, 早产",
    "example": "This is a abortion.",
    "exampleTranslation": "这是一次流产。"
  },
  {
    "word": "about",
    "phonetic": "/əˈbɛʊt/",
    "pos": "adv",
    "meaning": "大约; 到处; 四处 prep. 关于; 在各处; 四处",
    "example": "After my bout with Guillan-Barre Syndrome, it took me 6 months to be up and about again.",
    "exampleTranslation": "患上吉兰-巴雷综合征后，我花了六个月才能重新下床活动。"
  },
  {
    "word": "above",
    "phonetic": "/əˈbʌv/",
    "pos": "prep",
    "meaning": "在…上面 adj. 上面的 adv. 在…之上",
    "example": "He's in a better place now, floating free as the clouds above.",
    "exampleTranslation": "他现在在一个更好的地方，像上面的云一样自由飘荡。"
  },
  {
    "word": "abroad",
    "phonetic": "/əˈbɹɔːd/",
    "pos": "adv",
    "meaning": "到（在）国外",
    "example": "A tree spreads its branches abroad.",
    "exampleTranslation": "树木向四周伸展枝条。"
  },
  {
    "word": "abrupt",
    "phonetic": "/aˈbɹʌpt/",
    "pos": "adj",
    "meaning": "突然的, 意想不到的",
    "example": "The party came to an abrupt end when the parents of our host arrived.",
    "exampleTranslation": "当主人的父母到达时，聚会突然结束了。"
  },
  {
    "word": "absence",
    "phonetic": "/ˈæb.s(ə)n̩s/",
    "pos": "n",
    "meaning": "不在, 缺席",
    "example": "Absence makes the heart grow fonder.",
    "exampleTranslation": "小别胜新婚。"
  },
  {
    "word": "absent",
    "phonetic": "/ˈæb.sn̩t/",
    "pos": "adj",
    "meaning": "缺席, 不在",
    "example": "The part was rudimental or absent.",
    "exampleTranslation": "这部分是退化的或缺失的。"
  },
  {
    "word": "absolute",
    "phonetic": "/ˈæb.səˌljuːt/",
    "pos": "adj",
    "meaning": "绝对的; 完全的, 纯粹的, 净的",
    "example": "moral absolutes",
    "exampleTranslation": "道德绝对标准"
  },
  {
    "word": "absorb",
    "phonetic": "/əbˈsɔːb/",
    "pos": "v",
    "meaning": "吸收, 吸引",
    "example": "Heat, light, and electricity are absorbed in the substances into which they pass.",
    "exampleTranslation": "热、光和电被它们通过的物体吸收。"
  },
  {
    "word": "abstract",
    "phonetic": "/ˈæbˌstɹækt/",
    "pos": "n",
    "meaning": "摘要, 概要, 抽象 adj.抽象的, 深奥的,",
    "example": "He was wholly abstracted by other objects.",
    "exampleTranslation": "他完全被其他物体分散了注意力。"
  },
  {
    "word": "absurd",
    "phonetic": "/æbˈzɝd/",
    "pos": "adj",
    "meaning": "荒谬的, 可笑的",
    "example": "That is absurd.",
    "exampleTranslation": "那太荒谬了。"
  },
  {
    "word": "abundant",
    "phonetic": "/əˈbʌn.dn̩t/",
    "pos": "adj",
    "meaning": "丰富的, 充裕的",
    "example": "The country has abundant natural resources.",
    "exampleTranslation": "这个国家有丰富的自然资源。"
  },
  {
    "word": "abuse",
    "phonetic": "/əˈbjuːs/",
    "pos": "v",
    "meaning": "滥用, 虐待, 辱骂",
    "example": "All abuse, whether physical, verbal, psychological or sexual, is bad.",
    "exampleTranslation": "所有虐待，无论是身体、言语、心理还是性虐待，都是不好的。"
  },
  {
    "word": "academic",
    "phonetic": "/ˌækəˈdɛmɪk/",
    "pos": "adj",
    "meaning": "学院的, 理论的",
    "example": "the academic sect or philosophy",
    "exampleTranslation": "学术派别或哲学"
  },
  {
    "word": "academy",
    "phonetic": "/əˈkæd.ə.mi/",
    "pos": "n",
    "meaning": "学院, 研究院, 学会",
    "example": "the military academy at West Point; a riding academy; the Academy of Music.; a music academy; a language academy",
    "exampleTranslation": "西点军校；骑术学院；音乐学院；音乐学校；语言学校"
  },
  {
    "word": "accelerate",
    "phonetic": "/æk.ˈsɛl.ə.ˌɹeɪt/",
    "pos": "v",
    "meaning": "加速, 促进",
    "example": "to accelerate the growth of a plant, the increase of wealth, etc.",
    "exampleTranslation": "加速植物生长、财富增加等"
  },
  {
    "word": "accept",
    "phonetic": "/ækˈsɛpt/",
    "pos": "v",
    "meaning": "接受",
    "example": "The Boy Scouts were going to accept him as a member.",
    "exampleTranslation": "童子军准备接纳他为成员。"
  },
  {
    "word": "access",
    "phonetic": "/ˈæksɛs/",
    "pos": "n",
    "meaning": "通路, 访问 v. 接近",
    "example": "an access of territory",
    "exampleTranslation": "领土的进入"
  },
  {
    "word": "accessible",
    "phonetic": "/əkˈsɛs.ə.bəl/",
    "pos": "adj",
    "meaning": "易接近的, 可到达的",
    "example": "an accessible town or mountain",
    "exampleTranslation": "一个可达的城镇或山"
  },
  {
    "word": "accident",
    "phonetic": "/ˈæk.sə.dənt/",
    "pos": "n",
    "meaning": "事故",
    "example": "to die by an accident",
    "exampleTranslation": "死于意外"
  },
  {
    "word": "accommodation",
    "phonetic": "/ə.ˌkɒm.ə.ˈdeɪ.ʃən/",
    "pos": "n",
    "meaning": "住处, 膳宿",
    "example": "I need the accommodation.",
    "exampleTranslation": "我需要住宿。"
  },
  {
    "word": "accompany",
    "phonetic": "/ə.ˈkʌm.pə.ni/",
    "pos": "v",
    "meaning": "陪伴, 伴奏",
    "example": "Geoffrey accompanied the group on their pilgrimage.",
    "exampleTranslation": "杰弗里陪同团队朝圣。"
  },
  {
    "word": "accomplish",
    "phonetic": "/əˈkɐm.plɪʃ/",
    "pos": "v",
    "meaning": "完成, 达到, 实现",
    "example": "to accomplish a design, an object, a promise",
    "exampleTranslation": "完成设计、目标、承诺"
  },
  {
    "word": "account",
    "phonetic": "/ə.ˈkaʊnt/",
    "pos": "n",
    "meaning": "账目; 描述",
    "example": "to keep one's account at the bank.",
    "exampleTranslation": "在银行保持账户。"
  },
  {
    "word": "accountant",
    "phonetic": "/ə.ˈkæʊn.(t)ən̩(t)/",
    "pos": "n",
    "meaning": "会计师",
    "example": "This is a accountant.",
    "exampleTranslation": "这是一位会计师。"
  },
  {
    "word": "accumulate",
    "phonetic": "/əˈkjuːmjʊˌleɪt/",
    "pos": "v",
    "meaning": "积聚, 堆积",
    "example": "He wishes to accumulate a sum of money.",
    "exampleTranslation": "他希望积累一笔钱。"
  },
  {
    "word": "accuracy",
    "phonetic": "/ˈækjʊrəsɪ/",
    "pos": "n",
    "meaning": "精确性, 正确度",
    "example": "The value of testimony depends on its accuracy.",
    "exampleTranslation": "证词的价值取决于其准确性。"
  },
  {
    "word": "accurate",
    "phonetic": "/ˈæk.jə.ɹɪt/",
    "pos": "adj",
    "meaning": "正确的, 精确的",
    "example": "accurate knowledge",
    "exampleTranslation": "准确的知识"
  },
  {
    "word": "accuse",
    "phonetic": "/əˈkjuːz/",
    "pos": "v",
    "meaning": "控告, 谴责, 非难",
    "example": "For the U.S. President to be impeached, he must be accused of a high crime or misdemeanor.",
    "exampleTranslation": "美国总统要被弹劾，必须被指控犯有重罪或轻罪。"
  },
  {
    "word": "accustomed",
    "phonetic": "/əˈkʌstəmd/",
    "pos": "adj",
    "meaning": "通常的, 习惯的",
    "example": "He seems accustomed.",
    "exampleTranslation": "他似乎习惯了。"
  },
  {
    "word": "ache",
    "phonetic": "/eɪk/",
    "pos": "v",
    "meaning": "& n. 痛, 疼痛",
    "example": "We must ache.",
    "exampleTranslation": "我们必须忍受痛苦。"
  },
  {
    "word": "achieve",
    "phonetic": "/əˈtʃiːv/",
    "pos": "v",
    "meaning": "达到, 取得",
    "example": "Show all the spoils by valiant kings achieved.",
    "exampleTranslation": "展示英勇国王获得的所有战利品。"
  },
  {
    "word": "achievement",
    "phonetic": "/əˈtʃiːvmənt/",
    "pos": "n",
    "meaning": "成就, 功绩",
    "example": "Finishing the game does not give you a 100% score until you have unlocked all of the achievements.",
    "exampleTranslation": "直到你解锁所有成就，完成游戏才能获得100%的分数。"
  },
  {
    "word": "acid",
    "phonetic": "/ˈæs.ɪd/",
    "pos": "n",
    "meaning": "[化]酸,",
    "example": "acid fruits or liquors",
    "exampleTranslation": "酸性水果或饮料"
  },
  {
    "word": "acknowledge",
    "phonetic": "/əkˈnɒ.lɪdʒ/",
    "pos": "v",
    "meaning": "承认, 答谢, 报偿",
    "example": "to acknowledge the being of a god",
    "exampleTranslation": "承认上帝的存在"
  },
  {
    "word": "acquaintance",
    "phonetic": "/əˈkweɪntəns/",
    "pos": "n",
    "meaning": "相识, 熟人",
    "example": "I know of the man; but have no acquaintance with him.",
    "exampleTranslation": "我知道这个人，但不认识他。"
  },
  {
    "word": "acquire",
    "phonetic": "/əˈkwaɪə/",
    "pos": "v",
    "meaning": "获得, 学到",
    "example": "He acquired a title.",
    "exampleTranslation": "他获得了一个头衔。"
  },
  {
    "word": "acquisition",
    "phonetic": "/æ.kwɪ.ˈzɪ.ʃən/",
    "pos": "n",
    "meaning": "获得, 获得物",
    "example": "The acquisition of sports equipment can be fun in itself.",
    "exampleTranslation": "获得运动器材本身就很有趣。"
  },
  {
    "word": "acre",
    "phonetic": "/ˈeɪ.kə/",
    "pos": "n",
    "meaning": "英亩",
    "example": "I like my new house - there’s acres of space!",
    "exampleTranslation": "我喜欢我的新房子——空间大得惊人！"
  },
  {
    "word": "act",
    "phonetic": "/æk/",
    "pos": "n",
    "meaning": "行动，法令 v. 表演, 扮演（角色）; 行动, 做事",
    "example": "an act of goodwill",
    "exampleTranslation": "善意的举动"
  },
  {
    "word": "action",
    "phonetic": "/ˈæk.ʃən/",
    "pos": "n",
    "meaning": "行动",
    "example": "Knead bread with a rocking action.",
    "exampleTranslation": "用摇摆的动作揉面。"
  },
  {
    "word": "active",
    "phonetic": "/ˈæk.tɪv/",
    "pos": "adj",
    "meaning": "积极的, 主动的",
    "example": "certain active principles",
    "exampleTranslation": "某些活性原理"
  },
  {
    "word": "activity",
    "phonetic": "/ækˈtɪ.və.ti/",
    "pos": "n",
    "meaning": "活动",
    "example": "Pit row was abuzz with activity.",
    "exampleTranslation": "维修站一片繁忙。"
  },
  {
    "word": "actor",
    "phonetic": "/ˈæk.tə/",
    "pos": "n",
    "meaning": "男演员",
    "example": "I need the actor.",
    "exampleTranslation": "我需要这位演员。"
  },
  {
    "word": "actress",
    "phonetic": "/ˈak.tɹəs/",
    "pos": "n",
    "meaning": "女演员",
    "example": "The actress is important.",
    "exampleTranslation": "这位女演员很重要。"
  },
  {
    "word": "actual",
    "phonetic": "/ˈak(t)ʃj(ʊ)əl/",
    "pos": "adj",
    "meaning": "实际的; 现实的",
    "example": "The actual government expenses dramatically exceed the budget.",
    "exampleTranslation": "实际政府支出大大超过预算。"
  },
  {
    "word": "acute",
    "phonetic": "/əˈkjuːt/",
    "pos": "adj",
    "meaning": "敏锐的, 急性的",
    "example": "The word ‘cafe’ often has an acute over the ‘e’.",
    "exampleTranslation": "“cafe”这个词的字母“e”上常有一个尖音符。"
  },
  {
    "word": "ad",
    "phonetic": "/æd/",
    "pos": "n",
    "meaning": "公元",
    "example": "I have placed both of the ads in the newspaper as instructed.",
    "exampleTranslation": "我已经按照指示在报纸上刊登了两则广告。"
  },
  {
    "word": "adapt",
    "phonetic": "/əˈdæpt/",
    "pos": "v",
    "meaning": "使适应, 改编",
    "example": "to adapt a story for the stage",
    "exampleTranslation": "把故事改编成舞台剧"
  },
  {
    "word": "adaptation",
    "phonetic": "/ˌædæpˈteɪʃən/",
    "pos": "n",
    "meaning": "适应, 改编, 改写本",
    "example": "This is a adaptation.",
    "exampleTranslation": "这是一个改编版本。"
  },
  {
    "word": "add",
    "phonetic": "/æd/",
    "pos": "v",
    "meaning": "添加, 增加",
    "example": "When the player has fought the boss for one minute, two adds will arrive from the back and must be dealt with.",
    "exampleTranslation": "当玩家与BOSS战斗一分钟后，两个小怪将从后面出现，必须处理。"
  },
  {
    "word": "addicted",
    "phonetic": "/əˈdɪktɪd/",
    "pos": "adj",
    "meaning": "成瘾的",
    "example": "This is addicted.",
    "exampleTranslation": "这是上瘾的。"
  },
  {
    "word": "addition",
    "phonetic": "/æˈdɪʃən/",
    "pos": "n",
    "meaning": "增加; 加法",
    "example": "The addition of five more items to the agenda will make the meeting unbearably long.",
    "exampleTranslation": "议程再增加五个项目将使会议长得难以忍受。"
  },
  {
    "word": "address",
    "phonetic": "/æˈdɹɛs/",
    "pos": "n",
    "meaning": "地址 v.  写姓名地址；演说；称呼",
    "example": "He addressed some portions of his remarks to his supporters, some to his opponents.",
    "exampleTranslation": "他把讲话的部分内容对支持者说，部分对反对者说。"
  },
  {
    "word": "adequate",
    "phonetic": "/ˈædɪkwət/",
    "pos": "adj",
    "meaning": "适当的, 足够的",
    "example": "an adequate definition",
    "exampleTranslation": "一个恰当的定义"
  },
  {
    "word": "adjust",
    "phonetic": "/əˈdʒʌst/",
    "pos": "v",
    "meaning": "调整, 调节, 校准, 使适合",
    "example": "She wants to adjust.",
    "exampleTranslation": "她想调整。"
  },
  {
    "word": "adjustment",
    "phonetic": "/əˈdʒʌst.mənt/",
    "pos": "n",
    "meaning": "调整, 调节, 调节器",
    "example": "The credit card company made an adjustment to my account to waive the late fee.",
    "exampleTranslation": "信用卡公司对我的账户进行了调整，免除了滞纳金。"
  },
  {
    "word": "administration",
    "phonetic": "/ədˌmɪnəˈstɹeɪʃən/",
    "pos": "n",
    "meaning": "管理, 经营, 行政部门",
    "example": "Successive US administrations have had similar Middle East policies.",
    "exampleTranslation": "历届美国政府都有类似的中东政策。"
  },
  {
    "word": "admirable",
    "phonetic": "/ˈæd.məɹ.ə.bəl/",
    "pos": "adj",
    "meaning": "令人倾佩的, 值的赞美的, 绝妙的, 极好的",
    "example": "It's admirable that Shelley overcame her handicap and excelled in her work.",
    "exampleTranslation": "雪莱克服了残疾并在工作中表现出色，令人钦佩。"
  },
  {
    "word": "admire",
    "phonetic": "/ədˈmaɪə/",
    "pos": "v",
    "meaning": "钦佩; 羡慕",
    "example": "He had always admired the work ethos and family values of his friend.",
    "exampleTranslation": "他一直钦佩朋友的工作精神和家庭价值观。"
  },
  {
    "word": "admission",
    "phonetic": "/ædˈmɪʃ.ən/",
    "pos": "n",
    "meaning": "准入, 接纳",
    "example": "I request admission for two adults",
    "exampleTranslation": "我请求两名成年人入场"
  },
  {
    "word": "admit",
    "phonetic": "/ədˈmɪt/",
    "pos": "v",
    "meaning": "承认, 准许（入场, 入学）",
    "example": "A ticket admits one into a playhouse.",
    "exampleTranslation": "一张票允许一人进入剧院。"
  },
  {
    "word": "adolescence",
    "phonetic": "/ˌædəˈlɛsəns/",
    "pos": "n",
    "meaning": "青春期",
    "example": "During adolescence, the body and mind go through many complex changes, some of which are difficult to deal with.",
    "exampleTranslation": "青春期期间，身心都会经历许多复杂的变化，其中一些很难应对。"
  },
  {
    "word": "adolescent",
    "phonetic": "/ˌædəˈlɛsənt/",
    "pos": "n",
    "meaning": "青春期的, 青春的",
    "example": "The adolescent is important.",
    "exampleTranslation": "这个青少年很重要。"
  },
  {
    "word": "adopt",
    "phonetic": "/əˈdɒpt/",
    "pos": "v",
    "meaning": "采用, 收养",
    "example": "He adopted a new look in order to fit in with his new workmates.",
    "exampleTranslation": "他采用了新形象以融入新同事。"
  },
  {
    "word": "adore",
    "phonetic": "/əˈdɔː/",
    "pos": "v",
    "meaning": "崇拜, 爱慕, (口语)喜爱",
    "example": "It is obvious to everyone that Gerry adores Heather.",
    "exampleTranslation": "大家都看得出格里崇拜希瑟。"
  },
  {
    "word": "adult",
    "phonetic": "/əˈdʌlt/",
    "pos": "n",
    "meaning": "成年人",
    "example": "an adult human, animal, or plant",
    "exampleTranslation": "成年的人、动物或植物"
  },
  {
    "word": "advance",
    "phonetic": "/ədˈvaːns/",
    "pos": "v",
    "meaning": "推进, 促进; 前进",
    "example": "an advance in health or knowledge",
    "exampleTranslation": "健康或知识的进步"
  },
  {
    "word": "advantage",
    "phonetic": "/ədˈvɑːn.tɪdʒ/",
    "pos": "n",
    "meaning": "优点; 好处",
    "example": "The enemy had the advantage of a more elevated position.",
    "exampleTranslation": "敌人占据了更高的位置优势。"
  },
  {
    "word": "adventure",
    "phonetic": "/ædˈvɛnt͡ʃɚ/",
    "pos": "n",
    "meaning": "冒险; 奇遇",
    "example": "A life full of adventures.",
    "exampleTranslation": "充满冒险的生活。"
  },
  {
    "word": "advertise",
    "phonetic": "/ˈadvə(ɹ)taɪz/",
    "pos": "v",
    "meaning": "为…做广告",
    "example": "For personal needs, advertise on the internet or in a local newspaper.",
    "exampleTranslation": "个人需求可以在互联网或当地报纸上刊登广告。"
  },
  {
    "word": "advertisement",
    "phonetic": "/ədˈvɜːtɪsmənt/",
    "pos": "n",
    "meaning": "广告",
    "example": "Companies try to sell their products using advertisements in form of placards, television spots and print publications.",
    "exampleTranslation": "公司试图通过广告牌、电视广告和印刷出版物上的广告来销售产品。"
  },
  {
    "word": "advice",
    "phonetic": "/ədˈvaɪs/",
    "pos": "n",
    "meaning": "忠告, 劝告, 建议",
    "example": "She was offered various piece of advice on what to do with her new-found wealth.",
    "exampleTranslation": "她得到了各种关于如何处理新获得的财富的建议。"
  },
  {
    "word": "advise",
    "phonetic": "/ədˈvaɪz/",
    "pos": "v",
    "meaning": "忠告, 劝告, 建议",
    "example": "The dentist advised me to brush three times a day.",
    "exampleTranslation": "牙医建议我每天刷牙三次。"
  },
  {
    "word": "advocate",
    "phonetic": "/ˈæd.və.keɪt/",
    "pos": "v",
    "meaning": "提倡, 鼓吹",
    "example": "Since she started working with her advocate, she has become much more confident.",
    "exampleTranslation": "自从她开始与倡导者合作以来，她变得更加自信。"
  },
  {
    "word": "affair",
    "phonetic": "/əˈfɛə/",
    "pos": "n",
    "meaning": "事, 事情",
    "example": "a difficult affair to manage",
    "exampleTranslation": "一件难以处理的事情"
  },
  {
    "word": "affect",
    "phonetic": "/əˈfɛkt/",
    "pos": "v",
    "meaning": "影响，感动",
    "example": "The experience affected me deeply.",
    "exampleTranslation": "这段经历深深地影响了我。"
  },
  {
    "word": "affection",
    "phonetic": "/əˈfɛkʃən/",
    "pos": "n",
    "meaning": "友爱, 爱情, 影响",
    "example": "I have a lot of affection for my little sister.",
    "exampleTranslation": "我很爱我的小妹妹。"
  },
  {
    "word": "afford",
    "phonetic": "/əˈfɔːd/",
    "pos": "v",
    "meaning": "负担得起（…的费用）; 抽得出（时间）; 提供",
    "example": "I think we can afford the extra hour it will take.  We can only afford to buy a small car at the moment.",
    "exampleTranslation": "负担得起（…的费用）; 抽得出（时间）; 提供。"
  },
  {
    "word": "afraid",
    "phonetic": "/əˈfɹeɪd/",
    "pos": "adj",
    "meaning": "害怕的; 担心",
    "example": "He is afraid of death.",
    "exampleTranslation": "他害怕死亡。"
  },
  {
    "word": "africa",
    "phonetic": "/ˈæfrɪkə/",
    "pos": "n",
    "meaning": "非洲",
    "example": "This is a africa.",
    "exampleTranslation": "这是非洲。"
  },
  {
    "word": "african",
    "phonetic": "/ˈæfrɪkən/",
    "pos": "adj",
    "meaning": "非洲的, 非洲人的n. 非洲人",
    "example": "This is african.",
    "exampleTranslation": "这是非洲的。"
  },
  {
    "word": "after",
    "phonetic": "/ˈæf.tə(ɹ)/",
    "pos": "adv",
    "meaning": "后来 prep. 在…之后;  conj. 在…以后",
    "example": "The after gun is abaft the forward gun.",
    "exampleTranslation": "后炮在前炮的后面。"
  },
  {
    "word": "afternoon",
    "phonetic": "/af.təɾˈnʉːn/",
    "pos": "n",
    "meaning": "下午, 午后",
    "example": "I need the afternoon.",
    "exampleTranslation": "我需要下午的时间。"
  },
  {
    "word": "afterwards",
    "phonetic": "/ˈɑːftə.wədz/",
    "pos": "adv",
    "meaning": "后来",
    "example": "She speaks afterwards.",
    "exampleTranslation": "她后来才说。"
  },
  {
    "word": "again",
    "phonetic": "/əˈɡeɪn/",
    "pos": "adv",
    "meaning": "再一次; 再, 又",
    "example": "Great, thanks again!",
    "exampleTranslation": "太好了，再次感谢！"
  },
  {
    "word": "against",
    "phonetic": "/əˈɡeɪnst/",
    "pos": "prep",
    "meaning": "对着, 反对",
    "example": "It is hard work to swim against the current.",
    "exampleTranslation": "逆流而上是很辛苦的。"
  },
  {
    "word": "age",
    "phonetic": "/eɪd͡ʒ/",
    "pos": "n",
    "meaning": "年龄; 时代",
    "example": "the age of infancy",
    "exampleTranslation": "婴儿期"
  },
  {
    "word": "agency",
    "phonetic": "/ˈeɪ.dʒən.si/",
    "pos": "n",
    "meaning": "代理处, 行销处, 代理, 中介",
    "example": "individual agency",
    "exampleTranslation": "个人代理"
  },
  {
    "word": "agenda",
    "phonetic": "/əˈdʒɛn.də/",
    "pos": "n",
    "meaning": "议程",
    "example": "This is a agenda.",
    "exampleTranslation": "这是一个议程。"
  },
  {
    "word": "agent",
    "phonetic": "/ˈeɪ.dʒənt/",
    "pos": "n",
    "meaning": "代理人, 经纪人; 代理商, 经理人",
    "example": "I need the agent.",
    "exampleTranslation": "我需要这位代理人。"
  },
  {
    "word": "aggressive",
    "phonetic": "/əˈɡɹɛs.ɪv/",
    "pos": "adj",
    "meaning": "好斗的, 敢作敢为的,  侵略性的",
    "example": "an aggressive policy, war, person, nation",
    "exampleTranslation": "激进的政策、战争、个人、国家"
  },
  {
    "word": "ago",
    "phonetic": "/əˈɡəʊ/",
    "pos": "adv",
    "meaning": "以前",
    "example": "in days ago/in days agone",
    "exampleTranslation": "在过去的日子里"
  },
  {
    "word": "agree",
    "phonetic": "/əˈɡɹi/",
    "pos": "v",
    "meaning": "同意; 应允",
    "example": "all parties agree in the expediency of the law.",
    "exampleTranslation": "各方都同意这项法律的权宜之计。"
  },
  {
    "word": "agreement",
    "phonetic": "/əˈɡɹiːmənt/",
    "pos": "n",
    "meaning": "同意, 一致; 协定, 协议",
    "example": "to enter an agreement;  the UK and US negotiators nearing agreement;  he nodded his agreement.",
    "exampleTranslation": "达成协议； 英美谈判代表即将达成协议； 他点头表示同意。"
  },
  {
    "word": "agricultural",
    "phonetic": "/ˌæɡɹɪˈkʌltjʊəɹəl/",
    "pos": "adj",
    "meaning": "农业的",
    "example": "An agricultural tool",
    "exampleTranslation": "一件农具"
  },
  {
    "word": "agriculture",
    "phonetic": "/ˈæɡɹɪˌkʌltʃə/",
    "pos": "n",
    "meaning": "农业, 农学",
    "example": "This is a agriculture.",
    "exampleTranslation": "这是农业。"
  },
  {
    "word": "ahead",
    "phonetic": "/əˈhɛd/",
    "pos": "adv",
    "meaning": "在前, 向前",
    "example": "Just ahead you can see the cliffs.",
    "exampleTranslation": "就在前面你可以看到悬崖。"
  },
  {
    "word": "aid",
    "phonetic": "/eɪd/",
    "pos": "n",
    "meaning": "援助; 救护; 辅助器具",
    "example": "He came to my aid when I was foundering.",
    "exampleTranslation": "当我陷入困境时，他来帮助我。"
  },
  {
    "word": "aids",
    "phonetic": "/eɪdz/",
    "pos": "n",
    "meaning": "艾滋病",
    "example": "He came to my aid when I was foundering.",
    "exampleTranslation": "当我陷入困境时，他来帮助我。"
  },
  {
    "word": "aim",
    "phonetic": "/eɪm/",
    "pos": "n",
    "meaning": "目的; 目标 v. 计划, 打算; 瞄准; 针对",
    "example": "Take time with the aim of your gun.",
    "exampleTranslation": "瞄准时要花时间。"
  },
  {
    "word": "air",
    "phonetic": "/ˈɛə/",
    "pos": "n",
    "meaning": "空气; 大气",
    "example": "I'm going outside to get some air.",
    "exampleTranslation": "我要出去呼吸新鲜空气。"
  },
  {
    "word": "aircraft",
    "phonetic": "/ɛə.kɹɑːft/",
    "pos": "n",
    "meaning": "飞机 (单复数同)",
    "example": "This is a aircraft.",
    "exampleTranslation": "这是一架飞机。"
  },
  {
    "word": "airline",
    "phonetic": "/ˈerlaɪn/",
    "pos": "n",
    "meaning": "航空公司; 航空系统",
    "example": "I need the airline.",
    "exampleTranslation": "我需要这家航空公司。"
  },
  {
    "word": "airmail",
    "phonetic": "/ˈɛə.meɪl/",
    "pos": "n",
    "meaning": "航空邮件",
    "example": "I need the airmail.",
    "exampleTranslation": "我需要航空邮件。"
  },
  {
    "word": "airplane",
    "phonetic": "/ˈɛəpleɪn/",
    "pos": "n",
    "meaning": "（美）飞机",
    "example": "The airplane is important.",
    "exampleTranslation": "这架飞机很重要。"
  },
  {
    "word": "airport",
    "phonetic": "/ˈɛə.pɔːt/",
    "pos": "n",
    "meaning": "航空站, 飞机场",
    "example": "We arrived at the airport early.",
    "exampleTranslation": "我们很早就到了机场。"
  },
  {
    "word": "airspace",
    "phonetic": "/ˈerspeɪs/",
    "pos": "n",
    "meaning": "空域, 领空",
    "example": "Various European countries transferred the aviation control of their adjoining airspace to Eurocontrol, while each retaining legal jurisdiction.",
    "exampleTranslation": "多个欧洲国家将相邻空域的航空管制权移交给了欧洲航空安全组织，同时各自保留法律管辖权。"
  },
  {
    "word": "alarm",
    "phonetic": "/əˈlɑːm/",
    "pos": "n",
    "meaning": "警报",
    "example": "The clock radio is a friendlier version of the cold alarm by the bedside.",
    "exampleTranslation": "收音机闹钟比床边冰冷的闹钟更友好。"
  },
  {
    "word": "album",
    "phonetic": "/ˈælbəm/",
    "pos": "n",
    "meaning": "集邮本, 照相簿",
    "example": "The album is important.",
    "exampleTranslation": "这张专辑很重要。"
  },
  {
    "word": "alcohol",
    "phonetic": "/ˈæl.kə.hɒl/",
    "pos": "n",
    "meaning": "酒精, 酒",
    "example": "I need the alcohol.",
    "exampleTranslation": "我需要酒精。"
  },
  {
    "word": "alcoholic",
    "phonetic": "/ˌælkəˈhɒlɪk/",
    "pos": "adj",
    "meaning": "含酒精的",
    "example": "He ordered an alcoholic beverage.",
    "exampleTranslation": "他点了一杯含酒精饮料。"
  },
  {
    "word": "algebra",
    "phonetic": "/ˈæl.dʒɪ.bɹə/",
    "pos": "adj",
    "meaning": "代数学",
    "example": "This is algebra.",
    "exampleTranslation": "这是代数。"
  },
  {
    "word": "alike",
    "phonetic": "/əˈlaɪk/",
    "pos": "adj",
    "meaning": "相同的, 相似的 adv.以同样的方式, 类似于",
    "example": "That is alike.",
    "exampleTranslation": "那是相似的。"
  },
  {
    "word": "alive",
    "phonetic": "/əˈlaɪv/",
    "pos": "adj",
    "meaning": "活着的, 活跃的",
    "example": "As long as the plant is alive, he will continue to water it.",
    "exampleTranslation": "只要植物还活着，他就会继续浇水。"
  },
  {
    "word": "all",
    "phonetic": "/ɔːl/",
    "pos": "adv",
    "meaning": "全部地 adj. 全（部）整 pron. 全部; 全体人员",
    "example": "She gave her all, and collapsed at the finish line.",
    "exampleTranslation": "她全力以赴，在终点线倒下。"
  },
  {
    "word": "allergic",
    "phonetic": "/ə.ˈlɜː.dʒɪk/",
    "pos": "n",
    "meaning": "患过敏症的",
    "example": "I am allergic to cats.",
    "exampleTranslation": "我对猫过敏。"
  },
  {
    "word": "alley",
    "phonetic": "/ˈæ.li/",
    "pos": "n",
    "meaning": "小路, 巷",
    "example": "The parking lot to my friend's apartment building is in the alley.",
    "exampleTranslation": "我朋友公寓楼的停车场在小巷里。"
  },
  {
    "word": "allocate",
    "phonetic": "/ˈæl.ə.keɪt/",
    "pos": "v",
    "meaning": "分派, 分配",
    "example": "The bulk of K–12 education funds are allocated to school districts that in turn pay for the cost of operating schools.",
    "exampleTranslation": "K-12教育资金的大部分分配给学区，学区再支付学校运营成本。"
  },
  {
    "word": "allow",
    "phonetic": "/əˈlaʊ/",
    "pos": "v",
    "meaning": "允许, 准许",
    "example": "to allow a servant his liberty;  to allow a free passage;  to allow one day for rest",
    "exampleTranslation": "给予仆人自由； 允许自由通行； 给予一天休息时间"
  },
  {
    "word": "allowance",
    "phonetic": "/əˈlaʊəns/",
    "pos": "n",
    "meaning": "宽容, 允许, 津贴, 补助",
    "example": "her meagre allowance of food or drink",
    "exampleTranslation": "她微薄的食物或饮料配给"
  },
  {
    "word": "almost",
    "phonetic": "/ɔːl.ˈməʊst/",
    "pos": "adv",
    "meaning": "几乎, 差不多",
    "example": "In all the submissions, they found four papers that were clearly worth publishing and another dozen almosts.",
    "exampleTranslation": "在所有投稿中，他们发现四篇论文明显值得发表，还有十几篇差不多。"
  },
  {
    "word": "alone",
    "phonetic": "/əˈləʊn/",
    "pos": "adj",
    "meaning": "单独的, 孤独的",
    "example": "I can't ask for help because I am alone.",
    "exampleTranslation": "我无法寻求帮助，因为我独自一人。"
  },
  {
    "word": "along",
    "phonetic": "/əˈlɑŋ/",
    "pos": "adv",
    "meaning": "向前; 和…一起; 一同 prep. 沿着; 顺着",
    "example": "John played the piano and everyone sang along.",
    "exampleTranslation": "约翰弹钢琴，大家一起唱。"
  },
  {
    "word": "alongside",
    "phonetic": "/ə.lɒŋˈsaɪd/",
    "pos": "adv",
    "meaning": "在...的侧面; 傍; 沿靠; 与...并排",
    "example": "Ahoy! Bring your boat alongside mine.",
    "exampleTranslation": "喂！把你的船靠到我的船边来。"
  },
  {
    "word": "aloud",
    "phonetic": "/əˈlaʊd/",
    "pos": "adv",
    "meaning": "大声地",
    "example": "Try speaking aloud rather than whispering.",
    "exampleTranslation": "试着大声说话而不是低语。"
  },
  {
    "word": "alphabet",
    "phonetic": "/ˈæl.fə.bɛt/",
    "pos": "n",
    "meaning": "字母表",
    "example": "In the first year of school, pupils are taught to recite the alphabet.",
    "exampleTranslation": "在一年级，学生们被教导背诵字母表。"
  },
  {
    "word": "already",
    "phonetic": "/ɑlˈɹɛdi/",
    "pos": "adv",
    "meaning": "已经",
    "example": "Are you quitting already?",
    "exampleTranslation": "你这么快就要走了吗？"
  },
  {
    "word": "also",
    "phonetic": "/ˈɔːl.səʊ/",
    "pos": "adv",
    "meaning": "也",
    "example": "They had porridge for breakfast, and also toast.",
    "exampleTranslation": "他们早餐吃了粥，还有吐司。"
  },
  {
    "word": "alternative",
    "phonetic": "/ɒl.ˈtɜː(ɹ).nə.tɪv/",
    "pos": "adj",
    "meaning": "选择性的, 二中择一的",
    "example": "an alternative proposition",
    "exampleTranslation": "一个替代命题"
  },
  {
    "word": "although",
    "phonetic": "/ɔːlˈðəʊ/",
    "pos": "conj",
    "meaning": "虽然, 尽管",
    "example": "Although it was very muddy, the football game went on.",
    "exampleTranslation": "虽然很泥泞，足球比赛还是继续进行。"
  },
  {
    "word": "altitude",
    "phonetic": "/ˈælt.ɪˌtjuːd/",
    "pos": "n",
    "meaning": "(尤指海拔)高度",
    "example": "As the altitude increases, the temperature gets lower, so remember to bring warm clothes to the mountains.",
    "exampleTranslation": "随着海拔升高，温度降低，所以记得带暖和的衣服上山。"
  },
  {
    "word": "altogether",
    "phonetic": "/ɔː.tuːˈɡɛð.ə(ɹ)/",
    "pos": "adv",
    "meaning": "总共",
    "example": "Altogether, I'm sorry it happened.",
    "exampleTranslation": "总的来说，我很抱歉发生了这件事。"
  },
  {
    "word": "aluminium",
    "phonetic": "/əˈluːmɪnəm/",
    "pos": "n",
    "meaning": "铝",
    "example": "I need the aluminium.",
    "exampleTranslation": "我需要铝。"
  },
  {
    "word": "always",
    "phonetic": "/ˈɔː(l).weɪz/",
    "pos": "adv",
    "meaning": "总是; 一直; 永远",
    "example": "Airplanes did not always exist as a form of transportation.",
    "exampleTranslation": "飞机并不一直是一种交通方式。"
  },
  {
    "word": "am",
    "phonetic": "/e̞m/",
    "pos": "v",
    "meaning": "be 的人称形式之一",
    "example": "I am a student.",
    "exampleTranslation": "我是一名学生。"
  },
  {
    "word": "amateur",
    "phonetic": "/ˈæ.mə.tə/",
    "pos": "adj",
    "meaning": "业余的",
    "example": "The contest is only open to amateurs.",
    "exampleTranslation": "比赛只对业余爱好者开放。"
  },
  {
    "word": "amaze",
    "phonetic": "/əˈmeɪz/",
    "pos": "v",
    "meaning": "使惊奇；使吃惊",
    "example": "She wants to amaze.",
    "exampleTranslation": "她想让人惊叹。"
  },
  {
    "word": "amazing",
    "phonetic": "/əˈmeɪzɪŋ/",
    "pos": "adj",
    "meaning": "令人惊异的",
    "example": "He was amazed when he found that the girl was a robot.",
    "exampleTranslation": "当他发现那个女孩是机器人时，他很惊讶。"
  },
  {
    "word": "ambassador",
    "phonetic": "/æmˈbæsədər/",
    "pos": "",
    "meaning": "(ambassadress) n. 大使; (大使夫人)",
    "example": "He is a good ambassador.",
    "exampleTranslation": "他是一位好大使。"
  },
  {
    "word": "ambiguous",
    "phonetic": "/æmˈbɪɡjuəs/",
    "pos": "adj",
    "meaning": "暧昧的, 不明确的",
    "example": "The politician was criticized for his ambiguous statements and lack of precision.",
    "exampleTranslation": "这位政治家因模棱两可的声明和缺乏精确性而受到批评。"
  },
  {
    "word": "ambition",
    "phonetic": "/æmˈbɪ.ʃən/",
    "pos": "n",
    "meaning": "野心, 雄心",
    "example": "My son, John, wants to be a firefighter very much. He has a lot of ambition.",
    "exampleTranslation": "我的儿子约翰非常想成为一名消防员。他有很大的抱负。"
  },
  {
    "word": "ambulance",
    "phonetic": "/ˈæm.bjə.ləns/",
    "pos": "n",
    "meaning": "救护车",
    "example": "The ambulance is important.",
    "exampleTranslation": "这辆救护车很重要。"
  },
  {
    "word": "america",
    "phonetic": "/əˈmerɪkə/",
    "pos": "n",
    "meaning": "美国; 美洲",
    "example": "The america is important.",
    "exampleTranslation": "美国很重要。"
  },
  {
    "word": "american",
    "phonetic": "/əˈmerɪkən/",
    "pos": "adj",
    "meaning": "美洲的；美国人的 n. 美国人; 美洲人",
    "example": "This is american.",
    "exampleTranslation": "这是美国的。"
  },
  {
    "word": "among",
    "phonetic": "/əˈmɒŋ/",
    "pos": "prep",
    "meaning": "在…中间; …之一",
    "example": "How can you speak with authority about their customs when you have never lived among them?",
    "exampleTranslation": "你从未在他们中间生活过，怎么能权威地谈论他们的习俗？"
  },
  {
    "word": "amount",
    "phonetic": "/əˈmaʊnt/",
    "pos": "n",
    "meaning": "数量 v.（与to连用） 等于；总计",
    "example": "The amount of atmospheric pollution threatens a health crisis.",
    "exampleTranslation": "大气污染的数量威胁着健康危机。"
  },
  {
    "word": "ample",
    "phonetic": "/ˈæm.pəl/",
    "pos": "adj",
    "meaning": "充足的, 丰富的",
    "example": "an ample house",
    "exampleTranslation": "一所宽敞的房子"
  },
  {
    "word": "amuse",
    "phonetic": "/əˈmjuːz/",
    "pos": "v",
    "meaning": "（使人）快乐, 逗乐",
    "example": "I watch these movies because they amuse me.",
    "exampleTranslation": "我看这些电影是因为它们让我开心。"
  },
  {
    "word": "amusement",
    "phonetic": "/əˈmjuzmənt/",
    "pos": "n",
    "meaning": "娱乐",
    "example": "The amusement is important.",
    "exampleTranslation": "这种娱乐很重要。"
  },
  {
    "word": "analyse/ze",
    "phonetic": "/ze",
    "pos": "",
    "meaning": "",
    "example": "We need to analyse the data.",
    "exampleTranslation": "我们需要分析数据。"
  },
  {
    "word": "analysis",
    "phonetic": "/əˈnælɪsɪs/",
    "pos": "n",
    "meaning": "分析, 分解",
    "example": "The analysis is important.",
    "exampleTranslation": "这个分析很重要。"
  },
  {
    "word": "ancestor",
    "phonetic": "/ˈæn.sɛs.tə/",
    "pos": "n",
    "meaning": "祖宗; 祖先",
    "example": "This fossil animal is regarded as the ancestor of the horse.",
    "exampleTranslation": "这种化石动物被认为是马的祖先。"
  },
  {
    "word": "anchor",
    "phonetic": "/ˈæŋkər/",
    "pos": "",
    "meaning": "v& n. 抛锚, 锚",
    "example": "The ship dropped its anchor.",
    "exampleTranslation": "船抛锚了。"
  },
  {
    "word": "ancient",
    "phonetic": "/ˈeɪn.ʃənt/",
    "pos": "adj",
    "meaning": "古代的, 古老的",
    "example": "an ancient city  an ancient forest",
    "exampleTranslation": "一座古城 一片原始森林"
  },
  {
    "word": "and",
    "phonetic": "/ænd/",
    "pos": "conj",
    "meaning": "和; 又; 而",
    "example": "I like apples and bananas.",
    "exampleTranslation": "我喜欢苹果和香蕉。"
  },
  {
    "word": "anecdote",
    "phonetic": "/ˈæ.nɪk.doʊt/",
    "pos": "n",
    "meaning": "轶事, 奇闻",
    "example": "The anecdote is important.",
    "exampleTranslation": "这个轶事很重要。"
  },
  {
    "word": "anger",
    "phonetic": "/ˈæŋɡə(ɹ)/",
    "pos": "n",
    "meaning": "怒火, 愤怒",
    "example": "You need to control your anger.",
    "exampleTranslation": "你需要控制你的愤怒。"
  },
  {
    "word": "angle",
    "phonetic": "/ˈæŋ.ɡəl/",
    "pos": "n",
    "meaning": "角, 角落",
    "example": "the angle between lines A and B",
    "exampleTranslation": "A线和B线之间的角度"
  },
  {
    "word": "angry",
    "phonetic": "/ˈæŋ.ɡɹi/",
    "pos": "adj",
    "meaning": "生气的, 愤怒的",
    "example": "An angry mob started looting the warehouse.",
    "exampleTranslation": "一群愤怒的暴民开始抢劫仓库。"
  },
  {
    "word": "animal",
    "phonetic": "/ˈænɪməl/",
    "pos": "n",
    "meaning": "动物",
    "example": "A cat is an animal, not a plant. Humans are also animals, under the scientific definition, as we are not plants.",
    "exampleTranslation": "猫是动物，不是植物。根据科学定义，人类也是动物，因为我们不是植物。"
  },
  {
    "word": "ankle",
    "phonetic": "/ˈæŋ.kəl/",
    "pos": "n",
    "meaning": "踝",
    "example": "This is a ankle.",
    "exampleTranslation": "这是脚踝。"
  },
  {
    "word": "anniversary",
    "phonetic": "/ˌænɪˈvɜːs(ə)ɹi/",
    "pos": "n",
    "meaning": "周年纪念",
    "example": "Today is the fiftieth anniversary of the end of the war.",
    "exampleTranslation": "今天是战争结束五十周年。"
  },
  {
    "word": "announce",
    "phonetic": "/əˈnaʊns/",
    "pos": "v",
    "meaning": "宣布, 宣告",
    "example": "She wants to announce.",
    "exampleTranslation": "她想宣布。"
  },
  {
    "word": "annoy",
    "phonetic": "/əˈnɔɪ/",
    "pos": "v",
    "meaning": "（使）烦恼; 伤害; 骚扰",
    "example": "Marc loved his sister, but when she annoyed him he wanted to switch her off.",
    "exampleTranslation": "马克爱他的妹妹，但当她惹恼他时，他想把她关掉。"
  },
  {
    "word": "annual",
    "phonetic": "/ˈæn.ju.əl/",
    "pos": "adj",
    "meaning": "一年一次的, 每年的",
    "example": "I read the magazine, but I usually don't purchase the annuals.",
    "exampleTranslation": "我读这本杂志，但我通常不买年刊。"
  },
  {
    "word": "another",
    "phonetic": "/æˈnʌð.ə(ɹ)/",
    "pos": "adj",
    "meaning": "再一; 另一; 别的; 不同的 pron. 另一个",
    "example": "There is one sterling and here is another",
    "exampleTranslation": "这里有一英镑，那里还有另一个"
  },
  {
    "word": "answer",
    "phonetic": "/ˈan.sə/",
    "pos": "n",
    "meaning": "回答, 答复; 回信; 答案 v. 回答, 答复; 回信",
    "example": "Her answer to his proposal was a slap in the face.",
    "exampleTranslation": "她对他求婚的回答是一记耳光。"
  },
  {
    "word": "ant",
    "phonetic": "/ɛnt/",
    "pos": "n",
    "meaning": "蚂蚁",
    "example": "This is a ant.",
    "exampleTranslation": "这是一只蚂蚁。"
  },
  {
    "word": "antarctic",
    "phonetic": "/ænˈtɑːktɪk/",
    "pos": "adj",
    "meaning": "南极的",
    "example": "He seems antarctic.",
    "exampleTranslation": "他似乎很冷淡。"
  },
  {
    "word": "antique",
    "phonetic": "/ænˈtiːk/",
    "pos": "n",
    "meaning": "古董",
    "example": "The antique is important.",
    "exampleTranslation": "这件古董很重要。"
  },
  {
    "word": "anxiety",
    "phonetic": "/ˌæŋ(ɡ)ˈzaɪ.ə.ti/",
    "pos": "n",
    "meaning": "忧虑, 渴望",
    "example": "I need the anxiety.",
    "exampleTranslation": "我需要这种焦虑。"
  },
  {
    "word": "anxious",
    "phonetic": "/ˈaŋ(k)ʃəs/",
    "pos": "adj",
    "meaning": "忧虑的；焦虑的，不安的; 渴望的",
    "example": "I could tell she was anxious as she was biting her nails.",
    "exampleTranslation": "我可以看出她很焦虑，因为她在咬指甲。"
  },
  {
    "word": "any",
    "phonetic": "/ˈæni/",
    "pos": "pron",
    "meaning": "（无论）哪一个;（用于疑问句、否定句）一些;",
    "example": "I will not remain here any longer.",
    "exampleTranslation": "我不会再留在这里了。"
  },
  {
    "word": "anybody",
    "phonetic": "/ˈɛn.i.bɒd.i/",
    "pos": "pron",
    "meaning": "任何人, 无论谁",
    "example": "Anybody will do.",
    "exampleTranslation": "任何人都行。"
  },
  {
    "word": "anyhow",
    "phonetic": "/ˈæn.i.haʊ/",
    "pos": "adv",
    "meaning": "无论如何, 总之",
    "example": "Anyhow, he is dead now.",
    "exampleTranslation": "不管怎样，他现在死了。"
  },
  {
    "word": "anyone",
    "phonetic": "/ˈæniˌwʌn/",
    "pos": "pron",
    "meaning": "任何人, 无论谁",
    "example": "Almost anyone can change a light bulb.",
    "exampleTranslation": "几乎任何人都可以换灯泡。"
  },
  {
    "word": "anything",
    "phonetic": "/ˈɛ.nə.θɪŋ/",
    "pos": "pron",
    "meaning": "什么事（物）; 任何事（物）",
    "example": "I would not do it for anything.",
    "exampleTranslation": "我不会为任何事情这样做。"
  },
  {
    "word": "anyway",
    "phonetic": "/ˈɛniweɪ/",
    "pos": "adv",
    "meaning": "无论如何, 总之",
    "example": "He didn't enjoy washing his car, but it was so dirty that he did it anyway.",
    "exampleTranslation": "他不喜欢洗车，但车太脏了，他还是洗了。"
  },
  {
    "word": "anywhere",
    "phonetic": "/ˈɛn.iː.(h)wɛə(ɹ)/",
    "pos": "adv",
    "meaning": "任何地方",
    "example": "I don't know where I left my keys. They could be anywhere.",
    "exampleTranslation": "我不知道我把钥匙放在哪里了。它们可能在任何地方。"
  },
  {
    "word": "apart",
    "phonetic": "/əˈpɑː(ɹ)t/",
    "pos": "adv",
    "meaning": "分离, 分别地, 分离着 adj. 分开的",
    "example": "a world apart",
    "exampleTranslation": "一个不同的世界"
  },
  {
    "word": "apartment",
    "phonetic": "/əˈpɑːt.mənt/",
    "pos": "n",
    "meaning": "（美）一套房间",
    "example": "The apartment is important.",
    "exampleTranslation": "这套公寓很重要。"
  },
  {
    "word": "apologize",
    "phonetic": "/əˈpɒləd͡ʒaɪz/",
    "pos": "v",
    "meaning": "道歉, 谢罪",
    "example": "My correspondent apologized for not answering my letter.",
    "exampleTranslation": "我的通信者为没有回复我的信而道歉。"
  },
  {
    "word": "apology",
    "phonetic": "/əˈpɒl.ə.dʒi/",
    "pos": "n",
    "meaning": "道歉; 歉意",
    "example": "The CEO made a public apology for the scandal, and promised full cooperation with the authorities.",
    "exampleTranslation": "首席执行官为丑闻公开道歉，并承诺与当局充分合作。"
  },
  {
    "word": "apparent",
    "phonetic": "/əˈpæ.ɹənt/",
    "pos": "adj",
    "meaning": "显然的, 外观上的",
    "example": "This is apparent.",
    "exampleTranslation": "这是明显的。"
  },
  {
    "word": "appeal",
    "phonetic": "/əˈpiːl/",
    "pos": "v",
    "meaning": "请求, 呼吁;（常与to连用）吸引；引起兴趣",
    "example": "He made an appeal for volunteers to help at the festival.",
    "exampleTranslation": "他呼吁志愿者在节日帮忙。"
  },
  {
    "word": "appear",
    "phonetic": "/əˈpɪr/",
    "pos": "v",
    "meaning": "出现",
    "example": "They appear the project.",
    "exampleTranslation": "他们出现在项目中。"
  },
  {
    "word": "appearance",
    "phonetic": "/əˈpɪəɹəns/",
    "pos": "n",
    "meaning": "出现, 露面; 容貌",
    "example": "His sudden appearance surprised me.",
    "exampleTranslation": "他的突然出现让我很惊讶。"
  },
  {
    "word": "appendix",
    "phonetic": "/əˈpɛn.dɪks/",
    "pos": "n",
    "meaning": "附录, 附属品",
    "example": "The appendix is important.",
    "exampleTranslation": "这个附录很重要。"
  },
  {
    "word": "appetite",
    "phonetic": "/ˈæp.ə.taɪt/",
    "pos": "n",
    "meaning": "食欲, 欲望, 爱好",
    "example": "appetite for reading",
    "exampleTranslation": "阅读的欲望"
  },
  {
    "word": "applaud",
    "phonetic": "/əˈplɔːd/",
    "pos": "v",
    "meaning": "拍手喝彩, 称赞, 赞同",
    "example": "After the performance, the audience applauded for five minutes.",
    "exampleTranslation": "表演结束后，观众鼓掌了五分钟。"
  },
  {
    "word": "apple",
    "phonetic": "/ˈæp.əl/",
    "pos": "n",
    "meaning": "苹果",
    "example": "This is a apple.",
    "exampleTranslation": "这是一个苹果。"
  },
  {
    "word": "applicant",
    "phonetic": "/ˈæp.lə.kɪnt/",
    "pos": "n",
    "meaning": "申请者",
    "example": "Our job advertisement attracted seven applicants.",
    "exampleTranslation": "我们的招聘广告吸引了七名申请人。"
  },
  {
    "word": "application",
    "phonetic": "/aplɪˈkeɪʃ(ə)n/",
    "pos": "n",
    "meaning": "申请",
    "example": "The application of this cream should reduce the swelling.",
    "exampleTranslation": "这种药膏的应用应该会减少肿胀。"
  },
  {
    "word": "apply",
    "phonetic": "/əˈplaɪ/",
    "pos": "v",
    "meaning": "申请; 应用；适用",
    "example": "to apply cream to a rash",
    "exampleTranslation": "把药膏涂在皮疹上"
  },
  {
    "word": "appoint",
    "phonetic": "/əˈpɔɪnt/",
    "pos": "v",
    "meaning": "任命, 委任",
    "example": "We must appoint.",
    "exampleTranslation": "我们必须任命。"
  },
  {
    "word": "appointment",
    "phonetic": "/əˈpɔɪnt.mɛnt/",
    "pos": "n",
    "meaning": "约会",
    "example": "His appointment was deemed suitable",
    "exampleTranslation": "他的任命被认为是合适的"
  },
  {
    "word": "appreciate",
    "phonetic": "/əˈpɹiː.si.eɪt/",
    "pos": "v",
    "meaning": "欣赏; 感激",
    "example": "I appreciate your efforts",
    "exampleTranslation": "我感谢你的努力"
  },
  {
    "word": "appreciation",
    "phonetic": "/əˌpɹiː.ʃiˈeɪ.ʃən/",
    "pos": "n",
    "meaning": "感谢, 欣赏",
    "example": "We give to you this trophy as a token of our appreciation of all your years of service.",
    "exampleTranslation": "我们将这座奖杯赠予您，以感谢您多年的服务。"
  },
  {
    "word": "approach",
    "phonetic": "/əˈpɹəʊt͡ʃ/",
    "pos": "v",
    "meaning": "接近, 逼近 n. 方法, 步骤, 途径",
    "example": "1991, Carol Lee Johnston, Jeanne Lazaris, Plane Trigonometry, A New Approach.",
    "exampleTranslation": "1991年，Carol Lee Johnston，Jeanne Lazaris，《平面三角学：新方法》。"
  },
  {
    "word": "appropriate",
    "phonetic": "/əˈproʊpriət/",
    "pos": "adj",
    "meaning": "适当的",
    "example": "Let no man appropriate the use of a common benefit.",
    "exampleTranslation": "不要让任何人独占共同利益的使用。"
  },
  {
    "word": "approval",
    "phonetic": "/əˈpɹuːvəl/",
    "pos": "n",
    "meaning": "赞成, 承认, 批准",
    "example": "I need to get an approval on this purchase order.",
    "exampleTranslation": "我需要获得这份采购订单的批准。"
  },
  {
    "word": "approve",
    "phonetic": "/əˈpɹuːv/",
    "pos": "v",
    "meaning": "批准, 通过;（常与of连用）赞成，赞同",
    "example": "Although we may disagree with it, we must nevertheless approve the sentence handed down by the court-martial.",
    "exampleTranslation": "虽然我们可能不同意，但我们必须批准军事法庭的判决。"
  },
  {
    "word": "approximately",
    "phonetic": "/əˈpɹɒk.sɪ.mət.li/",
    "pos": "adv",
    "meaning": "近似地, 大约",
    "example": "...approximately 60 beats per minute.",
    "exampleTranslation": "...大约每分钟60次跳动。"
  },
  {
    "word": "arch",
    "phonetic": "/ɑːt͡ʃ/",
    "pos": "n",
    "meaning": "拱门; 拱形",
    "example": "to pass into the arch of a bridge",
    "exampleTranslation": "通过桥拱"
  },
  {
    "word": "architect",
    "phonetic": "/ˈɑːkɪtɛkt/",
    "pos": "n",
    "meaning": "建筑师",
    "example": "Plato made the causes of things to be matter, ideas, and an efficient architect.",
    "exampleTranslation": "柏拉图认为事物的原因是物质、理念和一位高效的建筑师。"
  },
  {
    "word": "arctic",
    "phonetic": "/ˈɑːrktɪk/",
    "pos": "adj",
    "meaning": "北极的; n. 北极",
    "example": "This is arctic.",
    "exampleTranslation": "这是北极的。"
  },
  {
    "word": "are",
    "phonetic": "/ɑːr/",
    "pos": "",
    "meaning": "v (be的变形) 是",
    "example": "We are good friends.",
    "exampleTranslation": "我们是好朋友。"
  },
  {
    "word": "area",
    "phonetic": "/ˈɛə̯ɹɪə̯/",
    "pos": "n",
    "meaning": "面积; 区域; 范围, 领域",
    "example": "The photo is a little dark in that area.",
    "exampleTranslation": "照片在那个区域有点暗。"
  },
  {
    "word": "argue",
    "phonetic": "/ˈɑː.ɡjuː/",
    "pos": "v",
    "meaning": "争辩, 争论",
    "example": "He also argued for stronger methods to be used against China.",
    "exampleTranslation": "他还主张对中国采取更强硬的方法。"
  },
  {
    "word": "argument",
    "phonetic": "/ˈɑːɡjʊmənt/",
    "pos": "n",
    "meaning": "争论, 辩论",
    "example": "They had a big argument.",
    "exampleTranslation": "他们发生了激烈的争论。"
  },
  {
    "word": "arise",
    "phonetic": "/əˈraɪz/",
    "pos": "",
    "meaning": "(arose, arisen) v. 起来, 升起; 出现；发生",
    "example": "A new problem will arise.",
    "exampleTranslation": "一个新问题将会出现。"
  },
  {
    "word": "arithmetic",
    "phonetic": "/əˈrɪθmətɪk/",
    "pos": "n",
    "meaning": "算术",
    "example": "arithmetic geometry",
    "exampleTranslation": "算术几何"
  },
  {
    "word": "arm",
    "phonetic": "/ɑːm/",
    "pos": "n",
    "meaning": "手臂，胳膊, 武器 v. 以…装备, 武装起来",
    "example": "She stood with her right arm extended and her palm forward to indicate “Stop!”",
    "exampleTranslation": "她站着伸出右臂，手掌向前示意“停下！”"
  },
  {
    "word": "armchair",
    "phonetic": "/ˈɑː(ɹ)mtʃɛə(ɹ)/",
    "pos": "n",
    "meaning": "扶手椅",
    "example": "These days I'm an armchair detective.",
    "exampleTranslation": "这些天我是个纸上谈兵的侦探。"
  },
  {
    "word": "army",
    "phonetic": "/ˈɑː.miː/",
    "pos": "n",
    "meaning": "军队",
    "example": "The army was sent in to quell the uprising.",
    "exampleTranslation": "军队被派去平息起义。"
  },
  {
    "word": "around",
    "phonetic": "/əˈɹaʊnd/",
    "pos": "adv",
    "meaning": "在周围; 在附近 prep. 在…周围; 大约",
    "example": "Is Clare around today?",
    "exampleTranslation": "克莱尔今天在吗？"
  },
  {
    "word": "arrange",
    "phonetic": "/əˈɹeɪndʒ/",
    "pos": "v",
    "meaning": "安排, 布置",
    "example": "to arrange to meet;   to arrange for supper",
    "exampleTranslation": "安排见面； 安排晚餐"
  },
  {
    "word": "arrangement",
    "phonetic": "/əˈɹeɪnd͡ʒmənt/",
    "pos": "n",
    "meaning": "安排, 布置",
    "example": "The arrangement is important.",
    "exampleTranslation": "这个安排很重要。"
  },
  {
    "word": "arrest",
    "phonetic": "/əˈɹɛst/",
    "pos": "v",
    "meaning": "逮捕, 拘留",
    "example": "The police have arrested a suspect in the murder inquiry.",
    "exampleTranslation": "警方在谋杀案调查中逮捕了一名嫌疑人。"
  },
  {
    "word": "arrival",
    "phonetic": "/əˈraɪvl/",
    "pos": "n",
    "meaning": "到来, 到达",
    "example": "The arrival is important.",
    "exampleTranslation": "这次到达很重要。"
  },
  {
    "word": "arrive",
    "phonetic": "/əˈɹaɪv/",
    "pos": "v",
    "meaning": "到达; 达到",
    "example": "He arrived home for two days.",
    "exampleTranslation": "他到家两天了。"
  },
  {
    "word": "arrow",
    "phonetic": "/ˈæɹ.əʊ/",
    "pos": "n",
    "meaning": "箭; 箭头",
    "example": "Arrow left until you reach the start of the text you want to delete.",
    "exampleTranslation": "向左箭头直到到达要删除的文本开头。"
  },
  {
    "word": "art",
    "phonetic": "/ɑːt/",
    "pos": "n",
    "meaning": "艺术, 美术",
    "example": "There is a debate as to whether graffiti is art or vandalism.",
    "exampleTranslation": "关于涂鸦是艺术还是破坏行为存在争议。"
  },
  {
    "word": "article",
    "phonetic": "/ˈɑːtɪkəl/",
    "pos": "n",
    "meaning": "文章; 东西, 物品; 冠词",
    "example": "a sales article",
    "exampleTranslation": "一件销售商品"
  },
  {
    "word": "artificial",
    "phonetic": "/ɑː(ɹ)təˈfɪʃəl/",
    "pos": "adj",
    "meaning": "人造的, 假的",
    "example": "The flowers were artificial, and he thought them rather tacky.",
    "exampleTranslation": "花是假的，他觉得它们相当俗气。"
  },
  {
    "word": "artist",
    "phonetic": "/ˈɑːtɪst/",
    "pos": "n",
    "meaning": "艺术家",
    "example": "I need the artist.",
    "exampleTranslation": "我需要这位艺术家。"
  },
  {
    "word": "as",
    "phonetic": "/əz/",
    "pos": "adv",
    "meaning": "& conj. 像…一样; 如同; 因为 prep. 作为,",
    "example": "It's not as well made, but it's twice as expensive.",
    "exampleTranslation": "做工不如那个好，但价格是两倍。"
  },
  {
    "word": "ash",
    "phonetic": "/æʃ/",
    "pos": "n",
    "meaning": "灰; 灰末",
    "example": "Ash from a fireplace can restore minerals to your garden's soil.",
    "exampleTranslation": "壁炉的灰烬可以恢复花园土壤的矿物质。"
  },
  {
    "word": "ashamed",
    "phonetic": "/əˈʃeɪmd/",
    "pos": "adj",
    "meaning": "惭愧; 害臊",
    "example": "That is ashamed.",
    "exampleTranslation": "那是羞愧的。"
  },
  {
    "word": "asia",
    "phonetic": "/ˈeɪʒə/",
    "pos": "n",
    "meaning": "亚洲",
    "example": "I need the asia.",
    "exampleTranslation": "我需要亚洲。"
  },
  {
    "word": "asian",
    "phonetic": "/ˈeɪʒn/",
    "pos": "adj",
    "meaning": "亚洲的, 亚洲人的 n. 亚洲人",
    "example": "That is asian.",
    "exampleTranslation": "那是亚洲的。"
  },
  {
    "word": "aside",
    "phonetic": "/əˈsaɪd/",
    "pos": "adv",
    "meaning": "在旁边",
    "example": "Move aside, please, so that these people can come through.",
    "exampleTranslation": "请让开，让这些人通过。"
  },
  {
    "word": "ask",
    "phonetic": "/ˈask/",
    "pos": "v",
    "meaning": "问, 询问; 要求; 邀请",
    "example": "I know this is a big ask, but …",
    "exampleTranslation": "我知道这是一个很大的请求，但是…"
  },
  {
    "word": "asleep",
    "phonetic": "/əˈsliːp/",
    "pos": "adj",
    "meaning": "睡着的, 熟睡",
    "example": "I was asleep when you called.",
    "exampleTranslation": "你打电话时我睡着了。"
  },
  {
    "word": "aspect",
    "phonetic": "/ˈæspɛkt/",
    "pos": "n",
    "meaning": "(问题等的)方面；样子, 外表, 面貌",
    "example": "Japan's aging population is an important aspect of its economy.",
    "exampleTranslation": "日本的人口老龄化是其经济的一个重要方面。"
  },
  {
    "word": "assess",
    "phonetic": "/əˈsɛs/",
    "pos": "v",
    "meaning": "估定, 评定",
    "example": "He assessed the situation.",
    "exampleTranslation": "他评估了情况。"
  },
  {
    "word": "assessment",
    "phonetic": "/əˈsesmənt/",
    "pos": "n",
    "meaning": "估定, 评定",
    "example": "The assessment is important.",
    "exampleTranslation": "这个评估很重要。"
  },
  {
    "word": "assist",
    "phonetic": "/əˈsɪst/",
    "pos": "v",
    "meaning": "援助, 帮助",
    "example": "The foundation gave a much needed assist to the shelter.",
    "exampleTranslation": "基金会给了收容所急需的帮助。"
  },
  {
    "word": "assistance",
    "phonetic": "/əˈsɪs.təns/",
    "pos": "n",
    "meaning": "援助, 帮助",
    "example": "This is a assistance.",
    "exampleTranslation": "这是一种帮助。"
  },
  {
    "word": "assistant",
    "phonetic": "/əˈsɪstənt/",
    "pos": "n",
    "meaning": "助手, 助理",
    "example": "an assistant surgeon",
    "exampleTranslation": "一位助理外科医生"
  },
  {
    "word": "associate",
    "phonetic": "/əˈsəʊsi.ət/",
    "pos": "v",
    "meaning": "(使) 发生联系, (使) 联合",
    "example": "She associates with her coworkers on weekends.",
    "exampleTranslation": "她周末和同事交往。"
  },
  {
    "word": "association",
    "phonetic": "/əˌsəʊsiˈeɪʃən/",
    "pos": "n",
    "meaning": "协会, 联合, 结交, 联想",
    "example": "The association is important.",
    "exampleTranslation": "这个协会很重要。"
  },
  {
    "word": "assume",
    "phonetic": "/əˈsuːm/",
    "pos": "v",
    "meaning": "假定, 设想",
    "example": "We assume that, as her parents were dentists, she knows quite a bit about dentistry.",
    "exampleTranslation": "我们假设，因为她的父母是牙医，她对牙科了解很多。"
  },
  {
    "word": "assumption",
    "phonetic": "/əˈsʌmp.ʃən/",
    "pos": "n",
    "meaning": "假定, 设想",
    "example": "His assumption of secretarial duties was timely.",
    "exampleTranslation": "他承担秘书职责是及时的。"
  },
  {
    "word": "astonish",
    "phonetic": "/əˈstɒnɪʃ/",
    "pos": "v",
    "meaning": "使惊讶",
    "example": "We must astonish.",
    "exampleTranslation": "我们必须让人惊讶。"
  },
  {
    "word": "astronaut",
    "phonetic": "/ˈæstɹəˌnɒt/",
    "pos": "n",
    "meaning": "宇航员",
    "example": "The astronaut is important.",
    "exampleTranslation": "这位宇航员很重要。"
  },
  {
    "word": "astronomer",
    "phonetic": "/ə.ˈstɹɑ.nə.mɚ/",
    "pos": "n",
    "meaning": "天文学家",
    "example": "The astronomer is important.",
    "exampleTranslation": "这位天文学家很重要。"
  },
  {
    "word": "astronomy",
    "phonetic": "/æˈstɹɑnəˌmi/",
    "pos": "n",
    "meaning": "天文学",
    "example": "This is a astronomy.",
    "exampleTranslation": "这是一门天文学。"
  },
  {
    "word": "at",
    "phonetic": "/ət/",
    "pos": "prep",
    "meaning": "在, 于, 向, 对准, 在...方面",
    "example": "Cars 2 is the most influential film of all time. Don't @ me.",
    "exampleTranslation": "《汽车总动员2》是有史以来最有影响力的电影。别@我。"
  },
  {
    "word": "athlete",
    "phonetic": "/ˈæθ.lit/",
    "pos": "n",
    "meaning": "运动员",
    "example": "She's the first athlete in her sport to obtain a corporate sponsor.",
    "exampleTranslation": "她是她所在运动项目中第一位获得企业赞助的运动员。"
  },
  {
    "word": "athletic",
    "phonetic": "/æθˈlɛt.ɪk/",
    "pos": "adj",
    "meaning": "运动的, 体育的",
    "example": "Are you a member of the American Athletic Association?",
    "exampleTranslation": "你是美国体育协会的成员吗？"
  },
  {
    "word": "atlantic",
    "phonetic": "/ətˈlæntɪk/",
    "pos": "adj",
    "meaning": "大西洋的",
    "example": "This is atlantic.",
    "exampleTranslation": "这是大西洋。"
  },
  {
    "word": "atmosphere",
    "phonetic": "/ˈæt.məsˌfɪə(ɹ)/",
    "pos": "n",
    "meaning": "大气; 气氛",
    "example": "I need the atmosphere.",
    "exampleTranslation": "我需要这种氛围。"
  },
  {
    "word": "atom",
    "phonetic": "/ˈatəm/",
    "pos": "n",
    "meaning": "原子",
    "example": "In a Venn diagram, an atom is depicted as an area circumscribed by lines but not cut by any line.",
    "exampleTranslation": "在维恩图中，原子被描绘为一个由线包围但不被任何线切割的区域。"
  },
  {
    "word": "attach",
    "phonetic": "/əˈtætʃ/",
    "pos": "v",
    "meaning": "附上, 贴上",
    "example": "An officer is attached to a certain regiment, company, or ship.",
    "exampleTranslation": "军官被派驻到某个团、连或舰船。"
  },
  {
    "word": "attack",
    "phonetic": "/əˈtæk/",
    "pos": "v",
    "meaning": "攻击, 袭击",
    "example": "They claimed the censorship of the article was an attack on free speech.",
    "exampleTranslation": "他们声称文章被审查是对言论自由的攻击。"
  },
  {
    "word": "attain",
    "phonetic": "/əˈteɪn/",
    "pos": "v",
    "meaning": "达到, 获得",
    "example": "To attain such a high level of proficiency requires hours of practice each day.",
    "exampleTranslation": "要达到如此高的熟练程度，需要每天数小时的练习。"
  },
  {
    "word": "attempt",
    "phonetic": "/əˈtɛmpt/",
    "pos": "v",
    "meaning": "试图, 尝试",
    "example": "It was worth the attempt.",
    "exampleTranslation": "这次尝试是值得的。"
  },
  {
    "word": "attend",
    "phonetic": "/əˈtɛnd/",
    "pos": "v",
    "meaning": "出席, 参加, 照顾, 护理, 注意",
    "example": "Secretaries attend to correspondence.",
    "exampleTranslation": "秘书处理信件。"
  },
  {
    "word": "attention",
    "phonetic": "/əˈtɛn.ʃən/",
    "pos": "n",
    "meaning": "注意, 关心",
    "example": "Please direct your attention to the following words.",
    "exampleTranslation": "请注意以下词语。"
  },
  {
    "word": "attitude",
    "phonetic": "/ˈætɪˌtjuːd/",
    "pos": "n",
    "meaning": "态度, 看法",
    "example": "The ballet dancer walked with a graceful attitude.",
    "exampleTranslation": "芭蕾舞演员以优雅的姿态行走。"
  },
  {
    "word": "attract",
    "phonetic": "/əˈtɹækt/",
    "pos": "v",
    "meaning": "吸引, 引起",
    "example": "A magnet attracts iron filings.",
    "exampleTranslation": "磁铁吸引铁屑。"
  },
  {
    "word": "attraction",
    "phonetic": "/əˈtɹækʃən/",
    "pos": "n",
    "meaning": "吸引, 吸引力, 吸引人的事物",
    "example": "The Moon is held in its orbit by the attraction of the Earth's gravity.",
    "exampleTranslation": "月球被地球引力的吸引力保持在轨道上。"
  },
  {
    "word": "attractive",
    "phonetic": "/əˈtɹæktɪv/",
    "pos": "adj",
    "meaning": "迷人的, 有吸引力的",
    "example": "That's a very attractive offer.",
    "exampleTranslation": "那是一个非常有吸引力的提议。"
  },
  {
    "word": "audience",
    "phonetic": "/ˈɔːdi.əns/",
    "pos": "n",
    "meaning": "观众, 听众",
    "example": "We joined the audience just as the lights went down.",
    "exampleTranslation": "灯光熄灭时我们加入了观众。"
  },
  {
    "word": "aunt",
    "phonetic": "/ɑ(ː)nt/",
    "pos": "n",
    "meaning": "伯母; 舅母; 婶; 姑; 姨",
    "example": "The aunt is important.",
    "exampleTranslation": "这位阿姨很重要。"
  },
  {
    "word": "authentic",
    "phonetic": "/ɒ.ˈθɛn.tɪk/",
    "pos": "adj",
    "meaning": "可信的, 真正的",
    "example": "The experts confirmed it was an authentic signature.",
    "exampleTranslation": "专家确认这是一个真实的签名。"
  },
  {
    "word": "author",
    "phonetic": "/ˈɔː.θə/",
    "pos": "n",
    "meaning": "作者, 作家",
    "example": "Have you read any Corinthian authors?",
    "exampleTranslation": "你读过任何科林斯作家吗？"
  },
  {
    "word": "authority",
    "phonetic": "/ɔːˈθɒɹəti/",
    "pos": "n",
    "meaning": "权威, 威信, 权威人士",
    "example": "I have the authority to penalise the staff in my department, but not the authority to sack them.",
    "exampleTranslation": "我有权惩罚我部门的员工，但无权解雇他们。"
  },
  {
    "word": "automatic",
    "phonetic": "/ˌɔːtəˈmætɪk/",
    "pos": "adj",
    "meaning": "自动的, 无意识的, 机械的",
    "example": "I never learned to drive a stick. I can only drive an automatic.",
    "exampleTranslation": "我从未学过开手动挡。我只能开自动挡。"
  },
  {
    "word": "autonomous",
    "phonetic": "/ɔːˈtɒnəməs/",
    "pos": "adv",
    "meaning": "自治的",
    "example": "She speaks autonomous.",
    "exampleTranslation": "她说话自主。"
  },
  {
    "word": "autumn",
    "phonetic": "/ˈɔːtəm/",
    "pos": "n",
    "meaning": "秋天, 秋季",
    "example": "autumn leaves",
    "exampleTranslation": "秋叶"
  },
  {
    "word": "available",
    "phonetic": "/əˈveɪləb(ə)l/",
    "pos": "adj",
    "meaning": "可用到的, 有空的, 接受探访的",
    "example": "We have an available candidate.",
    "exampleTranslation": "我们有一位可用的候选人。"
  },
  {
    "word": "avenue",
    "phonetic": "/ˈæv.əˌnjuː/",
    "pos": "n",
    "meaning": "大道",
    "example": "There are several avenues by which we can approach this problem.",
    "exampleTranslation": "有几种途径可以解决这个问题。"
  },
  {
    "word": "average",
    "phonetic": "/ˈævəɹɪd͡ʒ/",
    "pos": "adj",
    "meaning": "平均的; 普通的 n. 平均数",
    "example": "The average of 10, 20 and 24 is (10 + 20 + 24)/3 = 18.",
    "exampleTranslation": "10、20和24的平均值是(10 + 20 + 24)/3 = 18。"
  },
  {
    "word": "avoid",
    "phonetic": "/əˈvɔɪd/",
    "pos": "v",
    "meaning": "避免, 躲开, 逃避",
    "example": "I try to avoid the company of gamblers.",
    "exampleTranslation": "我尽量避免与赌徒为伍。"
  },
  {
    "word": "awake",
    "phonetic": "/əˈweɪk/",
    "pos": "",
    "meaning": "(awoke, awoken) v. 唤醒；adj. 醒着的",
    "example": "I am awake now.",
    "exampleTranslation": "我现在醒了。"
  },
  {
    "word": "award",
    "phonetic": "/əˈwɔːd/",
    "pos": "n",
    "meaning": "奖品, 奖励",
    "example": "the arbitrators awarded damages to the complainant",
    "exampleTranslation": "仲裁员判给投诉人损害赔偿"
  },
  {
    "word": "aware",
    "phonetic": "/əˈweːɹ/",
    "pos": "adj",
    "meaning": "知道的, 明白的, 意识到的",
    "example": "Stay aware! Don't let your guard down.",
    "exampleTranslation": "保持警惕！不要放松警惕。"
  },
  {
    "word": "away",
    "phonetic": "/əˈweɪ/",
    "pos": "adv",
    "meaning": "离开; 远离",
    "example": "At 9 o'clock sharp he awayed to bed.",
    "exampleTranslation": "九点整他上床睡觉了。"
  },
  {
    "word": "awesome",
    "phonetic": "/ˈɔːsəm/",
    "pos": "adj",
    "meaning": "引起敬畏的, 可怕的;【俚语】 杰出的",
    "example": "pure awesome; made of awesome",
    "exampleTranslation": "纯粹的棒极了；由棒极了组成"
  },
  {
    "word": "awful",
    "phonetic": "/ˈɔːfəl/",
    "pos": "adj",
    "meaning": "可怕的, 威严的, <口>极度的, 糟糕的",
    "example": "My socks smell awful.",
    "exampleTranslation": "我的袜子闻起来很糟糕。"
  },
  {
    "word": "awkward",
    "phonetic": "/ˈɑkwɚd/",
    "pos": "adj",
    "meaning": "难使用的, 笨拙的",
    "example": "John was awkward at performing the trick. He'll have to practice to improve.",
    "exampleTranslation": "约翰表演这个技巧很笨拙。他需要练习来提高。"
  },
  {
    "word": "b.c.",
    "phonetic": "/ˌbiː ˈsiː/",
    "pos": "",
    "meaning": "n. 公元前",
    "example": "Rome was built in 753 B.C.",
    "exampleTranslation": "罗马建于公元前753年。"
  },
  {
    "word": "baby",
    "phonetic": "/ˈbeɪbi/",
    "pos": "n",
    "meaning": "婴儿",
    "example": "When is your baby due?",
    "exampleTranslation": "你的宝宝什么时候出生？"
  },
  {
    "word": "bachelor",
    "phonetic": "/ˈbætʃələr/",
    "pos": "n",
    "meaning": "学士学位, 单身汉,",
    "example": "The bachelor is important.",
    "exampleTranslation": "这位单身汉很重要。"
  },
  {
    "word": "back",
    "phonetic": "/bæk/",
    "pos": "adv",
    "meaning": "回（原处）; 向后 adj. 后面的 n. 后部; 背",
    "example": "Could you please scratch my back?",
    "exampleTranslation": "你能帮我挠挠背吗？"
  },
  {
    "word": "background",
    "phonetic": "/ˈbæk.ɡɹaʊnd/",
    "pos": "n",
    "meaning": "背景",
    "example": "The lawyer had a background in computer science.",
    "exampleTranslation": "这位律师有计算机科学背景。"
  },
  {
    "word": "backward(s)",
    "phonetic": "/ˈbækwərdz/",
    "pos": "",
    "meaning": "adv. 向后",
    "example": "She took a step backward.",
    "exampleTranslation": "她向后退了一步。"
  },
  {
    "word": "bacon",
    "phonetic": "/ˈbeɪ.kən/",
    "pos": "n",
    "meaning": "咸猪肉; 熏猪肉",
    "example": "Run! It's the bacon!",
    "exampleTranslation": "快跑！是培根！"
  },
  {
    "word": "bacterium",
    "phonetic": "/bækˈtɪriəm/",
    "pos": "",
    "meaning": "(pl. bacteria) n. 细菌",
    "example": "This bacterium is harmful.",
    "exampleTranslation": "这种细菌是有害的。"
  },
  {
    "word": "bad",
    "phonetic": "/bæd/",
    "pos": "",
    "meaning": "(worse, worst) adj. 坏的; 有害的, 不利的; 严重的",
    "example": "That is a bad idea.",
    "exampleTranslation": "那是个坏主意。"
  },
  {
    "word": "badminton",
    "phonetic": "/ˈbæd.mɪn.tən/",
    "pos": "n",
    "meaning": "羽毛球",
    "example": "I need the badminton.",
    "exampleTranslation": "我需要羽毛球。"
  },
  {
    "word": "bag",
    "phonetic": "/ˈbæːɡ/",
    "pos": "n",
    "meaning": "书包; 提包; 袋子",
    "example": "Acid House is not my bag: I prefer the more traditional styles of music.",
    "exampleTranslation": "酸浩室音乐不是我的菜：我更喜欢传统风格的音乐。"
  },
  {
    "word": "baggage",
    "phonetic": "/ˈbæɡɪdʒ/",
    "pos": "n",
    "meaning": "行李",
    "example": "Please put your baggage in the trunk.",
    "exampleTranslation": "请把行李放在后备箱里。"
  },
  {
    "word": "bakery",
    "phonetic": "/ˈbeɪ.kə.ɹi/",
    "pos": "n",
    "meaning": "面包店",
    "example": "I need the bakery.",
    "exampleTranslation": "我需要这家面包店。"
  },
  {
    "word": "balance",
    "phonetic": "/ˈbæləns/",
    "pos": "n",
    "meaning": "平衡",
    "example": "Blair thought he could provide a useful balance to Bush's policies.",
    "exampleTranslation": "布莱尔认为他可以为布什的政策提供有益的平衡。"
  },
  {
    "word": "balcony",
    "phonetic": "/ˈbælkəni/",
    "pos": "n",
    "meaning": "阳台; 楼座",
    "example": "I need the balcony.",
    "exampleTranslation": "我需要这个阳台。"
  },
  {
    "word": "ballet",
    "phonetic": "/bælæe/",
    "pos": "n",
    "meaning": "芭蕾舞",
    "example": "The ballet is important.",
    "exampleTranslation": "这场芭蕾舞很重要。"
  },
  {
    "word": "balloon",
    "phonetic": "/bəˈluːn/",
    "pos": "n",
    "meaning": "气球",
    "example": "the balloon of St. Paul's Cathedral in London",
    "exampleTranslation": "伦敦圣保罗大教堂的圆顶"
  },
  {
    "word": "bamboo",
    "phonetic": "/bæmˈbu/",
    "pos": "n",
    "meaning": "竹",
    "example": "This is a bamboo.",
    "exampleTranslation": "这是一根竹子。"
  },
  {
    "word": "ban",
    "phonetic": "/bæn/",
    "pos": "n",
    "meaning": "禁令 v. 禁止; 取缔",
    "example": "Bans is common and ordinary amongst the Feudists, and signifies a proclamation, or any public notice.",
    "exampleTranslation": "禁令在封建法学家中很常见，意味着公告或任何公开通知。"
  },
  {
    "word": "banana",
    "phonetic": "/bəˈnɑːnə/",
    "pos": "n",
    "meaning": "香蕉",
    "example": "I need the banana.",
    "exampleTranslation": "我需要香蕉。"
  },
  {
    "word": "band",
    "phonetic": "/bænd/",
    "pos": "n",
    "meaning": "乐队, 带子",
    "example": "valence band;  conduction band",
    "exampleTranslation": "价带；导带"
  },
  {
    "word": "bandage",
    "phonetic": "/ˈbændɪdʒ/",
    "pos": "n",
    "meaning": "绷带",
    "example": "this new healthcare proposal merely applies a bandage to the current medical crisis",
    "exampleTranslation": "这个新的医疗保健提案只是对当前的医疗危机进行权宜之计"
  },
  {
    "word": "bank",
    "phonetic": "/bæŋk/",
    "pos": "n",
    "meaning": "岸, 堤; 银行",
    "example": "blood bank; sperm bank; data bank",
    "exampleTranslation": "血库；精子库；数据库"
  },
  {
    "word": "bar",
    "phonetic": "/bɑː/",
    "pos": "n",
    "meaning": "条; 棒; 酒吧",
    "example": "The window was protected by steel bars.",
    "exampleTranslation": "窗户被钢条保护着。"
  },
  {
    "word": "barbecue",
    "phonetic": "/ˈbɑːbɪˌkjuː/",
    "pos": "n",
    "meaning": "烤肉野餐",
    "example": "We cooked our food on the barbecue.",
    "exampleTranslation": "我们在烧烤架上做饭。"
  },
  {
    "word": "barber",
    "phonetic": "/ˈbɑː.bə/",
    "pos": "n",
    "meaning": "理发师",
    "example": "I need the barber.",
    "exampleTranslation": "我需要这位理发师。"
  },
  {
    "word": "barbershop",
    "phonetic": "/ˈbɑːrbərʃɑːp/",
    "pos": "n",
    "meaning": "理发店",
    "example": "This is a barbershop.",
    "exampleTranslation": "这是一家理发店。"
  },
  {
    "word": "bare",
    "phonetic": "/bɛə(ɹ)/",
    "pos": "adj",
    "meaning": "赤裸的, 无遮蔽的, 空的",
    "example": "a bare majority",
    "exampleTranslation": "微弱多数"
  },
  {
    "word": "bargain",
    "phonetic": "/-ɡɪn/",
    "pos": "n",
    "meaning": "廉价货 v. 讨价还价",
    "example": "At that price, it's not just a bargain, it's a steal.",
    "exampleTranslation": "以那个价格，这不仅是便宜，简直是偷来的。"
  },
  {
    "word": "bark",
    "phonetic": "/bɑːk/",
    "pos": "v",
    "meaning": "狗叫 n. 狗叫声",
    "example": "The neighbour's dog is always barking.",
    "exampleTranslation": "邻居的狗总是在叫。"
  },
  {
    "word": "barrier",
    "phonetic": "/ˈbæɹi.ə(ɹ)/",
    "pos": "n",
    "meaning": "障碍物, 栅栏, 屏障",
    "example": "I need the barrier.",
    "exampleTranslation": "我需要这个障碍。"
  },
  {
    "word": "base",
    "phonetic": "/beɪs/",
    "pos": "n",
    "meaning": "根据地,  基地; v.（与on, upon连用）根据；基于",
    "example": "The logarithm to base 2 of 8 is 3.",
    "exampleTranslation": "8以2为底的对数是3。"
  },
  {
    "word": "baseball",
    "phonetic": "/ˈbeɪs.bɔːl/",
    "pos": "n",
    "meaning": "棒球",
    "example": "The baseball is important.",
    "exampleTranslation": "棒球很重要。"
  },
  {
    "word": "basement",
    "phonetic": "/ˈbeɪsmənt/",
    "pos": "n",
    "meaning": "地下室",
    "example": "The basement is important.",
    "exampleTranslation": "这个地下室很重要。"
  },
  {
    "word": "basic",
    "phonetic": "/ˈbeɪsɪk/",
    "pos": "adj",
    "meaning": "基本的",
    "example": "That is basic.",
    "exampleTranslation": "那是基本的。"
  },
  {
    "word": "basin",
    "phonetic": "/ˈbeɪsɪn/",
    "pos": "n",
    "meaning": "水盆, 脸盆",
    "example": "I need the basin.",
    "exampleTranslation": "我需要这个盆。"
  },
  {
    "word": "basis",
    "phonetic": "/ˈbeɪsɪs/",
    "pos": "n",
    "meaning": "基础, 基本",
    "example": "Cars must be checked on a yearly basis.",
    "exampleTranslation": "汽车必须每年检查一次。"
  },
  {
    "word": "basket",
    "phonetic": "/ˈbaːskət/",
    "pos": "n",
    "meaning": "篮子",
    "example": "A basket of fake fruit adorned the table.",
    "exampleTranslation": "一篮假水果装饰着桌子。"
  },
  {
    "word": "basketball",
    "phonetic": "/ˈbɑːs.kɪt.bɔːl/",
    "pos": "n",
    "meaning": "篮球",
    "example": "The basketball is important.",
    "exampleTranslation": "篮球很重要。"
  },
  {
    "word": "bat",
    "phonetic": "/bæt/",
    "pos": "n",
    "meaning": "球棒; 蝙蝠",
    "example": "I need the bat.",
    "exampleTranslation": "我需要这个球棒。"
  },
  {
    "word": "bath",
    "phonetic": "/bɐːθ/",
    "pos": "n",
    "meaning": "洗澡; 浴室",
    "example": "a bath of heated sand, ashes, steam, or hot air",
    "exampleTranslation": "加热的沙子、灰烬、蒸汽或热空气浴"
  },
  {
    "word": "bathe",
    "phonetic": "/beɪð/",
    "pos": "v",
    "meaning": "洗澡; 游泳",
    "example": "I'm going to have a midnight bathe tonight.",
    "exampleTranslation": "今晚我要去午夜游泳。"
  },
  {
    "word": "bathrobe",
    "phonetic": "/ˈbɑːθ.ɹəʊb/",
    "pos": "n",
    "meaning": "浴衣",
    "example": "I need the bathrobe.",
    "exampleTranslation": "我需要这件浴袍。"
  },
  {
    "word": "bathroom",
    "phonetic": "/ˈbæθ.ɹuːm/",
    "pos": "n",
    "meaning": "浴室, 盥洗室",
    "example": "Most Americans don't know 'WC' and many Brits mock 'bathroom' but almost everyone understands 'toilet' or 'lavatory'.",
    "exampleTranslation": "大多数美国人不知道'WC'，许多英国人嘲笑'bathroom'，但几乎每个人都理解'toilet'或'lavatory'。"
  },
  {
    "word": "bathtub",
    "phonetic": "/ˈbæθtʊb/",
    "pos": "n",
    "meaning": "澡盆",
    "example": "I need the bathtub.",
    "exampleTranslation": "我需要这个浴缸。"
  },
  {
    "word": "battery",
    "phonetic": "/ˈbætəɹi/",
    "pos": "n",
    "meaning": "电池",
    "example": "Schoolchildren take a battery of standard tests to measure their progress.",
    "exampleTranslation": "学生接受一系列标准测试来衡量他们的进步。"
  },
  {
    "word": "battle",
    "phonetic": "/ˈbætəl/",
    "pos": "n",
    "meaning": "战斗; 战役",
    "example": "the battle of life",
    "exampleTranslation": "生活的战斗"
  },
  {
    "word": "bay",
    "phonetic": "/beɪ/",
    "pos": "n",
    "meaning": "湾; 海湾",
    "example": "I need the bay.",
    "exampleTranslation": "我需要这个海湾。"
  },
  {
    "word": "be",
    "phonetic": "/biː/",
    "pos": "v",
    "meaning": "是; 成为",
    "example": "We must be.",
    "exampleTranslation": "我们必须存在。"
  },
  {
    "word": "beach",
    "phonetic": "/biːt͡ʃ/",
    "pos": "n",
    "meaning": "海滨, 海滩",
    "example": "The beach is important.",
    "exampleTranslation": "这个海滩很重要。"
  },
  {
    "word": "bean",
    "phonetic": "/biːn/",
    "pos": "n",
    "meaning": "豆, 豆科植物",
    "example": "I haven't got a bean.",
    "exampleTranslation": "我一分钱也没有。"
  },
  {
    "word": "beancurd",
    "phonetic": "/ˈbiːnkɜːrd/",
    "pos": "n",
    "meaning": "豆腐",
    "example": "I need the beancurd.",
    "exampleTranslation": "我需要豆腐。"
  },
  {
    "word": "beard",
    "phonetic": "/bɪəd/",
    "pos": "n",
    "meaning": "（下巴上的）胡须",
    "example": "the beard of grain",
    "exampleTranslation": "谷物的芒"
  },
  {
    "word": "beast",
    "phonetic": "/biːst/",
    "pos": "n",
    "meaning": "野兽; 牲畜",
    "example": "That is a beast of a stadium.",
    "exampleTranslation": "那是一个巨大的体育场。"
  },
  {
    "word": "beat",
    "phonetic": "/biːt/",
    "pos": "",
    "meaning": "(beat, beaten) v. 敲打; 跳动; 打赢 n.（音乐）节拍",
    "example": "He beat the drum loudly.",
    "exampleTranslation": "他大声地敲鼓。"
  },
  {
    "word": "beautiful",
    "phonetic": "/ˈbjuːtɪfəl/",
    "pos": "adj",
    "meaning": "美的,美观的",
    "example": "Hey, beautiful!",
    "exampleTranslation": "嘿，美女！"
  },
  {
    "word": "because",
    "phonetic": "/bɪˈkɒz/",
    "pos": "conj",
    "meaning": "因为",
    "example": "My life is ruined because of you!",
    "exampleTranslation": "我的生活因为你而毁了！"
  },
  {
    "word": "become",
    "phonetic": "/bɪˈkʌm/",
    "pos": "",
    "meaning": "(became, become) v. 变得; 成为",
    "example": "She will become a teacher.",
    "exampleTranslation": "她将成为一名老师。"
  },
  {
    "word": "bed",
    "phonetic": "/bed/",
    "pos": "n",
    "meaning": "床",
    "example": "My cat often sleeps on my bed. I keep a glass of water next to my bed when I sleep.",
    "exampleTranslation": "我的猫经常睡在我的床上。我睡觉时在床边放一杯水。"
  },
  {
    "word": "beddings",
    "phonetic": "/ˈbedɪŋz/",
    "pos": "n",
    "meaning": "被褥, (家畜)草垫, (建筑)基床",
    "example": "The beddings is important.",
    "exampleTranslation": "这些床上用品很重要。"
  },
  {
    "word": "bedroom",
    "phonetic": "/ˈbɛdɹʊm/",
    "pos": "n",
    "meaning": "寝室, 卧室",
    "example": "Please don't enter my bedroom without knocking.",
    "exampleTranslation": "请不要不敲门就进入我的卧室。"
  },
  {
    "word": "bee",
    "phonetic": "/ˈbiː/",
    "pos": "n",
    "meaning": "蜜蜂",
    "example": "The bee is important.",
    "exampleTranslation": "这只蜜蜂很重要。"
  },
  {
    "word": "beef",
    "phonetic": "/biːf/",
    "pos": "n",
    "meaning": "牛肉",
    "example": "I love eating beef.",
    "exampleTranslation": "我喜欢吃牛肉。"
  },
  {
    "word": "beer",
    "phonetic": "/bɛə/",
    "pos": "n",
    "meaning": "啤酒",
    "example": "Beer is brewed all over the world.",
    "exampleTranslation": "啤酒在世界各地酿造。"
  },
  {
    "word": "before",
    "phonetic": "/bɪˈfɔː/",
    "pos": "prep",
    "meaning": "在…以前; adv. 以前 conj. 在…之前",
    "example": "I've never done this before.",
    "exampleTranslation": "我以前从未做过这个。"
  },
  {
    "word": "beg",
    "phonetic": "/bɛɡ/",
    "pos": "v",
    "meaning": "请求, 乞求",
    "example": "He begged on the street corner from passers-by.",
    "exampleTranslation": "他在街角向路人乞讨。"
  },
  {
    "word": "behalf",
    "phonetic": "/bɪˈhæf/",
    "pos": "n",
    "meaning": "为, 利益, 方面",
    "example": "I need the behalf.",
    "exampleTranslation": "我需要这个代表。"
  },
  {
    "word": "behave",
    "phonetic": "/bəˈheɪv/",
    "pos": "v",
    "meaning": "守规矩, 行为",
    "example": "You need to behave yourself, young lady.",
    "exampleTranslation": "你需要守规矩，小姐。"
  },
  {
    "word": "behaviour",
    "phonetic": "/bɪˈheɪvjə/",
    "pos": "n",
    "meaning": "行为, 举止",
    "example": "She can't stop the strange behaviour because she has OCD (obsessive-compulsive disorder).",
    "exampleTranslation": "她无法停止这种奇怪的行为，因为她有强迫症。"
  },
  {
    "word": "behind",
    "phonetic": "/bəˈhaɪnd/",
    "pos": "prep",
    "meaning": "在…后面 adv. 在后面; 向后",
    "example": "to look behind",
    "exampleTranslation": "向后看"
  },
  {
    "word": "being",
    "phonetic": "/ˈbiːɪŋ/",
    "pos": "n",
    "meaning": "物; 生物; 人",
    "example": "I need the being.",
    "exampleTranslation": "我需要这个存在。"
  },
  {
    "word": "belief",
    "phonetic": "/bəˈliːf/",
    "pos": "n",
    "meaning": "信条, 信念",
    "example": "It's my belief that the thief is somebody known to us.",
    "exampleTranslation": "我相信小偷是我们认识的人。"
  },
  {
    "word": "believe",
    "phonetic": "/bɪˈliːv/",
    "pos": "v",
    "meaning": "相信, 认为",
    "example": "I believe there are faeries.",
    "exampleTranslation": "我相信有仙女。"
  },
  {
    "word": "bell",
    "phonetic": "/bɛl/",
    "pos": "n",
    "meaning": "钟, 铃",
    "example": "I’ll give you a bell later.",
    "exampleTranslation": "我稍后给你打电话。"
  },
  {
    "word": "belly",
    "phonetic": "/bɛli/",
    "pos": "n",
    "meaning": "肚子",
    "example": "the belly of a flask, muscle, violin, sail, or ship",
    "exampleTranslation": "烧瓶、肌肉、小提琴、帆或船的腹部"
  },
  {
    "word": "belong",
    "phonetic": "/bɪˈlɒŋ/",
    "pos": "v",
    "meaning": "属于",
    "example": "Where does this document belong?",
    "exampleTranslation": "这份文件属于哪里？"
  },
  {
    "word": "below",
    "phonetic": "/bɪˈləʊ/",
    "pos": "prep",
    "meaning": "在…下面",
    "example": "the landlubbers lying down below",
    "exampleTranslation": "躺在下面的旱鸭子"
  },
  {
    "word": "belt",
    "phonetic": "/bɛlt/",
    "pos": "n",
    "meaning": "（皮）带",
    "example": "As part of the act, the fat clown's belt broke, causing his pants to fall down.",
    "exampleTranslation": "作为表演的一部分，胖小丑的腰带断了，导致他的裤子掉下来。"
  },
  {
    "word": "bench",
    "phonetic": "/bɛntʃ/",
    "pos": "n",
    "meaning": "长凳;",
    "example": "They sat on a park bench and tossed bread crumbs to the ducks and pigeons.",
    "exampleTranslation": "他们坐在公园的长椅上，把面包屑扔给鸭子和鸽子。"
  },
  {
    "word": "bend",
    "phonetic": "/bend/",
    "pos": "",
    "meaning": "(bent, bent) v. 弯曲；使弯曲",
    "example": "Do not bend the ruler.",
    "exampleTranslation": "不要弯曲尺子。"
  },
  {
    "word": "beneath",
    "phonetic": "/bɪˈniːθ/",
    "pos": "prep",
    "meaning": "在…下方（面）",
    "example": "It is beneath the table.",
    "exampleTranslation": "它在桌子下面。"
  },
  {
    "word": "beneficial",
    "phonetic": "/ˌbɛnəˈfɪʃəl/",
    "pos": "adj",
    "meaning": "有益的",
    "example": "Recycling and reusing garbage can be beneficial to the environment.",
    "exampleTranslation": "回收和再利用垃圾对环境有益。"
  },
  {
    "word": "benefit",
    "phonetic": "/ˈbɛn.ɪ.fɪt/",
    "pos": "n",
    "meaning": "利益, 好处 v. 有益于, 有助于 v. 受益",
    "example": "It was for her benefit.   His benefit was free beer.",
    "exampleTranslation": "那是为了她的利益。他的好处是免费啤酒。"
  },
  {
    "word": "bent",
    "phonetic": "/bɛnt/",
    "pos": "adj",
    "meaning": "弯的 n. 爱好，才能",
    "example": "Don’t bend your knees.",
    "exampleTranslation": "弯的  爱好"
  },
  {
    "word": "beside",
    "phonetic": "/bɪˈsaɪd/",
    "pos": "prep",
    "meaning": "在…旁边; 靠近",
    "example": "A small table beside the bed",
    "exampleTranslation": "床边的一张小桌子"
  },
  {
    "word": "besides",
    "phonetic": "/biˈsaɪdz/",
    "pos": "prep",
    "meaning": "除…以外（还有） adv. 此外",
    "example": "I don't feel like going out tonight. Besides, I have to work tomorrow morning anyway.",
    "exampleTranslation": "我今晚不想出去。而且，我明天早上还要工作。"
  },
  {
    "word": "betray",
    "phonetic": "/bəˈtɹeɪ/",
    "pos": "v",
    "meaning": "出卖, 背叛, 泄露(秘密)",
    "example": "an officer betrayed the city",
    "exampleTranslation": "一名军官背叛了城市"
  },
  {
    "word": "between",
    "phonetic": "/bɪˈtwiːn/",
    "pos": "prep",
    "meaning": "在（两者）之间; 在…中间",
    "example": "I want to buy one that costs somewhere between forty and fifty dollars.",
    "exampleTranslation": "我想买一个价格在四十到五十美元之间的。"
  },
  {
    "word": "bicycle",
    "phonetic": "/ˈbaɪsɪkl̩/",
    "pos": "n",
    "meaning": "自行车",
    "example": "The bicycle is important.",
    "exampleTranslation": "这辆自行车很重要。"
  },
  {
    "word": "bid",
    "phonetic": "/bɪd/",
    "pos": "v",
    "meaning": "& n 出价, 投标",
    "example": "He bade me come in.",
    "exampleTranslation": "他叫我进来。"
  },
  {
    "word": "big",
    "phonetic": "/bɪɡ/",
    "pos": "adj",
    "meaning": "大的",
    "example": "Elephants are big animals, and they eat a lot.",
    "exampleTranslation": "大象是大型动物，它们吃得很多。"
  },
  {
    "word": "bike",
    "phonetic": "/baɪk/",
    "pos": "",
    "meaning": "= bicyclen. 自行车",
    "example": "I ride my bike to school.",
    "exampleTranslation": "我骑自行车上学。"
  },
  {
    "word": "bill",
    "phonetic": "/bɪl/",
    "pos": "n",
    "meaning": "账单; 法案, 议案;（美）钞票, 纸币",
    "example": "I need the bill.",
    "exampleTranslation": "我需要这张账单。"
  },
  {
    "word": "billion",
    "phonetic": "/ˈbɪljən/",
    "pos": "num",
    "meaning": "十亿",
    "example": "There were billions of people at the concert.",
    "exampleTranslation": "音乐会有数十亿人。"
  },
  {
    "word": "bingo",
    "phonetic": "/ˈbɪŋ.ɡəʊ/",
    "pos": "n",
    "meaning": "一种赌博游戏, 烈酒 int. 瞧!",
    "example": "There were two bingos in the last game, so the players split the prize money.",
    "exampleTranslation": "上一场游戏有两个宾果，所以玩家们平分了奖金。"
  },
  {
    "word": "biochemistry",
    "phonetic": "/ˌbaɪoʊˈkemɪstri/",
    "pos": "n",
    "meaning": "生物化学",
    "example": "The biochemistries of fungal and bacterial cells are quite distinct.",
    "exampleTranslation": "真菌和细菌细胞的生物化学截然不同。"
  },
  {
    "word": "biography",
    "phonetic": "/baɪˈɒɡɹəfi/",
    "pos": "n",
    "meaning": "传记",
    "example": "There are many biographies of Benjamin Franklin.",
    "exampleTranslation": "有很多本杰明·富兰克林的传记。"
  },
  {
    "word": "biology",
    "phonetic": "/baɪˈɒlədʒɪ/",
    "pos": "n",
    "meaning": "生物（学）",
    "example": "the biology of the whale",
    "exampleTranslation": "鲸鱼的生物学"
  },
  {
    "word": "bird",
    "phonetic": "/bɜd/",
    "pos": "n",
    "meaning": "鸟",
    "example": "Ducks and sparrows are birds.",
    "exampleTranslation": "鸭子和麻雀都是鸟。"
  },
  {
    "word": "birth",
    "phonetic": "/bɜːθ/",
    "pos": "n",
    "meaning": "出生; 诞生",
    "example": "Intersex babies account for roughly one per cent of all births.",
    "exampleTranslation": "双性婴儿约占所有出生婴儿的百分之一。"
  },
  {
    "word": "birthday",
    "phonetic": "/ˈbɜːθ.deɪ/",
    "pos": "n",
    "meaning": "生日",
    "example": "The birthday is important.",
    "exampleTranslation": "这个生日很重要。"
  },
  {
    "word": "birthplace",
    "phonetic": "/ˈbɝθˌpleɪs/",
    "pos": "n",
    "meaning": "出生地; 故乡",
    "example": "Portsmouth was Charles Dickens’ birthplace.",
    "exampleTranslation": "朴茨茅斯是查尔斯·狄更斯的出生地。"
  },
  {
    "word": "biscuit",
    "phonetic": "/ˈbɪskɪt/",
    "pos": "n",
    "meaning": "饼干",
    "example": "cheese and biscuits",
    "exampleTranslation": "奶酪和饼干"
  },
  {
    "word": "bishop",
    "phonetic": "/ˈbɪʃəp/",
    "pos": "n",
    "meaning": "主教",
    "example": "I need the bishop.",
    "exampleTranslation": "我需要这位主教。"
  },
  {
    "word": "bit",
    "phonetic": "/bɪt/",
    "pos": "n",
    "meaning": "一点, 一些, 少量的",
    "example": "A horse hates having a bit put in its mouth.",
    "exampleTranslation": "马讨厌嘴里被放上马嚼子。"
  },
  {
    "word": "bite",
    "phonetic": "/baɪt/",
    "pos": "",
    "meaning": "(bit, bitten) v. 咬; 叮",
    "example": "Does your dog bite?",
    "exampleTranslation": "你的狗咬人吗？"
  },
  {
    "word": "bitter",
    "phonetic": "/ˈbɪtə/",
    "pos": "adj",
    "meaning": "有苦味的; 痛苦的, 难过的; 严酷的",
    "example": "The coffee tasted bitter.",
    "exampleTranslation": "咖啡尝起来很苦。"
  },
  {
    "word": "black",
    "phonetic": "/blak/",
    "pos": "n",
    "meaning": "黑色 adj. 黑色的",
    "example": "At this point black makes a disastrous move.",
    "exampleTranslation": "此时黑方走了一步灾难性的棋。"
  },
  {
    "word": "blackboard",
    "phonetic": "/ˈblækbɔːd/",
    "pos": "n",
    "meaning": "黑板",
    "example": "This is a blackboard.",
    "exampleTranslation": "这是一块黑板。"
  },
  {
    "word": "blame",
    "phonetic": "/bleɪm/",
    "pos": "n",
    "meaning": "& v. 责备; 责怪",
    "example": "Blame came from all directions.",
    "exampleTranslation": "责备来自四面八方。"
  },
  {
    "word": "blank",
    "phonetic": "/blæŋk/",
    "pos": "n",
    "meaning": "& adj. 空格, 空白（处）; 空的; 茫然无表情的",
    "example": "the double blank",
    "exampleTranslation": "双空格"
  },
  {
    "word": "blanket",
    "phonetic": "/ˈblæŋkɪt/",
    "pos": "n",
    "meaning": "毛毯, 毯子",
    "example": "The baby was cold, so his mother put a blanket over him.",
    "exampleTranslation": "婴儿很冷，所以母亲给他盖上毯子。"
  },
  {
    "word": "bleed",
    "phonetic": "/ˈbliːd/",
    "pos": "v",
    "meaning": "出血, 流血",
    "example": "If her nose bleeds, try to use ice.",
    "exampleTranslation": "如果她的鼻子流血，试着用冰。"
  },
  {
    "word": "bless",
    "phonetic": "/blɛs/",
    "pos": "v",
    "meaning": "保佑, 降福",
    "example": "I bless it.",
    "exampleTranslation": "我祝福它。"
  },
  {
    "word": "blind",
    "phonetic": "/blaɪnd/",
    "pos": "adj",
    "meaning": "瞎的",
    "example": "a duck blind",
    "exampleTranslation": "一个鸭棚"
  },
  {
    "word": "block",
    "phonetic": "/blɒk/",
    "pos": "n",
    "meaning": "大块; 街区; 路障 v.  阻塞; 阻挡",
    "example": "a block of ice",
    "exampleTranslation": "一块冰"
  },
  {
    "word": "blood",
    "phonetic": "/blʊd/",
    "pos": "n",
    "meaning": "血, 血液",
    "example": "The cultists gathered around a chalice of blood.",
    "exampleTranslation": "邪教徒聚集在一个圣杯周围。"
  },
  {
    "word": "blouse",
    "phonetic": "/blaʊs/",
    "pos": "n",
    "meaning": "宽罩衫;（妇女、儿童穿的）短上衣",
    "example": "This is a blouse.",
    "exampleTranslation": "这是一件女衬衫。"
  },
  {
    "word": "blow",
    "phonetic": "/bloʊ/",
    "pos": "",
    "meaning": "(blew, blown) v. 吹; 刮风; 吹气",
    "example": "The wind will blow hard.",
    "exampleTranslation": "风会刮得很大。"
  },
  {
    "word": "blue",
    "phonetic": "/bluː/",
    "pos": "n",
    "meaning": "蓝色 adj. 蓝色的; 悲伤的; 沮丧的",
    "example": "The boys in blue marched to the pipers.",
    "exampleTranslation": "穿蓝衣服的男孩们跟着风笛手行进。"
  },
  {
    "word": "board",
    "phonetic": "/bɔːd/",
    "pos": "n",
    "meaning": "木板; 布告牌;  委员会 v. 上（船、火车、飞机）",
    "example": "Each player starts the game with four counters on the board.",
    "exampleTranslation": "每位玩家开始游戏时棋盘上有四个棋子。"
  },
  {
    "word": "boat",
    "phonetic": "/bəʊt/",
    "pos": "n",
    "meaning": "小船, 小舟",
    "example": "a stone boat;  a gravy boat",
    "exampleTranslation": "石船；肉汁船"
  },
  {
    "word": "body",
    "phonetic": "/ˈbɒdi/",
    "pos": "n",
    "meaning": "身体",
    "example": "a nonpareil face on an agate body",
    "exampleTranslation": "玛瑙身体上的无双脸"
  },
  {
    "word": "boil",
    "phonetic": "/bɔɪl/",
    "pos": "v",
    "meaning": "沸腾; 烧开; 煮…",
    "example": "She wants to boil.",
    "exampleTranslation": "她想煮。"
  },
  {
    "word": "bomb",
    "phonetic": "/bɒm/",
    "pos": "n",
    "meaning": "炸弹 v. 轰炸",
    "example": "box office bomb",
    "exampleTranslation": "票房炸弹"
  },
  {
    "word": "bond",
    "phonetic": "/bɑːnd/",
    "pos": "",
    "meaning": "n 结合(物), 粘结(剂), v 结合",
    "example": "They share a strong bond.",
    "exampleTranslation": "他们有很强的纽带。"
  },
  {
    "word": "bone",
    "phonetic": "/bəʉn/",
    "pos": "n",
    "meaning": "骨头",
    "example": "to bone stays",
    "exampleTranslation": "去骨停留"
  },
  {
    "word": "bonus",
    "phonetic": "/ˈbəʊ.nəs/",
    "pos": "n",
    "meaning": "奖金, 红利",
    "example": "The employee of the week receives a bonus for his excellent work.",
    "exampleTranslation": "本周员工因出色的工作获得奖金。"
  },
  {
    "word": "book",
    "phonetic": "/buːk/",
    "pos": "n",
    "meaning": "书; 本子 v. 预定（房间、车票等）",
    "example": "He was frustrated because he couldn't find anything about dinosaurs in the book.",
    "exampleTranslation": "他很沮丧，因为他在书中找不到关于恐龙的任何内容。"
  },
  {
    "word": "boom",
    "phonetic": "/buːm/",
    "pos": "n",
    "meaning": "繁荣 v.兴隆",
    "example": "The boom of the surf.",
    "exampleTranslation": "海浪的轰鸣声。"
  },
  {
    "word": "boot",
    "phonetic": "/buːt/",
    "pos": "n",
    "meaning": "长统靴",
    "example": "I booted the ball toward my teammate.",
    "exampleTranslation": "我把球踢向队友。"
  },
  {
    "word": "booth",
    "phonetic": "/buːð/",
    "pos": "n",
    "meaning": "货摊；摊位",
    "example": "The booth is important.",
    "exampleTranslation": "这个摊位很重要。"
  },
  {
    "word": "border",
    "phonetic": "/ˈbɔədə/",
    "pos": "n",
    "meaning": "边缘; 边境, 国界",
    "example": "the borders of the garden",
    "exampleTranslation": "花园的边界"
  },
  {
    "word": "bored",
    "phonetic": "/bɔːd/",
    "pos": "adj",
    "meaning": "无聊的",
    "example": "An insect bores into a tree.",
    "exampleTranslation": "昆虫钻进树里。"
  },
  {
    "word": "boring",
    "phonetic": "/ˈbɔːɹɪŋ/",
    "pos": "adj",
    "meaning": "乏味的, 无聊的",
    "example": "An insect bores into a tree.",
    "exampleTranslation": "昆虫钻进树里。"
  },
  {
    "word": "born",
    "phonetic": "/ˈbɔːn/",
    "pos": "adj",
    "meaning": "生来的, 天生的; 命中注定的",
    "example": "Judging from the look on his face, he wasn't bearing good news.",
    "exampleTranslation": "从他脸上的表情来看，他不是来报好消息的。"
  },
  {
    "word": "borrow",
    "phonetic": "/ˈbɔɹoʊ/",
    "pos": "v",
    "meaning": "（向别人）借用; 借",
    "example": "This putt has a big left-to right borrow on it.",
    "exampleTranslation": "这一推有很大的从左到右的借力。"
  },
  {
    "word": "boss",
    "phonetic": "/bɑs/",
    "pos": "n",
    "meaning": "领班; 老板",
    "example": "Chat turned to whisper when the boss entered the conference room.",
    "exampleTranslation": "老板进入会议室时，聊天变成了耳语。"
  },
  {
    "word": "botanical",
    "phonetic": "/bəˈtænɪkl/",
    "pos": "adj",
    "meaning": "植物学的",
    "example": "a botanical system",
    "exampleTranslation": "一个植物学系统"
  },
  {
    "word": "botany",
    "phonetic": "/-ɪ/",
    "pos": "n",
    "meaning": "植物; 植物学",
    "example": "the botany of Greenland",
    "exampleTranslation": "格陵兰岛的植物学"
  },
  {
    "word": "bother",
    "phonetic": "/ˈbɔðə(ɹ)/",
    "pos": "v",
    "meaning": "烦扰, 打扰, 费心",
    "example": "There was a bit of bother at the hairdresser's when they couldn't find my appointment in the book.",
    "exampleTranslation": "理发店有点麻烦，他们在预约本上找不到我的预约。"
  },
  {
    "word": "bottle",
    "phonetic": "/ˈbɑ.təl/",
    "pos": "n",
    "meaning": "瓶子",
    "example": "Beer is often sold in bottles.",
    "exampleTranslation": "啤酒通常装在瓶子里卖。"
  },
  {
    "word": "bottom",
    "phonetic": "/ˈbɒtəm/",
    "pos": "n",
    "meaning": "底部; 底",
    "example": "Footers appear at the bottoms of pages.",
    "exampleTranslation": "页脚出现在页面底部。"
  },
  {
    "word": "bounce",
    "phonetic": "/baʊns/",
    "pos": "v",
    "meaning": "(使)反跳, 弹起",
    "example": "Them pro-ballers got bounce!",
    "exampleTranslation": "那些职业球员弹跳力真强！"
  },
  {
    "word": "bound",
    "phonetic": "/ˈbaʊnd/",
    "pos": "adj",
    "meaning": "被束缚的; 有义务的；决心的；必定, 一定",
    "example": "Just to make the cheese more binding",
    "exampleTranslation": "只是让奶酪更粘稠"
  },
  {
    "word": "boundary",
    "phonetic": "/ˈbaʊndɹi/",
    "pos": "adj",
    "meaning": "边界, 分界线",
    "example": "He seems boundary.",
    "exampleTranslation": "他似乎有边界。"
  },
  {
    "word": "bow",
    "phonetic": "/bəʊ/",
    "pos": "n",
    "meaning": "弓；鞠躬 v.弯腰行礼",
    "example": "The musician bowed his violin expertly.",
    "exampleTranslation": "音乐家熟练地拉小提琴。"
  },
  {
    "word": "bowl",
    "phonetic": "/bəʊɫ/",
    "pos": "n",
    "meaning": "碗",
    "example": "You can’t have any more soup – you’ve had three bowls already.",
    "exampleTranslation": "你不能再喝汤了——你已经喝了三碗了。"
  },
  {
    "word": "bowling",
    "phonetic": "/ˈbəʊlɪŋ/",
    "pos": "n",
    "meaning": "保龄球",
    "example": "We were bowled rapidly along the road.",
    "exampleTranslation": "我们在路上快速滚动。"
  },
  {
    "word": "box",
    "phonetic": "/bɒks/",
    "pos": "n",
    "meaning": "盒子, 箱子",
    "example": "The box is important.",
    "exampleTranslation": "这个盒子很重要。"
  },
  {
    "word": "boxing",
    "phonetic": "/ˈbɒksɪŋ/",
    "pos": "n",
    "meaning": "拳击（运动）",
    "example": "Leave this place before I box you!",
    "exampleTranslation": "在我打你之前离开这个地方！"
  },
  {
    "word": "boy",
    "phonetic": "/bɔːə/",
    "pos": "n",
    "meaning": "男孩",
    "example": "Kate is dating a boy named Jim.",
    "exampleTranslation": "凯特正在和一个叫吉姆的男孩约会。"
  },
  {
    "word": "boycott",
    "phonetic": "/ˈbɔɪkɒt/",
    "pos": "v",
    "meaning": "联合抵制",
    "example": "They boycott the project.",
    "exampleTranslation": "他们抵制这个项目。"
  },
  {
    "word": "brain",
    "phonetic": "/bɹeɪn/",
    "pos": "n",
    "meaning": "脑（子）",
    "example": "She was a total brain.",
    "exampleTranslation": "她是个十足的天才。"
  },
  {
    "word": "brake",
    "phonetic": "/bɹeɪk/",
    "pos": "n",
    "meaning": "闸 v.  刹车",
    "example": "This is a brake.",
    "exampleTranslation": "这是一个刹车。"
  },
  {
    "word": "branch",
    "phonetic": "/bɹæntʃ/",
    "pos": "n",
    "meaning": "树枝; 分枝",
    "example": "the branch of an antler, a chandelier, or a railway",
    "exampleTranslation": "鹿角、吊灯或铁路的分支"
  },
  {
    "word": "brand",
    "phonetic": "/bɹand/",
    "pos": "n",
    "meaning": "商标, 牌子, 烙印",
    "example": "To burn something to brands and ashes.",
    "exampleTranslation": "把某物烧成炭和灰。"
  },
  {
    "word": "brave",
    "phonetic": "/bɹeɪv/",
    "pos": "adj",
    "meaning": "勇敢的",
    "example": "After braving tricks on the high-dive, he braved a jump off the first diving platform.",
    "exampleTranslation": "在高台跳水尝试了勇敢的技巧后，他勇敢地从第一个跳水平台跳下。"
  },
  {
    "word": "bravery",
    "phonetic": "/ˈbɹeɪvəɹi/",
    "pos": "n",
    "meaning": "勇气",
    "example": "This is a bravery.",
    "exampleTranslation": "这是一种勇气。"
  },
  {
    "word": "bread",
    "phonetic": "/bɹeːd/",
    "pos": "n",
    "meaning": "面包",
    "example": "This is a bread.",
    "exampleTranslation": "这是面包。"
  },
  {
    "word": "break",
    "phonetic": "/bɹeɪk/",
    "pos": "n",
    "meaning": "间隙",
    "example": "The femur has a clean break and so should heal easily.",
    "exampleTranslation": "股骨有干净的断裂，所以应该容易愈合。"
  },
  {
    "word": "breakfast",
    "phonetic": "/ˈbɹɛkfəst/",
    "pos": "n",
    "meaning": "早餐",
    "example": "You should put more protein in her breakfast so she will grow.",
    "exampleTranslation": "你应该在她的早餐中加更多蛋白质，这样她才能长高。"
  },
  {
    "word": "breakthrough",
    "phonetic": "/ˈbɹeɪkθɹuː/",
    "pos": "n",
    "meaning": "突破",
    "example": "Albert Einstein is credited with making some of the greatest breakthroughs in modern physics.",
    "exampleTranslation": "爱因斯坦被认为在现代物理学中取得了一些最伟大的突破。"
  },
  {
    "word": "breast",
    "phonetic": "/bɹɛst/",
    "pos": "n",
    "meaning": "胸部, 乳房",
    "example": "Tanya's breasts grew remarkably during pregnancy.",
    "exampleTranslation": "塔尼亚在怀孕期间胸部明显增大。"
  },
  {
    "word": "breath",
    "phonetic": "/bɹɛθ/",
    "pos": "n",
    "meaning": "气息; 呼吸",
    "example": "I could hear the breath of the runner behind me.",
    "exampleTranslation": "我能听到身后跑步者的呼吸声。"
  },
  {
    "word": "breathe",
    "phonetic": "/bɹiːð/",
    "pos": "v",
    "meaning": "呼吸",
    "example": "Fish have gills so they can breathe underwater.",
    "exampleTranslation": "鱼有鳃，所以可以在水下呼吸。"
  },
  {
    "word": "breathless",
    "phonetic": "/ˈbɹɛθləs/",
    "pos": "adj",
    "meaning": "无声息的, 气喘吁吁的, 停止呼吸的",
    "example": "That is breathless.",
    "exampleTranslation": "那是令人屏息的。"
  },
  {
    "word": "brewery",
    "phonetic": "/ˈbɹuːəɹi/",
    "pos": "n",
    "meaning": "酿酒厂",
    "example": "The brewery is important.",
    "exampleTranslation": "这家酿酒厂很重要。"
  },
  {
    "word": "brick",
    "phonetic": "/bɹɪk/",
    "pos": "n",
    "meaning": "砖; 砖块",
    "example": "This wall is made of bricks.",
    "exampleTranslation": "这堵墙是用砖砌的。"
  },
  {
    "word": "bride",
    "phonetic": "/bɹaɪd/",
    "pos": "n",
    "meaning": "新娘",
    "example": "The bride is important.",
    "exampleTranslation": "这位新娘很重要。"
  },
  {
    "word": "bridegroom",
    "phonetic": "/ˈbɹaɪdˌɡɹuːm/",
    "pos": "n",
    "meaning": "新郎",
    "example": "I need the bridegroom.",
    "exampleTranslation": "我需要这位新郎。"
  },
  {
    "word": "bridge",
    "phonetic": "/bɹɪd͡ʒ/",
    "pos": "n",
    "meaning": "桥",
    "example": "With enough cable, we can bridge this gorge.",
    "exampleTranslation": "有足够的电缆，我们可以跨越这个峡谷。"
  },
  {
    "word": "brief",
    "phonetic": "/bɹiːf/",
    "pos": "adj",
    "meaning": "简洁的",
    "example": "We got a news brief.",
    "exampleTranslation": "我们收到了新闻简报。"
  },
  {
    "word": "bright",
    "phonetic": "/bɹaɪt/",
    "pos": "adj",
    "meaning": "明亮的; 聪明的",
    "example": "Your brights are on.",
    "exampleTranslation": "你的远光灯开着。"
  },
  {
    "word": "brilliant",
    "phonetic": "/ˈbɹɪljənt/",
    "pos": "adj",
    "meaning": "灿烂的, 闪耀的, 有才气的",
    "example": "the brilliant lights along the promenade",
    "exampleTranslation": "海滨长廊上灿烂的灯光"
  },
  {
    "word": "bring",
    "phonetic": "/brɪŋ/",
    "pos": "",
    "meaning": "(brought, brought) v. 拿来, 带来, 取来",
    "example": "Please bring me a cup of tea.",
    "exampleTranslation": "请给我端一杯茶来。"
  },
  {
    "word": "broad",
    "phonetic": "/bɹɑd/",
    "pos": "adj",
    "meaning": "宽的, 宽大的",
    "example": "the broad expanse of ocean",
    "exampleTranslation": "广阔的海洋"
  },
  {
    "word": "brochure",
    "phonetic": "/ˈbɹəʊ.ʃə(ɹ)/",
    "pos": "n",
    "meaning": "小册子",
    "example": "This is a brochure.",
    "exampleTranslation": "这是一本小册子。"
  },
  {
    "word": "broken",
    "phonetic": "/ˈbɹəʊkən/",
    "pos": "adj",
    "meaning": "弄坏了的",
    "example": "If the vase falls to the floor, it might break.",
    "exampleTranslation": "如果花瓶掉到地上，它可能会碎。"
  },
  {
    "word": "broom",
    "phonetic": "/bɹuːm/",
    "pos": "n",
    "meaning": "扫帚",
    "example": "This is a broom.",
    "exampleTranslation": "这是一把扫帚。"
  },
  {
    "word": "brother",
    "phonetic": "/ˈbɹɐðɘ(ɹ)/",
    "pos": "n",
    "meaning": "兄; 弟",
    "example": "I would like to thank the brother who just spoke.",
    "exampleTranslation": "我想感谢刚才发言的那位兄弟。"
  },
  {
    "word": "brown",
    "phonetic": "/bɹaʊn/",
    "pos": "n",
    "meaning": "褐色, 棕色 adj. 褐色的, 棕色的",
    "example": "The browns and greens in this painting give it a nice woodsy feel.",
    "exampleTranslation": "这幅画中的棕色和绿色给它一种很好的森林感。"
  },
  {
    "word": "brunch",
    "phonetic": "/bɹʌntʃ/",
    "pos": "n",
    "meaning": "早午饭",
    "example": "I need the brunch.",
    "exampleTranslation": "我需要早午餐。"
  },
  {
    "word": "brush",
    "phonetic": "/bɹʌʃ/",
    "pos": "v",
    "meaning": "刷; 擦 n. 刷子",
    "example": "She gave her hair a quick brush.",
    "exampleTranslation": "她快速梳理了一下头发。"
  },
  {
    "word": "buddhism",
    "phonetic": "/ˈbʊdɪzəm/",
    "pos": "n",
    "meaning": "佛教",
    "example": "This is a buddhism.",
    "exampleTranslation": "这是佛教。"
  },
  {
    "word": "budget",
    "phonetic": "/ˈbʌdʒ.ɪt/",
    "pos": "n",
    "meaning": "预算",
    "example": "Budgeting is even harder in times of recession",
    "exampleTranslation": "在衰退时期，预算更加困难"
  },
  {
    "word": "buffet",
    "phonetic": "/ˈbʊfeɪ/",
    "pos": "n",
    "meaning": "餐具柜, 小卖部",
    "example": "I need the buffet.",
    "exampleTranslation": "我需要自助餐。"
  },
  {
    "word": "build",
    "phonetic": "/bɪld/",
    "pos": "",
    "meaning": "(built, built) v. 建筑; 造",
    "example": "They will build a new house.",
    "exampleTranslation": "他们将建造一座新房子。"
  },
  {
    "word": "building",
    "phonetic": "/ˈbɪl.dɪŋ/",
    "pos": "n",
    "meaning": "建筑物; 房屋; 大楼",
    "example": "The building of the bridge will be completed in a couple of weeks.",
    "exampleTranslation": "桥梁的建设将在几周内完成。"
  },
  {
    "word": "bun",
    "phonetic": "/bʌn/",
    "pos": "n",
    "meaning": "馒头; 小甜面包",
    "example": "This is a bun.",
    "exampleTranslation": "这是一个馒头。"
  },
  {
    "word": "bunch",
    "phonetic": "/ˈbʌntʃ/",
    "pos": "n",
    "meaning": "串, 束",
    "example": "a bunch of grapes;  a bunch of bananas;  a bunch of keys;  a bunch of yobs on a street corner",
    "exampleTranslation": "一串葡萄；一串香蕉；一串钥匙；街角的一群小混混"
  },
  {
    "word": "bungalow",
    "phonetic": "/ˈbʌŋɡəloʊ/",
    "pos": "n",
    "meaning": "(带走廊的)平房",
    "example": "My aunt can't manage the stairs any more, so she's moving to a bungalow.",
    "exampleTranslation": "我阿姨不能再爬楼梯了，所以她要搬到平房去。"
  },
  {
    "word": "burden",
    "phonetic": "/ˈbɜːdn/",
    "pos": "n",
    "meaning": "担子, 负担",
    "example": "a ship of a hundred tons burden",
    "exampleTranslation": "一艘百吨载重的船"
  },
  {
    "word": "bureaucratic",
    "phonetic": "/ˌbjʊrəˈkrætɪk/",
    "pos": "adj",
    "meaning": "官僚政治的",
    "example": "the European Union is legalistic, bureaucratic and runs by precedent.",
    "exampleTranslation": "欧盟是法律主义的、官僚主义的，并且按先例运行。"
  },
  {
    "word": "burglar",
    "phonetic": "/ˈbɜːɡlə(ɹ)/",
    "pos": "n",
    "meaning": "夜贼",
    "example": "The burglar made off with a large diamond from the museum.",
    "exampleTranslation": "窃贼从博物馆偷走了一颗大钻石。"
  },
  {
    "word": "burn",
    "phonetic": "/bɜːrn/",
    "pos": "",
    "meaning": "(-ed, -ed / burnt, burnt) v. 燃烧,使晒黑 n. 烧伤;",
    "example": "The fire will burn the wood.",
    "exampleTranslation": "火会烧掉木头。"
  },
  {
    "word": "burst",
    "phonetic": "/bɜːst/",
    "pos": "v",
    "meaning": "突然发生; 突然发作",
    "example": "The bursts of the bombs could be heard miles away.",
    "exampleTranslation": "炸弹的爆炸声几英里外都能听到。"
  },
  {
    "word": "bury",
    "phonetic": "/ˈbʌ.ɹi/",
    "pos": "v",
    "meaning": "埋; 葬",
    "example": "bury a bone;  bury the embers",
    "exampleTranslation": "埋; 葬。"
  },
  {
    "word": "bus",
    "phonetic": "/bɐs/",
    "pos": "n",
    "meaning": "公共汽车",
    "example": "He bussed tables as the restaurant emptied out.",
    "exampleTranslation": "餐厅空了，他收拾桌子。"
  },
  {
    "word": "bush",
    "phonetic": "/bʊʃ/",
    "pos": "n",
    "meaning": "灌木丛, 矮树丛",
    "example": "bushes to support pea vines",
    "exampleTranslation": "支撑豌豆藤的灌木"
  },
  {
    "word": "business",
    "phonetic": "/ˈbɪd.nəs/",
    "pos": "n",
    "meaning": "商业；生意; 事情, 职责;",
    "example": "I was left my father's business.",
    "exampleTranslation": "我继承了父亲的生意。"
  },
  {
    "word": "businessman/men",
    "phonetic": "/men",
    "pos": "",
    "meaning": "",
    "example": "He is a rich businessman.",
    "exampleTranslation": "他是一位富有的商人。"
  },
  {
    "word": "businesswoman/women",
    "phonetic": "/women",
    "pos": "",
    "meaning": "",
    "example": "She is a smart businesswoman.",
    "exampleTranslation": "她是一位聪明的女商人。"
  },
  {
    "word": "busy",
    "phonetic": "/ˈbɪzi/",
    "pos": "adj",
    "meaning": "忙碌的",
    "example": "On my vacation I'll busy myself with gardening.",
    "exampleTranslation": "在假期我会忙着做园艺。"
  },
  {
    "word": "but",
    "phonetic": "/bʊt/",
    "pos": "conj",
    "meaning": "但是, 可是 prep. 除了, 除…外",
    "example": "It has to be done – no ifs or buts.",
    "exampleTranslation": "必须这样做——不要找借口。"
  },
  {
    "word": "butter",
    "phonetic": "/ˈbʊtə/",
    "pos": "n",
    "meaning": "黄油, 奶油",
    "example": "peanut butter",
    "exampleTranslation": "花生酱"
  },
  {
    "word": "butterfly",
    "phonetic": "/ˈbʌtə(ɹ)flaɪ/",
    "pos": "n",
    "meaning": "蝴蝶",
    "example": "butterfly tape",
    "exampleTranslation": "蝴蝶胶带"
  },
  {
    "word": "button",
    "phonetic": "/ˈbʌtn̩/",
    "pos": "n",
    "meaning": "纽扣; 按钮 v. 扣紧",
    "example": "April fastened the buttons of her overcoat to keep out the wind.",
    "exampleTranslation": "四月扣上大衣的扣子挡风。"
  },
  {
    "word": "buy",
    "phonetic": "/baɪ/",
    "pos": "",
    "meaning": "(bought, bought) v. 买",
    "example": "I want to buy a new book.",
    "exampleTranslation": "我想买一本新书。"
  },
  {
    "word": "by",
    "phonetic": "/baɪ/",
    "pos": "prep",
    "meaning": "靠近, 在…旁; 不迟于; 被; 用; 由; 乘（车）",
    "example": "geography bee",
    "exampleTranslation": "地理知识竞赛"
  },
  {
    "word": "bye",
    "phonetic": "/baɪ/",
    "pos": "int",
    "meaning": "再见",
    "example": "Craig's Crew plays the bye next week.",
    "exampleTranslation": "克雷格队下周轮空。"
  },
  {
    "word": "cab",
    "phonetic": "/kæb/",
    "pos": "n",
    "meaning": "（美）出租车",
    "example": "a cab ride",
    "exampleTranslation": "出租车行程"
  },
  {
    "word": "cabbage",
    "phonetic": "/ˈkæbɪdʒ/",
    "pos": "n",
    "meaning": "卷心菜, 洋白菜",
    "example": "Cabbage is good for you.",
    "exampleTranslation": "卷心菜对你有好处。"
  },
  {
    "word": "cafe",
    "phonetic": "/ˈkæfeɪ/",
    "pos": "n",
    "meaning": "咖啡馆",
    "example": "1982, Joni Mitchell, Chinese Café / Unchained Melody (song)",
    "exampleTranslation": "1982年，乔尼·米切尔，《中国咖啡馆/锁不住的旋律》（歌曲）"
  },
  {
    "word": "cafeteria",
    "phonetic": "/ˌkæfəˈtɪriə/",
    "pos": "n",
    "meaning": "自助餐厅",
    "example": "This is a cafeteria.",
    "exampleTranslation": "这是一家自助餐厅。"
  },
  {
    "word": "cage",
    "phonetic": "/keɪdʒ/",
    "pos": "",
    "meaning": "n 笼; 鸟笼",
    "example": "The bird is in the cage.",
    "exampleTranslation": "鸟在笼子里。"
  },
  {
    "word": "cake",
    "phonetic": "/keɪk/",
    "pos": "n",
    "meaning": "蛋糕, 糕点; 饼",
    "example": "a johnnycake",
    "exampleTranslation": "一种玉米饼"
  },
  {
    "word": "calculate",
    "phonetic": "/ˈkælkjəleɪt/",
    "pos": "v",
    "meaning": "计算, 考虑, 计划, 打算 <美>以为, 认为",
    "example": "Calculate the square root of 3 to 10 decimal places.",
    "exampleTranslation": "计算3的平方根到小数点后10位。"
  },
  {
    "word": "call",
    "phonetic": "/kɔːɫ/",
    "pos": "n",
    "meaning": "喊, 叫; 电话, 通话 v. 称呼; 呼唤; 喊, 叫",
    "example": "I received several calls today.",
    "exampleTranslation": "我今天接到了几个电话。"
  },
  {
    "word": "calm",
    "phonetic": "/kam/",
    "pos": "adj",
    "meaning": "镇静的; 沉着的 v. 镇静; 沉着",
    "example": "to calm a crying baby",
    "exampleTranslation": "安抚哭泣的婴儿"
  },
  {
    "word": "camel",
    "phonetic": "/ˈkæməl/",
    "pos": "n",
    "meaning": "骆驼",
    "example": "I need the camel.",
    "exampleTranslation": "我需要骆驼。"
  },
  {
    "word": "camera",
    "phonetic": "/ˈkæməɹə/",
    "pos": "n",
    "meaning": "照相机; 摄像机",
    "example": "This is a camera.",
    "exampleTranslation": "这是一台相机。"
  },
  {
    "word": "camp",
    "phonetic": "/kʰɛəmp/",
    "pos": "n",
    "meaning": "（夏令）营 v.  野营; 宿营",
    "example": "a hunter's camp",
    "exampleTranslation": "猎人的营地"
  },
  {
    "word": "campaign",
    "phonetic": "/kæmˈpeɪn/",
    "pos": "n",
    "meaning": "战役,",
    "example": "The company is targeting children in their latest advertising campaign.",
    "exampleTranslation": "公司在最新的广告活动中针对儿童。"
  },
  {
    "word": "canal",
    "phonetic": "/kəˈnɛl/",
    "pos": "n",
    "meaning": "运河; 水道",
    "example": "This is a canal.",
    "exampleTranslation": "这是一条运河。"
  },
  {
    "word": "cancel",
    "phonetic": "/ˈkænsl̩/",
    "pos": "v",
    "meaning": "取消",
    "example": "He cancelled his order on their website.",
    "exampleTranslation": "他在他们的网站上取消了订单。"
  },
  {
    "word": "cancer",
    "phonetic": "/ˈkæːnsə/",
    "pos": "n",
    "meaning": "癌",
    "example": "I need the cancer.",
    "exampleTranslation": "我需要癌症。"
  },
  {
    "word": "candidate",
    "phonetic": "/ˈkæn.dɪdət/",
    "pos": "n",
    "meaning": "候选人, 投考者",
    "example": "I need the candidate.",
    "exampleTranslation": "我需要这位候选人。"
  },
  {
    "word": "candle",
    "phonetic": "/ˈkændl̩/",
    "pos": "n",
    "meaning": "蜡烛",
    "example": "This is a candle.",
    "exampleTranslation": "这是一根蜡烛。"
  },
  {
    "word": "candy",
    "phonetic": "/ˈkændi/",
    "pos": "n",
    "meaning": "糖果",
    "example": "Fruits preserved in sugar candy after a time.",
    "exampleTranslation": "水果在糖中腌制一段时间后。"
  },
  {
    "word": "canteen",
    "phonetic": "/kænˈtiːn/",
    "pos": "n",
    "meaning": "餐厅; 食堂",
    "example": "This is a canteen.",
    "exampleTranslation": "这是一个食堂。"
  },
  {
    "word": "cap",
    "phonetic": "/kæp/",
    "pos": "n",
    "meaning": "帽子; 盖;",
    "example": "The children were all wearing caps to protect them from the sun.",
    "exampleTranslation": "孩子们都戴着帽子防晒。"
  },
  {
    "word": "capital",
    "phonetic": "/ˈkæp.ɪ.təl/",
    "pos": "n",
    "meaning": "首都, 省会; 资本",
    "example": "He does not have enough capital to start a business.",
    "exampleTranslation": "他没有足够的资金创业。"
  },
  {
    "word": "capsule",
    "phonetic": "/ˈkæpsjuːl/",
    "pos": "n",
    "meaning": "胶囊, 瓶帽, 太空舱",
    "example": "This is a capsule.",
    "exampleTranslation": "这是一个胶囊。"
  },
  {
    "word": "captain",
    "phonetic": "/ˈkæp.tən/",
    "pos": "n",
    "meaning": "（海军）上校; 船长, 舰长; 队长",
    "example": "The captain is the last man to leave a sinking ship.",
    "exampleTranslation": "船长是最后一个离开沉船的人。"
  },
  {
    "word": "caption",
    "phonetic": "/ˈkæp.ʃən/",
    "pos": "n",
    "meaning": "标题, 说明, 字幕",
    "example": "Only once the drawing is done will the letterer caption it.",
    "exampleTranslation": "只有在画完后，字幕员才会给它加字幕。"
  },
  {
    "word": "car",
    "phonetic": "/kɑː/",
    "pos": "n",
    "meaning": "汽车, 小卧车",
    "example": "She drove her car to the mall.",
    "exampleTranslation": "她开车去商场。"
  },
  {
    "word": "carbon",
    "phonetic": "/ˈkɑɹbən/",
    "pos": "n",
    "meaning": "碳",
    "example": "A methane molecule is made up of a single carbon with four hydrogens.",
    "exampleTranslation": "一个甲烷分子由一个碳和四个氢组成。"
  },
  {
    "word": "card",
    "phonetic": "/kaːd/",
    "pos": "n",
    "meaning": "卡片; 名片; 纸牌",
    "example": "He played cards with his friends.",
    "exampleTranslation": "他和朋友们打牌。"
  },
  {
    "word": "care",
    "phonetic": "/kɛə/",
    "pos": "n",
    "meaning": "照料, 保护; 小心  v. 介意…, 在乎; 关心",
    "example": "Care should be taken when holding babies.",
    "exampleTranslation": "抱婴儿时要小心。"
  },
  {
    "word": "careful",
    "phonetic": "/ˈkɛːfəl/",
    "pos": "adj",
    "meaning": "小心的, 仔细的, 谨慎的",
    "example": "He was a slow and careful driver.",
    "exampleTranslation": "他是一个缓慢而谨慎的司机。"
  },
  {
    "word": "careless",
    "phonetic": "/ˈkɛələs/",
    "pos": "adj",
    "meaning": "粗心的, 漫不经心的",
    "example": "Jessica was so careless that she put her shorts on backwards.",
    "exampleTranslation": "杰西卡太粗心了，把短裤穿反了。"
  },
  {
    "word": "carpenter",
    "phonetic": "/ˈkɑː.pən.tə/",
    "pos": "n",
    "meaning": "木匠",
    "example": "The carpenter is important.",
    "exampleTranslation": "这位木匠很重要。"
  },
  {
    "word": "carpet",
    "phonetic": "/ˈkɑː(ɹ)pɪt/",
    "pos": "n",
    "meaning": "地毯",
    "example": "After the fire, they carpeted over the blackened hardwood flooring.",
    "exampleTranslation": "火灾后，他们在烧焦的硬木地板上铺了地毯。"
  },
  {
    "word": "carriage",
    "phonetic": "/ˈkæɹɪdʒ/",
    "pos": "n",
    "meaning": "四轮马车;（火车）客车厢",
    "example": "The carriage ride was very romantic.",
    "exampleTranslation": "马车之旅非常浪漫。"
  },
  {
    "word": "carrier",
    "phonetic": "/ˈkæ.ɹɪ.ə/",
    "pos": "n",
    "meaning": "搬运者; 媒介",
    "example": "aircraft carrier",
    "exampleTranslation": "航空母舰"
  },
  {
    "word": "carrot",
    "phonetic": "/ˈkæɹ.ət/",
    "pos": "n",
    "meaning": "胡萝卜",
    "example": "The carrot is important.",
    "exampleTranslation": "这根胡萝卜很重要。"
  },
  {
    "word": "carry",
    "phonetic": "/ˈkæ.ɹi/",
    "pos": "v",
    "meaning": "拿, 搬, 带, 提, 抬, 背, 抱, 运等",
    "example": "Adjust your carry from time to time so that you don't tire too quickly.",
    "exampleTranslation": "不时调整你的携带方式，这样你就不会太快疲劳。"
  },
  {
    "word": "cartoon",
    "phonetic": "/kɑːˈtuːn/",
    "pos": "n",
    "meaning": "动画片, 卡通; 漫画",
    "example": "I need the cartoon.",
    "exampleTranslation": "我需要这部动画片。"
  },
  {
    "word": "carve",
    "phonetic": "/kɑːv/",
    "pos": "v",
    "meaning": "刻; 雕刻",
    "example": "give that turkey a careful carve",
    "exampleTranslation": "仔细切那只火鸡"
  },
  {
    "word": "cash",
    "phonetic": "/kæʃ/",
    "pos": "n",
    "meaning": "现金, 现钞 v. 兑现",
    "example": "After you bounced those checks last time, they want to be paid in cash.",
    "exampleTranslation": "上次你跳票后，他们要求现金支付。"
  },
  {
    "word": "cassette",
    "phonetic": "/kæˈsɛt/",
    "pos": "n",
    "meaning": "盒子, 盒式磁带",
    "example": "This is a cassette.",
    "exampleTranslation": "这是一盒磁带。"
  },
  {
    "word": "cast",
    "phonetic": "/kæst/",
    "pos": "",
    "meaning": "(cast, cast) v. 扔, 抛",
    "example": "He cast a stone into the river.",
    "exampleTranslation": "他向河里扔了一块石头。"
  },
  {
    "word": "castle",
    "phonetic": "/kæsl̩/",
    "pos": "n",
    "meaning": "城堡",
    "example": "This is a castle.",
    "exampleTranslation": "这是一座城堡。"
  },
  {
    "word": "casual",
    "phonetic": "/ˈkɛʒɘl/",
    "pos": "adj",
    "meaning": "偶然的；不意的; 随便的；不拘礼节的",
    "example": "The devs dumbed the game down so the casuals could enjoy it.",
    "exampleTranslation": "开发者简化了游戏，让休闲玩家也能享受。"
  },
  {
    "word": "cat",
    "phonetic": "/kat/",
    "pos": "n",
    "meaning": "猫",
    "example": "This is a cat.",
    "exampleTranslation": "这是一只猫。"
  },
  {
    "word": "catalogue",
    "phonetic": "/ˈkætəlɑɡ/",
    "pos": "n",
    "meaning": "目录",
    "example": "This is a catalogue.",
    "exampleTranslation": "这是一个目录。"
  },
  {
    "word": "catastrophe",
    "phonetic": "/kəˈtæstɹəfi/",
    "pos": "n",
    "meaning": "大灾难, 大祸",
    "example": "I need the catastrophe.",
    "exampleTranslation": "我需要这场灾难。"
  },
  {
    "word": "catch",
    "phonetic": "/kætʃ/",
    "pos": "",
    "meaning": "(caught, caught) v. 接住; 捉住; 赶上; 染上（疾病）",
    "example": "Can you catch the ball?",
    "exampleTranslation": "你能接住球吗？"
  },
  {
    "word": "category",
    "phonetic": "/ˈkætəˌɡɔɹi/",
    "pos": "n",
    "meaning": "种类, 类别",
    "example": "I wouldn't put this book in the same category as the author's first novel.",
    "exampleTranslation": "我不会把这本书和作者的第一部小说归为同一类。"
  },
  {
    "word": "cater",
    "phonetic": "/ˈkeɪtə/",
    "pos": "v",
    "meaning": "满足(需要), 投合",
    "example": "The merchants are the purveyors of fine selections.",
    "exampleTranslation": "商人是精选商品的供应商。"
  },
  {
    "word": "cathedral",
    "phonetic": "/kəˈθiː.dɹəl/",
    "pos": "n",
    "meaning": "大教堂（天主教）",
    "example": "This is a cathedral.",
    "exampleTranslation": "这是一座大教堂。"
  },
  {
    "word": "catholic",
    "phonetic": "/ˈkaθ(ə)lɪk/",
    "pos": "adj",
    "meaning": "天主教的",
    "example": "Christmas is celebrated at different dates in the Catholic and Orthodox calendars.",
    "exampleTranslation": "天主教和东正教日历在不同日期庆祝圣诞节。"
  },
  {
    "word": "cattle",
    "phonetic": "/ˈkæt(ə)l/",
    "pos": "n",
    "meaning": "牛（总称）, 家畜",
    "example": "Do you want to raise cattle?",
    "exampleTranslation": "你想养牛吗？"
  },
  {
    "word": "cause",
    "phonetic": "/kɔːz/",
    "pos": "n",
    "meaning": "原因, 起因 v.  促使, 引起, 使发生",
    "example": "They identified a burst pipe as the cause of the flooding.",
    "exampleTranslation": "他们确定爆裂的管道是洪水的原因。"
  },
  {
    "word": "caution",
    "phonetic": "/ˈkɔːʃ(ə)n/",
    "pos": "n",
    "meaning": "小心, 谨慎, 警告",
    "example": "The guideline expressed caution against excessive radiographic imaging.",
    "exampleTranslation": "指南表示要谨慎进行过度的放射成像。"
  },
  {
    "word": "cautious",
    "phonetic": "/ˈkɔːʃəs/",
    "pos": "adj",
    "meaning": "谨慎的, 小心的",
    "example": "He took a few cautious steps toward the cave.",
    "exampleTranslation": "他小心翼翼地向洞穴走了几步。"
  },
  {
    "word": "cave",
    "phonetic": "/keɪv/",
    "pos": "n",
    "meaning": "洞, 穴; 地窖",
    "example": "We found a cave on the mountainside where we could take shelter.",
    "exampleTranslation": "我们在山坡上发现了一个可以避难的洞穴。"
  },
  {
    "word": "ceiling",
    "phonetic": "/ˈsiːlɪŋ/",
    "pos": "n",
    "meaning": "天花板, 顶棚",
    "example": "the dining room had an ornate ceiling",
    "exampleTranslation": "餐厅有华丽的天花板"
  },
  {
    "word": "celebrate",
    "phonetic": "/ˈsɛl.ə.bɹeɪt/",
    "pos": "v",
    "meaning": "庆祝",
    "example": "to celebrate the name of the Most High",
    "exampleTranslation": "赞美至高者的名"
  },
  {
    "word": "celebration",
    "phonetic": "/ˌsɛlɪˈbɹeiʃən/",
    "pos": "n",
    "meaning": "庆祝; 庆祝会",
    "example": "This is a celebration.",
    "exampleTranslation": "这是一个庆祝活动。"
  },
  {
    "word": "cell",
    "phonetic": "/sɛl/",
    "pos": "n",
    "meaning": "细胞",
    "example": "Gregor Mendel must have spent a good amount of time outside of his cell.",
    "exampleTranslation": "格雷戈尔·孟德尔一定在他的牢房外度过了大量时间。"
  },
  {
    "word": "cent",
    "phonetic": "/sɛnt/",
    "pos": "n",
    "meaning": "美分",
    "example": "He blew every last cent.",
    "exampleTranslation": "他花光了最后一分钱。"
  },
  {
    "word": "centigrade",
    "phonetic": "/ˈsentɪɡreɪd/",
    "pos": "adj",
    "meaning": "摄氏度",
    "example": "a temperature of 34 centigrades",
    "exampleTranslation": "34摄氏度的温度"
  },
  {
    "word": "centimetre",
    "phonetic": "/ˈsentɪmiːtər/",
    "pos": "",
    "meaning": "(centimeter) n. 公分, 厘米",
    "example": "One metre has 100 centimetres.",
    "exampleTranslation": "一米有一百厘米。"
  },
  {
    "word": "central",
    "phonetic": "/ˈsɛntɹəl/",
    "pos": "adj",
    "meaning": "中心的, 中央的; 主要的",
    "example": "That is central.",
    "exampleTranslation": "那是中心的。"
  },
  {
    "word": "centre",
    "phonetic": "/ˈsentər/",
    "pos": "",
    "meaning": "(center ) n. 中心, 中央",
    "example": "The park is in the centre of the city.",
    "exampleTranslation": "公园在市中心。"
  },
  {
    "word": "century",
    "phonetic": "/ˈsɛn.t͡ʃə.ɹiː/",
    "pos": "n",
    "meaning": "世纪, 百年",
    "example": "That was his tenth professional century.",
    "exampleTranslation": "那是他的第十个职业世纪。"
  },
  {
    "word": "certain",
    "phonetic": "/ˈsɝtn̩/",
    "pos": "adj",
    "meaning": "某个，某些; 确定的, 无疑的; 一定会",
    "example": "I was certain of my decision.",
    "exampleTranslation": "我对我的决定很确定。"
  },
  {
    "word": "certificate",
    "phonetic": "/sərˈtɪfɪkət/",
    "pos": "n",
    "meaning": "证明, 证明书",
    "example": "The film is certificate 15.",
    "exampleTranslation": "这部电影是15级。"
  },
  {
    "word": "chain",
    "phonetic": "/ˈt͡ʃeɪn/",
    "pos": "n",
    "meaning": "链; 链条",
    "example": "He wore a gold chain around the neck.",
    "exampleTranslation": "他脖子上戴着金链子。"
  },
  {
    "word": "chair",
    "phonetic": "/t͡ʃɛə(ɹ)/",
    "pos": "n",
    "meaning": "椅子",
    "example": "All I need to weather a snowstorm is hot coffee, a warm fire, a good book and a comfortable chair.",
    "exampleTranslation": "我要度过暴风雪只需要热咖啡、温暖的火、一本好书和一把舒适的椅子。"
  },
  {
    "word": "chairman",
    "phonetic": "/ˈtʃɛːmən/",
    "pos": "n",
    "meaning": "主席, 会长",
    "example": "I need the chairman.",
    "exampleTranslation": "我需要这位主席。"
  },
  {
    "word": "chairwoman",
    "phonetic": "/ˈtʃerwʊmən/",
    "pos": "n",
    "meaning": "女主席, 女会长",
    "example": "This is a chairwoman.",
    "exampleTranslation": "这是一位女主席。"
  },
  {
    "word": "chalk",
    "phonetic": "/t͡ʃɔːk/",
    "pos": "n",
    "meaning": "粉笔",
    "example": "I need the chalk.",
    "exampleTranslation": "我需要粉笔。"
  },
  {
    "word": "challenge",
    "phonetic": "/ˈtʃæl.əndʒ/",
    "pos": "n",
    "meaning": "&v. 挑战",
    "example": "We challenged the boys next door to a game of football.",
    "exampleTranslation": "我们挑战隔壁的男孩踢足球。"
  },
  {
    "word": "challenging",
    "phonetic": "/ˈtʃæləndʒɪŋ/",
    "pos": "adj",
    "meaning": "具有挑战性的",
    "example": "We challenged the boys next door to a game of football.",
    "exampleTranslation": "我们挑战隔壁的男孩踢足球。"
  },
  {
    "word": "champion",
    "phonetic": "/ˈtʃæmpiən/",
    "pos": "n",
    "meaning": "冠军, 优胜者",
    "example": "The defending champion is expected to defeat his challenger.",
    "exampleTranslation": "卫冕冠军预计将击败挑战者。"
  },
  {
    "word": "chance",
    "phonetic": "/tʃʰans/",
    "pos": "n",
    "meaning": "机会, 可能性",
    "example": "We had the chance to meet the president last week.",
    "exampleTranslation": "上周我们有机会见到总统。"
  },
  {
    "word": "change",
    "phonetic": "/tʃeɪndʒ/",
    "pos": "n",
    "meaning": "零钱; 找头, 变化 v. 改变, 变化; 更换; 兑换",
    "example": "The product is undergoing a change in order to improve it.",
    "exampleTranslation": "产品正在经历变化以改进它。"
  },
  {
    "word": "changeable",
    "phonetic": "/ˈt͡ʃeɪnd͡ʒəbəl/",
    "pos": "adj",
    "meaning": "易变的, 变化无常的",
    "example": "The weather is very changeable today: we've had bright sunshine, clouds, wind and rain in the same half-hour.",
    "exampleTranslation": "今天天气变化无常：在同一个半小时里，我们经历了明媚的阳光、云、风和雨。"
  },
  {
    "word": "channel",
    "phonetic": "/ˈtʃænəl/",
    "pos": "n",
    "meaning": "频道; 通道; 水渠",
    "example": "The water coming out of the waterwheel created a standing wave in the channel.",
    "exampleTranslation": "水轮出来的水在渠道中形成了一个驻波。"
  },
  {
    "word": "chant",
    "phonetic": "/tʃænt/",
    "pos": "v",
    "meaning": "吟诵",
    "example": "The football fans chanted insults at the referee.",
    "exampleTranslation": "足球迷向裁判高喊侮辱性语言。"
  },
  {
    "word": "chaos",
    "phonetic": "/ˈkeɪ.ɒs/",
    "pos": "n",
    "meaning": "混乱",
    "example": "After the earthquake, the local hospital was in chaos",
    "exampleTranslation": "地震后，当地医院一片混乱"
  },
  {
    "word": "chapter",
    "phonetic": "/ˈt͡ʃæptə/",
    "pos": "n",
    "meaning": "章",
    "example": "Detective novel writers try to keep up the suspense until the last chapter.",
    "exampleTranslation": "侦探小说作家试图保持悬念直到最后一章。"
  },
  {
    "word": "character",
    "phonetic": "/ˈkæɹəktə/",
    "pos": "n",
    "meaning": "（汉）字, 性质; 品格",
    "example": "A single locus governing the petal colour character was detected on the linkage group A2.",
    "exampleTranslation": "在连锁群A2上检测到一个控制花瓣颜色性状的单一位点。"
  },
  {
    "word": "characteristic",
    "phonetic": "/ˌkæɹəktəˈɹɪstɪk/",
    "pos": "adj",
    "meaning": "特有的, 表示特性的, 典型的",
    "example": "The characteristic of a field, if non-zero, must be a prime number.",
    "exampleTranslation": "域的特征如果非零，必须是素数。"
  },
  {
    "word": "charge",
    "phonetic": "/t͡ʃɑːd͡ʒ/",
    "pos": "v",
    "meaning": "要求收费; 索价; 将(电池)充电 n. 费用; 价钱",
    "example": "There will be a charge of five dollars.",
    "exampleTranslation": "将收取五美元的费用。"
  },
  {
    "word": "chart",
    "phonetic": "/tʃɑːt/",
    "pos": "n",
    "meaning": "图表; 航海图",
    "example": "Let's chart how we're going to get from here to there.",
    "exampleTranslation": "让我们规划一下如何从这里到那里。"
  },
  {
    "word": "chat",
    "phonetic": "/tʃæt/",
    "pos": "n",
    "meaning": "& v. 聊天, 闲谈",
    "example": "The Chat just made a joke about my skills.",
    "exampleTranslation": "聊天刚开了一个关于我技能的玩笑。"
  },
  {
    "word": "cheap",
    "phonetic": "/t͡ʃiːp/",
    "pos": "adj",
    "meaning": "便宜的",
    "example": "the cheap trick of hiding deadly lava under pushable blocks",
    "exampleTranslation": "在可推动的方块下隐藏致命熔岩的廉价把戏"
  },
  {
    "word": "cheat",
    "phonetic": "/tʃiːt/",
    "pos": "n",
    "meaning": "骗子；不诚实的人 v. 骗取, 哄骗; 作弊",
    "example": "My brother flunked biology because he cheated on his mid-term.",
    "exampleTranslation": "我兄弟生物不及格，因为他在期中考试作弊。"
  },
  {
    "word": "check",
    "phonetic": "/t͡ʃɛk/",
    "pos": "n",
    "meaning": "支票 v. 校对, 核对; 检查; 批改",
    "example": "I don't know if she will be there, but it's worth a check.",
    "exampleTranslation": "我不知道她会不会在那里，但值得检查一下。"
  },
  {
    "word": "cheek",
    "phonetic": "/tʃiːk/",
    "pos": "n",
    "meaning": "面颊, 脸蛋",
    "example": "You’ve got some cheek, asking me for money!",
    "exampleTranslation": "你脸皮真厚，竟然向我要钱！"
  },
  {
    "word": "cheer",
    "phonetic": "/t͡ʃɪə(ɹ)/",
    "pos": "n",
    "meaning": "& v. 欢呼; 喝彩",
    "example": "a table loaded with good cheer",
    "exampleTranslation": "一张摆满美食的桌子"
  },
  {
    "word": "cheerful",
    "phonetic": "/ˈt͡ʃɪəfəl/",
    "pos": "adj",
    "meaning": "兴高采烈的, 快活的",
    "example": "They enjoyed a cheerful room.",
    "exampleTranslation": "他们享受一个愉快的房间。"
  },
  {
    "word": "cheers",
    "phonetic": "/tʃɪəz/",
    "pos": "int",
    "meaning": "干杯；(英口语)谢谢, 再见",
    "example": "a table loaded with good cheer",
    "exampleTranslation": "一张摆满美食的桌子"
  },
  {
    "word": "chef",
    "phonetic": "/ʃɛf/",
    "pos": "n",
    "meaning": "厨师",
    "example": "Kiss the chef. (slogan on aprons used by home barbecue enthusiasts)",
    "exampleTranslation": "亲吻厨师。（家庭烧烤爱好者围裙上的口号）"
  },
  {
    "word": "chemical",
    "phonetic": "/ˈkɛmɪkəl/",
    "pos": "adj",
    "meaning": "化学的 n. 化学品",
    "example": "He seems chemical.",
    "exampleTranslation": "他看起来像化学的。"
  },
  {
    "word": "chemist",
    "phonetic": "/ˈkɛmɪst/",
    "pos": "n",
    "meaning": "药剂师; 化学家",
    "example": "The chemist is important.",
    "exampleTranslation": "这位化学家很重要。"
  },
  {
    "word": "chemistry",
    "phonetic": "/ˈkɛm.ɪ.stɹi/",
    "pos": "n",
    "meaning": "化学",
    "example": "I need the chemistry.",
    "exampleTranslation": "我需要化学。"
  },
  {
    "word": "cheque",
    "phonetic": "/tʃek/",
    "pos": "",
    "meaning": "(check) n. 支票",
    "example": "Can I pay by cheque?",
    "exampleTranslation": "我可以用支票支付吗？"
  },
  {
    "word": "chess",
    "phonetic": "/t͡ʃɛs/",
    "pos": "n",
    "meaning": "棋",
    "example": "I need the chess.",
    "exampleTranslation": "我需要国际象棋。"
  },
  {
    "word": "chest",
    "phonetic": "/t͡ʃɛst/",
    "pos": "n",
    "meaning": "胸部；箱子",
    "example": "The clothes are kept in a chest.",
    "exampleTranslation": "衣服放在箱子里。"
  },
  {
    "word": "chew",
    "phonetic": "/tʃuː/",
    "pos": "v",
    "meaning": "咀嚼",
    "example": "I popped the gum into my mouth and gave it a chew.",
    "exampleTranslation": "我把口香糖放进嘴里嚼了嚼。"
  },
  {
    "word": "chicken",
    "phonetic": "/ˈt͡ʃɪkɪn/",
    "pos": "n",
    "meaning": "鸡; 鸡肉",
    "example": "Why do you refuse to fight? Huh, I guess you're just too chicken.",
    "exampleTranslation": "你为什么拒绝打架？嗯，我想你只是太胆小了。"
  },
  {
    "word": "chief",
    "phonetic": "/tʃiːf/",
    "pos": "adj",
    "meaning": "主要的; 首要的 n. 领导, 头",
    "example": "All firefighters report to the fire chief.",
    "exampleTranslation": "所有消防员向消防队长报告。"
  },
  {
    "word": "child",
    "phonetic": "/tʃaɪld/",
    "pos": "",
    "meaning": "(pl. children) n. 孩子, 儿童",
    "example": "The child is playing in the park.",
    "exampleTranslation": "孩子正在公园里玩耍。"
  },
  {
    "word": "childhood",
    "phonetic": "/ˈtʃaɪldhʊd/",
    "pos": "n",
    "meaning": "幼年时代, 童年",
    "example": "I need the childhood.",
    "exampleTranslation": "我需要童年。"
  },
  {
    "word": "chocolate",
    "phonetic": "/ˈt͡ʃɔk(ə)lət/",
    "pos": "n",
    "meaning": "巧克力",
    "example": "Chocolate is a very popular treat.",
    "exampleTranslation": "巧克力是一种非常受欢迎的零食。"
  },
  {
    "word": "choice",
    "phonetic": "/tʃɔɪs/",
    "pos": "n",
    "meaning": "选择; 抉择",
    "example": "Do I have a choice of what color to paint it?",
    "exampleTranslation": "我可以选择把它漆成什么颜色吗？"
  },
  {
    "word": "choke",
    "phonetic": "/t͡ʃəʊk/",
    "pos": "n",
    "meaning": "& v. 窒息",
    "example": "Ever since he choked on a bone, he has refused to eat fish.",
    "exampleTranslation": "自从他被骨头卡住后，他就拒绝吃鱼。"
  },
  {
    "word": "choose",
    "phonetic": "/tʃuːz/",
    "pos": "",
    "meaning": "(chose, chosen) v.  选择",
    "example": "Please choose a color.",
    "exampleTranslation": "请选择一种颜色。"
  },
  {
    "word": "chopsticks",
    "phonetic": "/ˈtʃɑːpstɪks/",
    "pos": "n",
    "meaning": "筷子",
    "example": "The chopsticks is important.",
    "exampleTranslation": "筷子很重要。"
  },
  {
    "word": "chorus",
    "phonetic": "/ˈkɔːɹəs/",
    "pos": "n",
    "meaning": "合唱, 合唱队, 齐声",
    "example": "The performance of the chorus was awe-inspiring and exhilarating.",
    "exampleTranslation": "合唱团的表演令人敬畏和振奋。"
  },
  {
    "word": "christian",
    "phonetic": "/ˈkrɪstʃən/",
    "pos": "n",
    "meaning": "基督教徒和天主教徒的总称",
    "example": "This is a christian.",
    "exampleTranslation": "这是一个基督徒。"
  },
  {
    "word": "christmas",
    "phonetic": "/ˈkrɪsməs/",
    "pos": "n",
    "meaning": "圣诞节（12月25日）",
    "example": "I need the christmas.",
    "exampleTranslation": "我需要圣诞节。"
  },
  {
    "word": "church",
    "phonetic": "/t͡ʃɜːt͡ʃ/",
    "pos": "n",
    "meaning": "教堂; 教会",
    "example": "There is a lovely little church in the valley.",
    "exampleTranslation": "山谷里有一座可爱的小教堂。"
  },
  {
    "word": "cigar",
    "phonetic": "/sɪˈɡɑː(ɹ)/",
    "pos": "n",
    "meaning": "雪茄烟",
    "example": "The cigar is important.",
    "exampleTranslation": "这支雪茄很重要。"
  },
  {
    "word": "cigarette",
    "phonetic": "/sɪ.ɡəˈɹɛt/",
    "pos": "n",
    "meaning": "纸烟, 香烟",
    "example": "Could someone cigarette me?",
    "exampleTranslation": "有人能给我一支烟吗？"
  },
  {
    "word": "cinema",
    "phonetic": "/ˈsɪn.ɪ.mɑː/",
    "pos": "n",
    "meaning": "电影院; 电影艺术",
    "example": "The cinema is right across the street from the restaurant.",
    "exampleTranslation": "电影院就在餐厅街对面。"
  },
  {
    "word": "circle",
    "phonetic": "/ˈsɜɹkəl/",
    "pos": "n",
    "meaning": "& v.  圆圈，将…圈起来",
    "example": "The set of all points (x, y) such that (x − 1)2 + y2 = r2 is a circle of radius r around the point (1, 0).",
    "exampleTranslation": "圆圈"
  },
  {
    "word": "circuit",
    "phonetic": "/ˈsəɾ.kɪʈ/",
    "pos": "n",
    "meaning": "电路, 一圈, 周游, 巡回",
    "example": "Having circuited the air.",
    "exampleTranslation": "在空中盘旋。"
  },
  {
    "word": "circulate",
    "phonetic": "/ˈsɚˌkju.leɪt/",
    "pos": "v",
    "meaning": "(使)流通, (使)循环",
    "example": "to circulate money or gossip",
    "exampleTranslation": "传播金钱或流言"
  },
  {
    "word": "circumstance",
    "phonetic": "/-æns/",
    "pos": "n",
    "meaning": "环境, 境况",
    "example": "This is a circumstance.",
    "exampleTranslation": "这是一个情况。"
  },
  {
    "word": "circus",
    "phonetic": "/ˈsɜːkəs/",
    "pos": "n",
    "meaning": "马戏团",
    "example": "The circus will be in town next week.",
    "exampleTranslation": "马戏团下周将来镇上。"
  },
  {
    "word": "citizen",
    "phonetic": "/ˈsɪtɪzən/",
    "pos": "n",
    "meaning": "公民; 居民",
    "example": "Diogenes reckoned himself a citizen of the world.",
    "exampleTranslation": "第欧根尼认为自己是世界公民。"
  },
  {
    "word": "city",
    "phonetic": "/sɪtɪ/",
    "pos": "n",
    "meaning": "市, 城市, 都市",
    "example": "São Paulo is the largest city in South America.",
    "exampleTranslation": "圣保罗是南美洲最大的城市。"
  },
  {
    "word": "civil",
    "phonetic": "/ˈsɪv.əl/",
    "pos": "adj",
    "meaning": "国内的; 平民的; 民用的",
    "example": "She went into civil service because she wanted to help the people.",
    "exampleTranslation": "她进入公务员队伍是因为她想帮助人民。"
  },
  {
    "word": "civilian",
    "phonetic": "/sɪˈvɪljən/",
    "pos": "n",
    "meaning": "平民, 公务员, 文官",
    "example": "Three civilians were apprehended by the soldiers and taken away in a military vehicle.",
    "exampleTranslation": "三名平民被士兵逮捕并用军车带走。"
  },
  {
    "word": "civilization/sation",
    "phonetic": "/sation",
    "pos": "",
    "meaning": "",
    "example": "China is an ancient civilization.",
    "exampleTranslation": "中国是一个古老的文明。"
  },
  {
    "word": "clap",
    "phonetic": "/klæp/",
    "pos": "v",
    "meaning": "拍手; 鼓掌",
    "example": "He summoned the waiter with a clap.",
    "exampleTranslation": "他拍手召唤服务员。"
  },
  {
    "word": "clarify",
    "phonetic": "/ˈklæɹɪfaɪ/",
    "pos": "v",
    "meaning": "澄清, 阐明",
    "example": "Leave the wine for 24 hours and it will clarify.",
    "exampleTranslation": "把酒放置24小时，它会变清。"
  },
  {
    "word": "class",
    "phonetic": "/klas/",
    "pos": "n",
    "meaning": "（学校里的）班; 年级; 课",
    "example": "Often used to imply membership of a large class.",
    "exampleTranslation": "常用来暗示属于一个大阶层。"
  },
  {
    "word": "classic",
    "phonetic": "/ˈklæ.sɪk/",
    "pos": "adj",
    "meaning": "第一流的",
    "example": "Users who dislike the new visual layout can return to classic mode.",
    "exampleTranslation": "不喜欢新视觉布局的用户可以返回经典模式。"
  },
  {
    "word": "classmate",
    "phonetic": "/ˈklɑːs.meɪt/",
    "pos": "n",
    "meaning": "同班同学",
    "example": "Danny and I have been classmates for five years, but I've never spoken to him outside of lessons.",
    "exampleTranslation": "丹尼和我做了五年同学，但我在课外从未和他说过话。"
  },
  {
    "word": "classroom",
    "phonetic": "/ˈklɑːsɹʊm/",
    "pos": "n",
    "meaning": "教室",
    "example": "This is a classroom.",
    "exampleTranslation": "这是一间教室。"
  },
  {
    "word": "claw",
    "phonetic": "/klɔː/",
    "pos": "n",
    "meaning": "爪, 脚爪",
    "example": "I need the claw.",
    "exampleTranslation": "我需要这个爪子。"
  },
  {
    "word": "clay",
    "phonetic": "/kleɪ/",
    "pos": "n",
    "meaning": "粘土, 泥土",
    "example": "The French Open is played on clay.",
    "exampleTranslation": "法国网球公开赛在红土场地上进行。"
  },
  {
    "word": "clean",
    "phonetic": "/kleːn/",
    "pos": "v",
    "meaning": "弄干净, 擦干净 adj. 清洁的, 干净的",
    "example": "This place needs a clean.",
    "exampleTranslation": "这个地方需要清洁。"
  },
  {
    "word": "cleaner",
    "phonetic": "/ˈkliː.nə/",
    "pos": "n",
    "meaning": "清洁工; 清洁器;  清洁剂",
    "example": "I'll have to take this shirt to the cleaners.",
    "exampleTranslation": "我得把这件衬衫送到干洗店。"
  },
  {
    "word": "clear",
    "phonetic": "/klɪr/",
    "pos": "adj",
    "meaning": "清晰的; 明亮的; 清楚的 v.扫除, 清除, 晴",
    "example": "That is clear.",
    "exampleTranslation": "那是清楚的。"
  },
  {
    "word": "clerk",
    "phonetic": "/klɐːk/",
    "pos": "n",
    "meaning": "书记员; 办事员; 职员",
    "example": "The law school graduate clerked for the supreme court judge for the summer.",
    "exampleTranslation": "法学院毕业生夏天为最高法院法官做书记员。"
  },
  {
    "word": "clever",
    "phonetic": "/ˈklɛvɚ/",
    "pos": "adj",
    "meaning": "聪明的, 伶俐的",
    "example": "clever like a fox",
    "exampleTranslation": "像狐狸一样聪明"
  },
  {
    "word": "click",
    "phonetic": "/klɪk/",
    "pos": "v",
    "meaning": "点击（计算机用语）",
    "example": "I turned the key, the lock gave a click and the door opened;  a click of one’s fingers",
    "exampleTranslation": "点击（计算机用语）。"
  },
  {
    "word": "climate",
    "phonetic": "/ˈklaɪmɪt/",
    "pos": "n",
    "meaning": "气候",
    "example": "Industries that require a lot of fossil fuels are unlikely to be popular in the current political climate.",
    "exampleTranslation": "需要大量化石燃料的行业在当前政治气候下不太可能受欢迎。"
  },
  {
    "word": "climb",
    "phonetic": "/klaɪm/",
    "pos": "v",
    "meaning": "爬, 攀登",
    "example": "Prices climbed steeply.",
    "exampleTranslation": "价格急剧上涨。"
  },
  {
    "word": "clinic",
    "phonetic": "/ˈklɪnɪk/",
    "pos": "n",
    "meaning": "诊所",
    "example": "This is a clinic.",
    "exampleTranslation": "这是一家诊所。"
  },
  {
    "word": "clock",
    "phonetic": "/klɒk/",
    "pos": "n",
    "meaning": "钟",
    "example": "This car has over 300,000 miles on the clock.",
    "exampleTranslation": "这辆车已经行驶了超过30万英里。"
  },
  {
    "word": "clone",
    "phonetic": "/kloʊn/",
    "pos": "",
    "meaning": "vi & n.克隆",
    "example": "They can clone animals.",
    "exampleTranslation": "他们可以克隆动物。"
  },
  {
    "word": "close",
    "phonetic": "/kləʊz/",
    "pos": "adj",
    "meaning": "亲密的; 近, 靠近 adv. 近, 靠近 v.  关,关闭",
    "example": "We owe them our thanks for bringing the project to a successful close.",
    "exampleTranslation": "我们要感谢他们使项目成功结束。"
  },
  {
    "word": "cloth",
    "phonetic": "/klɑθ/",
    "pos": "n",
    "meaning": "布；擦布",
    "example": "He is a respected man of the cloth.",
    "exampleTranslation": "他是一位受人尊敬的牧师。"
  },
  {
    "word": "clothes",
    "phonetic": "/kləʊ(ð)z/",
    "pos": "n",
    "meaning": "衣服; 各种衣物",
    "example": "He is a respected man of the cloth.",
    "exampleTranslation": "他是一位受人尊敬的牧师。"
  },
  {
    "word": "clothing",
    "phonetic": "/ˈkləʊðɪŋ/",
    "pos": "n",
    "meaning": "(总称) 衣服",
    "example": "to feed and clothe a family; to clothe oneself extravagantly",
    "exampleTranslation": "养家糊口；穿着奢华"
  },
  {
    "word": "cloud",
    "phonetic": "/klaʊd/",
    "pos": "n",
    "meaning": "云; 云状物; 阴影",
    "example": "He opened the door and was greeted by a cloud of bats.",
    "exampleTranslation": "他打开门，被一群蝙蝠迎接。"
  },
  {
    "word": "cloudy",
    "phonetic": "/ˈklaʊːdɪ/",
    "pos": "adj",
    "meaning": "多云的, 阴天的",
    "example": "a cloudy infrastructure",
    "exampleTranslation": "一个云计算基础设施"
  },
  {
    "word": "club",
    "phonetic": "/klʌb/",
    "pos": "n",
    "meaning": "俱乐部;",
    "example": "She was sitting in a jazz club, sipping wine and listening to a bass player's solo.",
    "exampleTranslation": "她坐在爵士俱乐部，啜饮着酒，听着贝斯手的独奏。"
  },
  {
    "word": "clumsy",
    "phonetic": "/ˈklʌmzi/",
    "pos": "adj",
    "meaning": "笨拙的",
    "example": "He's very clumsy. I wouldn't trust him with carrying the dishes.",
    "exampleTranslation": "他很笨拙。我不会让他端盘子。"
  },
  {
    "word": "coach",
    "phonetic": "/kəʊtʃ/",
    "pos": "n",
    "meaning": "教练; 马车",
    "example": "John flew coach to Vienna, but first-class back home.",
    "exampleTranslation": "约翰坐经济舱去维也纳，但坐头等舱回家。"
  },
  {
    "word": "coal",
    "phonetic": "/kɔʊl/",
    "pos": "n",
    "meaning": "煤; 煤块",
    "example": "Put some coal on the fire.",
    "exampleTranslation": "往火上加点煤。"
  },
  {
    "word": "coast",
    "phonetic": "/kəʊst/",
    "pos": "n",
    "meaning": "海岸; 海滨",
    "example": "The rocky coast of Maine has few beaches.",
    "exampleTranslation": "缅因州岩石海岸几乎没有海滩。"
  },
  {
    "word": "coat",
    "phonetic": "/kəʊt/",
    "pos": "n",
    "meaning": "外套;",
    "example": "When the dog shed its coat, it left hair all over the furniture and the carpet.",
    "exampleTranslation": "当狗换毛时，家具和地毯上到处都是毛。"
  },
  {
    "word": "cocoa",
    "phonetic": "/ˈkəʊ.kəʊ/",
    "pos": "n",
    "meaning": "可可粉",
    "example": "Do you like cocoa?",
    "exampleTranslation": "你喜欢可可吗？"
  },
  {
    "word": "coffee",
    "phonetic": "/ˈkɑ.fi/",
    "pos": "n",
    "meaning": "咖啡",
    "example": "He did not stay for coffee.",
    "exampleTranslation": "他没有留下来喝咖啡。"
  },
  {
    "word": "coin",
    "phonetic": "/kɔɪn/",
    "pos": "n",
    "meaning": "硬币",
    "example": "She spent some serious coin on that car!",
    "exampleTranslation": "她在那辆车上花了不少钱！"
  },
  {
    "word": "coincidence",
    "phonetic": "/kəʊˈɪnsɪdəns/",
    "pos": "n",
    "meaning": "一致, 巧合",
    "example": "I need the coincidence.",
    "exampleTranslation": "我需要这个巧合。"
  },
  {
    "word": "coke",
    "phonetic": "/kəʊk/",
    "pos": "n",
    "meaning": "可口可乐",
    "example": "The plant should produce approximately 550,000 tons of screened blast furnace coke per year.",
    "exampleTranslation": "该工厂每年应生产约55万吨筛选高炉焦。"
  },
  {
    "word": "cold",
    "phonetic": "/kɔʊld/",
    "pos": "adj",
    "meaning": "冷的, 寒的 n. 寒冷; 感冒",
    "example": "A cold wind whistled through the trees.",
    "exampleTranslation": "一阵冷风吹过树林。"
  },
  {
    "word": "collar",
    "phonetic": "/ˈkɒl.ə/",
    "pos": "n",
    "meaning": "衣领; 硬领",
    "example": "a collar of brawn",
    "exampleTranslation": "肉冻项圈"
  },
  {
    "word": "colleague",
    "phonetic": "/ˈkɒliːɡ/",
    "pos": "n",
    "meaning": "同事",
    "example": "She is my colleague at work.",
    "exampleTranslation": "她是我工作上的同事。"
  },
  {
    "word": "collect",
    "phonetic": "/kəˈlɛkt/",
    "pos": "v",
    "meaning": "收集, 搜集",
    "example": "Suzanne collected all the papers she had laid out.",
    "exampleTranslation": "苏珊娜收集了她铺开的所有文件。"
  },
  {
    "word": "collection",
    "phonetic": "/kəˈlɛkʃən/",
    "pos": "n",
    "meaning": "收藏品, 收集物",
    "example": "The asteroid belt consists of a collection of dust, rubble, and minor planets.",
    "exampleTranslation": "小行星带由尘埃、碎石和小行星组成。"
  },
  {
    "word": "college",
    "phonetic": "/ˈkɒlɪd͡ʒ/",
    "pos": "n",
    "meaning": "学院; 专科学校",
    "example": "College of Cardinals, College of Surgeons",
    "exampleTranslation": "枢机主教团，外科医师学院"
  },
  {
    "word": "collision",
    "phonetic": "/kəˈlɪʒən/",
    "pos": "n",
    "meaning": "碰撞, 冲突",
    "example": "I need the collision.",
    "exampleTranslation": "我需要这次碰撞。"
  },
  {
    "word": "colour",
    "phonetic": "/ˈkʌlər/",
    "pos": "",
    "meaning": "(color) n. 颜色 v.  给…着色, 涂色",
    "example": "Red is my favourite colour.",
    "exampleTranslation": "红色是我最喜欢的颜色。"
  },
  {
    "word": "comb",
    "phonetic": "/kəʊm/",
    "pos": "n",
    "meaning": "梳子 v. 梳",
    "example": "I need to comb my hair before we leave the house",
    "exampleTranslation": "我们离开房子前我需要梳头"
  },
  {
    "word": "combine",
    "phonetic": "/kəmˈbaɪn/",
    "pos": "v",
    "meaning": "使联合; 使结合",
    "example": "We can't finish harvesting because our combine is stuck in the mud.",
    "exampleTranslation": "我们无法完成收割，因为我们的联合收割机陷在泥里了。"
  },
  {
    "word": "come",
    "phonetic": "/kʌm/",
    "pos": "",
    "meaning": "(came, come) v. 来, 来到",
    "example": "Please come here.",
    "exampleTranslation": "请来这里。"
  },
  {
    "word": "comedy",
    "phonetic": "/ˈkɒmədi/",
    "pos": "n",
    "meaning": "喜剧",
    "example": "Why would you be watching comedy when there are kids starving right now?",
    "exampleTranslation": "现在有孩子在挨饿，你为什么要看喜剧？"
  },
  {
    "word": "comfort",
    "phonetic": "/ˈkʊm.fət/",
    "pos": "n",
    "meaning": "安慰; 慰问",
    "example": "Sleep in comfort with our new mattress.",
    "exampleTranslation": "用我们的新床垫舒适地睡眠。"
  },
  {
    "word": "comfortable",
    "phonetic": "/ˈkʌm.fə.tə.bəl/",
    "pos": "adj",
    "meaning": "舒服的; 安逸的; 舒服自在的",
    "example": "This is the most comfortable bed I've ever slept in.",
    "exampleTranslation": "这是我睡过的最舒适的床。"
  },
  {
    "word": "command",
    "phonetic": "/kəˈmɑːnd/",
    "pos": "n",
    "meaning": "命令；掌握 v. 命令, 指挥",
    "example": "I was given a command to cease shooting.",
    "exampleTranslation": "我接到停止射击的命令。"
  },
  {
    "word": "comment",
    "phonetic": "/ˈkɑːment/",
    "pos": "n",
    "meaning": "评论",
    "example": "The comment is important.",
    "exampleTranslation": "这个评论很重要。"
  },
  {
    "word": "commercial",
    "phonetic": "/kəˈmɜːʃəl/",
    "pos": "adj",
    "meaning": "商业的, 贸易的",
    "example": "This is commercial.",
    "exampleTranslation": "这是商业性的。"
  },
  {
    "word": "commit",
    "phonetic": "/kəˈmɪt/",
    "pos": "v",
    "meaning": "犯(错误), 干(坏事), 把...交托给, 提交, 答应",
    "example": "Tony should be committed to a nuthouse!",
    "exampleTranslation": "托尼应该被送进精神病院！"
  },
  {
    "word": "commitment",
    "phonetic": "/kəˈmɪtmənt/",
    "pos": "n",
    "meaning": "委托事项, 许诺, 承担义务",
    "example": "This is a commitment.",
    "exampleTranslation": "这是一个承诺。"
  },
  {
    "word": "committee",
    "phonetic": "/kəˈmɪti/",
    "pos": "n",
    "meaning": "委员会",
    "example": "The committee is important.",
    "exampleTranslation": "这个委员会很重要。"
  },
  {
    "word": "common",
    "phonetic": "/ˈkɒmən/",
    "pos": "adj",
    "meaning": "普通的, 一般的; 共有的",
    "example": "The two competitors have the common aim of winning the championship.",
    "exampleTranslation": "两位竞争者有赢得冠军的共同目标。"
  },
  {
    "word": "communicate",
    "phonetic": "/kəˈmjuːnɪkeɪt/",
    "pos": "v",
    "meaning": "交际; 传达（感情,  信息等）",
    "example": "I communicate it.",
    "exampleTranslation": "我传达它。"
  },
  {
    "word": "communication",
    "phonetic": "/kəˌmjuːnɪˈkeɪʃən/",
    "pos": "n",
    "meaning": "交际;  交往;  通讯",
    "example": "communication of a secret",
    "exampleTranslation": "秘密的传递"
  },
  {
    "word": "communism",
    "phonetic": "/ˈkɒm.juˌnɪzm̩/",
    "pos": "n",
    "meaning": "共产主义",
    "example": "The communism is important.",
    "exampleTranslation": "共产主义很重要。"
  },
  {
    "word": "communist",
    "phonetic": "/ˈkɒ.mjʊ.nɪst/",
    "pos": "n",
    "meaning": "共产主义者 adj. 共产党的; 共产主义的",
    "example": "This is a communist.",
    "exampleTranslation": "这是一个共产主义者。"
  },
  {
    "word": "companion",
    "phonetic": "/kəmˈpænjən/",
    "pos": "n",
    "meaning": "同伴; 同事",
    "example": "His dog has been his trusted companion for the last five years.",
    "exampleTranslation": "他的狗在过去的五年里一直是他值得信赖的伙伴。"
  },
  {
    "word": "company",
    "phonetic": "/ˈkʌmp(ə)ni/",
    "pos": "n",
    "meaning": "公司",
    "example": "Keep the house clean; I have company coming.",
    "exampleTranslation": "保持房子干净；有客人要来。"
  },
  {
    "word": "compare",
    "phonetic": "/kəmˈpɛə/",
    "pos": "v",
    "meaning": "比较, 对照",
    "example": "Compare the tiger's coloration with that of the zebra.",
    "exampleTranslation": "比较老虎和斑马的着色。"
  },
  {
    "word": "compass",
    "phonetic": "/ˈkʌm.pəs/",
    "pos": "n",
    "meaning": "罗盘, 指南针,圆规",
    "example": "within the compass of an encircling wall",
    "exampleTranslation": "在围墙的范围内"
  },
  {
    "word": "compensate",
    "phonetic": "/ˈkɒm.pən.seɪt/",
    "pos": "v",
    "meaning": "偿还, 补偿, 付报酬",
    "example": "It is hard work, but they will compensate you well for it.",
    "exampleTranslation": "这是辛苦的工作，但他们会给你很好的报酬。"
  },
  {
    "word": "compete",
    "phonetic": "/kəm.ˈpiːt/",
    "pos": "v",
    "meaning": "比赛,  竞赛",
    "example": "We must compete.",
    "exampleTranslation": "我们必须竞争。"
  },
  {
    "word": "competence",
    "phonetic": "/ˈkɒmpətəns/",
    "pos": "n",
    "meaning": "能力",
    "example": "That question is out with the competence of this court and must be taken to a higher court.",
    "exampleTranslation": "那个问题超出了本法院的权限，必须提交上级法院。"
  },
  {
    "word": "competition",
    "phonetic": "/ˌkɒmpəˈtɪʃən/",
    "pos": "n",
    "meaning": "比赛, 竞赛",
    "example": "The competition for this job is strong.",
    "exampleTranslation": "这份工作的竞争很激烈。"
  },
  {
    "word": "complete",
    "phonetic": "/kəmˈpliːt/",
    "pos": "adj",
    "meaning": "全部的, 完全的；完成的 v. 完成, 结束",
    "example": "He completed the assignment on time.",
    "exampleTranslation": "他按时完成了作业。"
  },
  {
    "word": "complex",
    "phonetic": "/kəmˈpleks/",
    "pos": "adj",
    "meaning": "复杂的, 合成的, 综合的 n. 联合体",
    "example": "Jim has a real complex about working for a woman boss.",
    "exampleTranslation": "吉姆真的对为女老板工作有心理障碍。"
  },
  {
    "word": "component",
    "phonetic": "/kʌmˈpoʊnənt/",
    "pos": "n",
    "meaning": "成分",
    "example": "A CPU is a component of a computer.",
    "exampleTranslation": "CPU是计算机的一个组件。"
  },
  {
    "word": "composition",
    "phonetic": "/ˌkɒmpəˈzɪʃən/",
    "pos": "n",
    "meaning": "作文; 作曲",
    "example": "This is a composition.",
    "exampleTranslation": "这是一篇作文。"
  },
  {
    "word": "comprehension",
    "phonetic": "/kɒmpɹɪˈhɛnʃn̩/",
    "pos": "n",
    "meaning": "理解, 包含",
    "example": "The comprehension is important.",
    "exampleTranslation": "理解很重要。"
  },
  {
    "word": "compromise",
    "phonetic": "/ˈkɒmpɹəˌmaɪz/",
    "pos": "v",
    "meaning": "妥协, 折衷",
    "example": "a compromise of character or right",
    "exampleTranslation": "品格或权利的妥协"
  },
  {
    "word": "compulsory",
    "phonetic": "/kəmˈpʌlsəri/",
    "pos": "adj",
    "meaning": "必需做的, 必修的, 被强制的, 义务的",
    "example": "The ten-dollar fee was compulsory.",
    "exampleTranslation": "十美元的费用是强制性的。"
  },
  {
    "word": "computer",
    "phonetic": "/kəmˈpjuːtə/",
    "pos": "n",
    "meaning": "计算机",
    "example": "This is a computer.",
    "exampleTranslation": "这是一台电脑。"
  },
  {
    "word": "concentrate",
    "phonetic": "/ˈkɒn.sən.tɹeɪt/",
    "pos": "v",
    "meaning": "集中, 浓缩",
    "example": "to concentrate rays of light into a focus",
    "exampleTranslation": "将光线集中到一个焦点"
  },
  {
    "word": "concept",
    "phonetic": "/ˈkɒn.sɛpt/",
    "pos": "n",
    "meaning": "观念, 概念",
    "example": "I need the concept.",
    "exampleTranslation": "我需要这个概念。"
  },
  {
    "word": "concern",
    "phonetic": "/kənˈsɜːn/",
    "pos": "v",
    "meaning": "涉及, 关系到 n. 关心, 关注, 所关心的事",
    "example": "Judy's eyes filled with concern as she listened to the news report.",
    "exampleTranslation": "朱迪听着新闻报道，眼中充满了担忧。"
  },
  {
    "word": "concert",
    "phonetic": "/ˈkɒnsət/",
    "pos": "n",
    "meaning": "音乐会; 演奏会",
    "example": "I'm going to the rock concert on Friday.",
    "exampleTranslation": "我周五要去摇滚音乐会。"
  },
  {
    "word": "conclude",
    "phonetic": "/kən.ˈkluːd/",
    "pos": "v",
    "meaning": "结束, 终止, 决定, 作出结论",
    "example": "The story concluded with a moral.",
    "exampleTranslation": "故事以一个寓意结束。"
  },
  {
    "word": "conclusion",
    "phonetic": "/kənˈkluːʒən/",
    "pos": "n",
    "meaning": "结论; 结束",
    "example": "The board has come to the conclusion that the proposed takeover would not be in the interest of our shareholders.",
    "exampleTranslation": "董事会得出结论，拟议的收购不符合我们股东的利益。"
  },
  {
    "word": "concrete",
    "phonetic": "/kɵnˈkɹiːt/",
    "pos": "adj",
    "meaning": "具体的; 实在的; 有形的",
    "example": "The road was made of concrete that had been poured in large slabs.",
    "exampleTranslation": "这条路是由大块混凝土浇筑而成的。"
  },
  {
    "word": "condemn",
    "phonetic": "/kənˈdɛm/",
    "pos": "v",
    "meaning": "具体的, 有形的",
    "example": "The president condemned the terrorists.",
    "exampleTranslation": "总统谴责了恐怖分子。"
  },
  {
    "word": "condition",
    "phonetic": "/kənˈdɪʃən/",
    "pos": "n",
    "meaning": "条件, 状况",
    "example": "The car is in good condition.",
    "exampleTranslation": "这辆车状况良好。"
  },
  {
    "word": "conduct",
    "phonetic": "/ˈkɒndʌkt/",
    "pos": "v",
    "meaning": "引导, 带领",
    "example": "Good conduct will be rewarded and likewise poor conduct will be punished.",
    "exampleTranslation": "良好的行为将得到奖励，不良行为将受到惩罚。"
  },
  {
    "word": "conductor",
    "phonetic": "/kənˈdʌktɚ/",
    "pos": "n",
    "meaning": "领导者; 指挥; 售票员",
    "example": "train conductor; tram conductor",
    "exampleTranslation": "火车售票员；电车售票员"
  },
  {
    "word": "conference",
    "phonetic": "/ˈkɒn.fə.ɹəns/",
    "pos": "n",
    "meaning": "会议; 讨论会",
    "example": "This is a conference.",
    "exampleTranslation": "这是一次会议。"
  },
  {
    "word": "confident",
    "phonetic": "/ˈkɒn.fɪ.dənt/",
    "pos": "adj",
    "meaning": "自信的, 确信的",
    "example": "I'm pretty confident that she's not lying, she's acting normally.",
    "exampleTranslation": "我很确定她没有撒谎，她表现正常。"
  },
  {
    "word": "confidential",
    "phonetic": "/ˌkɑːnfɪˈdɛnʃl/",
    "pos": "adj",
    "meaning": "秘密的, 机密的",
    "example": "The newspaper claims a leaked confidential report by the government admits to problems with corrupt MPs.",
    "exampleTranslation": "报纸声称一份泄露的政府机密报告承认存在腐败议员问题。"
  },
  {
    "word": "confirm",
    "phonetic": "/kənˈfɜːm/",
    "pos": "v",
    "meaning": "确定, 批准, 使巩固, 使有效",
    "example": "We must confirm.",
    "exampleTranslation": "我们必须确认。"
  },
  {
    "word": "conflict",
    "phonetic": "/kənˈflɪkt/",
    "pos": "n",
    "meaning": "斗争, 冲突",
    "example": "The conflict between the government and the rebels began three years ago.",
    "exampleTranslation": "政府与叛军之间的冲突始于三年前。"
  },
  {
    "word": "confuse",
    "phonetic": "/kənˈfjuːz/",
    "pos": "v",
    "meaning": "搞乱, 使糊涂",
    "example": "I confuse it.",
    "exampleTranslation": "我把它搞混了。"
  },
  {
    "word": "congratulate",
    "phonetic": "/-t͡ʃə-/",
    "pos": "v",
    "meaning": "祝贺",
    "example": "Remind me to congratulate Dave and Lisa on their wedding.",
    "exampleTranslation": "提醒我祝贺戴夫和丽莎的婚礼。"
  },
  {
    "word": "congratulation",
    "phonetic": "/kənˌɡɹætjʊˈleɪʃ(ə)n/",
    "pos": "n",
    "meaning": "祝贺, 庆贺",
    "example": "I need the congratulation.",
    "exampleTranslation": "我需要祝贺。"
  },
  {
    "word": "connect",
    "phonetic": "/kəˈnɛkt/",
    "pos": "v",
    "meaning": "连接, 把…联系起来",
    "example": "I think this piece connects to that piece over there.",
    "exampleTranslation": "我认为这块连接到那边那块。"
  },
  {
    "word": "connection",
    "phonetic": "/kəˈnɛkʃən/",
    "pos": "n",
    "meaning": "连接, 关系",
    "example": "My headache has no connection with me going out last night.",
    "exampleTranslation": "我的头痛和我昨晚出去没有关系。"
  },
  {
    "word": "conscience",
    "phonetic": "/kɒnʃəns/",
    "pos": "n",
    "meaning": "良心, 道德心",
    "example": "Your conscience is your highest authority.",
    "exampleTranslation": "你的良心是你最高的权威。"
  },
  {
    "word": "consensus",
    "phonetic": "/kənˈsensəs/",
    "pos": "n",
    "meaning": "一致同意, 多数人的意见, 舆论",
    "example": "After years of debate over the best wine to serve at Thanksgiving, no real consensus has emerged.",
    "exampleTranslation": "经过多年关于感恩节供应什么酒最好的辩论，没有达成真正的共识。"
  },
  {
    "word": "consequence",
    "phonetic": "/ˈkɒnsɪkwɛns/",
    "pos": "n",
    "meaning": "结果, 后果",
    "example": "I'm warning you. If you don't get me the report on time, there will be consequences.",
    "exampleTranslation": "我警告你。如果你不按时给我报告，会有后果的。"
  },
  {
    "word": "conservation",
    "phonetic": "/ˌkɑnsə(ɹ)ˈveɪʃən/",
    "pos": "n",
    "meaning": "保存; 保护",
    "example": "I need the conservation.",
    "exampleTranslation": "我需要保护。"
  },
  {
    "word": "conservative",
    "phonetic": "/kənˈsɜːvətɪv/",
    "pos": "adj",
    "meaning": "保守的; 保守主义的; 谨慎的；",
    "example": "The curriculum committee at this university is extremely conservative.",
    "exampleTranslation": "这所大学的课程委员会极其保守。"
  },
  {
    "word": "consider",
    "phonetic": "/kənˈsɪdə/",
    "pos": "v",
    "meaning": "考虑, 照顾, 认为",
    "example": "Consider that we’ve had three major events and the year has hardly begun.",
    "exampleTranslation": "想想看，我们已经历了三件大事，而这一年才刚刚开始。"
  },
  {
    "word": "considerate",
    "phonetic": "/kənˈsɪdəɹət/",
    "pos": "adj",
    "meaning": "体贴的",
    "example": "Consider that we’ve had three major events and the year has hardly begun.",
    "exampleTranslation": "想想看，我们已经历了三件大事，而这一年才刚刚开始。"
  },
  {
    "word": "consideration",
    "phonetic": "/kənˌsɪdəˈɹeɪʃən/",
    "pos": "n",
    "meaning": "考虑; 关心",
    "example": "After much consideration, I have decided to stay.",
    "exampleTranslation": "经过深思熟虑，我决定留下来。"
  },
  {
    "word": "consist",
    "phonetic": "/kənˈsɪst/",
    "pos": "v",
    "meaning": "由...组成, 在于, 一致",
    "example": "The greeting package consists of some brochures, a pen, and a notepad.",
    "exampleTranslation": "欢迎礼包包括一些小册子、一支笔和一个记事本。"
  },
  {
    "word": "consistent",
    "phonetic": "/kənˈsɪstənt/",
    "pos": "adj",
    "meaning": "一致的, 调和的",
    "example": "He is very consistent in his political choices: economy good or bad, he always votes Labour!",
    "exampleTranslation": "他在政治选择上非常一致：经济好坏，他总是投工党！"
  },
  {
    "word": "constant",
    "phonetic": "/ˈkɒnstənt/",
    "pos": "adj",
    "meaning": "经常的, 不断的",
    "example": "constant time   constant space",
    "exampleTranslation": "恒定时间 恒定空间"
  },
  {
    "word": "constitution",
    "phonetic": "/ˌkɒnstɪˈtjuːʃən/",
    "pos": "n",
    "meaning": "宪法, 构造",
    "example": "He has a strong constitution, so he should make a quick recovery from the illness.",
    "exampleTranslation": "他体质强壮，所以应该很快从疾病中康复。"
  },
  {
    "word": "construct",
    "phonetic": "/ˈkɒn.stɹʌkt/",
    "pos": "v",
    "meaning": "构筑; 建造, 建设",
    "example": "Loops and conditional statements are constructs in computer programming.",
    "exampleTranslation": "循环和条件语句是计算机编程中的构造。"
  },
  {
    "word": "construction",
    "phonetic": "/kənˈstɹʌkʃən/",
    "pos": "n",
    "meaning": "建造, 建设; 建筑物",
    "example": "Construction is underway on the new bridge.",
    "exampleTranslation": "新桥正在建设中。"
  },
  {
    "word": "consult",
    "phonetic": "/kənˈsʌlt/",
    "pos": "v",
    "meaning": "商量, 商议, 请教, 参考, 考虑",
    "example": "She wants to consult.",
    "exampleTranslation": "她想咨询一下。"
  },
  {
    "word": "consultant",
    "phonetic": "/kənˈsʌltənt/",
    "pos": "n",
    "meaning": "顾问, 商议者, 咨询者",
    "example": "This is a consultant.",
    "exampleTranslation": "这是一个顾问"
  },
  {
    "word": "consume",
    "phonetic": "/kənˈsjuːm/",
    "pos": "v",
    "meaning": "消耗, 消费",
    "example": "The power plant consumes 30 tons of coal per hour.",
    "exampleTranslation": "这家发电厂每小时消耗30吨煤。"
  },
  {
    "word": "contain",
    "phonetic": "/kənˈteɪn/",
    "pos": "v",
    "meaning": "包含; 包括; 容纳",
    "example": "I'm so excited, I can hardly contain myself!",
    "exampleTranslation": "包含; 包括; 容纳。"
  },
  {
    "word": "container",
    "phonetic": "/kənˈteɪnə/",
    "pos": "n",
    "meaning": "容器",
    "example": "This is a container.",
    "exampleTranslation": "这是一个容器"
  },
  {
    "word": "contemporary",
    "phonetic": "/kənˈtɛm.p(ə).ɹi/",
    "pos": "adj",
    "meaning": "当代的, 同时代的",
    "example": "Cervantes was a contemporary of Shakespeare.",
    "exampleTranslation": "塞万提斯和莎士比亚是同时代的人。"
  },
  {
    "word": "continent",
    "phonetic": "/ˈkɒntɪnənt/",
    "pos": "n",
    "meaning": "大陆, 大洲; 陆地",
    "example": "I need the continent.",
    "exampleTranslation": "我需要这个大陆"
  },
  {
    "word": "continue",
    "phonetic": "/kənˈtɪnjuː/",
    "pos": "v",
    "meaning": "继续",
    "example": "Do you want me to continue to unload these?",
    "exampleTranslation": "你想让我继续卸这些货吗？"
  },
  {
    "word": "contradict",
    "phonetic": "/kɒntɹəˈdɪkt/",
    "pos": "v",
    "meaning": "同...矛盾, 同...抵触",
    "example": "His testimony contradicts hers.",
    "exampleTranslation": "他的证词与她的相矛盾。"
  },
  {
    "word": "contradictory",
    "phonetic": "/ˌkɑntɹəˈdɪktəɹi/",
    "pos": "adj",
    "meaning": "矛盾的, 同...相反的",
    "example": "He seems contradictory.",
    "exampleTranslation": "他显得自相矛盾。"
  },
  {
    "word": "contrary",
    "phonetic": "/ˈkɒntɹəɹi/",
    "pos": "n",
    "meaning": "相反 adj.相反的",
    "example": "contrary winds",
    "exampleTranslation": "相反 相反的"
  },
  {
    "word": "contribute",
    "phonetic": "/kənˈt(ʃ)ɹɪb.juːt/",
    "pos": "v",
    "meaning": "捐助, 贡献, 投稿",
    "example": "to contribute articles to a journal",
    "exampleTranslation": "向期刊投稿"
  },
  {
    "word": "contribution",
    "phonetic": "/ˌkɒntɹɪˈbjuːʃən/",
    "pos": "n",
    "meaning": "贡献；捐献, 投稿",
    "example": "The contribution is important.",
    "exampleTranslation": "这个contribution很重要。"
  },
  {
    "word": "control",
    "phonetic": "/kənˈtɹəʊl/",
    "pos": "v",
    "meaning": "& n. 控制",
    "example": "The government has complete control over the situation.",
    "exampleTranslation": "控制"
  },
  {
    "word": "controversial",
    "phonetic": "/kɒn.tɹə.ˈvɜː.sjəl/",
    "pos": "adj",
    "meaning": "争论的, 争议的",
    "example": "This is controversial.",
    "exampleTranslation": "这是有争议的。"
  },
  {
    "word": "convenience",
    "phonetic": "/kənˈviːnɪəns/",
    "pos": "n",
    "meaning": "便利",
    "example": "Fast food is popular because of its cost and convenience.",
    "exampleTranslation": "快餐因其成本和便利性而广受欢迎。"
  },
  {
    "word": "convenient",
    "phonetic": "/kənˈviːniənt/",
    "pos": "adj",
    "meaning": "便利的, 方便的",
    "example": "Fast food might be convenient, but it's also very unhealthy.",
    "exampleTranslation": "快餐可能很方便，但也非常不健康。"
  },
  {
    "word": "conventional",
    "phonetic": "/kənˈvɛnʃənl/",
    "pos": "adj",
    "meaning": "惯例的, 常规的, 习俗的, 传统的",
    "example": "They wear conventional clothes, eat conventional food, and keep conventional hours.",
    "exampleTranslation": "他们穿着普通的衣服，吃着普通的食物，保持着常规的作息。"
  },
  {
    "word": "conversation",
    "phonetic": "/ˌkɒn.vəˈseɪ.ʃən/",
    "pos": "n",
    "meaning": "谈话, 交谈",
    "example": "I had an interesting conversation with Nicolas yesterday about how much he's getting paid.",
    "exampleTranslation": "我昨天和尼古拉斯进行了一次有趣的对话，聊到他挣多少钱。"
  },
  {
    "word": "convey",
    "phonetic": "/kənˈveɪ/",
    "pos": "v",
    "meaning": "搬运, 传达, 转让",
    "example": "Air conveys sound. Water is conveyed through the pipe.",
    "exampleTranslation": "空气传播声音。水通过管道输送。"
  },
  {
    "word": "convince",
    "phonetic": "/kənˈvɪns/",
    "pos": "v",
    "meaning": "使确信, 使信服",
    "example": "I wouldn't have or do something, unless I'm convinced that it's good.",
    "exampleTranslation": "除非我确信它是好的，否则我不会拥有或做某件事。"
  },
  {
    "word": "cook",
    "phonetic": "/kuːk/",
    "pos": "n",
    "meaning": "炊事员, 厨师 v. 烹调, 做饭",
    "example": "I'm a terrible cook, so I eat a lot of frozen dinners.",
    "exampleTranslation": "我是个糟糕的厨师，所以我经常吃冷冻晚餐。"
  },
  {
    "word": "cooker",
    "phonetic": "/ˈkʊkə/",
    "pos": "n",
    "meaning": "炊具",
    "example": "This is a cooker.",
    "exampleTranslation": "这是一个炊具"
  },
  {
    "word": "cookie",
    "phonetic": "/ˈkuːki/",
    "pos": "n",
    "meaning": "小甜饼",
    "example": "The cookie is important.",
    "exampleTranslation": "这个cookie很重要。"
  },
  {
    "word": "cool",
    "phonetic": "/kuːl/",
    "pos": "adj",
    "meaning": "凉的, 凉爽的; 酷",
    "example": "in the cool of the morning",
    "exampleTranslation": "在凉爽的清晨"
  },
  {
    "word": "copy",
    "phonetic": "/ˈkɒpi/",
    "pos": "n",
    "meaning": "抄本, 副本; 一本（份, 册…）v. 抄写; 拷备",
    "example": "Please bring me the copies of those reports.",
    "exampleTranslation": "请把那些报告的复印件带给我。"
  },
  {
    "word": "corn",
    "phonetic": "/kɔɹn/",
    "pos": "n",
    "meaning": "玉米, 谷物",
    "example": "He paid her the nominal fee of two corns of barley.",
    "exampleTranslation": "他付给她两粒大麦的象征性费用。"
  },
  {
    "word": "corner",
    "phonetic": "/ˈkɔːnə(ɹ)/",
    "pos": "n",
    "meaning": "角; 角落; 拐角",
    "example": "The corners of the wire mesh were reinforced with little blobs of solder.",
    "exampleTranslation": "角; 角落; 拐角。"
  },
  {
    "word": "corporation",
    "phonetic": "/ˌkɔːrpəˈreɪʃn/",
    "pos": "n",
    "meaning": "公司, 企业；社团, 法人,",
    "example": "This is a corporation.",
    "exampleTranslation": "这是一个公司"
  },
  {
    "word": "correct",
    "phonetic": "/kəˈɹɛkt/",
    "pos": "v",
    "meaning": "改正; 纠正 adj. 正确的; 恰当的",
    "example": "We must correct.",
    "exampleTranslation": "我们必须correct。"
  },
  {
    "word": "correction",
    "phonetic": "/kəˈɹɛkʃən/",
    "pos": "n",
    "meaning": "改正",
    "example": "I have four T-80 tanks at grid Three-niner-niner-four-eight-eight, Correction: Grid Three niner-niner-four-eight-five. How copy? Over.",
    "exampleTranslation": "我在坐标三九九四八八有四辆T-80坦克，更正：坐标三九九四八五。听清楚了吗？完毕。"
  },
  {
    "word": "correspond",
    "phonetic": "/ˌkɒɹəˈspɒnd/",
    "pos": "v",
    "meaning": "一致; 与…相当;  (与人)通信",
    "example": "I've been corresponding with my German pen pal for three years.",
    "exampleTranslation": "一致; 与…相当;  (与人)通信。"
  },
  {
    "word": "corrupt",
    "phonetic": "/kəˈɹʌpt/",
    "pos": "adj",
    "meaning": "& v. 腐败的, 贪污的",
    "example": "to corrupt a book",
    "exampleTranslation": "腐败的"
  },
  {
    "word": "cost",
    "phonetic": "/kɔːst/",
    "pos": "",
    "meaning": "(cost, cost) v. 值（多少钱）; 花费 n. 成本；费用",
    "example": "How much does this coat cost?",
    "exampleTranslation": "(cost。"
  },
  {
    "word": "cosy",
    "phonetic": "/ˈkəʊzi/",
    "pos": "adj",
    "meaning": "舒适的, 安逸的",
    "example": "He spent all day cosying up to the new boss, hoping for a plum assignment.",
    "exampleTranslation": "他整天都在讨好新老板，希望能得到一个美差。"
  },
  {
    "word": "cottage",
    "phonetic": "/ˈkɒtɪdʒ/",
    "pos": "n",
    "meaning": "村舍; 小别墅",
    "example": "Most cottages in the area were larger and more elaborate than my home.",
    "exampleTranslation": "这个地区的大多数小屋都比我家更大、更精致。"
  },
  {
    "word": "cotton",
    "phonetic": "/ˈkɒt.n̩/",
    "pos": "n",
    "meaning": "棉花 adj. 棉花的",
    "example": "This is a cotton.",
    "exampleTranslation": "这是一个cotton。"
  },
  {
    "word": "cough",
    "phonetic": "/kɑf/",
    "pos": "n",
    "meaning": "& v. 咳嗽",
    "example": "Behind me, I heard a distinct, dry cough.",
    "exampleTranslation": "咳嗽"
  },
  {
    "word": "could",
    "phonetic": "/kʊd/",
    "pos": "",
    "meaning": "modal v.（can的过去式）可以, 可能；行",
    "example": "Could you help me?",
    "exampleTranslation": "（的过去式）可以"
  },
  {
    "word": "count",
    "phonetic": "/kaʊnt/",
    "pos": "v",
    "meaning": "数, 计算, 认为, 有价值",
    "example": "Give the chairs a quick count to check if we have enough.",
    "exampleTranslation": "快速数一下椅子，看看是否足够。"
  },
  {
    "word": "counter",
    "phonetic": "/ˈkaʊntə/",
    "pos": "n",
    "meaning": "柜台, 结账处",
    "example": "He's only 16 months, but is already a good counter – he can count to 100.",
    "exampleTranslation": "他才16个月大，但已经是个数数好手了——他能数到100。"
  },
  {
    "word": "country",
    "phonetic": "/ˈkɐntɹi/",
    "pos": "n",
    "meaning": "国家; 农村, 乡下",
    "example": "The country is important.",
    "exampleTranslation": "这个国家很重要。"
  },
  {
    "word": "countryside",
    "phonetic": "/ˈkʌn.tɹiˌsaɪd/",
    "pos": "n",
    "meaning": "乡下, 农村",
    "example": "We live in the Swedish countryside.",
    "exampleTranslation": "我们住在瑞典的乡村。"
  },
  {
    "word": "couple",
    "phonetic": "/ˈkʌpəl/",
    "pos": "n",
    "meaning": "夫妇, 一对",
    "example": "I've coupled our system to theirs.",
    "exampleTranslation": "我已经把我们的系统与他们的连接起来了。"
  },
  {
    "word": "courage",
    "phonetic": "/ˈkʌɹɪdʒ/",
    "pos": "n",
    "meaning": "勇气; 胆略",
    "example": "It takes a lot of courage to be successful in business.",
    "exampleTranslation": "勇气; 胆略。"
  },
  {
    "word": "course",
    "phonetic": "/kɔːs/",
    "pos": "n",
    "meaning": "过程; 经过; 课程",
    "example": "The normal course of events seems to be just one damned thing after another.",
    "exampleTranslation": "过程; 经过; 课程。"
  },
  {
    "word": "court",
    "phonetic": "/kɔːt/",
    "pos": "n",
    "meaning": "法庭; 法院",
    "example": "The girls were playing in the court.",
    "exampleTranslation": "法庭; 法院。"
  },
  {
    "word": "courtyard",
    "phonetic": "/ˈkɔːt.jɑːd/",
    "pos": "n",
    "meaning": "庭院, 院子",
    "example": "She sat in the courtyard, enjoying the garden.",
    "exampleTranslation": "她坐在院子里，欣赏着花园。"
  },
  {
    "word": "cousin",
    "phonetic": "/ˈkʌz.n̩/",
    "pos": "n",
    "meaning": "堂（表）兄弟, 堂（表）姐妹",
    "example": "I think my cousin is a good man.",
    "exampleTranslation": "堂（表）兄弟。"
  },
  {
    "word": "cover",
    "phonetic": "/ˈkʌvə/",
    "pos": "n",
    "meaning": "盖子; 罩 v. 覆盖,包含, 报道",
    "example": "The soldiers took cover behind a ruined building.",
    "exampleTranslation": "士兵们躲在一栋破败的建筑后面。"
  },
  {
    "word": "cow",
    "phonetic": "/kaʊ/",
    "pos": "n",
    "meaning": "母牛, 奶牛",
    "example": "The cow is important.",
    "exampleTranslation": "这头牛很重要。"
  },
  {
    "word": "crash",
    "phonetic": "/kɹæʃ/",
    "pos": "v",
    "meaning": "撞坏; 坠毁 n. 碰撞, 坠毁, 撞击声",
    "example": "After the lightning came the crash of thunder.",
    "exampleTranslation": "闪电过后传来了雷鸣的巨响。"
  },
  {
    "word": "crayon",
    "phonetic": "/ˈkreɪən/",
    "pos": "",
    "meaning": "n 蜡笔; 蜡笔画",
    "example": "The boy is drawing with a crayon.",
    "exampleTranslation": "男孩正在用蜡笔画画。"
  },
  {
    "word": "crazy",
    "phonetic": "/ˈkɹeɪzi/",
    "pos": "adj",
    "meaning": "疯狂的",
    "example": "His ideas were both frightening and crazy.",
    "exampleTranslation": "他的想法既可怕又疯狂。"
  },
  {
    "word": "cream",
    "phonetic": "/kɹiːm/",
    "pos": "n",
    "meaning": "奶油, 乳脂",
    "example": "Take 100 ml of cream and 50 grams of sugar…",
    "exampleTranslation": "取100毫升奶油和50克糖……"
  },
  {
    "word": "create",
    "phonetic": "/kɹiːˈeɪt/",
    "pos": "v",
    "meaning": "创造; 造成",
    "example": "You can create the color orange by mixing yellow and red.",
    "exampleTranslation": "创造; 造成。"
  },
  {
    "word": "creature",
    "phonetic": "/ˈkɹiːt͡ʃə/",
    "pos": "n",
    "meaning": "动物, 人",
    "example": "He's a creature of habit.   insects and other creatures",
    "exampleTranslation": "他是个习惯的产物。昆虫和其他生物"
  },
  {
    "word": "credit",
    "phonetic": "/ˈkɹɛdɪt/",
    "pos": "n",
    "meaning": "信用; 信赖; 信誉",
    "example": "He arrived five minutes late, but to his credit he did work an extra ten minutes at the end of his shift.",
    "exampleTranslation": "信用; 信赖; 信誉。"
  },
  {
    "word": "crew",
    "phonetic": "/kruː/",
    "pos": "n",
    "meaning": "全体人员",
    "example": "He’s been crowing all day about winning the game of cards.",
    "exampleTranslation": "他一整天都在吹嘘自己赢了牌局。"
  },
  {
    "word": "crime",
    "phonetic": "/kɹaɪm/",
    "pos": "n",
    "meaning": "犯罪",
    "example": "Crime doesn’t pay.",
    "exampleTranslation": "犯罪得不偿失。"
  },
  {
    "word": "criminal",
    "phonetic": "/ˈkɹɪmənəl/",
    "pos": "n",
    "meaning": "罪犯",
    "example": "His long criminal record suggests that he is a dangerous man.",
    "exampleTranslation": "他的长期犯罪记录表明他是个危险人物。"
  },
  {
    "word": "criterion",
    "phonetic": "/kraɪˈtɪriən/",
    "pos": "",
    "meaning": "(pl. criteria) n. 标准, 准据, 规范",
    "example": "What is the main criterion for the job?",
    "exampleTranslation": "标准"
  },
  {
    "word": "crop",
    "phonetic": "/kɹɒp/",
    "pos": "n",
    "meaning": "庄稼",
    "example": "the farmer had lots of crops to sell at the market",
    "exampleTranslation": "农夫有许多作物要在市场上出售。"
  },
  {
    "word": "cross",
    "phonetic": "/kɹɑs/",
    "pos": "n",
    "meaning": "十字形的东西 v.  越过; 穿过",
    "example": "Put a cross for a wrong answer and a tick for a right one.",
    "exampleTranslation": "十字形的东西   越过"
  },
  {
    "word": "crossing",
    "phonetic": "/ˈkɹɑsɪŋ/",
    "pos": "n",
    "meaning": "十字路口, 人行横道",
    "example": "They managed to cross a sheep with a goat.",
    "exampleTranslation": "他们成功将绵羊与山羊杂交。"
  },
  {
    "word": "crossroads",
    "phonetic": "/ˈkrɔːsroʊdz/",
    "pos": "n",
    "meaning": "交叉路口",
    "example": "I need the crossroads.",
    "exampleTranslation": "我需要这个交叉路口"
  },
  {
    "word": "crowd",
    "phonetic": "/kɹaʊd/",
    "pos": "n",
    "meaning": "人群 v.  拥挤",
    "example": "After the movie let out, a crowd of people pushed through the exit doors.",
    "exampleTranslation": "人群   拥挤"
  },
  {
    "word": "cruel",
    "phonetic": "/kɹuː(ə)l/",
    "pos": "adj",
    "meaning": "残忍的, 残酷的; 无情的",
    "example": "The supervisor was very cruel to Josh, as he would always give Josh the hardest, most degrading work he could find.",
    "exampleTranslation": "主管对乔什非常残忍，总是把能找到的最艰苦、最卑贱的工作分配给他。"
  },
  {
    "word": "cry",
    "phonetic": "/kɹaɪ̯/",
    "pos": "n",
    "meaning": "叫喊; 哭声 v. 喊叫; 哭",
    "example": "After we broke up, I retreated to my room for a good cry.",
    "exampleTranslation": "分手后，我躲回房间痛哭了一场。"
  },
  {
    "word": "cube",
    "phonetic": "/kjuːb/",
    "pos": "n",
    "meaning": "立方体",
    "example": "a stock cube",
    "exampleTranslation": "浓缩汤料块"
  },
  {
    "word": "cubic",
    "phonetic": "/ˈkjuː.bɪk/",
    "pos": "n",
    "meaning": "立方体的; 立方的",
    "example": "cubic foot",
    "exampleTranslation": "立方英尺"
  },
  {
    "word": "cuisine",
    "phonetic": "/kwɪˈziːn/",
    "pos": "n",
    "meaning": "烹饪",
    "example": "French cuisine is considered to be one of the world's most refined and elegant styles of cooking.",
    "exampleTranslation": "法国菜被认为是世界上最精致优雅的烹饪风格之一。"
  },
  {
    "word": "culture",
    "phonetic": "/ˈkʌlt͡ʃə/",
    "pos": "n",
    "meaning": "文化",
    "example": "I'm headed to the lab to make sure my cell culture hasn't died.",
    "exampleTranslation": "我要去实验室确认我的细胞培养物是否还存活。"
  },
  {
    "word": "cup",
    "phonetic": "/kʌp/",
    "pos": "n",
    "meaning": "茶杯",
    "example": "Pour the tea into the cup.",
    "exampleTranslation": "把茶倒进杯子里。"
  },
  {
    "word": "cupboard",
    "phonetic": "/ˈkʌbəd/",
    "pos": "n",
    "meaning": "碗柜; 橱柜",
    "example": "Put the cups back into the cupboard.",
    "exampleTranslation": "碗柜; 橱柜。"
  },
  {
    "word": "cure",
    "phonetic": "/kɜː(ɹ)/",
    "pos": "n",
    "meaning": "治愈, 痊愈; 良方 v.  治疗; 医好",
    "example": "This is a cure.",
    "exampleTranslation": "这是一个治愈"
  },
  {
    "word": "curious",
    "phonetic": "/ˈkjɔː-/",
    "pos": "adj",
    "meaning": "好奇的",
    "example": "Young children are naturally curious about the world and everything in it.",
    "exampleTranslation": "幼儿天生对世界及万物充满好奇。"
  },
  {
    "word": "currency",
    "phonetic": "/ˈkʌɹ.ən.si/",
    "pos": "n",
    "meaning": "货币; 流通",
    "example": "Wampum was used as a currency by Amerindians.",
    "exampleTranslation": "货币; 流通。"
  },
  {
    "word": "curriculum",
    "phonetic": "/kəˈɹɪk.jə.ləm/",
    "pos": "n",
    "meaning": "课程",
    "example": "The curriculum is important.",
    "exampleTranslation": "这个curriculum很重要。"
  },
  {
    "word": "curtain",
    "phonetic": "/ˈkɜːtn̩/",
    "pos": "n",
    "meaning": "窗帘",
    "example": "He took so long to shave his head that we arrived 45 minutes after curtain and were denied late entry.",
    "exampleTranslation": "他剃头花了太长时间，导致我们幕启45分钟后才到，被拒绝入场。"
  },
  {
    "word": "cushion",
    "phonetic": "/ˈkʊʃən/",
    "pos": "n",
    "meaning": "垫子",
    "example": "to cushion a sofa",
    "exampleTranslation": "给沙发加软垫"
  },
  {
    "word": "custom",
    "phonetic": "/ˈkʌstəm/",
    "pos": "n",
    "meaning": "习惯, 习俗, 风俗习惯",
    "example": "The Ancient Egyptian culture had many distinctive and interesting beliefs and customs.",
    "exampleTranslation": "古埃及文化有许多独特而有趣的信仰和习俗。"
  },
  {
    "word": "customer",
    "phonetic": "/ˈkʌstəmə/",
    "pos": "n",
    "meaning": "顾客, 消费者",
    "example": "Every person who passes by is a potential customer.",
    "exampleTranslation": "每个路过的人都是潜在顾客。"
  },
  {
    "word": "customs",
    "phonetic": "/ˈkʌstəmz/",
    "pos": "n",
    "meaning": "海关, 关税",
    "example": "Customs of £200 were due on all the wine we took back from France.",
    "exampleTranslation": "我们从法国带回的所有葡萄酒需缴纳200英镑关税。"
  },
  {
    "word": "cut",
    "phonetic": "/kʌt/",
    "pos": "",
    "meaning": "(cut, cut) v. 切, 剪, 削, 割 n. 伤口",
    "example": "Don't cut your finger.",
    "exampleTranslation": "(cut。"
  },
  {
    "word": "cycle",
    "phonetic": "/ˈsaɪkəl/",
    "pos": "v",
    "meaning": "骑自行车；循环, 轮转",
    "example": "the cycle of the seasons, or of the year",
    "exampleTranslation": "季节的循环，或一年的循环"
  },
  {
    "word": "cyclist",
    "phonetic": "/ˈsaɪ.klɪst/",
    "pos": "n",
    "meaning": "骑自行车的人",
    "example": "This is a cyclist.",
    "exampleTranslation": "这是一名自行车手。"
  },
  {
    "word": "dad",
    "phonetic": "/dæd/",
    "pos": "",
    "meaning": "= daddy n.爸爸, 爹爹",
    "example": "My dad is very tall.",
    "exampleTranslation": "=  爸爸"
  },
  {
    "word": "daily",
    "phonetic": "/ˈdeɪli/",
    "pos": "adj",
    "meaning": "每日的; 日常的 adv. 每天 n. 日报",
    "example": "He seems daily.",
    "exampleTranslation": "他看起来daily。"
  },
  {
    "word": "dam",
    "phonetic": "/dæm/",
    "pos": "n",
    "meaning": "水坝, 堰堤",
    "example": "A dam is often an essential source of water to farmers of hilly country.",
    "exampleTranslation": "水坝通常是丘陵地区农民的重要水源。"
  },
  {
    "word": "damage",
    "phonetic": "/ˈdæmɪdʒ/",
    "pos": "n",
    "meaning": "& v. 毁坏, 损害",
    "example": "The storm did a lot of damage to the area.",
    "exampleTranslation": "毁坏"
  },
  {
    "word": "damp",
    "phonetic": "/dæmp/",
    "pos": "adj",
    "meaning": "& n. 潮湿（的）",
    "example": "to damp cloth",
    "exampleTranslation": "潮湿（的）"
  },
  {
    "word": "dance",
    "phonetic": "/dæːns/",
    "pos": "n",
    "meaning": "& v. 跳舞",
    "example": "So how much longer are we gonna do this dance?",
    "exampleTranslation": "跳舞"
  },
  {
    "word": "danger",
    "phonetic": "/ˈdeɪndʒər/",
    "pos": "n",
    "meaning": "危险",
    "example": "The danger is important.",
    "exampleTranslation": "这个danger很重要。"
  },
  {
    "word": "dangerous",
    "phonetic": "/ˈdeɪnd͡ʒ(ə)ɹəs/",
    "pos": "adj",
    "meaning": "危险的",
    "example": "Railway crossings without gates are highly dangerous.",
    "exampleTranslation": "没有闸门的铁路道口极其危险。"
  },
  {
    "word": "dare",
    "phonetic": "/dɛə(ɹ)/",
    "pos": "v",
    "meaning": "& modal v. 敢, 敢于",
    "example": "I wouldn't dare argue with my boss.",
    "exampleTranslation": "敢"
  },
  {
    "word": "dark",
    "phonetic": "/dɑːk/",
    "pos": "n",
    "meaning": "黑暗; 暗处; 日暮 adj. 黑暗的; 暗淡的; 深色的",
    "example": "The room was too dark for reading.",
    "exampleTranslation": "房间太暗，无法阅读。"
  },
  {
    "word": "darkness",
    "phonetic": "/ˈdɑːknəs/",
    "pos": "n",
    "meaning": "黑暗, 阴暗",
    "example": "The darkness of the room made it difficult to see.",
    "exampleTranslation": "房间的黑暗使人难以看清。"
  },
  {
    "word": "dash",
    "phonetic": "/dæʃ/",
    "pos": "v",
    "meaning": "& n. 快跑, 冲刺, 短跑",
    "example": "Add a dash of vinegar.",
    "exampleTranslation": "快跑"
  },
  {
    "word": "data",
    "phonetic": "/ˈdaetə/",
    "pos": "n",
    "meaning": "资料, 数据",
    "example": "I need the data.",
    "exampleTranslation": "我需要这个资料"
  },
  {
    "word": "database",
    "phonetic": "/ˈdeɪtəˌbeɪs/",
    "pos": "n",
    "meaning": "资料库, 数据库",
    "example": "I have a database of all my contacts in my personal organizer.",
    "exampleTranslation": "我的个人记事本里有所有联系人的数据库。"
  },
  {
    "word": "date",
    "phonetic": "/deɪt/",
    "pos": "n",
    "meaning": "日期; 约会 v. .约会, 定日期; 注明...的日期",
    "example": "We made a nice cake from dates.",
    "exampleTranslation": "我们用枣子做了一个美味的蛋糕。"
  },
  {
    "word": "daughter",
    "phonetic": "/ˈdɑ.tɚ/",
    "pos": "n",
    "meaning": "女儿",
    "example": "I already have a son, so I would like to have a daughter.",
    "exampleTranslation": "我已经有一个儿子了，所以我想要个女儿。"
  },
  {
    "word": "dawn",
    "phonetic": "/doːn/",
    "pos": "n",
    "meaning": "黎明, 拂晓",
    "example": "She rose before dawn to meet the train.",
    "exampleTranslation": "她黎明前起床去接火车。"
  },
  {
    "word": "day",
    "phonetic": "/deɪ/",
    "pos": "n",
    "meaning": "天, 白天, 日子",
    "example": "I've been here for two days and a bit.",
    "exampleTranslation": "我在这里已经待了两天多一点。"
  },
  {
    "word": "dead",
    "phonetic": "/diːd/",
    "pos": "adj",
    "meaning": "死的",
    "example": "Have respect for the dead.",
    "exampleTranslation": "请尊重逝者。"
  },
  {
    "word": "deadline",
    "phonetic": "/ˈdɛdˌlaɪn/",
    "pos": "n",
    "meaning": "最后期限",
    "example": "I must make this deadline or my boss will kill me!",
    "exampleTranslation": "我必须赶上这个截止日期，否则老板会要了我的命！"
  },
  {
    "word": "deaf",
    "phonetic": "/diːf/",
    "pos": "adj",
    "meaning": "聋的",
    "example": "Those people are deaf to reason.",
    "exampleTranslation": "那些人不可理喻。"
  },
  {
    "word": "deal",
    "phonetic": "/diːl/",
    "pos": "n",
    "meaning": "量, 数额; 交易",
    "example": "We gave three deals of grain in tribute to the king.",
    "exampleTranslation": "我们向国王进贡了三份谷物。"
  },
  {
    "word": "dear",
    "phonetic": "/diːɹ/",
    "pos": "adj",
    "meaning": "亲爱的; 贵的",
    "example": "My cousin is such a dear, always drawing me pictures.",
    "exampleTranslation": "我的表妹真是可爱，总是给我画画。"
  },
  {
    "word": "death",
    "phonetic": "/diːθ/",
    "pos": "n",
    "meaning": "死",
    "example": "The death of my grandmother saddened the whole family.",
    "exampleTranslation": "我祖母的去世让全家人都很悲伤。"
  },
  {
    "word": "debate",
    "phonetic": "/dɪˈbeɪt/",
    "pos": "n",
    "meaning": "& v.讨论, 辩论",
    "example": "After a four-hour debate, the committee voted to table the motion.",
    "exampleTranslation": "讨论"
  },
  {
    "word": "debt",
    "phonetic": "/dɛt/",
    "pos": "n",
    "meaning": "债务",
    "example": "I am in your debt.",
    "exampleTranslation": "我欠你一个人情。"
  },
  {
    "word": "decade",
    "phonetic": "/dəˈkeɪd/",
    "pos": "n",
    "meaning": "十年",
    "example": "a decade of soldiers",
    "exampleTranslation": "一个班的士兵"
  },
  {
    "word": "decide",
    "phonetic": "/dɪˈsaɪd/",
    "pos": "v",
    "meaning": "决定; 下决心",
    "example": "Her last-minute goal decided the game.",
    "exampleTranslation": "她最后时刻的进球决定了比赛胜负。"
  },
  {
    "word": "decision",
    "phonetic": "/dɪˈsɪʒən/",
    "pos": "n",
    "meaning": "决定; 决心",
    "example": "It is the decision of the court that movies are protected as free speech.",
    "exampleTranslation": "决定; 决心。"
  },
  {
    "word": "declare",
    "phonetic": "/dɪˈkleə/",
    "pos": "v",
    "meaning": "声明; 断言",
    "example": "He declared him innocent.",
    "exampleTranslation": "声明; 断言。"
  },
  {
    "word": "decline",
    "phonetic": "/dɪˈklaɪn/",
    "pos": "v",
    "meaning": "下降; 下滑; 衰退; 谢绝",
    "example": "The dollar has declined rapidly since 2001.",
    "exampleTranslation": "下降; 下滑; 衰退; 谢绝。"
  },
  {
    "word": "decorate",
    "phonetic": "/ˈdɛkəɹeɪt/",
    "pos": "v",
    "meaning": "装饰",
    "example": "We decorated the Christmas tree with tinsel and baubles.",
    "exampleTranslation": "我们用闪亮的金属丝和小饰品装饰了圣诞树。"
  },
  {
    "word": "decoration",
    "phonetic": "/ˌdɛkəˈɹeɪʃən/",
    "pos": "n",
    "meaning": "装饰, 装饰品",
    "example": "This is a decoration.",
    "exampleTranslation": "这是一个装饰"
  },
  {
    "word": "decrease",
    "phonetic": "/dɪˈkriːs/",
    "pos": "v",
    "meaning": "减少; 降低",
    "example": "One research team has recorded Baishui’s decrease at about 27 meters per year over the last 10 years.",
    "exampleTranslation": "减少; 降低。"
  },
  {
    "word": "dedicate",
    "phonetic": "/ˈdɛdɪkeɪt/",
    "pos": "adj",
    "meaning": "献(身), 致力",
    "example": "dedicated their money to scientific research.",
    "exampleTranslation": "献(身)。"
  },
  {
    "word": "deed",
    "phonetic": "/diːd/",
    "pos": "n",
    "meaning": "行为; 事迹",
    "example": "I have fulfilled my promise in word and in deed.",
    "exampleTranslation": "行为; 事迹。"
  },
  {
    "word": "deep",
    "phonetic": "/diːp/",
    "pos": "adj",
    "meaning": "深 adv. 深地",
    "example": "creatures of the deep",
    "exampleTranslation": "深  深地"
  },
  {
    "word": "deer",
    "phonetic": "/diːɹ/",
    "pos": "n",
    "meaning": "鹿",
    "example": "I wrecked my car after a deer ran across the road.",
    "exampleTranslation": "一只鹿跑过马路后，我撞毁了自己的车。"
  },
  {
    "word": "defeat",
    "phonetic": "/dɪˈfiːt/",
    "pos": "v",
    "meaning": "击败; 战胜",
    "example": "Wellington defeated Napoleon at Waterloo.",
    "exampleTranslation": "击败; 战胜。"
  },
  {
    "word": "defence",
    "phonetic": "/dɪˈfens/",
    "pos": "",
    "meaning": "(defense) n. 防御; 防务",
    "example": "The city has a strong defence.",
    "exampleTranslation": "防御"
  },
  {
    "word": "defend",
    "phonetic": "/dɪˈfɛnd/",
    "pos": "v",
    "meaning": "防守; 保卫",
    "example": "They defend the project.",
    "exampleTranslation": "防守; 保卫。"
  },
  {
    "word": "degree",
    "phonetic": "/dɪˈɡɹiː/",
    "pos": "n",
    "meaning": "程度; 度数; 学位",
    "example": "She has two bachelor's degrees and is studying towards a master's degree.",
    "exampleTranslation": "程度; 度数; 学位。"
  },
  {
    "word": "delay",
    "phonetic": "/dɪˈleɪ/",
    "pos": "",
    "meaning": "v& n. 拖延, 延期; 耽搁",
    "example": "Sorry for the delay.",
    "exampleTranslation": "拖延"
  },
  {
    "word": "delete",
    "phonetic": "/diˈliːt/",
    "pos": "v",
    "meaning": "删去",
    "example": "I lost the file when I accidentally hit delete.",
    "exampleTranslation": "我不小心按了删除键，把文件弄丢了。"
  },
  {
    "word": "deliberately",
    "phonetic": "/dəˈlɪb(ə)ɹətli/",
    "pos": "adv",
    "meaning": "故意地",
    "example": "He deliberately broke that, didn't he?",
    "exampleTranslation": "他是故意弄坏那个的，对吧？"
  },
  {
    "word": "delicious",
    "phonetic": "/dɪˈlɪʃəs/",
    "pos": "adj",
    "meaning": "美味的, 可口的",
    "example": "The irony is delicious!",
    "exampleTranslation": "这讽刺真是妙不可言！"
  },
  {
    "word": "delight",
    "phonetic": "/dəˈlaɪt/",
    "pos": "n",
    "meaning": "快乐; 乐事",
    "example": "A beautiful landscape delights the eye.",
    "exampleTranslation": "快乐; 乐事。"
  },
  {
    "word": "delighted",
    "phonetic": "/dɪˈlaɪtəd/",
    "pos": "adj",
    "meaning": "高兴的, 快乐的",
    "example": "A beautiful landscape delights the eye.",
    "exampleTranslation": "美丽的风景令人赏心悦目。"
  },
  {
    "word": "deliver",
    "phonetic": "/dɪˈlɪvə(ɹ)/",
    "pos": "v",
    "meaning": "投递（信件, 邮包等）",
    "example": "deliver a captive from the prison",
    "exampleTranslation": "投递（信件。"
  },
  {
    "word": "demand",
    "phonetic": "/dɪˈmɑːnd/",
    "pos": "v",
    "meaning": "要求",
    "example": "Prices usually go up when demand exceeds supply.",
    "exampleTranslation": "当供不应求时，价格通常会上涨。"
  },
  {
    "word": "dentist",
    "phonetic": "/ˈdɛntɪst/",
    "pos": "n",
    "meaning": "牙科医生",
    "example": "This is a dentist.",
    "exampleTranslation": "这是一位牙医。"
  },
  {
    "word": "departure",
    "phonetic": "/dɪˈpɑː(ɹ)tjə(ɹ)/",
    "pos": "n",
    "meaning": "离开, 启程",
    "example": "The departure was scheduled for noon.",
    "exampleTranslation": "出发时间定在中午。"
  },
  {
    "word": "depend",
    "phonetic": "/dɪˈpɛnd/",
    "pos": "v",
    "meaning": "依靠, 依赖, 指望; 取决于",
    "example": "We would like to go skiing, but it depends on the amount of snow.",
    "exampleTranslation": "我们想去滑雪，但这取决于雪量。"
  },
  {
    "word": "deposit",
    "phonetic": "/dɪˈpɒzɪt/",
    "pos": "v",
    "meaning": "存放, 堆积 n. 存款, 押金",
    "example": "a deposit of seaweed on the shore",
    "exampleTranslation": "海岸上的一层海藻沉积物。"
  },
  {
    "word": "depth",
    "phonetic": "/dɛpθ/",
    "pos": "n",
    "meaning": "深, 深度",
    "example": "Measure the depth of the water in this part of the bay.",
    "exampleTranslation": "测量海湾这一处的水深。"
  },
  {
    "word": "describe",
    "phonetic": "/dəˈskɹaɪb/",
    "pos": "v",
    "meaning": "描写, 叙述",
    "example": "The feeling is difficult to describe, but not unpleasant.",
    "exampleTranslation": "这种感觉难以形容，但并不令人不快。"
  },
  {
    "word": "description",
    "phonetic": "/dɪˈskɹɪpʃən/",
    "pos": "n",
    "meaning": "描述, 描写",
    "example": "The zoo had no lions, tigers, or cats of any description.",
    "exampleTranslation": "动物园里没有任何种类的狮子、老虎或猫科动物。"
  },
  {
    "word": "desert",
    "phonetic": "/dɪˈzɜːt/",
    "pos": "n",
    "meaning": "沙漠 v. 舍弃; 遗弃",
    "example": "I need the desert.",
    "exampleTranslation": "我需要desert。"
  },
  {
    "word": "design",
    "phonetic": "/dɪˈzaɪn/",
    "pos": "n",
    "meaning": "图案, 图样, 样式 v. 设计, 策划",
    "example": "To be hateful of the truth by design.",
    "exampleTranslation": "蓄意憎恶真相。"
  },
  {
    "word": "desire",
    "phonetic": "/dɪˈzaɪə/",
    "pos": "v",
    "meaning": "& n. 愿望, 要求; 希望",
    "example": "It is my desire to speak with you.",
    "exampleTranslation": "愿望"
  },
  {
    "word": "desk",
    "phonetic": "/dɛsk/",
    "pos": "n",
    "meaning": "书桌, 写字台",
    "example": "city desk",
    "exampleTranslation": "本地新闻部。"
  },
  {
    "word": "desperate",
    "phonetic": "/ˈdɛsp(ə)ɹət/",
    "pos": "adj",
    "meaning": "不顾一切的, 拚死的, 令人绝望的",
    "example": "I hadn't eaten in two days and was desperate for food.",
    "exampleTranslation": "我两天没吃东西了，极度渴望食物。"
  },
  {
    "word": "dessert",
    "phonetic": "/dɪˈzɜːt/",
    "pos": "n",
    "meaning": "甜点",
    "example": "I need the dessert.",
    "exampleTranslation": "我需要这个甜点"
  },
  {
    "word": "destination",
    "phonetic": "/dɛstɪˈneɪʃən/",
    "pos": "n",
    "meaning": "目的地",
    "example": "The destination is important.",
    "exampleTranslation": "这个destination很重要。"
  },
  {
    "word": "destroy",
    "phonetic": "/dɪˈstɹɔɪ/",
    "pos": "v",
    "meaning": "破坏, 毁坏",
    "example": "Hooligans destroy unprovoked.",
    "exampleTranslation": "流氓无故搞破坏。"
  },
  {
    "word": "detective",
    "phonetic": "/dɪˈtɛktɪv/",
    "pos": "n",
    "meaning": "侦探",
    "example": "I need the detective.",
    "exampleTranslation": "我需要这个侦探"
  },
  {
    "word": "determine",
    "phonetic": "/dɪˈtɜːmɪn/",
    "pos": "v",
    "meaning": "决定; 决心",
    "example": "The news of his father's illness determined him to depart immediately.",
    "exampleTranslation": "决定; 决心。"
  },
  {
    "word": "develop",
    "phonetic": "/dɛˈvɛ.ləp/",
    "pos": "v",
    "meaning": "发展; 开发",
    "example": "Let's see how things develop and then make our decision.",
    "exampleTranslation": "发展; 开发。"
  },
  {
    "word": "development",
    "phonetic": "/dɪˈvɛləpmənt/",
    "pos": "n",
    "meaning": "发展, 发育, 开发",
    "example": "The development of this story has been slow.",
    "exampleTranslation": "这个故事的情节发展一直很缓慢。"
  },
  {
    "word": "devote",
    "phonetic": "/dɪˈvəʊt/",
    "pos": "v",
    "meaning": "把…奉献; 把…专用（于）",
    "example": "I devoted this afternoon to repainting my study, and nothing will get in my way.",
    "exampleTranslation": "把…奉献; 把…专用（于）。"
  },
  {
    "word": "devotion",
    "phonetic": "/dɪˈvəʊʃən/",
    "pos": "n",
    "meaning": "奉献, 奉献精神",
    "example": "I need the devotion.",
    "exampleTranslation": "我需要这个奉献"
  },
  {
    "word": "diagram",
    "phonetic": "/ˈdaɪ.ə.ɡɹæm/",
    "pos": "n",
    "meaning": "图表, 图样",
    "example": "Electrical diagrams show device interconnections.",
    "exampleTranslation": "电路图显示设备间的连接方式。"
  },
  {
    "word": "dial",
    "phonetic": "/ˈdaɪəɫ/",
    "pos": "v",
    "meaning": "拨（电话号码）",
    "example": "President Trump has recently dialled down the rhetoric.",
    "exampleTranslation": "拨（电话号码）。"
  },
  {
    "word": "dialogue",
    "phonetic": "/ˈdaɪəlɔːɡ/",
    "pos": "",
    "meaning": "(dialog) n.对话",
    "example": "Read the dialogue aloud.",
    "exampleTranslation": "对话"
  },
  {
    "word": "diamond",
    "phonetic": "/ˈdaɪ(ə)mənd/",
    "pos": "n",
    "meaning": "钻石",
    "example": "The saw is coated with diamond.",
    "exampleTranslation": "这把锯子镀了一层金刚石。"
  },
  {
    "word": "diary",
    "phonetic": "/ˈdaɪəɹi/",
    "pos": "n",
    "meaning": "日记; 日记簿",
    "example": "They kept separate diaries. His was on paper and her diary was on her computer's hard drive.",
    "exampleTranslation": "他们各自记日记。他的写在纸上，她的日记则存在电脑硬盘里。"
  },
  {
    "word": "dictation",
    "phonetic": "/dɪkˈteɪʃən/",
    "pos": "n",
    "meaning": "听写",
    "example": "Since I learned shorthand, I can take dictation at eighty words a minute.",
    "exampleTranslation": "自从学了速记，我能以每分钟八十字的速度做听写。"
  },
  {
    "word": "dictionary",
    "phonetic": "/ˈdɪkʃəˌnɛɹi/",
    "pos": "n",
    "meaning": "词典",
    "example": "The dictionary is important.",
    "exampleTranslation": "这个dictionary很重要。"
  },
  {
    "word": "die",
    "phonetic": "/daɪ/",
    "pos": "v",
    "meaning": "死",
    "example": "He died a hero's death.",
    "exampleTranslation": "他英勇牺牲。"
  },
  {
    "word": "diet",
    "phonetic": "/ˈdaɪət/",
    "pos": "n",
    "meaning": "饮食",
    "example": "The diet of the Giant Panda consists mainly of bamboo.",
    "exampleTranslation": "大熊猫的饮食主要以竹子为主。"
  },
  {
    "word": "differ",
    "phonetic": "/ˈdɪfə/",
    "pos": "v",
    "meaning": "相异, 有区别",
    "example": "These shoes only differ from those ones in having slightly longer laces.",
    "exampleTranslation": "这双鞋与那双的唯一区别在于鞋带稍长一些。"
  },
  {
    "word": "difference",
    "phonetic": "/ˈdɪfəɹən(t)s/",
    "pos": "n",
    "meaning": "不同",
    "example": "You need to learn to be more tolerant of difference.",
    "exampleTranslation": "你需要学会更加包容差异。"
  },
  {
    "word": "different",
    "phonetic": "/ˈdɪf.(ə)ɹ.ənt/",
    "pos": "adj",
    "meaning": "不同的, 有差异的",
    "example": "Several different scientists all reached this conclusion at about the same time.",
    "exampleTranslation": "几位不同的科学家几乎同时得出了这个结论。"
  },
  {
    "word": "difficult",
    "phonetic": "/ˈdɪfɪkəlt/",
    "pos": "adj",
    "meaning": "难的; 艰难的; 不易相处的",
    "example": "However, the difficult weather conditions will ensure Yunnan has plenty of freshwater.",
    "exampleTranslation": "难的; 艰难的; 不易相处的。"
  },
  {
    "word": "difficulty",
    "phonetic": "/ˈdɪfɪkəlti/",
    "pos": "n",
    "meaning": "困难, 费力",
    "example": "We faced a difficulty in trying to book a flight so late.",
    "exampleTranslation": "我们试图这么晚订机票时遇到了困难。"
  },
  {
    "word": "dig",
    "phonetic": "/dɪɡ/",
    "pos": "",
    "meaning": "(dug, dug) v. 挖; 掘",
    "example": "They will dig a deep hole.",
    "exampleTranslation": "(dug。"
  },
  {
    "word": "digest",
    "phonetic": "/daɪˈdʒɛst/",
    "pos": "v",
    "meaning": "消化; 领会",
    "example": "to digest laws",
    "exampleTranslation": "消化; 领会。"
  },
  {
    "word": "digital",
    "phonetic": "/ˈdɪd͡ʒɪtəɫ/",
    "pos": "adj",
    "meaning": "数字的",
    "example": "He moved to digital for the first time, using a Sony camera.",
    "exampleTranslation": "他首次转向数码摄影，使用了一台索尼相机。"
  },
  {
    "word": "dignity",
    "phonetic": "/ˈdɪɡnəti/",
    "pos": "n",
    "meaning": "尊严, 高贵",
    "example": "I need the dignity.",
    "exampleTranslation": "我需要这个尊严"
  },
  {
    "word": "dilemma",
    "phonetic": "/daɪˈlɛmə/",
    "pos": "n",
    "meaning": "进退两难的局面, 困难的选择",
    "example": "I need the dilemma.",
    "exampleTranslation": "我需要这个进退两难的局面"
  },
  {
    "word": "dimension",
    "phonetic": "/daɪˈmɛnʃən/",
    "pos": "n",
    "meaning": "尺寸, 尺度",
    "example": "The dimension of velocity is length divided by time.",
    "exampleTranslation": "速度的量纲是长度除以时间。"
  },
  {
    "word": "dinner",
    "phonetic": "/ˈdɪnə/",
    "pos": "n",
    "meaning": "正餐, 宴会",
    "example": "Give the dog its dinner.",
    "exampleTranslation": "给狗喂食。"
  },
  {
    "word": "dinosaur",
    "phonetic": "/ˈdaɪnəsɔː(ɹ)/",
    "pos": "n",
    "meaning": "恐龙",
    "example": "This is a dinosaur.",
    "exampleTranslation": "这是一个恐龙"
  },
  {
    "word": "dioxide",
    "phonetic": "/daɪˈɒksaɪd/",
    "pos": "n",
    "meaning": "二氧化物",
    "example": "I need the dioxide.",
    "exampleTranslation": "我需要这个二氧化物"
  },
  {
    "word": "dip",
    "phonetic": "/dɪp/",
    "pos": "v",
    "meaning": "浸, 蘸, 沾",
    "example": "There is a dip in the road ahead.",
    "exampleTranslation": "前方道路有个凹陷。"
  },
  {
    "word": "diploma",
    "phonetic": "/dɪˈpləʊmə/",
    "pos": "n",
    "meaning": "文凭; 学位证书",
    "example": "I need the diploma.",
    "exampleTranslation": "我需要这个文凭; 学位证书"
  },
  {
    "word": "direct",
    "phonetic": "/d(a)ɪˈɹɛkt/",
    "pos": "adj",
    "meaning": "直接的; 直达的 v. 指挥; 指导",
    "example": "to direct the affairs of a nation or the movements of an army",
    "exampleTranslation": "管理国家事务或指挥军队行动"
  },
  {
    "word": "direction",
    "phonetic": "/d(a)ɪˈɹɛk.ʃən/",
    "pos": "n",
    "meaning": "方向; 方位",
    "example": "Keep going in the same direction.",
    "exampleTranslation": "方向; 方位。"
  },
  {
    "word": "director",
    "phonetic": "/daɪˈɹɛktə(ɹ)/",
    "pos": "n",
    "meaning": "主任, 主管, 导演",
    "example": "I need the director.",
    "exampleTranslation": "我需要这个主任"
  },
  {
    "word": "directory",
    "phonetic": "/daɪˈɹɛktəɹi/",
    "pos": "n",
    "meaning": "姓名地址录",
    "example": "The directory is important.",
    "exampleTranslation": "这个directory很重要。"
  },
  {
    "word": "dirty",
    "phonetic": "/ˈdɜːti/",
    "pos": "adj",
    "meaning": "脏的",
    "example": "Despite a walk in the rain, my shoes weren't too dirty.",
    "exampleTranslation": "尽管在雨中散步，我的鞋子并没有太脏。"
  },
  {
    "word": "disability",
    "phonetic": "/dɪsəˈbɪlɪti/",
    "pos": "n",
    "meaning": "残疾; 无能",
    "example": "Dyscalculia is math disability.",
    "exampleTranslation": "残疾; 无能。"
  },
  {
    "word": "disabled",
    "phonetic": "/dɪsˈeɪbəɫd/",
    "pos": "adj",
    "meaning": "残废的, 残疾的",
    "example": "Falling off the horse disabled him.",
    "exampleTranslation": "从马上摔下来使他残疾了。"
  },
  {
    "word": "disadvantage",
    "phonetic": "/ˌdɪsədˈvɑːntɪdʒ/",
    "pos": "n",
    "meaning": "不利条件; 弱点",
    "example": "The disadvantage to owning a food processor is that you have to store it somewhere.",
    "exampleTranslation": "拥有食物处理器的缺点是你得找个地方存放它。"
  },
  {
    "word": "disagree",
    "phonetic": "/dɪsəˈɡɹiː/",
    "pos": "v",
    "meaning": "持不同意见; 不一致",
    "example": "Bob says cats are friendlier than dogs, but I disagree.",
    "exampleTranslation": "鲍勃说猫比狗更友好，但我不同意。"
  },
  {
    "word": "disagreement",
    "phonetic": "/dɪsəˈɡɹiːmənt/",
    "pos": "n",
    "meaning": "意见不一致; 相违",
    "example": "They had a bit of a disagreement about what color to paint the bedroom, but they have reached a compromise.",
    "exampleTranslation": "他们在卧室刷什么颜色上有点分歧，但已经达成了妥协。"
  },
  {
    "word": "disappear",
    "phonetic": "/dɪsəˈpiːɹ/",
    "pos": "v",
    "meaning": "消失",
    "example": "We must disappear.",
    "exampleTranslation": "我们必须消失。"
  },
  {
    "word": "disappoint",
    "phonetic": "/dɪsəˈpɔɪnt/",
    "pos": "v",
    "meaning": "使失望",
    "example": "His lack of respect disappointed her.",
    "exampleTranslation": "他缺乏尊重让她感到失望。"
  },
  {
    "word": "disappointed",
    "phonetic": "/ˌdɪsəˈpɔɪntɪd/",
    "pos": "adj",
    "meaning": "失望的",
    "example": "His lack of respect disappointed her.",
    "exampleTranslation": "他缺乏尊重让她感到失望。"
  },
  {
    "word": "disappointment",
    "phonetic": "/dɪsəˈpɔɪntmənt/",
    "pos": "n",
    "meaning": "失望; 沮丧",
    "example": "Our trip to California was a disappointment.",
    "exampleTranslation": "失望; 沮丧。"
  },
  {
    "word": "disaster",
    "phonetic": "/dɪˈzæs.tə/",
    "pos": "n",
    "meaning": "灾难",
    "example": "People would suffer disasters when society's morality degenerates.",
    "exampleTranslation": "当社会道德堕落时，人们将遭受灾难。"
  },
  {
    "word": "discount",
    "phonetic": "/dɪsˈkaʊnt/",
    "pos": "n",
    "meaning": "折扣",
    "example": "This store offers discounts on all its wares. That store specializes in discount wares, too.",
    "exampleTranslation": "这家商店的所有商品都有折扣。那家商店也专营折扣商品。"
  },
  {
    "word": "discourage",
    "phonetic": "/dɪsˈkʌɹɪd͡ʒ/",
    "pos": "v",
    "meaning": "（使）气馁",
    "example": "Don't be discouraged by the amount of work left to do: you'll finish it in good time.",
    "exampleTranslation": "（使）气馁。"
  },
  {
    "word": "discover",
    "phonetic": "/dɪsˈkʊvə/",
    "pos": "v",
    "meaning": "发现",
    "example": "Turning the corner, I discovered a lovely little shop. I discovered that they sold widgets.",
    "exampleTranslation": "拐过街角，我发现了一家可爱的小店。我发现他们出售小部件。"
  },
  {
    "word": "discovery",
    "phonetic": "/dɪsˈkʌvəɹi/",
    "pos": "n",
    "meaning": "发现",
    "example": "This latest discovery should eventually lead to much better treatments for disease.",
    "exampleTranslation": "这项最新发现最终应能带来更好的疾病治疗方法。"
  },
  {
    "word": "discrimination",
    "phonetic": "/dɪskɹɪmɪˈneɪʃən/",
    "pos": "n",
    "meaning": "歧视；辨别, 区别",
    "example": "reverse discrimination",
    "exampleTranslation": "歧视；辨别。"
  },
  {
    "word": "discuss",
    "phonetic": "/dɪsˈkʊs/",
    "pos": "v",
    "meaning": "讨论",
    "example": "I don't wish to discuss this further. Let's talk about something else.",
    "exampleTranslation": "我不想再讨论这件事了。我们聊点别的吧。"
  },
  {
    "word": "discussion",
    "phonetic": "/dɪsˈkʊʃən/",
    "pos": "n",
    "meaning": "讨论",
    "example": "My discussion with the professor was very enlightening.",
    "exampleTranslation": "我与教授的讨论让我受益匪浅。"
  },
  {
    "word": "disease",
    "phonetic": "/dɪˈziːz/",
    "pos": "n",
    "meaning": "疾病",
    "example": "The tomato plants had some kind of disease that left their leaves splotchy and fruit withered.",
    "exampleTranslation": "番茄植株染上了某种病害，导致叶片斑驳、果实枯萎。"
  },
  {
    "word": "disgusting",
    "phonetic": "/dɪsˈɡʊstɪŋ/",
    "pos": "adj",
    "meaning": "令人厌恶的",
    "example": "It disgusts me to see her chew with her mouth open.",
    "exampleTranslation": "看到她张嘴咀嚼的样子让我感到恶心。"
  },
  {
    "word": "dish",
    "phonetic": "/dɪʃ/",
    "pos": "n",
    "meaning": "盘, 碟; 盘装菜",
    "example": "a dish of stew",
    "exampleTranslation": "一盘炖菜"
  },
  {
    "word": "disk",
    "phonetic": "/dɪsk/",
    "pos": "",
    "meaning": "=disc n. 磁盘",
    "example": "Please insert the disk.",
    "exampleTranslation": "=  磁盘"
  },
  {
    "word": "dislike",
    "phonetic": "/dɪsˈlaɪk/",
    "pos": "v",
    "meaning": "不喜爱; 厌恶",
    "example": "Tell me your likes and dislikes.",
    "exampleTranslation": "告诉我你喜欢什么和讨厌什么。"
  },
  {
    "word": "dismiss",
    "phonetic": "/dɪsˈmɪs/",
    "pos": "v",
    "meaning": "让…离开; 下课; 解散; 解雇",
    "example": "The company dismissed me after less than a year.",
    "exampleTranslation": "让…离开; 下课; 解散; 解雇。"
  },
  {
    "word": "disobey",
    "phonetic": "/dɪs.əˈbeɪ/",
    "pos": "v",
    "meaning": "不服从",
    "example": "I disobey it.",
    "exampleTranslation": "我违抗它。"
  },
  {
    "word": "distance",
    "phonetic": "/ˈdɪs.təns/",
    "pos": "n",
    "meaning": "距离",
    "example": "From Moscow, the distance is relatively short to Saint Petersburg, relatively long to Novosibirsk, but even greater to Vladivostok.",
    "exampleTranslation": "从莫斯科到圣彼得堡的距离相对较短，到新西伯利亚则相对较远，而到符拉迪沃斯托克则更远。"
  },
  {
    "word": "distant",
    "phonetic": "/ˈdɪstənt/",
    "pos": "adj",
    "meaning": "远的, 遥远的",
    "example": "The mountains look distant.",
    "exampleTranslation": "群山看起来很遥远。"
  },
  {
    "word": "distinction",
    "phonetic": "/dɪˈstɪŋkʃən/",
    "pos": "n",
    "meaning": "差别, 声望",
    "example": "There is a distinction to be made between resting and slacking.",
    "exampleTranslation": "休息和偷懒是有区别的。"
  },
  {
    "word": "distinguish",
    "phonetic": "/dɪˈstɪŋɡwɪʃ/",
    "pos": "adj",
    "meaning": "区别, 辨别",
    "example": "That is distinguish.",
    "exampleTranslation": "那是区分。"
  },
  {
    "word": "distribute",
    "phonetic": "/dɨˈstɹɪbjuːt/",
    "pos": "v",
    "meaning": "分发, 分配",
    "example": "He distributed the bread amongst his followers.",
    "exampleTranslation": "他把面包分给了他的追随者们。"
  },
  {
    "word": "district",
    "phonetic": "/ˈdɪstɹɪkt/",
    "pos": "n",
    "meaning": "区; 地区",
    "example": "the Soho district of London",
    "exampleTranslation": "区; 地区。"
  },
  {
    "word": "disturb",
    "phonetic": "/dɪsˈtɜːb/",
    "pos": "v",
    "meaning": "扰乱; 打扰",
    "example": "A school of fish disturbed the water.",
    "exampleTranslation": "扰乱; 打扰。"
  },
  {
    "word": "disturbing",
    "phonetic": "/dɪsˈtɜːbɪŋ/",
    "pos": "adj",
    "meaning": "烦扰的",
    "example": "A school of fish disturbed the water.",
    "exampleTranslation": "一群鱼搅动了水面。"
  },
  {
    "word": "dive",
    "phonetic": "/ˈdaɪv/",
    "pos": "v",
    "meaning": "跳水",
    "example": "the dive of a hawk after prey",
    "exampleTranslation": "鹰俯冲捕食"
  },
  {
    "word": "diverse",
    "phonetic": "/daɪˈvɜːs/",
    "pos": "adj",
    "meaning": "不同的, 变化多的",
    "example": "Idris Elba was a diverse hire for the franchise",
    "exampleTranslation": "伊德瑞斯·艾尔巴是该系列电影中一位多元化的选角"
  },
  {
    "word": "divide",
    "phonetic": "/dɪˈvaɪd/",
    "pos": "v",
    "meaning": "分, 划分",
    "example": "Stay on your side of the divide, please.",
    "exampleTranslation": "请待在分界线的你那一侧。"
  },
  {
    "word": "division",
    "phonetic": "/dɪˈvɪʒən/",
    "pos": "n",
    "meaning": "分开, 除法",
    "example": "I've got ten divisions to do for my homework.",
    "exampleTranslation": "我的作业有十道除法题要做。"
  },
  {
    "word": "divorce",
    "phonetic": "/dɪˈvɔːs/",
    "pos": "v",
    "meaning": "离婚, 脱离",
    "example": "Richard obtained a divorce from his wife some years ago, but hasn't returned to the dating scene.",
    "exampleTranslation": "理查德几年前与妻子离婚了，但一直没有重返约会市场。"
  },
  {
    "word": "dizzy",
    "phonetic": "/ˈdɪzi/",
    "pos": "adj",
    "meaning": "头眩目晕的",
    "example": "I stood up too fast and felt dizzy.",
    "exampleTranslation": "我站起来太快，感到头晕。"
  },
  {
    "word": "do",
    "phonetic": "/du/",
    "pos": "",
    "meaning": "(did, done) v. 做, 干",
    "example": "What do you want to do?",
    "exampleTranslation": "(did。"
  },
  {
    "word": "doctor",
    "phonetic": "/ˈdɒktə/",
    "pos": "n",
    "meaning": "医生; 博士",
    "example": "If you still feel unwell tomorrow, see your doctor.",
    "exampleTranslation": "医生; 博士。"
  },
  {
    "word": "document",
    "phonetic": "/ˈdɒkjʊmənt/",
    "pos": "n",
    "meaning": "文件; 文献",
    "example": "He documented each step of the process as he did it, which was good when the investigation occurred.",
    "exampleTranslation": "文件; 文献。"
  },
  {
    "word": "dog",
    "phonetic": "/dɑɡ/",
    "pos": "n",
    "meaning": "狗",
    "example": "The dog barked all night long.",
    "exampleTranslation": "那只狗叫了一整夜。"
  },
  {
    "word": "doll",
    "phonetic": "/dɒl/",
    "pos": "n",
    "meaning": "玩偶",
    "example": "The doll is important.",
    "exampleTranslation": "这个玩偶很重要。"
  },
  {
    "word": "dollar",
    "phonetic": "/dɔlɚ/",
    "pos": "n",
    "meaning": "元，美元",
    "example": "The dollar is important.",
    "exampleTranslation": "这个dollar很重要。"
  },
  {
    "word": "donate",
    "phonetic": "/dəʊˈneɪt/",
    "pos": "v",
    "meaning": "捐赠, 赠予",
    "example": "He donated an etching from his own collection to the new art gallery.",
    "exampleTranslation": "他将自己收藏的一幅蚀刻画捐赠给了新美术馆。"
  },
  {
    "word": "door",
    "phonetic": "/dɔː/",
    "pos": "n",
    "meaning": "门",
    "example": "I knocked on the vice president's door",
    "exampleTranslation": "我敲了副总裁的门。"
  },
  {
    "word": "dot",
    "phonetic": "/dɒt/",
    "pos": "n",
    "meaning": "点, 小点, 圆点",
    "example": "a dot of colour",
    "exampleTranslation": "一点色彩。"
  },
  {
    "word": "double",
    "phonetic": "/ˈdʌb.əl/",
    "pos": "adj",
    "meaning": "两倍的; 双的 n. 两倍",
    "example": "Saddam Hussein was rumored to have many doubles.",
    "exampleTranslation": "据传萨达姆·侯赛因有许多替身。"
  },
  {
    "word": "doubt",
    "phonetic": "/dʌʊt/",
    "pos": "n",
    "meaning": "& v. 怀疑, 疑惑",
    "example": "I have doubts about how to convert this code to JavaScript.",
    "exampleTranslation": "怀疑"
  },
  {
    "word": "down",
    "phonetic": "/daʊn/",
    "pos": "prep",
    "meaning": "沿着, 沿…而下 adv. 向下",
    "example": "I love almost everything about my job. The only down is that I can't take Saturdays off.",
    "exampleTranslation": "我几乎喜欢我工作的所有方面。唯一不好的是我不能在周六休息。"
  },
  {
    "word": "download",
    "phonetic": "/ˈdaʊnˌləʊd/",
    "pos": "n",
    "meaning": "& v. 下载",
    "example": "The download took longer than I expected.",
    "exampleTranslation": "下载"
  },
  {
    "word": "downstairs",
    "phonetic": "/daʊnˈstɛəz/",
    "pos": "adv",
    "meaning": "在楼下; 到楼下",
    "example": "The wind lifted up her skirt and I caught a glimpse of her downstairs.",
    "exampleTranslation": "风掀起了她的裙子，我瞥见了她的内裤。"
  },
  {
    "word": "downtown",
    "phonetic": "/ˌdaʊnˈtaʊn/",
    "pos": "adv",
    "meaning": "在市区,  adj.市区的 n. 城镇中心区",
    "example": "John walked every day to his downtown job.",
    "exampleTranslation": "约翰每天步行去市中心的公司上班。"
  },
  {
    "word": "dozen",
    "phonetic": "/ˈdʌzən/",
    "pos": "n",
    "meaning": "一打, 十二个",
    "example": "Can I have a dozen eggs, please?",
    "exampleTranslation": "请给我一打鸡蛋好吗？"
  },
  {
    "word": "dr",
    "phonetic": "/ˈdɑːktər/",
    "pos": "",
    "meaning": "= Doctor n. 医生; 博士",
    "example": "I need to see Dr. Smith.",
    "exampleTranslation": "我需要to。"
  },
  {
    "word": "draft",
    "phonetic": "/dɹæft/",
    "pos": "n",
    "meaning": "草稿, 草案, 草图",
    "example": "She took a deep draft from the bottle of water.",
    "exampleTranslation": "她深深喝了一大口瓶中的水。"
  },
  {
    "word": "drag",
    "phonetic": "/dɹæɡ/",
    "pos": "v",
    "meaning": "拖; 拽",
    "example": "When designing cars, manufacturers have to take drag into consideration.",
    "exampleTranslation": "拖; 拽。"
  },
  {
    "word": "draw",
    "phonetic": "/drɔː/",
    "pos": "",
    "meaning": "(drew, drawn) v. 绘画; 绘制; 拉, 拖; 提取",
    "example": "She can draw a beautiful picture.",
    "exampleTranslation": "(drew。"
  },
  {
    "word": "drawback",
    "phonetic": "/ˈdɹɔːˌbæk/",
    "pos": "n",
    "meaning": "缺点, 障碍",
    "example": "Poor fuel economy is a common drawback among larger vehicles.",
    "exampleTranslation": "油耗高是大型车辆的常见缺点。"
  },
  {
    "word": "drawer",
    "phonetic": "/dɹɔː(ɹ)/",
    "pos": "n",
    "meaning": "抽屉",
    "example": "This is a drawer.",
    "exampleTranslation": "这是一个抽屉"
  },
  {
    "word": "dream",
    "phonetic": "/driːm/",
    "pos": "",
    "meaning": "(dreamt, dreamt 或-ed, -ed) n.& v. 梦, 梦想",
    "example": "I had a good dream last night.",
    "exampleTranslation": "(dreamt。"
  },
  {
    "word": "dress",
    "phonetic": "/dɹɛs/",
    "pos": "n",
    "meaning": "女服, 连衣裙; 服装; 童装 v. (给...)穿衣",
    "example": "Amy and Mary looked very pretty in their dresses.",
    "exampleTranslation": "艾米和玛丽穿着裙子看起来非常漂亮。"
  },
  {
    "word": "drill",
    "phonetic": "/dɹɪl/",
    "pos": "n",
    "meaning": "钻头; 训练 v. 钻; 训练",
    "example": "Wear safety glasses when operating an electric drill.",
    "exampleTranslation": "操作电钻时要戴护目镜。"
  },
  {
    "word": "drink",
    "phonetic": "/dɹɪŋk/",
    "pos": "n",
    "meaning": "饮料; 喝酒",
    "example": "He drank the water I gave him.",
    "exampleTranslation": "饮料; 喝酒。"
  },
  {
    "word": "driver",
    "phonetic": "/ˈdɹaɪ.və(ɹ)/",
    "pos": "n",
    "meaning": "司机, 驾驶员",
    "example": "I need the driver.",
    "exampleTranslation": "我需要这个司机"
  },
  {
    "word": "drop",
    "phonetic": "/dɹɒp/",
    "pos": "n",
    "meaning": "滴 v. 掉下, 落下",
    "example": "Put three drops of oil into the mixture.",
    "exampleTranslation": "滴  掉下"
  },
  {
    "word": "drug",
    "phonetic": "/dɹʌɡ/",
    "pos": "n",
    "meaning": "药; 毒品",
    "example": "Aspirin is a drug that reduces pain, acts against inflammation and lowers body temperature.",
    "exampleTranslation": "药; 毒品。"
  },
  {
    "word": "drum",
    "phonetic": "/ˈdɹʌm/",
    "pos": "n",
    "meaning": "鼓",
    "example": "Replace the drum unit of your printer.",
    "exampleTranslation": "更换打印机的硒鼓单元。"
  },
  {
    "word": "drunk",
    "phonetic": "/dɹʌŋk/",
    "pos": "adj",
    "meaning": "醉的",
    "example": "He drank the water I gave him.",
    "exampleTranslation": "他喝了我给他的水。"
  },
  {
    "word": "dry",
    "phonetic": "/dɹaɪ/",
    "pos": "v",
    "meaning": "弄干; 擦干 adj. 干的; 干燥的",
    "example": "This towel is still damp: I think it needs another dry.",
    "exampleTranslation": "这条毛巾还是湿的：我觉得需要再晾干一下。"
  },
  {
    "word": "duck",
    "phonetic": "/dʌk/",
    "pos": "n",
    "meaning": "鸭子",
    "example": "I'm just going to duck into the loo for a minute, can you hold my bag?",
    "exampleTranslation": "我要去一下洗手间，你能帮我拿一下包吗？"
  },
  {
    "word": "due",
    "phonetic": "/dʒʉː/",
    "pos": "adj",
    "meaning": "预期的; 应付的",
    "example": "Give him his due — he is a good actor.",
    "exampleTranslation": "公平地说——他是个好演员。"
  },
  {
    "word": "dull",
    "phonetic": "/dəl/",
    "pos": "adj",
    "meaning": "迟钝的, 呆滞的; 单调无味",
    "example": "Years of misuse have dulled the tools.",
    "exampleTranslation": "多年的滥用使这些工具变钝了。"
  },
  {
    "word": "dumpling",
    "phonetic": "/ˈdʌmplɪŋ/",
    "pos": "n",
    "meaning": "饺子",
    "example": "My little dumpling.",
    "exampleTranslation": "我的小宝贝。"
  },
  {
    "word": "during",
    "phonetic": "/ˈdjɔː.ɹɪŋ/",
    "pos": "prep",
    "meaning": "在…期间",
    "example": "I lived with my parents during the 1970s.",
    "exampleTranslation": "我在20世纪70年代与父母同住。"
  },
  {
    "word": "dusk",
    "phonetic": "/dʌsk/",
    "pos": "n",
    "meaning": "黄昏",
    "example": "This is a dusk.",
    "exampleTranslation": "这是一个黄昏"
  },
  {
    "word": "dustbin",
    "phonetic": "/ˈdʌstbɪn/",
    "pos": "n",
    "meaning": "垃圾箱",
    "example": "This is a dustbin.",
    "exampleTranslation": "这是一个垃圾桶。"
  },
  {
    "word": "dusty",
    "phonetic": "/ˈdʌsti/",
    "pos": "adj",
    "meaning": "尘土多的",
    "example": "He seems dusty.",
    "exampleTranslation": "他看起来灰头土脸的。"
  },
  {
    "word": "duty",
    "phonetic": "/ˈdjuːti/",
    "pos": "n",
    "meaning": "责任,  义务",
    "example": "We don't have a duty to keep you here.",
    "exampleTranslation": "我们没有义务留你在这里。"
  },
  {
    "word": "dvd",
    "phonetic": "/ˌdiː viː ˈdiː/",
    "pos": "",
    "meaning": "(digital versatile disk) 数码影碟",
    "example": "Let's watch a DVD tonight.",
    "exampleTranslation": "(digital versatile disk) 数码影碟。"
  },
  {
    "word": "dynamic",
    "phonetic": "/daɪˈnæ.mɪk/",
    "pos": "adj",
    "meaning": "动力的; 有活力的",
    "example": "Watch the dynamic between the husband and wife when they disagree.",
    "exampleTranslation": "观察夫妻意见不合时的互动关系。"
  },
  {
    "word": "dynasty",
    "phonetic": "/ˈdɪnəsti/",
    "pos": "n",
    "meaning": "朝代, 王朝",
    "example": "I need the dynasty.",
    "exampleTranslation": "我需要这个朝代"
  },
  {
    "word": "each",
    "phonetic": "/iːt͡ʃ/",
    "pos": "adj",
    "meaning": "各自的, 每个的, 每一 pron. 每人, 每个, 每件",
    "example": "The apples cost 50 cents each.",
    "exampleTranslation": "这些苹果每个50美分。"
  },
  {
    "word": "eager",
    "phonetic": "/ˈiːɡə/",
    "pos": "adj",
    "meaning": "渴望的, 热切的",
    "example": "I was eager to show my teacher how much I'd learned over the holidays.",
    "exampleTranslation": "我渴望向老师展示我在假期里学到了多少东西。"
  },
  {
    "word": "eagle",
    "phonetic": "/ˈiːɡəl/",
    "pos": "n",
    "meaning": "鹰",
    "example": "The eagle is important.",
    "exampleTranslation": "这个eagle很重要。"
  },
  {
    "word": "ear",
    "phonetic": "/ɪə̯/",
    "pos": "n",
    "meaning": "耳朵",
    "example": "a good ear for music",
    "exampleTranslation": "对音乐有很好的鉴赏力"
  },
  {
    "word": "early",
    "phonetic": "/ˈɜː.li/",
    "pos": "adj",
    "meaning": "早的 adv. 早地",
    "example": "at eleven, we went for an early lunch;  she began reading at an early age;  his mother suffered an early death",
    "exampleTranslation": "早的  早地"
  },
  {
    "word": "earn",
    "phonetic": "/ɜːn/",
    "pos": "v",
    "meaning": "挣得, 赚得",
    "example": "You can have the s'mores: you earned them, clearing the walkway of snow so well.",
    "exampleTranslation": "你可以享用棉花糖夹心饼干：这是你应得的，因为你把走道上的雪清理得这么干净。"
  },
  {
    "word": "earth",
    "phonetic": "/ɜːθ/",
    "pos": "n",
    "meaning": "地球; 土, 泥",
    "example": "This is good earth for growing potatoes.",
    "exampleTranslation": "地球; 土。"
  },
  {
    "word": "earthquake",
    "phonetic": "/ˈɜːθkweɪk/",
    "pos": "n",
    "meaning": "地震",
    "example": "The earthquake is important.",
    "exampleTranslation": "这个earthquake很重要。"
  },
  {
    "word": "east",
    "phonetic": "/iːst/",
    "pos": "adj",
    "meaning": "东方的; 东部的 adv. 在东方;  n.东方; 东部",
    "example": "the east front of a cathedral",
    "exampleTranslation": "大教堂的东侧立面"
  },
  {
    "word": "easter",
    "phonetic": "/ˈiː.stə/",
    "pos": "n",
    "meaning": "复活节",
    "example": "This is a easter.",
    "exampleTranslation": "这是一个复活节。"
  },
  {
    "word": "eastern",
    "phonetic": "/ˈiːstən/",
    "pos": "adj",
    "meaning": "东方的; 东部的",
    "example": "This is eastern.",
    "exampleTranslation": "这是东方的。"
  },
  {
    "word": "easy",
    "phonetic": "/ˈiːzi/",
    "pos": "adj",
    "meaning": "容易的, 不费力的",
    "example": "Now that I know it's taken care of, I can rest easy at night.",
    "exampleTranslation": "既然我知道事情已经处理好了，晚上我就能安心休息了。"
  },
  {
    "word": "eat",
    "phonetic": "/iːt/",
    "pos": "",
    "meaning": "(ate, eaten) v. 吃",
    "example": "I want to eat an apple.",
    "exampleTranslation": "我想吃一个苹果。"
  },
  {
    "word": "ecology",
    "phonetic": "/ɛˈkɒlədʒi/",
    "pos": "n",
    "meaning": "生态学",
    "example": "I need the ecology.",
    "exampleTranslation": "我需要这个生态学"
  },
  {
    "word": "edge",
    "phonetic": "/ɛdʒ/",
    "pos": "n",
    "meaning": "边缘",
    "example": "I have the edge on him.",
    "exampleTranslation": "我比他略胜一筹。"
  },
  {
    "word": "edition",
    "phonetic": "/əˈdɪʃən/",
    "pos": "n",
    "meaning": "版（本）",
    "example": "The first edition was soon sold.",
    "exampleTranslation": "版（本）。"
  },
  {
    "word": "editor",
    "phonetic": "/ˈɛdɪtə/",
    "pos": "n",
    "meaning": "编辑",
    "example": "John Johnson wrote this term paper and the editor was Joan Johnson.",
    "exampleTranslation": "约翰·约翰逊写了这篇学期论文，编辑是琼·约翰逊。"
  },
  {
    "word": "educate",
    "phonetic": "/ˈedʒɘkæet/",
    "pos": "v",
    "meaning": "教育, 培养",
    "example": "Wang said such changes to the Baishui glacier provide the chance to educate visitors about global warming.",
    "exampleTranslation": "王表示，白水冰川的这些变化为教育游客了解全球变暖提供了机会。"
  },
  {
    "word": "educator",
    "phonetic": "/ˈɛdjʊkeɪtə/",
    "pos": "n",
    "meaning": "教育家",
    "example": "I need the educator.",
    "exampleTranslation": "我需要这个教育家"
  },
  {
    "word": "effect",
    "phonetic": "/ɪˈfekt/",
    "pos": "n",
    "meaning": "效果; 作用",
    "example": "I need the effect.",
    "exampleTranslation": "我需要这个效果; 作用"
  },
  {
    "word": "effort",
    "phonetic": "/ˈɛfət/",
    "pos": "n",
    "meaning": "努力, 艰难的尝试",
    "example": "He made a great effort.",
    "exampleTranslation": "他付出了巨大的努力。"
  },
  {
    "word": "egg",
    "phonetic": "/eɪɡ/",
    "pos": "n",
    "meaning": "蛋; 卵",
    "example": "I also determine the minimal amount of egg required to make good mayonnaise.",
    "exampleTranslation": "蛋; 卵。"
  },
  {
    "word": "eggplant",
    "phonetic": "/ˈeɡplænt/",
    "pos": "n",
    "meaning": "茄子",
    "example": "This is a eggplant.",
    "exampleTranslation": "这是一个茄子"
  },
  {
    "word": "either",
    "phonetic": "/ˈaɪð.ə(ɹ)/",
    "pos": "adj",
    "meaning": "任一的  pron. (两方中的) 任一 conj.或者, 也",
    "example": "I don't like him, and I don't like her either.",
    "exampleTranslation": "任一的   两方中的 任一 或者"
  },
  {
    "word": "elder",
    "phonetic": "/ˈeldə/",
    "pos": "n",
    "meaning": "长者; 前辈",
    "example": "We were presented to the village elder.",
    "exampleTranslation": "长者; 前辈。"
  },
  {
    "word": "elect",
    "phonetic": "/iːˈlɛkt/",
    "pos": "v",
    "meaning": "选举",
    "example": "He is the President elect.",
    "exampleTranslation": "他是当选总统。"
  },
  {
    "word": "electric",
    "phonetic": "/əˈlɛktɹɪk/",
    "pos": "adj",
    "meaning": "电的",
    "example": "We had to sit in the dark because the electric was cut off.",
    "exampleTranslation": "我们不得不坐在黑暗中，因为电被切断了。"
  },
  {
    "word": "electrical",
    "phonetic": "/ɪˈlɛktɹɪkəl/",
    "pos": "adj",
    "meaning": "电的; 有关电的",
    "example": "That is electrical.",
    "exampleTranslation": "那是电气的。"
  },
  {
    "word": "electricity",
    "phonetic": "/ɪˌlɛkˈtɹɪsɪti/",
    "pos": "n",
    "meaning": "电; 电流",
    "example": "Opening night for the new production had an electricity unlike other openings.",
    "exampleTranslation": "电; 电流。"
  },
  {
    "word": "electronic",
    "phonetic": "/ɪˌlɛkˈtɹɒn.ɪk/",
    "pos": "adj",
    "meaning": "电子的",
    "example": "electronic music",
    "exampleTranslation": "电子音乐"
  },
  {
    "word": "elegant",
    "phonetic": "/ˈɛl.ə.ɡənt/",
    "pos": "adj",
    "meaning": "文雅的, 端庄的, 雅致的",
    "example": "an elegant solution",
    "exampleTranslation": "一个优雅的解决方案"
  },
  {
    "word": "elephant",
    "phonetic": "/ˈɛləfənt/",
    "pos": "n",
    "meaning": "象",
    "example": "Let's play hide and seek. I'll count. One elephant, two elephant, three elephant...",
    "exampleTranslation": "我们来玩捉迷藏吧。我来数数。一头大象，两头大象，三头大象……"
  },
  {
    "word": "else",
    "phonetic": "/ɛls/",
    "pos": "adv",
    "meaning": "别的, 其它的",
    "example": "The instructor is busy. Can anyone else help me?",
    "exampleTranslation": "教练正忙着。还有其他人能帮我吗？"
  },
  {
    "word": "embarrass",
    "phonetic": "/ɪmˈbæ.ɹəs/",
    "pos": "v",
    "meaning": "使困窘, 使局促不安",
    "example": "The crowd's laughter and jeers embarrassed him.",
    "exampleTranslation": "人群的哄笑和嘲弄让他很尴尬。"
  },
  {
    "word": "embassy",
    "phonetic": "/ˈɛmbəsi/",
    "pos": "n",
    "meaning": "大使馆",
    "example": "The American embassy to France is located in Paris.",
    "exampleTranslation": "美国驻法国大使馆位于巴黎。"
  },
  {
    "word": "emergency",
    "phonetic": "/ɪˈmɝ.dʒən.si/",
    "pos": "n",
    "meaning": "紧急情况或状态",
    "example": "Cardiac arrest is an emergency and if you find someone in cardiac arrest you should call 999 immediately.",
    "exampleTranslation": "心脏骤停是一种紧急情况，如果你发现有人心脏骤停，应立即拨打999。"
  },
  {
    "word": "emperor",
    "phonetic": "/ˈempɘɹɘ/",
    "pos": "n",
    "meaning": "皇帝",
    "example": "The Investiture Controversy was a conflict between the Emperor and the Pope.",
    "exampleTranslation": "叙任权斗争是皇帝与教皇之间的一场冲突。"
  },
  {
    "word": "employ",
    "phonetic": "/ɛmˈplɔɪ/",
    "pos": "v",
    "meaning": "雇用, 用, 使用",
    "example": "The school district has six thousand teachers in its employ.",
    "exampleTranslation": "该学区雇用了六千名教师。"
  },
  {
    "word": "empty",
    "phonetic": "/ˈɛmpti/",
    "pos": "adj",
    "meaning": "空的",
    "example": "Put the empties out to be recycled.",
    "exampleTranslation": "把空瓶子拿出来回收。"
  },
  {
    "word": "encourage",
    "phonetic": "/ɪnˈkʌɹɪdʒ/",
    "pos": "v",
    "meaning": "鼓励",
    "example": "I encouraged him during his race.",
    "exampleTranslation": "我在他比赛时为他加油。"
  },
  {
    "word": "encouragement",
    "phonetic": "/ɪnˈkʌɹɪdʒmənt/",
    "pos": "n",
    "meaning": "鼓励",
    "example": "This is a encouragement.",
    "exampleTranslation": "这是一个鼓励"
  },
  {
    "word": "end",
    "phonetic": "/ɛnd/",
    "pos": "n",
    "meaning": "末尾; 终点; 结束 v. 结束, 终止",
    "example": "At the end of the road, turn left.",
    "exampleTranslation": "在这条路的尽头向左转。"
  },
  {
    "word": "ending",
    "phonetic": "/ˈɛndɪŋ/",
    "pos": "n",
    "meaning": "结局; 结尾, 最后",
    "example": "I need the ending.",
    "exampleTranslation": "我需要这个结局; 结尾"
  },
  {
    "word": "endless",
    "phonetic": "/ˈɛndləs/",
    "pos": "adj",
    "meaning": "无止境的; 没完的",
    "example": "endless time; endless praise",
    "exampleTranslation": "无尽的时间；无尽的赞美"
  },
  {
    "word": "enemy",
    "phonetic": "/ˈɛnəmi/",
    "pos": "n",
    "meaning": "敌人; 敌军",
    "example": "Crush the enemy!",
    "exampleTranslation": "敌人; 敌军。"
  },
  {
    "word": "energetic",
    "phonetic": "/ˌɛnəˈdʒɛtɪk/",
    "pos": "adj",
    "meaning": "精力旺盛的",
    "example": "Cosmic rays are energetic particles from outer space.",
    "exampleTranslation": "宇宙射线是来自外太空的高能粒子。"
  },
  {
    "word": "energy",
    "phonetic": "/ˈɛnəd͡ʒi/",
    "pos": "n",
    "meaning": "精力, 能量",
    "example": "The energy is important.",
    "exampleTranslation": "这个energy很重要。"
  },
  {
    "word": "engine",
    "phonetic": "/end͡ʒən/",
    "pos": "n",
    "meaning": "发动机, 引擎",
    "example": "a graphics engine",
    "exampleTranslation": "一个图形引擎"
  },
  {
    "word": "engineer",
    "phonetic": "/ˌɛnd͡ʒɪˈnɪə/",
    "pos": "n",
    "meaning": "工程师",
    "example": "This is a engineer.",
    "exampleTranslation": "这是一位工程师。"
  },
  {
    "word": "enjoy",
    "phonetic": "/ənˈd͡ʒɔɪ/",
    "pos": "v",
    "meaning": "欣赏; 享受…之乐趣; 喜欢",
    "example": "Enjoy your holidays!   I enjoy dancing.",
    "exampleTranslation": "欣赏; 享受…之乐趣; 喜欢。"
  },
  {
    "word": "enjoyable",
    "phonetic": "/ɛnˈdʒɔɪ.jə.bəl/",
    "pos": "adj",
    "meaning": "愉快的; 有趣的",
    "example": "That was an enjoyable day; I had a lot of fun.",
    "exampleTranslation": "那是愉快的一天；我玩得很开心。"
  },
  {
    "word": "enlarge",
    "phonetic": "/ɪnˈlɑːd͡ʒ/",
    "pos": "v",
    "meaning": "扩大",
    "example": "Knowledge enlarges the mind.",
    "exampleTranslation": "知识开阔思维。"
  },
  {
    "word": "enough",
    "phonetic": "/iˈnʌf/",
    "pos": "n",
    "meaning": "足够; 充足 adj.充分的 adv. 足够地; 充分地",
    "example": "Are you man enough to fight me?",
    "exampleTranslation": "你有胆量和我打一架吗？"
  },
  {
    "word": "enquiry",
    "phonetic": "/ɛnˈkwaɪ.ɹi/",
    "pos": "n",
    "meaning": "询问",
    "example": "scientific enquiry",
    "exampleTranslation": "科学探究"
  },
  {
    "word": "enter",
    "phonetic": "/ˈɛntə(ɹ)/",
    "pos": "v",
    "meaning": "进入",
    "example": "You should knock before you enter, unless you want to see me naked.",
    "exampleTranslation": "进入前你应该敲门，除非你想看到我赤身裸体。"
  },
  {
    "word": "enterprise",
    "phonetic": "/ˈɛntɚˌpɹaɪz/",
    "pos": "n",
    "meaning": "企业, 事业",
    "example": "A micro-enterprise is defined as a business having 5 or fewer employees and a low seed capital.",
    "exampleTranslation": "微型企业被定义为员工不超过五人且启动资金较少的公司。"
  },
  {
    "word": "entertainment",
    "phonetic": "/ˌentərˈteɪnmənt/",
    "pos": "n",
    "meaning": "娱乐",
    "example": "This is a entertainment.",
    "exampleTranslation": "这是一个娱乐"
  },
  {
    "word": "enthusiastic",
    "phonetic": "/ɪnˌθjuːzɪˈæstɪk/",
    "pos": "adj",
    "meaning": "热心的, 热情的",
    "example": "an enthusiastic lover of art",
    "exampleTranslation": "一位艺术的热忱爱好者。"
  },
  {
    "word": "entire",
    "phonetic": "/ənˈtaɪə/",
    "pos": "adj",
    "meaning": "整个的, 全部的",
    "example": "We had the entire building to ourselves for the evening.",
    "exampleTranslation": "那晚整栋楼都归我们使用。"
  },
  {
    "word": "entrance",
    "phonetic": "/ˈɛn.tɹəns/",
    "pos": "n",
    "meaning": "入口; 入场",
    "example": "Her entrance attracted no attention whatsoever.",
    "exampleTranslation": "入口; 入场。"
  },
  {
    "word": "entry",
    "phonetic": "/ˈɛntɹi/",
    "pos": "n",
    "meaning": "进入；条目",
    "example": "Children are allowed entry only if accompanied by an adult.",
    "exampleTranslation": "进入；条目。"
  },
  {
    "word": "envelope",
    "phonetic": "/ˈɒn.və.ləʊp/",
    "pos": "n",
    "meaning": "信封",
    "example": "This is a envelope.",
    "exampleTranslation": "这是一个信封"
  },
  {
    "word": "environment",
    "phonetic": "/-mɪnt/",
    "pos": "n",
    "meaning": "环境",
    "example": "That program uses the Microsoft Windows environment.",
    "exampleTranslation": "那个程序使用微软Windows环境。"
  },
  {
    "word": "envy",
    "phonetic": "/ˈɛnvi/",
    "pos": "v",
    "meaning": "& n. 忌妒; 羡慕",
    "example": "We must envy.",
    "exampleTranslation": "我们必须envy。"
  },
  {
    "word": "equal",
    "phonetic": "/ˈiːkwəl/",
    "pos": "adj",
    "meaning": "平等的 v. 等于",
    "example": "This beer has no equal.",
    "exampleTranslation": "平等的  等于"
  },
  {
    "word": "equality",
    "phonetic": "/ɪˈkwɒl.ɪ.ti/",
    "pos": "n",
    "meaning": "平等",
    "example": "The equality is important.",
    "exampleTranslation": "这个equality很重要。"
  },
  {
    "word": "equip",
    "phonetic": "/ɪˈkwɪp/",
    "pos": "v",
    "meaning": "提供设备; 装备; 配备",
    "example": "We must equip.",
    "exampleTranslation": "提供设备; 装备; 配备。"
  },
  {
    "word": "equipment",
    "phonetic": "/ɪˈkwɪpmənt/",
    "pos": "n",
    "meaning": "装备, 设备",
    "example": "The equipment is important.",
    "exampleTranslation": "这个equipment很重要。"
  },
  {
    "word": "eraser",
    "phonetic": "/ɪˈɹeɪzə/",
    "pos": "n",
    "meaning": "橡皮擦; 黑板擦",
    "example": "I have worn out the eraser on this pencil.",
    "exampleTranslation": "我已经把这支铅笔的橡皮擦用完了。"
  },
  {
    "word": "error",
    "phonetic": "/ˈɛɹə(ɹ)/",
    "pos": "n",
    "meaning": "错误; 差错",
    "example": "Remove that line of code and the script should stop erroring there.",
    "exampleTranslation": "错误; 差错。"
  },
  {
    "word": "erupt",
    "phonetic": "/ɪˈɹʌpt/",
    "pos": "v",
    "meaning": "喷出, 爆发",
    "example": "The volcano erupted, spewing lava across a wide area.",
    "exampleTranslation": "火山爆发，岩浆喷涌覆盖了广阔区域。"
  },
  {
    "word": "escape",
    "phonetic": "/əˈskeɪp/",
    "pos": "n",
    "meaning": "& v.  逃跑; 逃脱",
    "example": "The prisoners made their escape by digging a tunnel.",
    "exampleTranslation": "逃跑"
  },
  {
    "word": "especially",
    "phonetic": "/əˈspɛʃ(ə)li/",
    "pos": "adv",
    "meaning": "特别, 尤其",
    "example": "Invite them all, especially Molly.",
    "exampleTranslation": "邀请所有人，尤其是莫莉。"
  },
  {
    "word": "essay",
    "phonetic": "/ˈɛˌseɪ/",
    "pos": "n",
    "meaning": "散文; 文章; 随笔",
    "example": "I need the essay.",
    "exampleTranslation": "我需要这个散文; 文章; 随笔"
  },
  {
    "word": "europe",
    "phonetic": "/ˈjʊrəp/",
    "pos": "n",
    "meaning": "欧洲",
    "example": "The europe is important.",
    "exampleTranslation": "这个europe很重要。"
  },
  {
    "word": "european",
    "phonetic": "/ˌjʊrəˈpiːən/",
    "pos": "adj",
    "meaning": "欧洲的, 欧洲人的 n. 欧洲人",
    "example": "That is european.",
    "exampleTranslation": "那是欧洲的。"
  },
  {
    "word": "evaluate",
    "phonetic": "/ɨˈvaljʊeɪt/",
    "pos": "v",
    "meaning": "评价, 估计, 求...的值",
    "example": "It will take several years to evaluate the material gathered in the survey.",
    "exampleTranslation": "评估调查中收集的材料需要数年时间。"
  },
  {
    "word": "even",
    "phonetic": "/ˈiːvən/",
    "pos": "adv",
    "meaning": "甚至, 连（…都）; 更",
    "example": "So let's see. There are two evens here and three odds.",
    "exampleTranslation": "那么来看看，这里有两个偶数和三个奇数。"
  },
  {
    "word": "evening",
    "phonetic": "/ˈivnɪŋ/",
    "pos": "n",
    "meaning": "傍晚, 晚上",
    "example": "It was the evening of the Roman Empire.",
    "exampleTranslation": "那是罗马帝国的黄昏。"
  },
  {
    "word": "event",
    "phonetic": "/əˈvɛnt/",
    "pos": "n",
    "meaning": "事件, 大事",
    "example": "I went to an event in San Francisco last week.",
    "exampleTranslation": "我上周去了旧金山的一个活动。"
  },
  {
    "word": "eventually",
    "phonetic": "/ɪ.ˈvɛn.tjʊ.li/",
    "pos": "adv",
    "meaning": "最终地",
    "example": "Eventually, all prime numbers are odd.",
    "exampleTranslation": "最终，所有质数都是奇数。"
  },
  {
    "word": "ever",
    "phonetic": "/ˈɛvə/",
    "pos": "adv",
    "meaning": "曾经, 永远, 不断地, 在任何时候, 究竟",
    "example": "It was ever thus.",
    "exampleTranslation": "历来如此。"
  },
  {
    "word": "every",
    "phonetic": "/ˈevri/",
    "pos": "adj",
    "meaning": "每一,  每个的",
    "example": "He seems every.",
    "exampleTranslation": "他似乎总是这样。"
  },
  {
    "word": "everybody",
    "phonetic": "/ˈɛvɹibɒdi/",
    "pos": "pron",
    "meaning": "每人, 人人",
    "example": "everybody is my friend.",
    "exampleTranslation": "每个人都是我的朋友。"
  },
  {
    "word": "everyday",
    "phonetic": "/ˈɛvɹiˌdeɪ/",
    "pos": "adj",
    "meaning": "每日的; 日常的",
    "example": "That is everyday.",
    "exampleTranslation": "那是日常的。"
  },
  {
    "word": "everyone",
    "phonetic": "/ˈɛv.ɹi.wʌn/",
    "pos": "pron",
    "meaning": "每人, 人人",
    "example": "everyone is my friend.",
    "exampleTranslation": "每个人都是我的朋友。"
  },
  {
    "word": "everything",
    "phonetic": "/ˈɛvɹiθɪŋ/",
    "pos": "pron",
    "meaning": "每件事, 事事",
    "example": "I checked the list again and everything is done.",
    "exampleTranslation": "我又核对了一遍清单，所有事情都完成了。"
  },
  {
    "word": "everywhere",
    "phonetic": "/ɛv.ɹi.(h)weə(ɹ)/",
    "pos": "adv",
    "meaning": "到处",
    "example": "He delivers the mail everywhere on this street.",
    "exampleTranslation": "他在这条街上到处送邮件。"
  },
  {
    "word": "evidence",
    "phonetic": "/ˈɛvəɾəns/",
    "pos": "n",
    "meaning": "证据, 证物",
    "example": "There is no evidence that anyone was here earlier.",
    "exampleTranslation": "没有证据表明之前有人来过这里。"
  },
  {
    "word": "evident",
    "phonetic": "/ˈɛ.vɪ.dənt/",
    "pos": "adj",
    "meaning": "明显的, 显然的",
    "example": "It was evident she was angry, after she slammed the door.",
    "exampleTranslation": "她摔门之后，显然很生气。"
  },
  {
    "word": "evolution",
    "phonetic": "/ˈɛvəluːʃ(ə)n/",
    "pos": "n",
    "meaning": "进展, 发展, 演变, 进化",
    "example": "The evolution is important.",
    "exampleTranslation": "这个evolution很重要。"
  },
  {
    "word": "exact",
    "phonetic": "/ɪɡˈzækt/",
    "pos": "adj",
    "meaning": ".精确的, 准确的,",
    "example": "to exact tribute, fees, or obedience from someone",
    "exampleTranslation": "向某人强征贡品、费用或要求服从"
  },
  {
    "word": "exam",
    "phonetic": "/ɪɡˈzæm/",
    "pos": "",
    "meaning": "= examination n. 考试, 测试; 检查; 审查",
    "example": "I have an English exam tomorrow.",
    "exampleTranslation": "=   考试"
  },
  {
    "word": "examine",
    "phonetic": "/ɪɡˈzæmɪn/",
    "pos": "v",
    "meaning": "检查; 诊察",
    "example": "He examined the crime scene for clues.",
    "exampleTranslation": "检查; 诊察。"
  },
  {
    "word": "example",
    "phonetic": "/əɡˈzæmpl̩/",
    "pos": "n",
    "meaning": "例子; 榜样",
    "example": "I need the example.",
    "exampleTranslation": "我需要这个例子; 榜样"
  },
  {
    "word": "excellent",
    "phonetic": "/ˈɛksələnt/",
    "pos": "adj",
    "meaning": "极好的, 优秀的",
    "example": "Bill and Ted had an excellent adventure last week in preparation of their history exam.",
    "exampleTranslation": "比尔和泰德上周为准备历史考试经历了一次极棒的冒险。"
  },
  {
    "word": "except",
    "phonetic": "/ɪkˈsɛpt/",
    "pos": "prep",
    "meaning": "除…之外",
    "example": "to except to a witness or his testimony",
    "exampleTranslation": "对证人或其证词提出异议"
  },
  {
    "word": "exchange",
    "phonetic": "/ɛksˈtʃeɪndʒ/",
    "pos": "n",
    "meaning": "交换, 掉换; 交流",
    "example": "All in all, it was an even exchange.",
    "exampleTranslation": "总而言之，这是一场公平的交易。"
  },
  {
    "word": "excite",
    "phonetic": "/ɪkˈsaɪt/",
    "pos": "v",
    "meaning": "使兴奋, 使激动",
    "example": "The fireworks which opened the festivities excited anyone present.",
    "exampleTranslation": "拉开庆典序幕的烟花让在场的每个人都兴奋不已。"
  },
  {
    "word": "excuse",
    "phonetic": "/ɪkˈskjuːs/",
    "pos": "n",
    "meaning": "借口; 辩解 v.  原谅; 宽恕",
    "example": "Tell me why you were late – and I don't want to hear any excuses!",
    "exampleTranslation": "告诉我你为什么迟到——我不想听任何借口！"
  },
  {
    "word": "exercise",
    "phonetic": "/ˈɛk.sə.saɪz/",
    "pos": "n",
    "meaning": "锻炼, 做操; 练习, 习题 v.  锻炼",
    "example": "The teacher told us that the next exercise is to write an essay.",
    "exampleTranslation": "老师告诉我们下一个练习是写一篇作文。"
  },
  {
    "word": "exhibition",
    "phonetic": "/ɛksɪˈbɪʃən/",
    "pos": "n",
    "meaning": "展览; 展览会",
    "example": "There was an art exhibition on in the town hall.",
    "exampleTranslation": "市政厅里正在举办一场艺术展览。"
  },
  {
    "word": "exist",
    "phonetic": "/ɪɡˈzɪst/",
    "pos": "v",
    "meaning": "存在",
    "example": "We must exist.",
    "exampleTranslation": "我们必须存在。"
  },
  {
    "word": "existence",
    "phonetic": "/ɛɡ.ˈzɪs.təns/",
    "pos": "n",
    "meaning": "存在; 生存; 存在物",
    "example": "In order to destroy evil, we must first acknowledge its existence.",
    "exampleTranslation": "存在; 生存; 存在物。"
  },
  {
    "word": "exit",
    "phonetic": "/ˈɛksɪt/",
    "pos": "n",
    "meaning": "出口, 太平门",
    "example": "He made his exit at the opportune time.",
    "exampleTranslation": "他在恰当的时机离开了。"
  },
  {
    "word": "expand",
    "phonetic": "/ɛkˈspænd/",
    "pos": "v",
    "meaning": "使膨胀, 扩张",
    "example": "You can expand this compact umbrella to cover a large table.",
    "exampleTranslation": "你可以把这把紧凑的伞展开，罩住一张大桌子。"
  },
  {
    "word": "expect",
    "phonetic": "/ɛkˈspɛkt/",
    "pos": "v",
    "meaning": "预料; 盼望; 认为",
    "example": "He never expected to be discovered.",
    "exampleTranslation": "预料; 盼望; 认为。"
  },
  {
    "word": "expectation",
    "phonetic": "/ɛkspɛkˈteɪʃən/",
    "pos": "n",
    "meaning": "预料; 期望",
    "example": "I need the expectation.",
    "exampleTranslation": "我需要这个预料; 期望"
  },
  {
    "word": "expedition",
    "phonetic": "/ˌekspəˈdɪʃn/",
    "pos": "n",
    "meaning": "远征(队); 探险(队)",
    "example": "This is a expedition.",
    "exampleTranslation": "这是一个远征(队); 探险(队)"
  },
  {
    "word": "expense",
    "phonetic": "/ɪkˈspɛns/",
    "pos": "n",
    "meaning": "消费; 支出",
    "example": "Buying the car was a big expense, but will be worth it in the long run.",
    "exampleTranslation": "消费; 支出。"
  },
  {
    "word": "expensive",
    "phonetic": "/ɛkˈspɛnsɪv/",
    "pos": "adj",
    "meaning": "昂贵的",
    "example": "an unnecessarily expensive choice of algorithm",
    "exampleTranslation": "一种不必要的昂贵算法选择"
  },
  {
    "word": "experience",
    "phonetic": "/ɪkˈspɪə.ɹɪəns/",
    "pos": "n",
    "meaning": "经验; 经历",
    "example": "It was an experience he would not soon forget.",
    "exampleTranslation": "经验; 经历。"
  },
  {
    "word": "experiment",
    "phonetic": "/ɛk.ˈspɛ.ɹɪ.mənt/",
    "pos": "n",
    "meaning": "实验",
    "example": "The experiment is important.",
    "exampleTranslation": "这个experiment很重要。"
  },
  {
    "word": "expert",
    "phonetic": "/ˈɛkspəːt/",
    "pos": "n",
    "meaning": "专家, 能手",
    "example": "We called in several experts on the subject, but they couldn't reach an agreement.",
    "exampleTranslation": "我们请来了几位这方面的专家，但他们无法达成一致。"
  },
  {
    "word": "explain",
    "phonetic": "/ɛkˈspleɪn/",
    "pos": "v",
    "meaning": "解释, 说明",
    "example": "To explain a chapter of the Bible.",
    "exampleTranslation": "解释《圣经》的一个章节。"
  },
  {
    "word": "explanation",
    "phonetic": "/ˌɛkspləˈneɪʃən/",
    "pos": "n",
    "meaning": "解释, 说明",
    "example": "The explanation was long and drawn-out.",
    "exampleTranslation": "解释冗长而拖沓。"
  },
  {
    "word": "explicit",
    "phonetic": "/ɪkˈsplɪsɪt/",
    "pos": "adj",
    "meaning": "外在的, 清楚的, 直率的",
    "example": "I gave explicit instructions for him to stay here, but he followed me, anyway.",
    "exampleTranslation": "我明确指示他留在这里，但他还是跟着我来了。"
  },
  {
    "word": "explode",
    "phonetic": "/ɪkˈspləʊd/",
    "pos": "v",
    "meaning": "（使）爆炸",
    "example": "The assassin exploded the car by means of a car bomb.",
    "exampleTranslation": "（使）爆炸。"
  },
  {
    "word": "explore",
    "phonetic": "/ɪkˈsplɔː/",
    "pos": "v",
    "meaning": "探险, 探测, 探究",
    "example": "The committee has been exploring alternative solutions to the problem at hand.",
    "exampleTranslation": "委员会一直在探索针对当前问题的替代解决方案。"
  },
  {
    "word": "export",
    "phonetic": "/ˈɛks.pɔːt/",
    "pos": "v",
    "meaning": "输出, 出口",
    "example": "Oil is the main export of Saudi Arabia.",
    "exampleTranslation": "石油是沙特阿拉伯的主要出口产品。"
  },
  {
    "word": "expose",
    "phonetic": "/ɪkˈspəʊz/",
    "pos": "v",
    "meaning": "揭露",
    "example": "I expose it.",
    "exampleTranslation": "我揭露了它。"
  },
  {
    "word": "express",
    "phonetic": "/ɛk.ˈspɹɛs/",
    "pos": "v",
    "meaning": "表达; 表示 n. 快车, 特快专递",
    "example": "I took the express into town.",
    "exampleTranslation": "我乘快车进城。"
  },
  {
    "word": "extension",
    "phonetic": "/ɪkˈstɛnʃən/",
    "pos": "n",
    "meaning": "延伸, 伸展",
    "example": "Files with the .txt extension usually contain text.",
    "exampleTranslation": "扩展名为.txt的文件通常包含文本。"
  },
  {
    "word": "extra",
    "phonetic": "/ˈɛkstɹə/",
    "pos": "adj",
    "meaning": "额外的, 外加的",
    "example": "Extra, extra! Read all about it!",
    "exampleTranslation": "号外，号外！快来看最新消息！"
  },
  {
    "word": "extraordinary",
    "phonetic": "/ɪksˈtɹɔː(ɹ)dɪnəɹi/",
    "pos": "adj",
    "meaning": "离奇的; 使人惊奇的",
    "example": "an extraordinary poet",
    "exampleTranslation": "一位非凡的诗人"
  },
  {
    "word": "extreme",
    "phonetic": "/ɛkˈstɹiːm/",
    "pos": "adj",
    "meaning": "极端的, 极度的",
    "example": "extremes of temperature",
    "exampleTranslation": "温度的极端变化"
  },
  {
    "word": "eye",
    "phonetic": "/aɪ/",
    "pos": "n",
    "meaning": "眼睛",
    "example": "Bright lights really hurt my eyes.",
    "exampleTranslation": "明亮的灯光真的很伤我的眼睛。"
  },
  {
    "word": "eyesight",
    "phonetic": "/ˈaɪˌsaɪt/",
    "pos": "n",
    "meaning": "视力; 视觉",
    "example": "This is a eyesight.",
    "exampleTranslation": "这是一个视力; 视觉"
  },
  {
    "word": "face",
    "phonetic": "/feɪs/",
    "pos": "n",
    "meaning": "脸 v. 面向; 面对",
    "example": "That girl has a pretty face.",
    "exampleTranslation": "脸  面向"
  },
  {
    "word": "facial",
    "phonetic": "/ˈfeɪʃəl/",
    "pos": "adj",
    "meaning": "面部的",
    "example": "He gave his wife a creamy facial.",
    "exampleTranslation": "他给妻子做了个滋润的面部护理。"
  },
  {
    "word": "fact",
    "phonetic": "/fækt/",
    "pos": "n",
    "meaning": "事实, 现实",
    "example": "In this story, the Gettysburg Address is a fact, but the rest is fiction.",
    "exampleTranslation": "在这个故事中，葛底斯堡演说是事实，其余都是虚构的。"
  },
  {
    "word": "factory",
    "phonetic": "/ˈfæktəɹi/",
    "pos": "n",
    "meaning": "工厂",
    "example": "chicken factory; pig factory",
    "exampleTranslation": "养鸡场；养猪场"
  },
  {
    "word": "fade",
    "phonetic": "/feɪd/",
    "pos": "v",
    "meaning": "褪色",
    "example": "The milkman's whistling faded into the distance.",
    "exampleTranslation": "送奶工的口哨声渐渐消失在远处。"
  },
  {
    "word": "fail",
    "phonetic": "/feɪl/",
    "pos": "v",
    "meaning": "失败; 不及格; 衰退",
    "example": "The project was full of fail.",
    "exampleTranslation": "失败; 不及格; 衰退。"
  },
  {
    "word": "failure",
    "phonetic": "/ˈfeɪl.jɚ/",
    "pos": "n",
    "meaning": "失败；失败者；失败的事；",
    "example": "The failure is important.",
    "exampleTranslation": "这个failure很重要。"
  },
  {
    "word": "faith",
    "phonetic": "/feɪθ/",
    "pos": "n",
    "meaning": "信仰; 信念",
    "example": "I have faith in the goodness of my fellow man.",
    "exampleTranslation": "信仰; 信念。"
  },
  {
    "word": "false",
    "phonetic": "/fɒls/",
    "pos": "adj",
    "meaning": "不正确的; 假的",
    "example": "The student received a failing grade for circling every true and false on her quiz.",
    "exampleTranslation": "这名学生因为在测验中把所有判断题都圈选为对和错而得了不及格。"
  },
  {
    "word": "familiar",
    "phonetic": "/fəˈmɪl.i.ə/",
    "pos": "adj",
    "meaning": "熟悉的",
    "example": "The witch’s familiar was a black cat.",
    "exampleTranslation": "女巫的使魔是一只黑猫。"
  },
  {
    "word": "family",
    "phonetic": "/ˈfɛm(ɘ)li/",
    "pos": "n",
    "meaning": "家庭, 家族, 家属, 亲属, 子女",
    "example": "Our family lives in town.",
    "exampleTranslation": "我们家住在城里。"
  },
  {
    "word": "famous",
    "phonetic": "/ˈfeɪməs/",
    "pos": "adj",
    "meaning": "著名的",
    "example": "Some people are only famous within their city.",
    "exampleTranslation": "有些人只在他们的城市里出名。"
  },
  {
    "word": "fan",
    "phonetic": "/fæn/",
    "pos": "n",
    "meaning": "迷; 爱好者；风扇",
    "example": "We enjoyed standing at the edge of the cliff, being fanned by the wind.",
    "exampleTranslation": "我们喜欢站在悬崖边，让风吹拂着我们。"
  },
  {
    "word": "fancy",
    "phonetic": "/ˈfænsi/",
    "pos": "adj",
    "meaning": "奇特的, 异样的 v. 想象, 设想 n.爱好, 想象力",
    "example": "He seems fancy.",
    "exampleTranslation": "他看起来挺讲究的。"
  },
  {
    "word": "fantastic",
    "phonetic": "/fænˈtæstɪk/",
    "pos": "adj",
    "meaning": "奇特的； (口语)极好的, 美妙的, 很棒的",
    "example": "He told fantastic stories of dragons and goblins.",
    "exampleTranslation": "奇特的； (口语)极好的。"
  },
  {
    "word": "fantasy",
    "phonetic": "/ˈfæntəsi/",
    "pos": "n",
    "meaning": "幻想, 梦想",
    "example": "This is a fantasy.",
    "exampleTranslation": "这是一个幻想"
  },
  {
    "word": "far",
    "phonetic": "/fɑːr/",
    "pos": "",
    "meaning": "(farther/ further; farthest/ furthest) adj.& adv. 远的;",
    "example": "The school is very far from here.",
    "exampleTranslation": "/ "
  },
  {
    "word": "fare",
    "phonetic": "/fɛə(ɹ)/",
    "pos": "n",
    "meaning": "费用, 票（价）",
    "example": "I need the fare.",
    "exampleTranslation": "我需要这个费用"
  },
  {
    "word": "farm",
    "phonetic": "/fɑːɹm/",
    "pos": "n",
    "meaning": "农场; 农庄",
    "example": "antenna farm",
    "exampleTranslation": "农场; 农庄。"
  },
  {
    "word": "farmer",
    "phonetic": "/fɑːmə/",
    "pos": "n",
    "meaning": "农民",
    "example": "a farmer of the revenues",
    "exampleTranslation": "一位税务包收人"
  },
  {
    "word": "fast",
    "phonetic": "/fɑːst/",
    "pos": "adj",
    "meaning": "快的, 迅速的; 紧密的 adv. 快地, 紧密地",
    "example": "That rope is dangerously loose. Make it fast!",
    "exampleTranslation": "那根绳子松得很危险。把它系紧！"
  },
  {
    "word": "fasten",
    "phonetic": "/ˈfɑːsn̩/",
    "pos": "v",
    "meaning": "扎牢; 扣住",
    "example": "Can you fasten these boards together with some nails?",
    "exampleTranslation": "扎牢; 扣住。"
  },
  {
    "word": "fat",
    "phonetic": "/fæt/",
    "pos": "n",
    "meaning": "脂肪 adj. 胖的; 肥的",
    "example": "We need to trim the fat in this company",
    "exampleTranslation": "脂肪  胖的"
  },
  {
    "word": "father",
    "phonetic": "/ˈfaːðə/",
    "pos": "n",
    "meaning": "父亲",
    "example": "My father was a strong influence on me.",
    "exampleTranslation": "父亲对我影响深远。"
  },
  {
    "word": "fault",
    "phonetic": "/fɒlt/",
    "pos": "n",
    "meaning": "缺点, 毛病",
    "example": "No! This is my fault, not yours.",
    "exampleTranslation": "不！这是我的错，不是你的。"
  },
  {
    "word": "favour",
    "phonetic": "/ˈfeɪvər/",
    "pos": "",
    "meaning": "(favor) n. 恩惠; 好意; 帮助",
    "example": "Can you do me a favour?",
    "exampleTranslation": "恩惠"
  },
  {
    "word": "favourite",
    "phonetic": "/ˈfeɪvərɪt/",
    "pos": "",
    "meaning": "(favorite) adj. 喜爱的 n. 特别喜爱的人（或物）",
    "example": "What is your favourite food?",
    "exampleTranslation": "喜爱的  特别喜爱的人（或物）"
  },
  {
    "word": "fax",
    "phonetic": "/fæks/",
    "pos": "n",
    "meaning": "传真",
    "example": "I need the fax.",
    "exampleTranslation": "我需要这个传真"
  },
  {
    "word": "fear",
    "phonetic": "/fɪə/",
    "pos": "n",
    "meaning": "害怕; 恐惧; 担忧",
    "example": "He was struck by fear on seeing the snake.",
    "exampleTranslation": "害怕; 恐惧; 担忧。"
  },
  {
    "word": "feast",
    "phonetic": "/fiːst/",
    "pos": "n",
    "meaning": "宴会, 酒席",
    "example": "We had a feast to celebrate the harvest.",
    "exampleTranslation": "我们设宴庆祝丰收。"
  },
  {
    "word": "feather",
    "phonetic": "/ˈfɛð.ə(ɹ)/",
    "pos": "n",
    "meaning": "羽毛",
    "example": "The stylist feathered my hair.",
    "exampleTranslation": "发型师把我的头发修剪出层次。"
  },
  {
    "word": "federal",
    "phonetic": "/ˈfɛdəɹəl/",
    "pos": "adj",
    "meaning": "中央的; 联邦的",
    "example": "That is federal.",
    "exampleTranslation": "那是联邦事务。"
  },
  {
    "word": "fee",
    "phonetic": "/fiː/",
    "pos": "n",
    "meaning": "费, 费用",
    "example": "The fee is important.",
    "exampleTranslation": "这个fee很重要。"
  },
  {
    "word": "feed",
    "phonetic": "/fiːd/",
    "pos": "",
    "meaning": "(fed, fed) v. 喂（养）; 饲（养）",
    "example": "Don't forget to feed the cat.",
    "exampleTranslation": "(fed。"
  },
  {
    "word": "feel",
    "phonetic": "/fiːl/",
    "pos": "",
    "meaning": "(felt, felt) v.& link 感觉, 觉得; 摸, 触",
    "example": "I feel very happy today.",
    "exampleTranslation": "(felt。"
  },
  {
    "word": "feeling",
    "phonetic": "/ˈfiːlɪŋ/",
    "pos": "n",
    "meaning": "感情; 感觉",
    "example": "Feel my wrath!",
    "exampleTranslation": "感情; 感觉。"
  },
  {
    "word": "fellow",
    "phonetic": "/ˈfɛləʊ/",
    "pos": "n",
    "meaning": "同伴; 伙伴",
    "example": "Roger and his fellow workers are to go on strike.",
    "exampleTranslation": "同伴; 伙伴。"
  },
  {
    "word": "female",
    "phonetic": "/ˈfiː.meɪl/",
    "pos": "adj",
    "meaning": "女的; 女性的; 雌性的",
    "example": "female authors, the leading male and female artists, a female bird cooing at a male, intersex female patients, a trans female vlogger",
    "exampleTranslation": "女的; 女性的; 雌性的。"
  },
  {
    "word": "fence",
    "phonetic": "/fɛns/",
    "pos": "n",
    "meaning": "栅栏; 围栏; 篱笆",
    "example": "The fence is important.",
    "exampleTranslation": "这个fence很重要。"
  },
  {
    "word": "ferry",
    "phonetic": "/ˈfɛɹɪ/",
    "pos": "n",
    "meaning": "渡船",
    "example": "Trucks plowed through the water to ferry flood victims to safety.",
    "exampleTranslation": "卡车涉水而行，将洪水灾民转移到安全地带。"
  },
  {
    "word": "festival",
    "phonetic": "/ˈfɛstəvəl/",
    "pos": "adj",
    "meaning": "节日的, 喜庆的",
    "example": "That is festival.",
    "exampleTranslation": "那是节庆活动。"
  },
  {
    "word": "fetch",
    "phonetic": "/fɛtʃ/",
    "pos": "v",
    "meaning": "（去）取（物）来,（去）带（人）来",
    "example": "If you put some new tyres on it, and clean it up a bit, the car should fetch about $5,000",
    "exampleTranslation": "（去）取（物）来。"
  },
  {
    "word": "few",
    "phonetic": "/fjuː/",
    "pos": "pron",
    "meaning": "不多; 少数 adj. 不多的; 少数的",
    "example": "Many are called, but few are chosen.",
    "exampleTranslation": "被召的人多，选上的人少。"
  },
  {
    "word": "fibre",
    "phonetic": "/ˈfaɪbər/",
    "pos": "",
    "meaning": "(fiber) n. 纤维",
    "example": "Vegetables are full of fibre.",
    "exampleTranslation": "纤维"
  },
  {
    "word": "fiction",
    "phonetic": "/ˈfɪk.ʃən/",
    "pos": "n",
    "meaning": "虚构, 编造, 小说",
    "example": "I am a great reader of fiction.",
    "exampleTranslation": "我是个酷爱读小说的人。"
  },
  {
    "word": "field",
    "phonetic": "/fiːld/",
    "pos": "n",
    "meaning": "田地; 牧场; 场地",
    "example": "There are several species of wild flowers growing in this field.",
    "exampleTranslation": "田地; 牧场; 场地。"
  },
  {
    "word": "fierce",
    "phonetic": "/fɪəs/",
    "pos": "adj",
    "meaning": ".凶猛的; 猛烈的",
    "example": "A fierce storm battered the coast.",
    "exampleTranslation": "猛烈的暴风雨袭击了海岸。"
  },
  {
    "word": "fight",
    "phonetic": "/fʌɪt/",
    "pos": "n",
    "meaning": "打仗（架）, 争论",
    "example": "A wounded animal will fight like a maniac, relentless, savage and murderous.",
    "exampleTranslation": "打仗（架）。"
  },
  {
    "word": "figure",
    "phonetic": "/ˈfɪɡjɚ/",
    "pos": "n",
    "meaning": "数字; 图形; 身型; 人物 v. 演算；认为; 判断",
    "example": "a figure in bronze; a figure cut in marble",
    "exampleTranslation": "青铜雕像；大理石雕像"
  },
  {
    "word": "file",
    "phonetic": "/faɪl/",
    "pos": "n",
    "meaning": "文件, 档案, 文件夹",
    "example": "I'm going to delete these unwanted files to free up some disk space.",
    "exampleTranslation": "我要删除这些不需要的文件以释放磁盘空间。"
  },
  {
    "word": "fill",
    "phonetic": "/fɪl/",
    "pos": "v",
    "meaning": "填空, 装满",
    "example": "the bucket filled with rain;  the sails fill with wind",
    "exampleTranslation": "桶里积满了雨水；船帆鼓满了风"
  },
  {
    "word": "film",
    "phonetic": "/ˈfɪlm̩/",
    "pos": "n",
    "meaning": "电影; 影片; 胶卷 v. 拍摄, 把…拍成电影",
    "example": "a clear plastic film for wrapping food",
    "exampleTranslation": "用于包裹食物的透明塑料薄膜"
  },
  {
    "word": "final",
    "phonetic": "/ˈfaɪ.nəl/",
    "pos": "adj",
    "meaning": "最后的; 终极的",
    "example": "final solution;   the final day of a school term",
    "exampleTranslation": "最终解决方案；学期最后一天"
  },
  {
    "word": "finance",
    "phonetic": "/faɪˈnæns/",
    "pos": "n",
    "meaning": "财政, 金融, 财政学",
    "example": "Who's really in charge of a democracy's finances?",
    "exampleTranslation": "民主国家的财政究竟由谁掌控？"
  },
  {
    "word": "find",
    "phonetic": "/faɪnd/",
    "pos": "",
    "meaning": "(found, found) v. 找到, 发现, 感到",
    "example": "I cannot find my keys.",
    "exampleTranslation": "(found。"
  },
  {
    "word": "finger",
    "phonetic": "/ˈfɪŋəɹ/",
    "pos": "n",
    "meaning": "手指",
    "example": "Humans have two hands and ten fingers. Each hand has one thumb and four fingers.",
    "exampleTranslation": "人类有两只手和十根手指。每只手有一根拇指和四根手指。"
  },
  {
    "word": "fingernail",
    "phonetic": "/ˈfɪŋɡɚˌneɪl/",
    "pos": "n",
    "meaning": "指甲",
    "example": "I need the fingernail.",
    "exampleTranslation": "我需要这个指甲"
  },
  {
    "word": "finish",
    "phonetic": "/ˈfɪnɪʃ/",
    "pos": "v",
    "meaning": "结束; 做完",
    "example": "The car's finish was so shiny and new.",
    "exampleTranslation": "结束; 做完。"
  },
  {
    "word": "fire",
    "phonetic": "/ˈfɑeə(ɹ)/",
    "pos": "n",
    "meaning": "火; 火炉; 火灾 v. 开火, 开（枪, 炮等）",
    "example": "We sat about the fire singing songs and telling tales.",
    "exampleTranslation": "我们围坐在火堆旁唱歌讲故事。"
  },
  {
    "word": "fireworks",
    "phonetic": "/ˈfaɪ̯.ə.wɜːks/",
    "pos": "n",
    "meaning": "焰火",
    "example": "Commercial firework displays are commonly launched from boats or other vessels",
    "exampleTranslation": "商业烟花表演通常从船只或其他船舶上发射。"
  },
  {
    "word": "fish",
    "phonetic": "/fɪʃ/",
    "pos": "n",
    "meaning": "鱼; 鱼肉 v. 钓鱼; 捕鱼",
    "example": "Salmon is a fish.",
    "exampleTranslation": "鲑鱼是一种鱼类。"
  },
  {
    "word": "fisherman",
    "phonetic": "/ˈfɪʃəmən/",
    "pos": "n",
    "meaning": "渔民",
    "example": "The fisherman is important.",
    "exampleTranslation": "这个fisherman很重要。"
  },
  {
    "word": "fist",
    "phonetic": "/fɪst/",
    "pos": "n",
    "meaning": "拳(头)",
    "example": "The boxer's fists rained down on his opponent in the last round.",
    "exampleTranslation": "拳(头)。"
  },
  {
    "word": "fit",
    "phonetic": "/fɪt/",
    "pos": "adj",
    "meaning": "健康的, 适合的 v.（使）适合, 安装",
    "example": "Since he put on weight, his jeans have been a tight fit.",
    "exampleTranslation": "自从他体重增加后，他的牛仔裤就变得很紧身。"
  },
  {
    "word": "fix",
    "phonetic": "/ˈfɪks/",
    "pos": "v",
    "meaning": "修理; 安装; 确定, 凝视, 牢记",
    "example": "That plumber's fix is much better than the first one's.",
    "exampleTranslation": "修理; 安装; 确定。"
  },
  {
    "word": "flag",
    "phonetic": "/flæɡ/",
    "pos": "n",
    "meaning": "旗; 标志",
    "example": "This is a flag.",
    "exampleTranslation": "这是一个旗; 标志"
  },
  {
    "word": "flame",
    "phonetic": "/fleɪm/",
    "pos": "n",
    "meaning": "火焰, 光辉",
    "example": "The cello has a two-piece back with a beautiful narrow flame.",
    "exampleTranslation": "大提琴的背板由两块木板拼接而成，带有美丽的细密火焰纹。"
  },
  {
    "word": "flash",
    "phonetic": "/flæʃ/",
    "pos": "n",
    "meaning": "闪; 闪光; 转瞬间",
    "example": "I just got my first commando flash.",
    "exampleTranslation": "闪; 闪光; 转瞬间。"
  },
  {
    "word": "flashlight",
    "phonetic": "/ˈflæʃˌlaɪt/",
    "pos": "n",
    "meaning": "手电",
    "example": "I need the flashlight.",
    "exampleTranslation": "我需要这个手电"
  },
  {
    "word": "flee",
    "phonetic": "/fliː/",
    "pos": "",
    "meaning": "(fled, fled) v. 逃走; 逃跑",
    "example": "The thieves tried to flee.",
    "exampleTranslation": "(fled。"
  },
  {
    "word": "flesh",
    "phonetic": "/flɛʃ/",
    "pos": "n",
    "meaning": "肉",
    "example": "I need the flesh.",
    "exampleTranslation": "我需要这个肉"
  },
  {
    "word": "flexible",
    "phonetic": "/ˈflɛk.sə.bəl/",
    "pos": "adj",
    "meaning": "灵活的; 有伸缩性的",
    "example": "This was a principle more flexible to their purpose. -Rogers.",
    "exampleTranslation": "这条原则对他们的目标来说更为灵活。——罗杰斯"
  },
  {
    "word": "flight",
    "phonetic": "/flaɪt/",
    "pos": "n",
    "meaning": "航班；楼梯的一段 v. 成群飞行, 迁徙",
    "example": "Most birds are capable of flight.",
    "exampleTranslation": "大多数鸟类都具备飞行能力。"
  },
  {
    "word": "float",
    "phonetic": "/fləʊt/",
    "pos": "v",
    "meaning": "漂浮, 浮动",
    "example": "Attach the float and the weight to the fishing line, above the hook.",
    "exampleTranslation": "将浮漂和铅坠固定在鱼线上方，位于鱼钩之上。"
  },
  {
    "word": "flood",
    "phonetic": "/flʌd/",
    "pos": "n",
    "meaning": "洪水 v. 淹没, 使泛滥",
    "example": "a flood of complaints",
    "exampleTranslation": "洪水  淹没"
  },
  {
    "word": "floor",
    "phonetic": "/flɔː/",
    "pos": "n",
    "meaning": "地面, 地板; 层",
    "example": "The room has a wooden floor.",
    "exampleTranslation": "房间铺着木地板。"
  },
  {
    "word": "flour",
    "phonetic": "/ˈflaʊə/",
    "pos": "n",
    "meaning": "面粉, 粉",
    "example": "mustard flour",
    "exampleTranslation": "芥末粉"
  },
  {
    "word": "flow",
    "phonetic": "/fləʊ/",
    "pos": "v",
    "meaning": "流动",
    "example": "The notion of flow is basic to the study of ordinary differential equations.",
    "exampleTranslation": "流动的概念是常微分方程研究的基础。"
  },
  {
    "word": "flower",
    "phonetic": "/ˈflaʊ.ə/",
    "pos": "n",
    "meaning": "花",
    "example": "We transplanted the flowers to a larger pot.",
    "exampleTranslation": "我们把花移栽到了更大的花盆里。"
  },
  {
    "word": "flu",
    "phonetic": "/flʉː/",
    "pos": "n",
    "meaning": "流感",
    "example": "This is a flu.",
    "exampleTranslation": "这是一个流感"
  },
  {
    "word": "fluency",
    "phonetic": "/ˈfluːənsi/",
    "pos": "n",
    "meaning": "流利, 流畅, 雄辩",
    "example": "I need the fluency.",
    "exampleTranslation": "我需要这个流利"
  },
  {
    "word": "fluent",
    "phonetic": "/ˈfluːənt/",
    "pos": "adj",
    "meaning": "流利的, 流畅的",
    "example": "fluent handwriting",
    "exampleTranslation": "流畅的笔迹"
  },
  {
    "word": "focus",
    "phonetic": "/ˈfəʊ.kəs/",
    "pos": "v",
    "meaning": "使集中在焦点上 n.集中, 焦点",
    "example": "The heat of sunlight at the focus of a magnifying glass can easily set dry leaves on fire.",
    "exampleTranslation": "使集中在焦点上 集中"
  },
  {
    "word": "fog",
    "phonetic": "/fɒɡ/",
    "pos": "n",
    "meaning": "雾",
    "example": "He did so many drugs, he was still in a fog three months after going through detox.",
    "exampleTranslation": "他吸毒过量，即使戒毒三个月后头脑仍昏昏沉沉。"
  },
  {
    "word": "foggy",
    "phonetic": "/ˈfɔːɡi/",
    "pos": "adj",
    "meaning": "多雾的",
    "example": "He was still foggy with sleep.",
    "exampleTranslation": "他仍睡眼惺忪。"
  },
  {
    "word": "fold",
    "phonetic": "/fəʊld/",
    "pos": "v",
    "meaning": "折叠; 合拢",
    "example": "After two reraises in quick succession, John realised his best option was probably a fold.",
    "exampleTranslation": "折叠; 合拢。"
  },
  {
    "word": "folk",
    "phonetic": "/fəʊk/",
    "pos": "adj",
    "meaning": "民间的",
    "example": "Young folk, old folk, everybody come, / To our little Sunday School and have a lot of fun.",
    "exampleTranslation": "年轻的、年老的乡亲们，大家都来吧，/ 到我们主日学校玩个痛快。"
  },
  {
    "word": "follow",
    "phonetic": "/ˈfɒləʊ/",
    "pos": "v",
    "meaning": "跟随; 仿效; 跟得上",
    "example": "a follow shot",
    "exampleTranslation": "跟随; 仿效; 跟得上。"
  },
  {
    "word": "fond",
    "phonetic": "/fɒnd/",
    "pos": "adj",
    "meaning": "喜爱的, 爱好的",
    "example": "a fond farewell",
    "exampleTranslation": "深情的告别"
  },
  {
    "word": "food",
    "phonetic": "/fuːd/",
    "pos": "n",
    "meaning": "食物",
    "example": "The innkeeper brought them food and drink.",
    "exampleTranslation": "客栈老板给他们端来了食物和酒水。"
  },
  {
    "word": "fool",
    "phonetic": "/fuːl/",
    "pos": "n",
    "meaning": "傻子",
    "example": "The village fool threw his own shoes down the well.",
    "exampleTranslation": "村里的傻子把自己的鞋子扔进了井里。"
  },
  {
    "word": "foolish",
    "phonetic": "/ˈfuː.lɪʃ/",
    "pos": "adj",
    "meaning": "愚蠢的",
    "example": "He seems foolish.",
    "exampleTranslation": "他看起来傻乎乎的。"
  },
  {
    "word": "foot",
    "phonetic": "/fʊt/",
    "pos": "",
    "meaning": "(feet) n.脚; 底部; 英尺",
    "example": "My right foot hurts.",
    "exampleTranslation": "脚"
  },
  {
    "word": "football",
    "phonetic": "/fʷʊʔt̚bɑɫ/",
    "pos": "n",
    "meaning": "足球; 橄榄球",
    "example": "Roman and medieval football matches were more violent than any modern type of football.",
    "exampleTranslation": "罗马和中世纪的足球比赛比任何现代足球都更暴力。"
  },
  {
    "word": "for",
    "phonetic": "/fɔːr/",
    "pos": "prep",
    "meaning": "prep.(表示目的)为了, 因为, 至于, 对于, 适合于 conj.因为",
    "example": "It is for the table.",
    "exampleTranslation": "表示目的为了"
  },
  {
    "word": "forbid",
    "phonetic": "/fərˈbɪd/",
    "pos": "",
    "meaning": "(forbade, forbidden) v.  禁止, 不许",
    "example": "I forbid you to go out.",
    "exampleTranslation": "(forbade。"
  },
  {
    "word": "force",
    "phonetic": "/fɔːs/",
    "pos": "v",
    "meaning": "强迫, 迫使",
    "example": "the force of an appeal, an argument, or a contract",
    "exampleTranslation": "呼吁、论证或合同的效力"
  },
  {
    "word": "forecast",
    "phonetic": "/ˈfɔːkɑːst/",
    "pos": "n",
    "meaning": "& v. 预测, 预报",
    "example": "to forecast a rise in prices",
    "exampleTranslation": "预测"
  },
  {
    "word": "forehead",
    "phonetic": "/ˈfɒɹɛd/",
    "pos": "n",
    "meaning": "前额",
    "example": "The forehead is important.",
    "exampleTranslation": "这个forehead很重要。"
  },
  {
    "word": "foreign",
    "phonetic": "/ˈfɒɹən/",
    "pos": "adj",
    "meaning": "外国的",
    "example": "He liked visiting foreign cities.",
    "exampleTranslation": "他喜欢游览外国城市。"
  },
  {
    "word": "foreigner",
    "phonetic": "/ˈfɒɹ.ɪ.nə(ɹ)/",
    "pos": "n",
    "meaning": "外国人",
    "example": "I need the foreigner.",
    "exampleTranslation": "我需要这个外国人"
  },
  {
    "word": "foresee",
    "phonetic": "/fɔːrˈsiː/",
    "pos": "",
    "meaning": "(-saw, -seen) v. 预见; 预知",
    "example": "Nobody can foresee the future.",
    "exampleTranslation": "(-saw。"
  },
  {
    "word": "forest",
    "phonetic": "/ˈfɒɹɪst/",
    "pos": "n",
    "meaning": "森林",
    "example": "a forest of criticism",
    "exampleTranslation": "一片批评之声"
  },
  {
    "word": "forever",
    "phonetic": "/fəˈɹɛvə(ɹ)/",
    "pos": "adv",
    "meaning": "永远; 永恒的",
    "example": "I haven't seen him in forever!",
    "exampleTranslation": "我好久没见到他了！"
  },
  {
    "word": "forget",
    "phonetic": "/fərˈɡet/",
    "pos": "",
    "meaning": "(forgot, forgot/forgotten) v. 忘记; 忘掉",
    "example": "Don't forget to lock the door.",
    "exampleTranslation": "(forgot。"
  },
  {
    "word": "forgetful",
    "phonetic": "/fərˈɡetfl/",
    "pos": "adj",
    "meaning": "健忘的, 不留心的",
    "example": "a forgetful mapping; a forgetful functor",
    "exampleTranslation": "遗忘映射；遗忘函子"
  },
  {
    "word": "forgive",
    "phonetic": "/fərˈɡɪv/",
    "pos": "",
    "meaning": "(forgave, forgiven) v. 原谅, 宽恕",
    "example": "Please forgive me.",
    "exampleTranslation": "(forgave。"
  },
  {
    "word": "fork",
    "phonetic": "/fɔːk/",
    "pos": "n",
    "meaning": "叉, 餐叉",
    "example": "West Fork White River and East Fork White River join together to form the White River of Indiana.",
    "exampleTranslation": "西岔白河与东岔白河汇合形成了印第安纳州的怀特河。"
  },
  {
    "word": "form",
    "phonetic": "/fɔːm/",
    "pos": "n",
    "meaning": "表格; 形式",
    "example": "To apply for the position, complete the application form.",
    "exampleTranslation": "表格; 形式。"
  },
  {
    "word": "format",
    "phonetic": "/ˈfɔː(ɹ).mæt/",
    "pos": "n",
    "meaning": "版式, 形式, 格式",
    "example": "The radio station changed the format of its evening program.",
    "exampleTranslation": "电台改变了晚间节目的编排形式。"
  },
  {
    "word": "former",
    "phonetic": "/ˈfɔːmə/",
    "pos": "adj",
    "meaning": "以前的, 从前的;（两者之中的）前者",
    "example": "A former president;  the former East Germany",
    "exampleTranslation": "前总统；前东德"
  },
  {
    "word": "fortnight",
    "phonetic": "/ˈfɔːt.naɪt/",
    "pos": "n",
    "meaning": "两星期",
    "example": "This is a fortnight.",
    "exampleTranslation": "这是两周的时间。"
  },
  {
    "word": "fortunate",
    "phonetic": "/ˈfɔːt͡ʃənət/",
    "pos": "adj",
    "meaning": "幸运的; 侥幸的",
    "example": "It is a fortunate sign if the sun shines on a newly wedded couple.",
    "exampleTranslation": "如果阳光照耀在新婚夫妇身上，那是个吉兆。"
  },
  {
    "word": "fortune",
    "phonetic": "/ˈfɔːtʃuːn/",
    "pos": "n",
    "meaning": "财产; 运气",
    "example": "She read my fortune. Apparently I will have a good love life this week, but I will have a bad week for money.",
    "exampleTranslation": "财产; 运气。"
  },
  {
    "word": "forty",
    "phonetic": "/ˈfɔɹti/",
    "pos": "num",
    "meaning": "四十",
    "example": "The forty is important.",
    "exampleTranslation": "这个forty很重要。"
  },
  {
    "word": "forward",
    "phonetic": "/ˈfoːwəd/",
    "pos": "adv",
    "meaning": "将来, 今后; 向前, 前进",
    "example": "I'll be glad to forward your mail to you while you're gone.",
    "exampleTranslation": "你不在期间，我会很高兴将你的邮件转寄给你。"
  },
  {
    "word": "found",
    "phonetic": "/faʊnd/",
    "pos": "v",
    "meaning": "成立, 建立",
    "example": "I found my car keys. They were under the couch.",
    "exampleTranslation": "我找到了我的车钥匙，它们在沙发底下。"
  },
  {
    "word": "fountain",
    "phonetic": "/ˈfaʊn.ʔn̩/",
    "pos": "n",
    "meaning": "喷泉",
    "example": "Lava fountained from the volcano.",
    "exampleTranslation": "熔岩从火山口喷涌而出。"
  },
  {
    "word": "fox",
    "phonetic": "/fɒks/",
    "pos": "n",
    "meaning": "狐狸",
    "example": "The quick brown fox jumps over the lazy dog.",
    "exampleTranslation": "敏捷的棕色狐狸跳过了懒惰的狗。"
  },
  {
    "word": "fragile",
    "phonetic": "/ˈfɹædʒaɪl/",
    "pos": "adj",
    "meaning": "易碎的, 脆的",
    "example": "He is a very fragile person and gets easily depressed.",
    "exampleTranslation": "他是个非常脆弱的人，很容易沮丧。"
  },
  {
    "word": "fragrant",
    "phonetic": "/ˈfɹeɪ.ɡɹənt/",
    "pos": "adj",
    "meaning": "芬芳的, 香的",
    "example": "He seems fragrant.",
    "exampleTranslation": "他闻起来很香。"
  },
  {
    "word": "framework",
    "phonetic": "/ˈfɹeɪm.wɜːk/",
    "pos": "n",
    "meaning": "构架, 框架, 结构",
    "example": "These ‘three principles of connexion’ compose the framework of principles in Hume's account of the association of ideas.",
    "exampleTranslation": "这“三条联系原则”构成了休谟观念联想理论中的原则框架。"
  },
  {
    "word": "franc",
    "phonetic": "/fɹæŋk/",
    "pos": "n",
    "meaning": "法郎",
    "example": "This is a franc.",
    "exampleTranslation": "这是一个法郎"
  },
  {
    "word": "free",
    "phonetic": "/fɹiː/",
    "pos": "adj",
    "meaning": "自由的, 空闲的; 免费的",
    "example": "He was given free rein to do whatever he wanted.",
    "exampleTranslation": "他被赋予自由去做任何他想做的事。"
  },
  {
    "word": "freedom",
    "phonetic": "/ˈfriːdəm/",
    "pos": "n",
    "meaning": "自由 freeway n. 高速公路",
    "example": "This is a freedom.",
    "exampleTranslation": "这是一个freedom。"
  },
  {
    "word": "freeze",
    "phonetic": "/friːz/",
    "pos": "",
    "meaning": "(froze, frozen) v.  结冰",
    "example": "Water will freeze at zero degrees.",
    "exampleTranslation": "(froze。"
  },
  {
    "word": "freezing",
    "phonetic": "/ˈfɹiːz.ɪŋ/",
    "pos": "adj",
    "meaning": "冻结的; 极冷的",
    "example": "The lake froze solid.",
    "exampleTranslation": "湖面冻得结结实实。"
  },
  {
    "word": "frequent",
    "phonetic": "/ˈfɹiː.kwənt/",
    "pos": "adj",
    "meaning": "经常的; 频繁的",
    "example": "I am a frequent visitor to that city.",
    "exampleTranslation": "我是那个城市的常客。"
  },
  {
    "word": "fresh",
    "phonetic": "/fɹɛʃ/",
    "pos": "adj",
    "meaning": "新鲜的",
    "example": "He followed the fresh hoofprints to find the deer.",
    "exampleTranslation": "他循着新鲜的蹄印去寻找那头鹿。"
  },
  {
    "word": "friction",
    "phonetic": "/ˈfɹɪkʃən̩/",
    "pos": "n",
    "meaning": "摩擦, 摩擦力",
    "example": "This is a friction.",
    "exampleTranslation": "这是一个摩擦"
  },
  {
    "word": "fridge",
    "phonetic": "/frɪdʒ/",
    "pos": "",
    "meaning": "=refrigerator n. 冰箱",
    "example": "Put the milk in the fridge.",
    "exampleTranslation": "=  冰箱"
  },
  {
    "word": "friend",
    "phonetic": "/fɹɛnd/",
    "pos": "n",
    "meaning": "朋友",
    "example": "She is my best friend.",
    "exampleTranslation": "她是我最好的朋友。"
  },
  {
    "word": "friendly",
    "phonetic": "/ˈfɹɛndli/",
    "pos": "adj",
    "meaning": "友好的",
    "example": "This match is merely a friendly, so don't worry too much about it.",
    "exampleTranslation": "这场比赛只是一场友谊赛，所以别太担心。"
  },
  {
    "word": "friendship",
    "phonetic": "/ˈfɹɛndʃɪp/",
    "pos": "n",
    "meaning": "友谊, 友情",
    "example": "This is a friendship.",
    "exampleTranslation": "这是一个友谊"
  },
  {
    "word": "frighten",
    "phonetic": "/ˈfɹaɪtn̩/",
    "pos": "v",
    "meaning": "使惊恐, 吓唬",
    "example": "Avery puts a sheet over her head, pretending to be a ghost to frighten Emily.",
    "exampleTranslation": "艾弗里把床单盖在头上，假装成鬼来吓唬艾米莉。"
  },
  {
    "word": "frog",
    "phonetic": "/fɹɒɡ/",
    "pos": "n",
    "meaning": "青蛙",
    "example": "I need the frog.",
    "exampleTranslation": "我需要这个青蛙"
  },
  {
    "word": "from",
    "phonetic": "/fɹɒm/",
    "pos": "prep",
    "meaning": "从; 从…起; 距; 来自",
    "example": "I got a letter from my brother.",
    "exampleTranslation": "从; 从…起; 距; 来自。"
  },
  {
    "word": "front",
    "phonetic": "/fɹʌnt/",
    "pos": "adj",
    "meaning": "前面的; 前部的 n. 前面; 前部; 前线",
    "example": "Officially it's a dry-cleaning shop, but everyone knows it's a front for the mafia.",
    "exampleTranslation": "表面上这是一家干洗店，但大家都知道这是黑手党的幌子。"
  },
  {
    "word": "frontier",
    "phonetic": "/fɹʌnˈtɪə/",
    "pos": "n",
    "meaning": "边界; 边境; 边疆; 未开拓领域",
    "example": "the frontier of civilization",
    "exampleTranslation": "边界; 边境; 边疆; 未开拓领域。"
  },
  {
    "word": "frost",
    "phonetic": "/fɹɑst/",
    "pos": "n",
    "meaning": "霜",
    "example": "I think the boss's decision frosted him a bit.",
    "exampleTranslation": "我觉得老板的决定让他有点心寒。"
  },
  {
    "word": "fruit",
    "phonetic": "/fɹuːt/",
    "pos": "n",
    "meaning": "水果; 果实",
    "example": "His long nights in the office eventually bore fruit when his business boomed and he was given a raise.",
    "exampleTranslation": "水果; 果实。"
  },
  {
    "word": "fry",
    "phonetic": "/fɹaɪ/",
    "pos": "v",
    "meaning": "用油煎; 用油炸",
    "example": "to be in a fry",
    "exampleTranslation": "勃然大怒"
  },
  {
    "word": "fuel",
    "phonetic": "/ˈfjuːl/",
    "pos": "n",
    "meaning": "燃料",
    "example": "His books were fuel for the revolution.",
    "exampleTranslation": "他的著作是革命的燃料。"
  },
  {
    "word": "full",
    "phonetic": "/fʊl/",
    "pos": "adj",
    "meaning": "满的, 充满的; 完全的",
    "example": "The jugs were full to the point of overflowing.",
    "exampleTranslation": "罐子满得都快溢出来了。"
  },
  {
    "word": "fun",
    "phonetic": "/fʊn/",
    "pos": "n",
    "meaning": "有趣的事, 娱乐, 玩笑 adj.供娱乐用的",
    "example": "Hey, don't get bent out of shape over it; I was just funning you.",
    "exampleTranslation": "嘿，别为这事生气；我只是在逗你玩。"
  },
  {
    "word": "function",
    "phonetic": "/ˈfʌŋ(k)ʃən/",
    "pos": "n",
    "meaning": "官能, 功能, 作用 v. 活动, 运行, 行使职责",
    "example": "The function is important.",
    "exampleTranslation": "这个function很重要。"
  },
  {
    "word": "fundamental",
    "phonetic": "/ˌfʌndəˈmɛntəl/",
    "pos": "adj",
    "meaning": "基础的, 基本的",
    "example": "one of the fundamentals of linear algebra",
    "exampleTranslation": "线性代数的基础知识之一"
  },
  {
    "word": "funeral",
    "phonetic": "/ˈfjuːnəɹəl/",
    "pos": "n",
    "meaning": "葬礼",
    "example": "Many mourners turned up at the local artist's funeral to pay homage.",
    "exampleTranslation": "许多哀悼者出现在当地艺术家的葬礼上以示敬意。"
  },
  {
    "word": "funny",
    "phonetic": "/ˈfʊnɪ/",
    "pos": "adj",
    "meaning": "有趣的, 滑稽可笑的",
    "example": "When I went to the circus, I only found the clowns funny.",
    "exampleTranslation": "我去看马戏团时，只觉得小丑有趣。"
  },
  {
    "word": "fur",
    "phonetic": "/fɜː(ɹ)/",
    "pos": "n",
    "meaning": "毛皮; 皮子",
    "example": "This is a fur.",
    "exampleTranslation": "这是一个毛皮; 皮子"
  },
  {
    "word": "furnished",
    "phonetic": "/ˈfɜːnɪʃt/",
    "pos": "adj",
    "meaning": "配备了家具的",
    "example": "That is furnished.",
    "exampleTranslation": "那是配备好的。"
  },
  {
    "word": "furniture",
    "phonetic": "/ˈfɜːnɪtʃə/",
    "pos": "n",
    "meaning": "家具",
    "example": "A chair is furniture. Sofas are also furniture.",
    "exampleTranslation": "椅子是家具。沙发也是家具。"
  },
  {
    "word": "future",
    "phonetic": "/ˈfjuːtʃər/",
    "pos": "n",
    "meaning": "将来",
    "example": "I need the future.",
    "exampleTranslation": "我需要这个将来"
  },
  {
    "word": "gain",
    "phonetic": "/ɡeɪn/",
    "pos": "v",
    "meaning": "得到, 增进, 赚到",
    "example": "Looks like you've gained a new friend.",
    "exampleTranslation": "看来你交了个新朋友。"
  },
  {
    "word": "gallery",
    "phonetic": "/ˈɡæləɹi/",
    "pos": "n",
    "meaning": "画廊;  美术品陈列室",
    "example": "a clip-art gallery in a wordprocessor",
    "exampleTranslation": "文字处理软件中的剪贴画库"
  },
  {
    "word": "gallon",
    "phonetic": "/ˈɡælən/",
    "pos": "n",
    "meaning": "加仑",
    "example": "The pipe burst and gallons of water flooded into the kitchen.",
    "exampleTranslation": "水管爆裂，大量水涌入厨房。"
  },
  {
    "word": "game",
    "phonetic": "/ɡeɪm/",
    "pos": "n",
    "meaning": "游戏; 运动; 比赛",
    "example": "He's in the securities game somehow.",
    "exampleTranslation": "游戏; 运动; 比赛。"
  },
  {
    "word": "garage",
    "phonetic": "/ɡəˈɹɑː(d)ʒ/",
    "pos": "n",
    "meaning": "修车厂, 车库",
    "example": "We garaged the convertible during the monsoon months.",
    "exampleTranslation": "雨季期间我们把敞篷车停进了车库。"
  },
  {
    "word": "garbage",
    "phonetic": "/ˈɡɑːbɪd͡ʒ/",
    "pos": "n",
    "meaning": "垃圾",
    "example": "Garbage is collected on Tuesdays; rubbish on Fridays",
    "exampleTranslation": "垃圾每周二收；废弃物每周五收。"
  },
  {
    "word": "garden",
    "phonetic": "/ˈɡɑːdn̩/",
    "pos": "n",
    "meaning": "花园, 果园, 菜园",
    "example": "a vegetable garden  a flower garden",
    "exampleTranslation": "菜园 花园"
  },
  {
    "word": "garlic",
    "phonetic": "/ˈɡɑːlɪk/",
    "pos": "n",
    "meaning": "大蒜",
    "example": "The garlic is important.",
    "exampleTranslation": "这个garlic很重要。"
  },
  {
    "word": "garment",
    "phonetic": "/ˈɡɑː.mənt/",
    "pos": "n",
    "meaning": "衣服, 外衣",
    "example": "I need the garment.",
    "exampleTranslation": "我需要这个衣服"
  },
  {
    "word": "gas",
    "phonetic": "/ɡæs/",
    "pos": "n",
    "meaning": "煤气",
    "example": "A lot of gas had escaped from the cylinder.",
    "exampleTranslation": "大量气体从钢瓶中泄漏出来。"
  },
  {
    "word": "gate",
    "phonetic": "/ɡeɪt/",
    "pos": "n",
    "meaning": "大门",
    "example": "The gate in front of the railroad crossing went up after the train had passed.",
    "exampleTranslation": "火车通过后，铁路道口前的栏杆升了起来。"
  },
  {
    "word": "gather",
    "phonetic": "/ˈɡæðə/",
    "pos": "v",
    "meaning": "聚集; 采集",
    "example": "I've been gathering ideas from the people I work with.",
    "exampleTranslation": "聚集; 采集。"
  },
  {
    "word": "gay",
    "phonetic": "/ɡeɪ/",
    "pos": "adj",
    "meaning": "快活的,  愉快的;（男）同性恋的",
    "example": "The Gay Science",
    "exampleTranslation": "《快乐的科学》"
  },
  {
    "word": "general",
    "phonetic": "/ˈd͡ʒɛnɹəl/",
    "pos": "adj",
    "meaning": "大体的, 笼统的, 总的 n.普通, 将军, 概要",
    "example": "We have dealt with the generals; now let us turn to the particulars.",
    "exampleTranslation": "我们已经讨论了普遍情况；现在让我们转向具体细节。"
  },
  {
    "word": "generation",
    "phonetic": "/ˌd͡ʒɛnəˈɹeɪʃən/",
    "pos": "n",
    "meaning": "代, 一代",
    "example": "This is the book of the generations of Adam - Genesis 5:1",
    "exampleTranslation": "这是亚当的家谱——创世记5:1"
  },
  {
    "word": "generous",
    "phonetic": "/ˈdʒɛn(ə)ɹəs/",
    "pos": "adj",
    "meaning": "慷慨的, 大方的, 有雅量的",
    "example": "Thank you for your generous words.",
    "exampleTranslation": "感谢您的慷慨言辞。"
  },
  {
    "word": "gentle",
    "phonetic": "/ˈdʒɛntl̩/",
    "pos": "adj",
    "meaning": "温柔的, 轻轻的",
    "example": "Stuart is a gentle man; he would never hurt you.",
    "exampleTranslation": "斯图尔特是个温和的人；他绝不会伤害你。"
  },
  {
    "word": "gentleman",
    "phonetic": "/ˈdʒɛn.təl.mən/",
    "pos": "n",
    "meaning": "绅士, 有教养的人",
    "example": "He is a true gentleman.",
    "exampleTranslation": "他是一位真正的绅士。"
  },
  {
    "word": "geography",
    "phonetic": "/dʒɪˈɒɡɹəfi/",
    "pos": "n",
    "meaning": "地理学",
    "example": "The geography is important.",
    "exampleTranslation": "这个geography很重要。"
  },
  {
    "word": "geometry",
    "phonetic": "/dʒiːˈɒmɪtɹi/",
    "pos": "n",
    "meaning": "几何学",
    "example": "This is a geometry.",
    "exampleTranslation": "这是一门几何学。"
  },
  {
    "word": "gesture",
    "phonetic": "/ˈdʒɛs.tʃɚ/",
    "pos": "n",
    "meaning": "姿势, 手势",
    "example": "The middle-finger gesture is really a nonverbal swear.",
    "exampleTranslation": "竖中指实际上是一种非言语的咒骂。"
  },
  {
    "word": "get",
    "phonetic": "/ɡet/",
    "pos": "",
    "meaning": "(got , got) v. 成为; 得到; 具有; 到达",
    "example": "I need to get some sleep.",
    "exampleTranslation": "(got 。"
  },
  {
    "word": "gift",
    "phonetic": "/ɡɪft/",
    "pos": "n",
    "meaning": "赠品; 礼物",
    "example": "She had a gift for playing the flute.",
    "exampleTranslation": "赠品; 礼物。"
  },
  {
    "word": "gifted",
    "phonetic": "/ˈɡɪftɪd/",
    "pos": "adj",
    "meaning": "有天赋的; 有才华的",
    "example": "a gifted artist",
    "exampleTranslation": "有天赋的; 有才华的。"
  },
  {
    "word": "giraffe",
    "phonetic": "/dʒɪˈɹɑːf/",
    "pos": "n",
    "meaning": "长颈鹿",
    "example": "Are you having a giraffe?!",
    "exampleTranslation": "你是在开玩笑吗？！"
  },
  {
    "word": "girl",
    "phonetic": "/ɡɵːl/",
    "pos": "n",
    "meaning": "女孩",
    "example": "Your girl turned up on our doorstep.",
    "exampleTranslation": "你的女孩出现在我们家门口了。"
  },
  {
    "word": "give",
    "phonetic": "/ɡɪv/",
    "pos": "",
    "meaning": "(gave, given) v. 给; 递给; 付出",
    "example": "Please give me a pen.",
    "exampleTranslation": "请给我一支钢笔。"
  },
  {
    "word": "glad",
    "phonetic": "/ɡlæd/",
    "pos": "adj",
    "meaning": "高兴的; 乐意的",
    "example": "I'm glad the rain has finally stopped.",
    "exampleTranslation": "我很高兴雨终于停了。"
  },
  {
    "word": "glance",
    "phonetic": "/ɡlɑːns/",
    "pos": "v",
    "meaning": "匆匆一看; 一瞥",
    "example": "copper glance",
    "exampleTranslation": "辉铜矿"
  },
  {
    "word": "glare",
    "phonetic": "/ɡlɛə/",
    "pos": "v",
    "meaning": "瞪眼; 怒目而视; 闪耀",
    "example": "a glare of ice",
    "exampleTranslation": "瞪眼; 怒目而视; 闪耀。"
  },
  {
    "word": "glass",
    "phonetic": "/ɡlɑːs/",
    "pos": "n",
    "meaning": "玻璃杯; 玻璃; (复)眼镜",
    "example": "to fibreglass the hull of a fishing-boat",
    "exampleTranslation": "玻璃杯; 玻璃; (复)眼镜。"
  },
  {
    "word": "globe",
    "phonetic": "/ɡloːb/",
    "pos": "n",
    "meaning": "地球仪; 地球",
    "example": "the globe of the eye; the globe of a lamp",
    "exampleTranslation": "眼球；灯罩"
  },
  {
    "word": "glory",
    "phonetic": "/ˈɡlo(ː)ɹi/",
    "pos": "n",
    "meaning": "光荣; 荣誉",
    "example": "This is a glory.",
    "exampleTranslation": "这是一个光荣; 荣誉"
  },
  {
    "word": "glove",
    "phonetic": "/ɡlʌv/",
    "pos": "n",
    "meaning": "手套",
    "example": "I wore gloves to keep my hands warm.",
    "exampleTranslation": "我戴手套是为了让手保持温暖。"
  },
  {
    "word": "glue",
    "phonetic": "/ɡluː/",
    "pos": "n",
    "meaning": "胶水",
    "example": "I need to glue the chair-leg back into place.",
    "exampleTranslation": "我需要把椅子腿粘回原位。"
  },
  {
    "word": "go",
    "phonetic": "/ɡoʊ/",
    "pos": "",
    "meaning": "(went, gone) v. 离去, 走, 进行, 变成, 求助于",
    "example": "Let's go to the park.",
    "exampleTranslation": "我们去公园吧。"
  },
  {
    "word": "goal",
    "phonetic": "/ɡɒʊl/",
    "pos": "n",
    "meaning": "球门, 目标; 得分",
    "example": "My lifelong goal is to get into a Hollywood movie.",
    "exampleTranslation": "我毕生的目标是参演一部好莱坞电影。"
  },
  {
    "word": "goat",
    "phonetic": "/ɡɐ̟ʉt/",
    "pos": "n",
    "meaning": "山羊",
    "example": "This is a goat.",
    "exampleTranslation": "这是一个山羊"
  },
  {
    "word": "god",
    "phonetic": "/ɡɔd/",
    "pos": "n",
    "meaning": "神, 上帝",
    "example": "Dawn believes in God, but Willow believes in multiple gods and goddesses.",
    "exampleTranslation": "道恩信仰上帝，但薇洛信仰多位神祇。"
  },
  {
    "word": "gold",
    "phonetic": "/ɡɒʊld/",
    "pos": "n",
    "meaning": "黄金 adj. 金的, 黄金的",
    "example": "France has won three golds and five silvers.",
    "exampleTranslation": "黄金  金的"
  },
  {
    "word": "golden",
    "phonetic": "/ˈɡəʊl.dən/",
    "pos": "adj",
    "meaning": "金(黄)色的",
    "example": "She wore a golden crown.",
    "exampleTranslation": "金(黄)色的。"
  },
  {
    "word": "golf",
    "phonetic": "/ɡɒlf/",
    "pos": "n",
    "meaning": "高尔夫球",
    "example": "The golf is important.",
    "exampleTranslation": "这个golf很重要。"
  },
  {
    "word": "good",
    "phonetic": "/ɡʊd/",
    "pos": "",
    "meaning": "(better, best) adj.优良的, 上等的, 好心的, 有益的",
    "example": "She is a good student.",
    "exampleTranslation": "她是一个好学生。"
  },
  {
    "word": "goods",
    "phonetic": "/ɡʊdz/",
    "pos": "n",
    "meaning": "商品, 货物",
    "example": "The best is the enemy of the good.",
    "exampleTranslation": "完美是美好的敌人。"
  },
  {
    "word": "goose",
    "phonetic": "/ɡuːs/",
    "pos": "",
    "meaning": "(geese) n. 鹅",
    "example": "Look at that big white goose.",
    "exampleTranslation": "鹅"
  },
  {
    "word": "govern",
    "phonetic": "/ˈɡʌvən/",
    "pos": "v",
    "meaning": "统治; 管理",
    "example": "The old king governed the land wisely.",
    "exampleTranslation": "统治; 管理。"
  },
  {
    "word": "government",
    "phonetic": "/ˈɡʌvə(n)mənt/",
    "pos": "n",
    "meaning": "政府",
    "example": "If the citizens must follow the law, then the government must follow the constitution.",
    "exampleTranslation": "如果公民必须遵守法律，那么政府就必须遵守宪法。"
  },
  {
    "word": "grade",
    "phonetic": "/ɡɹeɪd/",
    "pos": "n",
    "meaning": "等级; 学年; 成绩, 分数",
    "example": "I gave him a good grade for effort.",
    "exampleTranslation": "等级; 学年; 成绩。"
  },
  {
    "word": "gradual",
    "phonetic": "/ˈɡɹɛdʒɘl/",
    "pos": "adj",
    "meaning": "逐渐的, 逐步的, 渐进的",
    "example": "a gradual increase of knowledge; a gradual decline",
    "exampleTranslation": "知识的逐渐增长；逐渐衰退"
  },
  {
    "word": "graduate",
    "phonetic": "/ˈɡrædʒueɪt/",
    "pos": "v",
    "meaning": "毕业",
    "example": "If the government wants graduates to stay in the country they should offer more incentives.",
    "exampleTranslation": "如果政府希望毕业生留在国内，就应该提供更多激励措施。"
  },
  {
    "word": "graduation",
    "phonetic": "/ˌɡɹædʒuˈeɪʃən/",
    "pos": "n",
    "meaning": "毕业, 毕业典礼",
    "example": "The graduation is important.",
    "exampleTranslation": "这个graduation很重要。"
  },
  {
    "word": "grain",
    "phonetic": "/ɡɹeɪn/",
    "pos": "n",
    "meaning": "谷物, 粮食",
    "example": "We stored a thousand tons of grain for the winter.",
    "exampleTranslation": "我们储存了一千吨粮食以备过冬。"
  },
  {
    "word": "gram",
    "phonetic": "/ɡɹæm/",
    "pos": "n",
    "meaning": "克",
    "example": "I need the gram.",
    "exampleTranslation": "我需要这个克"
  },
  {
    "word": "grammar",
    "phonetic": "/ˈɡɹæm.ə(ɹ)/",
    "pos": "n",
    "meaning": "语法",
    "example": "a grammar of geography",
    "exampleTranslation": "地理学纲要"
  },
  {
    "word": "grand",
    "phonetic": "/ɡɹænd/",
    "pos": "adj",
    "meaning": "宏伟的",
    "example": "a grand army",
    "exampleTranslation": "一支庞大的军队"
  },
  {
    "word": "grandchild",
    "phonetic": "/ˈɡræntʃaɪld/",
    "pos": "n",
    "meaning": "（外）孙或孙女",
    "example": "The grandchild is important.",
    "exampleTranslation": "这个grandchild很重要。"
  },
  {
    "word": "granddaughter",
    "phonetic": "/ˈɡrændɔːtər/",
    "pos": "n",
    "meaning": "（外）孙女",
    "example": "I need the granddaughter.",
    "exampleTranslation": "我需要这个（外）孙女"
  },
  {
    "word": "grandma",
    "phonetic": "/ˈɡrænmɑː/",
    "pos": "",
    "meaning": "= grandmother n. 奶奶; 外婆",
    "example": "My grandma is very kind.",
    "exampleTranslation": "=   奶奶"
  },
  {
    "word": "grandpa",
    "phonetic": "/ˈɡrænpɑː/",
    "pos": "",
    "meaning": "= grandfather n. 爷爷; 外公",
    "example": "My grandpa loves to read.",
    "exampleTranslation": "=   爷爷"
  },
  {
    "word": "grandparents",
    "phonetic": "/ˈɡrænperənts/",
    "pos": "n",
    "meaning": "祖父母, 外祖父母",
    "example": "This is a grandparents.",
    "exampleTranslation": "这是一位祖父母。"
  },
  {
    "word": "grandson",
    "phonetic": "/ˈɡɹæn(d)sʌn/",
    "pos": "n",
    "meaning": "（外）孙子",
    "example": "This is a grandson.",
    "exampleTranslation": "这是一个（外）孙子"
  },
  {
    "word": "granny",
    "phonetic": "/ˈɡɹæni/",
    "pos": "n",
    "meaning": "老奶奶; 祖母; 外婆",
    "example": "I'm going to be a granny.",
    "exampleTranslation": "老奶奶; 祖母; 外婆。"
  },
  {
    "word": "grape",
    "phonetic": "/ɡɹeɪp/",
    "pos": "n",
    "meaning": "葡萄",
    "example": "I need the grape.",
    "exampleTranslation": "我需要这个葡萄"
  },
  {
    "word": "graph",
    "phonetic": "/ɡɹæf/",
    "pos": "n",
    "meaning": "图表, 曲线图",
    "example": "The graph is important.",
    "exampleTranslation": "这个graph很重要。"
  },
  {
    "word": "grasp",
    "phonetic": "/ɡɹɑːsp/",
    "pos": "v",
    "meaning": "抓住, 抓紧, 掌握, 领会",
    "example": "The goal is within my grasp.",
    "exampleTranslation": "目标近在咫尺。"
  },
  {
    "word": "grass",
    "phonetic": "/ɡɹ̠äːs/",
    "pos": "n",
    "meaning": "草",
    "example": "What just happened must remain secret. Don't be a 'grass.",
    "exampleTranslation": "刚才发生的事必须保密，别当告密者。"
  },
  {
    "word": "grateful",
    "phonetic": "/ˈɡɹeɪtfəl/",
    "pos": "adj",
    "meaning": "感激的, 感谢的",
    "example": "I'm grateful that you helped me out.",
    "exampleTranslation": "我很感激你帮助我渡过难关。"
  },
  {
    "word": "gravity",
    "phonetic": "/ˈɡɹævɪti/",
    "pos": "n",
    "meaning": "地心引力, 重力",
    "example": "I hope you appreciate the gravity of the situation.",
    "exampleTranslation": "我希望你意识到局势的严重性。"
  },
  {
    "word": "great",
    "phonetic": "/ɡɹeɪt/",
    "pos": "adj",
    "meaning": "伟大的; 好极了 adv.（口语）好极了, 很好",
    "example": "Newton and Einstein are two of the greats of the history of science.",
    "exampleTranslation": "牛顿和爱因斯坦是科学史上的两位伟人。"
  },
  {
    "word": "greedy",
    "phonetic": "/ˈɡɹiːdi/",
    "pos": "adj",
    "meaning": "贪婪的",
    "example": "This regular expression performs a greedy match.",
    "exampleTranslation": "这个正则表达式执行贪婪匹配。"
  },
  {
    "word": "green",
    "phonetic": "/ɡɹiːn/",
    "pos": "adj",
    "meaning": "绿色的; 青的 n. 绿色 v. 成为绿色, 变绿",
    "example": "The former flag of Libya is fully green.",
    "exampleTranslation": "利比亚的旧国旗完全是绿色的。"
  },
  {
    "word": "greengrocer",
    "phonetic": "/ˈɡɹinˌɡɹəʊs.ə(ɹ)/",
    "pos": "n",
    "meaning": "蔬菜水果商",
    "example": "The greengrocer is important.",
    "exampleTranslation": "这个greengrocer很重要。"
  },
  {
    "word": "greet",
    "phonetic": "/ɡɹiːt/",
    "pos": "v",
    "meaning": "问候; 向…致意",
    "example": "A brilliant dawn greeted her eyes as she looked out of the window.",
    "exampleTranslation": "她望向窗外，映入眼帘的是灿烂的黎明。"
  },
  {
    "word": "greeting",
    "phonetic": "/ˈɡɹiːtɪŋ/",
    "pos": "n",
    "meaning": "祝贺，问候",
    "example": "A brilliant dawn greeted her eyes as she looked out of the window.",
    "exampleTranslation": "她望向窗外，映入眼帘的是灿烂的黎明。"
  },
  {
    "word": "grey",
    "phonetic": "/ɡreɪ/",
    "pos": "",
    "meaning": "(gray) adj. 灰色的; 灰白的",
    "example": "The sky is grey today.",
    "exampleTranslation": "灰色的"
  },
  {
    "word": "grill",
    "phonetic": "/ɡɹɪl/",
    "pos": "n",
    "meaning": "烤架",
    "example": "I put some peppers and mushrooms on the grill to go with dinner.",
    "exampleTranslation": "我在烤架上放了些辣椒和蘑菇作为晚餐配菜。"
  },
  {
    "word": "grocer",
    "phonetic": "/ˈɡɹəʊ.sə/",
    "pos": "n",
    "meaning": "食品店",
    "example": "This is a grocer.",
    "exampleTranslation": "这是一位杂货店老板。"
  },
  {
    "word": "grocery",
    "phonetic": "/ˈɡɹəʊs(ə)ɹi/",
    "pos": "n",
    "meaning": "食品, 杂货",
    "example": "The grocery is important.",
    "exampleTranslation": "这个grocery很重要。"
  },
  {
    "word": "ground",
    "phonetic": "/ɡɹaʊnd/",
    "pos": "n",
    "meaning": "地面",
    "example": "Look, I found a ten dollar bill on the ground!",
    "exampleTranslation": "看，我在地上发现了一张十美元钞票！"
  },
  {
    "word": "group",
    "phonetic": "/ɡɹuːp/",
    "pos": "n",
    "meaning": "组, 群",
    "example": "A group of people gathered in front of the Parliament to demonstrate against the Prime Minister's proposals.",
    "exampleTranslation": "一群人聚集在议会前，抗议首相的提案。"
  },
  {
    "word": "grow",
    "phonetic": "/ɡroʊ/",
    "pos": "",
    "meaning": "(grew, grown) v. 生长; 发育; 种植; 变成",
    "example": "Plants need water to grow.",
    "exampleTranslation": "(grew。"
  },
  {
    "word": "growth",
    "phonetic": "/ɡɹəʊθ/",
    "pos": "n",
    "meaning": "生长, 增长",
    "example": "Growth was dampened by a softening of the global economy in 2001, but picked up in the subsequent years due to strong growth in China.",
    "exampleTranslation": "年全球经济增长放缓抑制了发展，但随后几年因中国的强劲增长而复苏。"
  },
  {
    "word": "guarantee",
    "phonetic": "/ˌɡæɹənˈtiː/",
    "pos": "v",
    "meaning": "保证, 担保 n. 保证, 保证书",
    "example": "Can you give me a guarantee that he will be fit for the match?",
    "exampleTranslation": "你能向我保证他能参加比赛吗？"
  },
  {
    "word": "guard",
    "phonetic": "/ɡɑːd/",
    "pos": "n",
    "meaning": "防护装置, 警戒 v. 保卫, 看守, 当心",
    "example": "The prison guard unlocked the door of the cell.   After completing the repairs, he replaced the sump guard.",
    "exampleTranslation": "监狱警卫打开了牢房的门。"
  },
  {
    "word": "guess",
    "phonetic": "/ɡɛs/",
    "pos": "v",
    "meaning": "猜",
    "example": "He who guesses the riddle shall have the ring.",
    "exampleTranslation": "猜中谜语者可得此戒指。"
  },
  {
    "word": "guest",
    "phonetic": "/ɡɛst/",
    "pos": "n",
    "meaning": "客人",
    "example": "The guests were let in by the butler.",
    "exampleTranslation": "管家将宾客们引入室内。"
  },
  {
    "word": "guidance",
    "phonetic": "/ˈɡaɪdəns/",
    "pos": "n",
    "meaning": "引导, 指导",
    "example": "divine guidance",
    "exampleTranslation": "神圣指引"
  },
  {
    "word": "guide",
    "phonetic": "/ɡaɪd/",
    "pos": "n",
    "meaning": "向导, 导游者",
    "example": "The guide led us around the museum and explained the exhibits.",
    "exampleTranslation": "导游带领我们参观博物馆并讲解展品。"
  },
  {
    "word": "guilty",
    "phonetic": "/ˈɡɪl.ti/",
    "pos": "adj",
    "meaning": "有罪的; 犯法的; 做错事的",
    "example": "He was guilty of cheating at cards.",
    "exampleTranslation": "有罪的; 犯法的; 做错事的。"
  },
  {
    "word": "guitar",
    "phonetic": "/ɡɪˈtɑː(ɹ)/",
    "pos": "n",
    "meaning": "吉他, 六弦琴",
    "example": "This is a guitar.",
    "exampleTranslation": "这是一个吉他"
  },
  {
    "word": "gun",
    "phonetic": "/ɡʌn/",
    "pos": "n",
    "meaning": "枪, 炮",
    "example": "Guns were considered improvements of crossbows and catapults.",
    "exampleTranslation": "枪支被视为对弩和投石机的改进。"
  },
  {
    "word": "gym",
    "phonetic": "/dʒɪm/",
    "pos": "",
    "meaning": "=gymnasium n. 健身房; 体育馆",
    "example": "I go to the gym every day.",
    "exampleTranslation": "=  健身房"
  },
  {
    "word": "gymnastics",
    "phonetic": "/dʒɪmˈnæs.tɪks/",
    "pos": "n",
    "meaning": "体操",
    "example": "Gymnastics was a significant part of the physical education curriculum.",
    "exampleTranslation": "体操曾是体育课程的重要组成部分。"
  },
  {
    "word": "habit",
    "phonetic": "/ˈhæbət/",
    "pos": "n",
    "meaning": "习惯, 习性",
    "example": "It’s become a habit of mine to have a cup of coffee after dinner.",
    "exampleTranslation": "饭后喝杯咖啡已成为我的习惯。"
  },
  {
    "word": "hair",
    "phonetic": "/heː/",
    "pos": "n",
    "meaning": "头发",
    "example": "In the western world, women usually have long hair while men usually have short hair.",
    "exampleTranslation": "在西方世界，女性通常留长发，男性则多为短发。"
  },
  {
    "word": "haircut",
    "phonetic": "/ˈherkʌt/",
    "pos": "n",
    "meaning": "理发",
    "example": "The haircut is important.",
    "exampleTranslation": "这个haircut很重要。"
  },
  {
    "word": "half",
    "phonetic": "/hɑːf/",
    "pos": "adj",
    "meaning": "& n. 半, 一半",
    "example": "I ate the slightly smaller half of the apple.",
    "exampleTranslation": "半"
  },
  {
    "word": "hall",
    "phonetic": "/hɔːl/",
    "pos": "n",
    "meaning": "大厅, 礼堂",
    "example": "The drinking fountain was out in the hall.",
    "exampleTranslation": "饮水机设在大厅里。"
  },
  {
    "word": "ham",
    "phonetic": "/ˈhæːm/",
    "pos": "n",
    "meaning": "火腿",
    "example": "a little piece of ham for the cat",
    "exampleTranslation": "给猫的一小块火腿"
  },
  {
    "word": "hamburger",
    "phonetic": "/ˈhæm.bə.ɡə/",
    "pos": "n",
    "meaning": "汉堡包",
    "example": "I'm going to make you into hamburger if you do that again.",
    "exampleTranslation": "你再敢那样做，我就把你揍成肉饼。"
  },
  {
    "word": "hammer",
    "phonetic": "/ˈhæm.ə(ɹ)/",
    "pos": "n",
    "meaning": "锤子",
    "example": "Bobby used a hammer and nails to fix the two planks together",
    "exampleTranslation": "鲍比用锤子和钉子将两块木板固定在一起。"
  },
  {
    "word": "hand",
    "phonetic": "/hænd/",
    "pos": "n",
    "meaning": "手; 指针 v. 递; 给; 交付; 交上",
    "example": "Her hands are really strong.",
    "exampleTranslation": "她的双手非常有力。"
  },
  {
    "word": "handbag",
    "phonetic": "/ˈhæm.bəɡ/",
    "pos": "n",
    "meaning": "手提包",
    "example": "I need the handbag.",
    "exampleTranslation": "我需要这个手提包。"
  },
  {
    "word": "handful",
    "phonetic": "/ˈhæn(d)fəl/",
    "pos": "n",
    "meaning": "（一）把; 少数, 少量",
    "example": "Those twins are a real handful to look after.",
    "exampleTranslation": "（一）把; 少数。"
  },
  {
    "word": "handkerchief",
    "phonetic": "/ˈhæŋkətʃiːf/",
    "pos": "n",
    "meaning": "手帕",
    "example": "This is a handkerchief.",
    "exampleTranslation": "这是一个手帕"
  },
  {
    "word": "handle",
    "phonetic": "/ˈhæn.dl/",
    "pos": "n",
    "meaning": "柄, 把 v. 处理",
    "example": "The daily handle of a Las Vegas casino is typically millions of dollars.",
    "exampleTranslation": "拉斯维加斯赌场的日流水通常高达数百万美元。"
  },
  {
    "word": "handsome",
    "phonetic": "/ˈhæn.səm/",
    "pos": "adj",
    "meaning": "英俊的",
    "example": "a handsome garment, house, tree, or horse",
    "exampleTranslation": "一件精美的衣裳、一座漂亮的房子、一棵俊秀的树或一匹骏马"
  },
  {
    "word": "handwriting",
    "phonetic": "/ˈhændɹaɪtɪŋ/",
    "pos": "n",
    "meaning": "书法",
    "example": "The handwriting is important.",
    "exampleTranslation": "这个handwriting很重要。"
  },
  {
    "word": "handy",
    "phonetic": "/ˈhæn.di/",
    "pos": "adj",
    "meaning": "手边的, 就近的,便利的",
    "example": "Some people regard duct tape as a handy fix-all.",
    "exampleTranslation": "有些人将强力胶带视为万能的便捷修补工具。"
  },
  {
    "word": "happen",
    "phonetic": "/ˈhæpən/",
    "pos": "v",
    "meaning": "（偶然）发生; 碰巧",
    "example": "Let me tell you how it happened.",
    "exampleTranslation": "（偶然）发生; 碰巧。"
  },
  {
    "word": "happiness",
    "phonetic": "/ˈhæpinəs/",
    "pos": "n",
    "meaning": "幸福, 愉快",
    "example": "The happiness is important.",
    "exampleTranslation": "这个happiness很重要。"
  },
  {
    "word": "happy",
    "phonetic": "/ˈhæpiː/",
    "pos": "adj",
    "meaning": "幸福的; 快乐的, 高兴的",
    "example": "Music makes me feel happy.",
    "exampleTranslation": "音乐让我感到快乐。"
  },
  {
    "word": "harbour",
    "phonetic": "/ˈhɑːrbər/",
    "pos": "",
    "meaning": "(harbor) n. 港口",
    "example": "The ships are in the harbour.",
    "exampleTranslation": "港口"
  },
  {
    "word": "hard",
    "phonetic": "/hɑːd/",
    "pos": "adv",
    "meaning": "努力地; 使劲; 猛烈地 adj.硬的;艰难的",
    "example": "The prisoners were sentenced to three years' hard.",
    "exampleTranslation": "囚犯们被判处三年苦役。"
  },
  {
    "word": "hardly",
    "phonetic": "/ˈhɑːdli/",
    "pos": "adv",
    "meaning": "几乎不",
    "example": "I can't really deal hardly with people.",
    "exampleTranslation": "我实在无法对人过于严苛。"
  },
  {
    "word": "hardship",
    "phonetic": "/ˈhɑːdˌʃɪp/",
    "pos": "n",
    "meaning": "困难",
    "example": "He has survived periods of financial hardship before.",
    "exampleTranslation": "他曾经熬过几段经济困难的时期。"
  },
  {
    "word": "hardworking",
    "phonetic": "/ˌhɑːrdˈwɜːrkɪŋ/",
    "pos": "adj",
    "meaning": "努力工作的",
    "example": "He seems hardworking.",
    "exampleTranslation": "他看起来很勤奋。"
  },
  {
    "word": "harm",
    "phonetic": "/hɑːm/",
    "pos": "n",
    "meaning": "&v. 伤害; 损伤",
    "example": "No harm came to my possessions.",
    "exampleTranslation": "伤害"
  },
  {
    "word": "harmful",
    "phonetic": "/ˈhɑːmfl̩/",
    "pos": "adj",
    "meaning": "有害的; 致伤的",
    "example": "Wear a hat to protect your skin from harmful sunlight.",
    "exampleTranslation": "戴顶帽子保护皮肤免受有害阳光的伤害。"
  },
  {
    "word": "harmony",
    "phonetic": "/ˈhɑːməni/",
    "pos": "n",
    "meaning": "协调, 融洽",
    "example": "a harmony of the Gospels",
    "exampleTranslation": "福音书的和谐统一。"
  },
  {
    "word": "harvest",
    "phonetic": "/ˈhaːvəst/",
    "pos": "n",
    "meaning": "& v. 收割, 收成",
    "example": "Harvest is usually very damp and rainy.",
    "exampleTranslation": "收割"
  },
  {
    "word": "hat",
    "phonetic": "/hat/",
    "pos": "n",
    "meaning": "帽子; 礼帽",
    "example": "This is a hat.",
    "exampleTranslation": "这是一顶帽子。"
  },
  {
    "word": "hatch",
    "phonetic": "/hætʃ/",
    "pos": "v",
    "meaning": "孵化",
    "example": "The cook passed the dishes through the serving hatch.",
    "exampleTranslation": "厨师通过传菜口递出菜肴。"
  },
  {
    "word": "hate",
    "phonetic": "/heɪt/",
    "pos": "v",
    "meaning": "& n. 恨, 讨厌",
    "example": "One of my pet hates is traffic wardens.",
    "exampleTranslation": "恨"
  },
  {
    "word": "have",
    "phonetic": "/hæv/",
    "pos": "",
    "meaning": "(has had, had) v.  有; 吃; 喝; 进行; 经受",
    "example": "I have two sisters.",
    "exampleTranslation": "我有两个姐妹。"
  },
  {
    "word": "he",
    "phonetic": "/hi/",
    "pos": "pron",
    "meaning": "他",
    "example": "Is your cat a he or a she?",
    "exampleTranslation": "你的猫是公的还是母的？"
  },
  {
    "word": "head",
    "phonetic": "/hɛd/",
    "pos": "n",
    "meaning": "头; 头脑; 才智; 首脑; v. 率领; 出发; 驶向",
    "example": "Be careful when you pet that dog on the head; it may bite.",
    "exampleTranslation": "摸那只狗的头时要小心；它可能会咬人。"
  },
  {
    "word": "headache",
    "phonetic": "/ˈhɛdeɪk/",
    "pos": "n",
    "meaning": "头疼",
    "example": "The clumsy filing system has been a huge headache.",
    "exampleTranslation": "那套混乱的文件归档系统一直是个大麻烦。"
  },
  {
    "word": "health",
    "phonetic": "/hɛlθ/",
    "pos": "n",
    "meaning": "健康, 卫生",
    "example": "Her mental health is really affected by stressful environments.",
    "exampleTranslation": "她的心理健康确实受到压力环境的影响。"
  },
  {
    "word": "healthy",
    "phonetic": "/ˈhɛl.θi/",
    "pos": "adj",
    "meaning": "健康的, 健壮的",
    "example": "He was father to three healthy kids.",
    "exampleTranslation": "他是三个健康孩子的父亲。"
  },
  {
    "word": "hear",
    "phonetic": "/hɪr/",
    "pos": "",
    "meaning": "(heard, heard) v. 听见; 听说, 得知",
    "example": "Can you hear that sound?",
    "exampleTranslation": "(heard。"
  },
  {
    "word": "hearing",
    "phonetic": "/ˈhiːɹ.ɪŋ/",
    "pos": "n",
    "meaning": "听力",
    "example": "I was deaf, and now I can hear.",
    "exampleTranslation": "我曾耳聋，现在我能听见了。"
  },
  {
    "word": "heart",
    "phonetic": "/hɑːt/",
    "pos": "n",
    "meaning": "心; 心脏",
    "example": "The team lost, but they showed a lot of heart.",
    "exampleTranslation": "心; 心脏。"
  },
  {
    "word": "heat",
    "phonetic": "/hit/",
    "pos": "n",
    "meaning": "热",
    "example": "The heat was unbearable.",
    "exampleTranslation": "炎热让人难以忍受。"
  },
  {
    "word": "heaven",
    "phonetic": "/hɛvn/",
    "pos": "n",
    "meaning": "天, 天空, 天堂",
    "example": "This is a heaven.",
    "exampleTranslation": "这是一个天"
  },
  {
    "word": "heavy",
    "phonetic": "/ˈhe.vi/",
    "pos": "adj",
    "meaning": "重的",
    "example": "With his wrinkled, uneven face, the actor always seemed to play the heavy in films.",
    "exampleTranslation": "这位演员满脸皱纹、面容粗犷，在电影里似乎总演反派。"
  },
  {
    "word": "heel",
    "phonetic": "/hiːl/",
    "pos": "n",
    "meaning": "脚后跟",
    "example": "He drove the heel of his hand into the man's nose.",
    "exampleTranslation": "他用手掌根猛击那人的鼻子。"
  },
  {
    "word": "height",
    "phonetic": "/haɪt/",
    "pos": "n",
    "meaning": "高, 高度",
    "example": "She's at the height of her career.",
    "exampleTranslation": "她正处于事业的巅峰。"
  },
  {
    "word": "helicopter",
    "phonetic": "/ˈheliˌkɔptə(ɹ)/",
    "pos": "n",
    "meaning": "直升飞机",
    "example": "We flew over the city in a helicopter.",
    "exampleTranslation": "我们乘坐直升机飞越城市上空。"
  },
  {
    "word": "hello",
    "phonetic": "/həˈləʊ/",
    "pos": "int",
    "meaning": "喂; 你好",
    "example": "Hello, everyone.",
    "exampleTranslation": "喂; 你好。"
  },
  {
    "word": "helmet",
    "phonetic": "/ˈhɛlmət/",
    "pos": "n",
    "meaning": "头盔",
    "example": "I need the helmet.",
    "exampleTranslation": "我需要这个头盔"
  },
  {
    "word": "help",
    "phonetic": "/hɛlp/",
    "pos": "n",
    "meaning": "& v. 帮助, 帮忙, 有助于",
    "example": "I need some help with my homework.",
    "exampleTranslation": "我需要some。"
  },
  {
    "word": "helpful",
    "phonetic": "/ˈhɛlp.fəl/",
    "pos": "adj",
    "meaning": "有帮助的, 有益的",
    "example": "He seems helpful.",
    "exampleTranslation": "他看起来乐于助人。"
  },
  {
    "word": "hen",
    "phonetic": "/hɛn/",
    "pos": "n",
    "meaning": "母鸡",
    "example": "Don't cry, hen. Everything will be all right.",
    "exampleTranslation": "别哭了，亲爱的。一切都会好起来的。"
  },
  {
    "word": "her",
    "phonetic": "/ə(ɹ)/",
    "pos": "pron",
    "meaning": "她, 她的",
    "example": "I think this bird is a him, but it may be a her.",
    "exampleTranslation": "我觉得这只鸟是公的，但也可能是母的。"
  },
  {
    "word": "herb",
    "phonetic": "/hɜːb/",
    "pos": "n",
    "meaning": "草药",
    "example": "She grows herbs in her garden.",
    "exampleTranslation": "她在花园里种草药。"
  },
  {
    "word": "here",
    "phonetic": "/hiːɹ/",
    "pos": "adv",
    "meaning": "这里, 在这里; 向这里",
    "example": "An Alzheimer patient's here may in his mind be anywhere he called home in the time he presently re-lives.",
    "exampleTranslation": "阿尔茨海默症患者此刻在脑海中可能正身处他当下重温的、任何曾称之为家的地方。"
  },
  {
    "word": "hero",
    "phonetic": "/ˈhɛɹ.oʊ/",
    "pos": "n",
    "meaning": "英雄, 勇士, 男主角",
    "example": "Let's discuss how to play if the hero has KK, and there's an ace on board.",
    "exampleTranslation": "我们来讨论一下，如果英雄手拿KK，而牌面上有张A，该怎么打。"
  },
  {
    "word": "hers",
    "phonetic": "/əz/",
    "pos": "pron",
    "meaning": "她的",
    "example": "I think this bird is a him, but it may be a her.",
    "exampleTranslation": "我觉得这只鸟是公的，但也可能是母的。"
  },
  {
    "word": "herself",
    "phonetic": "/hɜːˈsɛlf/",
    "pos": "pron",
    "meaning": "她自己",
    "example": "She injured herself.",
    "exampleTranslation": "她把自己弄伤了。"
  },
  {
    "word": "hesitate",
    "phonetic": "/ˈhɛzɪteɪt/",
    "pos": "v",
    "meaning": "犹豫, 踌躇, 不愿",
    "example": "He hesitated whether to accept the offer or not; men often hesitate in forming a judgment.",
    "exampleTranslation": "他犹豫是否接受这个提议；人们在做出判断时常会犹豫。"
  },
  {
    "word": "hi",
    "phonetic": "/haɪ/",
    "pos": "int",
    "meaning": "你好",
    "example": "I didn't even get a hi.",
    "exampleTranslation": "我连声招呼都没收到。"
  },
  {
    "word": "hide",
    "phonetic": "/haɪd/",
    "pos": "",
    "meaning": "(hid, hidden) v. 把…藏起来, 隐藏",
    "example": "He tried to hide behind the tree.",
    "exampleTranslation": "(hid。"
  },
  {
    "word": "high",
    "phonetic": "/haɪ/",
    "pos": "adj",
    "meaning": "高的 adv. 高地",
    "example": "It was one of the highs of his career.",
    "exampleTranslation": "高的  高地"
  },
  {
    "word": "highway",
    "phonetic": "/ˈhaɪweɪ/",
    "pos": "n",
    "meaning": "公路, 大路",
    "example": "This is a highway.",
    "exampleTranslation": "这是一个公路"
  },
  {
    "word": "hill",
    "phonetic": "/hɪl/",
    "pos": "n",
    "meaning": "小山; 丘陵; 土堆; 斜坡",
    "example": "The park is sheltered from the wind by a hill to the east.",
    "exampleTranslation": "小山; 丘陵; 土堆; 斜坡。"
  },
  {
    "word": "him",
    "phonetic": "/əm/",
    "pos": "pron",
    "meaning": "他",
    "example": "I think this bird is a him, but it may be a her.",
    "exampleTranslation": "我觉得这只鸟是公的，但也可能是母的。"
  },
  {
    "word": "himself",
    "phonetic": "/hɪmˈsɛlf/",
    "pos": "pron",
    "meaning": "他自己",
    "example": "He injured himself.",
    "exampleTranslation": "他把自己弄伤了。"
  },
  {
    "word": "hire",
    "phonetic": "/haɪə/",
    "pos": "v",
    "meaning": "租用",
    "example": "The sign offered pedalos on hire.",
    "exampleTranslation": "告示牌上写着出租脚踏船。"
  },
  {
    "word": "his",
    "phonetic": "/ˈhɪz/",
    "pos": "pron",
    "meaning": "他的",
    "example": "The decision was his to live with.",
    "exampleTranslation": "这个决定带来的后果得由他自己承担。"
  },
  {
    "word": "history",
    "phonetic": "/ˈhɪst(ə)ɹi/",
    "pos": "n",
    "meaning": "历史, 历史学",
    "example": "History repeats itself if we don’t learn from its mistakes.",
    "exampleTranslation": "如果我们不从历史的错误中吸取教训，历史就会重演。"
  },
  {
    "word": "hit",
    "phonetic": "/hɪt/",
    "pos": "",
    "meaning": "(hit, hit) n. 打击, 打, 碰撞, (演出等)成功 v. 打, 撞, 击中",
    "example": "Do not hit your brother.",
    "exampleTranslation": "(hit。"
  },
  {
    "word": "hobby",
    "phonetic": "/ˈhɒ.bi/",
    "pos": "n",
    "meaning": "业余爱好, 嗜好",
    "example": "I like to collect stamps from different countries as a hobby.",
    "exampleTranslation": "我喜欢收集不同国家的邮票作为爱好。"
  },
  {
    "word": "hold",
    "phonetic": "/hoʊld/",
    "pos": "",
    "meaning": "(held, held) v. 拿; 抱; 握住; 举行; 进行",
    "example": "Please hold my bag.",
    "exampleTranslation": "(held。"
  },
  {
    "word": "hole",
    "phonetic": "/həʊl/",
    "pos": "n",
    "meaning": "洞, 坑",
    "example": "There’s a hole in my shoe.  Her stocking has a hole in it.",
    "exampleTranslation": "我的鞋上有个洞。她的长筒袜上也有个洞。"
  },
  {
    "word": "holiday",
    "phonetic": "/ˈhɒlɪdeɪ/",
    "pos": "n",
    "meaning": "假日; 假期",
    "example": "Today is a Wiccan holiday!",
    "exampleTranslation": "假日; 假期。"
  },
  {
    "word": "holy",
    "phonetic": "/ˈhəʊli/",
    "pos": "adj",
    "meaning": "神圣的",
    "example": "I'm planning to visit the holy city of Jerusalem this Christmas.",
    "exampleTranslation": "我计划今年圣诞节去圣城耶路撒冷参观。"
  },
  {
    "word": "home",
    "phonetic": "/(h)əʊm/",
    "pos": "n",
    "meaning": "家 adv. 到家; 回家",
    "example": "the home of the pine",
    "exampleTranslation": "家  到家"
  },
  {
    "word": "homeland",
    "phonetic": "/ˈhoʊmlænd/",
    "pos": "n",
    "meaning": "祖国",
    "example": "This is a homeland.",
    "exampleTranslation": "这是一个祖国"
  },
  {
    "word": "hometown",
    "phonetic": "/ˈhoʊmtaʊn/",
    "pos": "n",
    "meaning": "故乡",
    "example": "hometown decision, hometown verdict",
    "exampleTranslation": "主场判决，主场裁定"
  },
  {
    "word": "homework",
    "phonetic": "/ˈhəʊmˌwɜːk/",
    "pos": "n",
    "meaning": "家庭作业",
    "example": "You must do your homework before you can watch television.",
    "exampleTranslation": "你必须先完成作业才能看电视。"
  },
  {
    "word": "honest",
    "phonetic": "/ˈɒnɪst/",
    "pos": "adj",
    "meaning": "诚实的, 正直的",
    "example": "We’re the most honest people you will ever come across.",
    "exampleTranslation": "我们是你见过的最诚实的人。"
  },
  {
    "word": "honey",
    "phonetic": "/ˈhʌni/",
    "pos": "n",
    "meaning": "蜂蜜",
    "example": "Honey, I'm home.",
    "exampleTranslation": "亲爱的，我回来了。"
  },
  {
    "word": "hook",
    "phonetic": "/huːk/",
    "pos": "n",
    "meaning": "钩子 v.钩住, 沉迷, 上瘾",
    "example": "He is not handling this job, so we're giving him the hook.",
    "exampleTranslation": "钩子 钩住"
  },
  {
    "word": "hope",
    "phonetic": "/həʊp/",
    "pos": "n",
    "meaning": "& v. 希望",
    "example": "I am still hoping that all will turn out well.",
    "exampleTranslation": "希望"
  },
  {
    "word": "hopeful",
    "phonetic": "/ˈhəʊpfəl/",
    "pos": "adj",
    "meaning": "有希望的",
    "example": "Several presidential hopefuls are campaigning in New Hampshire this week.",
    "exampleTranslation": "几位有望当选总统的人本周正在新罕布什尔州进行竞选活动。"
  },
  {
    "word": "hopeless",
    "phonetic": "/ˈhəʊplɪs/",
    "pos": "adj",
    "meaning": "没有希望的; 不可救药的",
    "example": "a hopeless cause",
    "exampleTranslation": "没有希望的; 不可救药的。"
  },
  {
    "word": "horrible",
    "phonetic": "/ˈhɑɹɪbəl/",
    "pos": "adj",
    "meaning": "令人恐惧的; 恐怖的；讨厌的",
    "example": "This is horrible.",
    "exampleTranslation": "令人恐惧的; 恐怖的；讨厌的。"
  },
  {
    "word": "horse",
    "phonetic": "/hɔːs/",
    "pos": "n",
    "meaning": "马",
    "example": "I need the horse.",
    "exampleTranslation": "我需要这匹马。"
  },
  {
    "word": "hospital",
    "phonetic": "/ˈhɒs.pɪ.tl̩/",
    "pos": "n",
    "meaning": "医院",
    "example": "This is a hospital.",
    "exampleTranslation": "这是一个医院"
  },
  {
    "word": "host",
    "phonetic": "/həʊst/",
    "pos": "n",
    "meaning": "主人; 节目主持人；许多 v. 做主人招待",
    "example": "A good host is always considerate of the guest’s needs.",
    "exampleTranslation": "好的主人总是会体贴客人的需求。"
  },
  {
    "word": "hostess",
    "phonetic": "/ˈhəʊstəs/",
    "pos": "n",
    "meaning": "女主人",
    "example": "The host and hostess greeted their guests at the door.",
    "exampleTranslation": "主人和女主人都在门口迎接客人。"
  },
  {
    "word": "hot",
    "phonetic": "/hɒt/",
    "pos": "adj",
    "meaning": "热的",
    "example": "He forgot that the frying pan was hot and burned his hand.",
    "exampleTranslation": "他忘了煎锅是烫的，结果把手烫伤了。"
  },
  {
    "word": "hotdog",
    "phonetic": "/ˈhɒtdɒɡ/",
    "pos": "n",
    "meaning": "热狗",
    "example": "This is a hotdog.",
    "exampleTranslation": "这是一个热狗"
  },
  {
    "word": "hotel",
    "phonetic": "/(h)əʊˈtɛl/",
    "pos": "n",
    "meaning": "旅馆, 饭店, 宾馆",
    "example": "The hotel is important.",
    "exampleTranslation": "这家酒店很重要。"
  },
  {
    "word": "hour",
    "phonetic": "/ˈaʊɚ/",
    "pos": "n",
    "meaning": "小时",
    "example": "I spent an hour at lunch.",
    "exampleTranslation": "我花了半小时吃午餐。"
  },
  {
    "word": "house",
    "phonetic": "/hʌʊs/",
    "pos": "n",
    "meaning": "房子; 住宅",
    "example": "This is my house and my family's ancestral home.",
    "exampleTranslation": "房子; 住宅。"
  },
  {
    "word": "housewife",
    "phonetic": "/ˈhaʊswaɪf/",
    "pos": "n",
    "meaning": "家庭主妇",
    "example": "This is a housewife.",
    "exampleTranslation": "这是一位家庭主妇。"
  },
  {
    "word": "housework",
    "phonetic": "/ˈhaʊswɜːrk/",
    "pos": "n",
    "meaning": "家务",
    "example": "This is a housework.",
    "exampleTranslation": "这是一个家务"
  },
  {
    "word": "how",
    "phonetic": "/hæŏ/",
    "pos": "adv",
    "meaning": "怎样, 如何; 多少; 多么",
    "example": "I am not interested in the why, but in the how.",
    "exampleTranslation": "我不关心原因，只关心方法。"
  },
  {
    "word": "however",
    "phonetic": "/hɑʊˈɛvə/",
    "pos": "adv",
    "meaning": "可是 conj. 然而, 无论如何；不论什么程度",
    "example": "He told me not to do it. I, however, did it anyway. / I did it anyway, however. / (sometimes proscribed:) However, I did it anyway.",
    "exampleTranslation": "可是  然而"
  },
  {
    "word": "howl",
    "phonetic": "/haʊl/",
    "pos": "v",
    "meaning": "嚎叫, 嚎哭",
    "example": "The howl of the wind",
    "exampleTranslation": "风的呼啸声"
  },
  {
    "word": "hug",
    "phonetic": "/hʌɡ/",
    "pos": "v",
    "meaning": "拥抱",
    "example": "Billy hugged Danny until he felt better.",
    "exampleTranslation": "比利拥抱着丹尼，直到他感觉好些。"
  },
  {
    "word": "huge",
    "phonetic": "/hʊudʒ/",
    "pos": "adj",
    "meaning": "巨大的, 庞大的",
    "example": "The castle was huge.",
    "exampleTranslation": "这座城堡非常巨大。"
  },
  {
    "word": "human",
    "phonetic": "/ˈhjuː.mən/",
    "pos": "adj",
    "meaning": "人的, 人类的, 人性的 n. 人, 人类",
    "example": "Humans share common ancestors with other apes.",
    "exampleTranslation": "人类与其他猿类有着共同的祖先。"
  },
  {
    "word": "humorous",
    "phonetic": "/ˈhjuːməɹəs/",
    "pos": "adj",
    "meaning": "富于幽默的",
    "example": "He seems humorous.",
    "exampleTranslation": "他看起来很幽默。"
  },
  {
    "word": "hunger",
    "phonetic": "/ˈhʌŋɡə/",
    "pos": "n",
    "meaning": "饥饿",
    "example": "I have a hunger to win.",
    "exampleTranslation": "我渴望胜利。"
  },
  {
    "word": "hungry",
    "phonetic": "/ˈhʌŋ.ɡɹi/",
    "pos": "adj",
    "meaning": "饿的",
    "example": "My kids go to bed hungry every night because I haven't got any money.",
    "exampleTranslation": "我的孩子们每晚都饿着肚子睡觉，因为我没有钱。"
  },
  {
    "word": "hunt",
    "phonetic": "/hʌnt/",
    "pos": "v",
    "meaning": "寻找; 狩猎, 猎取",
    "example": "Her uncle will go out and hunt for deer, now that it is open season.",
    "exampleTranslation": "寻找; 狩猎。"
  },
  {
    "word": "hunter",
    "phonetic": "/ˈhʌntɚ/",
    "pos": "n",
    "meaning": "猎人",
    "example": "The hunter becomes the hunted.",
    "exampleTranslation": "猎人变成了猎物。"
  },
  {
    "word": "hurricane",
    "phonetic": "/ˈhʌɹɪkən/",
    "pos": "n",
    "meaning": "飓风",
    "example": "This is a hurricane.",
    "exampleTranslation": "这是一个飓风"
  },
  {
    "word": "hurry",
    "phonetic": "/ˈhʌ.ɹi/",
    "pos": "v",
    "meaning": "赶快; 急忙",
    "example": "Why are you in such a big hurry?",
    "exampleTranslation": "赶快; 急忙。"
  },
  {
    "word": "hurt",
    "phonetic": "/hɜːrt/",
    "pos": "",
    "meaning": "(hurt, hurt) v. 伤害, 受伤; 伤人感情",
    "example": "My leg hurts a lot.",
    "exampleTranslation": "(hurt。"
  },
  {
    "word": "husband",
    "phonetic": "/ˈhʌz.bənd/",
    "pos": "n",
    "meaning": "丈夫",
    "example": "You should start dating so you can find a suitable husband.",
    "exampleTranslation": "你应该开始约会，这样才能找到合适的丈夫。"
  },
  {
    "word": "hydrogen",
    "phonetic": "/ˈhaɪdɹədʒ(ə)n/",
    "pos": "n",
    "meaning": "氢",
    "example": "This is a hydrogen.",
    "exampleTranslation": "这是一个氢"
  },
  {
    "word": "i",
    "phonetic": "/aɪ/",
    "pos": "pron",
    "meaning": "我",
    "example": "the position of an i-dot (the dot of an i)",
    "exampleTranslation": "i字母上点的位置"
  },
  {
    "word": "ice",
    "phonetic": "/ʌɪs/",
    "pos": "n",
    "meaning": "冰",
    "example": "Milton Keynes have yet to ice a team this season",
    "exampleTranslation": "米尔顿凯恩斯队本赛季尚未组建一支冰球队"
  },
  {
    "word": "ice-cream",
    "phonetic": "/ˌaɪs ˈkriːm/",
    "pos": "n",
    "meaning": "冰淇淋",
    "example": "Strawberries are particularly delicious with ice cream.",
    "exampleTranslation": "草莓配冰淇淋特别美味。"
  },
  {
    "word": "idea",
    "phonetic": "/ɑeˈdiə̯/",
    "pos": "n",
    "meaning": "主意, 意见, 打算, 想法",
    "example": "The mere idea of you is enough to excite me.",
    "exampleTranslation": "仅仅想到你就足以让我兴奋。"
  },
  {
    "word": "identification",
    "phonetic": "/aɪˌdɛntɪfɪˈkeɪʃən/",
    "pos": "n",
    "meaning": "辨认, 鉴定, 证明",
    "example": "Much education and experience is required for proper identification of bird species",
    "exampleTranslation": "正确识别鸟类需要大量的教育和经验"
  },
  {
    "word": "identity",
    "phonetic": "/aɪˈdɛntəti/",
    "pos": "n",
    "meaning": "同一性, 身份",
    "example": "I've been through so many changes, I have no sense of identity.",
    "exampleTranslation": "我经历了太多变化，已经失去了自我认同感。"
  },
  {
    "word": "idiom",
    "phonetic": "/ˈɪdɪəm/",
    "pos": "n",
    "meaning": "习语, 成语",
    "example": "This is a idiom.",
    "exampleTranslation": "这是一个习语"
  },
  {
    "word": "if",
    "phonetic": "/ɪf/",
    "pos": "conj",
    "meaning": "如果, 假使; 是否",
    "example": "If it rains, I shall get wet.",
    "exampleTranslation": "如果下雨，我会被淋湿。"
  },
  {
    "word": "ignore",
    "phonetic": "/ɪɡˈnɔː/",
    "pos": "v",
    "meaning": "不理睬, 忽视",
    "example": "A problem ignored is a problem doubled.",
    "exampleTranslation": "被忽视的问题会加倍严重。"
  },
  {
    "word": "ill",
    "phonetic": "/ɪl/",
    "pos": "adj",
    "meaning": "有病的; 不健康的",
    "example": "Music won't solve all the world's ills, but it can make them easier to bear.",
    "exampleTranslation": "音乐无法解决世界上所有的弊病，但能让它们更容易承受。"
  },
  {
    "word": "illegal",
    "phonetic": "/ɪˈliːɡəl/",
    "pos": "adj",
    "meaning": "违法的, 不合规定的",
    "example": "Nearly 40 million people live in UK areas with illegal air pollution",
    "exampleTranslation": "近四千万人生活在英国空气污染超标的地区。"
  },
  {
    "word": "illness",
    "phonetic": "/ˈɪl.nəs/",
    "pos": "n",
    "meaning": "疾病",
    "example": "Her grandmother had passed away after a long illness.",
    "exampleTranslation": "她的祖母久病后去世了。"
  },
  {
    "word": "imagine",
    "phonetic": "/ɪˈmædʒ.ɪn/",
    "pos": "v",
    "meaning": "想象, 设想",
    "example": "Try to imagine a pink elephant.",
    "exampleTranslation": "试着想象一头粉色的大象。"
  },
  {
    "word": "immediately",
    "phonetic": "/əˈmiːdi.ətli/",
    "pos": "adv",
    "meaning": "立即",
    "example": "I hope we can begin immediately.",
    "exampleTranslation": "我希望我们能立刻开始。"
  },
  {
    "word": "immigration",
    "phonetic": "/ɪmɪˈɡɹeɪʃn/",
    "pos": "n",
    "meaning": "移民",
    "example": "The immigration is important.",
    "exampleTranslation": "这个immigration很重要。"
  },
  {
    "word": "import",
    "phonetic": "/ˈɪm.pɔːt/",
    "pos": "v",
    "meaning": "& n. 进口, 输入",
    "example": "It was a matter of great import.",
    "exampleTranslation": "进口"
  },
  {
    "word": "importance",
    "phonetic": "/ɪmˈpɔːtəns/",
    "pos": "n",
    "meaning": "重要性",
    "example": "The importance is important.",
    "exampleTranslation": "这个importance很重要。"
  },
  {
    "word": "important",
    "phonetic": "/ɪmˈpɔːtənt/",
    "pos": "adj",
    "meaning": "重要的",
    "example": "It is very important to give your daughter independence in her life so she learns from experience.",
    "exampleTranslation": "给予女儿生活上的独立非常重要，这样她就能从经验中学习。"
  },
  {
    "word": "impossible",
    "phonetic": "/ɪmˈpɒs.ə.bəl/",
    "pos": "adj",
    "meaning": "不可能的",
    "example": "Late 14th century: “Madame,” quod he, “this were an impossible!” — Geoffrey Chaucer, ‘The Franklin's Tale’, Canterbury Tales",
    "exampleTranslation": "世纪末：“夫人，”他说，“这不可能！”——杰弗里·乔叟，《坎特伯雷故事集》之《富兰克林的故事》"
  },
  {
    "word": "impress",
    "phonetic": "/ˈɪmpɹɛs/",
    "pos": "v",
    "meaning": "留下印象",
    "example": "You impressed me with your command of Urdu.",
    "exampleTranslation": "你流利的乌尔都语让我印象深刻。"
  },
  {
    "word": "impression",
    "phonetic": "/ɪmˈpɹɛʃən/",
    "pos": "n",
    "meaning": "印象, 感觉",
    "example": "His head made an impression on the pillow.",
    "exampleTranslation": "他的头在枕头上留下了一个凹痕。"
  },
  {
    "word": "improve",
    "phonetic": "/ɪmˈpɹuːv/",
    "pos": "v",
    "meaning": "改进, 更新",
    "example": "Buying more servers would improve performance.",
    "exampleTranslation": "购买更多服务器将提升性能。"
  },
  {
    "word": "in",
    "phonetic": "/ɪn/",
    "pos": "prep",
    "meaning": "在...之内, , 从事于, 符合, 穿着 adv. 在家",
    "example": "His parents got him an in with the company.",
    "exampleTranslation": "他的父母帮他打通了进入这家公司的关系。"
  },
  {
    "word": "incident",
    "phonetic": "/ˈɪn.sɪ.dənt/",
    "pos": "n",
    "meaning": "事件",
    "example": "It was an incident that he hoped to forget.",
    "exampleTranslation": "那是他希望忘记的一起意外事件。"
  },
  {
    "word": "include",
    "phonetic": "/ɪnˈkluːd/",
    "pos": "v",
    "meaning": "包含, 包括",
    "example": "I will purchase the vacation package if you will include car rental.",
    "exampleTranslation": "如果你把租车服务包含在内，我就购买这个度假套餐。"
  },
  {
    "word": "income",
    "phonetic": "/ˈɪnˌkʌm/",
    "pos": "n",
    "meaning": "收入, 所得",
    "example": "This is a income.",
    "exampleTranslation": "这是一个收入"
  },
  {
    "word": "increase",
    "phonetic": "/ɪnˈkriːs/",
    "pos": "v",
    "meaning": "& n. 增加",
    "example": "His rage only increased when I told him of the lost money.",
    "exampleTranslation": "增加"
  },
  {
    "word": "indeed",
    "phonetic": "/ɪnˈdiːd/",
    "pos": "adj",
    "meaning": "确实; 实在",
    "example": "Indeed, he made several misplays.",
    "exampleTranslation": "确实; 实在。"
  },
  {
    "word": "independence",
    "phonetic": "/ɪndɪˈpɛndəns/",
    "pos": "n",
    "meaning": "独立",
    "example": "This is a independence.",
    "exampleTranslation": "这是一个独立"
  },
  {
    "word": "independent",
    "phonetic": "/ɪndɪˈpɛndənt/",
    "pos": "adj",
    "meaning": "独立的; 有主见的",
    "example": "the independent candidate",
    "exampleTranslation": "独立候选人"
  },
  {
    "word": "indicate",
    "phonetic": "/ˈɪndɪkeɪt/",
    "pos": "v",
    "meaning": "指出, 显示, 象征, 预示",
    "example": "The guard blew his whistle to indicate imminent departure.",
    "exampleTranslation": "警卫吹响哨子示意即将出发。"
  },
  {
    "word": "industry",
    "phonetic": "/ˈɪndəstɹi/",
    "pos": "n",
    "meaning": "工业, 产业",
    "example": "Over the years, their industry and business sense made them wealthy.",
    "exampleTranslation": "多年来，他们的勤奋和商业头脑使他们变得富有。"
  },
  {
    "word": "influence",
    "phonetic": "/ˈɪn.flu.əns/",
    "pos": "n",
    "meaning": "& v. 影响",
    "example": "I have absolutely no influence over him.",
    "exampleTranslation": "影响"
  },
  {
    "word": "inform",
    "phonetic": "/ɪnˈfɔːm/",
    "pos": "v",
    "meaning": "告诉; 通知",
    "example": "His sense of religion informs everything he writes.",
    "exampleTranslation": "告诉; 通知。"
  },
  {
    "word": "information",
    "phonetic": "/ˌɪnfəˈmeɪʃən/",
    "pos": "n",
    "meaning": "信息",
    "example": "I need some more information about this issue.",
    "exampleTranslation": "我需要更多关于这个问题的信息。"
  },
  {
    "word": "initial",
    "phonetic": "/ɪˈnɪʃəl/",
    "pos": "adj",
    "meaning": "最初的, 词首的, 初始的",
    "example": "You can get your initials printed at the top.",
    "exampleTranslation": "你可以把姓名首字母印在顶部。"
  },
  {
    "word": "injure",
    "phonetic": "/ˈɪndʒə/",
    "pos": "v",
    "meaning": "损害, 伤害",
    "example": "They injure the project.",
    "exampleTranslation": "他们损害了这个项目。"
  },
  {
    "word": "injury",
    "phonetic": "/ˈɪn.dʒə.ɹi/",
    "pos": "n",
    "meaning": "伤害；受伤处",
    "example": "The passenger sustained a severe injury in the car accident.",
    "exampleTranslation": "乘客在车祸中受了重伤。"
  },
  {
    "word": "ink",
    "phonetic": "/ɪŋk/",
    "pos": "n",
    "meaning": "墨水",
    "example": "The TSA has been getting a lot of ink lately.",
    "exampleTranslation": "美国运输安全管理局最近频频见诸报端。"
  },
  {
    "word": "inn",
    "phonetic": "/ɪn/",
    "pos": "n",
    "meaning": "旅店; 小饭店",
    "example": "the Inns of Court; the Inns of Chancery; Serjeants' Inns",
    "exampleTranslation": "律师学院；衡平法律师学院；高级律师学院"
  },
  {
    "word": "innocent",
    "phonetic": "/ˈɪnəsn̩t/",
    "pos": "adj",
    "meaning": "清白的, 无罪的, 天真的, 无知的",
    "example": "The slaughter of the innocents was a significant event in the New Testament.",
    "exampleTranslation": "屠杀无辜是新约中的一个重要事件。"
  },
  {
    "word": "insect",
    "phonetic": "/ˈɪnsɛkt/",
    "pos": "n",
    "meaning": "昆虫",
    "example": "Our shed has several insect infestions, including ants, yellowjackets, and wasps.",
    "exampleTranslation": "我们的棚屋里有多种虫害侵扰，包括蚂蚁、黄蜂和马蜂。"
  },
  {
    "word": "insert",
    "phonetic": "/ɪnˈsɜːt/",
    "pos": "v",
    "meaning": "插入；嵌入",
    "example": "This software can print compact disc inserts if you have the right size of paper.",
    "exampleTranslation": "插入；嵌入。"
  },
  {
    "word": "inside",
    "phonetic": "/ɪnˈsaɪd/",
    "pos": "prep",
    "meaning": "在…里面 adv. 在里面",
    "example": "The inside of the building has been extensively restored.",
    "exampleTranslation": "在…里面  在里面"
  },
  {
    "word": "insist",
    "phonetic": "/ɪnˈsɪst/",
    "pos": "v",
    "meaning": "坚持; 坚决认为",
    "example": "I insist that my secretary dresses nicely.",
    "exampleTranslation": "我坚持要求我的秘书穿着得体。"
  },
  {
    "word": "inspect",
    "phonetic": "/ɪnˈspɛkt/",
    "pos": "v",
    "meaning": "检查; 视察",
    "example": "Inspect the system for leaks.",
    "exampleTranslation": "检查; 视察。"
  },
  {
    "word": "inspire",
    "phonetic": "/ɪn.ˈspaɪə(ɹ)/",
    "pos": "v",
    "meaning": "鼓舞; 激励",
    "example": "Elders should inspire children with sentiments of virtue.",
    "exampleTranslation": "鼓舞; 激励。"
  },
  {
    "word": "instant",
    "phonetic": "/ˈɪnstənt/",
    "pos": "adj",
    "meaning": "瞬间; 刹那",
    "example": "She paused for only an instant, which was just enough time for John to change the subject.",
    "exampleTranslation": "瞬间; 刹那。"
  },
  {
    "word": "instead",
    "phonetic": "/ɪnˈstɛd/",
    "pos": "adv",
    "meaning": "代替, 顶替",
    "example": "I was going to go shopping, but I went dancing instead.",
    "exampleTranslation": "我原本打算去购物，但后来改去跳舞了。"
  },
  {
    "word": "institute",
    "phonetic": "/ˈɪnstɪt(j)uːt/",
    "pos": "n",
    "meaning": "研究所, 院, 学院",
    "example": "I work in a medical research institute.",
    "exampleTranslation": "我在一家医学研究所工作。"
  },
  {
    "word": "institution",
    "phonetic": "/ˌɪnstɪˈtjuːʃən/",
    "pos": "n",
    "meaning": "公共机构; 协会",
    "example": "He's been in an institution since the crash.",
    "exampleTranslation": "自那次车祸后，他一直住在疗养院里。"
  },
  {
    "word": "instruct",
    "phonetic": "/ˌɪnˈstɹʌkt/",
    "pos": "v",
    "meaning": "通知; 指示; 教",
    "example": "Listen carefully when someone instructs you how to assemble the furniture.",
    "exampleTranslation": "通知; 指示; 教。"
  },
  {
    "word": "instruction",
    "phonetic": "/ɪnˈstɹʌkʃən/",
    "pos": "n",
    "meaning": "说明, 须知; 教导",
    "example": "Instruction will be provided on how to handle difficult customers.",
    "exampleTranslation": "将提供关于如何处理难缠客户的指导。"
  },
  {
    "word": "instrument",
    "phonetic": "/ˈɪnstɹəmənt/",
    "pos": "n",
    "meaning": "乐器; 工具, 器械",
    "example": "The violinist was a master of her instrument.",
    "exampleTranslation": "乐器; 工具。"
  },
  {
    "word": "insurance",
    "phonetic": "/ɪn.ˈʃɔː.ɹəns/",
    "pos": "n",
    "meaning": "保险",
    "example": "The car was totalled, but fortunately I had insurance.",
    "exampleTranslation": "车子全毁了，但幸好我有保险。"
  },
  {
    "word": "insure",
    "phonetic": "/ɪnˈʃɔː/",
    "pos": "v",
    "meaning": "给…保险",
    "example": "I use an alarm clock to ensure that I get up on time.",
    "exampleTranslation": "我用闹钟来确保自己准时起床。"
  },
  {
    "word": "intelligence",
    "phonetic": "/ɪnˈtɛl.ɪ.d͡ʒəns/",
    "pos": "n",
    "meaning": "智力, 聪明, 智能",
    "example": "The intelligence is important.",
    "exampleTranslation": "这个intelligence很重要。"
  },
  {
    "word": "intend",
    "phonetic": "/ɪnˈtɛnd/",
    "pos": "v",
    "meaning": "想要, 打算",
    "example": "He intends to go to university.",
    "exampleTranslation": "他打算去上大学。"
  },
  {
    "word": "intention",
    "phonetic": "/ɪnˈtɛnʃən/",
    "pos": "n",
    "meaning": "意图, 目的",
    "example": "It’s easy to promise anything when you have no intention of fulfilling any of it.",
    "exampleTranslation": "当你无意履行任何承诺时，轻易许诺是很容易的。"
  },
  {
    "word": "interest",
    "phonetic": "/ˈɪntəɹɪst/",
    "pos": "n",
    "meaning": "兴趣, 趣味; 利息 v. 引起...的注意",
    "example": "Our bank offers borrowers an annual interest of 5%.",
    "exampleTranslation": "我们银行向借款人提供5%的年利率。"
  },
  {
    "word": "interesting",
    "phonetic": "/ˈɪnt(ə)ɹɛstɪŋ/",
    "pos": "adj",
    "meaning": "有趣的",
    "example": "Action films don't really interest me.",
    "exampleTranslation": "动作片真的引不起我的兴趣。"
  },
  {
    "word": "international",
    "phonetic": "/ˌɪntəˈnæʃ(ə)n(ə)l/",
    "pos": "adj",
    "meaning": "国际的",
    "example": "The United team includes five England internationals.",
    "exampleTranslation": "联队中有五名英格兰国脚。"
  },
  {
    "word": "internet",
    "phonetic": "/ˈɪntəˌnɛt/",
    "pos": "n",
    "meaning": "互联网, 英特网",
    "example": "Do you have internet at your place?  My internet is down and I want to check my email.",
    "exampleTranslation": "你那里有网络吗？我的网络断了，我想查收邮件。"
  },
  {
    "word": "interpreter",
    "phonetic": "/ɪnˈtɜːpɹɪtə/",
    "pos": "n",
    "meaning": "口译，翻译",
    "example": "A Japanese man who is tried before a German court is assisted by an interpreter in making oral statements.",
    "exampleTranslation": "一名在日本人在德国法庭受审时，由口译员协助进行口头陈述。"
  },
  {
    "word": "interrupt",
    "phonetic": "/ˌɪntəˈɹʌpt/",
    "pos": "v",
    "meaning": "打扰, 打断",
    "example": "The interrupt caused the packet handler routine to run.",
    "exampleTranslation": "中断导致数据包处理程序运行。"
  },
  {
    "word": "interval",
    "phonetic": "/ˈɪntəvəl/",
    "pos": "n",
    "meaning": "间歇; 间隔",
    "example": "the interval between contractions during childbirth",
    "exampleTranslation": "间歇; 间隔。"
  },
  {
    "word": "interview",
    "phonetic": "/ˈɪntəvjuː/",
    "pos": "n",
    "meaning": "& v.  采访, 会见, 面试",
    "example": "The reporter gave the witness an interview.",
    "exampleTranslation": "采访"
  },
  {
    "word": "into",
    "phonetic": "/ˈɪn.tuː/",
    "pos": "prep",
    "meaning": "到…里; 向内; 变成",
    "example": "Mary danced into the house.",
    "exampleTranslation": "到…里; 向内; 变成。"
  },
  {
    "word": "introduce",
    "phonetic": "/ˌɪntɹəˈdjuːs/",
    "pos": "v",
    "meaning": "介绍",
    "example": "Let me introduce you to my friends.",
    "exampleTranslation": "让我把你介绍给我的朋友们。"
  },
  {
    "word": "introduction",
    "phonetic": "/ˌɪntɹəˈdʌkʃən/",
    "pos": "n",
    "meaning": "引进, 介绍",
    "example": "the introduction of a new product into the market",
    "exampleTranslation": "将新产品引入市场"
  },
  {
    "word": "invent",
    "phonetic": "/ɪnˈvɛnt/",
    "pos": "v",
    "meaning": "发明, 创造",
    "example": "After weeks of hard work, I invented a new way to alphabetize matchbooks.",
    "exampleTranslation": "经过数周的辛勤工作，我发明了一种新的火柴盒字母排序法。"
  },
  {
    "word": "invention",
    "phonetic": "/ɪnˈvɛnʃən/",
    "pos": "n",
    "meaning": "发明, 创造",
    "example": "I'm afraid there was no burglar. It was all the housekeeper's invention.",
    "exampleTranslation": "恐怕根本没有窃贼，那全是管家编造出来的。"
  },
  {
    "word": "invitation",
    "phonetic": "/ɪn.vɪˈteɪ.ʃn̩/",
    "pos": "n",
    "meaning": "邀请, 请帖",
    "example": "an invitation to a party, to a dinner, or to visit a friend",
    "exampleTranslation": "参加聚会、晚宴或拜访朋友的邀请"
  },
  {
    "word": "invite",
    "phonetic": "/ɪnˈvaɪt/",
    "pos": "v",
    "meaning": "邀请, 招待",
    "example": "We invited our friends round for dinner.",
    "exampleTranslation": "我们邀请朋友们来家里吃晚餐。"
  },
  {
    "word": "iron",
    "phonetic": "/ˈaɪən/",
    "pos": "n",
    "meaning": "铁, 熨斗 v.  熨烫",
    "example": "wrought iron, ductile iron, cast iron, pig iron, gray iron",
    "exampleTranslation": "锻铁、球墨铸铁、铸铁、生铁、灰口铁"
  },
  {
    "word": "irrigation",
    "phonetic": "/ˌɪɹəˈɡeɪʃən/",
    "pos": "n",
    "meaning": "灌溉",
    "example": "The irrigation is important.",
    "exampleTranslation": "这个irrigation很重要。"
  },
  {
    "word": "is",
    "phonetic": "/ɪz/",
    "pos": "v",
    "meaning": "(be) 是",
    "example": "He is a teacher.",
    "exampleTranslation": "他是一位老师。"
  },
  {
    "word": "island",
    "phonetic": "/ˈaɪ̯lənd/",
    "pos": "n",
    "meaning": "岛",
    "example": "an island of colors on a butterfly's wing",
    "exampleTranslation": "蝴蝶翅膀上的一片色彩斑斓"
  },
  {
    "word": "it",
    "phonetic": "/ɪt/",
    "pos": "pron",
    "meaning": "它",
    "example": "In the next game, Adam and Tom will be it…",
    "exampleTranslation": "下一轮游戏里，亚当和汤姆要当追人者……"
  },
  {
    "word": "its",
    "phonetic": "/ɪts/",
    "pos": "pron",
    "meaning": "它的",
    "example": "In the next game, Adam and Tom will be it…",
    "exampleTranslation": "下一局游戏将由亚当和汤姆当追人者……"
  },
  {
    "word": "itself",
    "phonetic": "/ɪtˈsɛlf/",
    "pos": "pron",
    "meaning": "它自己",
    "example": "The door closed by itself",
    "exampleTranslation": "门自己关上了。"
  },
  {
    "word": "jacket",
    "phonetic": "/ˈd͡ʒæk.ɪt/",
    "pos": "n",
    "meaning": "短上衣, 夹克衫",
    "example": "Cook the potatoes in their jackets.",
    "exampleTranslation": "带皮煮土豆。"
  },
  {
    "word": "jam",
    "phonetic": "/ˈdʒæːm/",
    "pos": "n",
    "meaning": "果酱; 阻塞",
    "example": "A traffic jam caused us to miss the game's first period.",
    "exampleTranslation": "果酱; 阻塞。"
  },
  {
    "word": "jar",
    "phonetic": "/dʒɐː/",
    "pos": "n",
    "meaning": "罐子; 坛子",
    "example": "I need the jar.",
    "exampleTranslation": "我需要这个罐子。"
  },
  {
    "word": "jaw",
    "phonetic": "/d͡ʒɔː/",
    "pos": "n",
    "meaning": "下巴",
    "example": "His jaw dropped in amazement.",
    "exampleTranslation": "他惊讶得张大了嘴。"
  },
  {
    "word": "jazz",
    "phonetic": "/d͡ʒæz/",
    "pos": "n",
    "meaning": "爵士音乐",
    "example": "What is all this jazz lying around?",
    "exampleTranslation": "这些到处乱放的玩意儿是什么？"
  },
  {
    "word": "jeans",
    "phonetic": "/d͡ʒiːnz/",
    "pos": "n",
    "meaning": "牛仔裤",
    "example": "She wore a tattered jean jacket.",
    "exampleTranslation": "她穿了件破旧的牛仔夹克。"
  },
  {
    "word": "jeep",
    "phonetic": "/dʒiːp/",
    "pos": "n",
    "meaning": "吉普车",
    "example": "The jeep is important.",
    "exampleTranslation": "这个jeep很重要。"
  },
  {
    "word": "jet",
    "phonetic": "/dʒɛt/",
    "pos": "n",
    "meaning": "喷气式飞机",
    "example": "Farmers may either dip or jet sheep with chemicals.",
    "exampleTranslation": "农民可以用浸泡或喷射的方式给羊群施用化学药剂。"
  },
  {
    "word": "jewelry",
    "phonetic": "/ˈdʒuːəlri/",
    "pos": "n",
    "meaning": "（总称）珠宝",
    "example": "She had more jewellery ornamented about her than any three ladies needed.",
    "exampleTranslation": "（总称）珠宝。"
  },
  {
    "word": "job",
    "phonetic": "/d͡ʒɒb/",
    "pos": "n",
    "meaning": "工作",
    "example": "A job half done is hardly done at all.",
    "exampleTranslation": "半途而废等于全功尽弃。"
  },
  {
    "word": "jog",
    "phonetic": "/dʒɒɡ/",
    "pos": "v",
    "meaning": "慢跑",
    "example": "jog one's elbow",
    "exampleTranslation": "轻碰某人的手肘"
  },
  {
    "word": "join",
    "phonetic": "/ˈdʒɔɪn/",
    "pos": "v",
    "meaning": "参加, 加入; 连接; 会合",
    "example": "The plumber joined the two ends of the broken pipe.",
    "exampleTranslation": "水管工把断裂的管道两端接了起来。"
  },
  {
    "word": "joke",
    "phonetic": "/dʒəʊk/",
    "pos": "n",
    "meaning": "笑话",
    "example": "It was a joke!",
    "exampleTranslation": "那只是个玩笑！"
  },
  {
    "word": "journalist",
    "phonetic": "/ˈdʒɜːnəlɪst/",
    "pos": "n",
    "meaning": "新闻工作者",
    "example": "This is a journalist.",
    "exampleTranslation": "这是位记者。"
  },
  {
    "word": "journey",
    "phonetic": "/ˈd͡ʒɜːni/",
    "pos": "n",
    "meaning": "旅行, 路程",
    "example": "my journey of dealing with grief",
    "exampleTranslation": "我应对悲伤的心路历程"
  },
  {
    "word": "joy",
    "phonetic": "/dʒɔɪ/",
    "pos": "n",
    "meaning": "欢乐, 高兴, 乐趣",
    "example": "They will be a source of strength and joy in your life.",
    "exampleTranslation": "它们将成为你生活中力量和快乐的源泉。"
  },
  {
    "word": "judge",
    "phonetic": "/d͡ʒʌd͡ʒ/",
    "pos": "n",
    "meaning": "裁判; 审判员; 法官 v. 判断, 断定",
    "example": "At a boxing match, the decision of the judges is final.",
    "exampleTranslation": "在拳击比赛中，裁判的裁决是最终决定。"
  },
  {
    "word": "juice",
    "phonetic": "/d͡ʒuːs/",
    "pos": "n",
    "meaning": "汁；液",
    "example": "Squeeze the orange and some juice will come out.",
    "exampleTranslation": "汁；液。"
  },
  {
    "word": "jump",
    "phonetic": "/dʒʌmp/",
    "pos": "n",
    "meaning": "跳跃 v. 跳跃",
    "example": "The boy took a skip and a jump down the lane.",
    "exampleTranslation": "跳跃  跳跃"
  },
  {
    "word": "jungle",
    "phonetic": "/ˈdʒʌŋ.ɡ(ə)l/",
    "pos": "n",
    "meaning": "丛林",
    "example": "It’s a jungle out there.",
    "exampleTranslation": "外面世界很残酷。"
  },
  {
    "word": "junior",
    "phonetic": "/ˈdʒuːnɪə/",
    "pos": "adj",
    "meaning": "初级的; 年少的",
    "example": "four years his junior",
    "exampleTranslation": "比他小四岁"
  },
  {
    "word": "just",
    "phonetic": "/d͡ʒʌst/",
    "pos": "adj",
    "meaning": "公正的 adv. 刚才; 恰好; 不过; 仅",
    "example": "It is a just assessment of the facts.",
    "exampleTranslation": "公正的  刚才"
  },
  {
    "word": "justice",
    "phonetic": "/ˈdʒʌs.tɪs/",
    "pos": "n",
    "meaning": "正义; 公正; 司法",
    "example": "the justice of a description",
    "exampleTranslation": "正义; 公正; 司法。"
  },
  {
    "word": "kangaroo",
    "phonetic": "/kaŋ.ɡə.ˈɹuː/",
    "pos": "n",
    "meaning": "袋鼠",
    "example": "This is a kangaroo.",
    "exampleTranslation": "这是一个袋鼠"
  },
  {
    "word": "keep",
    "phonetic": "/kiːp/",
    "pos": "",
    "meaning": "(kept, kept) v. 保持;  继续不断 v. 培育, 饲养",
    "example": "Keep your room clean.",
    "exampleTranslation": "保持你的房间整洁。"
  },
  {
    "word": "kettle",
    "phonetic": "/ˈkɛ.təl/",
    "pos": "n",
    "meaning": "水壶",
    "example": "There's a hot kettle of soup on the stove.",
    "exampleTranslation": "炉子上有一锅热汤。"
  },
  {
    "word": "key",
    "phonetic": "/kiː/",
    "pos": "n",
    "meaning": "钥匙; 答案; 键; 关键",
    "example": "The key to solving this problem is persistence.",
    "exampleTranslation": "钥匙; 答案; 键; 关键。"
  },
  {
    "word": "keyboard",
    "phonetic": "/ˈkiːbɔːd/",
    "pos": "n",
    "meaning": "键盘",
    "example": "Keyboarding is the part of this job I hate the most.",
    "exampleTranslation": "打字是我这份工作中最讨厌的部分。"
  },
  {
    "word": "kick",
    "phonetic": "/kɪk/",
    "pos": "v",
    "meaning": "& n. 踢",
    "example": "A kick to the knee.",
    "exampleTranslation": "踢"
  },
  {
    "word": "kid",
    "phonetic": "/kɪd/",
    "pos": "n",
    "meaning": "小孩",
    "example": "He treated the oxen like they didn't exist, but he treated the goat kid like a puppy.",
    "exampleTranslation": "他对牛视若无睹，却把小山羊当小狗一样对待。"
  },
  {
    "word": "kill",
    "phonetic": "/kɪl/",
    "pos": "v",
    "meaning": "杀死, 弄死",
    "example": "The assassin liked to make a clean kill, and thus favored small arms over explosives.",
    "exampleTranslation": "刺客喜欢干净利落地解决目标，因此偏爱轻武器而非爆炸物。"
  },
  {
    "word": "kilo",
    "phonetic": "/ˈkiːləʊ/",
    "pos": "n",
    "meaning": "千克; 千米",
    "example": "I need the kilo.",
    "exampleTranslation": "我需要这个千克; 千米"
  },
  {
    "word": "kilogram",
    "phonetic": "/ˈkɪləɡɹæm/",
    "pos": "n",
    "meaning": "千克",
    "example": "This is a kilogram.",
    "exampleTranslation": "这是一个千克"
  },
  {
    "word": "kilometre",
    "phonetic": "/kɪˈlɒmɪtə/",
    "pos": "n",
    "meaning": "千米; 公里",
    "example": "I need the kilometre.",
    "exampleTranslation": "我需要这个千米; 公里"
  },
  {
    "word": "kindergarten",
    "phonetic": "/ˈkɪndəɹˌɡɑːɹd(ə)n/",
    "pos": "n",
    "meaning": "幼儿园",
    "example": "The kindergarten is important.",
    "exampleTranslation": "这个kindergarten很重要。"
  },
  {
    "word": "kindness",
    "phonetic": "/ˈkaɪndnəs/",
    "pos": "n",
    "meaning": "仁慈; 善良",
    "example": "How can I thank you for your many kindnesses?",
    "exampleTranslation": "仁慈; 善良。"
  },
  {
    "word": "king",
    "phonetic": "/kɪŋ/",
    "pos": "n",
    "meaning": "国王",
    "example": "Henry VIII was the king of England from 1509 to 1547.",
    "exampleTranslation": "亨利八世是1509年至1547年间的英格兰国王。"
  },
  {
    "word": "kingdom",
    "phonetic": "/ˈkɪŋdəm/",
    "pos": "n",
    "meaning": "王国",
    "example": "the kingdom of the dead",
    "exampleTranslation": "死者之国"
  },
  {
    "word": "kiss",
    "phonetic": "/kɪs/",
    "pos": "n",
    "meaning": "& v. 吻, 亲吻",
    "example": "His ball kissed the black into the corner pocket.",
    "exampleTranslation": "吻"
  },
  {
    "word": "kitchen",
    "phonetic": "/ˈkɪt͡ʃən/",
    "pos": "n",
    "meaning": "厨房",
    "example": "I need the kitchen.",
    "exampleTranslation": "我需要这个厨房"
  },
  {
    "word": "kite",
    "phonetic": "/kaɪt/",
    "pos": "n",
    "meaning": "风筝",
    "example": "This is a kite.",
    "exampleTranslation": "这是一个风筝"
  },
  {
    "word": "knee",
    "phonetic": "/niː/",
    "pos": "n",
    "meaning": "膝盖",
    "example": "Penny was wearing a miniskirt, so she skinned her exposed knees when she fell.",
    "exampleTranslation": "佩妮穿着迷你裙，摔倒时擦伤了裸露的膝盖。"
  },
  {
    "word": "knock",
    "phonetic": "/nɒk/",
    "pos": "n",
    "meaning": "& v. 敲; 打; 击, 碰撞",
    "example": "I heard a knock on my door.",
    "exampleTranslation": "敲"
  },
  {
    "word": "knowledge",
    "phonetic": "/ˈnɒlɪdʒ/",
    "pos": "n",
    "meaning": "知识, 学问",
    "example": "His knowledge of Iceland was limited to what he'd seen on the Travel Channel.",
    "exampleTranslation": "他对冰岛的了解仅限于旅游频道上看过的内容。"
  },
  {
    "word": "lack",
    "phonetic": "/lak/",
    "pos": "n",
    "meaning": "& v.  缺乏, 缺少",
    "example": "My life lacks excitement.",
    "exampleTranslation": "缺乏"
  },
  {
    "word": "lady",
    "phonetic": "/ˈleɪdi/",
    "pos": "n",
    "meaning": "女士, 夫人",
    "example": "Sir John Smith and Lady Smith.",
    "exampleTranslation": "约翰·史密斯爵士与史密斯夫人。"
  },
  {
    "word": "lake",
    "phonetic": "/leɪk/",
    "pos": "n",
    "meaning": "湖",
    "example": "This is a lake.",
    "exampleTranslation": "这是一个湖"
  },
  {
    "word": "lamb",
    "phonetic": "/læm/",
    "pos": "n",
    "meaning": "羔羊",
    "example": "The shepherd was up all night, lambing her young ewes.",
    "exampleTranslation": "牧羊人整夜未眠，为她年轻的母羊接生。"
  },
  {
    "word": "lame",
    "phonetic": "/leɪm/",
    "pos": "adj",
    "meaning": "跛的, 瘸的",
    "example": "1877, Anna Sewell, Black Beauty: And if you don't want to lame your horse you must look sharp and get them [stones stuck in hooves] out quickly.",
    "exampleTranslation": "年，安娜·休厄尔在《黑骏马》中写道：如果你不想让马变跛，就必须迅速清理掉卡在蹄子里的石子。"
  },
  {
    "word": "lamp",
    "phonetic": "/læmp/",
    "pos": "n",
    "meaning": "灯, 油灯",
    "example": "This is a lamp.",
    "exampleTranslation": "这是一个灯"
  },
  {
    "word": "land",
    "phonetic": "/lænd/",
    "pos": "n",
    "meaning": "陆地; 土地 v. 登陆; 降落",
    "example": "Most insects live on land.",
    "exampleTranslation": "大多数昆虫生活在陆地上。"
  },
  {
    "word": "language",
    "phonetic": "/ˈleɪŋɡwɪd͡ʒ/",
    "pos": "n",
    "meaning": "语言",
    "example": "Deaf and mute people communicate using languages like ASL.",
    "exampleTranslation": "聋哑人使用美国手语等语言进行交流。"
  },
  {
    "word": "lantern",
    "phonetic": "/ˈlæn.tən/",
    "pos": "n",
    "meaning": "灯笼; 提灯",
    "example": "the lantern of the cupola of the Capitol at Washington, or that of the Florence cathedral",
    "exampleTranslation": "灯笼; 提灯。"
  },
  {
    "word": "lap",
    "phonetic": "/læp/",
    "pos": "n",
    "meaning": "膝部; 一圈",
    "example": "The boy was sitting on his mother's lap.",
    "exampleTranslation": "膝部; 一圈。"
  },
  {
    "word": "large",
    "phonetic": "/ˈlɑːd͡ʒ/",
    "pos": "adj",
    "meaning": "大的; 巨大的",
    "example": "Getting a car tricked out like that will cost you 50 large.",
    "exampleTranslation": "把车改装成那样会花掉你五万块钱。"
  },
  {
    "word": "last",
    "phonetic": "/last/",
    "pos": "adj",
    "meaning": "最近的; 最后的 v. 持续",
    "example": "“Eyes Wide Shut” was the last film to be directed by Stanley Kubrick.",
    "exampleTranslation": "《大开眼戒》是斯坦利·库布里克执导的最后一部电影。"
  },
  {
    "word": "late",
    "phonetic": "/leɪt/",
    "pos": "adj",
    "meaning": "晚的, 迟的 adv. 晚地, 迟地",
    "example": "It was late in the evening when we finally arrived.",
    "exampleTranslation": "我们最终抵达时已是深夜。"
  },
  {
    "word": "latter",
    "phonetic": "/ˈlæt̬.əɹ/",
    "pos": "n",
    "meaning": "后者",
    "example": "I need the latter.",
    "exampleTranslation": "我需要这个后者"
  },
  {
    "word": "laugh",
    "phonetic": "/laːf/",
    "pos": "n",
    "meaning": "& v. 笑, 大笑; 嘲笑",
    "example": "His deep laughs boomed through the room.",
    "exampleTranslation": "笑"
  },
  {
    "word": "laughter",
    "phonetic": "/ˈlɑːftə/",
    "pos": "n",
    "meaning": "笑; 笑声",
    "example": "Their loud laughter betrayed their presence.",
    "exampleTranslation": "笑; 笑声。"
  },
  {
    "word": "laundry",
    "phonetic": "/ˈlɑn.dɹi/",
    "pos": "n",
    "meaning": "洗衣店; 要洗的衣服",
    "example": "You've left your dirty laundry all over the house.",
    "exampleTranslation": "你把脏衣服扔得满屋子都是。"
  },
  {
    "word": "law",
    "phonetic": "/lɔː/",
    "pos": "n",
    "meaning": "法律",
    "example": "entrapment is against the law",
    "exampleTranslation": "诱捕是违法的。"
  },
  {
    "word": "lawyer",
    "phonetic": "/ˈlɔɪ.ə(ɹ)/",
    "pos": "n",
    "meaning": "律师",
    "example": "A lawyer's time and advice are his stock in trade. - aphorism often credited to Abraham Lincoln, but without attestation",
    "exampleTranslation": "律师的时间和忠告就是他的本钱。——常被归功于亚伯拉罕·林肯的格言，但无确凿证据"
  },
  {
    "word": "lazy",
    "phonetic": "/ˈleɪzi/",
    "pos": "adj",
    "meaning": "懒惰的",
    "example": "Get out of bed, you lazy lout!",
    "exampleTranslation": "快起床，你这懒虫！"
  },
  {
    "word": "leader",
    "phonetic": "/ˈlidɚ/",
    "pos": "n",
    "meaning": "领袖, 领导人",
    "example": "This is a leader.",
    "exampleTranslation": "这是一个领袖"
  },
  {
    "word": "league",
    "phonetic": "/liːɡ/",
    "pos": "n",
    "meaning": "联盟, 社团",
    "example": "the League of Nations",
    "exampleTranslation": "国际联盟"
  },
  {
    "word": "leak",
    "phonetic": "/liːk/",
    "pos": "v",
    "meaning": "漏; 渗 n. 漏洞, 泄漏",
    "example": "a leak in a boat",
    "exampleTranslation": "船上的一个漏洞"
  },
  {
    "word": "least",
    "phonetic": "/list/",
    "pos": "n",
    "meaning": "最少, 最少量",
    "example": "It was the least surprising thing.",
    "exampleTranslation": "这是最不令人意外的事了。"
  },
  {
    "word": "leather",
    "phonetic": "/ˈlɛðə/",
    "pos": "n",
    "meaning": "皮革",
    "example": "He leathered the ball all the way down the street.",
    "exampleTranslation": "他沿着街道一路猛踢皮球。"
  },
  {
    "word": "lecture",
    "phonetic": "/ˈlɛk.t͡ʃə/",
    "pos": "n",
    "meaning": "讲课, 演讲",
    "example": "During class today the professor delivered an interesting lecture.",
    "exampleTranslation": "今天上课时，教授作了一场有趣的讲座。"
  },
  {
    "word": "left",
    "phonetic": "/lɛft/",
    "pos": "adj",
    "meaning": "左边的 adv. 向左 n. 左, 左边",
    "example": "The political left is holding too much power.",
    "exampleTranslation": "左边的  向左  左"
  },
  {
    "word": "leg",
    "phonetic": "/leɪɡ/",
    "pos": "n",
    "meaning": "腿;  腿脚;  支柱",
    "example": "{{ux|en|Insects have six legs.}",
    "exampleTranslation": "腿;  腿脚;  支柱。"
  },
  {
    "word": "legal",
    "phonetic": "/ˈliː.ɡəl/",
    "pos": "adj",
    "meaning": "法律的, 法定的, 合法的",
    "example": "Legal wants this in writing.",
    "exampleTranslation": "法务部门要求书面形式。"
  },
  {
    "word": "lemon",
    "phonetic": "/ˈlɛmən/",
    "pos": "n",
    "meaning": "柠檬 adj. 柠檬色（味）的",
    "example": "He didn’t realise until he’d paid for it that the car was a lemon.",
    "exampleTranslation": "柠檬  柠檬色（味）的"
  },
  {
    "word": "lemonade",
    "phonetic": "/ˌlɛmənˈeɪd/",
    "pos": "n",
    "meaning": "柠檬水",
    "example": "I need the lemonade.",
    "exampleTranslation": "我需要这个柠檬水"
  },
  {
    "word": "length",
    "phonetic": "/lɛn(t)θ/",
    "pos": "n",
    "meaning": "长, 长度",
    "example": "the length of a book",
    "exampleTranslation": "一本书的长度"
  },
  {
    "word": "lesson",
    "phonetic": "/ˈlɛsn̩/",
    "pos": "n",
    "meaning": "课; 功课; 教训",
    "example": "In our school a typical working week consists of around twenty lessons and ten hours of related laboratory work.",
    "exampleTranslation": "课; 功课; 教训。"
  },
  {
    "word": "letter",
    "phonetic": "/-ɾə(ɹ)/",
    "pos": "n",
    "meaning": "信; 字母",
    "example": "There are twenty-six letters in the English alphabet.",
    "exampleTranslation": "信; 字母。"
  },
  {
    "word": "level",
    "phonetic": "/ˈlɛv.əl/",
    "pos": "n",
    "meaning": "水平线, 水平",
    "example": "Hand me the level so I can tell if this is correctly installed.",
    "exampleTranslation": "把水平仪递给我，我好检查安装得是否正确。"
  },
  {
    "word": "liberation",
    "phonetic": "/ˌlɪbəˈreɪʃn/",
    "pos": "n",
    "meaning": "解放",
    "example": "I need the liberation.",
    "exampleTranslation": "我需要这个解放"
  },
  {
    "word": "liberty",
    "phonetic": "/ˈlɪbɚti/",
    "pos": "n",
    "meaning": "自由; 自由权",
    "example": "The army is here, your liberty is assured.",
    "exampleTranslation": "军队在此，你们的自由有保障了。"
  },
  {
    "word": "librarian",
    "phonetic": "/laɪˈbɹɛɹ.i.ən/",
    "pos": "n",
    "meaning": "图书管理员",
    "example": "The librarian is important.",
    "exampleTranslation": "这个librarian很重要。"
  },
  {
    "word": "library",
    "phonetic": "/ˈlaɪbɹi/",
    "pos": "n",
    "meaning": "图书馆, 图书室",
    "example": "The library is important.",
    "exampleTranslation": "这个library很重要。"
  },
  {
    "word": "lid",
    "phonetic": "/lɪd/",
    "pos": "n",
    "meaning": "盖子",
    "example": "The lid is important.",
    "exampleTranslation": "这个lid很重要。"
  },
  {
    "word": "lift",
    "phonetic": "/lɪft/",
    "pos": "v",
    "meaning": "举起, 抬起 n.电梯；搭车",
    "example": "He gave me a lift to the bus station.",
    "exampleTranslation": "他让我搭车到公交车站。"
  },
  {
    "word": "light",
    "phonetic": "/lʌɪt/",
    "pos": "n",
    "meaning": "光, 光亮; 灯 v.  照亮；点燃 adj. 明亮的; 轻的; 浅色的",
    "example": "As you can see, this spacious dining-room gets a lot of light in the mornings.",
    "exampleTranslation": "如你所见，这间宽敞的餐厅早晨采光很好。"
  },
  {
    "word": "lightning",
    "phonetic": "/ˈlaɪt.nɪŋ/",
    "pos": "n",
    "meaning": "闪电",
    "example": "Although we did not see the lightning, we did hear the thunder.",
    "exampleTranslation": "虽然我们没有看到闪电，但确实听到了雷声。"
  },
  {
    "word": "like",
    "phonetic": "/laɪk/",
    "pos": "v",
    "meaning": "喜欢, 喜爱 prep. 像, 跟…一样",
    "example": "Tell me your likes and dislikes.",
    "exampleTranslation": "告诉我你喜欢什么和不喜欢什么。"
  },
  {
    "word": "likely",
    "phonetic": "/ˈlaɪkli/",
    "pos": "adj",
    "meaning": "很可能的",
    "example": "Rain is likely later this afternoon.",
    "exampleTranslation": "今天下午晚些时候很可能下雨。"
  },
  {
    "word": "limit",
    "phonetic": "/ˈlɪmt/",
    "pos": "v",
    "meaning": "限制; 减少",
    "example": "There are several existing limits to executive power.",
    "exampleTranslation": "限制; 减少。"
  },
  {
    "word": "line",
    "phonetic": "/laɪn/",
    "pos": "n",
    "meaning": "绳索, 线, 排, 行 v. 画线于, 成行；排队",
    "example": "The arrow descended in a curved line.",
    "exampleTranslation": "箭以一条弧线落下。"
  },
  {
    "word": "link",
    "phonetic": "/lɪŋk/",
    "pos": "v",
    "meaning": "连接; 联系",
    "example": "Click the hyperlink to go to the next page.",
    "exampleTranslation": "连接; 联系。"
  },
  {
    "word": "lion",
    "phonetic": "/ˈlaɪən/",
    "pos": "n",
    "meaning": "狮子",
    "example": "Tigers and lions share a common ancestor from a few million years ago.",
    "exampleTranslation": "老虎和狮子在几百万年前有着共同的祖先。"
  },
  {
    "word": "lip",
    "phonetic": "/lɪp/",
    "pos": "n",
    "meaning": "嘴唇",
    "example": "Don’t give me any lip!",
    "exampleTranslation": "别跟我顶嘴！"
  },
  {
    "word": "liquid",
    "phonetic": "/ˈlɪkwɪd/",
    "pos": "n",
    "meaning": "& adj. 液体; 液体的",
    "example": "A liquid can freeze to become a solid or evaporate into a gas.",
    "exampleTranslation": "液体"
  },
  {
    "word": "list",
    "phonetic": "/lɪst/",
    "pos": "n",
    "meaning": "一览表, 清单 v.  列出, 列于表上",
    "example": "to list a door",
    "exampleTranslation": "给门装上门框条"
  },
  {
    "word": "listen",
    "phonetic": "/ˈlɪs.ən/",
    "pos": "v",
    "meaning": "听",
    "example": "Give the motor a listen and tell me if it sounds off.",
    "exampleTranslation": "听听发动机的声音，告诉我它是否听起来不对劲。"
  },
  {
    "word": "literary",
    "phonetic": "/ˈlɪt(ə)ɹi/",
    "pos": "adj",
    "meaning": "文学的",
    "example": "a literary history",
    "exampleTranslation": "一部文学史"
  },
  {
    "word": "literature",
    "phonetic": "/ˈlɪ.tə.ɹɪ.tʃə(ɹ)/",
    "pos": "n",
    "meaning": "文学",
    "example": "I love English literature.",
    "exampleTranslation": "我喜欢英国文学。"
  },
  {
    "word": "litter",
    "phonetic": "/ˈlɪtə(ɹ)/",
    "pos": "v",
    "meaning": "乱丢杂物",
    "example": "sleep in the litter",
    "exampleTranslation": "睡在杂物堆里"
  },
  {
    "word": "lively",
    "phonetic": "/ˈlaɪvli/",
    "pos": "adj",
    "meaning": "活泼的; 充满生气的",
    "example": "This is lively.",
    "exampleTranslation": "这真热闹。"
  },
  {
    "word": "load",
    "phonetic": "/ləʊd/",
    "pos": "n",
    "meaning": "负荷, 重担",
    "example": "I struggled up the hill with the heavy load in my rucksack.",
    "exampleTranslation": "我背着沉重的背包艰难地爬上山。"
  },
  {
    "word": "loaf",
    "phonetic": "/ləʊf/",
    "pos": "n",
    "meaning": "一条面包",
    "example": "The loaf is important.",
    "exampleTranslation": "这个loaf很重要。"
  },
  {
    "word": "local",
    "phonetic": "/ˈləʊkl̩/",
    "pos": "adj",
    "meaning": "当地的; 地方的",
    "example": "It's easy to tell the locals from the tourists.",
    "exampleTranslation": "很容易区分本地人和游客。"
  },
  {
    "word": "lock",
    "phonetic": "/lɒk/",
    "pos": "n",
    "meaning": "锁 v. 锁, 锁上",
    "example": "If you put the brakes on too hard, the wheels will lock.",
    "exampleTranslation": "锁  锁"
  },
  {
    "word": "lonely",
    "phonetic": "/ˈləʊnli/",
    "pos": "adj",
    "meaning": "孤独的, 寂寞的",
    "example": "That is lonely.",
    "exampleTranslation": "那真孤单。"
  },
  {
    "word": "long",
    "phonetic": "/ˈlɔːŋ/",
    "pos": "adj",
    "meaning": "长的, 远 adv. 长久",
    "example": "Every uptick made the longs cheer.",
    "exampleTranslation": "每次上涨都让多头欢呼。"
  },
  {
    "word": "look",
    "phonetic": "/lʊk/",
    "pos": "n",
    "meaning": "看, 瞧 v. 看, 观看，看起来",
    "example": "The look is important.",
    "exampleTranslation": "这个look很重要。"
  },
  {
    "word": "loose",
    "phonetic": "/luːs/",
    "pos": "adj",
    "meaning": "松散的; 宽松的",
    "example": "This wheelbarrow has a loose wheel.",
    "exampleTranslation": "这辆手推车的轮子松了。"
  },
  {
    "word": "lorry",
    "phonetic": "/ˈlɒɹi/",
    "pos": "n",
    "meaning": "（英）运货汽车, 卡车",
    "example": "I need the lorry.",
    "exampleTranslation": "我需要这个（英）运货汽车"
  },
  {
    "word": "loss",
    "phonetic": "/lɑs/",
    "pos": "n",
    "meaning": "丧失; 损耗",
    "example": "In other areas, glacier loss creates serious risk of a dry period across the Third Pole, Wang said.",
    "exampleTranslation": "丧失; 损耗。"
  },
  {
    "word": "lot",
    "phonetic": "/lɒt/",
    "pos": "n",
    "meaning": "一堆, 许多；.签, 抽签",
    "example": "lots of people think so",
    "exampleTranslation": "很多人都这么想"
  },
  {
    "word": "loud",
    "phonetic": "/laʊd/",
    "pos": "adj",
    "meaning": "大声的",
    "example": "Turn that music down; it's too loud.",
    "exampleTranslation": "把音乐关小点；太吵了。"
  },
  {
    "word": "lounge",
    "phonetic": "/laʊndʒ/",
    "pos": "n",
    "meaning": "休息厅; 休息室",
    "example": "I need the lounge.",
    "exampleTranslation": "我需要这个休息厅; 休息室"
  },
  {
    "word": "love",
    "phonetic": "/lʊv/",
    "pos": "n",
    "meaning": "& v. 爱; 热爱; 很喜欢",
    "example": "Hello love, how can I help you?",
    "exampleTranslation": "爱"
  },
  {
    "word": "lovely",
    "phonetic": "/ˈlʌvli/",
    "pos": "adj",
    "meaning": "美好的, 可爱的",
    "example": "a calendar depicting young lovelies in bikinis",
    "exampleTranslation": "一本描绘穿比基尼的年轻美女的日历"
  },
  {
    "word": "low",
    "phonetic": "/ləʊ/",
    "pos": "adj",
    "meaning": "& adv. 低; 矮",
    "example": "Economic growth has hit a new low.",
    "exampleTranslation": "低"
  },
  {
    "word": "luck",
    "phonetic": "/lʊk/",
    "pos": "n",
    "meaning": "运气, 好运",
    "example": "Gilbert had some bad luck yesterday — he got pick-pocketed and lost fifty dollars.",
    "exampleTranslation": "吉尔伯特昨天真倒霉——他被扒手偷了，丢了五十美元。"
  },
  {
    "word": "lucky",
    "phonetic": "/ˈlʌki/",
    "pos": "adj",
    "meaning": "运气好, 侥幸",
    "example": "The downed pilot is very lucky to be alive.",
    "exampleTranslation": "被击落的飞行员能活下来真是非常幸运。"
  },
  {
    "word": "luggage",
    "phonetic": "/ˈlʌɡɪd͡ʒ/",
    "pos": "n",
    "meaning": "行李",
    "example": "The luggage is important.",
    "exampleTranslation": "这个luggage很重要。"
  },
  {
    "word": "lunch",
    "phonetic": "/lʌnt͡ʃ/",
    "pos": "n",
    "meaning": "午餐",
    "example": "After the funeral there was a lunch for those who didn't go to the cemetery.",
    "exampleTranslation": "葬礼后，那些没去墓地的人吃了顿午餐。"
  },
  {
    "word": "lung",
    "phonetic": "/ˈlʌŋ/",
    "pos": "n",
    "meaning": "肺; 肺脏",
    "example": "He hasn't the lungs to play long rallies like he use to.",
    "exampleTranslation": "肺; 肺脏。"
  },
  {
    "word": "machine",
    "phonetic": "/məˈʃin/",
    "pos": "n",
    "meaning": "机器",
    "example": "I called you earlier, but all I got was the machine.",
    "exampleTranslation": "我之前给你打过电话，但只听到答录机的声音。"
  },
  {
    "word": "mad",
    "phonetic": "/ˈmæːd/",
    "pos": "adj",
    "meaning": "发疯的; 生气的",
    "example": "He's got this mad idea that he's irresistible to women.",
    "exampleTranslation": "他有个疯狂的念头，认为自己对女人有不可抗拒的吸引力。"
  },
  {
    "word": "magazine",
    "phonetic": "/mæɡəˈziːn/",
    "pos": "n",
    "meaning": "杂志",
    "example": "The magazine is important.",
    "exampleTranslation": "这个magazine很重要。"
  },
  {
    "word": "magic",
    "phonetic": "/ˈmadʒɪk/",
    "pos": "adj",
    "meaning": "有魔力的",
    "example": "a magic moment",
    "exampleTranslation": "一个神奇的时刻"
  },
  {
    "word": "maid",
    "phonetic": "/meɪd/",
    "pos": "n",
    "meaning": "女仆; 侍女",
    "example": "The maid is important.",
    "exampleTranslation": "这个maid很重要。"
  },
  {
    "word": "mail",
    "phonetic": "/meɪ̯l/",
    "pos": "n",
    "meaning": "邮政, 邮递 v.（美）邮寄",
    "example": "Don't forget to pick up the mail on your way.",
    "exampleTranslation": "别忘了在路上取邮件。"
  },
  {
    "word": "mailbox",
    "phonetic": "/ˈmeɪlbɑːks/",
    "pos": "n",
    "meaning": "邮筒; 邮箱",
    "example": "The mailbox is important.",
    "exampleTranslation": "这个mailbox很重要。"
  },
  {
    "word": "main",
    "phonetic": "/meɪn/",
    "pos": "adj",
    "meaning": "主要的",
    "example": "He mains the same character as me in that game.",
    "exampleTranslation": "他在那款游戏中主玩和我相同的角色。"
  },
  {
    "word": "mainland",
    "phonetic": "/ˈmeɪ̪nlənd/",
    "pos": "n",
    "meaning": "大陆",
    "example": "I need the mainland.",
    "exampleTranslation": "我需要这个大陆"
  },
  {
    "word": "major",
    "phonetic": "/ˈmeɪ.dʒə(ɹ)/",
    "pos": "adj",
    "meaning": "较大的; 主要的",
    "example": "He used to be a major in the army.",
    "exampleTranslation": "他以前在军队里是少校。"
  },
  {
    "word": "majority",
    "phonetic": "/məˈd͡ʒɒɹɪti/",
    "pos": "n",
    "meaning": "大多数",
    "example": "The majority agreed that the new proposal was the best.",
    "exampleTranslation": "大多数人一致认为新提案是最佳的。"
  },
  {
    "word": "male",
    "phonetic": "/meɪl/",
    "pos": "adj",
    "meaning": "男（性）的; 雄的",
    "example": "a male bird feeding a seed to a female",
    "exampleTranslation": "男（性）的; 雄的。"
  },
  {
    "word": "manage",
    "phonetic": "/ˈmænɪdʒ/",
    "pos": "v",
    "meaning": "管理; 设法对付",
    "example": "He managed to climb the tower.",
    "exampleTranslation": "他设法爬上了塔楼。"
  },
  {
    "word": "manager",
    "phonetic": "/ˈmæn.ɪ.dʒə/",
    "pos": "n",
    "meaning": "经理",
    "example": "a file manager; a task manager; Program Manager",
    "exampleTranslation": "文件管理器；任务管理器；程序管理器"
  },
  {
    "word": "mankind",
    "phonetic": "/mænˈkaɪnd/",
    "pos": "n",
    "meaning": "人类;",
    "example": "I need the mankind.",
    "exampleTranslation": "我需要这个人类;"
  },
  {
    "word": "manner",
    "phonetic": "/ˈmænə/",
    "pos": "n",
    "meaning": "方式；举止；礼貌",
    "example": "His natural manner makes him seem like the boss.",
    "exampleTranslation": "方式；举止；礼貌。"
  },
  {
    "word": "map",
    "phonetic": "/mæp/",
    "pos": "n",
    "meaning": "地图",
    "example": "I don't want to play this map again!",
    "exampleTranslation": "我不想再玩这张地图了！"
  },
  {
    "word": "maple",
    "phonetic": "/ˈmeɪpl̩/",
    "pos": "n",
    "meaning": "枫树",
    "example": "I need the maple.",
    "exampleTranslation": "我需要这个枫树"
  },
  {
    "word": "marathon",
    "phonetic": "/ˈmæɹəθən/",
    "pos": "n",
    "meaning": "马拉松",
    "example": "He had a cleaning marathon the night before his girlfriend came over.",
    "exampleTranslation": "女朋友来之前那晚，他进行了一场清洁马拉松。"
  },
  {
    "word": "marble",
    "phonetic": "/ˈmɑːbəl/",
    "pos": "n",
    "meaning": "大理石",
    "example": "The Elgin Marbles were originally part of the temple of the Parthenon.",
    "exampleTranslation": "埃尔金大理石雕原本是帕特农神庙的一部分。"
  },
  {
    "word": "march",
    "phonetic": "/mɑːtʃ/",
    "pos": "n",
    "meaning": "& v. 游行, 行军, 行进",
    "example": "the march of time",
    "exampleTranslation": "游行"
  },
  {
    "word": "mark",
    "phonetic": "/mɑɹk/",
    "pos": "n",
    "meaning": "标记 v. 标明, 作记号于",
    "example": "to mark a box or bale of merchandise",
    "exampleTranslation": "标记  标明"
  },
  {
    "word": "market",
    "phonetic": "/ˈmɑːkɪt/",
    "pos": "n",
    "meaning": "市场, 集市",
    "example": "The privilege to hold a weekly market was invaluable for any feudal era burgh.",
    "exampleTranslation": "拥有每周集市的权利对封建时代的任何城镇都无比珍贵。"
  },
  {
    "word": "marriage",
    "phonetic": "/ˈmæɹɪdʒ/",
    "pos": "n",
    "meaning": "结婚, 婚姻",
    "example": "You should enter marriage for love.",
    "exampleTranslation": "你应该为爱而结婚。"
  },
  {
    "word": "marry",
    "phonetic": "/ˈmæɹɪ/",
    "pos": "v",
    "meaning": "（使）成婚, 结婚",
    "example": "Neither of her daughters showed any desire to marry.",
    "exampleTranslation": "（使）成婚。"
  },
  {
    "word": "mask",
    "phonetic": "/mæsk/",
    "pos": "n",
    "meaning": "面罩(具); 遮盖物 v. 戴面具; 掩饰; 伪装",
    "example": "a dancer's mask; a fencer's mask; a ball player's mask",
    "exampleTranslation": "面罩具"
  },
  {
    "word": "mass",
    "phonetic": "/mæs/",
    "pos": "n",
    "meaning": "众多; 大量;（复）群众",
    "example": "I mass 70 kilograms.",
    "exampleTranslation": "众多; 大量;（复）群众。"
  },
  {
    "word": "master",
    "phonetic": "/ˈmastə/",
    "pos": "v",
    "meaning": "精通, 掌握",
    "example": "Mark Twain was a master of fiction.",
    "exampleTranslation": "马克·吐温是小说大师。"
  },
  {
    "word": "mat",
    "phonetic": "/mæt/",
    "pos": "n",
    "meaning": "席子, 垫子",
    "example": "Wipe your feet on the mat before coming in.",
    "exampleTranslation": "进来前在垫子上擦擦脚。"
  },
  {
    "word": "match",
    "phonetic": "/mæt͡ʃ/",
    "pos": "v",
    "meaning": "使相配, 使成对 n. 比赛, 竞赛; 火柴",
    "example": "My local team are playing in a match against their arch-rivals today.",
    "exampleTranslation": "我本地的球队今天有一场对阵死敌的比赛。"
  },
  {
    "word": "material",
    "phonetic": "/məˈtɪəɹɪəl/",
    "pos": "n",
    "meaning": "材料, 原料",
    "example": "Asphalt, composed of oil and sand, is a widely used material for roads.",
    "exampleTranslation": "沥青由石油和沙子组成，是一种广泛使用的铺路材料。"
  },
  {
    "word": "matter",
    "phonetic": "/ˈmætə/",
    "pos": "n",
    "meaning": "事件, 问题, 物质 v. 要紧, 有重大关系",
    "example": "What's the matter?;   state matters",
    "exampleTranslation": "怎么了？；国家事务"
  },
  {
    "word": "mature",
    "phonetic": "/məˈtjʊə/",
    "pos": "adj",
    "meaning": "成熟的",
    "example": "She is quite mature for her age.",
    "exampleTranslation": "就她的年龄而言，她相当成熟。"
  },
  {
    "word": "maximum",
    "phonetic": "/ˈmæksɪməm/",
    "pos": "n",
    "meaning": "最大量; adj.最高的, 最大极限的",
    "example": "Use the proper dose for the maximum effect.",
    "exampleTranslation": "使用合适的剂量以达到最佳效果。"
  },
  {
    "word": "maybe",
    "phonetic": "/ˈmeɪbi/",
    "pos": "adv",
    "meaning": "可能, 大概, 也许",
    "example": "The results of the poll were inconclusive. We got two yeses, three nos, and four maybes.",
    "exampleTranslation": "投票结果没有定论。我们得到两票赞成、三票反对和四票弃权。"
  },
  {
    "word": "me",
    "phonetic": "/miː/",
    "pos": "pron",
    "meaning": "我",
    "example": "Can you hear me?",
    "exampleTranslation": "你能听到我说话吗？"
  },
  {
    "word": "meal",
    "phonetic": "/miːl/",
    "pos": "n",
    "meaning": "一餐",
    "example": "Breakfast is the morning meal, lunch is the noon meal, and dinner, or supper, is the evening meal.",
    "exampleTranslation": "早餐是早晨的一餐，午餐是中午的一餐，而晚餐则是晚上的一餐。"
  },
  {
    "word": "meaning",
    "phonetic": "/ˈmiːnɪŋ/",
    "pos": "n",
    "meaning": "意思, 含意",
    "example": "the meaning of life",
    "exampleTranslation": "生命的意义"
  },
  {
    "word": "means",
    "phonetic": "/miːnz/",
    "pos": "n",
    "meaning": "方法, 手段; 财产",
    "example": "Does she really mean what she said to him last night?",
    "exampleTranslation": "她昨晚对他说的话是认真的吗？"
  },
  {
    "word": "meanwhile",
    "phonetic": "/ˈmiːnhwaɪl/",
    "pos": "adv",
    "meaning": "同时",
    "example": "She speaks meanwhile.",
    "exampleTranslation": "她同时说道。"
  },
  {
    "word": "measure",
    "phonetic": "/ˈmɛʒə/",
    "pos": "v",
    "meaning": "量 n. 措施",
    "example": "We measured the temperature with a thermometer.   You should measure the angle with a spirit level.",
    "exampleTranslation": "量  措施"
  },
  {
    "word": "meat",
    "phonetic": "/miːt/",
    "pos": "n",
    "meaning": "肉",
    "example": "A large portion of domestic meat production comes from animals raised on factory farms.",
    "exampleTranslation": "国内肉类生产的很大一部分来自工厂化农场饲养的动物。"
  },
  {
    "word": "medal",
    "phonetic": "/ˈmeɾ.ɫ̩/",
    "pos": "n",
    "meaning": "奖牌",
    "example": "He medalled twice at the Olympics.",
    "exampleTranslation": "他在奥运会上获得了两枚奖牌。"
  },
  {
    "word": "media",
    "phonetic": "/ˈmiːdɪə/",
    "pos": "n",
    "meaning": "媒体;",
    "example": "This is a media.",
    "exampleTranslation": "这是一个媒体;"
  },
  {
    "word": "medical",
    "phonetic": "/ˈmɛdɪkl̩/",
    "pos": "adj",
    "meaning": "医学的, 医疗的",
    "example": "You'll have to get a medical before you apply for that job.",
    "exampleTranslation": "申请那份工作前你必须进行一次体检。"
  },
  {
    "word": "medicine",
    "phonetic": "/ˈmed(ɪ).sn̩/",
    "pos": "n",
    "meaning": "药",
    "example": "She's studying medicine at university because she wants to be a doctor in the future.",
    "exampleTranslation": "她在大学学医，因为她将来想成为一名医生。"
  },
  {
    "word": "medium",
    "phonetic": "/ˈmiːdɪəm/",
    "pos": "n",
    "meaning": "媒体, 方法, 媒介",
    "example": "Acrylics, oils, charcoal, and gouache are all mediums I used in my painting.",
    "exampleTranslation": "丙烯、油画、炭笔和水粉都是我绘画中使用的媒介。"
  },
  {
    "word": "meeting",
    "phonetic": "/ˈmiːtɪŋ/",
    "pos": "n",
    "meaning": "会; 集会",
    "example": "Meeting him will be exciting. I enjoy meeting new people.",
    "exampleTranslation": "会; 集会。"
  },
  {
    "word": "melon",
    "phonetic": "/ˈmɛlən/",
    "pos": "n",
    "meaning": "瓜",
    "example": "This is a melon.",
    "exampleTranslation": "这是一个瓜"
  },
  {
    "word": "member",
    "phonetic": "/ˈmɛmbə/",
    "pos": "n",
    "meaning": "成员, 会员",
    "example": "The I-beams were to become structural members of a pedestrian bridge.",
    "exampleTranslation": "这些工字梁将成为人行桥的结构构件。"
  },
  {
    "word": "memorial",
    "phonetic": "/məˈmoʊɹi.əl/",
    "pos": "n",
    "meaning": "纪念馆",
    "example": "a memorial building",
    "exampleTranslation": "一座纪念性建筑"
  },
  {
    "word": "memory",
    "phonetic": "/ˈmɛm(ə)ɹi/",
    "pos": "n",
    "meaning": "回忆, 记忆",
    "example": "Memory is a facility common to all animals.",
    "exampleTranslation": "记忆是所有动物共有的能力。"
  },
  {
    "word": "mend",
    "phonetic": "/mɛnd/",
    "pos": "v",
    "meaning": "修理, 修补",
    "example": "My trousers have a big rip in them and need a mend.",
    "exampleTranslation": "我的裤子破了个大洞，需要修补。"
  },
  {
    "word": "mental",
    "phonetic": "/ˈmɛntəl/",
    "pos": "adj",
    "meaning": "精神的; 脑力的",
    "example": "He is the most mental freshman I've seen yet.",
    "exampleTranslation": "他是我见过的最有头脑的新生。"
  },
  {
    "word": "mention",
    "phonetic": "/ˈmɛnʃən/",
    "pos": "n",
    "meaning": "提及 v. 提到, 说起",
    "example": "The mention is important.",
    "exampleTranslation": "这个mention很重要。"
  },
  {
    "word": "menu",
    "phonetic": "/ˈmɛnju/",
    "pos": "n",
    "meaning": "菜单",
    "example": "This is a menu.",
    "exampleTranslation": "这是一个菜单"
  },
  {
    "word": "merchant",
    "phonetic": "/ˈmɜːtʃənt/",
    "pos": "adj",
    "meaning": "商业的; 商人的 n. 商人",
    "example": "a merchanting service",
    "exampleTranslation": "一项贸易服务"
  },
  {
    "word": "merciful",
    "phonetic": "/ˈmɜːsɪfl̩/",
    "pos": "adj",
    "meaning": "仁慈的; 宽大的",
    "example": "That is merciful.",
    "exampleTranslation": "那真是仁慈。"
  },
  {
    "word": "mercy",
    "phonetic": "/ˈmɜːsi/",
    "pos": "n",
    "meaning": "怜悯",
    "example": "She took mercy on him and quit embarrassing him.",
    "exampleTranslation": "她怜悯他，不再让他难堪。"
  },
  {
    "word": "merely",
    "phonetic": "/ˈmɪəli/",
    "pos": "adv",
    "meaning": "仅仅, 只不过",
    "example": "He runs merely.",
    "exampleTranslation": "他只是跑步而已。"
  },
  {
    "word": "merry",
    "phonetic": "/ˈmɛɹi/",
    "pos": "adj",
    "meaning": "高兴的, 愉快的",
    "example": "We had a very merry Christmas.",
    "exampleTranslation": "我们度过了一个非常快乐的圣诞节。"
  },
  {
    "word": "mess",
    "phonetic": "/mɛs/",
    "pos": "n",
    "meaning": "凌乱",
    "example": "He made a mess of it.",
    "exampleTranslation": "他把事情搞得一团糟。"
  },
  {
    "word": "message",
    "phonetic": "/ˈmɛsɪd͡ʒ/",
    "pos": "n",
    "meaning": "消息, 音信",
    "example": "We've just received an urgent message from the President.",
    "exampleTranslation": "我们刚刚收到总统发来的紧急消息。"
  },
  {
    "word": "messy",
    "phonetic": "/ˈmɛsi/",
    "pos": "adj",
    "meaning": "乱七八糟的",
    "example": "Jim ran his fingers through his messy brown hair.",
    "exampleTranslation": "吉姆用手指梳理着他凌乱的棕色头发。"
  },
  {
    "word": "metal",
    "phonetic": "/ˈmɛtəl/",
    "pos": "n",
    "meaning": "金属 adj. 金属制成的",
    "example": "We have American Airlines tickets, but it's on British Airways metal.",
    "exampleTranslation": "金属  金属制成的"
  },
  {
    "word": "method",
    "phonetic": "/ˈmɛθəd/",
    "pos": "n",
    "meaning": "方法, 办法",
    "example": "If one method doesn't work, you should ask a friend to help you.",
    "exampleTranslation": "如果一个方法行不通，你应该请朋友帮忙。"
  },
  {
    "word": "microscope",
    "phonetic": "/ˈmaɪkɹəˌskəʊp/",
    "pos": "n",
    "meaning": "显微镜",
    "example": "I need the microscope.",
    "exampleTranslation": "我需要这个显微镜"
  },
  {
    "word": "microwave",
    "phonetic": "/ˈmaɪkɹəʊˌweɪv/",
    "pos": "n",
    "meaning": "微波",
    "example": "This is a microwave.",
    "exampleTranslation": "这是一个微波"
  },
  {
    "word": "middle",
    "phonetic": "/ˈmɪdəl/",
    "pos": "n",
    "meaning": "中间; 当中; 中级的",
    "example": "The middle of a circle is the point which has the same distance to every point of circle.",
    "exampleTranslation": "中间; 当中; 中级的。"
  },
  {
    "word": "midnight",
    "phonetic": "/ˈmɪdnʌɪt/",
    "pos": "n",
    "meaning": "午夜",
    "example": "The midnight is important.",
    "exampleTranslation": "这个midnight很重要。"
  },
  {
    "word": "mild",
    "phonetic": "/ˈmaɪld/",
    "pos": "adj",
    "meaning": "温和的, 暖和的, 凉爽的",
    "example": "a mild man",
    "exampleTranslation": "一个温和的男人。"
  },
  {
    "word": "mile",
    "phonetic": "/maɪ̯l/",
    "pos": "n",
    "meaning": "英里",
    "example": "The shot missed by a mile.",
    "exampleTranslation": "这一枪差得远呢。"
  },
  {
    "word": "milk",
    "phonetic": "/mɛlk/",
    "pos": "n",
    "meaning": "牛奶 v. 挤奶",
    "example": "Table three ordered three milks. (Formally: The guests at table three ordered three glasses of milk.)",
    "exampleTranslation": "牛奶  挤奶"
  },
  {
    "word": "millionaire",
    "phonetic": "/ˌmɪl.i.əˈnɛə(ɹ)/",
    "pos": "n",
    "meaning": "百万富翁",
    "example": "The millionaire is important.",
    "exampleTranslation": "这个millionaire很重要。"
  },
  {
    "word": "mind",
    "phonetic": "/maɪnd/",
    "pos": "n",
    "meaning": "思想, 想法 v. 介意, 关心",
    "example": "Despite advancing age, his mind was still as sharp as ever.",
    "exampleTranslation": "尽管年岁渐长，他的头脑依然和从前一样敏锐。"
  },
  {
    "word": "mineral",
    "phonetic": "/ˈmɪ.nəɹ.əl/",
    "pos": "n",
    "meaning": "矿物质, 矿物",
    "example": "I need the mineral.",
    "exampleTranslation": "我需要这个矿物质"
  },
  {
    "word": "minibus",
    "phonetic": "/ˈmɪnibʌs/",
    "pos": "n",
    "meaning": "小型公共汽车",
    "example": "This is a minibus.",
    "exampleTranslation": "这是一辆小型巴士。"
  },
  {
    "word": "minimum",
    "phonetic": "/ˈmɪn.ɪ.məm/",
    "pos": "adj",
    "meaning": "最小的",
    "example": "We need a minimum of three staff members on duty at all time.",
    "exampleTranslation": "我们至少需要三名员工随时在岗。"
  },
  {
    "word": "minister",
    "phonetic": "/ˈmɪnɪstə/",
    "pos": "n",
    "meaning": "部长; 牧师",
    "example": "The minister said a prayer on behalf of the entire congregation.",
    "exampleTranslation": "部长; 牧师。"
  },
  {
    "word": "minority",
    "phonetic": "/maɪˈnɒɹ.ɪ.ti/",
    "pos": "n",
    "meaning": "少数; 少数民族",
    "example": "Most people agreed, but a sizable minority were upset by the decision.",
    "exampleTranslation": "大多数人表示同意，但有相当一部分少数派对此决定感到不满。"
  },
  {
    "word": "minus",
    "phonetic": "/ˈmaɪnəs/",
    "pos": "prep",
    "meaning": "& adj. 负的, 减去的",
    "example": "a minus number",
    "exampleTranslation": "负的"
  },
  {
    "word": "minute",
    "phonetic": "/ˈmɪnɪt/",
    "pos": "n",
    "meaning": "分钟; 一会儿, 瞬间",
    "example": "You have twenty minutes to complete the test.",
    "exampleTranslation": "你有二十分钟来完成测试。"
  },
  {
    "word": "mirror",
    "phonetic": "/ˈmɘ.ɹɘ/",
    "pos": "n",
    "meaning": "镜子",
    "example": "I had a look in the mirror to see if the blood had come off my face.",
    "exampleTranslation": "我照了照镜子，看看脸上的血迹是否已经擦掉。"
  },
  {
    "word": "miss",
    "phonetic": "/mɪs/",
    "pos": "v",
    "meaning": "失去, 错过",
    "example": "I think I’ll give the meeting a miss.",
    "exampleTranslation": "我想我还是不去开会了。"
  },
  {
    "word": "missile",
    "phonetic": "/ˈmɪsaɪl/",
    "pos": "n",
    "meaning": "导弹",
    "example": "The Rhodians, who used leaden bullets, were able to project their missiles twice as far as the Persian slingers, who used large stones.",
    "exampleTranslation": "使用铅弹的罗得岛人，能将投射物的射程达到波斯投石手的两倍，后者使用的是大石块。"
  },
  {
    "word": "mist",
    "phonetic": "/mɪst/",
    "pos": "n",
    "meaning": "雾",
    "example": "It was difficult to see through the morning mist.",
    "exampleTranslation": "透过晨雾很难看清东西。"
  },
  {
    "word": "mistaken",
    "phonetic": "/mɪsˈteɪkən/",
    "pos": "adj",
    "meaning": "错误的",
    "example": "Don't mistake my kindness for weakness.",
    "exampleTranslation": "不要把我的善意误认为软弱。"
  },
  {
    "word": "mix",
    "phonetic": "/ˈmɪks/",
    "pos": "v",
    "meaning": "混合, 搅拌",
    "example": "Mix the eggs and milk with the flour until the consistency is smooth.",
    "exampleTranslation": "将鸡蛋和牛奶与面粉混合，直到质地顺滑。"
  },
  {
    "word": "mixture",
    "phonetic": "/ˈmɪkstʃə/",
    "pos": "n",
    "meaning": "混合物",
    "example": "A teaspoonful of the mixture to be taken three times daily after meals",
    "exampleTranslation": "每日三次，每次一茶匙，饭后服用。"
  },
  {
    "word": "mobile",
    "phonetic": "/ˈməʊbaɪl/",
    "pos": "adj",
    "meaning": "活动的, 可移动的",
    "example": "there are many business opportunities in mobile",
    "exampleTranslation": "移动领域有许多商业机会。"
  },
  {
    "word": "model",
    "phonetic": "/ˈmɒdl̩/",
    "pos": "n",
    "meaning": "模型, 原形; 范例; 模范",
    "example": "The beautiful model had her face on the cover of almost every fashion magazine imaginable.",
    "exampleTranslation": "这位美丽的模特几乎登上了所有你能想到的时尚杂志封面。"
  },
  {
    "word": "modem",
    "phonetic": "/ˈməʊdəm/",
    "pos": "n",
    "meaning": "调制解调器",
    "example": "I need the modem.",
    "exampleTranslation": "我需要这个调制解调器"
  },
  {
    "word": "modern",
    "phonetic": "/ˈmɒd(ə)n/",
    "pos": "adj",
    "meaning": "现代的",
    "example": "This is a modern building.",
    "exampleTranslation": "这是一座现代建筑。"
  },
  {
    "word": "modest",
    "phonetic": "/ˈmɑdəst/",
    "pos": "adj",
    "meaning": "谦虚的; 谦逊的",
    "example": "He earns a modest amount of money.",
    "exampleTranslation": "他赚的钱不算多。"
  },
  {
    "word": "moment",
    "phonetic": "/ˈməʊmənt/",
    "pos": "n",
    "meaning": "片刻, 瞬间",
    "example": "Wait a moment, while I lock the front door.",
    "exampleTranslation": "稍等一下，我去把前门锁上。"
  },
  {
    "word": "money",
    "phonetic": "/ˈmʌni/",
    "pos": "n",
    "meaning": "钱; 货币",
    "example": "Before colonial times cowry shells imported from Mauritius were used as money in Western Africa.",
    "exampleTranslation": "钱; 货币。"
  },
  {
    "word": "monitor",
    "phonetic": "/ˈmɒnɨtə/",
    "pos": "n",
    "meaning": "班长; 监视器",
    "example": "The camp monitors look after the children during the night, when the teachers are asleep.",
    "exampleTranslation": "当老师们睡觉时，营地管理员在夜间照看孩子们。"
  },
  {
    "word": "monkey",
    "phonetic": "/ˈmʌŋki/",
    "pos": "n",
    "meaning": "猴子",
    "example": "He had been visiting an area zoo when a monkey swung from its tree perch, swiped his glasses and hurled them into a hippo hole.",
    "exampleTranslation": "他当时正在参观当地一家动物园，一只猴子从树上的栖息处荡下来，抢走了他的眼镜并扔进了河马坑里。"
  },
  {
    "word": "month",
    "phonetic": "/mʌnθ/",
    "pos": "n",
    "meaning": "月, 月份",
    "example": "July is my favourite month.",
    "exampleTranslation": "七月是我最喜欢的月份。"
  },
  {
    "word": "monument",
    "phonetic": "/ˈmɒnjʊmənt/",
    "pos": "n",
    "meaning": "纪念碑, 纪念物",
    "example": "There is a monument on the town green to the soldiers who died in World War I.",
    "exampleTranslation": "镇上的公共草地上有一座纪念碑，纪念在第一次世界大战中牺牲的士兵。"
  },
  {
    "word": "moon",
    "phonetic": "/muːn/",
    "pos": "n",
    "meaning": "月球; 月光; 月状物",
    "example": "That's no moon, you idiot... it's a space station!",
    "exampleTranslation": "月球; 月光; 月状物。"
  },
  {
    "word": "mop",
    "phonetic": "/mɒp/",
    "pos": "n",
    "meaning": "v. 拖把 拖地",
    "example": "He gave the floor a quick mop to soak up the spilt juice.",
    "exampleTranslation": "拖把 拖地"
  },
  {
    "word": "moral",
    "phonetic": "/ˈmɒɹəl/",
    "pos": "adj",
    "meaning": "道德的 n.寓意, 道德启示",
    "example": "a candidate with strong morals",
    "exampleTranslation": "道德的 寓意"
  },
  {
    "word": "more",
    "phonetic": "/ˈmɔː/",
    "pos": "adj",
    "meaning": "另外的; adv.再; 另外; 更 n. 更多的量; morning n. 早晨, 上午",
    "example": "I could no more climb that than fly!",
    "exampleTranslation": "我爬不上去，就像我不会飞一样！"
  },
  {
    "word": "moslem",
    "phonetic": "/ˈmɑːzləm/",
    "pos": "n",
    "meaning": "穆斯林, 伊斯兰教徒",
    "example": "I need the moslem.",
    "exampleTranslation": "我需要这个穆斯林"
  },
  {
    "word": "mother",
    "phonetic": "/ˈmʌðə(ɹ)/",
    "pos": "n",
    "meaning": "母亲",
    "example": "He had something of his mother in him.",
    "exampleTranslation": "他身上有他母亲的影子。"
  },
  {
    "word": "motherland",
    "phonetic": "/ˈmʌðɚˌlænd/",
    "pos": "n",
    "meaning": "祖国",
    "example": "This is a motherland.",
    "exampleTranslation": "这是一个祖国"
  },
  {
    "word": "motivation",
    "phonetic": "/ˌmoʊtɪˈveɪʃn/",
    "pos": "n",
    "meaning": "动机",
    "example": "The motivation scores showed that 65% of people wanted to visit our website to learn more about the offer after watching the commercial.",
    "exampleTranslation": "动机评分显示，65%的人在观看广告后想访问我们的网站以了解更多优惠信息。"
  },
  {
    "word": "motor",
    "phonetic": "/ˈməʊtə/",
    "pos": "n",
    "meaning": "发动机, 马达",
    "example": "Nice motor!",
    "exampleTranslation": "好车！"
  },
  {
    "word": "motorcycle",
    "phonetic": "/ˈməʊtəˌsaikəl/",
    "pos": "n",
    "meaning": "摩托车",
    "example": "This is a motorcycle.",
    "exampleTranslation": "这是一辆摩托车。"
  },
  {
    "word": "motto",
    "phonetic": "/ˈmɒtəʊ/",
    "pos": "n",
    "meaning": "箴言, 格言",
    "example": "I need the motto.",
    "exampleTranslation": "我需要这个箴言"
  },
  {
    "word": "mountain",
    "phonetic": "/ˈmaʊntɪn/",
    "pos": "n",
    "meaning": "山, 山脉",
    "example": "We spent the weekend hiking in the mountains.",
    "exampleTranslation": "我们周末去山里徒步旅行了。"
  },
  {
    "word": "mountainous",
    "phonetic": "/ˈmaʊntɪnəs/",
    "pos": "adj",
    "meaning": "多山的",
    "example": "That is mountainous.",
    "exampleTranslation": "那里是山区。"
  },
  {
    "word": "mourn",
    "phonetic": "/mɔːn/",
    "pos": "v",
    "meaning": "哀痛; 哀悼",
    "example": "She wants to mourn.",
    "exampleTranslation": "哀痛; 哀悼。"
  },
  {
    "word": "moustache",
    "phonetic": "/məˈstɑːʃ/",
    "pos": "n",
    "meaning": "小胡子",
    "example": "The moustache is important.",
    "exampleTranslation": "这个moustache很重要。"
  },
  {
    "word": "move",
    "phonetic": "/muːv/",
    "pos": "v",
    "meaning": "移动, 搬动, 搬家",
    "example": "A slight move of the tiller, and the boat will go off course.",
    "exampleTranslation": "舵稍微一动，船就会偏离航线。"
  },
  {
    "word": "movement",
    "phonetic": "/ˈmuːv.mənt/",
    "pos": "n",
    "meaning": "运动, 活动",
    "example": "I saw a movement in that grass on the hill.",
    "exampleTranslation": "我看到山上那片草丛里有动静。"
  },
  {
    "word": "movie",
    "phonetic": "/ˈmuːvi/",
    "pos": "n",
    "meaning": "电影",
    "example": "Let's go to the movies.",
    "exampleTranslation": "我们去看电影吧。"
  },
  {
    "word": "mud",
    "phonetic": "/mʌd/",
    "pos": "n",
    "meaning": "泥, 泥浆",
    "example": "The campaign issues got lost in all the mud from both parties.",
    "exampleTranslation": "竞选议题被两党间的相互诋毁淹没了。"
  },
  {
    "word": "muddy",
    "phonetic": "/ˈmʌdi/",
    "pos": "adj",
    "meaning": "多泥的, 泥泞的",
    "example": "If you muddy your shoes don't wear them inside.",
    "exampleTranslation": "如果你的鞋子沾了泥，就别穿进屋里。"
  },
  {
    "word": "multiply",
    "phonetic": "/ˈmʌltɪplaɪ/",
    "pos": "v",
    "meaning": "乘; 使相乘",
    "example": "when you multiply 3 by 7, you get 21;  he multiplied several numbers",
    "exampleTranslation": "3乘以7等于21；他乘了好几个数字。"
  },
  {
    "word": "murder",
    "phonetic": "/ˈmɜːdə(ɹ)/",
    "pos": "v",
    "meaning": "谋杀",
    "example": "The defendant was charged with murder.",
    "exampleTranslation": "被告被指控犯有谋杀罪。"
  },
  {
    "word": "museum",
    "phonetic": "/mjuːˈziːəm/",
    "pos": "n",
    "meaning": "博物馆, 博物院",
    "example": "The museum is important.",
    "exampleTranslation": "这个museum很重要。"
  },
  {
    "word": "mushroom",
    "phonetic": "/ˈmʌʃˌɹuːm/",
    "pos": "n",
    "meaning": "蘑菇",
    "example": "Some mushrooms are edible and taste good, while others are poisonous and taste foul.",
    "exampleTranslation": "有些蘑菇可食用且味道鲜美，而有些则有毒且味道难闻。"
  },
  {
    "word": "music",
    "phonetic": "/ˈmjuːzɪk/",
    "pos": "n",
    "meaning": "音乐, 乐曲",
    "example": "I keep listening to this music because it's a masterpiece.",
    "exampleTranslation": "我一直听这首音乐，因为它是杰作。"
  },
  {
    "word": "musical",
    "phonetic": "/ˈmju.zɪ.kəl/",
    "pos": "adj",
    "meaning": "音乐的, 爱好音乐的 n. 音乐片",
    "example": "musical proportion; musical instruments",
    "exampleTranslation": "音乐比例；乐器"
  },
  {
    "word": "musician",
    "phonetic": "/mjuˈzɪʃən/",
    "pos": "n",
    "meaning": "音乐家, 乐师",
    "example": "The musician is important.",
    "exampleTranslation": "这个musician很重要。"
  },
  {
    "word": "mustard",
    "phonetic": "/ˈmas.təd/",
    "pos": "n",
    "meaning": "芥末, 芥子粉",
    "example": "When the waitress brought the food, I asked whether she had any Dijon mustard.",
    "exampleTranslation": "当服务员端来食物时，我问她是否有第戎芥末酱。"
  },
  {
    "word": "mutton",
    "phonetic": "/ˈmʌtn̩/",
    "pos": "n",
    "meaning": "羊肉",
    "example": "I need the mutton.",
    "exampleTranslation": "我需要这个羊肉"
  },
  {
    "word": "my",
    "phonetic": "/mi/",
    "pos": "pron",
    "meaning": "我的",
    "example": "My, what big teeth you have!",
    "exampleTranslation": "天啊，你的牙齿真大！"
  },
  {
    "word": "myself",
    "phonetic": "/maɪˈsɛlf/",
    "pos": "pron",
    "meaning": "我自己",
    "example": "I taught myself.",
    "exampleTranslation": "我是自学的。"
  },
  {
    "word": "nail",
    "phonetic": "/neɪl/",
    "pos": "n",
    "meaning": "钉子",
    "example": "When I'm nervous I bite my nails.",
    "exampleTranslation": "我紧张时会咬指甲。"
  },
  {
    "word": "name",
    "phonetic": "/neɪm/",
    "pos": "n",
    "meaning": "姓名, 名称 v. 命名",
    "example": "I've never liked the name my parents gave me so I changed it at the age of twenty.",
    "exampleTranslation": "我从来不喜欢父母给我起的名字，所以在二十岁时改了名。"
  },
  {
    "word": "narrow",
    "phonetic": "/ˈnæɹəʊ/",
    "pos": "adj",
    "meaning": "狭窄的",
    "example": "the narrows of New York harbor",
    "exampleTranslation": "纽约港的狭窄水道"
  },
  {
    "word": "nation",
    "phonetic": "/ˈneɪ.ʃən/",
    "pos": "n",
    "meaning": "民族, 国家",
    "example": "The Kurdish people constitute a nation in the Middle East",
    "exampleTranslation": "库尔德人在中东构成一个民族"
  },
  {
    "word": "national",
    "phonetic": "/ˈnæʃ(ə)nəl/",
    "pos": "adj",
    "meaning": "国家的, 全国性的, 民族的",
    "example": "The diplomats were advised not to interact with any foreign nationals except on official duty.",
    "exampleTranslation": "外交官被建议除非执行公务，否则不要与任何外国国民交往。"
  },
  {
    "word": "nationality",
    "phonetic": "/-ˈnæl.ti/",
    "pos": "n",
    "meaning": "国籍",
    "example": "The nationality is important.",
    "exampleTranslation": "这个nationality很重要。"
  },
  {
    "word": "nationwide",
    "phonetic": "/ˌneɪ.ʃənˈwaɪd/",
    "pos": "adv",
    "meaning": "全国范围内地, 全国性地",
    "example": "There was a nationwide search on for the bankrobbers.",
    "exampleTranslation": "全国范围内都在搜捕银行劫匪。"
  },
  {
    "word": "native",
    "phonetic": "/ˈneɪtɪv/",
    "pos": "adj",
    "meaning": "本土的, 本国的",
    "example": "English is not my native language.",
    "exampleTranslation": "英语不是我的母语。"
  },
  {
    "word": "natural",
    "phonetic": "/ˈnætʃəɹəl/",
    "pos": "adj",
    "meaning": "自然的",
    "example": "He's a natural on the saxophone.",
    "exampleTranslation": "他吹萨克斯管很有天赋。"
  },
  {
    "word": "nature",
    "phonetic": "/ˈnæɪ̯tʃə/",
    "pos": "n",
    "meaning": "自然界, 本性",
    "example": "Nature never lies (i.e. tells untruths).",
    "exampleTranslation": "自然从不撒谎。"
  },
  {
    "word": "navy",
    "phonetic": "/ˈneɪvi/",
    "pos": "n",
    "meaning": "海军",
    "example": "This is a navy.",
    "exampleTranslation": "这是一个海军"
  },
  {
    "word": "near",
    "phonetic": "/nɪə(ɹ)/",
    "pos": "adj",
    "meaning": "亲近的, , 近的 adv. 不远 prep. 在…附近, nearby adj. 附近的",
    "example": "The ship nears the land.",
    "exampleTranslation": "船靠近陆地。"
  },
  {
    "word": "nearly",
    "phonetic": "/ˈniːɹli/",
    "pos": "adv",
    "meaning": "将近, 几乎",
    "example": "He left a nearly full beer on the bar.",
    "exampleTranslation": "他在吧台上留下了一杯几乎满的啤酒。"
  },
  {
    "word": "neat",
    "phonetic": "/niːt/",
    "pos": "adj",
    "meaning": "整洁的; 灵巧的",
    "example": "My room is neat because I tidied it this morning.  She has very neat hair.",
    "exampleTranslation": "我的房间很整洁，因为我今天早上收拾过。她的头发非常整齐。"
  },
  {
    "word": "necessary",
    "phonetic": "/ˈnɛsəsɹɪ/",
    "pos": "adj",
    "meaning": "必需的, 必要的",
    "example": "Although I wished to think that all was false, it was yet necessary that I, who thus thought, must in some sense exist.",
    "exampleTranslation": "尽管我希望认为一切都是虚假的，但这样思考的我，在某种意义上必然存在。"
  },
  {
    "word": "neck",
    "phonetic": "/nɛk/",
    "pos": "n",
    "meaning": "颈, 脖子",
    "example": "Giraffes have long necks.",
    "exampleTranslation": "长颈鹿有长长的脖子。"
  },
  {
    "word": "necklace",
    "phonetic": "/ˈnɛkləs/",
    "pos": "n",
    "meaning": "项链",
    "example": "a necklace of coral islands",
    "exampleTranslation": "一串珊瑚岛项链"
  },
  {
    "word": "need",
    "phonetic": "/niːd/",
    "pos": "n",
    "meaning": "需要, 需求 modal v. 需要, 必须",
    "example": "I've always tried to have few needs beyond food, clothing and shelter.",
    "exampleTranslation": "除了衣食住行，我一直努力让自己需求甚少。"
  },
  {
    "word": "needle",
    "phonetic": "/ˈniː.dl/",
    "pos": "n",
    "meaning": "针",
    "example": "The seamstress threaded the needle to sew on a button.",
    "exampleTranslation": "裁缝穿针引线，缝上了一颗纽扣。"
  },
  {
    "word": "negotiate",
    "phonetic": "/nəˈɡəʊ.ʃi.eɪt/",
    "pos": "v",
    "meaning": "(与某人)商议, 谈判, 磋商",
    "example": "The client and server computers must first negotiate a network protocol to be used.",
    "exampleTranslation": "(与某人)商议。"
  },
  {
    "word": "neither",
    "phonetic": "/ˈnaɪð.ə(ɹ)/",
    "pos": "adj",
    "meaning": "（两者）都不; 也不",
    "example": "Just as you would not correct it, neither would I.",
    "exampleTranslation": "（两者）都不; 也不。"
  },
  {
    "word": "nephew",
    "phonetic": "/ˈnɛf.ju/",
    "pos": "n",
    "meaning": "侄子, 外甥",
    "example": "This is a nephew.",
    "exampleTranslation": "这是一个侄子"
  },
  {
    "word": "nervous",
    "phonetic": "/ˈnɜːvəs/",
    "pos": "adj",
    "meaning": "紧张不安的",
    "example": "That is nervous.",
    "exampleTranslation": "那真让人紧张。"
  },
  {
    "word": "nest",
    "phonetic": "/nɛst/",
    "pos": "n",
    "meaning": "巢; 窝",
    "example": "That nightclub is a nest of strange people!",
    "exampleTranslation": "巢; 窝。"
  },
  {
    "word": "net",
    "phonetic": "/net/",
    "pos": "n",
    "meaning": "网",
    "example": "This is a net.",
    "exampleTranslation": "这是一个网"
  },
  {
    "word": "network",
    "phonetic": "/nɛtwɜːk/",
    "pos": "n",
    "meaning": "网络, 网状系统",
    "example": "A network of roads crisscrossed the country.",
    "exampleTranslation": "道路纵横交错，遍布全国。"
  },
  {
    "word": "never",
    "phonetic": "/ˈnɛv.ə(ɹ)/",
    "pos": "adv",
    "meaning": "决不, 从来没有",
    "example": "I finally finished, and I never want to do that again.",
    "exampleTranslation": "我终于完成了，再也不想做那种事了。"
  },
  {
    "word": "new",
    "phonetic": "/njʉː/",
    "pos": "adj",
    "meaning": "新的; 新鲜的",
    "example": "Out with the old, in with the new.",
    "exampleTranslation": "旧的不去，新的不来。"
  },
  {
    "word": "news",
    "phonetic": "/njuːz/",
    "pos": "n",
    "meaning": "新闻, 消息",
    "example": "Is there any news about the storm?",
    "exampleTranslation": "有关于这场风暴的最新消息吗？"
  },
  {
    "word": "newspaper",
    "phonetic": "/ˈnjuːsˌpeɪpə/",
    "pos": "n",
    "meaning": "报纸",
    "example": "She newspapered one end of the room before painting the bookcase.",
    "exampleTranslation": "她在粉刷书柜前，先用报纸铺满了房间的一端。"
  },
  {
    "word": "next",
    "phonetic": "/nɛkst/",
    "pos": "adj",
    "meaning": "紧挨着的, v. 随后, 下一步 n. 下一个人（东西）",
    "example": "Next, please, don't hold up the queue!",
    "exampleTranslation": "下一位，请别耽误队伍！"
  },
  {
    "word": "nice",
    "phonetic": "/naɪs/",
    "pos": "adj",
    "meaning": "令人愉快的; 好的, 漂亮的",
    "example": "What is a nice person like you doing in a place like this?",
    "exampleTranslation": "像你这样好的人怎么会来这种地方？"
  },
  {
    "word": "niece",
    "phonetic": "/niːs/",
    "pos": "n",
    "meaning": "侄女, 甥女",
    "example": "My niece just celebrated her 15th birthday.",
    "exampleTranslation": "我的侄女刚庆祝完她的十五岁生日。"
  },
  {
    "word": "night",
    "phonetic": "/naɪt/",
    "pos": "n",
    "meaning": "夜; 夜间",
    "example": "How do you sleep at night when you attack your kids like that!?",
    "exampleTranslation": "夜; 夜间。"
  },
  {
    "word": "noble",
    "phonetic": "/ˈnəʊbəl/",
    "pos": "adj",
    "meaning": "高贵的, 贵族的",
    "example": "This country house was occupied by nobles in the 16th century.",
    "exampleTranslation": "这栋乡间别墅在十六世纪曾由贵族居住。"
  },
  {
    "word": "nobody",
    "phonetic": "/ˈnəʊ.bɒ.di/",
    "pos": "n",
    "meaning": "渺小人物 pron. 没有人, 谁也不",
    "example": "Whether you're a nobody or a player, everyone in Tinseltown wants to be King of Hollywood! - Conquering Hollywood",
    "exampleTranslation": "渺小人物  没有人"
  },
  {
    "word": "nod",
    "phonetic": "/nɔd/",
    "pos": "v",
    "meaning": "点头",
    "example": "For the fifth time in her career she received a Grammy nod, she has yet to win the award.",
    "exampleTranslation": "这是她职业生涯中第五次获得格莱美奖提名，但尚未获奖。"
  },
  {
    "word": "noise",
    "phonetic": "/nɔɪz/",
    "pos": "n",
    "meaning": "声音, 噪声, 喧闹声",
    "example": "He knew that it was trash day, when the garbage collectors made all the noise.",
    "exampleTranslation": "他知道今天是收垃圾的日子，垃圾清运工们会弄出很大声响。"
  },
  {
    "word": "noisy",
    "phonetic": "/ˈnɔːɪzɪ/",
    "pos": "adj",
    "meaning": "喧闹的, 嘈杂的",
    "example": "the noisy crowd.",
    "exampleTranslation": "喧闹的人群。"
  },
  {
    "word": "none",
    "phonetic": "/nɒn/",
    "pos": "pron",
    "meaning": "无任何东西或人, 无一人",
    "example": "I felt none the worse for my recent illness.",
    "exampleTranslation": "我感觉最近这场病并没有让我变得更糟。"
  },
  {
    "word": "noodle",
    "phonetic": "/nuːdl̩/",
    "pos": "n",
    "meaning": "面条",
    "example": "She slurped a long noodle up out of her soup.",
    "exampleTranslation": "她从汤里吸溜起一根长长的面条。"
  },
  {
    "word": "noon",
    "phonetic": "/nuːn/",
    "pos": "n",
    "meaning": "中午, 正午",
    "example": "Let's meet at noon.",
    "exampleTranslation": "我们中午见面吧。"
  },
  {
    "word": "nor",
    "phonetic": "/nɔː/",
    "pos": "conj",
    "meaning": "也不",
    "example": "Nor did I stop to think, but ran.",
    "exampleTranslation": "我也没停下来思考，而是直接跑了。"
  },
  {
    "word": "normal",
    "phonetic": "/ˈnɔːməl/",
    "pos": "n",
    "meaning": "正规, 常态 adj. 正常的, 正规的, 标准的",
    "example": "Heavy workload is the new normal.",
    "exampleTranslation": "工作量大已成为新常态。"
  },
  {
    "word": "north",
    "phonetic": "/noːθ/",
    "pos": "adj",
    "meaning": "北的;  adv. 向北方； n. 北; 北方; 北部",
    "example": "Minnesota is in the north of the USA.",
    "exampleTranslation": "明尼苏达州位于美国北部。"
  },
  {
    "word": "northeast",
    "phonetic": "/ˌnɔːrθˈiːst/",
    "pos": "n",
    "meaning": "东北（部）",
    "example": "I need the northeast.",
    "exampleTranslation": "我需要这个东北（部）"
  },
  {
    "word": "northern",
    "phonetic": "/ˈnɔːðn̩/",
    "pos": "adj",
    "meaning": "北方的, 北部的",
    "example": "Les Dawson was a famous northern comedian.",
    "exampleTranslation": "莱斯·道森是北方著名的喜剧演员。"
  },
  {
    "word": "northwest",
    "phonetic": "/ˌnɔːrθˈwest/",
    "pos": "n",
    "meaning": "西北",
    "example": "This is a northwest.",
    "exampleTranslation": "这是一个西北"
  },
  {
    "word": "nose",
    "phonetic": "/nəʊz/",
    "pos": "n",
    "meaning": "鼻",
    "example": "She has a cold in the nose.",
    "exampleTranslation": "她鼻子感冒了。"
  },
  {
    "word": "not",
    "phonetic": "/nɒt/",
    "pos": "adv",
    "meaning": "不, 没",
    "example": "Did you take out the trash? No, I did not.",
    "exampleTranslation": "你把垃圾倒了吗？不，我没有。"
  },
  {
    "word": "note",
    "phonetic": "/nəʊt/",
    "pos": "n",
    "meaning": "便条, 笔记, 注释; 钞票; 音符, 音调 v. 记下,",
    "example": "a poet of note",
    "exampleTranslation": "一位著名诗人"
  },
  {
    "word": "notebook",
    "phonetic": "/ˈnəʊtˌbʊk/",
    "pos": "n",
    "meaning": "笔记簿",
    "example": "This is a notebook.",
    "exampleTranslation": "这是一本笔记本。"
  },
  {
    "word": "nothing",
    "phonetic": "/ˈnʌθɪŋ/",
    "pos": "n",
    "meaning": "没有东西, 没有什么 adv. 一点也不; 并不",
    "example": "You're nothing to me now!",
    "exampleTranslation": "你现在对我来说什么都不是！"
  },
  {
    "word": "notice",
    "phonetic": "/ˈnəʊtɪs/",
    "pos": "n",
    "meaning": "布告, 通告; 注意 v. 注意, 注意到",
    "example": "He took no notice of the changes, and went on as though nothing had happened.",
    "exampleTranslation": "他没有注意到这些变化，继续行事仿佛什么都没发生。"
  },
  {
    "word": "novel",
    "phonetic": "/ˈnɒvl̩/",
    "pos": "n",
    "meaning": "（长篇）小说",
    "example": "The novel is important.",
    "exampleTranslation": "这个novel很重要。"
  },
  {
    "word": "novelist",
    "phonetic": "/ˈnɒvəlɪst/",
    "pos": "n",
    "meaning": "小说家",
    "example": "I need the novelist.",
    "exampleTranslation": "我需要这个小说家"
  },
  {
    "word": "now",
    "phonetic": "/naʊ/",
    "pos": "adv",
    "meaning": "现在",
    "example": "Now is the right time.",
    "exampleTranslation": "现在正是时候。"
  },
  {
    "word": "nowadays",
    "phonetic": "/ˈnaʊ.ə.deɪz/",
    "pos": "adv",
    "meaning": "当今, 现在",
    "example": "They work nowadays.",
    "exampleTranslation": "他们如今在工作。"
  },
  {
    "word": "nowhere",
    "phonetic": "/ˈnəʊ.wɛə/",
    "pos": "adv",
    "meaning": "任何地方都不; 无处",
    "example": "They went on a cruise to nowhere.",
    "exampleTranslation": "他们进行了一次漫无目的的巡航。"
  },
  {
    "word": "nuclear",
    "phonetic": "/ˈn(j)ukliɚ/",
    "pos": "adj",
    "meaning": "原子核的, 原子能的, 核动力的",
    "example": "a nuclear reactor",
    "exampleTranslation": "一座核反应堆"
  },
  {
    "word": "numb",
    "phonetic": "/nʌm/",
    "pos": "adj",
    "meaning": "麻木的; 失去感觉的",
    "example": "The dentist gave me novocaine to numb my tooth before drilling, thank goodness.",
    "exampleTranslation": "牙医在钻牙前给我打了奴佛卡因麻醉牙齿，谢天谢地。"
  },
  {
    "word": "number",
    "phonetic": "/ˈnʌmbə/",
    "pos": "n",
    "meaning": "数, 数字, 号码; 数量",
    "example": "Zero, one, −1, 2.5, and pi are all numbers.",
    "exampleTranslation": "零、一、负一、2.5和圆周率都是数字。"
  },
  {
    "word": "nurse",
    "phonetic": "/nɜːs/",
    "pos": "n",
    "meaning": "护士; 保育员",
    "example": "They hired a nurse to care for their young boy.",
    "exampleTranslation": "他们雇了一位护士来照顾他们的小男孩。"
  },
  {
    "word": "nursery",
    "phonetic": "/ˈnɜːsəɹi/",
    "pos": "n",
    "meaning": "托儿所",
    "example": "Commerce is the nursery of seamen.",
    "exampleTranslation": "商业是海员的摇篮。"
  },
  {
    "word": "nut",
    "phonetic": "/nɐt/",
    "pos": "n",
    "meaning": "坚果",
    "example": "There are many sort of nuts: peanuts, cashews, pistachios, Brazil nuts and more.",
    "exampleTranslation": "坚果种类繁多：花生、腰果、开心果、巴西坚果等等。"
  },
  {
    "word": "nutrition",
    "phonetic": "/njuːˈtɹɪ.ʃən/",
    "pos": "n",
    "meaning": "营养",
    "example": "This is a nutrition.",
    "exampleTranslation": "这是一个营养"
  },
  {
    "word": "obey",
    "phonetic": "/əʊˈbeɪ/",
    "pos": "v",
    "meaning": "服从, 顺从",
    "example": "I obey it.",
    "exampleTranslation": "我服从它。"
  },
  {
    "word": "object",
    "phonetic": "/ˈɒb.d͡ʒɛkt/",
    "pos": "n",
    "meaning": ".物体, 目标, 宾语, 对象 v. 反对, 拒绝, 抗议",
    "example": "Mary Jane had been the object of Peter's affection for years.",
    "exampleTranslation": "玛丽·简多年来一直是彼得爱慕的对象。"
  },
  {
    "word": "observe",
    "phonetic": "/əbˈzɝv/",
    "pos": "v",
    "meaning": "观察, 监视, 遵守；纪念；庆祝",
    "example": "From this vantage point we can observe the behavior of the animals in their natural habitat.",
    "exampleTranslation": "从这个有利位置，我们可以观察动物在自然栖息地中的行为。"
  },
  {
    "word": "obtain",
    "phonetic": "/əbˈteɪn/",
    "pos": "v",
    "meaning": "获得; 得到",
    "example": "They obtain the project.",
    "exampleTranslation": "获得; 得到。"
  },
  {
    "word": "obvious",
    "phonetic": "/ˈɑːbviəs/",
    "pos": "adj",
    "meaning": "显然",
    "example": "This is obvious.",
    "exampleTranslation": "这是显而易见的。"
  },
  {
    "word": "occupation",
    "phonetic": "/ɒkjəˈpeɪʃən/",
    "pos": "n",
    "meaning": "职业, 工作",
    "example": "This is a occupation.",
    "exampleTranslation": "这是一个职业"
  },
  {
    "word": "occupy",
    "phonetic": "/ˈɒkjʊpaɪ/",
    "pos": "v",
    "meaning": "占, 占用, 占领, 占据",
    "example": "I occupy it.",
    "exampleTranslation": "我占用了它。"
  },
  {
    "word": "occur",
    "phonetic": "/əˈkɜː/",
    "pos": "v",
    "meaning": "发生",
    "example": "The liftoff will occur in exactly twelve seconds.",
    "exampleTranslation": "升空将在整整十二秒后发生。"
  },
  {
    "word": "ocean",
    "phonetic": "/ˈəʊ.ʃən/",
    "pos": "n",
    "meaning": "海洋",
    "example": "The island is surrounded by ocean",
    "exampleTranslation": "这座岛屿被海洋环绕。"
  },
  {
    "word": "oceania",
    "phonetic": "/ˌoʊʃiˈæniə/",
    "pos": "n",
    "meaning": "大洋洲",
    "example": "This is a oceania.",
    "exampleTranslation": "这是大洋洲。"
  },
  {
    "word": "of",
    "phonetic": "/ɔv/",
    "pos": "prep",
    "meaning": "...的, 由...制成的, 关于, 对于",
    "example": "She went of.",
    "exampleTranslation": "她离开了。"
  },
  {
    "word": "off",
    "phonetic": "/ɔːf/",
    "pos": "prep",
    "meaning": "离开,  adv. 离开;（电、自来水）停了, 中断",
    "example": "He has been very obviously an untrustworthy narrator right from the off.",
    "exampleTranslation": "从一开始，他就显然是一个不可靠的叙述者。"
  },
  {
    "word": "offence",
    "phonetic": "/əˈfens/",
    "pos": "n",
    "meaning": "犯罪, 冒犯",
    "example": "This is a offence.",
    "exampleTranslation": "这是一个犯罪"
  },
  {
    "word": "offer",
    "phonetic": "/ˈɑfɚ/",
    "pos": "n",
    "meaning": "出价, 提议v. 提供; 建议; 表示愿意",
    "example": "I decline your offer to contract.",
    "exampleTranslation": "我拒绝你的签约提议。"
  },
  {
    "word": "office",
    "phonetic": "/ˈɑfɪs/",
    "pos": "n",
    "meaning": "办公室",
    "example": "When the office of Secretary of State is vacant, its duties fall upon an official within the department.",
    "exampleTranslation": "当国务卿职位空缺时，其职责由部门内的一名官员承担。"
  },
  {
    "word": "officer",
    "phonetic": "/ˈɑfɪsɚ/",
    "pos": "n",
    "meaning": "军官; 警察, 警官",
    "example": "This is a officer.",
    "exampleTranslation": "这是一个军官; 警察"
  },
  {
    "word": "official",
    "phonetic": "/əˈfɪʃəl/",
    "pos": "n",
    "meaning": "官员, 公务员 adj.官方的, 正式的",
    "example": "David Barnes was the official charged with the running of the sports club.",
    "exampleTranslation": "大卫·巴恩斯是负责运营这家体育俱乐部的官员。"
  },
  {
    "word": "offshore",
    "phonetic": "/ɒfˈʃɔː(ɹ)/",
    "pos": "adj",
    "meaning": "近海的",
    "example": "an offshore oil rig",
    "exampleTranslation": "一座海上石油钻井平台。"
  },
  {
    "word": "often",
    "phonetic": "/ˈɑf(t)ən/",
    "pos": "adv",
    "meaning": "经常, 常常",
    "example": "I often walk to work when the weather is nice.",
    "exampleTranslation": "天气好的时候，我经常步行上班。"
  },
  {
    "word": "oh",
    "phonetic": "/əʊ/",
    "pos": "int",
    "meaning": "哦！啊！",
    "example": "Oh! I didn't see you there.",
    "exampleTranslation": "哦！我刚才没看到你在那儿。"
  },
  {
    "word": "oil",
    "phonetic": "/ɔɪl/",
    "pos": "n",
    "meaning": "油, 石油",
    "example": "I prefer to paint in oil",
    "exampleTranslation": "我更喜欢画油画。"
  },
  {
    "word": "oilfield",
    "phonetic": "/ˈɔɪlfiːld/",
    "pos": "n",
    "meaning": "油田",
    "example": "This is a oilfield.",
    "exampleTranslation": "这是一个油田"
  },
  {
    "word": "ok",
    "phonetic": "/ˌoʊˈkeɪ/",
    "pos": "adv",
    "meaning": "（口语）好, 对, 不错",
    "example": "Do you think it's OK to stay here for the night?",
    "exampleTranslation": "（口语）好。"
  },
  {
    "word": "old",
    "phonetic": "/ˈɒʊld/",
    "pos": "adj",
    "meaning": "老的, 旧的",
    "example": "A civilised society should always look after the old in the community.",
    "exampleTranslation": "一个文明的社会应该始终照顾社区中的老年人。"
  },
  {
    "word": "on",
    "phonetic": "/ɒn/",
    "pos": "prep",
    "meaning": "在...之上, , 靠近, 向,  关于, adv. 在上, 向前, 行动中, once n. 一次 adv.一度,  从前 conj. 一旦",
    "example": "Can you on the light?",
    "exampleTranslation": "你能打开灯吗？"
  },
  {
    "word": "one",
    "phonetic": "/wan/",
    "pos": "pron",
    "meaning": "一个人, 任何人, 一方",
    "example": "I knew as soon I met him that John was the one for me and we were married within a month.",
    "exampleTranslation": "我一见到约翰就知道他是我的真命天子，我们一个月内就结婚了。"
  },
  {
    "word": "oneself",
    "phonetic": "/wʌnˈsɛlf/",
    "pos": "pron",
    "meaning": "自己; 自身",
    "example": "Teaching oneself to swim can be dangerous.",
    "exampleTranslation": "自己; 自身。"
  },
  {
    "word": "onion",
    "phonetic": "/ˈʌŋjɪn/",
    "pos": "n",
    "meaning": "洋葱; 洋葱头",
    "example": "The onion is important.",
    "exampleTranslation": "这个onion很重要。"
  },
  {
    "word": "only",
    "phonetic": "/ˈəʊn.li/",
    "pos": "adj",
    "meaning": "惟一的, 仅有的 adv. 仅仅, 只, 才",
    "example": "He is the only doctor for miles.",
    "exampleTranslation": "他是方圆几英里内唯一的医生。"
  },
  {
    "word": "onto",
    "phonetic": "/ˈɒn.tuː/",
    "pos": "prep",
    "meaning": "到…的上面",
    "example": "Considered as a function on the real numbers, the exponential function is not onto.",
    "exampleTranslation": "作为实数上的函数，指数函数不是满射。"
  },
  {
    "word": "open",
    "phonetic": "/ˈəʊ.pən/",
    "pos": "adj",
    "meaning": "开着的, 开口的 v. 开, 打开",
    "example": "an open hand; an open flower",
    "exampleTranslation": "张开的手；盛开的花"
  },
  {
    "word": "opening",
    "phonetic": "/ˈəʊ.pənɪŋ/",
    "pos": "n",
    "meaning": "开放, 口子; 通路, 空缺, 机会",
    "example": "Turn the doorknob to open the door.",
    "exampleTranslation": "转动门把手来开门。"
  },
  {
    "word": "opera",
    "phonetic": "/ˈɒp.əɹ.ə/",
    "pos": "n",
    "meaning": "歌剧",
    "example": "The opera is important.",
    "exampleTranslation": "这个opera很重要。"
  },
  {
    "word": "operate",
    "phonetic": "/ˈɒpəɹeɪt/",
    "pos": "v",
    "meaning": "做手术, 运转; 实施, 负责, 经营, 管理",
    "example": "to operate a machine",
    "exampleTranslation": "操作一台机器"
  },
  {
    "word": "operation",
    "phonetic": "/ˌɒpəˈɹeɪʃən/",
    "pos": "n",
    "meaning": "手术, 操作",
    "example": "The Katrina relief operation was considered botched.",
    "exampleTranslation": "卡特里娜飓风的救援行动被认为搞砸了。"
  },
  {
    "word": "opinion",
    "phonetic": "/əˈpɪnjən/",
    "pos": "n",
    "meaning": "看法, 见解",
    "example": "Every man is a fool in some man's opinion.",
    "exampleTranslation": "在有些人看来，每个人都是傻瓜。"
  },
  {
    "word": "oppose",
    "phonetic": "/əˈpəʊz/",
    "pos": "v",
    "meaning": "反对; 反抗",
    "example": "There is still time to oppose this plan.",
    "exampleTranslation": "反对; 反抗。"
  },
  {
    "word": "optimistic",
    "phonetic": "/ˌɒptɪˈmɪstɪk/",
    "pos": "adj",
    "meaning": "乐观的",
    "example": "in an optimistic mood",
    "exampleTranslation": "处于乐观的情绪中"
  },
  {
    "word": "optional",
    "phonetic": "/ˈɑːpʃənl/",
    "pos": "adj",
    "meaning": "可选择的, 随意的",
    "example": "On that beach clothing is entirely optional.",
    "exampleTranslation": "在那片海滩上，穿不穿衣服完全随意。"
  },
  {
    "word": "or",
    "phonetic": "/ɔː(ɹ)/",
    "pos": "conj",
    "meaning": "或; 就是; 否则",
    "example": "He might get cancer, or be hit by a bus, or God knows what.",
    "exampleTranslation": "或; 就是; 否则。"
  },
  {
    "word": "oral",
    "phonetic": "/ˈɒɹəl/",
    "pos": "adj",
    "meaning": "口述的, 口头上的",
    "example": "We've got our Spanish oral tomorrow.",
    "exampleTranslation": "我们明天有西班牙语口试。"
  },
  {
    "word": "orange",
    "phonetic": "/ˈɔɹɪ̈nd͡ʒ/",
    "pos": "n",
    "meaning": "橘子, 橙子, 橘汁 adj. 橘色的, 橙色的",
    "example": "The orange is important.",
    "exampleTranslation": "这个orange很重要。"
  },
  {
    "word": "orbit",
    "phonetic": "/ˈɔː(ɹ)bɪt/",
    "pos": "n",
    "meaning": "轨道",
    "example": "The Moon's orbit around the Earth takes nearly one month to complete.",
    "exampleTranslation": "月球绕地球公转一周需要将近一个月的时间。"
  },
  {
    "word": "order",
    "phonetic": "/ˈɔːdə/",
    "pos": "n",
    "meaning": "顺序; 命令 v. 命令；定购; 点菜",
    "example": "The house is in order; the machinery is out of order.",
    "exampleTranslation": "房子井井有条；机器却出了故障。"
  },
  {
    "word": "ordinary",
    "phonetic": "/ˈɔːdənɹi/",
    "pos": "adj",
    "meaning": "普通的, 平常的 ",
    "example": "On an ordinary day I wake up at nine o'clock, work for six hours, and then go to the gym.",
    "exampleTranslation": "平常日子里，我九点起床，工作六小时，然后去健身房。"
  },
  {
    "word": "organization",
    "phonetic": "/ˌɔɹɡənaɪˈzeɪʃən/",
    "pos": "n",
    "meaning": "组织, 机构",
    "example": "This painting shows little organization at first glance, but little by little the structure becomes clear.",
    "exampleTranslation": "这幅画乍一看缺乏组织，但渐渐地结构就清晰起来。"
  },
  {
    "word": "origin",
    "phonetic": "/ˈɒɹ.ə.dʒən/",
    "pos": "n",
    "meaning": "起源, 由来",
    "example": "This is a origin.",
    "exampleTranslation": "这是一个起源"
  },
  {
    "word": "other",
    "phonetic": "/ˈɐðə/",
    "pos": "pron",
    "meaning": "别人, 别的东西 adj. 别的, 另外的",
    "example": "I'm afraid little Robbie does not always play well with others.",
    "exampleTranslation": "恐怕小罗比不总是能和别人玩得很好。"
  },
  {
    "word": "otherwise",
    "phonetic": "/ˈʌð.əˌwaɪz/",
    "pos": "adv",
    "meaning": "要不然, 否则; 另样",
    "example": "He said he didn’t do it, but the evidence was otherwise.",
    "exampleTranslation": "他说他没做，但证据却显示并非如此。"
  },
  {
    "word": "our",
    "phonetic": "/aʊər/",
    "pos": "pron",
    "meaning": "我们的",
    "example": "This is our house.",
    "exampleTranslation": "这是我们的房子。"
  },
  {
    "word": "ours",
    "phonetic": "/ɑːz/",
    "pos": "pron",
    "meaning": "我们的",
    "example": "This is ours.",
    "exampleTranslation": "这是我们的。"
  },
  {
    "word": "ourselves",
    "phonetic": "/aʊəˈsɛlvz/",
    "pos": "pron",
    "meaning": "我们自己",
    "example": "We should keep this for ourselves.",
    "exampleTranslation": "我们应该把这个留给自己。"
  },
  {
    "word": "out",
    "phonetic": "/æɔt/",
    "pos": "adv",
    "meaning": "出外; 在外, 向外; 熄灭",
    "example": "They wrote the law to give those organizations an out.",
    "exampleTranslation": "出外; 在外。"
  },
  {
    "word": "outcome",
    "phonetic": "/ˈaʊtkʌm/",
    "pos": "n",
    "meaning": "结果, 成果",
    "example": "A quality automobile is the outcome of the work of skilled engineers and thousands of workers.",
    "exampleTranslation": "一辆优质的汽车是熟练工程师和成千上万工人工作的成果。"
  },
  {
    "word": "outdoors",
    "phonetic": "/ˌaʊtˈdɔːrz/",
    "pos": "adv",
    "meaning": "在户外; 在野外",
    "example": "She loves the outdoors.",
    "exampleTranslation": "她热爱户外活动。"
  },
  {
    "word": "outer",
    "phonetic": "/ˈaʊtə/",
    "pos": "adj",
    "meaning": "外部的, 外面的",
    "example": "This is outer.",
    "exampleTranslation": "这是外层的。"
  },
  {
    "word": "outgoing",
    "phonetic": "/ˈaʊtɡoʊɪŋ/",
    "pos": "adj",
    "meaning": "即将离职的, 对人友好的 喜欢外出的",
    "example": "Tom is very outgoing and enjoys meeting people; his brother, on the other hand, is painfully shy.",
    "exampleTranslation": "汤姆非常外向，喜欢结识人；而他弟弟却害羞得令人难受。"
  },
  {
    "word": "outing",
    "phonetic": "/ˈaʊtɪŋ/",
    "pos": "n",
    "meaning": "郊游, 远足；外出, 旅行",
    "example": "A Brazilian company outed the new mobile phone design.",
    "exampleTranslation": "一家巴西公司泄露了这款新手机的设计。"
  },
  {
    "word": "outline",
    "phonetic": "/ˈaʊtlaɪn/",
    "pos": "n",
    "meaning": "大纲, 轮廓, 略图, 外形, 要点, 概要",
    "example": "the outline of a speech",
    "exampleTranslation": "演讲的提纲"
  },
  {
    "word": "output",
    "phonetic": "/ˈaʊtpʊt/",
    "pos": "n",
    "meaning": "产量, 输出, 输出量",
    "example": "The factory increased its output this year.",
    "exampleTranslation": "这家工厂今年提高了产量。"
  },
  {
    "word": "outside",
    "phonetic": "/ˌaʊtˈsaɪd/",
    "pos": "n",
    "meaning": "外面 adv. 在外面; 向外面 prep. 在…外面",
    "example": "He's repainting the outside of his house.",
    "exampleTranslation": "外面  在外面"
  },
  {
    "word": "outspoken",
    "phonetic": "/aʊtˈspoʊkən/",
    "pos": "adj",
    "meaning": "坦率直言的",
    "example": "an outspoken man",
    "exampleTranslation": "一个直言不讳的人"
  },
  {
    "word": "outstanding",
    "phonetic": "/aʊtˈstændɪŋ/",
    "pos": "adj",
    "meaning": "突出的, 显着的",
    "example": "outstanding contracts",
    "exampleTranslation": "未完成的合同"
  },
  {
    "word": "oval",
    "phonetic": "/ˈəʊvəl/",
    "pos": "n",
    "meaning": "椭圆 adj. 椭圆形的",
    "example": "oval conceptions",
    "exampleTranslation": "椭圆  椭圆形的"
  },
  {
    "word": "over",
    "phonetic": "/ˈəʊ.və(ɹ)/",
    "pos": "prep",
    "meaning": "在…上方; 越过; 遍及 adv. 翻倒; 越过;",
    "example": "He overed the fence in good style.",
    "exampleTranslation": "他以优美的姿态越过了栅栏。"
  },
  {
    "word": "overcoat",
    "phonetic": "/ˈəʊvəkəʊt/",
    "pos": "n",
    "meaning": "大衣",
    "example": "The overcoat is important.",
    "exampleTranslation": "这个overcoat很重要。"
  },
  {
    "word": "overcome",
    "phonetic": "/ˌəʊvəˈkʌm/",
    "pos": "v",
    "meaning": "战胜, 克服",
    "example": "to overcome enemies in battle",
    "exampleTranslation": "在战斗中战胜敌人"
  },
  {
    "word": "overhead",
    "phonetic": "/ˈəʊvəˌhɛd/",
    "pos": "adj",
    "meaning": "在头顶上的",
    "example": "There are birds flying overhead.",
    "exampleTranslation": "头顶上有鸟在飞。"
  },
  {
    "word": "overlook",
    "phonetic": "/əʊvəˈlʊk/",
    "pos": "v",
    "meaning": "俯瞰, 耸出, 远眺, 没注意到",
    "example": "Our hotel room overlooks the lake.",
    "exampleTranslation": "我们的酒店房间俯瞰着湖泊。"
  },
  {
    "word": "overweight",
    "phonetic": "/ˌoʊvərˈweɪt/",
    "pos": "n",
    "meaning": "超重",
    "example": "Apple common stock is one of our overweights.",
    "exampleTranslation": "苹果普通股是我们超配的股票之一。"
  },
  {
    "word": "owe",
    "phonetic": "/əʊ/",
    "pos": "v",
    "meaning": "欠(债等), 感激, 把...归功于",
    "example": "I owe it.",
    "exampleTranslation": "欠(债等)。"
  },
  {
    "word": "own",
    "phonetic": "/ˈəʊn/",
    "pos": "adj",
    "meaning": "自己的 v. 拥有, 所有",
    "example": "When we move into the new house, the kids will each have their own bedroom.",
    "exampleTranslation": "自己的  拥有"
  },
  {
    "word": "owner",
    "phonetic": "/ˈəʊnə/",
    "pos": "n",
    "meaning": "物主, 所有人",
    "example": "The police recovered the stolen car and returned it to its owner.",
    "exampleTranslation": "警方找回了被盗的汽车，并将其归还给了车主。"
  },
  {
    "word": "ownership",
    "phonetic": "/ˈoʊnərʃɪp/",
    "pos": "n",
    "meaning": "所有制",
    "example": "The successful candidate will take ownership of all internal design projects.",
    "exampleTranslation": "成功的候选人将负责所有内部设计项目。"
  },
  {
    "word": "oxygen",
    "phonetic": "/ˈɒksɪdʒən/",
    "pos": "n",
    "meaning": "氧; 氧气",
    "example": "The oxygen is important.",
    "exampleTranslation": "这个oxygen很重要。"
  },
  {
    "word": "pace",
    "phonetic": "/peɪs/",
    "pos": "n",
    "meaning": "步子; 节奏",
    "example": "This is a pace.",
    "exampleTranslation": "这是一个步子; 节奏"
  },
  {
    "word": "pacific",
    "phonetic": "/pəˈsɪfɪk/",
    "pos": "adj",
    "meaning": "太平洋的",
    "example": "He seems pacific.",
    "exampleTranslation": "他看起来很平和。"
  },
  {
    "word": "pack",
    "phonetic": "/pæk/",
    "pos": "n",
    "meaning": "包, 捆;  v. 打包",
    "example": "The horses carried the packs across the plain.",
    "exampleTranslation": "马匹驮着包裹穿过了平原。"
  },
  {
    "word": "package",
    "phonetic": "/ˈpækɪdʒ/",
    "pos": "n",
    "meaning": "包裹, 包",
    "example": "Did you test the software package to ensure completeness?",
    "exampleTranslation": "你测试过这个软件包以确保其完整性吗？"
  },
  {
    "word": "packet",
    "phonetic": "/ˈpak.ɪt/",
    "pos": "n",
    "meaning": "小包裹, 小捆",
    "example": "Don't throw the crisp packet on the floor!",
    "exampleTranslation": "别把薯片包装袋扔在地上！"
  },
  {
    "word": "paddle",
    "phonetic": "/ˈpæ.dəl/",
    "pos": "n",
    "meaning": "桨",
    "example": "We had a nice paddle this morning.",
    "exampleTranslation": "今天早上我们愉快地划了会儿船。"
  },
  {
    "word": "page",
    "phonetic": "/peɪd͡ʒ/",
    "pos": "n",
    "meaning": "页, 页码",
    "example": "the page of history",
    "exampleTranslation": "历史的篇章"
  },
  {
    "word": "pain",
    "phonetic": "/peɪn/",
    "pos": "n",
    "meaning": "痛苦, 疼, 努力",
    "example": "I had to stop running when I started getting pains in my feet.",
    "exampleTranslation": "当我开始感到脚疼时，我不得不停止跑步。"
  },
  {
    "word": "painful",
    "phonetic": "/ˈpeɪn.fəl/",
    "pos": "adj",
    "meaning": "使痛的, 使痛苦的",
    "example": "His violin playing is painful.",
    "exampleTranslation": "他的小提琴演奏很糟糕。"
  },
  {
    "word": "paint",
    "phonetic": "/peɪnt/",
    "pos": "n",
    "meaning": "油漆 v.  油漆, 粉刷, 绘画",
    "example": "The Nimrods are strong on the outside, but not very good in the paint.",
    "exampleTranslation": "油漆   油漆"
  },
  {
    "word": "painter",
    "phonetic": "/ˈpeɪntə/",
    "pos": "n",
    "meaning": "画家, 油漆匠",
    "example": "The painter is important.",
    "exampleTranslation": "这个painter很重要。"
  },
  {
    "word": "painting",
    "phonetic": "/ˈpeɪn.tɪŋ/",
    "pos": "n",
    "meaning": "油画；绘画",
    "example": "to paint a portrait or a landscape",
    "exampleTranslation": "油画；绘画。"
  },
  {
    "word": "pair",
    "phonetic": "/per/",
    "pos": "n",
    "meaning": "一双, 一对",
    "example": "I need the pair.",
    "exampleTranslation": "我需要这个一双"
  },
  {
    "word": "palace",
    "phonetic": "/ˈpæləs/",
    "pos": "n",
    "meaning": "宫, 宫殿",
    "example": "I need the palace.",
    "exampleTranslation": "我需要这个宫"
  },
  {
    "word": "pale",
    "phonetic": "/peɪl/",
    "pos": "adj",
    "meaning": "苍白的, 灰白的",
    "example": "I have pale yellow wallpaper.",
    "exampleTranslation": "我有淡黄色的墙纸。"
  },
  {
    "word": "pan",
    "phonetic": "/pæn/",
    "pos": "n",
    "meaning": "平底锅",
    "example": "This is a pan.",
    "exampleTranslation": "这是一个平底锅。"
  },
  {
    "word": "pancake",
    "phonetic": "/ˈpæn.keɪk/",
    "pos": "n",
    "meaning": "薄煎饼",
    "example": "I need the pancake.",
    "exampleTranslation": "我需要这个薄煎饼"
  },
  {
    "word": "panda",
    "phonetic": "/ˈpændə/",
    "pos": "n",
    "meaning": "熊猫",
    "example": "The panda is important.",
    "exampleTranslation": "这个panda很重要。"
  },
  {
    "word": "panic",
    "phonetic": "/ˈpænɪk/",
    "pos": "adj",
    "meaning": "恐慌的, 惊慌的 v. 惊慌, 恐慌",
    "example": "This is panic.",
    "exampleTranslation": "这是恐慌。"
  },
  {
    "word": "paper",
    "phonetic": "/ˈpeɪpə/",
    "pos": "n",
    "meaning": "纸; 报纸",
    "example": "a paper of pins, tacks, opium, etc.",
    "exampleTranslation": "纸; 报纸。"
  },
  {
    "word": "paperwork",
    "phonetic": "/ˈpeɪ.pɚ.wɚk/",
    "pos": "n",
    "meaning": "文书工作",
    "example": "I need the paperwork.",
    "exampleTranslation": "我需要这个文书工作"
  },
  {
    "word": "paragraph",
    "phonetic": "/ˈpæɹəɡɹɑːf/",
    "pos": "n",
    "meaning": "段落",
    "example": "The paragraph is important.",
    "exampleTranslation": "这个paragraph很重要。"
  },
  {
    "word": "parallel",
    "phonetic": "/ˈpæɹəˌlɛl/",
    "pos": "n",
    "meaning": "平行线, 平行面",
    "example": "The 31st parallel passes through the center of my town.",
    "exampleTranslation": "第31条纬线穿过我镇的中心。"
  },
  {
    "word": "parcel",
    "phonetic": "/ˈpʰaː.səɫ/",
    "pos": "n",
    "meaning": "小包, 包裹",
    "example": "I saw a brown paper parcel on my doorstep.",
    "exampleTranslation": "我在门阶上看到一个棕色纸包裹。"
  },
  {
    "word": "pardon",
    "phonetic": "/ˈpɑɹ.dən/",
    "pos": "n",
    "meaning": "原谅, 宽恕",
    "example": "I need the pardon.",
    "exampleTranslation": "我需要这个原谅"
  },
  {
    "word": "parent",
    "phonetic": "/ˈpɛəɹənt/",
    "pos": "n",
    "meaning": "父母或者母亲, 双亲",
    "example": "I need the parent.",
    "exampleTranslation": "我需要这位家长。"
  },
  {
    "word": "parking",
    "phonetic": "/ˈpɑːkɪŋ/",
    "pos": "n",
    "meaning": "停车",
    "example": "I parked the drive heads of my hard disk before travelling with my laptop.",
    "exampleTranslation": "我带着笔记本电脑旅行前停用了硬盘的磁头。"
  },
  {
    "word": "parrot",
    "phonetic": "/ˈpæɹət/",
    "pos": "n",
    "meaning": "鹦鹉",
    "example": "I bought a wonderful parrot at the pet store.",
    "exampleTranslation": "我在宠物店买了一只很棒的鹦鹉。"
  },
  {
    "word": "part",
    "phonetic": "/pɐːt/",
    "pos": "n",
    "meaning": "部分; 成分; 角色;零件 adj.部分的 v. 分离;",
    "example": "to do one’s part",
    "exampleTranslation": "尽自己的一份力"
  },
  {
    "word": "part-time",
    "phonetic": "/ˌpɑːrt ˈtaɪm/",
    "pos": "adj",
    "meaning": "兼职的 adv. 部分时间地",
    "example": "This is part-time.",
    "exampleTranslation": "这是一个part。"
  },
  {
    "word": "participate",
    "phonetic": "/pɑːˈtɪsɪpeɪt/",
    "pos": "v",
    "meaning": "参与, 参加",
    "example": "I participate it.",
    "exampleTranslation": "我参与其中。"
  },
  {
    "word": "particular",
    "phonetic": "/pəˈtɪkjələ/",
    "pos": "adj",
    "meaning": "特殊的, 个别的",
    "example": "I couldn't find the particular model you asked for, but I hope this one will do.",
    "exampleTranslation": "我没找到你要的那个具体型号，但希望这个能行。"
  },
  {
    "word": "partly",
    "phonetic": "/ˈpɑːtli/",
    "pos": "adv",
    "meaning": "部分地, 在一定程度上",
    "example": "they partly finished the house so they could move in before winter;  the car was partly visible in the garage",
    "exampleTranslation": "他们部分完成了房屋建造，以便能在冬天前搬进去；汽车在车库里部分可见。"
  },
  {
    "word": "partner",
    "phonetic": "/ˈpɐːtnə/",
    "pos": "n",
    "meaning": "搭档, 合作者",
    "example": "I need the partner.",
    "exampleTranslation": "我需要这个搭档"
  },
  {
    "word": "party",
    "phonetic": "/ˈpɑ(ː)ɾi/",
    "pos": "n",
    "meaning": "聚会, 晚会; 党派",
    "example": "The contract requires that the party of the first part pay the fee.",
    "exampleTranslation": "合同要求甲方支付费用。"
  },
  {
    "word": "pass",
    "phonetic": "/pʰäːs/",
    "pos": "v",
    "meaning": "传, 递; 经过; 通过",
    "example": "She wants to pass.",
    "exampleTranslation": "她想通过。"
  },
  {
    "word": "passage",
    "phonetic": "/ˈpæsɪd͡ʒ/",
    "pos": "n",
    "meaning": "一节, 一段; 通道; 走廊",
    "example": "She struggled to play the difficult passages.",
    "exampleTranslation": "她努力演奏那些困难的乐段。"
  },
  {
    "word": "passenger",
    "phonetic": "/ˈpæsənd͡ʒə/",
    "pos": "n",
    "meaning": "乘客, 旅客",
    "example": "Somebody in a team who does not do their fair share of the work.",
    "exampleTranslation": "团队中有人没有承担自己应尽的工作份额。"
  },
  {
    "word": "passer-by",
    "phonetic": "/ˌpæsər ˈbaɪ/",
    "pos": "n",
    "meaning": "过客, 过路人",
    "example": "When he tripped and fell in the street, several kind passers-by helped him up.",
    "exampleTranslation": "当他在街上绊倒时，几位好心的路人扶他起来。"
  },
  {
    "word": "passive",
    "phonetic": "/ˈpæs.ɪv/",
    "pos": "adj",
    "meaning": "被动的",
    "example": "He remained passive during the protest.",
    "exampleTranslation": "他在抗议期间保持被动。"
  },
  {
    "word": "passport",
    "phonetic": "/ˈpɑːspɔːt/",
    "pos": "n",
    "meaning": "护照",
    "example": "You will have to bring your passport to prove who you are.",
    "exampleTranslation": "你需要带上护照来证明身份。"
  },
  {
    "word": "past",
    "phonetic": "/pɑːst/",
    "pos": "adv",
    "meaning": "过, 越过 n. 过去, 昔日 prep. 越过, 晚于",
    "example": "a book about a time machine that can transport people back into the past",
    "exampleTranslation": "一本关于能将人传送回过去的时光机器的书"
  },
  {
    "word": "patent",
    "phonetic": "/ˈpeɪtənt/",
    "pos": "n",
    "meaning": "专利权, 执照, 专利品",
    "example": "I need the patent.",
    "exampleTranslation": "我需要这个专利权"
  },
  {
    "word": "path",
    "phonetic": "/pʰäːθ/",
    "pos": "n",
    "meaning": "小道, 小径",
    "example": "the path of a meteor, of a caravan, or of a storm",
    "exampleTranslation": "流星、商队或风暴的路径"
  },
  {
    "word": "patience",
    "phonetic": "/ˈpeɪʃəns/",
    "pos": "n",
    "meaning": "容忍; 耐心",
    "example": "I need the patience.",
    "exampleTranslation": "我需要这个容忍; 耐心"
  },
  {
    "word": "patient",
    "phonetic": "/ˈpeɪʃənt/",
    "pos": "n",
    "meaning": "病人",
    "example": "The subject of a passive verb is usually a patient.",
    "exampleTranslation": "被动动词的主语通常是受事者。"
  },
  {
    "word": "pattern",
    "phonetic": "/ˈpat(ə)n/",
    "pos": "n",
    "meaning": "式样",
    "example": "The pattern is important.",
    "exampleTranslation": "这个pattern很重要。"
  },
  {
    "word": "pause",
    "phonetic": "/pɔːz/",
    "pos": "n",
    "meaning": "& v. 中止, 暂停; 停止",
    "example": "Teach the pupil to mind the pauses.",
    "exampleTranslation": "中止"
  },
  {
    "word": "pavement",
    "phonetic": "/ˈpeɪvmənt/",
    "pos": "n",
    "meaning": "人行道, 公路",
    "example": "I need the pavement.",
    "exampleTranslation": "我需要这个人行道"
  },
  {
    "word": "pea",
    "phonetic": "/piː/",
    "pos": "n",
    "meaning": "豌豆",
    "example": "This is a pea.",
    "exampleTranslation": "这是一个豌豆"
  },
  {
    "word": "peace",
    "phonetic": "/piːs/",
    "pos": "n",
    "meaning": "和平, 和睦, 安宁",
    "example": "Our lounge strives to maintain an environment of peace for the comfort of our customers.",
    "exampleTranslation": "我们的休息室致力于为顾客保持宁静舒适的环境。"
  },
  {
    "word": "peaceful",
    "phonetic": "/ˈpiːsfəl/",
    "pos": "adj",
    "meaning": "和平的, 平静的, 安宁的, 爱好和平的",
    "example": "peaceful protest",
    "exampleTranslation": "和平抗议"
  },
  {
    "word": "peach",
    "phonetic": "/piːt͡ʃ/",
    "pos": "n",
    "meaning": "桃子",
    "example": "The peach is important.",
    "exampleTranslation": "这个peach很重要。"
  },
  {
    "word": "pear",
    "phonetic": "/per/",
    "pos": "n",
    "meaning": "梨子, 梨树",
    "example": "I need the pear.",
    "exampleTranslation": "我需要这个梨子"
  },
  {
    "word": "pedestrian",
    "phonetic": "/pəˈdɛst.ɹi.ən/",
    "pos": "n",
    "meaning": "步行者, 行人",
    "example": "pedestrian crossing",
    "exampleTranslation": "人行横道"
  },
  {
    "word": "pen",
    "phonetic": "/pɛn/",
    "pos": "n",
    "meaning": "钢笔",
    "example": "There are two steers in the third pen.",
    "exampleTranslation": "第三个围栏里有两头阉牛。"
  },
  {
    "word": "pence",
    "phonetic": "/pens/",
    "pos": "n",
    "meaning": "penny 的复数",
    "example": "This is a pence.",
    "exampleTranslation": "这是一便士。"
  },
  {
    "word": "pencil",
    "phonetic": "/ˈpɛnsɪl/",
    "pos": "n",
    "meaning": "铅笔",
    "example": "I penciled (BrE: pencilled) a brief reminder in my notebook.",
    "exampleTranslation": "我在笔记本上用铅笔草草记下了一个简短的提醒。"
  },
  {
    "word": "penny",
    "phonetic": "/pəni/",
    "pos": "n",
    "meaning": "便士",
    "example": "to turn an honest penny",
    "exampleTranslation": "正正当当挣钱"
  },
  {
    "word": "pension",
    "phonetic": "/ˈpɛnʃ(ə)n/",
    "pos": "n",
    "meaning": "养老金",
    "example": "Many old people depend on their pension to pay the bills.",
    "exampleTranslation": "许多老年人依靠养老金来支付账单。"
  },
  {
    "word": "people",
    "phonetic": "/ˈpiːpəl/",
    "pos": "n",
    "meaning": "人, 人们; 人民",
    "example": "There were so many people at the restaurant last night.",
    "exampleTranslation": "昨晚餐厅里人非常多。"
  },
  {
    "word": "per",
    "phonetic": "/pɜː(ɹ)/",
    "pos": "prep",
    "meaning": "每, 每一",
    "example": "$2.50 per dozen",
    "exampleTranslation": "每打2.50美元"
  },
  {
    "word": "percent",
    "phonetic": "/pəˈsɛnt/",
    "pos": "n",
    "meaning": "百分之…",
    "example": "only a small percent attain the top ranks",
    "exampleTranslation": "只有一小部分人能达到最高级别"
  },
  {
    "word": "percentage",
    "phonetic": "/pəˈsɛntɪd͡ʒ/",
    "pos": "n",
    "meaning": "百分率",
    "example": "A high percentage of secondary school leavers take a gap year.",
    "exampleTranslation": "很大比例的中学毕业生会休一个间隔年。"
  },
  {
    "word": "perfect",
    "phonetic": "/ˈpɜː.fɛkt/",
    "pos": "adj",
    "meaning": "完美的, 极好的",
    "example": "a perfect circle",
    "exampleTranslation": "一个完美的圆"
  },
  {
    "word": "perform",
    "phonetic": "/pəˈfɔːm/",
    "pos": "v",
    "meaning": "表演, 履行; 行动",
    "example": "It took him only twenty minutes to perform the task.",
    "exampleTranslation": "他只用了二十分钟就完成了这项任务。"
  },
  {
    "word": "performance",
    "phonetic": "/pə.ˈfɔː.məns/",
    "pos": "n",
    "meaning": "演出, 表演",
    "example": "the performance of an undertaking or a duty",
    "exampleTranslation": "履行一项任务或职责"
  },
  {
    "word": "performer",
    "phonetic": "/pəˈfɔːmə/",
    "pos": "n",
    "meaning": "表演者, 执行者",
    "example": "the performer of an action",
    "exampleTranslation": "行为的执行者"
  },
  {
    "word": "perfume",
    "phonetic": "/ˈpɜːfjuːm/",
    "pos": "n",
    "meaning": "香味, 芳香, 香水",
    "example": "I need the perfume.",
    "exampleTranslation": "我需要这个香味"
  },
  {
    "word": "perhaps",
    "phonetic": "/pəˈhæps/",
    "pos": "adv",
    "meaning": "可能, 或许",
    "example": "Perhaps John will come over for dinner.",
    "exampleTranslation": "也许约翰会过来吃晚饭。"
  },
  {
    "word": "period",
    "phonetic": "/ˈpɪəɹɪəd/",
    "pos": "n",
    "meaning": "时期, 时代",
    "example": "There was a period of confusion following the announcement.",
    "exampleTranslation": "公告发布后有一段混乱时期。"
  },
  {
    "word": "permanent",
    "phonetic": "/ˈpɜːmənənt/",
    "pos": "adj",
    "meaning": "永久的, 持久的",
    "example": "Nothing in this world is truly permanent.",
    "exampleTranslation": "世上没有什么是真正永恒的。"
  },
  {
    "word": "permission",
    "phonetic": "/pəˈmɪʃən/",
    "pos": "n",
    "meaning": "允许, 许可, 同意",
    "example": "Sire, do I have your permission to execute this traitor?",
    "exampleTranslation": "陛下，您允许我处决这个叛徒吗？"
  },
  {
    "word": "permit",
    "phonetic": "/pərˈmɪt/",
    "pos": "v",
    "meaning": "许可, 允许; 执照 n. 许可证",
    "example": "A construction permit can be obtained from the town offices.",
    "exampleTranslation": "施工许可证可以在镇办公室办理。"
  },
  {
    "word": "person",
    "phonetic": "/ˈpɜːsən/",
    "pos": "n",
    "meaning": "人",
    "example": "Each person is unique, both mentally and physically.",
    "exampleTranslation": "每个人在精神和身体上都是独一无二的。"
  },
  {
    "word": "personal",
    "phonetic": "/ˈpɜː.sən.əl/",
    "pos": "adj",
    "meaning": "个人的, 私人的",
    "example": "Her song was her personal look at the values of friendship.",
    "exampleTranslation": "她的歌曲是她对友谊价值的个人见解。"
  },
  {
    "word": "personally",
    "phonetic": "/ˈpɜːsnəli/",
    "pos": "adv",
    "meaning": "就自己而言",
    "example": "Personally, I think that …",
    "exampleTranslation": "就我个人而言，我认为……"
  },
  {
    "word": "personnel",
    "phonetic": "/-el/",
    "pos": "n",
    "meaning": "人员, 职员",
    "example": "This is a personnel.",
    "exampleTranslation": "这是一个人员"
  },
  {
    "word": "persuade",
    "phonetic": "/pəˈsweɪd/",
    "pos": "v",
    "meaning": "说服, 劝说",
    "example": "That salesman was able to persuade me into buying this bottle of lotion.",
    "exampleTranslation": "那个推销员成功说服我买了这瓶乳液。"
  },
  {
    "word": "pest",
    "phonetic": "/pɛst/",
    "pos": "n",
    "meaning": "害虫",
    "example": "The pest is important.",
    "exampleTranslation": "这个pest很重要。"
  },
  {
    "word": "pet",
    "phonetic": "/pɛt/",
    "pos": "n",
    "meaning": "宠物, 爱畜",
    "example": "His daughter was petted and spoiled.",
    "exampleTranslation": "他的女儿被溺爱和宠坏了。"
  },
  {
    "word": "petrol",
    "phonetic": "/ˈpɛt.ɹəl/",
    "pos": "n",
    "meaning": "石油",
    "example": "This is a petrol.",
    "exampleTranslation": "这是一个石油"
  },
  {
    "word": "photograph",
    "phonetic": "/ˈfəʊ.tə.ˌɡɹɑːf/",
    "pos": "n",
    "meaning": "照片",
    "example": "She photographs well. The camera loves her.",
    "exampleTranslation": "她很上镜，相机偏爱她。"
  },
  {
    "word": "photographer",
    "phonetic": "/fəˈtɒɡɹəfə/",
    "pos": "n",
    "meaning": "摄影师",
    "example": "This is a photographer.",
    "exampleTranslation": "这是一位摄影师。"
  },
  {
    "word": "phrase",
    "phonetic": "/fɹeɪz/",
    "pos": "n",
    "meaning": "短语; 习惯用语",
    "example": "I wasn't sure how to phrase my condolences without sounding patronising.",
    "exampleTranslation": "我不确定如何表达哀悼而不显得居高临下。"
  },
  {
    "word": "physical",
    "phonetic": "/ˈfɪzɪkəl/",
    "pos": "adj",
    "meaning": "身体的; 物理的",
    "example": "How long has it been since your last physical?",
    "exampleTranslation": "你上次体检是什么时候？"
  },
  {
    "word": "physician",
    "phonetic": "/fɪˈzɪʃən/",
    "pos": "n",
    "meaning": "医师, 内科医师",
    "example": "I need the physician.",
    "exampleTranslation": "我需要这个医师"
  },
  {
    "word": "physicist",
    "phonetic": "/ˈfɪz.ɪ.sɪst/",
    "pos": "n",
    "meaning": "物理学家",
    "example": "This is a physicist.",
    "exampleTranslation": "这是一位物理学家。"
  },
  {
    "word": "physics",
    "phonetic": "/ˈfɪz.ɪks/",
    "pos": "n",
    "meaning": "物理学",
    "example": "Physics is my favorite subject.",
    "exampleTranslation": "物理是我最喜欢的科目。"
  },
  {
    "word": "pianist",
    "phonetic": "/piˈænɪst/",
    "pos": "n",
    "meaning": "钢琴家",
    "example": "The pianist is important.",
    "exampleTranslation": "这个pianist很重要。"
  },
  {
    "word": "pick",
    "phonetic": "/pɪk/",
    "pos": "v",
    "meaning": "拾起, 采集; 挑选",
    "example": "so many picks to an inch",
    "exampleTranslation": "每英寸有这么多针脚。"
  },
  {
    "word": "picnic",
    "phonetic": "/ˈpɪknɪk/",
    "pos": "n",
    "meaning": "& v. 野餐",
    "example": "We went out for a picnic in the forest.",
    "exampleTranslation": "野餐"
  },
  {
    "word": "picture",
    "phonetic": "/ˈpɪktʃə/",
    "pos": "n",
    "meaning": "图片, 画片, 照片",
    "example": "There was a picture hanging above the fireplace.",
    "exampleTranslation": "壁炉上方挂着一幅画。"
  },
  {
    "word": "pie",
    "phonetic": "/paɪ/",
    "pos": "n",
    "meaning": "甜馅饼",
    "example": "The family had steak and kidney pie for dinner and cherry pie for dessert.",
    "exampleTranslation": "这家人晚餐吃了牛排腰子馅饼，甜点是樱桃派。"
  },
  {
    "word": "piece",
    "phonetic": "/piːs/",
    "pos": "n",
    "meaning": "一块（片, 张, 件…）",
    "example": "I’d like another piece of pie.",
    "exampleTranslation": "一块（片。"
  },
  {
    "word": "pig",
    "phonetic": "/ˈpɪɡ/",
    "pos": "n",
    "meaning": "猪",
    "example": "The man kept a pen with two pigs that he fed from carrots to cabbage.",
    "exampleTranslation": "那个男人养了一支笔和两头猪，用胡萝卜到卷心菜喂养它们。"
  },
  {
    "word": "pill",
    "phonetic": "/pɪl/",
    "pos": "n",
    "meaning": "药丸, 药片",
    "example": "Jane went on the pill when she left for college.",
    "exampleTranslation": "简上大学时开始服用避孕药。"
  },
  {
    "word": "pillow",
    "phonetic": "/ˈpɪləʊ/",
    "pos": "n",
    "meaning": "枕头",
    "example": "I need the pillow.",
    "exampleTranslation": "我需要这个枕头"
  },
  {
    "word": "pilot",
    "phonetic": "/ˈpaɪlət/",
    "pos": "n",
    "meaning": "飞行员",
    "example": "The pilot is important.",
    "exampleTranslation": "这位飞行员很重要。"
  },
  {
    "word": "pin",
    "phonetic": "/pɪn/",
    "pos": "n",
    "meaning": "别针 v. 别住, 钉住",
    "example": "Pull the pin out of the grenade before throwing it at the enemy.",
    "exampleTranslation": "别针  别住"
  },
  {
    "word": "pine",
    "phonetic": "/paɪn/",
    "pos": "n",
    "meaning": "松树",
    "example": "The northern slopes were covered mainly in pine.",
    "exampleTranslation": "北坡主要覆盖着松树。"
  },
  {
    "word": "pineapple",
    "phonetic": "/ˈpaɪnəpəl/",
    "pos": "n",
    "meaning": "菠萝",
    "example": "The pineapple is important.",
    "exampleTranslation": "这个pineapple很重要。"
  },
  {
    "word": "ping-pong",
    "phonetic": "/ˈpɪŋ pɑːŋ/",
    "pos": "n",
    "meaning": "乒乓球",
    "example": "I need the ping-pong.",
    "exampleTranslation": "我需要这个乒乓球"
  },
  {
    "word": "pink",
    "phonetic": "/pɪŋk/",
    "pos": "adj",
    "meaning": "粉红色的",
    "example": "He seems pink.",
    "exampleTranslation": "他看起来气色红润。"
  },
  {
    "word": "pint",
    "phonetic": "/paɪnt/",
    "pos": "n",
    "meaning": "品脱",
    "example": "Please leave three pints tomorrow, milkman.",
    "exampleTranslation": "送奶工，请明天留三品脱。"
  },
  {
    "word": "pioneer",
    "phonetic": "/ˌpaɪəˈnɪəɹ/",
    "pos": "n",
    "meaning": "先锋, 开拓者",
    "example": "Certain politicians can be considered as pioneers of reform.",
    "exampleTranslation": "某些政治家可被视为改革的先驱。"
  },
  {
    "word": "pipe",
    "phonetic": "/paɪp/",
    "pos": "n",
    "meaning": "管子, 烟斗",
    "example": "to pipe flowers on to a cupcake",
    "exampleTranslation": "在纸杯蛋糕上裱花。"
  },
  {
    "word": "pity",
    "phonetic": "/ˈpɪti/",
    "pos": "n",
    "meaning": "怜悯, 同情；憾事",
    "example": "I can't feel any pity towards the gang, who got injured while attempting to break into a flat.",
    "exampleTranslation": "我对那帮企图闯入公寓时受伤的歹徒生不出丝毫怜悯。"
  },
  {
    "word": "place",
    "phonetic": "/pleɪs/",
    "pos": "n",
    "meaning": "地方, 处所 v. 放置, 安置, 安排",
    "example": "I'm in a strange place at the moment.",
    "exampleTranslation": "我此刻身处一个陌生的地方。"
  },
  {
    "word": "plain",
    "phonetic": "/pleɪn/",
    "pos": "adj",
    "meaning": "家常的; 普通的",
    "example": "Throughout high school she worried that she had a rather plain face.",
    "exampleTranslation": "整个高中时期，她都为自己相貌平平而烦恼。"
  },
  {
    "word": "plan",
    "phonetic": "/plæn/",
    "pos": "n",
    "meaning": "& v. 计划, 打算",
    "example": "The plans for many important buildings were once publicly available.",
    "exampleTranslation": "计划"
  },
  {
    "word": "plane",
    "phonetic": "/pleɪn/",
    "pos": "n",
    "meaning": "飞机",
    "example": "This is a plane.",
    "exampleTranslation": "这是一架飞机。"
  },
  {
    "word": "planet",
    "phonetic": "/ˈplænət/",
    "pos": "n",
    "meaning": "行星",
    "example": "I need the planet.",
    "exampleTranslation": "我需要这个行星"
  },
  {
    "word": "plant",
    "phonetic": "/plænt/",
    "pos": "v",
    "meaning": "种植, 播种 n. 植物",
    "example": "The garden had a couple of trees, and a cluster of colourful plants around the border.",
    "exampleTranslation": "花园里有几棵树，边缘处有一丛色彩缤纷的植物。"
  },
  {
    "word": "plastic",
    "phonetic": "/ˈplæstɪk/",
    "pos": "adj",
    "meaning": "塑料的",
    "example": "This is plastic.",
    "exampleTranslation": "这是塑料制品。"
  },
  {
    "word": "plate",
    "phonetic": "/pleɪt/",
    "pos": "n",
    "meaning": "板; 牌; 盘子",
    "example": "I filled my plate from the bountiful table.",
    "exampleTranslation": "板; 牌; 盘子。"
  },
  {
    "word": "platform",
    "phonetic": "/ˈplætfɔːm/",
    "pos": "n",
    "meaning": "讲台; 月台, 讲坛，平台",
    "example": "This new talk show will give a platform to everyday men and women.",
    "exampleTranslation": "讲台; 月台。"
  },
  {
    "word": "play",
    "phonetic": "/pleɪ/",
    "pos": "v",
    "meaning": "玩; 打（球）; 游戏; 播放 n. 玩耍, 戏剧",
    "example": "Children learn through play.",
    "exampleTranslation": "儿童通过游戏学习。"
  },
  {
    "word": "playground",
    "phonetic": "/ˈpleɪɡɹaʊnd/",
    "pos": "n",
    "meaning": "操场, 运动场",
    "example": "The exclusive tropical island was a millionaire's playground.",
    "exampleTranslation": "这座专属热带岛屿是百万富翁的游乐场。"
  },
  {
    "word": "pleasant",
    "phonetic": "/ˈplɛzənt/",
    "pos": "adj",
    "meaning": "令人愉快的, 舒适的",
    "example": "It wasn't so hot outside, but pleasant enough to have lunch in the garden.",
    "exampleTranslation": "外面不算太热，在花园里吃午餐正合适。"
  },
  {
    "word": "please",
    "phonetic": "/pliːz/",
    "pos": "v",
    "meaning": "请; 使人高兴, 使人满意",
    "example": "Her presentation pleased the executives.",
    "exampleTranslation": "她的演示报告令高管们十分满意。"
  },
  {
    "word": "pleased",
    "phonetic": "/pliːzd/",
    "pos": "adj",
    "meaning": "高兴的",
    "example": "Her presentation pleased the executives.",
    "exampleTranslation": "她的演示报告令高管们十分满意。"
  },
  {
    "word": "pleasure",
    "phonetic": "/ˈplɛʒə/",
    "pos": "n",
    "meaning": "高兴, 愉快，乐事, 乐趣",
    "example": "He remembered with pleasure his home and family.",
    "exampleTranslation": "他愉快地回忆起自己的家和家人。"
  },
  {
    "word": "plenty",
    "phonetic": "/ˈplɛnti/",
    "pos": "n",
    "meaning": "充足, 大量",
    "example": "We are lucky to live in a land of peace and plenty.",
    "exampleTranslation": "我们很幸运生活在和平富饶的土地上。"
  },
  {
    "word": "plot",
    "phonetic": "/plɒt/",
    "pos": "n",
    "meaning": "情节, 结构，阴谋 v 秘密计划",
    "example": "The assassination of Lincoln was part of a larger plot.",
    "exampleTranslation": "刺杀林肯是一个更大阴谋的组成部分。"
  },
  {
    "word": "plug",
    "phonetic": "/plʌɡ/",
    "pos": "n",
    "meaning": "塞子, 插头 v. 堵, 塞, 插上, 插栓",
    "example": "I pushed the plug back into the electrical socket and the lamp began to glow again.",
    "exampleTranslation": "我把插头插回电源插座，灯又亮了起来。"
  },
  {
    "word": "plus",
    "phonetic": "/plʌs/",
    "pos": "prep",
    "meaning": "加上 adj.正的, 加的",
    "example": "He is a real plus to the team.",
    "exampleTranslation": "加上 正的"
  },
  {
    "word": "pocket",
    "phonetic": "/ˈpɒkɪt/",
    "pos": "n",
    "meaning": "口袋",
    "example": "I paid for it out of my own pocket.",
    "exampleTranslation": "这是我自掏腰包付的款。"
  },
  {
    "word": "poem",
    "phonetic": "/ˈpoʊ̯ɪm/",
    "pos": "n",
    "meaning": "诗",
    "example": "This is a poem.",
    "exampleTranslation": "这是一个诗"
  },
  {
    "word": "poet",
    "phonetic": "/ˈpəʊɪt/",
    "pos": "n",
    "meaning": "诗人",
    "example": "This is a poet.",
    "exampleTranslation": "这是一个诗人"
  },
  {
    "word": "point",
    "phonetic": "/pɔɪnt/",
    "pos": "v",
    "meaning": "指, 指向, 表明 n. 点, 分数, 要点, 意义",
    "example": "point de Venise; Brussels point",
    "exampleTranslation": "威尼斯针绣花边；布鲁塞尔针绣花边"
  },
  {
    "word": "poison",
    "phonetic": "/ˈpɔɪz(ə)n/",
    "pos": "n",
    "meaning": "毒药",
    "example": "We used a poison to kill the weeds.",
    "exampleTranslation": "我们用毒药清除杂草。"
  },
  {
    "word": "poisonous",
    "phonetic": "/ˈpɔɪznəs/",
    "pos": "adj",
    "meaning": "有毒的, 致命的",
    "example": "He seems poisonous.",
    "exampleTranslation": "他看起来心肠歹毒。"
  },
  {
    "word": "pole",
    "phonetic": "/pɔːl/",
    "pos": "n",
    "meaning": "杆, 电线杆;",
    "example": "Huck Finn poled that raft southward down the Mississippi because going northward against the current was too much work.",
    "exampleTranslation": "哈克·费恩撑着木筏沿密西西比河南下，因为逆流北上的活儿太费劲。"
  },
  {
    "word": "police",
    "phonetic": "/pəˈliːs/",
    "pos": "n",
    "meaning": "警察, 警务人员",
    "example": "Call the police!",
    "exampleTranslation": "快报警！"
  },
  {
    "word": "policy",
    "phonetic": "/ˈpɒləsi/",
    "pos": "n",
    "meaning": "政策, 方针",
    "example": "The Communist Party has a policy of returning power to the workers.",
    "exampleTranslation": "政策。"
  },
  {
    "word": "polish",
    "phonetic": "/ˈpɒlɪʃ/",
    "pos": "v",
    "meaning": "擦亮, 发亮",
    "example": "A good silver polish will remove tarnish easily.",
    "exampleTranslation": "擦亮。"
  },
  {
    "word": "polite",
    "phonetic": "/pəˈlaɪt/",
    "pos": "adj",
    "meaning": "有礼貌的, 有教养的",
    "example": "It's not polite to use a mobile phone in a restaurant.",
    "exampleTranslation": "有礼貌的。"
  },
  {
    "word": "political",
    "phonetic": "/pəˈlɪtɪkəl/",
    "pos": "adj",
    "meaning": "政治的",
    "example": "They discussed political issues.",
    "exampleTranslation": "他们讨论了政治问题。"
  },
  {
    "word": "politician",
    "phonetic": "/ˈpɒl.ɪ.tɪʃ.ən/",
    "pos": "n",
    "meaning": "政治家",
    "example": "Politicians should serve the country's interest.",
    "exampleTranslation": "政治家。"
  },
  {
    "word": "politics",
    "phonetic": "/ˈpɑːlətɪks/",
    "pos": "n",
    "meaning": "政治",
    "example": "The politics is important.",
    "exampleTranslation": "这个politics很重要。"
  },
  {
    "word": "pollute",
    "phonetic": "/pəˈljuːt/",
    "pos": "v",
    "meaning": "污染",
    "example": "The factory polluted the river when it cleaned its tanks.",
    "exampleTranslation": "污染。"
  },
  {
    "word": "pollution",
    "phonetic": "/pəˈl(j)uːʃn̩/",
    "pos": "n",
    "meaning": "污染",
    "example": "This is a pollution.",
    "exampleTranslation": "这是一个污染"
  },
  {
    "word": "pond",
    "phonetic": "/pɒnd/",
    "pos": "n",
    "meaning": "池塘",
    "example": "I haven't been back home across the pond in twenty years.",
    "exampleTranslation": "池塘。"
  },
  {
    "word": "pool",
    "phonetic": "/pul/",
    "pos": "n",
    "meaning": "水塘, 水池",
    "example": "the pools of Solomon",
    "exampleTranslation": "水塘。"
  },
  {
    "word": "poor",
    "phonetic": "/poː/",
    "pos": "adj",
    "meaning": "贫穷的; 可怜的; 不好的, 差的",
    "example": "The poor are always with us.",
    "exampleTranslation": "贫穷的; 可怜的; 不好的。"
  },
  {
    "word": "popcorn",
    "phonetic": "/ˈpɒp.kɔː(ɹ)n/",
    "pos": "n",
    "meaning": "爆米花",
    "example": "The popcorn is important.",
    "exampleTranslation": "这个popcorn很重要。"
  },
  {
    "word": "popular",
    "phonetic": "/ˈpɒpjʊlə/",
    "pos": "adj",
    "meaning": "流行的, 大众的, 受欢迎的",
    "example": "He seems popular.",
    "exampleTranslation": "流行的。"
  },
  {
    "word": "population",
    "phonetic": "/ˌpɒpjʊˈleɪʃən/",
    "pos": "n",
    "meaning": "人口, 人数",
    "example": "The population of New Jersey will not stand for this!",
    "exampleTranslation": "人口。"
  },
  {
    "word": "pork",
    "phonetic": "/pɔːk/",
    "pos": "n",
    "meaning": "猪肉",
    "example": "The cafeteria serves pork on Tuesdays.",
    "exampleTranslation": "猪肉。"
  },
  {
    "word": "porridge",
    "phonetic": "/ˈpɔɹɪdʒ/",
    "pos": "n",
    "meaning": "稀饭, 粥",
    "example": "Eat your porridge while it's hot!",
    "exampleTranslation": "稀饭。"
  },
  {
    "word": "port",
    "phonetic": "/pɔːt/",
    "pos": "n",
    "meaning": "港口, 码头",
    "example": "Each eight has four ports and four starboards.",
    "exampleTranslation": "港口。"
  },
  {
    "word": "porter",
    "phonetic": "/ˈpɔːtə/",
    "pos": "n",
    "meaning": "搬运工",
    "example": "By the time I reached the train station I was exhausted, but fortunately there was a porter waiting.",
    "exampleTranslation": "搬运工。"
  },
  {
    "word": "position",
    "phonetic": "/pəˈzɪʃ(ə)n/",
    "pos": "n",
    "meaning": "位置",
    "example": "Chief of Staff is the second-highest position in the army.",
    "exampleTranslation": "位置。"
  },
  {
    "word": "positive",
    "phonetic": "/ˈpɒzɪ̈tɪv/",
    "pos": "adj",
    "meaning": "肯定的, 积极的, 相信, 确实的",
    "example": "I’m absolutely positive you've spelt that wrong.",
    "exampleTranslation": "肯定的。"
  },
  {
    "word": "possess",
    "phonetic": "/pəˈzɛs/",
    "pos": "v",
    "meaning": "占有; 拥有",
    "example": "He does not even possess a working telephone.",
    "exampleTranslation": "占有; 拥有。"
  },
  {
    "word": "possession",
    "phonetic": "/pəˈzɛʃən/",
    "pos": "n",
    "meaning": "所有, 拥有; 财产, 所有物",
    "example": "I would gladly give all of my worldly possessions just to be able to do that.",
    "exampleTranslation": "所有。"
  },
  {
    "word": "possibility",
    "phonetic": "/ˌpɒsɪˈbɪliti/",
    "pos": "n",
    "meaning": "可能, 可能性",
    "example": "The possibility is important.",
    "exampleTranslation": "这个possibility很重要。"
  },
  {
    "word": "possible",
    "phonetic": "/ˈpɒsɪbl̩/",
    "pos": "adj",
    "meaning": "可能的",
    "example": "Jones is a possible for the new opening in sales.",
    "exampleTranslation": "可能的。"
  },
  {
    "word": "post",
    "phonetic": "/pəʊst/",
    "pos": "n",
    "meaning": "邮政, 邮寄, 邮件 v. 投寄; 邮寄",
    "example": "ram a post into the ground",
    "exampleTranslation": "邮政。"
  },
  {
    "word": "postage",
    "phonetic": "/ˈpəʊstɪdʒ/",
    "pos": "n",
    "meaning": "邮费",
    "example": "The postage is important.",
    "exampleTranslation": "这个postage很重要。"
  },
  {
    "word": "postcard",
    "phonetic": "/ˈpoʊstˌkɑɹd/",
    "pos": "n",
    "meaning": "明信片",
    "example": "to postcard one's friends",
    "exampleTranslation": "明信片。"
  },
  {
    "word": "postcode",
    "phonetic": "/ˈpəʊs(t)kəʊd/",
    "pos": "n",
    "meaning": "邮政编码",
    "example": "This is a postcode.",
    "exampleTranslation": "这是一个邮政编码"
  },
  {
    "word": "poster",
    "phonetic": "/ˈpoʊstɚ/",
    "pos": "n",
    "meaning": "海报, 招贴",
    "example": "He has posters of his favorite band, sports teams and holiday resorts up.",
    "exampleTranslation": "海报。"
  },
  {
    "word": "postman",
    "phonetic": "/ˈpəʊsmən/",
    "pos": "n",
    "meaning": "邮递员",
    "example": "The postman is important.",
    "exampleTranslation": "这个postman很重要。"
  },
  {
    "word": "postpone",
    "phonetic": "/poʊstˈpoʊn/",
    "pos": "v",
    "meaning": "推迟, 延期",
    "example": "They postpone the project.",
    "exampleTranslation": "推迟。"
  },
  {
    "word": "pot",
    "phonetic": "/pɒt/",
    "pos": "n",
    "meaning": "锅, 壶, 罐",
    "example": "After his arrest, his prospects went to pot.",
    "exampleTranslation": "锅。"
  },
  {
    "word": "potato",
    "phonetic": "/pəˈteɪ.təʊ/",
    "pos": "n",
    "meaning": "土豆, 马铃薯",
    "example": "The potato is important.",
    "exampleTranslation": "这个土豆很重要。"
  },
  {
    "word": "potential",
    "phonetic": "/pəˈtɛnʃəl/",
    "pos": "adj",
    "meaning": "潜在的, 可能的",
    "example": "Even from a young age it was clear that she had the potential to become a great musician.",
    "exampleTranslation": "潜在的。"
  },
  {
    "word": "pound",
    "phonetic": "/paʊnd/",
    "pos": "n",
    "meaning": "磅; 英镑",
    "example": "the Rhode Island pound; the New Hampshire pound",
    "exampleTranslation": "磅; 英镑。"
  },
  {
    "word": "pour",
    "phonetic": "/pɔː/",
    "pos": "v",
    "meaning": "倾泻, 不断流出",
    "example": "The bartender's inexpert pour left me with a pint of beer that was half foam.",
    "exampleTranslation": "倾泻。"
  },
  {
    "word": "powder",
    "phonetic": "/ˈpaʊ.də(ɹ)/",
    "pos": "n",
    "meaning": "粉, 粉末",
    "example": "to powder one's hair",
    "exampleTranslation": "粉。"
  },
  {
    "word": "power",
    "phonetic": "/ˈpaʊ.ə(ɹ)/",
    "pos": "n",
    "meaning": "力, 动力, 电力",
    "example": "the mechanical powers",
    "exampleTranslation": "力。"
  },
  {
    "word": "powerful",
    "phonetic": "/ˈpaʊəfl/",
    "pos": "adj",
    "meaning": "效力大的, 强有力的, 强大的",
    "example": "Not very many (of them) had been damaged.",
    "exampleTranslation": "效力大的。"
  },
  {
    "word": "practical",
    "phonetic": "/ˈpɹæktɪkəl/",
    "pos": "adj",
    "meaning": "实际的, 适用的",
    "example": "Jack didn't get an engineering degree, but has practical knowledge of metalworking.",
    "exampleTranslation": "实际的。"
  },
  {
    "word": "practice",
    "phonetic": "/ˈpɹæktɪs/",
    "pos": "n",
    "meaning": "练习",
    "example": "He will need lots of practice with the lines before he performs them.",
    "exampleTranslation": "练习。"
  },
  {
    "word": "praise",
    "phonetic": "/pɹeɪz/",
    "pos": "n",
    "meaning": "& v. 赞扬, 表扬",
    "example": "Be sure to praise Bobby for his excellent work at school this week.",
    "exampleTranslation": "赞扬"
  },
  {
    "word": "pray",
    "phonetic": "/pɹeɪ/",
    "pos": "v",
    "meaning": "祈祷; 祈求",
    "example": "Muslims pray in the direction of Mecca.",
    "exampleTranslation": "祈祷; 祈求。"
  },
  {
    "word": "prayer",
    "phonetic": "/pɹɛə(ɹ)/",
    "pos": "n",
    "meaning": "祈祷",
    "example": "Through prayer I ask for God's blessings.",
    "exampleTranslation": "祈祷。"
  },
  {
    "word": "precious",
    "phonetic": "/ˈpɹɛʃəs/",
    "pos": "adj",
    "meaning": "宝贵的, 珍贵的",
    "example": "Time is very precious.",
    "exampleTranslation": "时间非常宝贵。"
  },
  {
    "word": "precise",
    "phonetic": "/pɹɪˈsaɪs/",
    "pos": "adj",
    "meaning": "精确的, 准确的",
    "example": "This is precise.",
    "exampleTranslation": "精确的。"
  },
  {
    "word": "predict",
    "phonetic": "/pɹɪˈdɪkt/",
    "pos": "v",
    "meaning": "预知, 预言, 预报",
    "example": "She wants to predict.",
    "exampleTranslation": "预知。"
  },
  {
    "word": "prefer",
    "phonetic": "/pɹɪˈfɜː/",
    "pos": "v",
    "meaning": "宁愿, 更喜欢",
    "example": "I prefer tea to coffee.",
    "exampleTranslation": "宁愿。"
  },
  {
    "word": "preference",
    "phonetic": "/ˈpɹɛf(ə)ɹ(ə)ns/",
    "pos": "n",
    "meaning": "选择, 趋向",
    "example": "He has a preference for crisp wines.",
    "exampleTranslation": "选择。"
  },
  {
    "word": "pregnant",
    "phonetic": "/ˈpɹɛɡnənt/",
    "pos": "adj",
    "meaning": "怀孕的",
    "example": "I went to the doctor and, guess what, I'm pregnant!",
    "exampleTranslation": "怀孕的。"
  },
  {
    "word": "prejudice",
    "phonetic": "/ˈpɹɛd͡ʒədɪs/",
    "pos": "n",
    "meaning": "偏见, 成见",
    "example": "I am free of all prejudices. I hate everyone equally.",
    "exampleTranslation": "偏见。"
  },
  {
    "word": "premier",
    "phonetic": "/ˈpɹemjə/",
    "pos": "n",
    "meaning": "总理 adj.第一的, 首要的",
    "example": "The composer invited all his friends when they premiered the movie he orchestrated, we got to see it before anyone but the crew.",
    "exampleTranslation": "总理 第一的"
  },
  {
    "word": "preparation",
    "phonetic": "/pɹɛpəˈɹeɪʃən/",
    "pos": "n",
    "meaning": "准备",
    "example": "The preparation is important.",
    "exampleTranslation": "这个preparation很重要。"
  },
  {
    "word": "prepare",
    "phonetic": "/pɹɪˈpɛə/",
    "pos": "v",
    "meaning": "准备, 预备",
    "example": "We prepared the spacecraft for takeoff.",
    "exampleTranslation": "准备。"
  },
  {
    "word": "presentation",
    "phonetic": "/ˌpɹizənˈteɪʃən/",
    "pos": "n",
    "meaning": "演示, 演出",
    "example": "The presentation is important.",
    "exampleTranslation": "这个presentation很重要。"
  },
  {
    "word": "preserve",
    "phonetic": "/pɹəˈzɜːv/",
    "pos": "v",
    "meaning": "保存, 保藏",
    "example": "Every people have the right to preserve its identity and culture.",
    "exampleTranslation": "保存。"
  },
  {
    "word": "president",
    "phonetic": "/ˈpɹɛzɨdənt/",
    "pos": "n",
    "meaning": "总统; 主席",
    "example": "The vast majority of presidents have been male.",
    "exampleTranslation": "总统; 主席。"
  },
  {
    "word": "press",
    "phonetic": "/pɹɛs/",
    "pos": "v",
    "meaning": "压, 按 n. 新闻界, 出版社",
    "example": "a flower press",
    "exampleTranslation": "压。"
  },
  {
    "word": "pressure",
    "phonetic": "/ˈpɹɛʃ.ə(ɹ)/",
    "pos": "n",
    "meaning": "压迫, 压力, 压强",
    "example": "Apply pressure to the wound to stop the bleeding.",
    "exampleTranslation": "压迫。"
  },
  {
    "word": "pretty",
    "phonetic": "/ˈpɹɪti/",
    "pos": "adj",
    "meaning": "漂亮的, 俊俏的",
    "example": "We'll stop at the knife store and look at the sharp pretties.",
    "exampleTranslation": "漂亮的。"
  },
  {
    "word": "prevent",
    "phonetic": "/pɹəˈvɛnt/",
    "pos": "v",
    "meaning": "防止, 预防",
    "example": "I brush my teeth regularly to prevent them from turning yellow.",
    "exampleTranslation": "防止。"
  },
  {
    "word": "preview",
    "phonetic": "/ˈpɹiːvjʉː/",
    "pos": "v",
    "meaning": "预习; 试演; 预展",
    "example": "We must preview.",
    "exampleTranslation": "预习; 试演; 预展。"
  },
  {
    "word": "previous",
    "phonetic": "/ˈpɹiːvɪəs/",
    "pos": "adj",
    "meaning": "在前的, 早先的",
    "example": "It turned out the shoplifter had a lot of previous.",
    "exampleTranslation": "在前的。"
  },
  {
    "word": "price",
    "phonetic": "/pɹaɪs/",
    "pos": "n",
    "meaning": "价格, 价钱",
    "example": "I paid a high price for my folly.",
    "exampleTranslation": "价格。"
  },
  {
    "word": "pride",
    "phonetic": "/pɹaɪd/",
    "pos": "n",
    "meaning": "自豪, 骄傲",
    "example": "He had pride of ownership in his department.",
    "exampleTranslation": "自豪。"
  },
  {
    "word": "primary",
    "phonetic": "/ˈpɹɒeməɹi/",
    "pos": "adj",
    "meaning": "初等的; 初级的",
    "example": "most common primaries",
    "exampleTranslation": "初等的; 初级的。"
  },
  {
    "word": "primitive",
    "phonetic": "/ˈpɹɪmɪtɪv/",
    "pos": "adj",
    "meaning": "原始的, 远古的, 粗糙的, 简单的",
    "example": "primitive innocence;   the primitive church",
    "exampleTranslation": "原始的。"
  },
  {
    "word": "principle",
    "phonetic": "/ˈpɹɪnsəpəl/",
    "pos": "n",
    "meaning": "法则, 原则, 原理",
    "example": "We need some sort of principles to reason from.",
    "exampleTranslation": "法则。"
  },
  {
    "word": "print",
    "phonetic": "/pɹɪnt/",
    "pos": "v",
    "meaning": "印刷",
    "example": "TV and the internet haven't killed print.",
    "exampleTranslation": "印刷。"
  },
  {
    "word": "prison",
    "phonetic": "/ˈpɹɪzən/",
    "pos": "n",
    "meaning": "监狱",
    "example": "The cold stone walls of the prison had stood for over a century.",
    "exampleTranslation": "监狱。"
  },
  {
    "word": "prisoner",
    "phonetic": "/ˈpɹɪzənəɹ/",
    "pos": "n",
    "meaning": "囚犯",
    "example": "I need the prisoner.",
    "exampleTranslation": "我需要这个囚犯"
  },
  {
    "word": "private",
    "phonetic": "/ˈpɹaɪvət/",
    "pos": "adj",
    "meaning": "私人的",
    "example": "If you want to learn ballet, consider taking privates.",
    "exampleTranslation": "私人的。"
  },
  {
    "word": "privilege",
    "phonetic": "/ˈpɹɪv(ɪ)lɪdʒ/",
    "pos": "n",
    "meaning": "特权, 特别待遇, 基本公民权力, 特免",
    "example": "All first-year professors here must teach four courses a term, yet you're only teaching one! What entitled you to such a privilege?",
    "exampleTranslation": "特权。"
  },
  {
    "word": "prize",
    "phonetic": "/pɹaɪz/",
    "pos": "n",
    "meaning": "奖赏, 奖品",
    "example": "I need the prize.",
    "exampleTranslation": "我需要这个奖品。"
  },
  {
    "word": "probably",
    "phonetic": "/ˈpɹɒbli/",
    "pos": "adv",
    "meaning": "很可能, 大概",
    "example": "She speaks probably.",
    "exampleTranslation": "很可能。"
  },
  {
    "word": "problem",
    "phonetic": "/ˈpɹɒbləm/",
    "pos": "n",
    "meaning": "问题, 难题",
    "example": "She's leaving because she faced numerous problems to do with racism.",
    "exampleTranslation": "问题。"
  },
  {
    "word": "procedure",
    "phonetic": "/pɹəˈsiːdʒə/",
    "pos": "n",
    "meaning": "程序, 手续",
    "example": "Ensure that you follow procedure when accessing customers' personal information.",
    "exampleTranslation": "程序。"
  },
  {
    "word": "process",
    "phonetic": "/ˈpɹoʊsɛs/",
    "pos": "n",
    "meaning": "过程, 作用, 方法, 程序, 步骤,",
    "example": "This product of last month's quality standards committee is quite good, even though the process was flawed.",
    "exampleTranslation": "过程。"
  },
  {
    "word": "produce",
    "phonetic": "/pɹəˈdjuːs/",
    "pos": "v",
    "meaning": "生产; 制造",
    "example": "to produce a side of a triangle",
    "exampleTranslation": "生产; 制造。"
  },
  {
    "word": "product",
    "phonetic": "/ˈpɹɒd.əkt/",
    "pos": "n",
    "meaning": "产品, 产物, 乘积",
    "example": "That store offers a variety of products.  We've got to sell a lot of product by the end of the month.",
    "exampleTranslation": "产品。"
  },
  {
    "word": "production",
    "phonetic": "/pɹəˈdʌkʃən/",
    "pos": "n",
    "meaning": "生产; 制造",
    "example": "The widget making machine is being used for production now.",
    "exampleTranslation": "生产; 制造。"
  },
  {
    "word": "profession",
    "phonetic": "/pɹəˈfɛʃən/",
    "pos": "n",
    "meaning": "职业, 专业",
    "example": "Despite his continued professions of innocence, the court eventually sentenced him to five years.",
    "exampleTranslation": "职业。"
  },
  {
    "word": "professor",
    "phonetic": "/pɹəˈfɛsə/",
    "pos": "n",
    "meaning": "教授",
    "example": "The professor is important.",
    "exampleTranslation": "这位教授很重要。"
  },
  {
    "word": "profit",
    "phonetic": "/ˈpɹɒfɪt/",
    "pos": "n",
    "meaning": "利润, 益处, 得益",
    "example": "Reading such an enlightening book on the subject was of much profit to his studies.",
    "exampleTranslation": "利润。"
  },
  {
    "word": "progress",
    "phonetic": "/ˈpɹɒɡɹɛs/",
    "pos": "n",
    "meaning": "进步, 上进 v.  进展; 进行",
    "example": "Testing for the new antidote is currently in progress.",
    "exampleTranslation": "进步。"
  },
  {
    "word": "prohibit",
    "phonetic": "/pɹəʊˈhɪbɪt/",
    "pos": "v",
    "meaning": "禁止, 阻止",
    "example": "The restaurant prohibits smoking on the patio.",
    "exampleTranslation": "禁止。"
  },
  {
    "word": "project",
    "phonetic": "/ˈprɑːdʒekt/",
    "pos": "n",
    "meaning": "工程",
    "example": "Projects like Pruitt-Igoe were considered irreparably dangerous and demolished.",
    "exampleTranslation": "工程。"
  },
  {
    "word": "promise",
    "phonetic": "/ˈpɹɒmɪs/",
    "pos": "n",
    "meaning": "允诺, 答应, 许诺  v. 答应, 允诺",
    "example": "if I make a promise, I always stick to it;  he broke his promise",
    "exampleTranslation": "允诺。"
  },
  {
    "word": "promote",
    "phonetic": "/pɹəˈməʊt/",
    "pos": "v",
    "meaning": "促进, 发扬, 提升, 提拔；宣传，推销",
    "example": "He promoted his clerk to office manager.",
    "exampleTranslation": "促进。"
  },
  {
    "word": "pronounce",
    "phonetic": "/pɹəˈnaʊns/",
    "pos": "v",
    "meaning": "发音",
    "example": "I hereby pronounce you man and wife.",
    "exampleTranslation": "发音。"
  },
  {
    "word": "proper",
    "phonetic": "/ˈpɹɔp.ə/",
    "pos": "adj",
    "meaning": "恰当的, 合适的",
    "example": "He seems proper.",
    "exampleTranslation": "恰当的。"
  },
  {
    "word": "properly",
    "phonetic": "/ˈpɹɒ.pə.li/",
    "pos": "adv",
    "meaning": "适当地",
    "example": "I was properly tired after that party.",
    "exampleTranslation": "适当地。"
  },
  {
    "word": "protect",
    "phonetic": "/pɹəˈtɛkt/",
    "pos": "v",
    "meaning": "保护",
    "example": "Condoms are designed to protect against sexually-transmitted diseases.",
    "exampleTranslation": "保护。"
  },
  {
    "word": "protection",
    "phonetic": "/pɹəˈtɛkʃən/",
    "pos": "n",
    "meaning": "保护",
    "example": "Raincoats give protection from rain.",
    "exampleTranslation": "保护。"
  },
  {
    "word": "proud",
    "phonetic": "/pɹaʊd/",
    "pos": "adj",
    "meaning": "自豪的; 骄傲的",
    "example": "I am proud of Sivu’s schoolwork.",
    "exampleTranslation": "自豪的; 骄傲的。"
  },
  {
    "word": "prove",
    "phonetic": "/pɹuːv/",
    "pos": "v",
    "meaning": "证明",
    "example": "I will prove that my method is more effective than yours.",
    "exampleTranslation": "证明。"
  },
  {
    "word": "provide",
    "phonetic": "/pɹəˈvaɪd/",
    "pos": "v",
    "meaning": "提供",
    "example": "It is difficult to provide for my family working on minimum wage.",
    "exampleTranslation": "提供。"
  },
  {
    "word": "province",
    "phonetic": "/ˈpɹɒvɪns/",
    "pos": "n",
    "meaning": "省",
    "example": "The province is important.",
    "exampleTranslation": "这个province很重要。"
  },
  {
    "word": "psychology",
    "phonetic": "/saɪˈkɒlədʒɪ/",
    "pos": "n",
    "meaning": "心理学, 心理状态",
    "example": "The psychology is important.",
    "exampleTranslation": "这个psychology很重要。"
  },
  {
    "word": "pub",
    "phonetic": "/pʊb/",
    "pos": "n",
    "meaning": "酒店, 酒吧",
    "example": "I need the pub.",
    "exampleTranslation": "我需要这个酒店"
  },
  {
    "word": "public",
    "phonetic": "/ˈpʌblɪk/",
    "pos": "adj",
    "meaning": "公共的, 公众的 n. 公众",
    "example": "Members of the public may not proceed beyond this point.",
    "exampleTranslation": "公共的。"
  },
  {
    "word": "publish",
    "phonetic": "/ˈpʌblɪʃ/",
    "pos": "v",
    "meaning": "出版, 发行",
    "example": "Most of the sketches Faulkner published in 1925 appeared in the Sunday magazine section of the New Orleans Times-Picayune.",
    "exampleTranslation": "出版。"
  },
  {
    "word": "pull",
    "phonetic": "/pʊl/",
    "pos": "v",
    "meaning": "拉, 拖 n. 拉, 拖，拉力, 引力",
    "example": "He gave the hair a sharp pull and it came out.",
    "exampleTranslation": "拉。"
  },
  {
    "word": "pulse",
    "phonetic": "/pʊls/",
    "pos": "n",
    "meaning": "脉搏, 脉冲",
    "example": "The pulse is important.",
    "exampleTranslation": "这个pulse很重要。"
  },
  {
    "word": "pump",
    "phonetic": "/pʌmp/",
    "pos": "v",
    "meaning": "用泵抽水",
    "example": "This pump can deliver 100 gallons of water per minute.",
    "exampleTranslation": "用泵抽水。"
  },
  {
    "word": "punctual",
    "phonetic": "/ˈpʌŋktjʊəl/",
    "pos": "adj",
    "meaning": "准时的",
    "example": "He seems punctual.",
    "exampleTranslation": "准时的。"
  },
  {
    "word": "punctuation",
    "phonetic": "/pʌŋk.tʃuˈeɪ.ʃən/",
    "pos": "n",
    "meaning": "标点符号",
    "example": "The punctuation is important.",
    "exampleTranslation": "这个punctuation很重要。"
  },
  {
    "word": "punish",
    "phonetic": "/ˈpʌnɪʃ/",
    "pos": "v",
    "meaning": "惩罚, 处罚",
    "example": "If a prince violates the law, then he must be punished like an ordinary person.",
    "exampleTranslation": "惩罚。"
  },
  {
    "word": "punishment",
    "phonetic": "/ˈpʌnɪʃmənt/",
    "pos": "n",
    "meaning": "惩罚",
    "example": "a vehicle that can take a lot of punishment",
    "exampleTranslation": "惩罚。"
  },
  {
    "word": "pupil",
    "phonetic": "/ˈpjuːpəl/",
    "pos": "n",
    "meaning": "（小）学生",
    "example": "The pupil is important.",
    "exampleTranslation": "这个pupil很重要。"
  },
  {
    "word": "purchase",
    "phonetic": "/ˈpɜːtʃəs/",
    "pos": "v",
    "meaning": "买, 购买",
    "example": "They offer a free hamburger with the purchase of a drink.",
    "exampleTranslation": "买。"
  },
  {
    "word": "pure",
    "phonetic": "/ˈpjɔː/",
    "pos": "adj",
    "meaning": "纯的, 不掺杂的",
    "example": "Tiger Woods pured his first drive straight down the middle of the fairway.",
    "exampleTranslation": "纯的。"
  },
  {
    "word": "purple",
    "phonetic": "/ˈpɜː(ɹ).pəl/",
    "pos": "n",
    "meaning": "紫色 adj. 紫色的",
    "example": "to put on the imperial purple",
    "exampleTranslation": "紫色  紫色的"
  },
  {
    "word": "purpose",
    "phonetic": "/ˈpɜːpəs/",
    "pos": "n",
    "meaning": "目的, 意图",
    "example": "The purpose of turning off the lights overnight is to save energy.",
    "exampleTranslation": "目的。"
  },
  {
    "word": "purse",
    "phonetic": "/pɜːs/",
    "pos": "n",
    "meaning": "钱包",
    "example": "I need the purse.",
    "exampleTranslation": "我需要这个钱包"
  },
  {
    "word": "push",
    "phonetic": "/pʷʊʃ/",
    "pos": "n",
    "meaning": "推, 推动 v. 推",
    "example": "Give the door a hard push if it sticks.",
    "exampleTranslation": "推。"
  },
  {
    "word": "puzzle",
    "phonetic": "/ˈpʌzəl/",
    "pos": "n",
    "meaning": "难题, 谜",
    "example": "Where he went after he left the house is a puzzle.",
    "exampleTranslation": "难题。"
  },
  {
    "word": "pyramid",
    "phonetic": "/ˈpɪɹəmɪd/",
    "pos": "n",
    "meaning": "角锥形, 金字塔",
    "example": "Build your pyramid with all cards face down, except the cards in the bottom row.",
    "exampleTranslation": "角锥形。"
  },
  {
    "word": "quake",
    "phonetic": "/kweɪk/",
    "pos": "n",
    "meaning": "& v. 地震；震动, 颤抖",
    "example": "We felt a quake in the apartment every time the train went by.",
    "exampleTranslation": "地震"
  },
  {
    "word": "qualification",
    "phonetic": "/ˌkwɒlɪfɪˈkeɪʃən/",
    "pos": "n",
    "meaning": "资格, 条件",
    "example": "Qualification for this organization is extraordinarily difficult.",
    "exampleTranslation": "资格。"
  },
  {
    "word": "quality",
    "phonetic": "/ˈkwɒlɪti/",
    "pos": "n",
    "meaning": "质量, 性质",
    "example": "Quality of life is usually determined by health, education, and income.",
    "exampleTranslation": "质量。"
  },
  {
    "word": "quantity",
    "phonetic": "/ˈkwɑndədi/",
    "pos": "n",
    "meaning": "量, 数",
    "example": "You have to choose between quantity and quality.",
    "exampleTranslation": "量。"
  },
  {
    "word": "quarrel",
    "phonetic": "/ˈkwɒɹəl/",
    "pos": "v",
    "meaning": "争吵, 吵架",
    "example": "We got into a silly quarrel about what food to order.",
    "exampleTranslation": "争吵。"
  },
  {
    "word": "quarter",
    "phonetic": "/ˈkoː.tɘ/",
    "pos": "n",
    "meaning": "四分之一, 一刻钟",
    "example": "Quarter the horses in the third stable.",
    "exampleTranslation": "四分之一。"
  },
  {
    "word": "queen",
    "phonetic": "/kwiːn/",
    "pos": "n",
    "meaning": "皇后, 女王",
    "example": "The queen is important.",
    "exampleTranslation": "这个queen很重要。"
  },
  {
    "word": "question",
    "phonetic": "/ˈkwɛstjən/",
    "pos": "v",
    "meaning": "询问 n. 问题",
    "example": "What is your question?",
    "exampleTranslation": "询问  问题"
  },
  {
    "word": "queue",
    "phonetic": "/kjuː/",
    "pos": "n",
    "meaning": "行列, 长队",
    "example": "The queue is important.",
    "exampleTranslation": "这个queue很重要。"
  },
  {
    "word": "quick",
    "phonetic": "/kwɪk/",
    "pos": "adj",
    "meaning": "快; 敏捷的; 急剧的 adv. 快地",
    "example": "He's a quick runner.",
    "exampleTranslation": "快"
  },
  {
    "word": "quiet",
    "phonetic": "/ˈkwaɪ.ət/",
    "pos": "adj",
    "meaning": "安静的; 寂静的",
    "example": "There was a strange quiet in the normally very lively plaza.",
    "exampleTranslation": "安静的; 寂静的。"
  },
  {
    "word": "quilt",
    "phonetic": "/kwɪlt/",
    "pos": "n",
    "meaning": "被子",
    "example": "My grandmother is going to sew a quilt.",
    "exampleTranslation": "被子。"
  },
  {
    "word": "quit",
    "phonetic": "/kwɪt/",
    "pos": "v",
    "meaning": "离开, 辞职, 停止",
    "example": "After having to work overtime without being paid, I quit my job.",
    "exampleTranslation": "离开。"
  },
  {
    "word": "quite",
    "phonetic": "/kwaɪt/",
    "pos": "adv",
    "meaning": "完全, 十分",
    "example": "They work quite.",
    "exampleTranslation": "完全。"
  },
  {
    "word": "quiz",
    "phonetic": "/kwɪz/",
    "pos": "n",
    "meaning": "测验, 小型考试",
    "example": "We came second in the pub quiz.",
    "exampleTranslation": "测验。"
  },
  {
    "word": "rabbit",
    "phonetic": "/ˈɹæbət/",
    "pos": "n",
    "meaning": "兔",
    "example": "The pioneers survived by eating the small game they could get: rabbits, squirrels and occasionally a raccoon.",
    "exampleTranslation": "兔。"
  },
  {
    "word": "race",
    "phonetic": "/ɹeɪs/",
    "pos": "n",
    "meaning": "种族, 民族；竞赛, 比赛 v. 赛跑, 疾走",
    "example": "The race around the park was won by Johnny, who ran faster than the others.",
    "exampleTranslation": "种族。"
  },
  {
    "word": "racial",
    "phonetic": "/ˈɹeɪʃəl/",
    "pos": "adj",
    "meaning": "种族的",
    "example": "He seems racial.",
    "exampleTranslation": "种族的。"
  },
  {
    "word": "radiation",
    "phonetic": "/ɹaɪ.di.ˈaɪ.ʃən/",
    "pos": "n",
    "meaning": "放射, 放射物",
    "example": "heat radiation",
    "exampleTranslation": "放射。"
  },
  {
    "word": "radio",
    "phonetic": "/ˈɹeɪdiˌəʊ/",
    "pos": "n",
    "meaning": "无线电, 收音机",
    "example": "I listen to the radio every day.",
    "exampleTranslation": "我每天听收音机。"
  },
  {
    "word": "radioactive",
    "phonetic": "/ˌɹeɪdioʊˈaktɪv/",
    "pos": "adj",
    "meaning": "放射性的",
    "example": "Even sleazy tactics and his radioactive mouth may not be able to contain this debacle.",
    "exampleTranslation": "放射性的。"
  },
  {
    "word": "radium",
    "phonetic": "/ˈɹeɪ.dɪ.əm/",
    "pos": "n",
    "meaning": "镭",
    "example": "I need the radium.",
    "exampleTranslation": "我需要这个镭"
  },
  {
    "word": "rag",
    "phonetic": "/ɹæɡ/",
    "pos": "n",
    "meaning": "破布, 抹布",
    "example": "I have ace-four on my hand. In other words, I have ace-rag.",
    "exampleTranslation": "破布。"
  },
  {
    "word": "rail",
    "phonetic": "/ɹeɪl/",
    "pos": "n",
    "meaning": "铁路",
    "example": "We travelled to the seaside by rail.",
    "exampleTranslation": "铁路。"
  },
  {
    "word": "railway",
    "phonetic": "/ˈɹeɪlˌweɪ/",
    "pos": "n",
    "meaning": "铁路; 铁道",
    "example": "This is a railway.",
    "exampleTranslation": "这是一个铁路; 铁道"
  },
  {
    "word": "rain",
    "phonetic": "/ɹeɪn/",
    "pos": "n",
    "meaning": "雨, 雨水 v.  下雨",
    "example": "The rains came late that year.",
    "exampleTranslation": "雨。"
  },
  {
    "word": "rainbow",
    "phonetic": "/ˈɹeɪnbəʊ/",
    "pos": "n",
    "meaning": "虹, 彩虹",
    "example": "a rainbow of possibilities",
    "exampleTranslation": "虹。"
  },
  {
    "word": "raincoat",
    "phonetic": "/ˈɹeɪnkəʊt/",
    "pos": "n",
    "meaning": "雨衣",
    "example": "This is a raincoat.",
    "exampleTranslation": "这是一个雨衣"
  },
  {
    "word": "rainfall",
    "phonetic": "/ˈreɪnfɔːl/",
    "pos": "n",
    "meaning": "一场雨; 降雨量",
    "example": "This is a rainfall.",
    "exampleTranslation": "这是一个一场雨; 降雨量"
  },
  {
    "word": "rainy",
    "phonetic": "/ˈɹeɪni/",
    "pos": "adj",
    "meaning": "下雨的; 多雨的",
    "example": "Due to the rainy weather, we decided not to play in the park.",
    "exampleTranslation": "下雨的; 多雨的。"
  },
  {
    "word": "raise",
    "phonetic": "/ɹeɪz/",
    "pos": "v",
    "meaning": "使升高; 饲养",
    "example": "The boss gave me a raise.",
    "exampleTranslation": "使升高; 饲养。"
  },
  {
    "word": "random",
    "phonetic": "/ˈɹændəm/",
    "pos": "n",
    "meaning": "随意, 任意",
    "example": "The party was boring. It was full of randoms.",
    "exampleTranslation": "随意。"
  },
  {
    "word": "range",
    "phonetic": "/ɹeɪndʒ/",
    "pos": "n",
    "meaning": "山脉, 行列, 范围, 射程",
    "example": "We sell a wide range of cars.",
    "exampleTranslation": "山脉。"
  },
  {
    "word": "rank",
    "phonetic": "/ɹæŋk/",
    "pos": "n",
    "meaning": "职衔, 军衔",
    "example": "rank nonsense",
    "exampleTranslation": "职衔。"
  },
  {
    "word": "rapid",
    "phonetic": "/ˈɹæpɪd/",
    "pos": "adj",
    "meaning": "快的, 迅速的",
    "example": "a rapid stream",
    "exampleTranslation": "快的。"
  },
  {
    "word": "rare",
    "phonetic": "/ɹɜɹ/",
    "pos": "adj",
    "meaning": "罕见的, 稀有的",
    "example": "Black pearls are very rare and therefore very valuable.",
    "exampleTranslation": "罕见的。"
  },
  {
    "word": "rat",
    "phonetic": "/ɹæt/",
    "pos": "n",
    "meaning": "老鼠",
    "example": "What a rat, leaving us stranded here!",
    "exampleTranslation": "老鼠。"
  },
  {
    "word": "rate",
    "phonetic": "/ɹeɪt/",
    "pos": "n",
    "meaning": "比率, 速度, 等级, 价格",
    "example": "At the height of his powers, he was producing pictures at the rate of four a year.",
    "exampleTranslation": "比率。"
  },
  {
    "word": "rather",
    "phonetic": "/ˈɹɑːðə/",
    "pos": "adv",
    "meaning": "相当, 宁可",
    "example": "I'd like this one rather than the other one.",
    "exampleTranslation": "相当。"
  },
  {
    "word": "raw",
    "phonetic": "/ɹɔː/",
    "pos": "adj",
    "meaning": "生的, 未煮过的, 未加工的",
    "example": "raw cane sugar",
    "exampleTranslation": "生的。"
  },
  {
    "word": "ray",
    "phonetic": "/ɹeɪ/",
    "pos": "n",
    "meaning": "光线，光辉",
    "example": "I saw a ray of light through the clouds.",
    "exampleTranslation": "光线，光辉。"
  },
  {
    "word": "razor",
    "phonetic": "/ˈɹeɪzə/",
    "pos": "n",
    "meaning": "剃须刀",
    "example": "Occam's razor, Hanlon's razor",
    "exampleTranslation": "剃须刀。"
  },
  {
    "word": "reach",
    "phonetic": "/ɹiːt͡ʃ/",
    "pos": "v",
    "meaning": "到达, 伸手；够到， 延伸 n. 伸手可及之距离, 范围",
    "example": "The fruit is beyond my reach.",
    "exampleTranslation": "到达。"
  },
  {
    "word": "react",
    "phonetic": "/ɹiːˈækt/",
    "pos": "v",
    "meaning": "起反应, 起作用, 反抗, 起反作用",
    "example": "Sad reacts only",
    "exampleTranslation": "起反应。"
  },
  {
    "word": "reading",
    "phonetic": "/ˈɹidiŋ/",
    "pos": "n",
    "meaning": "阅读; 朗读",
    "example": "Have you read this book?",
    "exampleTranslation": "阅读; 朗读。"
  },
  {
    "word": "ready",
    "phonetic": "/ˈɹɛdi/",
    "pos": "adj",
    "meaning": "准备好的",
    "example": "The porridge is ready to serve.",
    "exampleTranslation": "准备好的。"
  },
  {
    "word": "real",
    "phonetic": "/ɹiːl/",
    "pos": "adj",
    "meaning": "真实的, 确实的",
    "example": "This is real leather.",
    "exampleTranslation": "真实的。"
  },
  {
    "word": "reality",
    "phonetic": "/ɹiˈæləti/",
    "pos": "n",
    "meaning": "现实",
    "example": "The reality of the crash scene on TV dawned upon him only when he saw the victim was no actor but his friend.",
    "exampleTranslation": "现实。"
  },
  {
    "word": "reason",
    "phonetic": "/ˈɹiːzən/",
    "pos": "v",
    "meaning": "推论, 评理; 劝说 n. 理由, 原因",
    "example": "Mankind should develop reason above all other virtues.",
    "exampleTranslation": "推论。"
  },
  {
    "word": "reasonable",
    "phonetic": "/ˈɹiː.zən.ə.bəl/",
    "pos": "adj",
    "meaning": "合乎情理的",
    "example": "a reasonable demand, amount, or price",
    "exampleTranslation": "合乎情理的。"
  },
  {
    "word": "receipt",
    "phonetic": "/ɹɪˈsiːt/",
    "pos": "n",
    "meaning": "收据",
    "example": "A balance payable on receipt of the goods.",
    "exampleTranslation": "收据。"
  },
  {
    "word": "receive",
    "phonetic": "/ɹɪˈsiːv/",
    "pos": "v",
    "meaning": "收到, 得到",
    "example": "She received many presents for her birthday.",
    "exampleTranslation": "收到。"
  },
  {
    "word": "receiver",
    "phonetic": "/ɹəˈsiːvə/",
    "pos": "n",
    "meaning": "电话听筒, 接受者, 接收器",
    "example": "I need the receiver.",
    "exampleTranslation": "我需要这个电话听筒"
  },
  {
    "word": "recent",
    "phonetic": "/ˈɹiːsənt/",
    "pos": "adj",
    "meaning": "近来的, 最近的",
    "example": "I met three recent graduates at the conference.",
    "exampleTranslation": "近来的。"
  },
  {
    "word": "reception",
    "phonetic": "/ɹɪˈsɛp.ʃn̩/",
    "pos": "n",
    "meaning": "接待",
    "example": "The new system provides exceptional quality of the reception signal.",
    "exampleTranslation": "接待。"
  },
  {
    "word": "receptionist",
    "phonetic": "/ɹɪˈsɛpʃənɪst/",
    "pos": "n",
    "meaning": "接待员",
    "example": "I need the receptionist.",
    "exampleTranslation": "我需要这个接待员"
  },
  {
    "word": "recipe",
    "phonetic": "/ˈɹɛs.ə.pi/",
    "pos": "n",
    "meaning": "处方",
    "example": "His new approach is definitely a recipe for success.",
    "exampleTranslation": "处方。"
  },
  {
    "word": "recite",
    "phonetic": "/ɹɪˈsaɪt/",
    "pos": "v",
    "meaning": "背诵",
    "example": "She wants to recite.",
    "exampleTranslation": "背诵。"
  },
  {
    "word": "recommend",
    "phonetic": "/ɹɛkəˈmɛnd/",
    "pos": "v",
    "meaning": "推荐",
    "example": "The board recommends Philips, given his ample experience in similar positions.",
    "exampleTranslation": "推荐。"
  },
  {
    "word": "record",
    "phonetic": "/ˈrekərd/",
    "pos": "n",
    "meaning": "记录; 唱片",
    "example": "The record is important.",
    "exampleTranslation": "这个record很重要。"
  },
  {
    "word": "recorder",
    "phonetic": "/rɪˈkɔːrdər/",
    "pos": "n",
    "meaning": "录音机",
    "example": "This is a recorder.",
    "exampleTranslation": "这是一个录音机"
  },
  {
    "word": "recover",
    "phonetic": "/ɹɪˈkʌvə/",
    "pos": "v",
    "meaning": "痊愈; 恢复",
    "example": "After days of inquiries, he finally recovered his lost wallet.",
    "exampleTranslation": "痊愈; 恢复。"
  },
  {
    "word": "recreation",
    "phonetic": "/ɹɛkɹiˈeɪʃən/",
    "pos": "n",
    "meaning": "消遣, 娱乐",
    "example": "I need the recreation.",
    "exampleTranslation": "我需要这个消遣"
  },
  {
    "word": "rectangle",
    "phonetic": "/ˈrɛktæŋɡ(ə)l/",
    "pos": "n",
    "meaning": "长方形 adj. 长方形的",
    "example": "This is a rectangle.",
    "exampleTranslation": "这是一个rectangle。"
  },
  {
    "word": "recycle",
    "phonetic": "/ɹiˈsaɪkəl/",
    "pos": "v",
    "meaning": "回收; 再循环",
    "example": "Both paper and plastic can be recycled.",
    "exampleTranslation": "回收; 再循环。"
  },
  {
    "word": "red",
    "phonetic": "/ɹɛd/",
    "pos": "n",
    "meaning": "红色 adj.红色的",
    "example": "The girl wore a red skirt.",
    "exampleTranslation": "红色 红色的"
  },
  {
    "word": "reduce",
    "phonetic": "/ɹɪˈdjuːs/",
    "pos": "v",
    "meaning": "减少, 缩减",
    "example": "to reduce weight, speed, heat, expenses, price, personnel etc.",
    "exampleTranslation": "减少。"
  },
  {
    "word": "refer",
    "phonetic": "/ɹɪˈfɜː/",
    "pos": "v",
    "meaning": "谈到, 提到, 涉及, 查阅, 提交；交付",
    "example": "They refer the project.",
    "exampleTranslation": "谈到。"
  },
  {
    "word": "referee",
    "phonetic": "/ˌɹɛf.əˈɹiː/",
    "pos": "n",
    "meaning": "仲裁人, 调解人, 裁判员",
    "example": "The referee kicked Jim out of the game for fighting.",
    "exampleTranslation": "仲裁人。"
  },
  {
    "word": "reference",
    "phonetic": "/ˈɹɛf.(ə)ɹəns/",
    "pos": "n",
    "meaning": "提及, 涉及, 参考",
    "example": "You must thoroughly reference your paper before submitting it.",
    "exampleTranslation": "提及。"
  },
  {
    "word": "reflect",
    "phonetic": "/ɹɪˈflɛkt/",
    "pos": "v",
    "meaning": "反射, 反映, 反省, 细想",
    "example": "A mirror reflects the light that shines on it.",
    "exampleTranslation": "反射。"
  },
  {
    "word": "reform",
    "phonetic": "/ɹɪˈfɔːm/",
    "pos": "v",
    "meaning": "改革, 改过",
    "example": "A major reform is needed to improve the efficiency in the factory.",
    "exampleTranslation": "改革。"
  },
  {
    "word": "refresh",
    "phonetic": "/ɹiˈfɹɛʃ/",
    "pos": "v",
    "meaning": "(使)精神振作, (使)精力恢复, 更新",
    "example": "Sleep refreshes the body and the mind.",
    "exampleTranslation": "(使)精神振作。"
  },
  {
    "word": "refrigerator",
    "phonetic": "/ɹɪˈfɹɪd͡ʒəˌɹeɪtə/",
    "pos": "n",
    "meaning": "冰箱",
    "example": "This is a refrigerator.",
    "exampleTranslation": "这是一个冰箱"
  },
  {
    "word": "refuse",
    "phonetic": "/ˈɹɛfjuːs/",
    "pos": "v",
    "meaning": "拒绝, 不愿",
    "example": "They refuse the project.",
    "exampleTranslation": "拒绝。"
  },
  {
    "word": "regard",
    "phonetic": "/ɹɪˈɡɑːd/",
    "pos": "v",
    "meaning": "把…看作 n. 致意, 问候",
    "example": "He is held in great regard in Whitehall.",
    "exampleTranslation": "把…看作  致意"
  },
  {
    "word": "regardless",
    "phonetic": "/ɹɪˈɡɑːd.lɪs/",
    "pos": "adj",
    "meaning": "不管, 不顾, 不注意",
    "example": "Tatiana knew the meat had passed its expiry date, but she ate it regardless.",
    "exampleTranslation": "不管。"
  },
  {
    "word": "register",
    "phonetic": "/ˈɹɛdʒ.ɪs.tə/",
    "pos": "n",
    "meaning": "登记簿, 花名册, 注册员 v. 登记, 注册",
    "example": "The teacher took the register by calling out each child's name.",
    "exampleTranslation": "登记簿。"
  },
  {
    "word": "regret",
    "phonetic": "/ɹiˈɡɹɛt/",
    "pos": "n",
    "meaning": "遗憾, 悔恨,  歉意 v. 为...感到遗憾, 痛惜",
    "example": "He regretted his words.",
    "exampleTranslation": "遗憾。"
  },
  {
    "word": "regular",
    "phonetic": "/ˈɹɛɡjʊlə/",
    "pos": "adj",
    "meaning": "规则的, 经常",
    "example": "Bartenders usually know their regulars by name.",
    "exampleTranslation": "规则的。"
  },
  {
    "word": "regulation",
    "phonetic": "/ˌɹɛɡjʊˈleɪʃən/",
    "pos": "n",
    "meaning": "规则, 规章",
    "example": "I need the regulation.",
    "exampleTranslation": "我需要这个规则"
  },
  {
    "word": "reject",
    "phonetic": "/rɪˈdʒekt/",
    "pos": "v",
    "meaning": "拒绝",
    "example": "She even rejected my improved offer.",
    "exampleTranslation": "拒绝。"
  },
  {
    "word": "relate",
    "phonetic": "/ɹiˈleɪt/",
    "pos": "v",
    "meaning": "把…联系起来; 有关; 涉及",
    "example": "Please relate the circumstances of your journey here today.",
    "exampleTranslation": "把…联系起来; 有关; 涉及。"
  },
  {
    "word": "relation",
    "phonetic": "/ɹɪˈleɪʃən/",
    "pos": "n",
    "meaning": "关系; 亲属",
    "example": "The relation between diet and health is complex.",
    "exampleTranslation": "关系; 亲属。"
  },
  {
    "word": "relationship",
    "phonetic": "/ɹɪˈleɪʃ(ə)nʃɪp/",
    "pos": "n",
    "meaning": "关系",
    "example": "They have been in a relationship for ten years, but have never married.",
    "exampleTranslation": "关系。"
  },
  {
    "word": "relative",
    "phonetic": "/ˈɹɛl.ə.tʰɪv/",
    "pos": "n",
    "meaning": "亲属, 亲戚",
    "example": "Why do my relatives always talk about sex?",
    "exampleTranslation": "亲属。"
  },
  {
    "word": "relax",
    "phonetic": "/ɹɪˈlæks/",
    "pos": "v",
    "meaning": "（使）放松, 轻松",
    "example": "to relax a rope or cord",
    "exampleTranslation": "（使）放松。"
  },
  {
    "word": "relay",
    "phonetic": "/ˈriːleɪ/",
    "pos": "n",
    "meaning": "接力, 中转 v. 接替, 转播",
    "example": "Can you relay this message to John?",
    "exampleTranslation": "接力。"
  },
  {
    "word": "reliable",
    "phonetic": "/ɹɪˈlaɪəbəl/",
    "pos": "adj",
    "meaning": "可靠的, 可信赖的",
    "example": "the old reliables",
    "exampleTranslation": "可靠的。"
  },
  {
    "word": "relief",
    "phonetic": "/ɹɪˈliːf/",
    "pos": "n",
    "meaning": "减轻, 安慰",
    "example": "I sighed with relief when I found out that my daughter hadn't got lost, but was waiting for me at home.",
    "exampleTranslation": "减轻。"
  },
  {
    "word": "religion",
    "phonetic": "/ɹɪˈlɪdʒən/",
    "pos": "n",
    "meaning": "宗教",
    "example": "My brother tends to value religion, but my sister not as much.",
    "exampleTranslation": "宗教。"
  },
  {
    "word": "religious",
    "phonetic": "/ɹɪ.ˈlɪ.d͡ʒəs/",
    "pos": "adj",
    "meaning": "宗教的",
    "example": "It is the job of this court to rule on legal matters. We do not consider religious issues.",
    "exampleTranslation": "宗教的。"
  },
  {
    "word": "rely",
    "phonetic": "/ɹɪˈlaɪ/",
    "pos": "v",
    "meaning": "依赖, 依靠, 信赖",
    "example": "We must rely.",
    "exampleTranslation": "依赖。"
  },
  {
    "word": "remain",
    "phonetic": "/ɹɪˈmeɪn/",
    "pos": "v",
    "meaning": "余下, 留下; 保持, 仍是",
    "example": "There was no food in the house, so I had to remain hungry.",
    "exampleTranslation": "余下。"
  },
  {
    "word": "remark",
    "phonetic": "/ɹɪˈmɑːk/",
    "pos": "n",
    "meaning": "陈述; 话; 议论",
    "example": "a biting remark",
    "exampleTranslation": "陈述; 话; 议论。"
  },
  {
    "word": "remember",
    "phonetic": "/ɹɪˈmɛmbə/",
    "pos": "v",
    "meaning": "记得, 想起",
    "example": "Please remember this formula!",
    "exampleTranslation": "记得。"
  },
  {
    "word": "remind",
    "phonetic": "/ɹəˈmaɪnd/",
    "pos": "v",
    "meaning": "提醒, 使记起",
    "example": "I remind it.",
    "exampleTranslation": "提醒。"
  },
  {
    "word": "remote",
    "phonetic": "/ɹəˈməʊt/",
    "pos": "adj",
    "meaning": "遥远的, 偏僻的, 细微的",
    "example": "A remote operator may control the vehicle with a wireless handset.",
    "exampleTranslation": "遥远的。"
  },
  {
    "word": "remove",
    "phonetic": "/ɹɪˈmuːv/",
    "pos": "v",
    "meaning": "移动, 拿走, 脱掉",
    "example": "He removed the marbles from the bag.",
    "exampleTranslation": "移动。"
  },
  {
    "word": "rent",
    "phonetic": "/ɹɛnt/",
    "pos": "n",
    "meaning": "出租, 租金 v.租, 租借",
    "example": "A New York city taxicab license earns more than $10,000 a year in rent.",
    "exampleTranslation": "出租。"
  },
  {
    "word": "repair",
    "phonetic": "/ɹɪˈpɛə/",
    "pos": "n",
    "meaning": "& v. 修理; 修补",
    "example": "I took the car to the workshop for repair.",
    "exampleTranslation": "修理"
  },
  {
    "word": "repeat",
    "phonetic": "/rɪˈpiːt/",
    "pos": "v",
    "meaning": "重说, 重做",
    "example": "We gave up after the third repeat because it got boring.",
    "exampleTranslation": "重说。"
  },
  {
    "word": "replace",
    "phonetic": "/ɹɪˈpleɪs/",
    "pos": "v",
    "meaning": "取代",
    "example": "When you've finished using the telephone, please replace the handset.",
    "exampleTranslation": "取代。"
  },
  {
    "word": "reply",
    "phonetic": "/ɹɪˈplaɪ/",
    "pos": "n",
    "meaning": "& v. 回答, 答复",
    "example": "Joanne replied to Pete's insult with a slap to his face.",
    "exampleTranslation": "回答"
  },
  {
    "word": "report",
    "phonetic": "/ɹəˈpoːt/",
    "pos": "n",
    "meaning": "& v. 报道, 报告",
    "example": "A report by the telecommunications ministry on the phone network revealed a severe capacity problem.",
    "exampleTranslation": "报道"
  },
  {
    "word": "reporter",
    "phonetic": "/ɹɪˈpɔːtə/",
    "pos": "n",
    "meaning": "记者, 新闻通讯员",
    "example": "The reporters of important security bugs may be paid a bounty by the software developer.",
    "exampleTranslation": "记者。"
  },
  {
    "word": "represent",
    "phonetic": "/ɹɛp.ɹɪ.ˈzɛnt/",
    "pos": "v",
    "meaning": "代表",
    "example": "The sculptor represented a horse in bronze.",
    "exampleTranslation": "代表。"
  },
  {
    "word": "representative",
    "phonetic": "/ˌɹɛpɹɪˈzɛnt(ət)ɪv/",
    "pos": "n",
    "meaning": "代表",
    "example": "Are you sure this paper is representative of your child's writing?",
    "exampleTranslation": "代表。"
  },
  {
    "word": "republic",
    "phonetic": "/ɹɪˈpʌblɪk/",
    "pos": "n",
    "meaning": "共和国",
    "example": "The United States is a republic; the United Kingdom of Great Britain and Northern Ireland is a constitutional monarchy.",
    "exampleTranslation": "共和国。"
  },
  {
    "word": "reputation",
    "phonetic": "/ˌɹɛpjʊˈteɪʃən/",
    "pos": "n",
    "meaning": "名誉, 名声",
    "example": "The reputation is important.",
    "exampleTranslation": "这个reputation很重要。"
  },
  {
    "word": "request",
    "phonetic": "/ɹɪˈkwɛst/",
    "pos": "n",
    "meaning": "请求, 邀请; 要求的事物 v. 请求, 要求",
    "example": "The server returned a 404 error to the HTTP request.",
    "exampleTranslation": "请求。"
  },
  {
    "word": "require",
    "phonetic": "/ɹɪˈkwaɪə/",
    "pos": "v",
    "meaning": "需求; 要求",
    "example": "They require the project.",
    "exampleTranslation": "需求; 要求。"
  },
  {
    "word": "requirement",
    "phonetic": "/ɹɪˈkwʌɪəm(ə)nt/",
    "pos": "n",
    "meaning": "需要; 要求; 必要的条件",
    "example": "There was a requirement of the government on citizens for paying taxes.",
    "exampleTranslation": "需要; 要求; 必要的条件。"
  },
  {
    "word": "rescue",
    "phonetic": "/ˈɹɛs.kjuː/",
    "pos": "v",
    "meaning": "& n. 营救, 援救",
    "example": "The rescue of Jerusalem was the original motive of the Crusaders",
    "exampleTranslation": "营救"
  },
  {
    "word": "research",
    "phonetic": "/ɹɪˈsɜːtʃ/",
    "pos": "n",
    "meaning": "研究, 调查",
    "example": "The research station that houses Wang and his team is outside Lijiang, a city of about 1.2 million people.",
    "exampleTranslation": "研究。"
  },
  {
    "word": "resemble",
    "phonetic": "/ɹɪˈzɛmb(ə)l/",
    "pos": "v",
    "meaning": "象, 类似",
    "example": "The twins resemble each other.",
    "exampleTranslation": "象。"
  },
  {
    "word": "reservation",
    "phonetic": "/ˌɹɛzəˈveɪʃən/",
    "pos": "n",
    "meaning": "预定",
    "example": "The committee authorised the reservation of funds.",
    "exampleTranslation": "预定。"
  },
  {
    "word": "reserve",
    "phonetic": "/ɹɪˈzɜːv/",
    "pos": "n",
    "meaning": "储备(物), 储藏量 v. 储备; 预定",
    "example": "We reserve the right to make modifications.",
    "exampleTranslation": "储备(物)。"
  },
  {
    "word": "resist",
    "phonetic": "/ɹəˈzɪst/",
    "pos": "v",
    "meaning": "抵抗; 挡开",
    "example": "We must resist.",
    "exampleTranslation": "抵抗; 挡开。"
  },
  {
    "word": "respect",
    "phonetic": "/ɹɪˈspɛkt/",
    "pos": "v",
    "meaning": "& n. 尊敬, 尊重",
    "example": "He is an intellectual giant, and I have great respect for him.",
    "exampleTranslation": "尊敬"
  },
  {
    "word": "respond",
    "phonetic": "/rɪˈspɑːnd/",
    "pos": "v",
    "meaning": "回答, 响应, 作出反应",
    "example": "to respond to a question or an argument",
    "exampleTranslation": "回答。"
  },
  {
    "word": "responsibility",
    "phonetic": "/ɹɪˌspɑnsəˈbɪlɪɾi/",
    "pos": "n",
    "meaning": "责任, 职责",
    "example": "Responsibility is a heavy burden.",
    "exampleTranslation": "责任。"
  },
  {
    "word": "rest",
    "phonetic": "/ɹɛst/",
    "pos": "n",
    "meaning": "休息; 剩余的部分, 其余的人（物）v. 休息, 歇息",
    "example": "I need to get a good rest tonight; I was up late last night.",
    "exampleTranslation": "休息; 剩余的部分。"
  },
  {
    "word": "restaurant",
    "phonetic": "/ˈɹɛs.t(ə).ɹ(ə)nt/",
    "pos": "n",
    "meaning": "饭馆, 饭店",
    "example": "The restaurant is important.",
    "exampleTranslation": "这个restaurant很重要。"
  },
  {
    "word": "restriction",
    "phonetic": "/ɹɪˈstɹɪkʃən/",
    "pos": "n",
    "meaning": "限制, 约束",
    "example": "I need the restriction.",
    "exampleTranslation": "我需要这个限制"
  },
  {
    "word": "result",
    "phonetic": "/ɹɪˈzʌlt/",
    "pos": "n",
    "meaning": "结果, 效果 v. 起因, 由于, 以...为结果, 导致",
    "example": "the result of a course of action;  the result of a mathematical operation",
    "exampleTranslation": "结果。"
  },
  {
    "word": "retell",
    "phonetic": "/ɹiˈtɛl/",
    "pos": "v",
    "meaning": "重讲, 重复, 复述",
    "example": "She wants to retell.",
    "exampleTranslation": "重讲。"
  },
  {
    "word": "retire",
    "phonetic": "/ɹəˈtaɪə(ɹ)/",
    "pos": "v",
    "meaning": "退休",
    "example": "At the retire, the cavalry fell back.",
    "exampleTranslation": "退休。"
  },
  {
    "word": "return",
    "phonetic": "/ɹɪˈtɜːn/",
    "pos": "v",
    "meaning": "归还",
    "example": "I expect the house to be spotless upon my return.",
    "exampleTranslation": "归还。"
  },
  {
    "word": "review",
    "phonetic": "/ɹɪˈvjuː/",
    "pos": "v",
    "meaning": "重新调查; 回顾; 复习 n. 复查; 复习; 评论",
    "example": "I need to make a review of the book before I can understand it.",
    "exampleTranslation": "我需要to。"
  },
  {
    "word": "revision",
    "phonetic": "/riˈvɪ.ʒ(ə)n/",
    "pos": "n",
    "meaning": "复习, 修订",
    "example": "A revision story",
    "exampleTranslation": "复习。"
  },
  {
    "word": "revolution",
    "phonetic": "/ˌɹɛvəˈl(j)uːʃən/",
    "pos": "n",
    "meaning": "革命, 变革",
    "example": "I need the revolution.",
    "exampleTranslation": "我需要这个革命"
  },
  {
    "word": "reward",
    "phonetic": "/ɹəˈwɔːd/",
    "pos": "n",
    "meaning": "报酬, 奖金 v. 酬劳, 奖赏",
    "example": "For catching the thief, you'll get a nice reward.",
    "exampleTranslation": "报酬。"
  },
  {
    "word": "rewind",
    "phonetic": "/ɹiːˈwaɪnd/",
    "pos": "v",
    "meaning": "回转; 重绕",
    "example": "I meant to pause the picture, but hit the rewind by mistake.",
    "exampleTranslation": "回转; 重绕。"
  },
  {
    "word": "rhyme",
    "phonetic": "/ɹaɪm/",
    "pos": "n",
    "meaning": "&v. 韵, 押韵",
    "example": "Many editors say they don't want stories written in rhyme.",
    "exampleTranslation": "韵"
  },
  {
    "word": "rice",
    "phonetic": "/ɹaɪs/",
    "pos": "n",
    "meaning": "稻米; 米饭",
    "example": "The rice is important.",
    "exampleTranslation": "这个rice很重要。"
  },
  {
    "word": "rich",
    "phonetic": "/ɹɪt͡ʃ/",
    "pos": "adj",
    "meaning": "富裕的, 有钱的",
    "example": "a rich dish; rich cream or soup; rich pastry",
    "exampleTranslation": "富裕的。"
  },
  {
    "word": "riddle",
    "phonetic": "/ˈɹɪdəl/",
    "pos": "n",
    "meaning": "谜 (语)",
    "example": "Here's a riddle: It's black, and white, and red all over. What is it?",
    "exampleTranslation": "谜 (语)。"
  },
  {
    "word": "ridiculous",
    "phonetic": "/ɹiːˈdɪkjʊləs/",
    "pos": "adj",
    "meaning": "荒谬的, 可笑的",
    "example": "It's ridiculous to charge so much for a little souvenir.",
    "exampleTranslation": "荒谬的。"
  },
  {
    "word": "right",
    "phonetic": "/ˈɹaɪt/",
    "pos": "n",
    "meaning": "权利, 右边 adj. 对, 正确的; 右边的 adv. 正确地, 恰恰",
    "example": "a right line",
    "exampleTranslation": "权利。"
  },
  {
    "word": "rigid",
    "phonetic": "/ˈɹɪdʒɪd/",
    "pos": "adj",
    "meaning": "刚硬的, 刚性的, 严格的",
    "example": "This is rigid.",
    "exampleTranslation": "刚硬的。"
  },
  {
    "word": "ripe",
    "phonetic": "/ɹaɪp/",
    "pos": "adj",
    "meaning": "成熟的, 熟的",
    "example": "ripe apples",
    "exampleTranslation": "成熟的。"
  },
  {
    "word": "ripen",
    "phonetic": "/ˈɹaɪpən/",
    "pos": "v",
    "meaning": "成熟",
    "example": "Grapes ripen in the sun.",
    "exampleTranslation": "成熟。"
  },
  {
    "word": "river",
    "phonetic": "/ˈɹɪvə/",
    "pos": "n",
    "meaning": "江; 河",
    "example": "Occasionally rivers overflow their banks and cause floods.",
    "exampleTranslation": "江; 河。"
  },
  {
    "word": "road",
    "phonetic": "/ɹəʊd/",
    "pos": "n",
    "meaning": "路, 道路",
    "example": "We travelled to the seaside by road.",
    "exampleTranslation": "路。"
  },
  {
    "word": "roast",
    "phonetic": "/ɹəʊst/",
    "pos": "v",
    "meaning": "烤（肉）",
    "example": "Dark roast means that the coffee bean has been roasted to a higher temperature and for a longer period of time than in light roast.",
    "exampleTranslation": "烤（肉）。"
  },
  {
    "word": "rob",
    "phonetic": "/ɹɒb/",
    "pos": "v",
    "meaning": "抢夺, 抢劫",
    "example": "He robbed three banks before he was caught.",
    "exampleTranslation": "抢夺。"
  },
  {
    "word": "robot",
    "phonetic": "/ˈɹoʊbət/",
    "pos": "n",
    "meaning": "机器人",
    "example": "The robot is important.",
    "exampleTranslation": "这个robot很重要。"
  },
  {
    "word": "rock",
    "phonetic": "/ɹɒk/",
    "pos": "n",
    "meaning": "岩石, 大石头",
    "example": "Pearl Rock near Cape Cod is so named because the morning sun makes it gleam like a pearl.",
    "exampleTranslation": "岩石。"
  },
  {
    "word": "rocket",
    "phonetic": "/ˈɹɒkɪt/",
    "pos": "n",
    "meaning": "火箭",
    "example": "This is a rocket.",
    "exampleTranslation": "这是一个火箭"
  },
  {
    "word": "role",
    "phonetic": "/ɹəʊl/",
    "pos": "n",
    "meaning": "角色",
    "example": "Her dream was to get a role in a Hollywood movie, no matter how small.",
    "exampleTranslation": "角色。"
  },
  {
    "word": "roll",
    "phonetic": "/ɹəʊl/",
    "pos": "v",
    "meaning": "滚动, 打滚 n. (一)卷, 卷形物, 摇晃, 摆动, 名单",
    "example": "Look at the roll of the waves.",
    "exampleTranslation": "滚动。"
  },
  {
    "word": "roof",
    "phonetic": "/ɹuːf/",
    "pos": "n",
    "meaning": "屋顶, 顶部",
    "example": "The roof was blown off by the tornado.",
    "exampleTranslation": "屋顶。"
  },
  {
    "word": "room",
    "phonetic": "/ɹuːm/",
    "pos": "n",
    "meaning": "房间, 室; 空间; 地方",
    "example": "Go to your room!",
    "exampleTranslation": "房间。"
  },
  {
    "word": "rooster",
    "phonetic": "/ˈɹuːstə/",
    "pos": "n",
    "meaning": "公鸡",
    "example": "This is a rooster.",
    "exampleTranslation": "这是一个公鸡"
  },
  {
    "word": "root",
    "phonetic": "/ɹuːt/",
    "pos": "n",
    "meaning": "根, 根源, 起源",
    "example": "This tree's roots can go as deep as twenty metres underground.",
    "exampleTranslation": "根。"
  },
  {
    "word": "rope",
    "phonetic": "/ɹəʊp/",
    "pos": "n",
    "meaning": "绳, 索",
    "example": "Nylon rope is usually stronger than similar rope made of plant fibers.",
    "exampleTranslation": "绳。"
  },
  {
    "word": "rose",
    "phonetic": "/ɹəʊz/",
    "pos": "n",
    "meaning": "玫瑰花",
    "example": "The rose is important.",
    "exampleTranslation": "这个rose很重要。"
  },
  {
    "word": "rot",
    "phonetic": "/ɹɔt/",
    "pos": "v",
    "meaning": "烂; 腐败",
    "example": "The apple left in the cupboard all that time had started to rot.",
    "exampleTranslation": "烂; 腐败。"
  },
  {
    "word": "rough",
    "phonetic": "/ɹʌf/",
    "pos": "adj",
    "meaning": "粗糙的, 粗略的",
    "example": "Rough in the shape first, then polish the details.",
    "exampleTranslation": "粗糙的。"
  },
  {
    "word": "round",
    "phonetic": "/ˈɹaʊnd/",
    "pos": "adv",
    "meaning": "在周围 prep. 环绕一周adj.圆的; 球形的",
    "example": "High above, vultures circled around.",
    "exampleTranslation": "在周围  环绕一周圆的"
  },
  {
    "word": "roundabout",
    "phonetic": "/ˈɹaʊndəˌbaʊt/",
    "pos": "adj",
    "meaning": "迂回的, 转弯抹角的 n. 道路交叉处的环形路, 兜圈子的话",
    "example": "That is roundabout.",
    "exampleTranslation": "迂回的。"
  },
  {
    "word": "routine",
    "phonetic": "/ɹuːˈtiːn/",
    "pos": "n",
    "meaning": "常规, 日常事务, 程序",
    "example": "Connie was completely robotic and emotionless by age 12; her entire life had become one big routine.",
    "exampleTranslation": "常规。"
  },
  {
    "word": "row",
    "phonetic": "/ˈɹəʊ/",
    "pos": "n",
    "meaning": "排, 行 v. 划船",
    "example": "I need the row.",
    "exampleTranslation": "我需要这一排。"
  },
  {
    "word": "royal",
    "phonetic": "/ˈɹɔɪəl/",
    "pos": "adj",
    "meaning": "王室的, 皇家的",
    "example": "royal mast;  royal sail",
    "exampleTranslation": "王室的。"
  },
  {
    "word": "rubber",
    "phonetic": "/ˈɹʌbə(ɹ)/",
    "pos": "n",
    "meaning": "橡皮, 橡胶",
    "example": "Jones toes the rubber and then fires to the plate.",
    "exampleTranslation": "橡皮。"
  },
  {
    "word": "rubbish",
    "phonetic": "/ˈɹʌbɪʃ/",
    "pos": "n",
    "meaning": "垃圾; 废物",
    "example": "The rubbish is collected every Thursday in Gloucester, but on Wednesdays in Cheltenham.",
    "exampleTranslation": "垃圾; 废物。"
  },
  {
    "word": "rude",
    "phonetic": "/ɹʉːd/",
    "pos": "adj",
    "meaning": "无理的, 粗鲁的",
    "example": "Karen broke up with Fred because he was often rude to her.",
    "exampleTranslation": "无理的。"
  },
  {
    "word": "rugby",
    "phonetic": "/ˈɹʌɡbi/",
    "pos": "n",
    "meaning": "橄榄球",
    "example": "The scrum is a distinctive element of rugby.",
    "exampleTranslation": "橄榄球。"
  },
  {
    "word": "ruin",
    "phonetic": "/ˈɹuː.ɪn/",
    "pos": "v",
    "meaning": "（使）毁坏;（使）毁灭 n. 毁灭, 崩溃, 废墟, 遗迹",
    "example": "The monastery has fallen into ruin.",
    "exampleTranslation": "（使）毁坏"
  },
  {
    "word": "rule",
    "phonetic": "/ɹuːl/",
    "pos": "n",
    "meaning": "规则, 规定 v. 统治; 支配",
    "example": "All participants must adhere to the rules.",
    "exampleTranslation": "规则。"
  },
  {
    "word": "ruler",
    "phonetic": "/ˈɹuːlə(ɹ)/",
    "pos": "n",
    "meaning": "统治者; 直尺",
    "example": "I need the ruler.",
    "exampleTranslation": "我需要这把尺子。"
  },
  {
    "word": "rush",
    "phonetic": "/ɹʌʃ/",
    "pos": "v",
    "meaning": "冲, 奔跑",
    "example": "She wants to rush.",
    "exampleTranslation": "冲。"
  },
  {
    "word": "sacred",
    "phonetic": "/ˈseɪkɹɪd/",
    "pos": "adj",
    "meaning": "庄严的, 神圣的",
    "example": "a sacred day",
    "exampleTranslation": "庄严的。"
  },
  {
    "word": "sacrifice",
    "phonetic": "/ˈsækɹɪfaɪs/",
    "pos": "v",
    "meaning": "牺牲 n. 牺牲",
    "example": "the sacrifice of one's spare time in order to volunteer",
    "exampleTranslation": "牺牲  牺牲"
  },
  {
    "word": "sad",
    "phonetic": "/sæd/",
    "pos": "adj",
    "meaning": "（使人）悲伤的",
    "example": "I can't believe you use drugs; you're so sad!",
    "exampleTranslation": "（使人）悲伤的。"
  },
  {
    "word": "sadness",
    "phonetic": "/ˈsædnəs/",
    "pos": "n",
    "meaning": "悲哀, 忧伤",
    "example": "She has experienced many sadnesses in her forty years.",
    "exampleTranslation": "悲哀。"
  },
  {
    "word": "safe",
    "phonetic": "/seɪf/",
    "pos": "adj",
    "meaning": "安全的",
    "example": "You’ll be safe here.",
    "exampleTranslation": "安全的。"
  },
  {
    "word": "safety",
    "phonetic": "/ˈseɪfti/",
    "pos": "n",
    "meaning": "安全, 保险",
    "example": "If you push it to the limit, safety is not guaranteed.",
    "exampleTranslation": "安全。"
  },
  {
    "word": "sail",
    "phonetic": "/seɪl/",
    "pos": "n",
    "meaning": "航行 v. 航行, 开航",
    "example": "Take in sail: a storm is coming.",
    "exampleTranslation": "航行  航行"
  },
  {
    "word": "sailor",
    "phonetic": "/ˈseɪlə/",
    "pos": "n",
    "meaning": "水手, 海员",
    "example": "He's a talented sailor and has spent many years at sea.",
    "exampleTranslation": "水手。"
  },
  {
    "word": "salad",
    "phonetic": "/ˈsæləd/",
    "pos": "n",
    "meaning": "色拉",
    "example": "This is a salad.",
    "exampleTranslation": "这是一个色拉"
  },
  {
    "word": "salary",
    "phonetic": "/ˈsælɚi/",
    "pos": "n",
    "meaning": "薪金, 薪水",
    "example": "This is a salary.",
    "exampleTranslation": "这是一个薪金"
  },
  {
    "word": "sale",
    "phonetic": "/seɪl/",
    "pos": "n",
    "meaning": "卖, 出售, 廉价出售",
    "example": "I need the sale.",
    "exampleTranslation": "我需要这次销售。"
  },
  {
    "word": "salesgirl",
    "phonetic": "/ˈseɪlzɡɜːrl/",
    "pos": "n",
    "meaning": "女售货员",
    "example": "This is a salesgirl.",
    "exampleTranslation": "这是一个女售货员"
  },
  {
    "word": "salt",
    "phonetic": "/sɔlt/",
    "pos": "n",
    "meaning": "盐",
    "example": "Attic salt",
    "exampleTranslation": "盐。"
  },
  {
    "word": "salty",
    "phonetic": "/ˈsɒl.ti/",
    "pos": "adj",
    "meaning": "盐的, 咸的, 含盐的",
    "example": "This is salty.",
    "exampleTranslation": "盐的。"
  },
  {
    "word": "salute",
    "phonetic": "/səˈl(j)uːt/",
    "pos": "v",
    "meaning": "& n.行礼致敬, 敬礼",
    "example": "The soldiers greeted the dignitaries with a crisp salute.",
    "exampleTranslation": "行礼致敬"
  },
  {
    "word": "same",
    "phonetic": "/seɪm/",
    "pos": "n",
    "meaning": "同样的事 adj. 同样的, 同一的",
    "example": "Are you the same person who phoned me yesterday?",
    "exampleTranslation": "同样的事  同样的"
  },
  {
    "word": "sand",
    "phonetic": "/sænd/",
    "pos": "n",
    "meaning": "沙, 沙子",
    "example": "The Canadian tar sands are a promising source of oil.",
    "exampleTranslation": "沙。"
  },
  {
    "word": "sandwich",
    "phonetic": "/ˈsæmwɪd͡ʒ/",
    "pos": "n",
    "meaning": "三明治",
    "example": "The sandwich is important.",
    "exampleTranslation": "这个sandwich很重要。"
  },
  {
    "word": "satellite",
    "phonetic": "/ˈsætəlaɪt/",
    "pos": "n",
    "meaning": "卫星",
    "example": "A spent upper stage is a derelict satellite.",
    "exampleTranslation": "卫星。"
  },
  {
    "word": "satisfaction",
    "phonetic": "/sætɪsˈfækʃən/",
    "pos": "n",
    "meaning": "满意",
    "example": "He enjoyed the dish with great satisfaction. He'll order it again the next time he arrives.",
    "exampleTranslation": "满意。"
  },
  {
    "word": "satisfy",
    "phonetic": "/ˈsætɪsfaɪ/",
    "pos": "v",
    "meaning": "满足, 使满意",
    "example": "I'm not satisfied with the quality of the food here.",
    "exampleTranslation": "满足。"
  },
  {
    "word": "saucer",
    "phonetic": "/ˈsɔː.sə/",
    "pos": "n",
    "meaning": "茶碟, 茶托, 小圆盘",
    "example": "The saucer-shaped object could have been a UFO.",
    "exampleTranslation": "茶碟。"
  },
  {
    "word": "sausage",
    "phonetic": "/ˈsɑsɪd͡ʒ/",
    "pos": "n",
    "meaning": "香肠, 腊肠",
    "example": "my little sausage",
    "exampleTranslation": "香肠。"
  },
  {
    "word": "save",
    "phonetic": "/seɪv/",
    "pos": "v",
    "meaning": "救, 挽救, 节省",
    "example": "The goaltender made a great save.",
    "exampleTranslation": "救。"
  },
  {
    "word": "saying",
    "phonetic": "/ˈseɪɪŋ/",
    "pos": "n",
    "meaning": "说, 俗话, 谚语",
    "example": "Please say your name slowly and clearly.",
    "exampleTranslation": "说。"
  },
  {
    "word": "scan",
    "phonetic": "/skæn/",
    "pos": "v",
    "meaning": "细看, 审视, 浏览, 扫描",
    "example": "The operators vacated the room during the scan.",
    "exampleTranslation": "细看。"
  },
  {
    "word": "scar",
    "phonetic": "/skɑː(ɹ)/",
    "pos": "n",
    "meaning": "伤痕, 疤痕",
    "example": "Seeing his parents die in a car crash scarred him for life.",
    "exampleTranslation": "伤痕。"
  },
  {
    "word": "scare",
    "phonetic": "/skɛə/",
    "pos": "v",
    "meaning": "惊吓, 受惊, 威吓",
    "example": "Johnny had a bad scare last night.",
    "exampleTranslation": "惊吓。"
  },
  {
    "word": "scarf",
    "phonetic": "/skɑːf/",
    "pos": "n",
    "meaning": "围巾，头巾；领带",
    "example": "I need the scarf.",
    "exampleTranslation": "我需要这个围巾，头巾；领带"
  },
  {
    "word": "scene",
    "phonetic": "/siːn/",
    "pos": "n",
    "meaning": "一场, 场景, 布景",
    "example": "the scene of the crime",
    "exampleTranslation": "一场。"
  },
  {
    "word": "scenery",
    "phonetic": "/ˈsiːnəɹi/",
    "pos": "n",
    "meaning": "风景, 景色",
    "example": "The scenery is important.",
    "exampleTranslation": "这个scenery很重要。"
  },
  {
    "word": "schedule",
    "phonetic": "/ˈskɛ.dʒu.əl/",
    "pos": "n",
    "meaning": "时间表, 进度表",
    "example": "schedule of tribes",
    "exampleTranslation": "时间表。"
  },
  {
    "word": "scholar",
    "phonetic": "/ˈskɒlə/",
    "pos": "n",
    "meaning": "学者",
    "example": "The scholar is important.",
    "exampleTranslation": "这个scholar很重要。"
  },
  {
    "word": "scholarship",
    "phonetic": "/ˈskɒləʃɪp/",
    "pos": "n",
    "meaning": "奖学金",
    "example": "This is a scholarship.",
    "exampleTranslation": "这是一个奖学金"
  },
  {
    "word": "school",
    "phonetic": "/skuːl/",
    "pos": "n",
    "meaning": "学校",
    "example": "The divers encountered a huge school of mackerel.",
    "exampleTranslation": "学校。"
  },
  {
    "word": "schoolbag",
    "phonetic": "/ˈskuːlbæɡ/",
    "pos": "n",
    "meaning": "书包",
    "example": "I need the schoolbag.",
    "exampleTranslation": "我需要这个书包"
  },
  {
    "word": "schoolmate",
    "phonetic": "/ˈskuːlmeɪt/",
    "pos": "n",
    "meaning": "同校同学",
    "example": "I've lost touch with all my old schoolmates: I only see them at class reunions.",
    "exampleTranslation": "同校同学。"
  },
  {
    "word": "science",
    "phonetic": "/ˈsaɪəns/",
    "pos": "n",
    "meaning": "科学, 自然科学",
    "example": "Of course in my opinion Social Studies is more of a science than an art.",
    "exampleTranslation": "科学。"
  },
  {
    "word": "scientific",
    "phonetic": "/ˌsaɪənˈtɪfɪk/",
    "pos": "adj",
    "meaning": "科学的",
    "example": "He seems scientific.",
    "exampleTranslation": "科学的。"
  },
  {
    "word": "scientist",
    "phonetic": "/ˈsaɪ.ən.tɪst/",
    "pos": "n",
    "meaning": "科学家",
    "example": "I need the scientist.",
    "exampleTranslation": "我需要这个科学家"
  },
  {
    "word": "scissors",
    "phonetic": "/ˈsɪzəz/",
    "pos": "n",
    "meaning": "剪刀, 剪子",
    "example": "The erroneous testimony was scissored from the record.",
    "exampleTranslation": "剪刀。"
  },
  {
    "word": "scold",
    "phonetic": "/skəʊld/",
    "pos": "v",
    "meaning": "责骂",
    "example": "to scald the hand",
    "exampleTranslation": "责骂。"
  },
  {
    "word": "score",
    "phonetic": "/skɔː/",
    "pos": "n",
    "meaning": "得分, 二十 v. 得分",
    "example": "The player with the highest score is the winner.",
    "exampleTranslation": "得分。"
  },
  {
    "word": "scratch",
    "phonetic": "/skɹætʃ/",
    "pos": "n",
    "meaning": "乱写, 刮擦声, 抓痕 v. 乱涂, 抓",
    "example": "Her skin was covered with tiny scratches.",
    "exampleTranslation": "乱写。"
  },
  {
    "word": "scream",
    "phonetic": "/skɹiːm/",
    "pos": "n",
    "meaning": "尖叫",
    "example": "We had a real scream of a time at the beach.",
    "exampleTranslation": "尖叫。"
  },
  {
    "word": "screen",
    "phonetic": "/skɹiːn/",
    "pos": "n",
    "meaning": "幕, 荧光屏",
    "example": "a fire screen",
    "exampleTranslation": "幕。"
  },
  {
    "word": "sculpture",
    "phonetic": "/ˈskʌlptj(ʊ)ə/",
    "pos": "n",
    "meaning": "雕塑, 雕刻作品",
    "example": "This is a sculpture.",
    "exampleTranslation": "这是一个雕塑"
  },
  {
    "word": "sea",
    "phonetic": "/siː/",
    "pos": "n",
    "meaning": "海, 海洋",
    "example": "The Caspian Sea, the Sea of Galilee, the Salton Sea, etc.",
    "exampleTranslation": "海。"
  },
  {
    "word": "seagull",
    "phonetic": "/ˈsiː.ɡʌl/",
    "pos": "n",
    "meaning": "海鸥",
    "example": "The seagull is important.",
    "exampleTranslation": "这个seagull很重要。"
  },
  {
    "word": "seal",
    "phonetic": "/siːl/",
    "pos": "n",
    "meaning": "海豹, 封条, 印 v. 封, 密封",
    "example": "The seals in the harbor looked better than they smelled.",
    "exampleTranslation": "海豹。"
  },
  {
    "word": "search",
    "phonetic": "/sɜːt͡ʃ/",
    "pos": "n",
    "meaning": "& v. 搜寻, 搜查",
    "example": "With only five minutes until we were meant to leave, the search for the keys started in earnest.",
    "exampleTranslation": "搜寻"
  },
  {
    "word": "seashell",
    "phonetic": "/ˈsiːʃel/",
    "pos": "n",
    "meaning": "海贝",
    "example": "The seashell is important.",
    "exampleTranslation": "这个seashell很重要。"
  },
  {
    "word": "seaside",
    "phonetic": "/ˈsiːsaɪd/",
    "pos": "n",
    "meaning": "海滨",
    "example": "I need the seaside.",
    "exampleTranslation": "我需要这个海滨"
  },
  {
    "word": "season",
    "phonetic": "/ˈsiːzən/",
    "pos": "n",
    "meaning": "季; 季节",
    "example": "mating season",
    "exampleTranslation": "季; 季节。"
  },
  {
    "word": "seat",
    "phonetic": "/siːt/",
    "pos": "n",
    "meaning": "座位, 座",
    "example": "Be sure to seat the gasket properly before attaching the cover.",
    "exampleTranslation": "座位。"
  },
  {
    "word": "seaweed",
    "phonetic": "/ˈsiːwiːd/",
    "pos": "n",
    "meaning": "海草, 海藻",
    "example": "The seaweed is important.",
    "exampleTranslation": "这个seaweed很重要。"
  },
  {
    "word": "second",
    "phonetic": "/ˈsɛkɪnd/",
    "pos": "n",
    "meaning": "秒",
    "example": "They were discounted because they contained blemishes, nicks or were otherwise factory seconds.",
    "exampleTranslation": "秒。"
  },
  {
    "word": "secretary",
    "phonetic": "/ˈsɛk.ɹə.tɹi/",
    "pos": "n",
    "meaning": "秘书; 书记",
    "example": "Ban Ki-Moon was a secretary general of the United Nations.",
    "exampleTranslation": "秘书; 书记。"
  },
  {
    "word": "section",
    "phonetic": "/ˈsɛkʃən/",
    "pos": "n",
    "meaning": "段, 部分, 部门",
    "example": "The section is important.",
    "exampleTranslation": "这个section很重要。"
  },
  {
    "word": "secure",
    "phonetic": "/səˈkjɔː(ɹ)/",
    "pos": "v",
    "meaning": "保护 adj.安全的, 可靠的, 放心的, 无虑的",
    "example": "to secure a creditor against loss; to secure a debt by a mortgage",
    "exampleTranslation": "保护 安全的"
  },
  {
    "word": "security",
    "phonetic": "/sɪˈkjɔːɹəti/",
    "pos": "n",
    "meaning": "安全",
    "example": "The security is important.",
    "exampleTranslation": "这个security很重要。"
  },
  {
    "word": "seed",
    "phonetic": "/siːd/",
    "pos": "n",
    "meaning": "种子",
    "example": "If you plant a seed in the spring, you may have a pleasant surprise in the autumn.",
    "exampleTranslation": "种子。"
  },
  {
    "word": "seek",
    "phonetic": "/siːk/",
    "pos": "v",
    "meaning": "试图; 探寻",
    "example": "I seek wisdom.",
    "exampleTranslation": "试图; 探寻。"
  },
  {
    "word": "seem",
    "phonetic": "/siːm/",
    "pos": "v",
    "meaning": "似乎, 好像",
    "example": "They seem the project.",
    "exampleTranslation": "似乎。"
  },
  {
    "word": "seize",
    "phonetic": "/siːz/",
    "pos": "v",
    "meaning": "抓住, 逮住, 夺取",
    "example": "to seize a ship after libeling",
    "exampleTranslation": "抓住。"
  },
  {
    "word": "seldom",
    "phonetic": "/ˈsɛldəm/",
    "pos": "adv",
    "meaning": "很少, 不常",
    "example": "They seldom come here now.",
    "exampleTranslation": "很少。"
  },
  {
    "word": "select",
    "phonetic": "/sɪˈlɛkt/",
    "pos": "v",
    "meaning": "选择, 挑选, 选拔",
    "example": "He looked over the menu, and selected the roast beef.",
    "exampleTranslation": "选择。"
  },
  {
    "word": "self",
    "phonetic": "/sɛlf/",
    "pos": "n",
    "meaning": "自己, 自我, 自身",
    "example": "one's true self; one's better self; one's former self",
    "exampleTranslation": "自己。"
  },
  {
    "word": "selfish",
    "phonetic": "/ˈsɛlfɪʃ/",
    "pos": "adj",
    "meaning": "自私的",
    "example": "This is selfish.",
    "exampleTranslation": "自私的。"
  },
  {
    "word": "semicircle",
    "phonetic": "/ˈsemisɜːrkl/",
    "pos": "n",
    "meaning": "半圆",
    "example": "This is a semicircle.",
    "exampleTranslation": "这是一个半圆"
  },
  {
    "word": "seminar",
    "phonetic": "/ˈsemɪnɑːr/",
    "pos": "n",
    "meaning": "研究会, 讨论发表会",
    "example": "This is a seminar.",
    "exampleTranslation": "这是一个研究会"
  },
  {
    "word": "senior",
    "phonetic": "/ˈsiːnjə(r)/",
    "pos": "adj",
    "meaning": "年长的, 资深的, 高年级的 n. 上级, 长辈, 高年级生",
    "example": "He was four years her senior.",
    "exampleTranslation": "年长的。"
  },
  {
    "word": "sense",
    "phonetic": "/sɛn(t)s/",
    "pos": "n",
    "meaning": "感觉, 意识",
    "example": "a sense of security",
    "exampleTranslation": "感觉。"
  },
  {
    "word": "sensitive",
    "phonetic": "/ˈsɛnsɪtɪv/",
    "pos": "adj",
    "meaning": "敏感的, 灵敏的, 感光的",
    "example": "Max is very sensitive; he cried today because of the bad news.",
    "exampleTranslation": "敏感的。"
  },
  {
    "word": "sentence",
    "phonetic": "/ˈsɛntn̩t͡s/",
    "pos": "n",
    "meaning": "句子, 判决, 宣判 v. 判决, 宣判",
    "example": "The court returned a sentence of guilt in the first charge, but innocence in the second.",
    "exampleTranslation": "句子。"
  },
  {
    "word": "separate",
    "phonetic": "/ˈsɛpəɹət/",
    "pos": "v",
    "meaning": "使分开, 使分离 adj. 单独的, 分开的",
    "example": "Separate the articles from the headings.",
    "exampleTranslation": "使分开。"
  },
  {
    "word": "separation",
    "phonetic": "/sɛpəˈɹeɪʃən/",
    "pos": "n",
    "meaning": "分离, 隔离",
    "example": "This is a separation.",
    "exampleTranslation": "这是一个分离"
  },
  {
    "word": "serious",
    "phonetic": "/ˈsɪə.ɹi.əs/",
    "pos": "adj",
    "meaning": "严肃的, 严重的; 认真的",
    "example": "It was a surprise to see the captain, who had always seemed so serious, laugh so heartily.",
    "exampleTranslation": "严肃的。"
  },
  {
    "word": "servant",
    "phonetic": "/ˈsɜːvənt/",
    "pos": "n",
    "meaning": "仆人, 佣人",
    "example": "There are three servants in the household, the butler and two maids.",
    "exampleTranslation": "仆人。"
  },
  {
    "word": "serve",
    "phonetic": "/sɜːv/",
    "pos": "v",
    "meaning": "招待, 服务",
    "example": "Whose serve is it?",
    "exampleTranslation": "招待。"
  },
  {
    "word": "service",
    "phonetic": "/ˈsɜːvɪs/",
    "pos": "n",
    "meaning": "服务, 服役",
    "example": "I say I did him a service by ending our relationship – now he can freely pursue his career.",
    "exampleTranslation": "服务。"
  },
  {
    "word": "set",
    "phonetic": "/sɛt/",
    "pos": "n",
    "meaning": "装备, 设备 v. 设置（布景, 背景）",
    "example": "Set the tray there.",
    "exampleTranslation": "装备。"
  },
  {
    "word": "settle",
    "phonetic": "/ˈsɛtəl/",
    "pos": "v",
    "meaning": "安家, 定居",
    "example": "to settle her estate",
    "exampleTranslation": "安家。"
  },
  {
    "word": "settlement",
    "phonetic": "/ˈset.l.mənt/",
    "pos": "n",
    "meaning": "新拓居地; 部落, 村落",
    "example": "This is a settlement.",
    "exampleTranslation": "这是一个新拓居地; 部落"
  },
  {
    "word": "settler",
    "phonetic": "/ˈsɛt.lə/",
    "pos": "n",
    "meaning": "移居者, 开拓者",
    "example": "the first settlers of New England",
    "exampleTranslation": "移居者。"
  },
  {
    "word": "several",
    "phonetic": "/ˈsɛv(ə)ɹəl/",
    "pos": "adj",
    "meaning": "几个, 数个, 若干",
    "example": "That is several.",
    "exampleTranslation": "几个。"
  },
  {
    "word": "severe",
    "phonetic": "/sɪˈvɪə/",
    "pos": "adj",
    "meaning": "严厉的, 严重的, 严峻的",
    "example": "a severe taskmaster",
    "exampleTranslation": "严厉的。"
  },
  {
    "word": "sex",
    "phonetic": "/sɛks/",
    "pos": "n",
    "meaning": "性, 性别",
    "example": "The effect of the medication is dependent upon age, sex, and other factors.",
    "exampleTranslation": "性。"
  },
  {
    "word": "shabby",
    "phonetic": "/ˈʃæb.i/",
    "pos": "adj",
    "meaning": "破旧的, 破烂的",
    "example": "They lived in a tiny apartment, with some old, shabby furniture.",
    "exampleTranslation": "破旧的。"
  },
  {
    "word": "shade",
    "phonetic": "/ʃeɪd/",
    "pos": "n",
    "meaning": "阴凉处, 树荫处",
    "example": "The old oak tree gave shade in the heat of the day.",
    "exampleTranslation": "阴凉处。"
  },
  {
    "word": "shadow",
    "phonetic": "/ˈʃædəʊ/",
    "pos": "n",
    "meaning": "影子, 阴影",
    "example": "My shadow lengthened as the sun began to set.",
    "exampleTranslation": "影子。"
  },
  {
    "word": "shallow",
    "phonetic": "/ˈʃaləʊ/",
    "pos": "adj",
    "meaning": "浅的, 不深的, 肤浅的",
    "example": "The ship ran aground in an unexpected shallow.",
    "exampleTranslation": "浅的。"
  },
  {
    "word": "shame",
    "phonetic": "/ʃeɪm/",
    "pos": "n",
    "meaning": "遗憾的事; 羞愧",
    "example": "The teenager couldn’t bear the shame of introducing his parents.",
    "exampleTranslation": "遗憾的事; 羞愧。"
  },
  {
    "word": "shape",
    "phonetic": "/ʃeɪp/",
    "pos": "n",
    "meaning": "形状, 外形 v. 使成型, 制造, 塑造",
    "example": "The used bookshop wouldn't offer much due to the poor shape of the book.",
    "exampleTranslation": "形状。"
  },
  {
    "word": "share",
    "phonetic": "/ʃɛə/",
    "pos": "v",
    "meaning": "分享, 共同使用",
    "example": "Upload media from the browser or directly to the file share.",
    "exampleTranslation": "分享。"
  },
  {
    "word": "shark",
    "phonetic": "/ʃɑːk/",
    "pos": "n",
    "meaning": "鲨鱼",
    "example": "I need the shark.",
    "exampleTranslation": "我需要这个鲨鱼"
  },
  {
    "word": "sharp",
    "phonetic": "/ʃɑːp/",
    "pos": "adj",
    "meaning": "锋利的, 尖的",
    "example": "The pitch pipe sounded out a perfect F♯ (F sharp).",
    "exampleTranslation": "锋利的。"
  },
  {
    "word": "sharpen",
    "phonetic": "/ˈʃɑɹpɨn/",
    "pos": "v",
    "meaning": "（使）变锐利, 削尖",
    "example": "to sharpen a pencil or a knife or a musical note",
    "exampleTranslation": "（使）变锐利。"
  },
  {
    "word": "sharpener",
    "phonetic": "/ˈʃɑː(ɹ)pənə(ɹ)/",
    "pos": "n",
    "meaning": "削刀, 磨床",
    "example": "There was a pencil sharpener at the front of the classroom.",
    "exampleTranslation": "削刀。"
  },
  {
    "word": "shaver",
    "phonetic": "/ˈʃeɪvə/",
    "pos": "n",
    "meaning": "剃须刀",
    "example": "I need the shaver.",
    "exampleTranslation": "我需要这个剃须刀"
  },
  {
    "word": "she",
    "phonetic": "/ʃiː/",
    "pos": "pron",
    "meaning": "她",
    "example": "Pat is definitely a she.",
    "exampleTranslation": "她。"
  },
  {
    "word": "sheet",
    "phonetic": "/ʃiːt/",
    "pos": "n",
    "meaning": "(一)片, (一)张, 薄片, 被单",
    "example": "Use the sheets in the hall closet to make the bed.",
    "exampleTranslation": "(一)片。"
  },
  {
    "word": "shelter",
    "phonetic": "/ˈʃɛltə/",
    "pos": "n",
    "meaning": "掩蔽; 隐蔽处",
    "example": "During the rainstorm, we sheltered under a tree.",
    "exampleTranslation": "掩蔽; 隐蔽处。"
  },
  {
    "word": "shine",
    "phonetic": "/ʃaɪn/",
    "pos": "n",
    "meaning": "光泽; 光彩; 阳光; 晴天; 光(亮)",
    "example": "She's certainly taken a shine to you.",
    "exampleTranslation": "光泽; 光彩; 阳光; 晴天; 光(亮)。"
  },
  {
    "word": "ship",
    "phonetic": "/ʃɪp/",
    "pos": "n",
    "meaning": "船, 轮船 v. 用船装运; 载运",
    "example": "The ship is important.",
    "exampleTranslation": "这艘船很重要。"
  },
  {
    "word": "shirt",
    "phonetic": "/ʃɜːt/",
    "pos": "n",
    "meaning": "衬衫",
    "example": "It can take a while to learn how to iron a shirt properly.",
    "exampleTranslation": "衬衫。"
  },
  {
    "word": "shock",
    "phonetic": "/ʃɒk/",
    "pos": "v",
    "meaning": "使震惊",
    "example": "The train hit the buffers with a great shock.",
    "exampleTranslation": "使震惊。"
  },
  {
    "word": "shoe",
    "phonetic": "/ʃuː/",
    "pos": "n",
    "meaning": "鞋",
    "example": "Get your shoes on now, or you'll be late for school.",
    "exampleTranslation": "鞋。"
  },
  {
    "word": "shop",
    "phonetic": "/ʃɒp/",
    "pos": "v",
    "meaning": "买东西 n. 商店, 车间",
    "example": "This is where I do my weekly shop.",
    "exampleTranslation": "这是一个where。"
  },
  {
    "word": "shopkeeper",
    "phonetic": "/ˈʃɑːpkiːpər/",
    "pos": "n",
    "meaning": "店主",
    "example": "This is a shopkeeper.",
    "exampleTranslation": "这是一个店主"
  },
  {
    "word": "shopping",
    "phonetic": "/ˈʃɒpɪŋ/",
    "pos": "n",
    "meaning": "买东西",
    "example": "He’s shopping for clothes.",
    "exampleTranslation": "买东西。"
  },
  {
    "word": "shore",
    "phonetic": "/ʃɔː/",
    "pos": "n",
    "meaning": "滨, 岸",
    "example": "lake shore;  bay shore;  gulf shore;  island shore;  mainland shore;  river shore;  estuary shore;  pond shore;  sandy shore;  rocky shore",
    "exampleTranslation": "滨。"
  },
  {
    "word": "short",
    "phonetic": "/ʃoːt/",
    "pos": "adj",
    "meaning": "短的; 矮的",
    "example": "38 short suits fit me right off the rack.",
    "exampleTranslation": "短的; 矮的。"
  },
  {
    "word": "shortcoming",
    "phonetic": "/ˈʃɔːrtkʌmɪŋ/",
    "pos": "n",
    "meaning": "缺点, 短处",
    "example": "This is a shortcoming.",
    "exampleTranslation": "这是一个缺点"
  },
  {
    "word": "shortly",
    "phonetic": "/ʃɔːɹtli/",
    "pos": "adv",
    "meaning": "不久",
    "example": "Ideas are generally expressed more shortly in verse than in prose",
    "exampleTranslation": "不久。"
  },
  {
    "word": "shorts",
    "phonetic": "/ʃɔː(ɹ)ts/",
    "pos": "n",
    "meaning": "短裤;  运动短裤",
    "example": "38 short suits fit me right off the rack.",
    "exampleTranslation": "短裤;  运动短裤。"
  },
  {
    "word": "shot",
    "phonetic": "/ʃɒt/",
    "pos": "n",
    "meaning": "射击, 开枪, 开炮, 射击声",
    "example": "The land shoots into a promontory.",
    "exampleTranslation": "射击。"
  },
  {
    "word": "should",
    "phonetic": "/ʃʊd/",
    "pos": "v",
    "meaning": "mod. 应当, 应该, 将要; 会",
    "example": "I hope that we shall win the game.",
    "exampleTranslation": "mod. 应当。"
  },
  {
    "word": "shoulder",
    "phonetic": "/ˈʃəʊldə/",
    "pos": "n",
    "meaning": "肩膀",
    "example": "shoulder the blame",
    "exampleTranslation": "肩膀。"
  },
  {
    "word": "shout",
    "phonetic": "/ʃaʊt/",
    "pos": "n",
    "meaning": "呼喊, 呼叫声 v. 呼喊, 呼叫",
    "example": "Next up the new single from Beyoncé, but first a shout to Barry Bloggins and his wife Belinda...",
    "exampleTranslation": "呼喊。"
  },
  {
    "word": "shower",
    "phonetic": "/ˈʃaʊ.ə(ɹ)/",
    "pos": "n",
    "meaning": "阵雨; 淋浴",
    "example": "Today there will be frequent showers and some sunny spells.",
    "exampleTranslation": "阵雨; 淋浴。"
  },
  {
    "word": "shuttle",
    "phonetic": "/ˈʃʌtl/",
    "pos": "n",
    "meaning": "往返汽车(列车、飞机), 航天飞机",
    "example": "This is a shuttle.",
    "exampleTranslation": "这是一个往返汽车(列车、飞机)"
  },
  {
    "word": "shy",
    "phonetic": "/ʃaɪ/",
    "pos": "adj",
    "meaning": "害羞的",
    "example": "coconut shy",
    "exampleTranslation": "害羞的。"
  },
  {
    "word": "sick",
    "phonetic": "/sɪk/",
    "pos": "adj",
    "meaning": "不舒服, 有病的, 恶心的",
    "example": "We have to cure the sick.",
    "exampleTranslation": "不舒服。"
  },
  {
    "word": "sickness",
    "phonetic": "/ˈsɪknɪs/",
    "pos": "n",
    "meaning": "疾病, 呕吐",
    "example": "The sickness is important.",
    "exampleTranslation": "这个sickness很重要。"
  },
  {
    "word": "side",
    "phonetic": "/saɪd/",
    "pos": "n",
    "meaning": "边, 旁边, 面, 侧面",
    "example": "A square has four sides.",
    "exampleTranslation": "边。"
  },
  {
    "word": "sideway",
    "phonetic": "/ˈsaɪdweɪ/",
    "pos": "n",
    "meaning": "岔路, 旁路; 小路, 人行道",
    "example": "I need the sideway.",
    "exampleTranslation": "我需要这个岔路"
  },
  {
    "word": "sideways",
    "phonetic": "/ˈsaɪdweɪz/",
    "pos": "adv",
    "meaning": "斜向一边; 向侧面地",
    "example": "He gave the ball a sideways kick.",
    "exampleTranslation": "斜向一边; 向侧面地。"
  },
  {
    "word": "sigh",
    "phonetic": "/saɪ/",
    "pos": "v",
    "meaning": "叹息;叹气",
    "example": "He sighed over the lost opportunity.",
    "exampleTranslation": "叹息;叹气。"
  },
  {
    "word": "sight",
    "phonetic": "/saɪt/",
    "pos": "n",
    "meaning": "视力, 视觉, 见, 瞥见, 视域, 眼界",
    "example": "He is losing his sight and now can barely read.",
    "exampleTranslation": "视力。"
  },
  {
    "word": "sightseeing",
    "phonetic": "/ˈsaɪtsiːɪŋ/",
    "pos": "n",
    "meaning": "游览, 观光",
    "example": "Sightseeing is a frequent reason to visit San Francisco.",
    "exampleTranslation": "游览。"
  },
  {
    "word": "signal",
    "phonetic": "/ˈsɪɡnəl/",
    "pos": "n",
    "meaning": "信号, 暗号",
    "example": "My mobile phone can't get a signal in the railway station.",
    "exampleTranslation": "信号。"
  },
  {
    "word": "signature",
    "phonetic": "/ˈsɪɡnətʃə/",
    "pos": "n",
    "meaning": "签名",
    "example": "Your signature must not exceed 600 pixels.",
    "exampleTranslation": "签名。"
  },
  {
    "word": "significance",
    "phonetic": "/sɪɡˈnɪfɪkəns/",
    "pos": "n",
    "meaning": "意义, 重要性",
    "example": "As a juror your opinion is of great significance for the outcome of the trial.",
    "exampleTranslation": "意义。"
  },
  {
    "word": "silence",
    "phonetic": "/ˈsaɪ.ləns/",
    "pos": "n",
    "meaning": "安静, 沉默",
    "example": "When the motor stopped, the silence was almost deafening.",
    "exampleTranslation": "安静。"
  },
  {
    "word": "silent",
    "phonetic": "/ˈsaɪlənt/",
    "pos": "adj",
    "meaning": "无声的, 无对话的",
    "example": "The wind is silent.",
    "exampleTranslation": "无声的。"
  },
  {
    "word": "silk",
    "phonetic": "/sɪlk/",
    "pos": "n",
    "meaning": "丝, 丝织品",
    "example": "The thread made of silk was barely visible.",
    "exampleTranslation": "丝。"
  },
  {
    "word": "silly",
    "phonetic": "/ˈsɪli/",
    "pos": "adj",
    "meaning": "傻的, 愚蠢的",
    "example": "That is silly.",
    "exampleTranslation": "傻的。"
  },
  {
    "word": "silver",
    "phonetic": "/ˈsɪl.və/",
    "pos": "n",
    "meaning": "银",
    "example": "to silver a pin;  to silver a glass mirror plate with an amalgam of tin and mercury",
    "exampleTranslation": "银。"
  },
  {
    "word": "similar",
    "phonetic": "/ˈsɪmələ/",
    "pos": "adj",
    "meaning": "相似的, 像",
    "example": "He seems similar.",
    "exampleTranslation": "相似的。"
  },
  {
    "word": "simple",
    "phonetic": "/ˈsɪmpəl/",
    "pos": "adj",
    "meaning": "简单的, 简易的",
    "example": "This is simple.",
    "exampleTranslation": "简单的。"
  },
  {
    "word": "simplify",
    "phonetic": "/ˈsɪmpləfaɪ/",
    "pos": "v",
    "meaning": "简化; 使简易; 使单纯",
    "example": "She wants to simplify.",
    "exampleTranslation": "简化; 使简易; 使单纯。"
  },
  {
    "word": "since",
    "phonetic": "/sɪns/",
    "pos": "adv",
    "meaning": "从那时以来 conj. 从…以来, 由于 prep. 从…以来",
    "example": "A short/long time since",
    "exampleTranslation": "从那时以来  从…以来"
  },
  {
    "word": "sincerely",
    "phonetic": "/sɪnˈsɪəli/",
    "pos": "adv",
    "meaning": "真诚地",
    "example": "I sincerely hope they make it home safely.",
    "exampleTranslation": "真诚地。"
  },
  {
    "word": "single",
    "phonetic": "/ˈsɪŋɡəl/",
    "pos": "adj",
    "meaning": "单一的, 单个的",
    "example": "The Offspring released four singles from their most recent album.",
    "exampleTranslation": "单一的。"
  },
  {
    "word": "sir",
    "phonetic": "/ˈsə(ɹ)/",
    "pos": "n",
    "meaning": "先生; 阁下",
    "example": "Excuse me, sir, do you know the way to the art museum?",
    "exampleTranslation": "先生; 阁下。"
  },
  {
    "word": "sister",
    "phonetic": "/ˈsɪs.tə/",
    "pos": "n",
    "meaning": "姐; 妹",
    "example": "My sister is always driving me crazy.",
    "exampleTranslation": "姐; 妹。"
  },
  {
    "word": "situation",
    "phonetic": "/sɪtjuːˈeɪʃən/",
    "pos": "n",
    "meaning": "形势, 情况",
    "example": "The United States is in an awkward situation with debt default looming.",
    "exampleTranslation": "形势。"
  },
  {
    "word": "size",
    "phonetic": "/saɪz/",
    "pos": "n",
    "meaning": "尺寸, 大小",
    "example": "The size of the building seemed to have increased since I was last there.",
    "exampleTranslation": "尺寸。"
  },
  {
    "word": "skate",
    "phonetic": "/skeɪt/",
    "pos": "v",
    "meaning": "溜冰, 滑冰",
    "example": "There's time for a quick skate before dinner.",
    "exampleTranslation": "溜冰。"
  },
  {
    "word": "skateboard",
    "phonetic": "/ˈskeɪtbɔːrd/",
    "pos": "n",
    "meaning": "冰鞋, 滑板",
    "example": "The skateboard is important.",
    "exampleTranslation": "这个skateboard很重要。"
  },
  {
    "word": "ski",
    "phonetic": "/ʃiː/",
    "pos": "n",
    "meaning": "滑雪板 v. ; 滑雪",
    "example": "The ski is important.",
    "exampleTranslation": "这个ski很重要。"
  },
  {
    "word": "skill",
    "phonetic": "/skɪl/",
    "pos": "n",
    "meaning": "技能, 技巧",
    "example": "This is a skill.",
    "exampleTranslation": "这是一个技能"
  },
  {
    "word": "skillful",
    "phonetic": "/ˈskɪl.fəl/",
    "pos": "adj",
    "meaning": "熟练的, 精湛的; 灵巧的",
    "example": "This is skillful.",
    "exampleTranslation": "熟练的。"
  },
  {
    "word": "skin",
    "phonetic": "/skɪn/",
    "pos": "n",
    "meaning": "皮, 皮肤",
    "example": "He is so disgusting he makes my skin crawl.",
    "exampleTranslation": "皮。"
  },
  {
    "word": "skip",
    "phonetic": "/skɪp/",
    "pos": "v",
    "meaning": "跳, 蹦 n. 跳跃",
    "example": "She will skip from one end of the sidewalk to the other.",
    "exampleTranslation": "跳。"
  },
  {
    "word": "skirt",
    "phonetic": "/skɜːt/",
    "pos": "n",
    "meaning": "裙",
    "example": "The plain was skirted by rows of trees.",
    "exampleTranslation": "裙。"
  },
  {
    "word": "sky",
    "phonetic": "/skaɪ/",
    "pos": "n",
    "meaning": "天; 天空",
    "example": "That year, a meteor fell from the sky.",
    "exampleTranslation": "天; 天空。"
  },
  {
    "word": "skyscraper",
    "phonetic": "/ˈskaɪˌskɹeɪp.ə(ɹ)/",
    "pos": "n",
    "meaning": "摩天楼",
    "example": "The skyscraper is important.",
    "exampleTranslation": "这个skyscraper很重要。"
  },
  {
    "word": "slave",
    "phonetic": "/sleɪv/",
    "pos": "n",
    "meaning": "奴隶",
    "example": "a slave to passion, to strong drink, or to ambition",
    "exampleTranslation": "奴隶。"
  },
  {
    "word": "slavery",
    "phonetic": "/ˈsleɪvəɹi/",
    "pos": "n",
    "meaning": "奴隶制度",
    "example": "This is a slavery.",
    "exampleTranslation": "这是一个奴隶制度"
  },
  {
    "word": "sleepy",
    "phonetic": "/ˈsliːpi/",
    "pos": "adj",
    "meaning": "想睡的, 困倦的",
    "example": "a sleepy drink or potion",
    "exampleTranslation": "想睡的。"
  },
  {
    "word": "sleeve",
    "phonetic": "/sliːv/",
    "pos": "n",
    "meaning": "袖子, 袖套",
    "example": "The sleeve is important.",
    "exampleTranslation": "这个sleeve很重要。"
  },
  {
    "word": "slice",
    "phonetic": "/slaɪs/",
    "pos": "n",
    "meaning": "片, 切面（薄）片",
    "example": "Jim was munching on a slice of toast.",
    "exampleTranslation": "片。"
  },
  {
    "word": "slide",
    "phonetic": "/slaɪd/",
    "pos": "n",
    "meaning": "幻灯片, 滑道 v. 滑行, 滑动",
    "example": "The long, red slide was great fun for the kids.",
    "exampleTranslation": "幻灯片。"
  },
  {
    "word": "slight",
    "phonetic": "/sl̥l͡ɐɪʔ̚/",
    "pos": "adj",
    "meaning": "轻微的, 细小的",
    "example": "a slight but graceful woman",
    "exampleTranslation": "轻微的。"
  },
  {
    "word": "slim",
    "phonetic": "/slɪm/",
    "pos": "adj",
    "meaning": "苗条的, 纤细的",
    "example": "I only smoke slims.",
    "exampleTranslation": "苗条的。"
  },
  {
    "word": "slip",
    "phonetic": "/slɪp/",
    "pos": "n",
    "meaning": "滑落；跌跤; 片, 条",
    "example": "This is a slip.",
    "exampleTranslation": "这是一个滑落；跌跤; 片"
  },
  {
    "word": "slow",
    "phonetic": "/sləʊ/",
    "pos": "adv",
    "meaning": "慢慢地, 缓慢地",
    "example": "a slow train;  a slow computer",
    "exampleTranslation": "慢慢地。"
  },
  {
    "word": "small",
    "phonetic": "/smoːl/",
    "pos": "adj",
    "meaning": "小的, 少的",
    "example": "A small group.",
    "exampleTranslation": "小的。"
  },
  {
    "word": "smile",
    "phonetic": "/ˈsmaɪ.əl/",
    "pos": "n",
    "meaning": "& v. 微笑",
    "example": "He always puts a smile on my face.",
    "exampleTranslation": "微笑"
  },
  {
    "word": "smog",
    "phonetic": "/smɒɡ/",
    "pos": "n",
    "meaning": "烟雾",
    "example": "If the car is more than five years old, you'll have to have it smogged before you can register it.",
    "exampleTranslation": "烟雾。"
  },
  {
    "word": "smoke",
    "phonetic": "/sməʊk/",
    "pos": "n",
    "meaning": "烟 v. 冒烟; 吸烟",
    "example": "Can I bum a smoke off you?;  I need to go buy some smokes.",
    "exampleTranslation": "我需要to。"
  },
  {
    "word": "smoker",
    "phonetic": "/ˈsmoʊkɚ/",
    "pos": "n",
    "meaning": "吸烟者",
    "example": "This is a smoker.",
    "exampleTranslation": "这是一个吸烟者"
  },
  {
    "word": "smooth",
    "phonetic": "/smuːð/",
    "pos": "adj",
    "meaning": "光滑的; 平坦的",
    "example": "to smooth a person's temper",
    "exampleTranslation": "光滑的; 平坦的。"
  },
  {
    "word": "snake",
    "phonetic": "/ˈsneɪk/",
    "pos": "n",
    "meaning": "蛇",
    "example": "The path snaked through the forest.",
    "exampleTranslation": "蛇。"
  },
  {
    "word": "sneaker",
    "phonetic": "/ˈsnikɚ/",
    "pos": "n",
    "meaning": "运动鞋",
    "example": "I need the sneaker.",
    "exampleTranslation": "我需要这个运动鞋"
  },
  {
    "word": "sneeze",
    "phonetic": "/sniːz/",
    "pos": "v",
    "meaning": "打喷嚏",
    "example": "She wants to sneeze.",
    "exampleTranslation": "打喷嚏。"
  },
  {
    "word": "sniff",
    "phonetic": "/snɪf/",
    "pos": "v",
    "meaning": "用力吸, 嗅, 闻到, 发觉, 轻视",
    "example": "She gave the flowers a quick sniff to check they were real.",
    "exampleTranslation": "用力吸。"
  },
  {
    "word": "snow",
    "phonetic": "/snəʊ/",
    "pos": "n",
    "meaning": "雪 v. 下雪",
    "example": "We have had several heavy snows this year.",
    "exampleTranslation": "雪  下雪"
  },
  {
    "word": "snowy",
    "phonetic": "/snəʊi/",
    "pos": "adj",
    "meaning": "下雪的; 多(积)雪的",
    "example": "snowy day",
    "exampleTranslation": "下雪的; 多(积)雪的。"
  },
  {
    "word": "so",
    "phonetic": "/səʊ/",
    "pos": "adv",
    "meaning": "如此, 这么; 非常 conj. 因此, 所以",
    "example": "That is so.  You are responsible for this, is that not so?",
    "exampleTranslation": "如此。"
  },
  {
    "word": "soap",
    "phonetic": "/səʊp/",
    "pos": "n",
    "meaning": "肥皂",
    "example": "I tried washing my hands with soap, but the stain wouldn't go away.",
    "exampleTranslation": "肥皂。"
  },
  {
    "word": "soccer",
    "phonetic": "/ˈsɒk.ə/",
    "pos": "n",
    "meaning": "英式足球",
    "example": "This is a soccer.",
    "exampleTranslation": "这是一个英式足球"
  },
  {
    "word": "social",
    "phonetic": "/ˈsəʊʃəl/",
    "pos": "adj",
    "meaning": "社会的; 社交的",
    "example": "They organized a social at the dance club to get people to know each other.",
    "exampleTranslation": "社会的; 社交的。"
  },
  {
    "word": "socialism",
    "phonetic": "/ˈsəʊʃəlɪzəm/",
    "pos": "n",
    "meaning": "社会主义",
    "example": "The socialism is important.",
    "exampleTranslation": "这个socialism很重要。"
  },
  {
    "word": "socialist",
    "phonetic": "/ˈsəʊʃəlɪst/",
    "pos": "adj",
    "meaning": "社会主义的",
    "example": "He seems socialist.",
    "exampleTranslation": "社会主义的。"
  },
  {
    "word": "society",
    "phonetic": "/səˈsaɪ.ə.ti/",
    "pos": "n",
    "meaning": "社会",
    "example": "This society has been known for centuries for its colorful clothing and tight-knit family structure.",
    "exampleTranslation": "社会。"
  },
  {
    "word": "sock",
    "phonetic": "/sɒk/",
    "pos": "n",
    "meaning": "短袜",
    "example": "The sock is important.",
    "exampleTranslation": "这个sock很重要。"
  },
  {
    "word": "socket",
    "phonetic": "/ˈsɒkɪt/",
    "pos": "n",
    "meaning": "窝, 穴, 孔, 插座",
    "example": "This is a socket.",
    "exampleTranslation": "这是一个窝"
  },
  {
    "word": "sofa",
    "phonetic": "/ˈsəʊfə/",
    "pos": "n",
    "meaning": "沙发",
    "example": "I need the sofa.",
    "exampleTranslation": "我需要这张沙发。"
  },
  {
    "word": "soft",
    "phonetic": "/sɑft/",
    "pos": "adj",
    "meaning": "软的, 柔和的",
    "example": "My head sank easily into the soft pillow.",
    "exampleTranslation": "软的。"
  },
  {
    "word": "software",
    "phonetic": "/ˈsɑftˌwɛɹ/",
    "pos": "n",
    "meaning": "软件",
    "example": "The software is important.",
    "exampleTranslation": "这个software很重要。"
  },
  {
    "word": "soil",
    "phonetic": "/sɔɪl/",
    "pos": "n",
    "meaning": "土壤, 土地",
    "example": "Kenyan soil",
    "exampleTranslation": "土壤。"
  },
  {
    "word": "solar",
    "phonetic": "/ˈsəʊlə/",
    "pos": "adj",
    "meaning": "太阳的, 日光的",
    "example": "solar influence",
    "exampleTranslation": "太阳的。"
  },
  {
    "word": "soldier",
    "phonetic": "/ˈsɒld͡ʒə/",
    "pos": "n",
    "meaning": "士兵, 战士",
    "example": "The soldier is important.",
    "exampleTranslation": "这个soldier很重要。"
  },
  {
    "word": "solid",
    "phonetic": "/ˈsɒlɪd/",
    "pos": "adj",
    "meaning": "结实的, 固体的 n. 固体",
    "example": "I owe him; he did me a solid last year.",
    "exampleTranslation": "结实的。"
  },
  {
    "word": "some",
    "phonetic": "/sɐm/",
    "pos": "adj",
    "meaning": "一些, 若干; 有些; 某一 pron. 若干, 一些",
    "example": "I guess he must have weighed some 90 kilos.",
    "exampleTranslation": "一些。"
  },
  {
    "word": "somebody",
    "phonetic": "/ˈsʌmbədɪ/",
    "pos": "pron",
    "meaning": "某人; 有人; 有名气的人",
    "example": "I'm tired of being a nobody – I want to be a somebody.",
    "exampleTranslation": "某人; 有人; 有名气的人。"
  },
  {
    "word": "somehow",
    "phonetic": "/ˈsʌmhaʊ/",
    "pos": "adv",
    "meaning": "不知何故",
    "example": "This problem has to be tackled somehow.",
    "exampleTranslation": "不知何故。"
  },
  {
    "word": "someone",
    "phonetic": "/ˈsʌmwʌn/",
    "pos": "pron",
    "meaning": "某一个人",
    "example": "Do you need a gift for that special someone?",
    "exampleTranslation": "某一个人。"
  },
  {
    "word": "something",
    "phonetic": "/ˈsamθɪŋ/",
    "pos": "pron",
    "meaning": "某事; 某物",
    "example": "The baby looks something like his father.",
    "exampleTranslation": "某事; 某物。"
  },
  {
    "word": "sometimes",
    "phonetic": "/ˈsʌmtaɪmz/",
    "pos": "adv",
    "meaning": "有时",
    "example": "Sometimes I sit and think, but mostly I just sit.",
    "exampleTranslation": "有时。"
  },
  {
    "word": "somewhere",
    "phonetic": "/ˈsʌm.hweːɹ/",
    "pos": "adv",
    "meaning": "在某处",
    "example": "I must have left my glasses somewhere.",
    "exampleTranslation": "在某处。"
  },
  {
    "word": "song",
    "phonetic": "/sɒŋ/",
    "pos": "n",
    "meaning": "歌唱; 歌曲",
    "example": "Thomas listened to his favorite song on the radio yesterday.",
    "exampleTranslation": "歌唱; 歌曲。"
  },
  {
    "word": "soon",
    "phonetic": "/suːn/",
    "pos": "adv",
    "meaning": "不久, 很快, 一会儿",
    "example": "I need the soonest date you have available.",
    "exampleTranslation": "我需要这个不久"
  },
  {
    "word": "sorrow",
    "phonetic": "/ˈsɑːroʊ/",
    "pos": "n",
    "meaning": "悲伤, 悲痛",
    "example": "The sorrow is important.",
    "exampleTranslation": "这个sorrow很重要。"
  },
  {
    "word": "sorry",
    "phonetic": "/ˈsɔɹi/",
    "pos": "adj",
    "meaning": "对不起, 抱歉; 难过的",
    "example": "I am sorry I stepped on your toes. It was an accident.",
    "exampleTranslation": "对不起。"
  },
  {
    "word": "sort",
    "phonetic": "/sɔːt/",
    "pos": "v",
    "meaning": "把…分类, 拣选 n. 种类, 类别",
    "example": "I had a sort of my cupboard.",
    "exampleTranslation": "把…分类。"
  },
  {
    "word": "soul",
    "phonetic": "/səʊl/",
    "pos": "n",
    "meaning": "灵魂; 心灵; 气魄",
    "example": "Fifty souls were lost when the ship sank.",
    "exampleTranslation": "灵魂; 心灵; 气魄。"
  },
  {
    "word": "sound",
    "phonetic": "/saʊnd/",
    "pos": "v",
    "meaning": "听起来; 发出声音 n. 声音",
    "example": "He was safe and sound.",
    "exampleTranslation": "听起来"
  },
  {
    "word": "soup",
    "phonetic": "/suːp/",
    "pos": "n",
    "meaning": "汤",
    "example": "Pho is a traditional Vietnamese soup.",
    "exampleTranslation": "汤。"
  },
  {
    "word": "sour",
    "phonetic": "/ˈsaʊə/",
    "pos": "adj",
    "meaning": "酸的, 发酵的",
    "example": "Too much lemon juice will sour the recipe.",
    "exampleTranslation": "酸的。"
  },
  {
    "word": "south",
    "phonetic": "/sæoθ/",
    "pos": "adj",
    "meaning": "南(方)的; 向南的 adv. 在南方; 向南方 n.南方; 南部",
    "example": "The moon souths at nine.",
    "exampleTranslation": "南方的"
  },
  {
    "word": "southeast",
    "phonetic": "/ˌsaʊθˈiːst/",
    "pos": "n",
    "meaning": "东南",
    "example": "This is a southeast.",
    "exampleTranslation": "这是一个东南"
  },
  {
    "word": "southern",
    "phonetic": "/ˈsʌðɚn/",
    "pos": "adj",
    "meaning": "南部的, 南方的",
    "example": "The southern climate.",
    "exampleTranslation": "南部的。"
  },
  {
    "word": "southwest",
    "phonetic": "/saʊˈwɛst/",
    "pos": "n",
    "meaning": "西南",
    "example": "The southwest is important.",
    "exampleTranslation": "这个southwest很重要。"
  },
  {
    "word": "souvenir",
    "phonetic": "/ˌsuːvəˈnɪə(ɹ)/",
    "pos": "n",
    "meaning": "纪念品, 纪念物",
    "example": "The souvenir is important.",
    "exampleTranslation": "这个souvenir很重要。"
  },
  {
    "word": "space",
    "phonetic": "/speɪs/",
    "pos": "n",
    "meaning": "空间",
    "example": "The space is important.",
    "exampleTranslation": "这个space很重要。"
  },
  {
    "word": "spaceship",
    "phonetic": "/ˈspeɪsʃɪp/",
    "pos": "n",
    "meaning": "宇宙飞船",
    "example": "I need the spaceship.",
    "exampleTranslation": "我需要这个宇宙飞船"
  },
  {
    "word": "spade",
    "phonetic": "/speɪd/",
    "pos": "n",
    "meaning": "铲子",
    "example": "I've got only one spade in my hand.",
    "exampleTranslation": "铲子。"
  },
  {
    "word": "spare",
    "phonetic": "/ˈspɛə(ɹ)/",
    "pos": "adj",
    "meaning": "空闲的, 多余的, 剩余的",
    "example": "a spare diet",
    "exampleTranslation": "空闲的。"
  },
  {
    "word": "sparrow",
    "phonetic": "/ˈspæɹəʊ/",
    "pos": "n",
    "meaning": "麻雀",
    "example": "The sparrow is important.",
    "exampleTranslation": "这个sparrow很重要。"
  },
  {
    "word": "speaker",
    "phonetic": "/ˈspiːkə/",
    "pos": "n",
    "meaning": "演讲人, 演说家",
    "example": "The company hired a motivational speaker to boost morale.",
    "exampleTranslation": "演讲人。"
  },
  {
    "word": "spear",
    "phonetic": "/spɪɹ/",
    "pos": "n",
    "meaning": "矛, 梭镖",
    "example": "asparagus and broccoli spears",
    "exampleTranslation": "矛。"
  },
  {
    "word": "special",
    "phonetic": "/ˈspɛ.ʃəl/",
    "pos": "adj",
    "meaning": "特别的, 专门的",
    "example": "We're running a special on turkey for Thanksgiving.",
    "exampleTranslation": "特别的。"
  },
  {
    "word": "specialist",
    "phonetic": "/ˈspɛʃəlɪst/",
    "pos": "n",
    "meaning": "专家; 专业人员",
    "example": "The tree Lepidothamnus laxifolius is a high alpine specialist found in high-altitude bog communities and in scrub.",
    "exampleTranslation": "专家; 专业人员。"
  },
  {
    "word": "specific",
    "phonetic": "/spəˈsɪf.ɪk/",
    "pos": "adj",
    "meaning": "详细而精确的, 明确的",
    "example": "a highly specific test, specific and nonspecific symptoms",
    "exampleTranslation": "详细而精确的。"
  },
  {
    "word": "speech",
    "phonetic": "/ˈspiːtʃ/",
    "pos": "n",
    "meaning": "演讲",
    "example": "It was hard to hear the sounds of his speech over the noise. He had a bad speech impediment.",
    "exampleTranslation": "演讲。"
  },
  {
    "word": "speed",
    "phonetic": "/spiːd/",
    "pos": "n",
    "meaning": "速度 v.（使）加速",
    "example": "How does Usain Bolt run at that speed?",
    "exampleTranslation": "速度 （使）加速"
  },
  {
    "word": "spell",
    "phonetic": "/spɛl/",
    "pos": "v",
    "meaning": "拼写",
    "example": "He cast a spell to cure warts.",
    "exampleTranslation": "拼写。"
  },
  {
    "word": "spelling",
    "phonetic": "/ˈspɛlɪŋ/",
    "pos": "n",
    "meaning": "拼写, 拼读",
    "example": "I find it difficult to spell because I'm dyslexic.",
    "exampleTranslation": "拼写。"
  },
  {
    "word": "spin",
    "phonetic": "/spɪn/",
    "pos": "v",
    "meaning": "纺, (使) 快速旋转; n. 旋转, 旋转运动",
    "example": "He put some spin on the cue ball.",
    "exampleTranslation": "纺。"
  },
  {
    "word": "spirit",
    "phonetic": "/ˈspɪɹɪt/",
    "pos": "n",
    "meaning": "精神",
    "example": "A wandering spirit haunts the island.",
    "exampleTranslation": "精神。"
  },
  {
    "word": "spiritual",
    "phonetic": "/ˈspɪɹɪtjʊəl/",
    "pos": "adj",
    "meaning": "精神的; 心灵的",
    "example": "He assigns supremacy to the pope in spirituals, and to the emperor in temporals. — Lowell.",
    "exampleTranslation": "精神的; 心灵的。"
  },
  {
    "word": "spit",
    "phonetic": "/spɪt/",
    "pos": "v",
    "meaning": "吐唾沫; 吐痰",
    "example": "to spit a loin of veal",
    "exampleTranslation": "吐唾沫; 吐痰。"
  },
  {
    "word": "splendid",
    "phonetic": "/ˈsplɛndɪd/",
    "pos": "adj",
    "meaning": "灿烂的, 辉煌的;（口语）极好的",
    "example": "a splendid sun",
    "exampleTranslation": "灿烂的。"
  },
  {
    "word": "split",
    "phonetic": "/splɪt/",
    "pos": "v",
    "meaning": "撕开; 切开",
    "example": "He’s got a nasty split.",
    "exampleTranslation": "撕开; 切开。"
  },
  {
    "word": "spoken",
    "phonetic": "/ˈspoʊkən/",
    "pos": "adj",
    "meaning": "口语的",
    "example": "I was so surprised I couldn't speak.",
    "exampleTranslation": "口语的。"
  },
  {
    "word": "sponsor",
    "phonetic": "/ˈspɒn.sə/",
    "pos": "n",
    "meaning": "发起人, 主办者, 保证人",
    "example": "He was my sponsor when I applied to join the club.",
    "exampleTranslation": "发起人。"
  },
  {
    "word": "spoon",
    "phonetic": "/spuːn/",
    "pos": "n",
    "meaning": "匙",
    "example": "Sarah spooned some apple sauce onto her plate.",
    "exampleTranslation": "匙。"
  },
  {
    "word": "spoonful",
    "phonetic": "/ˈspuːnfʊl/",
    "pos": "n",
    "meaning": "一匙（的量）",
    "example": "The spoonful is important.",
    "exampleTranslation": "这个spoonful很重要。"
  },
  {
    "word": "sport",
    "phonetic": "/spɔːt/",
    "pos": "n",
    "meaning": "体育运动, 锻炼; 运动会",
    "example": "Joe was banned from getting legal help. He seemed to view lawsuits as a sport.",
    "exampleTranslation": "体育运动。"
  },
  {
    "word": "spot",
    "phonetic": "/spɒt/",
    "pos": "n",
    "meaning": "斑点, 污点; 场所, 地点 v.认出, 发现；弄脏",
    "example": "The leopard is noted for the spots of color in its fur.",
    "exampleTranslation": "斑点。"
  },
  {
    "word": "spray",
    "phonetic": "/spɹeɪ/",
    "pos": "n",
    "meaning": "水雾, 喷雾, 飞沫 v. 喷射, 喷溅",
    "example": "The sailor could feel the spray from the waves.",
    "exampleTranslation": "水雾。"
  },
  {
    "word": "spring",
    "phonetic": "/sprɪŋ/",
    "pos": "n",
    "meaning": "春天, 春季；泉水, 泉",
    "example": "This is a spring.",
    "exampleTranslation": "这是一个春天"
  },
  {
    "word": "spy",
    "phonetic": "/spaɪ/",
    "pos": "n",
    "meaning": "密探, 间谍 v. 侦探, 刺探",
    "example": "During the Cold War, Russia and America would each spy on each other for recon.",
    "exampleTranslation": "密探。"
  },
  {
    "word": "square",
    "phonetic": "/skwɛə(ɹ)/",
    "pos": "n",
    "meaning": "广场 adj. 平方的; 方形的",
    "example": "64 is the square of 8.",
    "exampleTranslation": "广场  平方的"
  },
  {
    "word": "squeeze",
    "phonetic": "/skwiːz/",
    "pos": "n",
    "meaning": "压榨, 挤",
    "example": "I'm in a tight squeeze right now when it comes to my free time.",
    "exampleTranslation": "压榨。"
  },
  {
    "word": "squirrel",
    "phonetic": "/ˈskwɪɹl̩/",
    "pos": "n",
    "meaning": "松鼠",
    "example": "This is a squirrel.",
    "exampleTranslation": "这是一个松鼠"
  },
  {
    "word": "stable",
    "phonetic": "/ˈsteɪ.bəɫ/",
    "pos": "adj",
    "meaning": "稳定的",
    "example": "There were stalls for fourteen horses in the squire's stables.",
    "exampleTranslation": "稳定的。"
  },
  {
    "word": "stadium",
    "phonetic": "/ˈsteɪ.di.əm/",
    "pos": "n",
    "meaning": "（露天）体育场",
    "example": "The stadium is important.",
    "exampleTranslation": "这个stadium很重要。"
  },
  {
    "word": "staff",
    "phonetic": "/ˈstæf/",
    "pos": "n",
    "meaning": "全体职员",
    "example": "The company employed 10 new members of staff this month.",
    "exampleTranslation": "全体职员。"
  },
  {
    "word": "stage",
    "phonetic": "/steɪd͡ʒ/",
    "pos": "n",
    "meaning": "舞台; 阶段",
    "example": "Completion of an identifiable stage of maintenance such as removing an aircraft engine for repair or storage.",
    "exampleTranslation": "舞台; 阶段。"
  },
  {
    "word": "stain",
    "phonetic": "/steɪn/",
    "pos": "n",
    "meaning": "污点, 瑕疵",
    "example": "armour stained with blood",
    "exampleTranslation": "污点。"
  },
  {
    "word": "stainless",
    "phonetic": "/ˈsteɪnləs/",
    "pos": "adj",
    "meaning": "纯洁的, 无瑕疵的, 不锈的",
    "example": "He seems stainless.",
    "exampleTranslation": "纯洁的。"
  },
  {
    "word": "stair",
    "phonetic": "/stɛə/",
    "pos": "n",
    "meaning": "楼梯",
    "example": "This is a stair.",
    "exampleTranslation": "这是一个楼梯"
  },
  {
    "word": "stamp",
    "phonetic": "/stæmp/",
    "pos": "n",
    "meaning": "邮票",
    "example": "The horse gave two quick stamps and rose up on its hind legs.",
    "exampleTranslation": "邮票。"
  },
  {
    "word": "standard",
    "phonetic": "/ˈstændəd/",
    "pos": "n",
    "meaning": "标准 adj. 标准的",
    "example": "standard works in history; standard authors",
    "exampleTranslation": "标准  标准的"
  },
  {
    "word": "star",
    "phonetic": "/stɑː(ɹ)/",
    "pos": "n",
    "meaning": "星, 恒星",
    "example": "Many Hollywood stars attended the launch party.",
    "exampleTranslation": "星。"
  },
  {
    "word": "stare",
    "phonetic": "/stɛə(ɹ)/",
    "pos": "v",
    "meaning": "盯, 凝视",
    "example": "the stares of astonished passers-by",
    "exampleTranslation": "盯。"
  },
  {
    "word": "start",
    "phonetic": "/stɑːt/",
    "pos": "v",
    "meaning": "开始, 着手; 出发, 惊起 n.开始, 惊起,",
    "example": "The movie was entertaining from start to finish.",
    "exampleTranslation": "开始。"
  },
  {
    "word": "starvation",
    "phonetic": "/stɑːˈveɪʃən/",
    "pos": "n",
    "meaning": "饥饿; 饿死",
    "example": "This is a starvation.",
    "exampleTranslation": "这是一个饥饿; 饿死"
  },
  {
    "word": "starve",
    "phonetic": "/stɑːv/",
    "pos": "v",
    "meaning": "饿死",
    "example": "Hey, ma, I'm starving! What's for dinner?",
    "exampleTranslation": "饿死。"
  },
  {
    "word": "state",
    "phonetic": "/steɪt/",
    "pos": "n",
    "meaning": "状态; 情形; 国家, 州",
    "example": "He stated that he was willing to help.",
    "exampleTranslation": "状态; 情形; 国家。"
  },
  {
    "word": "statement",
    "phonetic": "/ˈsteɪtm(ə)nt/",
    "pos": "n",
    "meaning": "声明, 陈述, 综述",
    "example": "a bank statement",
    "exampleTranslation": "声明。"
  },
  {
    "word": "station",
    "phonetic": "/ˈsteɪʃən/",
    "pos": "n",
    "meaning": "站, 所, 车站; 电台",
    "example": "She had ambitions beyond her station.",
    "exampleTranslation": "站。"
  },
  {
    "word": "statistics",
    "phonetic": "/stəˈtɪstɪks/",
    "pos": "n",
    "meaning": "统计学, 统计表",
    "example": "Statistics is the only mathematical field required for many social sciences.",
    "exampleTranslation": "统计学。"
  },
  {
    "word": "statue",
    "phonetic": "/ˈstæt.juː/",
    "pos": "n",
    "meaning": "雕像, 铸像, 塑像",
    "example": "The statue is important.",
    "exampleTranslation": "这个statue很重要。"
  },
  {
    "word": "status",
    "phonetic": "/ˈstæt.əs/",
    "pos": "n",
    "meaning": "身份, 地位, 情形, 状况",
    "example": "Superstition is highly correlated with economic status.",
    "exampleTranslation": "身份。"
  },
  {
    "word": "stay",
    "phonetic": "/steɪ/",
    "pos": "n",
    "meaning": "停留, 逗留 v. 停留, 逗留, 呆，保持",
    "example": "I hope you enjoyed your stay in Hawaii.",
    "exampleTranslation": "停留。"
  },
  {
    "word": "steady",
    "phonetic": "/ˈstɛdi/",
    "pos": "adj",
    "meaning": "稳固的; 平稳的",
    "example": "Hold the ladder steady while I go up.",
    "exampleTranslation": "稳固的; 平稳的。"
  },
  {
    "word": "steak",
    "phonetic": "/steɪk/",
    "pos": "n",
    "meaning": "牛排, 肉排",
    "example": "I need the steak.",
    "exampleTranslation": "我需要这个牛排"
  },
  {
    "word": "steam",
    "phonetic": "/stiːm/",
    "pos": "n",
    "meaning": "汽, 水蒸气",
    "example": "After three weeks in bed he was finally able to sit up under his own steam.",
    "exampleTranslation": "汽。"
  },
  {
    "word": "steel",
    "phonetic": "/stiːl/",
    "pos": "n",
    "meaning": "钢, 钢铁",
    "example": "I need the steel.",
    "exampleTranslation": "我需要这种钢。"
  },
  {
    "word": "steep",
    "phonetic": "/stiːp/",
    "pos": "adj",
    "meaning": "险峻的; 陡峭的",
    "example": "a steep hill or mountain; a steep roof; a steep ascent; a steep barometric gradient",
    "exampleTranslation": "险峻的; 陡峭的。"
  },
  {
    "word": "step",
    "phonetic": "/stɛp/",
    "pos": "n",
    "meaning": "脚步, 台阶, 梯级 v. 走; 跨步",
    "example": "He improved step by step, or by steps.",
    "exampleTranslation": "脚步。"
  },
  {
    "word": "steward",
    "phonetic": "/ˈstjuː.əd/",
    "pos": "n",
    "meaning": "男服务员; 男乘务员",
    "example": "a steward in a Methodist church",
    "exampleTranslation": "男服务员; 男乘务员。"
  },
  {
    "word": "stewardess",
    "phonetic": "/stjuː.əˈdɛs/",
    "pos": "n",
    "meaning": "女乘务员, 空中小姐",
    "example": "The stewardess is important.",
    "exampleTranslation": "这个stewardess很重要。"
  },
  {
    "word": "still",
    "phonetic": "/stɪl/",
    "pos": "adj",
    "meaning": "不动的, 平静的 adv. .还, 仍, 更, 还要, 尽管如此, 依然",
    "example": "the still of the night",
    "exampleTranslation": "不动的。"
  },
  {
    "word": "stocking",
    "phonetic": "/ˈstɒkɪŋ/",
    "pos": "n",
    "meaning": "长统袜",
    "example": "a pair of stockings",
    "exampleTranslation": "长统袜。"
  },
  {
    "word": "stomach",
    "phonetic": "/ˈstʌmək/",
    "pos": "n",
    "meaning": "胃, 胃部",
    "example": "a good stomach for roast beef",
    "exampleTranslation": "胃。"
  },
  {
    "word": "stone",
    "phonetic": "/stɐʉn/",
    "pos": "n",
    "meaning": "石头, 石料",
    "example": "a peach stone",
    "exampleTranslation": "石头。"
  },
  {
    "word": "stop",
    "phonetic": "/stɒp/",
    "pos": "v",
    "meaning": "停, 停止, 阻止 n. 停;（停车）站",
    "example": "They agreed to meet at the bus stop.",
    "exampleTranslation": "停。"
  },
  {
    "word": "storage",
    "phonetic": "/ˈstɔ.ɹɪd͡ʒ/",
    "pos": "n",
    "meaning": "贮藏; 储存",
    "example": "There's a lot of storage space in the loft.",
    "exampleTranslation": "贮藏; 储存。"
  },
  {
    "word": "store",
    "phonetic": "/stɔː/",
    "pos": "n",
    "meaning": "商店, 存储 v. 储藏, 存储",
    "example": "This building used to be a store for old tires.",
    "exampleTranslation": "商店。"
  },
  {
    "word": "storm",
    "phonetic": "/stɔːm/",
    "pos": "n",
    "meaning": "风暴, 暴（风）雨",
    "example": "The proposed reforms have led to a political storm.",
    "exampleTranslation": "风暴。"
  },
  {
    "word": "story",
    "phonetic": "/ˈstɔː.ɹi/",
    "pos": "n",
    "meaning": "故事, 小说",
    "example": "The book tells the story of two roommates.",
    "exampleTranslation": "故事。"
  },
  {
    "word": "stout",
    "phonetic": "/stʌʊt/",
    "pos": "adj",
    "meaning": "矮胖的, 结实的, 顽强的",
    "example": "Stout is darker, stronger and sweeter than porter beer.",
    "exampleTranslation": "矮胖的。"
  },
  {
    "word": "stove",
    "phonetic": "/stəʊv/",
    "pos": "n",
    "meaning": "炉",
    "example": "to stove feathers",
    "exampleTranslation": "炉。"
  },
  {
    "word": "straightforward",
    "phonetic": "/ˌstreɪtˈfɔːrwərd/",
    "pos": "adj",
    "meaning": "正直的, 坦率的, 直接了当的",
    "example": "He seems straightforward.",
    "exampleTranslation": "正直的。"
  },
  {
    "word": "strait",
    "phonetic": "/stɹeɪt/",
    "pos": "n",
    "meaning": "海峡",
    "example": "The Strait of Gibraltar",
    "exampleTranslation": "海峡。"
  },
  {
    "word": "strange",
    "phonetic": "/ˈstɹeɪnd͡ʒ/",
    "pos": "adj",
    "meaning": "奇怪的, 奇特的, 陌生的",
    "example": "He thought it strange that his girlfriend wore shorts in the winter.",
    "exampleTranslation": "奇怪的。"
  },
  {
    "word": "stranger",
    "phonetic": "/ˈstɹeɪndʒə/",
    "pos": "n",
    "meaning": "陌生人, 外人",
    "example": "He thought it strange that his girlfriend wore shorts in the winter.",
    "exampleTranslation": "陌生人。"
  },
  {
    "word": "strawberry",
    "phonetic": "/ˈstɹɔːb(ə)ɹi/",
    "pos": "n",
    "meaning": "草莓",
    "example": "They went to pick strawberries today.",
    "exampleTranslation": "草莓。"
  },
  {
    "word": "stream",
    "phonetic": "/stɹiːm/",
    "pos": "n",
    "meaning": "小河;  溪流",
    "example": "He poured the milk in a thin stream from the jug to the glass.",
    "exampleTranslation": "小河;  溪流。"
  },
  {
    "word": "street",
    "phonetic": "/stɹiːt/",
    "pos": "n",
    "meaning": "街, 街道",
    "example": "Walk down the street until you see a hotel on the right.",
    "exampleTranslation": "街。"
  },
  {
    "word": "strength",
    "phonetic": "/stɹɛŋkθ/",
    "pos": "n",
    "meaning": "力量, 力气",
    "example": "It requires great strength to lift heavy objects.",
    "exampleTranslation": "力量。"
  },
  {
    "word": "strengthen",
    "phonetic": "/ˈstɹɛŋ(k)θən/",
    "pos": "v",
    "meaning": "加强, 增强",
    "example": "strengthen a muscle",
    "exampleTranslation": "加强。"
  },
  {
    "word": "stress",
    "phonetic": "/stɹɛs/",
    "pos": "n",
    "meaning": "压力, 重点, 重音 v. 着重, 强调, 重读",
    "example": "Go easy on him, he's been under a lot of stress lately.",
    "exampleTranslation": "压力。"
  },
  {
    "word": "strict",
    "phonetic": "/stɹɪkt/",
    "pos": "adj",
    "meaning": "严格的, 严密的",
    "example": "strict embrace",
    "exampleTranslation": "严格的。"
  },
  {
    "word": "string",
    "phonetic": "/stɹɪŋ/",
    "pos": "n",
    "meaning": "线, 细绳, 一串, 一行",
    "example": "There were stalls for fourteen horses in the squire's stables.",
    "exampleTranslation": "线。"
  },
  {
    "word": "strong",
    "phonetic": "/stɹɑŋ/",
    "pos": "adj",
    "meaning": "强(壮)的; 坚固的; 强烈的; 坚强的",
    "example": "a big strong man; Jake was tall and strong",
    "exampleTranslation": "强(壮)的; 坚固的; 强烈的; 坚强的。"
  },
  {
    "word": "struggle",
    "phonetic": "/ˈstrʌɡəl/",
    "pos": "v",
    "meaning": "努力, 奋斗, 挣扎 n.竞争, 努力, 奋斗",
    "example": "During the centuries, the people of Ireland struggled constantly to assert their right to govern themselves.",
    "exampleTranslation": "努力。"
  },
  {
    "word": "stubborn",
    "phonetic": "/ˈstʌbən/",
    "pos": "adj",
    "meaning": "顽固的, 固执的, 坚定的, 坚决的, 难应付的, 难处理的",
    "example": "Blood can make a very stubborn stain on fabrics if not washed properly.",
    "exampleTranslation": "顽固的。"
  },
  {
    "word": "student",
    "phonetic": "/ˈstjuː.dənt/",
    "pos": "n",
    "meaning": "学生",
    "example": "He is a student of life.",
    "exampleTranslation": "学生。"
  },
  {
    "word": "studio",
    "phonetic": "/ˈstjuːdiəʊ/",
    "pos": "n",
    "meaning": "工作室, 演播室",
    "example": "His studio was cramped when he began as an artist.",
    "exampleTranslation": "工作室。"
  },
  {
    "word": "study",
    "phonetic": "/ˈstʌdi/",
    "pos": "v",
    "meaning": "学习; 研究 n. 书房, 研究",
    "example": "I need to study my biology notes.",
    "exampleTranslation": "我需要to。"
  },
  {
    "word": "stupid",
    "phonetic": "/ˈstjuːpɪd/",
    "pos": "adj",
    "meaning": "愚蠢的, 笨的",
    "example": "His stupid knows no bounds.",
    "exampleTranslation": "愚蠢的。"
  },
  {
    "word": "style",
    "phonetic": "/staɪl/",
    "pos": "n",
    "meaning": "风格, 时尚, 文体",
    "example": "The style is important.",
    "exampleTranslation": "这个style很重要。"
  },
  {
    "word": "subject",
    "phonetic": "/ˈsʌb.dʒɪkt/",
    "pos": "n",
    "meaning": "题目; 主题; 学科; 主语; 主体",
    "example": "He's subject to sneezing fits.",
    "exampleTranslation": "题目; 主题; 学科; 主语; 主体。"
  },
  {
    "word": "subjective",
    "phonetic": "/səbˈdʒɛktɪv/",
    "pos": "adj",
    "meaning": "主观的, 个人的",
    "example": "He seems subjective.",
    "exampleTranslation": "主观的。"
  },
  {
    "word": "submit",
    "phonetic": "/səbˈmɪt/",
    "pos": "v",
    "meaning": "提交, 递交",
    "example": "They will not submit to the destruction of their rights.",
    "exampleTranslation": "提交。"
  },
  {
    "word": "subscribe",
    "phonetic": "/səbˈskɹaɪb/",
    "pos": "v",
    "meaning": "捐款, 订阅",
    "example": "Would you like to subscribe or subscribe a friend to our new magazine, Lexicography Illustrated?",
    "exampleTranslation": "捐款。"
  },
  {
    "word": "substitute",
    "phonetic": "/ˈsʌbstɪtjut/",
    "pos": "n",
    "meaning": "代用品, 代替者",
    "example": "I had no shallots so I substituted onion.",
    "exampleTranslation": "代用品。"
  },
  {
    "word": "succeed",
    "phonetic": "/səkˈsiːd/",
    "pos": "v",
    "meaning": "成功",
    "example": "Autumn succeeds summer.",
    "exampleTranslation": "成功。"
  },
  {
    "word": "success",
    "phonetic": "/səkˈsɛs/",
    "pos": "n",
    "meaning": "成功",
    "example": "His third attempt to pass the entrance exam was a success.",
    "exampleTranslation": "成功。"
  },
  {
    "word": "successful",
    "phonetic": "/səkˈsɛsfl̩/",
    "pos": "adj",
    "meaning": "成功的, 有成就的",
    "example": "a successful use of medicine;  a successful experiment;  a successful enterprise",
    "exampleTranslation": "成功的。"
  },
  {
    "word": "such",
    "phonetic": "/sʌt͡ʃ/",
    "pos": "adv",
    "meaning": "那么 pron. 这样的人(们)或物 adj.这样的, 那样的",
    "example": "She speaks such.",
    "exampleTranslation": "那么  这样的人们或物 这样的"
  },
  {
    "word": "suck",
    "phonetic": "/sʌk/",
    "pos": "v",
    "meaning": "吸吮",
    "example": "She wants to suck.",
    "exampleTranslation": "吸吮。"
  },
  {
    "word": "sudden",
    "phonetic": "/ˈsʌdən/",
    "pos": "adj",
    "meaning": "突然的",
    "example": "The sudden drop in temperature left everyone cold and confused.",
    "exampleTranslation": "突然的。"
  },
  {
    "word": "suffer",
    "phonetic": "/ˈsʌfə/",
    "pos": "v",
    "meaning": "受苦, 遭受",
    "example": "Is anyone here afraid of suffering hardship?",
    "exampleTranslation": "受苦。"
  },
  {
    "word": "suffering",
    "phonetic": "/ˈsʌfəɹɪŋ/",
    "pos": "n",
    "meaning": "痛苦, 苦难",
    "example": "Is anyone here afraid of suffering hardship?",
    "exampleTranslation": "痛苦。"
  },
  {
    "word": "sugar",
    "phonetic": "/ˈʃʊɡə(ɹ)/",
    "pos": "n",
    "meaning": "糖",
    "example": "He usually has his coffee white with one sugar.",
    "exampleTranslation": "糖。"
  },
  {
    "word": "suggest",
    "phonetic": "/səˈdʒɛst/",
    "pos": "v",
    "meaning": "建议, 提议",
    "example": "Are you suggesting that I killed my wife?",
    "exampleTranslation": "建议。"
  },
  {
    "word": "suggestion",
    "phonetic": "/səˈd͡ʒɛstjən/",
    "pos": "n",
    "meaning": "建议",
    "example": "I have a small suggestion for fixing this: try lifting the left side up a bit.",
    "exampleTranslation": "建议。"
  },
  {
    "word": "suit",
    "phonetic": "/s(j)uːt/",
    "pos": "v",
    "meaning": "适合 n. 一套（衣服）",
    "example": "Nick hired a navy-blue suit for the wedding.",
    "exampleTranslation": "适合  一套（衣服）"
  },
  {
    "word": "suitable",
    "phonetic": "/ˈsuːtəbl/",
    "pos": "adj",
    "meaning": "合适的, 适宜的",
    "example": "That is suitable.",
    "exampleTranslation": "合适的。"
  },
  {
    "word": "suitcase",
    "phonetic": "/ˈsutkeɪs/",
    "pos": "n",
    "meaning": "（旅行用）小提箱, 衣箱",
    "example": "The suitcase is important.",
    "exampleTranslation": "这个suitcase很重要。"
  },
  {
    "word": "suite",
    "phonetic": "/swiːt/",
    "pos": "n",
    "meaning": ".(一批)随员, (一套)家具, 套房, 套, 组",
    "example": "the ambassador's suite",
    "exampleTranslation": ".(一批)随员。"
  },
  {
    "word": "summary",
    "phonetic": "/ˈsʌməɹi/",
    "pos": "n",
    "meaning": "摘要, 概要",
    "example": "A summary review is in the appendix.",
    "exampleTranslation": "摘要。"
  },
  {
    "word": "summer",
    "phonetic": "/ˈsʌmə(ɹ)/",
    "pos": "n",
    "meaning": "夏天, 夏季",
    "example": "the heat of summer",
    "exampleTranslation": "夏天。"
  },
  {
    "word": "sun",
    "phonetic": "/sʌn/",
    "pos": "n",
    "meaning": "太阳, 阳光",
    "example": "Beautiful bodies lying on the beach, sunning their bronzed limbs.",
    "exampleTranslation": "太阳。"
  },
  {
    "word": "sunburnt",
    "phonetic": "/ˈsʌnbɜːrnt/",
    "pos": "adj",
    "meaning": "晒黑的",
    "example": "The van was painted a sunburnt brown.",
    "exampleTranslation": "晒黑的。"
  },
  {
    "word": "sunlight",
    "phonetic": "/ˈsʌnˌlaɪt/",
    "pos": "n",
    "meaning": "日光, 阳光",
    "example": "Sunlight on the skin gives you vitamin D.",
    "exampleTranslation": "日光。"
  },
  {
    "word": "sunny",
    "phonetic": "/ˈsʌni/",
    "pos": "adj",
    "meaning": "晴朗的; 阳光充足的",
    "example": "Whilst it may be sunny today, the weather forecast is predicting rain.",
    "exampleTranslation": "晴朗的; 阳光充足的。"
  },
  {
    "word": "sunshine",
    "phonetic": "/ˈsʌnʃaɪn/",
    "pos": "n",
    "meaning": "阳光",
    "example": "We were warmed by the bright sunshine.",
    "exampleTranslation": "阳光。"
  },
  {
    "word": "super",
    "phonetic": "/ˈs(j)uːpə(ɹ)/",
    "pos": "adj",
    "meaning": "上等的, 特级的, 极好的",
    "example": "The party was super awesome.",
    "exampleTranslation": "上等的。"
  },
  {
    "word": "superb",
    "phonetic": "/sjuːˈpɜːb/",
    "pos": "adj",
    "meaning": "庄重的, 堂堂的, 华丽的, 极好的",
    "example": "This champagne is superb.",
    "exampleTranslation": "庄重的。"
  },
  {
    "word": "superior",
    "phonetic": "/suːˈpɪəɹi.ə(ɹ)/",
    "pos": "adj",
    "meaning": "较高的, 上级的, 上好的, 出众的 n.长者, 高手, 上级",
    "example": "Rebecca had always thought shorts were far superior to pants, as they didn't constantly make her legs itch.",
    "exampleTranslation": "较高的。"
  },
  {
    "word": "supermarket",
    "phonetic": "/ˌsuːpəˈmɑːkɪt/",
    "pos": "n",
    "meaning": "超级市场",
    "example": "I went to the supermarket to buy some food.",
    "exampleTranslation": "超级市场。"
  },
  {
    "word": "supper",
    "phonetic": "/ˈsʌpə/",
    "pos": "n",
    "meaning": "晚餐, 晚饭",
    "example": "a fish supper; a pizza supper",
    "exampleTranslation": "晚餐。"
  },
  {
    "word": "supply",
    "phonetic": "/səˈplaɪ/",
    "pos": "v",
    "meaning": "& n. 供给, 供应",
    "example": "supply and demand",
    "exampleTranslation": "供给"
  },
  {
    "word": "support",
    "phonetic": "/səˈpɔːt/",
    "pos": "v",
    "meaning": "& n. 支持, 赞助",
    "example": "Don't move that beam! It's a support for the whole platform.",
    "exampleTranslation": "支持"
  },
  {
    "word": "suppose",
    "phonetic": "/səˈpəʊz/",
    "pos": "v",
    "meaning": "猜想, 假定, 料想",
    "example": "Suppose that A implies B and B implies C. Then A implies C.",
    "exampleTranslation": "猜想。"
  },
  {
    "word": "supreme",
    "phonetic": "/ˌs(j)uːˈpɹiːm/",
    "pos": "adj",
    "meaning": "极度的, 极大的, 至高的, 最高的",
    "example": "supreme disgust; supreme courage",
    "exampleTranslation": "极度的。"
  },
  {
    "word": "sure",
    "phonetic": "/ʃoː/",
    "pos": "adj",
    "meaning": "确信, 肯定 adv. (口语)的确, 一定, 当然",
    "example": "This investment is a sure thing.   The bailiff had a sure grip on the prisoner's arm.",
    "exampleTranslation": "确信。"
  },
  {
    "word": "surface",
    "phonetic": "/ˈsɜːfɪs/",
    "pos": "n",
    "meaning": "表面",
    "example": "On the surface, the spy looked like a typical businessman.",
    "exampleTranslation": "表面。"
  },
  {
    "word": "surgeon",
    "phonetic": "/ˈsɜːdʒən/",
    "pos": "n",
    "meaning": "外科医生",
    "example": "The surgeon refused to operate because the patient was her son.",
    "exampleTranslation": "外科医生。"
  },
  {
    "word": "surprise",
    "phonetic": "/səˈpɹaɪz/",
    "pos": "v",
    "meaning": "使惊奇, 使诧异 n. 惊奇, 诧异",
    "example": "It was a surprise to find out I owed twice as much as I thought I did.",
    "exampleTranslation": "使惊奇。"
  },
  {
    "word": "surround",
    "phonetic": "/səˈɹaʊnd/",
    "pos": "v",
    "meaning": "围绕; 包围",
    "example": "to surround the world",
    "exampleTranslation": "围绕; 包围。"
  },
  {
    "word": "surrounding",
    "phonetic": "/səˈɹaʊndɪŋ/",
    "pos": "adj",
    "meaning": "周围的",
    "example": "to surround the world",
    "exampleTranslation": "周围的。"
  },
  {
    "word": "survival",
    "phonetic": "/sɚˈvaɪvəl/",
    "pos": "n",
    "meaning": "生存, 幸存",
    "example": "His survival in the open ocean was a miracle; he had fully expected to die.",
    "exampleTranslation": "生存。"
  },
  {
    "word": "survive",
    "phonetic": "/sərˈvaɪv/",
    "pos": "v",
    "meaning": "幸免于, 幸存, 生还",
    "example": "Plants need water to survive.",
    "exampleTranslation": "幸免于。"
  },
  {
    "word": "suspect",
    "phonetic": "/ˈsʌspekt/",
    "pos": "n",
    "meaning": "犯罪嫌疑人",
    "example": "He is the main suspect.",
    "exampleTranslation": "犯罪嫌疑人。"
  },
  {
    "word": "suspension",
    "phonetic": "/səˈspenʃən/",
    "pos": "n",
    "meaning": "暂停, 中止",
    "example": "We agreed to the suspension of the meeting.",
    "exampleTranslation": "暂停。"
  },
  {
    "word": "swallow",
    "phonetic": "/ˈswɑːloʊ/",
    "pos": "v",
    "meaning": "吞下; 咽下",
    "example": "Swallow the pill with water.",
    "exampleTranslation": "吞下; 咽下。"
  },
  {
    "word": "swap",
    "phonetic": "/swɑːp/",
    "pos": "v",
    "meaning": "交换",
    "example": "Let's swap seats.",
    "exampleTranslation": "交换。"
  },
  {
    "word": "swear",
    "phonetic": "/swer/",
    "pos": "v",
    "meaning": "诅咒, 发誓 (swore, sworn)",
    "example": "I swear I am right.",
    "exampleTranslation": "诅咒。"
  },
  {
    "word": "sweat",
    "phonetic": "/swet/",
    "pos": "n",
    "meaning": "汗, 汗水",
    "example": "I wiped the sweat from my face.",
    "exampleTranslation": "汗。"
  },
  {
    "word": "sweater",
    "phonetic": "/ˈswetər/",
    "pos": "n",
    "meaning": "厚运动衫, 毛衣",
    "example": "I wear a warm sweater.",
    "exampleTranslation": "厚运动衫。"
  },
  {
    "word": "sweep",
    "phonetic": "/swiːp/",
    "pos": "v",
    "meaning": "扫, 打扫, 清扫, 掠过 (swept, swept)",
    "example": "Please sweep the floor.",
    "exampleTranslation": "扫。"
  },
  {
    "word": "sweet",
    "phonetic": "/swiːt/",
    "pos": "n, adj",
    "meaning": "甜食; 甜的; 新鲜的; 可爱的",
    "example": "This apple is very sweet.",
    "exampleTranslation": "这个苹果很甜。"
  },
  {
    "word": "swell",
    "phonetic": "/swel/",
    "pos": "v",
    "meaning": "(使)膨胀, 增大 (swelled, swollen)",
    "example": "Her foot began to swell.",
    "exampleTranslation": "(使)膨胀。"
  },
  {
    "word": "swift",
    "phonetic": "/swɪft/",
    "pos": "adj",
    "meaning": "快的, 迅速的",
    "example": "The bird is very swift.",
    "exampleTranslation": "快的。"
  },
  {
    "word": "swim",
    "phonetic": "/swɪm/",
    "pos": "v",
    "meaning": "游泳, 游 (swam, swum)",
    "example": "I can swim very fast.",
    "exampleTranslation": "我游泳很快。"
  },
  {
    "word": "swing",
    "phonetic": "/swɪŋ/",
    "pos": "v, n",
    "meaning": "摇摆, 摆动; 秋千",
    "example": "The monkey can swing from trees.",
    "exampleTranslation": "摇摆。"
  },
  {
    "word": "switch",
    "phonetic": "/swɪtʃ/",
    "pos": "v, n",
    "meaning": "转换, 转变; 开关, 电闸",
    "example": "Where is the light switch?",
    "exampleTranslation": "转换。"
  },
  {
    "word": "sword",
    "phonetic": "/sɔːrd/",
    "pos": "n",
    "meaning": "剑, 刀",
    "example": "The king has a sharp sword.",
    "exampleTranslation": "剑。"
  },
  {
    "word": "symbol",
    "phonetic": "/ˈsɪmbəl/",
    "pos": "n",
    "meaning": "符号, 记号, 象征",
    "example": "The dove is a symbol of peace.",
    "exampleTranslation": "符号。"
  },
  {
    "word": "sympathy",
    "phonetic": "/ˈsɪmpəθi/",
    "pos": "n",
    "meaning": "同情, 同情心",
    "example": "I feel sympathy for her.",
    "exampleTranslation": "同情。"
  },
  {
    "word": "symphony",
    "phonetic": "/ˈsɪmfəni/",
    "pos": "n",
    "meaning": "交响乐, 交响曲",
    "example": "We listened to a symphony.",
    "exampleTranslation": "交响乐。"
  },
  {
    "word": "symptom",
    "phonetic": "/ˈsɪmptəm/",
    "pos": "n",
    "meaning": "症状; 表现; 征兆",
    "example": "Fever is a symptom of the flu.",
    "exampleTranslation": "症状; 表现; 征兆。"
  },
  {
    "word": "system",
    "phonetic": "/ˈsɪstəm/",
    "pos": "n",
    "meaning": "体系; 系统",
    "example": "We need a better system.",
    "exampleTranslation": "体系; 系统。"
  },
  {
    "word": "systematic",
    "phonetic": "/ˌsɪstəˈmætɪk/",
    "pos": "adj",
    "meaning": "系统的, 体系的",
    "example": "We need a systematic plan.",
    "exampleTranslation": "系统的。"
  },
  {
    "word": "t-shirt",
    "phonetic": "/ˈtiː ʃɜːrt/",
    "pos": "n",
    "meaning": "T恤衫",
    "example": "Many bands make more money from T-shirt sales than from sale of tickets.",
    "exampleTranslation": "T恤衫。"
  },
  {
    "word": "table",
    "phonetic": "/ˈteɪbəl/",
    "pos": "n",
    "meaning": "桌子, 表格",
    "example": "Put the book on the table.",
    "exampleTranslation": "桌子。"
  },
  {
    "word": "table tennis",
    "phonetic": "/ˈteɪbəl ˈtenɪs/",
    "pos": "n",
    "meaning": "乒乓球",
    "example": "Let's play table tennis.",
    "exampleTranslation": "乒乓球。"
  },
  {
    "word": "tablet",
    "phonetic": "/ˈtæblət/",
    "pos": "n",
    "meaning": "药片",
    "example": "Many people take vitamin tablets as a food supplement.",
    "exampleTranslation": "药片。"
  },
  {
    "word": "tail",
    "phonetic": "/teɪl/",
    "pos": "n",
    "meaning": "尾巴",
    "example": "Most primates have a tail and fangs.",
    "exampleTranslation": "尾巴。"
  },
  {
    "word": "tailor",
    "phonetic": "/ˈteɪlə/",
    "pos": "n",
    "meaning": "裁缝",
    "example": "He works as a tailor on Swanston Street.",
    "exampleTranslation": "裁缝。"
  },
  {
    "word": "take",
    "phonetic": "/teɪk/",
    "pos": "v",
    "meaning": "拿, 拿走, 取; 服用; 花费 (took, taken)",
    "example": "Take your time.",
    "exampleTranslation": "拿。"
  },
  {
    "word": "tale",
    "phonetic": "/ˈteɪl/",
    "pos": "n",
    "meaning": "故事, 传说",
    "example": "Don't tell tales!",
    "exampleTranslation": "故事。"
  },
  {
    "word": "talent",
    "phonetic": "/ˈtalənt/",
    "pos": "n",
    "meaning": "天才, 才干",
    "example": "He has a real talent for drawing.",
    "exampleTranslation": "天才。"
  },
  {
    "word": "talk",
    "phonetic": "/toːk/",
    "pos": "n",
    "meaning": "& v. 谈话, 讲话, 演讲; 交谈",
    "example": "Although I don't speak Chinese I managed to talk with the villagers using signs and gestures.",
    "exampleTranslation": "谈话"
  },
  {
    "word": "tall",
    "phonetic": "/tɔːl/",
    "pos": "adj",
    "meaning": "高的",
    "example": "Being tall is an advantage in basketball.",
    "exampleTranslation": "高的。"
  },
  {
    "word": "tank",
    "phonetic": "/tæŋk/",
    "pos": "n",
    "meaning": "坦克; 箱、罐",
    "example": "I burned three tanks of gas on the drive to New York.",
    "exampleTranslation": "坦克; 箱、罐。"
  },
  {
    "word": "tap",
    "phonetic": "/tæp/",
    "pos": "n",
    "meaning": "龙头",
    "example": "We don't have bottled water; you'll have to get it from the tap.",
    "exampleTranslation": "龙头。"
  },
  {
    "word": "tape",
    "phonetic": "/teɪ̯p/",
    "pos": "n",
    "meaning": "带子, 磁带",
    "example": "Hand me some tape. I need to fix a tear in this paper.",
    "exampleTranslation": "带子。"
  },
  {
    "word": "target",
    "phonetic": "/tɑːɡɪt/",
    "pos": "n",
    "meaning": "目标, 对象, 靶子",
    "example": "Take careful aim at the target.",
    "exampleTranslation": "目标。"
  },
  {
    "word": "task",
    "phonetic": "/tɑːsk/",
    "pos": "n",
    "meaning": "任务, 工作",
    "example": "The user killed the frozen task.",
    "exampleTranslation": "任务。"
  },
  {
    "word": "taste",
    "phonetic": "/teɪst/",
    "pos": "n",
    "meaning": "品尝; 味道 v.  品尝, 尝味",
    "example": "He had a strange taste in his mouth.",
    "exampleTranslation": "品尝"
  },
  {
    "word": "tasteless",
    "phonetic": "/ˈteɪstləs/",
    "pos": "adj",
    "meaning": "无滋味的",
    "example": "This soup is tasteless.",
    "exampleTranslation": "无滋味的。"
  },
  {
    "word": "tasty",
    "phonetic": "/ˈteɪsti/",
    "pos": "adj",
    "meaning": "味道好的",
    "example": "You could make this tasty meal for breakfast.",
    "exampleTranslation": "味道好的。"
  },
  {
    "word": "tax",
    "phonetic": "/tæks/",
    "pos": "n",
    "meaning": "税, 税款",
    "example": "a heavy tax on time or health",
    "exampleTranslation": "税。"
  },
  {
    "word": "taxi",
    "phonetic": "/ˈtæk.si/",
    "pos": "n",
    "meaning": "出租汽车",
    "example": "taxi down the runway",
    "exampleTranslation": "出租汽车。"
  },
  {
    "word": "taxpayer",
    "phonetic": "/ˈtækspeɪər/",
    "pos": "n",
    "meaning": "纳税人",
    "example": "Taxpayers pay for public services.",
    "exampleTranslation": "纳税人支付公共服务费用。"
  },
  {
    "word": "tea",
    "phonetic": "/tiː/",
    "pos": "n",
    "meaning": "茶; 茶叶",
    "example": "After smoking a bowl of that fine marijuana, they ate some brownies.",
    "exampleTranslation": "茶; 茶叶。"
  },
  {
    "word": "teach",
    "phonetic": "/tiːtʃ/",
    "pos": "v",
    "meaning": "教书, 教 (taught, taught)",
    "example": "She teaches English.",
    "exampleTranslation": "教书。"
  },
  {
    "word": "teacher",
    "phonetic": "/ˈtiːt͡ʃə/",
    "pos": "n",
    "meaning": "教师, 教员",
    "example": "The teacher is important.",
    "exampleTranslation": "这位老师很重要。"
  },
  {
    "word": "team",
    "phonetic": "/tiːm/",
    "pos": "n",
    "meaning": "队, 组",
    "example": "The IT manager leads a team of three software developers.",
    "exampleTranslation": "队。"
  },
  {
    "word": "teamwork",
    "phonetic": "/ˈtiːmwɜːrk/",
    "pos": "n",
    "meaning": "合作, 协同工作",
    "example": "We need good teamwork.",
    "exampleTranslation": "合作。"
  },
  {
    "word": "teapot",
    "phonetic": "/ˈtiːpɑːt/",
    "pos": "n",
    "meaning": "茶壶",
    "example": "The teapot is full of hot tea.",
    "exampleTranslation": "茶壶。"
  },
  {
    "word": "tear",
    "phonetic": "/ter/",
    "pos": "v",
    "meaning": "(tore, torn) 扯破, 撕开 n. 眼泪",
    "example": "A small tear is easy to mend, if it is on the seam.",
    "exampleTranslation": "(tore。"
  },
  {
    "word": "tease",
    "phonetic": "/tiːz/",
    "pos": "v",
    "meaning": "揶揄, 戏弄, 逗惹",
    "example": "We must tease.",
    "exampleTranslation": "揶揄。"
  },
  {
    "word": "technical",
    "phonetic": "/ˈtɛk.nɪk.əl/",
    "pos": "adj",
    "meaning": "技术的, 工艺的",
    "example": "The performance showed technical virtuosity, but lacked inspiration.",
    "exampleTranslation": "技术的。"
  },
  {
    "word": "technique",
    "phonetic": "/tɛkˈniːk/",
    "pos": "n",
    "meaning": "技术; 技巧, 方法",
    "example": "The technique is important.",
    "exampleTranslation": "这个technique很重要。"
  },
  {
    "word": "technology",
    "phonetic": "/tɛkˈnɒlədʒi/",
    "pos": "n",
    "meaning": "技术",
    "example": "This is a technology.",
    "exampleTranslation": "这是一个技术"
  },
  {
    "word": "teenager",
    "phonetic": "/ˈtiːnˌeɪ.dʒə(ɹ)/",
    "pos": "n",
    "meaning": "青少年",
    "example": "This is a teenager.",
    "exampleTranslation": "这是一个青少年"
  },
  {
    "word": "telephone",
    "phonetic": "/ˈtɛləfəʊn/",
    "pos": "v",
    "meaning": "打电话 n. 电话",
    "example": "She wants to telephone.",
    "exampleTranslation": "她想telephone。"
  },
  {
    "word": "telescope",
    "phonetic": "/ˈtɛlɪskəʊp/",
    "pos": "n",
    "meaning": "望远镜",
    "example": "I need the telescope.",
    "exampleTranslation": "我需要这个望远镜"
  },
  {
    "word": "television",
    "phonetic": "/ˈtɛləˌvɪʒən/",
    "pos": "n",
    "meaning": "电视, 电视机",
    "example": "It’s a good thing that television doesn’t transmit smell.",
    "exampleTranslation": "电视。"
  },
  {
    "word": "tell",
    "phonetic": "/tel/",
    "pos": "v",
    "meaning": "告诉; 讲述; 断定 (told, told)",
    "example": "Tell me a story.",
    "exampleTranslation": "告诉; 讲述; 断定 (told。"
  },
  {
    "word": "temperature",
    "phonetic": "/ˈtɛmp(ə)ɹətʃə(ɹ)/",
    "pos": "n",
    "meaning": "温度",
    "example": "The temperature in the room dropped nearly 20 degrees; it went from hot to cold.",
    "exampleTranslation": "温度。"
  },
  {
    "word": "temple",
    "phonetic": "/ˈtɛmp(ə)l/",
    "pos": "n",
    "meaning": "庙宇, 寺院",
    "example": "a temple of commerce, a temple of drinking and dining",
    "exampleTranslation": "庙宇。"
  },
  {
    "word": "temporary",
    "phonetic": "/ˈtɛmpəɹi/",
    "pos": "adj",
    "meaning": "暂时的, 临时的, 临时性",
    "example": "This is temporary.",
    "exampleTranslation": "暂时的。"
  },
  {
    "word": "tend",
    "phonetic": "/tɛnd/",
    "pos": "v",
    "meaning": "趋向, 往往是; 照管, 护理",
    "example": "It tends to snow here in winter.",
    "exampleTranslation": "趋向。"
  },
  {
    "word": "tendency",
    "phonetic": "/ˈtɛndənsi/",
    "pos": "n",
    "meaning": "趋向, 倾向",
    "example": "Denim has a tendency to fade.",
    "exampleTranslation": "趋向。"
  },
  {
    "word": "tennis",
    "phonetic": "/ˈtɛn.ɪs/",
    "pos": "n",
    "meaning": "网球",
    "example": "This is a tennis.",
    "exampleTranslation": "这是一个网球"
  },
  {
    "word": "tense",
    "phonetic": "/tɛns/",
    "pos": "adj",
    "meaning": "紧张的",
    "example": "English only has a present tense and a past tense; it has no future tense.",
    "exampleTranslation": "紧张的。"
  },
  {
    "word": "tension",
    "phonetic": "/ˈtɛnʃən/",
    "pos": "n",
    "meaning": "紧张, 压力",
    "example": "We tensioned the cable until it snapped.",
    "exampleTranslation": "紧张。"
  },
  {
    "word": "tent",
    "phonetic": "/tɛnt/",
    "pos": "n",
    "meaning": "帐篷",
    "example": "We were camping in a three-man tent.",
    "exampleTranslation": "帐篷。"
  },
  {
    "word": "tentative",
    "phonetic": "/ˈtɛntətɪv/",
    "pos": "adj",
    "meaning": "试验性的, 试探的, 尝试的, 暂定的",
    "example": "He seems tentative.",
    "exampleTranslation": "试验性的。"
  },
  {
    "word": "terminal",
    "phonetic": "/ˈtɚmɪnəl/",
    "pos": "adj",
    "meaning": "终点站; 终端",
    "example": "terminal cancer",
    "exampleTranslation": "终点站; 终端。"
  },
  {
    "word": "terrible",
    "phonetic": "/ˈterəbəl/",
    "pos": "adj",
    "meaning": "可怕的; 糟糕的",
    "example": "The weather is terrible.",
    "exampleTranslation": "天气很糟糕。"
  },
  {
    "word": "terrify",
    "phonetic": "/ˈterɪfaɪ/",
    "pos": "v",
    "meaning": "使人感到恐怖",
    "example": "Spiders terrify me.",
    "exampleTranslation": "使人感到恐怖。"
  },
  {
    "word": "terror",
    "phonetic": "/ˈterər/",
    "pos": "n",
    "meaning": "恐怖; 骇惧",
    "example": "She screamed in terror.",
    "exampleTranslation": "恐怖; 骇惧。"
  },
  {
    "word": "test",
    "phonetic": "/test/",
    "pos": "v, n",
    "meaning": "测试, 考查, 试验",
    "example": "I have a math test today.",
    "exampleTranslation": "我今天有数学考试。"
  },
  {
    "word": "text",
    "phonetic": "/tekst/",
    "pos": "n",
    "meaning": "文本, 课文",
    "example": "Read the text carefully.",
    "exampleTranslation": "仔细阅读文本。"
  },
  {
    "word": "textbook",
    "phonetic": "/ˈtekstbʊk/",
    "pos": "n",
    "meaning": "课本, 教科书",
    "example": "Open your English textbook.",
    "exampleTranslation": "打开你的英语课本。"
  },
  {
    "word": "than",
    "phonetic": "/ðæn/",
    "pos": "conj",
    "meaning": "比",
    "example": "You are taller than me.",
    "exampleTranslation": "比。"
  },
  {
    "word": "thank",
    "phonetic": "/θæŋk/",
    "pos": "v, n",
    "meaning": "感谢, 致谢; 谢意",
    "example": "Thank you for your help.",
    "exampleTranslation": "谢谢你的帮助。"
  },
  {
    "word": "thankful",
    "phonetic": "/ˈθæŋkfəl/",
    "pos": "adj",
    "meaning": "感谢的, 感激的",
    "example": "I am thankful for my family.",
    "exampleTranslation": "感谢的。"
  },
  {
    "word": "that",
    "phonetic": "/ðæt/",
    "pos": "adj, pron, conj",
    "meaning": "那, 那个; 引导从句",
    "example": "That is my car.",
    "exampleTranslation": "那是我的车。"
  },
  {
    "word": "theatre",
    "phonetic": "/ˈθiːətər/",
    "pos": "n",
    "meaning": "剧场, 戏院",
    "example": "We went to the theatre.",
    "exampleTranslation": "我们去了剧院。"
  },
  {
    "word": "theft",
    "phonetic": "/θeft/",
    "pos": "n",
    "meaning": "偷, 行窃, 偷窃行为",
    "example": "Car theft is a crime.",
    "exampleTranslation": "偷车是犯罪。"
  },
  {
    "word": "their",
    "phonetic": "/ðer/",
    "pos": "pron",
    "meaning": "他(或她、它)们的",
    "example": "They love their dog.",
    "exampleTranslation": "他们爱他们的狗。"
  },
  {
    "word": "theirs",
    "phonetic": "/ðerz/",
    "pos": "pron",
    "meaning": "他（或她、它）们的",
    "example": "This house is theirs.",
    "exampleTranslation": "这所房子是他们的。"
  },
  {
    "word": "them",
    "phonetic": "/ðem/",
    "pos": "pron",
    "meaning": "他/她/它们",
    "example": "Give the book to them.",
    "exampleTranslation": "把书给他们。"
  },
  {
    "word": "theme",
    "phonetic": "/θiːm/",
    "pos": "n",
    "meaning": "主题",
    "example": "The theme of the party is blue.",
    "exampleTranslation": "聚会的主题是蓝色。"
  },
  {
    "word": "themselves",
    "phonetic": "/ðəmˈselvz/",
    "pos": "pron",
    "meaning": "他/她/它们自己",
    "example": "They did it themselves.",
    "exampleTranslation": "他们自己做的。"
  },
  {
    "word": "then",
    "phonetic": "/ðen/",
    "pos": "adv",
    "meaning": "当时, 在那时, 那么, 然后",
    "example": "We will eat and then go.",
    "exampleTranslation": "我们会先吃饭然后走。"
  },
  {
    "word": "theoretical",
    "phonetic": "/ˌθiːəˈretɪkəl/",
    "pos": "adj",
    "meaning": "理论的",
    "example": "This is a theoretical model.",
    "exampleTranslation": "这是一个理论模型。"
  },
  {
    "word": "theory",
    "phonetic": "/ˈθiːəri/",
    "pos": "n",
    "meaning": "理论",
    "example": "He has a new theory.",
    "exampleTranslation": "他有一个新理论。"
  },
  {
    "word": "there",
    "phonetic": "/ðer/",
    "pos": "int, n, adv",
    "meaning": "那里, 那儿; 在那里",
    "example": "Look over there!",
    "exampleTranslation": "看那边！"
  },
  {
    "word": "therefore",
    "phonetic": "/ˈðerfɔːr/",
    "pos": "adv",
    "meaning": "因此, 所以",
    "example": "I am tired, therefore I will sleep.",
    "exampleTranslation": "我累了，所以我要睡觉。"
  },
  {
    "word": "thermos",
    "phonetic": "/ˈθɜːrməs/",
    "pos": "n",
    "meaning": "热水瓶",
    "example": "Keep the water in the thermos.",
    "exampleTranslation": "把水保存在保温瓶里。"
  },
  {
    "word": "these",
    "phonetic": "/ðiːz/",
    "pos": "adj, pron",
    "meaning": "这些",
    "example": "These are my shoes.",
    "exampleTranslation": "这些是我的鞋子。"
  },
  {
    "word": "they",
    "phonetic": "/ðeɪ/",
    "pos": "pron",
    "meaning": "他（她）们; 它们",
    "example": "They are my friends.",
    "exampleTranslation": "他们是我的朋友。"
  },
  {
    "word": "thick",
    "phonetic": "/θɪk/",
    "pos": "adj",
    "meaning": "厚的",
    "example": "It was mayhem in the thick of battle.",
    "exampleTranslation": "厚的。"
  },
  {
    "word": "thief",
    "phonetic": "/θiːf/",
    "pos": "n",
    "meaning": "窃贼, 小偷 (pl. thieves)",
    "example": "The police caught the thief.",
    "exampleTranslation": "警察抓住了小偷。"
  },
  {
    "word": "thin",
    "phonetic": "/ˈθɪn/",
    "pos": "adj",
    "meaning": "薄的; 瘦的; 稀的",
    "example": "chocolate mint thins",
    "exampleTranslation": "薄的; 瘦的; 稀的。"
  },
  {
    "word": "thing",
    "phonetic": "/θɪŋ/",
    "pos": "n",
    "meaning": "东西; 物品; 事情",
    "example": "What is that thing?",
    "exampleTranslation": "那是什么东西？"
  },
  {
    "word": "think",
    "phonetic": "/θɪŋk/",
    "pos": "v",
    "meaning": "想; 认为; 考虑 (thought, thought)",
    "example": "I think you are right.",
    "exampleTranslation": "我认为你是对的。"
  },
  {
    "word": "thinking",
    "phonetic": "/ˈθɪŋkɪŋ/",
    "pos": "n",
    "meaning": "思索; 见解; 想法",
    "example": "I need to do some thinking.",
    "exampleTranslation": "我需要思考一下。"
  },
  {
    "word": "thirst",
    "phonetic": "/θɜːst/",
    "pos": "n",
    "meaning": "渴; 口渴; 渴望, 热望",
    "example": "a thirst for gold",
    "exampleTranslation": "渴; 口渴; 渴望。"
  },
  {
    "word": "this",
    "phonetic": "/ðəs/",
    "pos": "adj",
    "meaning": "& pron. 这, 这个",
    "example": "Do we need this many recommendations?",
    "exampleTranslation": "我们需要这么多建议吗？"
  },
  {
    "word": "thorough",
    "phonetic": "/ˈθʌɹə/",
    "pos": "adj",
    "meaning": "彻底的",
    "example": "He is the most thorough worker I have ever seen.",
    "exampleTranslation": "他是我见过的最认真的工人。"
  },
  {
    "word": "those",
    "phonetic": "/ðəʊz/",
    "pos": "adj",
    "meaning": "& pron. 那些",
    "example": "He went home, and after that I never saw him again.",
    "exampleTranslation": "他回家了，之后我再也没见过他。"
  },
  {
    "word": "though",
    "phonetic": "/ðəʊ/",
    "pos": "conj",
    "meaning": "虽然, 可是",
    "example": "I will do it, though.",
    "exampleTranslation": "我会做的，虽然。"
  },
  {
    "word": "thought",
    "phonetic": "/θɔːt/",
    "pos": "n",
    "meaning": "思考, 思想; 念头",
    "example": "Idly, the detective thought what his next move should be.",
    "exampleTranslation": "侦探漫不经心地想着下一步该怎么做。"
  },
  {
    "word": "thread",
    "phonetic": "/θɾ̪̊ɛd/",
    "pos": "n",
    "meaning": "线",
    "example": "All of these essays have a common thread.",
    "exampleTranslation": "所有这些文章都有一个共同的主线。"
  },
  {
    "word": "thrill",
    "phonetic": "/t̪ɾ̪̊ɪl/",
    "pos": "n",
    "meaning": "兴奋；激动 v. 使激动；使胆战心惊",
    "example": "This is a thrill.",
    "exampleTranslation": "这是一种刺激。"
  },
  {
    "word": "thriller",
    "phonetic": "/ˈθɹɪlɚ/",
    "pos": "n",
    "meaning": "使人毛骨悚然的东西",
    "example": "The thriller is important.",
    "exampleTranslation": "这部惊悚片很重要。"
  },
  {
    "word": "throat",
    "phonetic": "/ˈθɹəʊt/",
    "pos": "n",
    "meaning": "喉咙",
    "example": "The wild pitch bounced and hit the catcher in the throat.",
    "exampleTranslation": "那记暴投弹起来，打到了捕手的喉咙。"
  },
  {
    "word": "through",
    "phonetic": "/θɹuː/",
    "pos": "prep",
    "meaning": "穿（通）过; 从始至终 adv. 穿（通）过; 自始至终, 全部",
    "example": "Interstate highways form a nationwide system of through roads.",
    "exampleTranslation": "州际公路形成了全国性的直达道路系统。"
  },
  {
    "word": "throughout",
    "phonetic": "/θɹuˈʌʊt/",
    "pos": "prep",
    "meaning": "遍及, 贯穿",
    "example": "It is throughout the table.",
    "exampleTranslation": "它遍布整个桌子。"
  },
  {
    "word": "throw",
    "phonetic": "/θroʊ/",
    "pos": "v",
    "meaning": "投, 掷, 扔 (threw, thrown)",
    "example": "Throw the ball to me.",
    "exampleTranslation": "把球扔给我。"
  },
  {
    "word": "thunder",
    "phonetic": "/ˈθʌndə/",
    "pos": "n",
    "meaning": "& v. 打雷, 雷鸣",
    "example": "Thunder is preceded by lightning.",
    "exampleTranslation": "雷声在闪电之后。"
  },
  {
    "word": "thunderstorm",
    "phonetic": "/ˈθʌn.də(ɹ)ˌstɔː(ɹ)m/",
    "pos": "n",
    "meaning": "雷雨；雷暴雨",
    "example": "I need the thunderstorm.",
    "exampleTranslation": "我需要这场雷暴。"
  },
  {
    "word": "thus",
    "phonetic": "/ˈðʌs/",
    "pos": "adv",
    "meaning": "这样; 因而",
    "example": "If you throw the ball thus, as I’m showing you, you’ll have better luck hitting the target.",
    "exampleTranslation": "这样; 因而。"
  },
  {
    "word": "tick",
    "phonetic": "/tɪk/",
    "pos": "v",
    "meaning": "作记号",
    "example": "She wants to tick.",
    "exampleTranslation": "她想打勾。"
  },
  {
    "word": "ticket",
    "phonetic": "/ˈtɪkɪt/",
    "pos": "n",
    "meaning": "票; 入场券",
    "example": "Joe has joined the party's ticket for the county elections.",
    "exampleTranslation": "乔已经加入了县选举的政党候选人名单。"
  },
  {
    "word": "tidy",
    "phonetic": "/ˈtaɪdi/",
    "pos": "adj",
    "meaning": "整洁的, 干净的 v. 弄整洁, 弄干净",
    "example": "a desk tidy",
    "exampleTranslation": "一个桌面整理盒"
  },
  {
    "word": "tie",
    "phonetic": "/taɪ/",
    "pos": "v",
    "meaning": "（用绳, 线）系, 拴, 扎 n. 领带, 绳子, 结; 关系",
    "example": "It's two outs in the bottom of the ninth, tie score.",
    "exampleTranslation": "九局下半两人出局，比分平。"
  },
  {
    "word": "tiger",
    "phonetic": "/ˈtaɪɡə/",
    "pos": "n",
    "meaning": "老虎",
    "example": "three cheers and a tiger",
    "exampleTranslation": "三声欢呼加一声虎啸"
  },
  {
    "word": "tight",
    "phonetic": "/taɪt/",
    "pos": "adj",
    "meaning": "紧的",
    "example": "These shoes are too tight.",
    "exampleTranslation": "这双鞋太紧了。"
  },
  {
    "word": "till",
    "phonetic": "/tɪl/",
    "pos": "conj",
    "meaning": "& prep. 直到, 直到…为止",
    "example": "I have to work till eight o'clock tonight.",
    "exampleTranslation": "我今晚必须工作到八点。"
  },
  {
    "word": "time",
    "phonetic": "/tɑem/",
    "pos": "n",
    "meaning": "时间; 时期; 次, 回 v. 测定…的时间, 记录…的时间",
    "example": "Time stops for nobody.   the ebb and flow of time",
    "exampleTranslation": "时间; 时期; 次。"
  },
  {
    "word": "timetable",
    "phonetic": "/ˈtaɪmˌteɪbəl/",
    "pos": "n",
    "meaning": "时间表; 课表",
    "example": "The timetable has been changed several times since it was first announced.",
    "exampleTranslation": "时间表自首次公布以来已更改多次。"
  },
  {
    "word": "tin",
    "phonetic": "/tɪn/",
    "pos": "n",
    "meaning": "罐头, 听头",
    "example": "muffin tin",
    "exampleTranslation": "松饼烤盘"
  },
  {
    "word": "tiny",
    "phonetic": "/ˈtaɪni/",
    "pos": "adj",
    "meaning": "极小的, 微小的",
    "example": "He seems tiny.",
    "exampleTranslation": "他看起来很小。"
  },
  {
    "word": "tip",
    "phonetic": "/tɪp/",
    "pos": "n",
    "meaning": "顶端, 尖端; 告诫; 提示 v. (给)小费",
    "example": "The shape of the nozzle prevents the use of aftermarket eartips.",
    "exampleTranslation": "喷嘴的形状阻止了使用售后耳塞。"
  },
  {
    "word": "tire",
    "phonetic": "/ˈtʌɪ̯ɚ/",
    "pos": "v",
    "meaning": "使疲劳",
    "example": "I tire of this book.",
    "exampleTranslation": "我厌倦了这本书。"
  },
  {
    "word": "tired",
    "phonetic": "/taɪəd/",
    "pos": "adj",
    "meaning": "疲劳的, 累的",
    "example": "I tire of this book.",
    "exampleTranslation": "我厌倦了这本书。"
  },
  {
    "word": "tiresome",
    "phonetic": "/ˈtaɪəsəm/",
    "pos": "adj",
    "meaning": "令人厌倦的",
    "example": "Eventually his long stories became tiresome.",
    "exampleTranslation": "最终他的长篇大论变得令人厌烦。"
  },
  {
    "word": "tissue",
    "phonetic": "/ˈtɪsjuː/",
    "pos": "n",
    "meaning": "组织；薄的纱织品, 薄纸",
    "example": "a tissue of forgeries, or of lies",
    "exampleTranslation": "一连串的伪造或谎言"
  },
  {
    "word": "title",
    "phonetic": "/ˈtaɪtl̩/",
    "pos": "n",
    "meaning": "标题, 题目",
    "example": "a good title to an estate, or an imperfect title",
    "exampleTranslation": "一个完善的财产所有权，或不完善的产权"
  },
  {
    "word": "to",
    "phonetic": "/tʉː/",
    "pos": "prep",
    "meaning": "向, 往, 给...,于...,直到...为止, 在...之前, 比, 对, 到, 达",
    "example": "Please push the door to.",
    "exampleTranslation": "请把门推上。"
  },
  {
    "word": "toast",
    "phonetic": "/təʊst/",
    "pos": "v",
    "meaning": "烤, 烘, 敬酒 n. .烤面包(片), 吐司面包,干杯",
    "example": "I ate a piece of toast for breakfast.",
    "exampleTranslation": "我早餐吃了一片吐司。"
  },
  {
    "word": "tobacco",
    "phonetic": "/təˈbækoʊ/",
    "pos": "n",
    "meaning": "烟草, 烟叶",
    "example": "Tobaccos from the Connecticut Valley were used for wrapping cigars.",
    "exampleTranslation": "康涅狄格河谷的烟草被用来包裹雪茄。"
  },
  {
    "word": "today",
    "phonetic": "/təˈdeɪ/",
    "pos": "adv",
    "meaning": "& n. 今天; 现在, 当前",
    "example": "Today is the day we'll fix this once and for all.",
    "exampleTranslation": "今天是我们一劳永逸地解决这个问题的一天。"
  },
  {
    "word": "together",
    "phonetic": "/təˈɡɛð.ə(ɹ)/",
    "pos": "adv",
    "meaning": "一起, 共同",
    "example": "He's really together.",
    "exampleTranslation": "他真的很镇定。"
  },
  {
    "word": "toilet",
    "phonetic": "/ˈtɔɪ.lət/",
    "pos": "n",
    "meaning": "厕所",
    "example": "Sorry, I was in the toilet.",
    "exampleTranslation": "抱歉，我在厕所。"
  },
  {
    "word": "tolerate",
    "phonetic": "/ˈtɒl.ə.ɹeɪt/",
    "pos": "v",
    "meaning": "忍受, 容忍",
    "example": "I can tolerate working on Saturdays, but not on Sundays.",
    "exampleTranslation": "我可以忍受周六工作，但不能周日工作。"
  },
  {
    "word": "tomato",
    "phonetic": "/tʰə̥ˈmɐːtʰɐʉ/",
    "pos": "n",
    "meaning": "西红柿",
    "example": "Lookit the legs on that hot tomato!",
    "exampleTranslation": "看那个辣妹的腿！"
  },
  {
    "word": "tomb",
    "phonetic": "/tuːm/",
    "pos": "n",
    "meaning": "坟墓",
    "example": "This is a tomb.",
    "exampleTranslation": "这是一座坟墓。"
  },
  {
    "word": "tomorrow",
    "phonetic": "/təˈmɔɹoʊ/",
    "pos": "adv",
    "meaning": "明天，在明天; 不久；将来 n.明天, 未来",
    "example": "If you don't get your life on track today, you're going to be very sorry tomorrow.",
    "exampleTranslation": "如果你今天不把生活引上正轨，明天你会非常后悔。"
  },
  {
    "word": "ton",
    "phonetic": "/tʌn/",
    "pos": "n",
    "meaning": "吨",
    "example": "I've got tons of work to do.",
    "exampleTranslation": "我有大量的工作要做。"
  },
  {
    "word": "tongue",
    "phonetic": "/tʌŋ/",
    "pos": "n",
    "meaning": "舌, 舌头",
    "example": "cold tongue with mustard",
    "exampleTranslation": "冷牛舌配芥末"
  },
  {
    "word": "tonight",
    "phonetic": "/təˈnaɪt/",
    "pos": "adv",
    "meaning": "& n. 今晚, 今夜",
    "example": "I have high hopes for tonight.",
    "exampleTranslation": "我对今晚寄予厚望。"
  },
  {
    "word": "too",
    "phonetic": "/tuː/",
    "pos": "adv",
    "meaning": "也, 还; 又; 太过分; 很, 非常",
    "example": "There has been a cutback in federal subsidies. Too, rates have been increasing.",
    "exampleTranslation": "联邦补贴已经削减。而且，利率一直在上升。"
  },
  {
    "word": "tool",
    "phonetic": "/tuːl/",
    "pos": "n",
    "meaning": "工具, 器具",
    "example": "Hand me that tool, would you?   I don't have the right tools to start fiddling around with the engine.",
    "exampleTranslation": "工具。"
  },
  {
    "word": "tooth",
    "phonetic": "/tuːθ/",
    "pos": "n",
    "meaning": "牙齿 (pl. teeth)",
    "example": "My tooth hurts.",
    "exampleTranslation": "我的牙疼。"
  },
  {
    "word": "toothache",
    "phonetic": "/ˈtuθˌeɪk/",
    "pos": "n",
    "meaning": "牙痛",
    "example": "The toothache is important.",
    "exampleTranslation": "这次牙痛很重要。"
  },
  {
    "word": "toothbrush",
    "phonetic": "/ˈtuːθbɹʌʃ/",
    "pos": "n",
    "meaning": "牙刷",
    "example": "This is a toothbrush.",
    "exampleTranslation": "这是一把牙刷。"
  },
  {
    "word": "toothpaste",
    "phonetic": "/ˈtuːθpeɪst/",
    "pos": "n",
    "meaning": "牙膏",
    "example": "This is a toothpaste.",
    "exampleTranslation": "这是一管牙膏。"
  },
  {
    "word": "top",
    "phonetic": "/tɒp/",
    "pos": "n",
    "meaning": "顶部; 上面",
    "example": "His kite got caught at the top of the tree.",
    "exampleTranslation": "他的风筝卡在树顶上了。"
  },
  {
    "word": "topic",
    "phonetic": "/ˈtɒpɪk/",
    "pos": "n",
    "meaning": "题目, 话题",
    "example": "A society where a topic cannot be discussed, does not have free speech.",
    "exampleTranslation": "一个不能讨论话题的社会没有言论自由。"
  },
  {
    "word": "tortoise",
    "phonetic": "/ˈtɔː.təs/",
    "pos": "n",
    "meaning": "乌龟",
    "example": "The tortoise is important.",
    "exampleTranslation": "这只乌龟很重要。"
  },
  {
    "word": "total",
    "phonetic": "/ˈtəʊ.təl/",
    "pos": "adj",
    "meaning": "总数的; 完全的 n. 合计, 总计 v. 合计为, 总数达",
    "example": "A total of £145 was raised by the bring-and-buy stall.",
    "exampleTranslation": "义卖摊位总共筹集了145英镑。"
  },
  {
    "word": "touch",
    "phonetic": "/tʌtʃ/",
    "pos": "v",
    "meaning": "触摸, 接触",
    "example": "Do not touch the hot stove.",
    "exampleTranslation": "不要碰热炉子。"
  },
  {
    "word": "tough",
    "phonetic": "/tʌf/",
    "pos": "adj",
    "meaning": "坚硬的; 结实的; 棘手的, 难解的",
    "example": "They were doing fine until they encountered a bunch of toughs from the opposition.",
    "exampleTranslation": "他们一直做得很好，直到遇到了反对派的一群硬汉。"
  },
  {
    "word": "tour",
    "phonetic": "/tɔː(ɹ)/",
    "pos": "n",
    "meaning": "参观, 观光, 旅行",
    "example": "On our last holiday to Spain we took a tour of the wine-growing regions.",
    "exampleTranslation": "在我们上次去西班牙的假期中，我们参观了葡萄酒产区。"
  },
  {
    "word": "tourism",
    "phonetic": "/tɔːɹɪz(ə)m/",
    "pos": "n",
    "meaning": "旅游业; 观光",
    "example": "libel tourism; suicide tourism; sex tourism",
    "exampleTranslation": "诽谤旅游；自杀旅游；性旅游"
  },
  {
    "word": "tourist",
    "phonetic": "/ˈtʊəɹɪst/",
    "pos": "n",
    "meaning": "旅行者, 观光者",
    "example": "I need the tourist.",
    "exampleTranslation": "我需要这位游客。"
  },
  {
    "word": "tournament",
    "phonetic": "/ˈtɔːnəmənt/",
    "pos": "n",
    "meaning": "比赛, 锦标赛, 联赛",
    "example": "This is a tournament.",
    "exampleTranslation": "这是一场比赛。"
  },
  {
    "word": "toward(s)",
    "phonetic": "/təˈwɔːrd(z)/",
    "pos": "prep",
    "meaning": "向, 朝, 对于",
    "example": "He walked towards the house.",
    "exampleTranslation": "他朝房子走去。"
  },
  {
    "word": "towel",
    "phonetic": "/taʊl/",
    "pos": "n",
    "meaning": "毛巾",
    "example": "He got out of the shower and toweled himself dry.",
    "exampleTranslation": "他走出淋浴间，用毛巾擦干身体。"
  },
  {
    "word": "tower",
    "phonetic": "/ˈtaʊ.ə(ɹ)/",
    "pos": "n",
    "meaning": "塔",
    "example": "This is a tower.",
    "exampleTranslation": "这是一座塔。"
  },
  {
    "word": "town",
    "phonetic": "/taʊn/",
    "pos": "n",
    "meaning": "城镇, 城",
    "example": "This town is really dangerous because these youngsters have Beretta handguns.",
    "exampleTranslation": "这个城镇真的很危险，因为这些年轻人有贝雷塔手枪。"
  },
  {
    "word": "toy",
    "phonetic": "/tɔɪ/",
    "pos": "n",
    "meaning": "玩具, 玩物",
    "example": "A grown man does not play with a child’s toy.",
    "exampleTranslation": "玩具。"
  },
  {
    "word": "track",
    "phonetic": "/tɹæk/",
    "pos": "n",
    "meaning": "轨道; 田径",
    "example": "Can you see any tracks in the snow?",
    "exampleTranslation": "你能在雪地上看到任何痕迹吗？"
  },
  {
    "word": "tractor",
    "phonetic": "/ˈtɹæktə/",
    "pos": "n",
    "meaning": "拖拉机",
    "example": "The tractor is important.",
    "exampleTranslation": "这台拖拉机很重要。"
  },
  {
    "word": "trade",
    "phonetic": "/tɹeɪd/",
    "pos": "n",
    "meaning": "贸易 v. 交易; 用…进行交换",
    "example": "I did no trades with them once the rumors started.",
    "exampleTranslation": "谣言开始后，我没有和他们做任何交易。"
  },
  {
    "word": "tradition",
    "phonetic": "/trəˈdɪʃən/",
    "pos": "n",
    "meaning": "传统, 惯例",
    "example": "We follow the local tradition.",
    "exampleTranslation": "我们遵循当地的习俗。"
  },
  {
    "word": "traditional",
    "phonetic": "/trəˈdɪʃənəl/",
    "pos": "adj",
    "meaning": "传统的, 惯例的",
    "example": "We ate traditional food.",
    "exampleTranslation": "我们吃了传统食物。"
  },
  {
    "word": "traffic",
    "phonetic": "/ˈtræfɪk/",
    "pos": "n",
    "meaning": "交通, 来往车辆",
    "example": "The traffic is heavy today.",
    "exampleTranslation": "今天交通很拥堵。"
  },
  {
    "word": "train",
    "phonetic": "/treɪn/",
    "pos": "n, v",
    "meaning": "火车; 培训,训练",
    "example": "We will go by train.",
    "exampleTranslation": "我们将乘火车去。"
  },
  {
    "word": "training",
    "phonetic": "/ˈtreɪnɪŋ/",
    "pos": "n",
    "meaning": "培训",
    "example": "I need more training.",
    "exampleTranslation": "我需要更多的培训。"
  },
  {
    "word": "tram",
    "phonetic": "/træm/",
    "pos": "n",
    "meaning": "有轨电车",
    "example": "The tram is very slow.",
    "exampleTranslation": "电车很慢。"
  },
  {
    "word": "transform",
    "phonetic": "/trænsˈfɔːrm/",
    "pos": "v",
    "meaning": "转换, 改变, 使...变形",
    "example": "A caterpillar transforms into a butterfly.",
    "exampleTranslation": "毛毛虫变成蝴蝶。"
  },
  {
    "word": "translate",
    "phonetic": "/trænsˈleɪt/",
    "pos": "v",
    "meaning": "翻译",
    "example": "Can you translate this word?",
    "exampleTranslation": "你能翻译这个词吗？"
  },
  {
    "word": "translation",
    "phonetic": "/trænsˈleɪʃən/",
    "pos": "n",
    "meaning": "翻译; 译文",
    "example": "The translation is good.",
    "exampleTranslation": "这个翻译很好。"
  },
  {
    "word": "translator",
    "phonetic": "/ˈtrænsleɪtər/",
    "pos": "n",
    "meaning": "翻译家, 译者",
    "example": "She works as a translator.",
    "exampleTranslation": "她是一名翻译。"
  },
  {
    "word": "transparent",
    "phonetic": "/trænsˈpærənt/",
    "pos": "adj",
    "meaning": "透明的; 透光的",
    "example": "The glass is transparent.",
    "exampleTranslation": "玻璃是透明的。"
  },
  {
    "word": "transport",
    "phonetic": "/ˈtrænspɔːrt/",
    "pos": "n, v",
    "meaning": "传送器, 运输; 传送",
    "example": "The bus is public transport.",
    "exampleTranslation": "公共汽车是公共交通。"
  },
  {
    "word": "trap",
    "phonetic": "/træp/",
    "pos": "n, v",
    "meaning": "陷阱; 使陷入困境",
    "example": "They set a trap for the mouse.",
    "exampleTranslation": "他们为老鼠设了一个陷阱。"
  },
  {
    "word": "travel",
    "phonetic": "/ˈtrævəl/",
    "pos": "n, v",
    "meaning": "旅行; 行进, 传播",
    "example": "I love to travel by plane.",
    "exampleTranslation": "我喜欢乘飞机旅行。"
  },
  {
    "word": "traveler",
    "phonetic": "/ˈtrævələr/",
    "pos": "n",
    "meaning": "旅行者",
    "example": "He is a tired traveler.",
    "exampleTranslation": "他是一位疲惫的旅行者。"
  },
  {
    "word": "treasure",
    "phonetic": "/ˈtɹɛʒə/",
    "pos": "n",
    "meaning": "金银财宝; 财富",
    "example": "Oh, this ring is beautiful! I’ll treasure it forever.",
    "exampleTranslation": "金银财宝; 财富。"
  },
  {
    "word": "treat",
    "phonetic": "/tɹiːt/",
    "pos": "v",
    "meaning": "对待, 看待",
    "example": "Here are some healthy Halloween treats for ghouls and witches of all ages.",
    "exampleTranslation": "这里有一些适合各个年龄段鬼怪和女巫的健康万圣节款待。"
  },
  {
    "word": "treatment",
    "phonetic": "/ˈtɹiːtmənt/",
    "pos": "n",
    "meaning": "治疗, 款待 v. 对待, 治疗, 款待",
    "example": "He still has nightmares resulting from the treatment he received from his captors.",
    "exampleTranslation": "他仍然因为俘虏对他的待遇而做噩梦。"
  },
  {
    "word": "tree",
    "phonetic": "/tɹiː/",
    "pos": "n",
    "meaning": "树",
    "example": "Birds have a nest in a tree in the garden.",
    "exampleTranslation": "鸟儿在花园的一棵树上筑巢。"
  },
  {
    "word": "tremble",
    "phonetic": "/ˈtɹɛmbl̩/",
    "pos": "v",
    "meaning": "颤抖",
    "example": "Her lip started to tremble as she burst into tears",
    "exampleTranslation": "她的嘴唇开始颤抖，然后泪流满面"
  },
  {
    "word": "trend",
    "phonetic": "/tɹɛnd/",
    "pos": "n",
    "meaning": "倾向, 趋势",
    "example": "the trend of a coastline",
    "exampleTranslation": "海岸线的走向"
  },
  {
    "word": "trial",
    "phonetic": "/ˈtɹaɪəl/",
    "pos": "n",
    "meaning": "审判; 试验; 试用",
    "example": "They will perform the trials for the new equipment next week.",
    "exampleTranslation": "他们下周将对新设备进行试验。"
  },
  {
    "word": "triangle",
    "phonetic": "/ˈtɹaɪəŋɡəl/",
    "pos": "n",
    "meaning": "三角形 adj. 三角形的",
    "example": "This is a triangle.",
    "exampleTranslation": "这是一个三角形。"
  },
  {
    "word": "trick",
    "phonetic": "/tɹɪk/",
    "pos": "n",
    "meaning": "诡计, 把戏",
    "example": "It was just a trick to say that the house was underpriced.",
    "exampleTranslation": "说房子定价过低只是一个诡计。"
  },
  {
    "word": "trip",
    "phonetic": "/tɹɪp/",
    "pos": "n",
    "meaning": "旅行, 旅程",
    "example": "We made a trip to the beach.",
    "exampleTranslation": "我们去海滩旅行了。"
  },
  {
    "word": "trolleybus",
    "phonetic": "/tɹɒlɪbʌs/",
    "pos": "n",
    "meaning": "无轨电车",
    "example": "The trolleybus is important.",
    "exampleTranslation": "这辆无轨电车很重要。"
  },
  {
    "word": "troop",
    "phonetic": "/tɹuːp/",
    "pos": "n",
    "meaning": "群, 组, 部队",
    "example": "The children trooped into the room.",
    "exampleTranslation": "孩子们成群结队地走进房间。"
  },
  {
    "word": "trouble",
    "phonetic": "/ˈtɹʌb(ə)l/",
    "pos": "v",
    "meaning": "使苦恼, 使忧虑, 使麻烦 n. 问题, 疾病, 烦恼, 麻烦",
    "example": "He was in trouble when the rain started.",
    "exampleTranslation": "下雨时他遇到了麻烦。"
  },
  {
    "word": "troublesome",
    "phonetic": "/ˈtɹʌbl̩səm/",
    "pos": "adj",
    "meaning": "令人烦恼的; 讨厌的",
    "example": "The computer has been very troublesome for me. It never works when I need to use it.",
    "exampleTranslation": "这台电脑一直让我很头疼。当我需要使用它时，它从不工作。"
  },
  {
    "word": "trousers",
    "phonetic": "/ˈtɹaʊzəz/",
    "pos": "n",
    "meaning": "裤子, 长裤",
    "example": "The trousers need to be shortened.",
    "exampleTranslation": "这条裤子需要改短。"
  },
  {
    "word": "truck",
    "phonetic": "/tɹʌk/",
    "pos": "n",
    "meaning": "卡车, 运货车",
    "example": "Mexican open-bed trucks haul most of the fresh produce that comes into the United States from Mexico.",
    "exampleTranslation": "墨西哥敞篷卡车运输大部分进入美国的新鲜农产品。"
  },
  {
    "word": "true",
    "phonetic": "/tɹuː/",
    "pos": "adj",
    "meaning": "真的, 真实的; 忠诚的",
    "example": "He trued the spokes of the bicycle wheel.",
    "exampleTranslation": "他校正了自行车轮的辐条。"
  },
  {
    "word": "truly",
    "phonetic": "/ˈtɹuːli/",
    "pos": "adv",
    "meaning": "真正地, 真实地",
    "example": "That is truly all I know.",
    "exampleTranslation": "那确实是我所知道的一切。"
  },
  {
    "word": "trunk",
    "phonetic": "/tɹʌŋk/",
    "pos": "n",
    "meaning": "树干; 大箱子；象鼻",
    "example": "the trunk of a vein or of an artery, as distinct from the branches",
    "exampleTranslation": "静脉或动脉的主干，与分支不同"
  },
  {
    "word": "trust",
    "phonetic": "/trʊst/",
    "pos": "v",
    "meaning": "相信, 信任, 信赖",
    "example": "He needs to regain her trust if he is ever going to win her back.",
    "exampleTranslation": "如果他想赢回她，他需要重新获得她的信任。"
  },
  {
    "word": "truth",
    "phonetic": "/tɹuːθ/",
    "pos": "n",
    "meaning": "真理, 事实, 真相, 实际情况",
    "example": "The truth is that our leaders knew a lot more than they were letting on.",
    "exampleTranslation": "事实是，我们的领导人知道的比他们透露的要多得多。"
  },
  {
    "word": "try",
    "phonetic": "/tɹaɪ/",
    "pos": "v",
    "meaning": "试, 试图, 努力",
    "example": "I gave unicycling a try but I couldn’t do it.",
    "exampleTranslation": "试。"
  },
  {
    "word": "tube",
    "phonetic": "/tjuːb/",
    "pos": "n",
    "meaning": "管, 管子",
    "example": "A tube of toothpaste.",
    "exampleTranslation": "一管牙膏。"
  },
  {
    "word": "tune",
    "phonetic": "/tjuːn/",
    "pos": "n",
    "meaning": "曲调, 调子",
    "example": "Your engine needs a good tune.",
    "exampleTranslation": "你的发动机需要好好调校一下。"
  },
  {
    "word": "turkey",
    "phonetic": "/ˈtɜːki/",
    "pos": "n",
    "meaning": "火鸡",
    "example": "All week after Thanksgiving, I had turkey sandwiches for lunch.",
    "exampleTranslation": "感恩节后的整个星期，我午餐都吃火鸡三明治。"
  },
  {
    "word": "turn",
    "phonetic": "/tɜːn/",
    "pos": "v",
    "meaning": "旋转, 翻转, 转变, 转弯 n. 轮流, 顺序",
    "example": "They say they can turn the parts in two days.",
    "exampleTranslation": "他们说他们可以在两天内完成零件加工。"
  },
  {
    "word": "turning",
    "phonetic": "/ˈtɜː.nɪŋ/",
    "pos": "n",
    "meaning": "拐弯处, 拐角处",
    "example": "They say they can turn the parts in two days.",
    "exampleTranslation": "他们说他们可以在两天内完成零件加工。"
  },
  {
    "word": "tutor",
    "phonetic": "/ˈtjuːtə/",
    "pos": "n",
    "meaning": "家庭教师",
    "example": "He passed the difficult class with help from his tutor.",
    "exampleTranslation": "在导师的帮助下，他通过了这门困难的课程。"
  },
  {
    "word": "tv",
    "phonetic": "/ˌtiː ˈviː/",
    "pos": "n",
    "meaning": "= television 电视; 电视机",
    "example": "I watch TV after dinner.",
    "exampleTranslation": "我晚饭后看电视。"
  },
  {
    "word": "twice",
    "phonetic": "/twaɪs/",
    "pos": "adv",
    "meaning": "两次; 两倍",
    "example": "He runs twice.",
    "exampleTranslation": "他跑了两次。"
  },
  {
    "word": "twin",
    "phonetic": "/twɪn/",
    "pos": "n",
    "meaning": "双胞胎之一",
    "example": "Coventry twinned with Dresden as an act of peace and reconciliation, both cities having been heavily bombed during the war.",
    "exampleTranslation": "考文垂与德累斯顿结为友好城市，作为和平与和解的象征，两座城市在战争期间都遭到了严重轰炸。"
  },
  {
    "word": "twist",
    "phonetic": "/twɪst/",
    "pos": "v",
    "meaning": "扭弯, 扭曲, 缠绕 n. 扭曲, 曲折",
    "example": "Damascus twist",
    "exampleTranslation": "大马士革花纹"
  },
  {
    "word": "type",
    "phonetic": "/taɪp/",
    "pos": "v",
    "meaning": "打字",
    "example": "This type of plane can handle rough weather more easily than that type of plane.",
    "exampleTranslation": "这种类型的飞机比那种类型的飞机更容易应对恶劣天气。"
  },
  {
    "word": "typewriter",
    "phonetic": "/ˈtaɪpˌɹaɪtə(ɹ)/",
    "pos": "n",
    "meaning": "打字机",
    "example": "I need the typewriter.",
    "exampleTranslation": "我需要这台打字机。"
  },
  {
    "word": "typhoon",
    "phonetic": "/taɪˈfuːn/",
    "pos": "n",
    "meaning": "台风",
    "example": "This is a typhoon.",
    "exampleTranslation": "这是一场台风。"
  },
  {
    "word": "typical",
    "phonetic": "/ˈtɪpɪkl̩/",
    "pos": "adj",
    "meaning": "典型的, 象征性的",
    "example": "Among the moths, typicals were more common than melanics.",
    "exampleTranslation": "在飞蛾中，典型个体比黑化个体更常见。"
  },
  {
    "word": "typist",
    "phonetic": "/ˈtaɪpɪst/",
    "pos": "n",
    "meaning": "打字员",
    "example": "I need the typist.",
    "exampleTranslation": "我需要这位打字员。"
  },
  {
    "word": "tyre",
    "phonetic": "/ˈtaɪər/",
    "pos": "n",
    "meaning": "(tire) 轮胎",
    "example": "The car has a flat tyre.",
    "exampleTranslation": "车胎瘪了。"
  },
  {
    "word": "ugly",
    "phonetic": "/ˈʌɡli/",
    "pos": "adj",
    "meaning": "丑陋的; 难看的",
    "example": "He played an ugly trick on us.",
    "exampleTranslation": "他对我们耍了一个卑鄙的把戏。"
  },
  {
    "word": "umbrella",
    "phonetic": "/ʌmˈbɹɛlə/",
    "pos": "n",
    "meaning": "雨伞",
    "example": "Quick, grab that umbrella before you get rained on!",
    "exampleTranslation": "快，拿把伞，别淋湿了！"
  },
  {
    "word": "unable",
    "phonetic": "/ʌnˈeɪbəl/",
    "pos": "adj",
    "meaning": "不能的, 不能胜任的",
    "example": "Are you unable to mind your own business or something?",
    "exampleTranslation": "你是不能管好你自己的事还是怎么的？"
  },
  {
    "word": "unbearable",
    "phonetic": "/ʌnˈberəbəl/",
    "pos": "adj",
    "meaning": "无法忍受的, 承受不住的",
    "example": "The pain is unbearable.",
    "exampleTranslation": "疼痛难以忍受。"
  },
  {
    "word": "unbelievable",
    "phonetic": "/ˌʌnbəˈliːvəbl̩/",
    "pos": "adj",
    "meaning": "难以置信的",
    "example": "The most unbelievable thing happened to me today!",
    "exampleTranslation": "今天发生了一件最难以置信的事！"
  },
  {
    "word": "uncertain",
    "phonetic": "/ʌnˈsɜːrtən/",
    "pos": "adj",
    "meaning": "不确定的",
    "example": "The future is uncertain.",
    "exampleTranslation": "未来是不确定的。"
  },
  {
    "word": "uncle",
    "phonetic": "/ˈʌŋkəl/",
    "pos": "n",
    "meaning": "叔; 伯; 舅; 姑夫; 姨父",
    "example": "My uncle is a doctor.",
    "exampleTranslation": "我叔叔是一名医生。"
  },
  {
    "word": "uncomfortable",
    "phonetic": "/ʌnˈkʌmfərtəbəl/",
    "pos": "adj",
    "meaning": "不舒服的, 不安的",
    "example": "This chair is uncomfortable.",
    "exampleTranslation": "这把椅子不舒服。"
  },
  {
    "word": "unconditional",
    "phonetic": "/ˌʌnkənˈdɪʃənəl/",
    "pos": "adj",
    "meaning": "无条件的, 绝对的",
    "example": "A mother gives unconditional love.",
    "exampleTranslation": "母亲给予无条件的爱。"
  },
  {
    "word": "unconscious",
    "phonetic": "/ʌnˈkɑːnʃəs/",
    "pos": "adj",
    "meaning": "不省人事, 无意识的",
    "example": "He fell down and was unconscious.",
    "exampleTranslation": "他摔倒后失去了意识。"
  },
  {
    "word": "under",
    "phonetic": "/ˈʌndər/",
    "pos": "adv, prep",
    "meaning": "在下; 在...之下, 低于",
    "example": "The cat is under the table.",
    "exampleTranslation": "猫在桌子下面。"
  },
  {
    "word": "underground",
    "phonetic": "/ˌʌndərˈɡraʊnd/",
    "pos": "adj, n",
    "meaning": "地下的; 地铁",
    "example": "We took the underground to work.",
    "exampleTranslation": "我们乘地铁去上班。"
  },
  {
    "word": "underline",
    "phonetic": "/ˌʌndərˈlaɪn/",
    "pos": "v",
    "meaning": "在...下面划线",
    "example": "Underline the new words.",
    "exampleTranslation": "在生词下面划线。"
  },
  {
    "word": "understand",
    "phonetic": "/ˌʌndərˈstænd/",
    "pos": "v",
    "meaning": "懂得; 明白; 理解 (understood)",
    "example": "Do you understand the question?",
    "exampleTranslation": "你理解这个问题吗？"
  },
  {
    "word": "undertake",
    "phonetic": "/ˌʌndərˈteɪk/",
    "pos": "v",
    "meaning": "承担, 担任, 许诺 (undertook, undertaken)",
    "example": "I will undertake the task.",
    "exampleTranslation": "我将承担这项任务。"
  },
  {
    "word": "underwear",
    "phonetic": "/ˈʌndərwer/",
    "pos": "n",
    "meaning": "内衣",
    "example": "He bought some new underwear.",
    "exampleTranslation": "他买了一些新内衣。"
  },
  {
    "word": "unemployment",
    "phonetic": "/ˌʌnɪmˈplɔɪmənt/",
    "pos": "n",
    "meaning": "失业, 失业状态",
    "example": "Unemployment is high this year.",
    "exampleTranslation": "今年失业率很高。"
  },
  {
    "word": "unfair",
    "phonetic": "/ʌnˈfɛə(ɹ)/",
    "pos": "adj",
    "meaning": "不公平的, 不公正的",
    "example": "It was unfair for the boss to give larger bonuses to his friends.",
    "exampleTranslation": "老板给朋友更大的奖金是不公平的。"
  },
  {
    "word": "unfit",
    "phonetic": "/ʌnˈfɪt/",
    "pos": "adj",
    "meaning": "不合宜的, 不相宜的",
    "example": "This water is unfit to drink.",
    "exampleTranslation": "这水不适合饮用。"
  },
  {
    "word": "unfortunate",
    "phonetic": "/ʌnˈfɔːrtʃənət/",
    "pos": "adj",
    "meaning": "不幸的",
    "example": "That is an unfortunate mistake.",
    "exampleTranslation": "那是一个不幸的错误。"
  },
  {
    "word": "unfortunately",
    "phonetic": "/ʌnˈfɔːrtʃənətli/",
    "pos": "adv",
    "meaning": "不幸地",
    "example": "Unfortunately, I lost my keys.",
    "exampleTranslation": "不幸的是，我丢了钥匙。"
  },
  {
    "word": "uniform",
    "phonetic": "/ˈjuːnɪfɔːrm/",
    "pos": "n",
    "meaning": "制服",
    "example": "Students wear a school uniform.",
    "exampleTranslation": "学生穿校服。"
  },
  {
    "word": "union",
    "phonetic": "/ˈjuːnjən/",
    "pos": "n",
    "meaning": "联合, 联盟; 工会",
    "example": "I need the union.",
    "exampleTranslation": "我需要这个工会。"
  },
  {
    "word": "unique",
    "phonetic": "/juˈniːk/",
    "pos": "adj",
    "meaning": "唯一的, 独特的",
    "example": "Everyone's fingerprint is unique.",
    "exampleTranslation": "每个人的指纹都是独一无二的。"
  },
  {
    "word": "unit",
    "phonetic": "/ˈjuː.nɪt/",
    "pos": "n",
    "meaning": "单元, 单位",
    "example": "The centimetre is a unit of length.",
    "exampleTranslation": "厘米是长度单位。"
  },
  {
    "word": "unite",
    "phonetic": "/juˈnaɪt/",
    "pos": "v",
    "meaning": "联合, 团结",
    "example": "I hope this song can unite people from all different cultures.",
    "exampleTranslation": "我希望这首歌能团结来自不同文化的人。"
  },
  {
    "word": "universal",
    "phonetic": "/ˌjuːnɪˈvɜːsl̩/",
    "pos": "adj",
    "meaning": "普遍的, 全体的, 通用的, 宇宙的, 世界的",
    "example": "She achieved universal fame.",
    "exampleTranslation": "她获得了普遍的声誉。"
  },
  {
    "word": "universe",
    "phonetic": "/ˈjuːnɪˌvɜːs/",
    "pos": "n",
    "meaning": "宇宙",
    "example": "Powerful telescopes look far back into the distant reaches of the Universe.",
    "exampleTranslation": "强大的望远镜可以观测到宇宙深处的遥远区域。"
  },
  {
    "word": "university",
    "phonetic": "/juːnɪˈvɜːsətiː/",
    "pos": "n",
    "meaning": "大学",
    "example": "The only reason why I haven't gone to university is because I can't afford it.",
    "exampleTranslation": "我唯一没有上大学的原因是我负担不起。"
  },
  {
    "word": "unless",
    "phonetic": "/ənˈlɛs/",
    "pos": "conj",
    "meaning": "如果不, 除非",
    "example": "I’m leaving unless I get a pay rise (AmE: raise).",
    "exampleTranslation": "如果不。"
  },
  {
    "word": "unlike",
    "phonetic": "/ʌnˈlaɪk/",
    "pos": "prep",
    "meaning": "不像, 和…不同",
    "example": "The brothers are quite unlike each other.",
    "exampleTranslation": "兄弟俩彼此很不相同。"
  },
  {
    "word": "unrest",
    "phonetic": "/ʌnˈɹɛst/",
    "pos": "n",
    "meaning": "不安; 骚动",
    "example": "The unrest is important.",
    "exampleTranslation": "这场动乱很重要。"
  },
  {
    "word": "until",
    "phonetic": "/ənˈtɪl/",
    "pos": "prep",
    "meaning": "到...为止, 在...以前 conj.到...为止, 在...以前, 直到...才",
    "example": "If you can wait until after my meeting with her, we'll talk then.",
    "exampleTranslation": "如果你能等到我和她见面之后，我们再谈。"
  },
  {
    "word": "unusual",
    "phonetic": "/ʌnˈjuːʒuəl/",
    "pos": "adj",
    "meaning": "不平常的, 异常的",
    "example": "Every once in a while, though, Idol comes across an unusual talent who just blows everyone away.",
    "exampleTranslation": "不过，偶尔《偶像》会发现一个不寻常的人才，让所有人惊叹。"
  },
  {
    "word": "unwilling",
    "phonetic": "/ʌnˈwɪlɪŋ/",
    "pos": "adj",
    "meaning": "不愿意的, 勉强的",
    "example": "We are unwilling to restore his previous privileges after his betrayal of our trust.",
    "exampleTranslation": "在他背叛了我们的信任后，我们不愿意恢复他以前的特权。"
  },
  {
    "word": "up",
    "phonetic": "/ap/",
    "pos": "adv",
    "meaning": "向上; 在上方; 在…以上 adj. 上面的, 向上的 n. 上升; 上坡; 繁荣 prep. 向高处; 向(在)…上(面)游",
    "example": "Up is a good way to go.",
    "exampleTranslation": "向上是一个好的方向。"
  },
  {
    "word": "update",
    "phonetic": "/ˌʌpˈdeɪt/",
    "pos": "v",
    "meaning": "使现代化, 修正, 校正, 更新 n. 修正, 校正, 更新",
    "example": "He gave me an update on the situation in New York.",
    "exampleTranslation": "他向我介绍了纽约的最新情况。"
  },
  {
    "word": "upon",
    "phonetic": "/əˈpɒn/",
    "pos": "prep",
    "meaning": "在…上面",
    "example": "He was set upon by the agitated dogs",
    "exampleTranslation": "他被激动的狗群攻击了"
  },
  {
    "word": "upper",
    "phonetic": "/ˈʌpə/",
    "pos": "adj",
    "meaning": "较高的, 较上的",
    "example": "He seems upper.",
    "exampleTranslation": "他看起来很优越。"
  },
  {
    "word": "upset",
    "phonetic": "/ʌpˈset/",
    "pos": "v",
    "meaning": "扰乱, 使心烦 adj. 心烦的, 苦恼的",
    "example": "My late arrival caused the professor considerable upset.",
    "exampleTranslation": "我的迟到让教授相当不安。"
  },
  {
    "word": "upstairs",
    "phonetic": "/ˈʌpˌstɛəz/",
    "pos": "adv",
    "meaning": "在楼上, 到楼上",
    "example": "They can sleep in the upstairs bedroom.",
    "exampleTranslation": "他们可以睡在楼上的卧室。"
  },
  {
    "word": "urban",
    "phonetic": "/ˈɜːbən/",
    "pos": "adj",
    "meaning": "城市的, 市内的",
    "example": "That is urban.",
    "exampleTranslation": "那是城市的。"
  },
  {
    "word": "urge",
    "phonetic": "/ɜːd͡ʒ/",
    "pos": "v",
    "meaning": "催促, 力劝",
    "example": "to urge an argument; to urge the necessity of a case",
    "exampleTranslation": "极力主张一个论点；极力主张案件的必要性"
  },
  {
    "word": "urgent",
    "phonetic": "/ˈɜːdʒənt/",
    "pos": "adj",
    "meaning": "急迫的, 紧急的",
    "example": "An urgent appeal was sent out for assistance.",
    "exampleTranslation": "发出了紧急援助呼吁。"
  },
  {
    "word": "use",
    "phonetic": "/juːz/",
    "pos": "v",
    "meaning": "使用, 利用, 耗费 n.使用, 用途, 使用价值",
    "example": "The use of torture has been condemned by the United Nations.",
    "exampleTranslation": "使用酷刑已被联合国谴责。"
  },
  {
    "word": "used",
    "phonetic": "/juːzd/",
    "pos": "adj",
    "meaning": "用过的; 旧的; 二手的",
    "example": "soldiers who are used to hardships and danger",
    "exampleTranslation": "习惯了艰苦和危险的士兵"
  },
  {
    "word": "useful",
    "phonetic": "/ˈjuːsfəl/",
    "pos": "adj",
    "meaning": "有用的, 有益的",
    "example": "This is useful.",
    "exampleTranslation": "这是有用的。"
  },
  {
    "word": "useless",
    "phonetic": "/ˈjuːs.ləs/",
    "pos": "adj",
    "meaning": "无用的",
    "example": "This fork has prongs that are bent. It's useless now.",
    "exampleTranslation": "这把叉子的齿弯了。现在没用了。"
  },
  {
    "word": "user",
    "phonetic": "/ˈjuːzə/",
    "pos": "n",
    "meaning": "使用者; 用户",
    "example": "I need the user.",
    "exampleTranslation": "我需要这位用户。"
  },
  {
    "word": "usual",
    "phonetic": "/ˈjuːʒʊəl/",
    "pos": "adj",
    "meaning": "通常的, 平常的",
    "example": "I'll just have the usual.",
    "exampleTranslation": "我就要平常那个。"
  },
  {
    "word": "vacant",
    "phonetic": "/ˈveɪkənt/",
    "pos": "adj",
    "meaning": "空的, 空白的",
    "example": "a vacant stare",
    "exampleTranslation": "茫然的凝视"
  },
  {
    "word": "vacation",
    "phonetic": "/veɪˈkeɪʃ(ə)n/",
    "pos": "n",
    "meaning": "假期, 休假",
    "example": "The Conservative Party’s vacation of the centre ground gave an opportunity to its opponents.",
    "exampleTranslation": "假期。"
  },
  {
    "word": "vague",
    "phonetic": "/veɪɡ/",
    "pos": "adj",
    "meaning": "含糊的, 不清楚的",
    "example": "a vague term of abuse",
    "exampleTranslation": "一个模糊的辱骂词"
  },
  {
    "word": "vain",
    "phonetic": "/veɪn/",
    "pos": "n",
    "meaning": "自负的, 自视过高的, 徒劳的, 无效的",
    "example": "vain toil;  a vain attempt",
    "exampleTranslation": "自负的。"
  },
  {
    "word": "valid",
    "phonetic": "/ˈvælɪd/",
    "pos": "adj",
    "meaning": "有效的",
    "example": "I will believe him as soon as he offers a valid answer.",
    "exampleTranslation": "他一给出有效的答案，我就相信他。"
  },
  {
    "word": "valley",
    "phonetic": "/ˈvæli/",
    "pos": "n",
    "meaning": "山谷, 溪谷",
    "example": "The valley is important.",
    "exampleTranslation": "这个山谷很重要。"
  },
  {
    "word": "valuable",
    "phonetic": "/ˈvæljuəbl̩/",
    "pos": "adj",
    "meaning": "值钱的, 贵重的",
    "example": "valuable gemstones",
    "exampleTranslation": "珍贵的宝石"
  },
  {
    "word": "value",
    "phonetic": "/ˈvæljuː/",
    "pos": "n",
    "meaning": "价值, 益处",
    "example": "The Shakespearean Shylock is of dubious value in the modern world.",
    "exampleTranslation": "莎士比亚笔下的夏洛克在现代世界价值存疑。"
  },
  {
    "word": "variety",
    "phonetic": "/vəˈɹaɪ.ɪ.ti/",
    "pos": "n",
    "meaning": "变化, 多样性, 种种, 种类",
    "example": "Variety is the spice of life.",
    "exampleTranslation": "变化是生活的调味品。"
  },
  {
    "word": "various",
    "phonetic": "/ˈvɛə.ɹi.əs/",
    "pos": "adj",
    "meaning": "各种各样的, 不同的",
    "example": "The reasons are various.",
    "exampleTranslation": "原因是多种多样的。"
  },
  {
    "word": "vase",
    "phonetic": "/væes/",
    "pos": "n",
    "meaning": "花瓶",
    "example": "This is a vase.",
    "exampleTranslation": "这是一个花瓶。"
  },
  {
    "word": "vast",
    "phonetic": "/vɑːst/",
    "pos": "adj",
    "meaning": "巨大的, 广阔的",
    "example": "The Sahara desert is vast.",
    "exampleTranslation": "撒哈拉沙漠很广阔。"
  },
  {
    "word": "vegetable",
    "phonetic": "/ˈvɛd͡ʒtəbəl/",
    "pos": "n",
    "meaning": "蔬菜",
    "example": "I need the vegetable.",
    "exampleTranslation": "我需要这些蔬菜。"
  },
  {
    "word": "vehicle",
    "phonetic": "/ˈvɪː(ə).kəl/",
    "pos": "n",
    "meaning": "交通工具, 车辆",
    "example": "The vehicle is important.",
    "exampleTranslation": "这辆车很重要。"
  },
  {
    "word": "version",
    "phonetic": "/ˈvɜːʃən/",
    "pos": "n",
    "meaning": "译文; 版本",
    "example": "It's only in the King James Version of the Bible.",
    "exampleTranslation": "这只在钦定版圣经中出现。"
  },
  {
    "word": "vertical",
    "phonetic": "/ˈvɜːtɪkəl/",
    "pos": "adj",
    "meaning": "垂直的, 直立的",
    "example": "We offer specialised accounting software targeting various verticals.",
    "exampleTranslation": "我们提供针对各个垂直领域的专业会计软件。"
  },
  {
    "word": "very",
    "phonetic": "/ˈvɛɹi/",
    "pos": "adv",
    "meaning": "很, 非常",
    "example": "He tried his very best.",
    "exampleTranslation": "他尽了最大的努力。"
  },
  {
    "word": "vest",
    "phonetic": "/vɛst/",
    "pos": "n",
    "meaning": "背心, 内衣",
    "example": "to vest a court with power to try cases of life and death",
    "exampleTranslation": "赋予法院审理生死案件的权力"
  },
  {
    "word": "via",
    "phonetic": "/ˈvaɪə/",
    "pos": "prep",
    "meaning": "经, 通过, 经由",
    "example": "She went via.",
    "exampleTranslation": "她经由那里。"
  },
  {
    "word": "victim",
    "phonetic": "/ˈvɪktəm/",
    "pos": "n",
    "meaning": "受害人, 牺牲者",
    "example": "the youngest victims of the brutal war",
    "exampleTranslation": "残酷战争中最年轻的受害者"
  },
  {
    "word": "victory",
    "phonetic": "/ˈvɪkt(ə)ɹi/",
    "pos": "n",
    "meaning": "胜利",
    "example": "It was a great victory on the battlefield.",
    "exampleTranslation": "这是战场上的伟大胜利。"
  },
  {
    "word": "video",
    "phonetic": "/ˈvɪ.di.əʊ/",
    "pos": "n",
    "meaning": "录像, 视频",
    "example": "This is a video.",
    "exampleTranslation": "这是一个视频。"
  },
  {
    "word": "videophone",
    "phonetic": "/ˈvɪdioʊfoʊn/",
    "pos": "n",
    "meaning": "可视电话",
    "example": "I need the videophone.",
    "exampleTranslation": "我需要这部可视电话。"
  },
  {
    "word": "view",
    "phonetic": "/vjuː/",
    "pos": "n",
    "meaning": "看法, 见解; 风景, 景色 v. 观察, 观看",
    "example": "a fine view of Lake George",
    "exampleTranslation": "乔治湖的美景"
  },
  {
    "word": "village",
    "phonetic": "/ˈvɪlɪd͡ʒ/",
    "pos": "n",
    "meaning": "村庄, 乡村",
    "example": "There are 2 churches and 3 shops in our village.",
    "exampleTranslation": "我们村里有两座教堂和三家商店。"
  },
  {
    "word": "villager",
    "phonetic": "/ˈvɪlɪd͡ʒə/",
    "pos": "n",
    "meaning": "村民",
    "example": "This is a villager.",
    "exampleTranslation": "这是一位村民。"
  },
  {
    "word": "vinegar",
    "phonetic": "/ˈvɪnəɡə/",
    "pos": "n",
    "meaning": "醋",
    "example": "a range of herb-flavoured vinegars",
    "exampleTranslation": "一系列草本醋"
  },
  {
    "word": "violate",
    "phonetic": "/ˈvaɪəˌleɪt/",
    "pos": "v",
    "meaning": "违反, 妨碍, 侵犯",
    "example": "Accessing unauthorized files violates security protocol.",
    "exampleTranslation": "访问未经授权的文件违反安全协议。"
  },
  {
    "word": "violence",
    "phonetic": "/ˈvaɪləns/",
    "pos": "n",
    "meaning": "暴力行为",
    "example": "The violence of the storm, fortunately, was more awesome than destructive.",
    "exampleTranslation": "幸运的是，风暴的猛烈程度令人敬畏而不是破坏性的。"
  },
  {
    "word": "violent",
    "phonetic": "/ˈvaɪ(ə)lənt/",
    "pos": "adj",
    "meaning": "暴力的",
    "example": "A violent wind ripped the branch from the tree.",
    "exampleTranslation": "一阵狂风把树枝从树上扯了下来。"
  },
  {
    "word": "violin",
    "phonetic": "/ˌvɑe.ɘˈlɘn/",
    "pos": "n",
    "meaning": "小提琴",
    "example": "The first violin often plays the lead melody lines in a string quartet.",
    "exampleTranslation": "第一小提琴通常在弦乐四重奏中演奏主旋律。"
  },
  {
    "word": "violinist",
    "phonetic": "/ˌvaɪəˈlɪnɪst/",
    "pos": "n",
    "meaning": "提琴家, 提琴手",
    "example": "This is a violinist.",
    "exampleTranslation": "这是一位小提琴手。"
  },
  {
    "word": "virtue",
    "phonetic": "/-tjuː/",
    "pos": "n",
    "meaning": "美德, 正直的品行, 德行",
    "example": "Without virtue, there is no freedom.",
    "exampleTranslation": "没有美德，就没有自由。"
  },
  {
    "word": "virus",
    "phonetic": "/ˈvaɪɹəs/",
    "pos": "n",
    "meaning": "病毒",
    "example": "He caught a virus and had to stay home from school.",
    "exampleTranslation": "他感染了病毒，不得不待在家里不去上学。"
  },
  {
    "word": "visa",
    "phonetic": "/ˈviː.sə/",
    "pos": "n",
    "meaning": "签证",
    "example": "The visa is important.",
    "exampleTranslation": "这个签证很重要。"
  },
  {
    "word": "visit",
    "phonetic": "/ˈvɪzɪt/",
    "pos": "n",
    "meaning": "拜访, 访问, 游览, 参观 v.  拜访, 访问, 参观, 视察",
    "example": "The visit is important.",
    "exampleTranslation": "这次访问很重要。"
  },
  {
    "word": "visitor",
    "phonetic": "/ˈvɪzɪtə/",
    "pos": "n",
    "meaning": "访问者, 参观者",
    "example": "The visitor is important.",
    "exampleTranslation": "这位访客很重要。"
  },
  {
    "word": "visual",
    "phonetic": "/ˈvɪʒuəl/",
    "pos": "adj",
    "meaning": "视觉的, 视力的",
    "example": "This is visual.",
    "exampleTranslation": "这是视觉的。"
  },
  {
    "word": "vital",
    "phonetic": "/ˈvaɪt̬əl/",
    "pos": "adj",
    "meaning": "生死攸关的, 重大的",
    "example": "vital energies; vital functions; vital actions",
    "exampleTranslation": "生命能量；重要功能；重要行动"
  },
  {
    "word": "vivid",
    "phonetic": "/ˈvɪvɪd/",
    "pos": "adj",
    "meaning": "生动的, 鲜明的",
    "example": "That is vivid.",
    "exampleTranslation": "那是生动的。"
  },
  {
    "word": "vocabulary",
    "phonetic": "/vəʊˈkabjʊləɹɪ/",
    "pos": "n",
    "meaning": "词汇, 词汇表",
    "example": "My Russian vocabulary is very limited.",
    "exampleTranslation": "我的俄语词汇量很有限。"
  },
  {
    "word": "voice",
    "phonetic": "/vɔɪs/",
    "pos": "n",
    "meaning": "说话声; 语态",
    "example": "His low voice allowed him to become a bass in the choir.",
    "exampleTranslation": "他的低音使他成为合唱团的男低音。"
  },
  {
    "word": "volcano",
    "phonetic": "/vɒlˈkeɪnəʊ/",
    "pos": "n",
    "meaning": "火山",
    "example": "I need the volcano.",
    "exampleTranslation": "我需要这座火山。"
  },
  {
    "word": "volleyball",
    "phonetic": "/ˈvɒlibɔ(ː)l/",
    "pos": "n",
    "meaning": "排球",
    "example": "This is a volleyball.",
    "exampleTranslation": "这是一个排球。"
  },
  {
    "word": "voluntary",
    "phonetic": "/ˈvɒ.lən.tɹi/",
    "pos": "adj",
    "meaning": "自动的, 自愿的, 主动的",
    "example": "If a man accidentally kills another by lopping a tree, it is not voluntary manslaughter.",
    "exampleTranslation": "如果一个人在砍树时意外杀死另一个人，这不是非自愿过失杀人。"
  },
  {
    "word": "vote",
    "phonetic": "/vəʊt/",
    "pos": "v",
    "meaning": "选举, 投票",
    "example": "One occasion indicative votes were used was in 2003 when MPs were presented with seven different options on how to reform the House of Lords.",
    "exampleTranslation": "使用指示性投票的一个例子是2003年，当时议员们被提供了七种不同的上议院改革方案。"
  },
  {
    "word": "voyage",
    "phonetic": "/ˈvɔɪ.ɪdʒ/",
    "pos": "n",
    "meaning": "航程, 航空, 旅行",
    "example": "The voyage is important.",
    "exampleTranslation": "这次航行很重要。"
  },
  {
    "word": "wag",
    "phonetic": "/wæɡ/",
    "pos": "v",
    "meaning": "摇摆, 摇动; 上下移动",
    "example": "The wag of my dog's tail expresses happiness.",
    "exampleTranslation": "我狗摇尾巴表示高兴。"
  },
  {
    "word": "wage",
    "phonetic": "/weɪd͡ʒ/",
    "pos": "n",
    "meaning": "工资, 报酬",
    "example": "Before her promotion, her wages were 20% less.",
    "exampleTranslation": "在她升职之前，她的工资少了20%。"
  },
  {
    "word": "waist",
    "phonetic": "/weɪst/",
    "pos": "n",
    "meaning": "腰, 腰部",
    "example": "The waist is important.",
    "exampleTranslation": "这个腰很重要。"
  },
  {
    "word": "wait",
    "phonetic": "/weɪt/",
    "pos": "v",
    "meaning": "等, 等候",
    "example": "I had a very long wait at the airport security check.",
    "exampleTranslation": "我在机场安检处等了很长时间。"
  },
  {
    "word": "waiter",
    "phonetic": "/ˈweɪtə/",
    "pos": "n",
    "meaning": "侍者, 服务员",
    "example": "Waiter! There's a fly in my soup.",
    "exampleTranslation": "服务员！我的汤里有一只苍蝇。"
  },
  {
    "word": "waiting-room",
    "phonetic": "/ˈweɪtɪŋ ruːm/",
    "pos": "n",
    "meaning": "等候室, 候诊室",
    "example": "This is a waiting-room.",
    "exampleTranslation": "这是一个等候室。"
  },
  {
    "word": "waitress",
    "phonetic": "/ˈweɪtrəs/",
    "pos": "n",
    "meaning": "女服务员, 女侍者",
    "example": "I need the waitress.",
    "exampleTranslation": "我需要这位女服务员。"
  },
  {
    "word": "walk",
    "phonetic": "/wɔːk/",
    "pos": "n",
    "meaning": "步行, 散步v. 走，步行; 遛（动物）; 陪着（某人）走",
    "example": "To walk briskly for an hour every day is to keep fit.",
    "exampleTranslation": "每天快走一小时是保持健康的好方法。"
  },
  {
    "word": "wall",
    "phonetic": "/wɔːl/",
    "pos": "n",
    "meaning": "墙, 壁",
    "example": "The town wall was surrounded by a moat.",
    "exampleTranslation": "城墙被护城河包围。"
  },
  {
    "word": "wallet",
    "phonetic": "/ˈwɒlɪt/",
    "pos": "n",
    "meaning": "钱包, 皮夹子",
    "example": "The thief stole all the money and credit cards out of the old man's wallet.",
    "exampleTranslation": "小偷偷走了老人钱包里所有的钱和信用卡。"
  },
  {
    "word": "walnut",
    "phonetic": "/ˈwɔːlnʌt/",
    "pos": "n",
    "meaning": "核桃, 胡桃",
    "example": "The walnut is important.",
    "exampleTranslation": "这个核桃很重要。"
  },
  {
    "word": "wander",
    "phonetic": "/ˈwɒndə/",
    "pos": "v",
    "meaning": "漫游; 迷路; 离题",
    "example": "to go for a wander in the park",
    "exampleTranslation": "去公园漫步"
  },
  {
    "word": "want",
    "phonetic": "/wɔnt/",
    "pos": "v",
    "meaning": "想要, 希望, 需要 n.需要; 缺乏",
    "example": "What do you want to eat?  I want you to leave.  I never wanted to go back to live with my mother.",
    "exampleTranslation": "想要。"
  },
  {
    "word": "war",
    "phonetic": "/wɔː/",
    "pos": "n",
    "meaning": "战争",
    "example": "The war was largely between Sunni and Shia militants.",
    "exampleTranslation": "战争主要在逊尼派和什叶派武装分子之间进行。"
  },
  {
    "word": "ward",
    "phonetic": "/wɔːd/",
    "pos": "n",
    "meaning": "病房, 牢房",
    "example": "I need the ward.",
    "exampleTranslation": "我需要这个病房。"
  },
  {
    "word": "warm",
    "phonetic": "/wɔːm/",
    "pos": "adj",
    "meaning": "温暖的; 热烈的v. 温暖, 弄热, 使兴奋, 使热烈",
    "example": "The tea is still warm.",
    "exampleTranslation": "茶还温热。"
  },
  {
    "word": "warmth",
    "phonetic": "/wɔːmθ/",
    "pos": "n",
    "meaning": "暖和, 温暖; 热烈",
    "example": "I need the warmth.",
    "exampleTranslation": "我需要这种温暖。"
  },
  {
    "word": "warn",
    "phonetic": "/wɔːn/",
    "pos": "v",
    "meaning": "警告, 通知",
    "example": "Don't let me catch you running in the corridor again, I warn you.",
    "exampleTranslation": "我警告你，别让我再抓到你在走廊里跑。"
  },
  {
    "word": "wash",
    "phonetic": "/wɑʃ/",
    "pos": "n",
    "meaning": "洗, 洗涤 v. 洗涤, 洗澡, 被冲",
    "example": "I'm going to have a quick wash before coming to bed.",
    "exampleTranslation": "我上床前要快速洗一下。"
  },
  {
    "word": "washroom",
    "phonetic": "/ˈwɑːʃruːm/",
    "pos": "n",
    "meaning": "盥洗室, <美>厕所",
    "example": "This is a washroom.",
    "exampleTranslation": "这是一个洗手间。"
  },
  {
    "word": "waste",
    "phonetic": "/weɪst/",
    "pos": "n",
    "meaning": "浪费; 废物; 垃圾v. 浪费, 消耗",
    "example": "The cage was littered with animal waste",
    "exampleTranslation": "笼子里到处是动物的粪便"
  },
  {
    "word": "watch",
    "phonetic": "/wɒt͡ʃ/",
    "pos": "v",
    "meaning": "看, 注视, 监视 n. 手表, 注视, 注意, 守护, 监视",
    "example": "More people today carry a watch on their wrists than in their pockets.",
    "exampleTranslation": "今天更多的人把手表戴在手腕上而不是放在口袋里。"
  },
  {
    "word": "water",
    "phonetic": "/ˈwoːtə/",
    "pos": "n",
    "meaning": "水 v.使湿, 灌溉, 喷淋",
    "example": "By the action of electricity, the water was resolved into its two parts, oxygen and hydrogen.",
    "exampleTranslation": "通过电的作用，水被分解成两部分：氧气和氢气。"
  },
  {
    "word": "watermelon",
    "phonetic": "/ˈwɔːtəˌmɛlən/",
    "pos": "n",
    "meaning": "西瓜",
    "example": "I need the watermelon.",
    "exampleTranslation": "我需要这个西瓜。"
  },
  {
    "word": "wave",
    "phonetic": "/weɪv/",
    "pos": "n",
    "meaning": "波; 波涛 v. (挥手)示意, 致意, 波动",
    "example": "The flag waved in the gentle breeze.",
    "exampleTranslation": "旗帜在微风中飘扬。"
  },
  {
    "word": "wax",
    "phonetic": "/wæks/",
    "pos": "n",
    "meaning": "蜡",
    "example": "What role does the wax in your earhole fulfill?",
    "exampleTranslation": "你耳孔里的耳垢起什么作用？"
  },
  {
    "word": "way",
    "phonetic": "/weɪ/",
    "pos": "n",
    "meaning": "路; 路线; 方向",
    "example": "You're going about it the wrong way.  He's known for his quirky ways.  I don't like the way she looks at me.",
    "exampleTranslation": "路; 路线; 方向。"
  },
  {
    "word": "we",
    "phonetic": "/wiː/",
    "pos": "pron",
    "meaning": "我们",
    "example": "How are we all tonight?",
    "exampleTranslation": "我们今晚都好吗？"
  },
  {
    "word": "weak",
    "phonetic": "/wiːk/",
    "pos": "adj",
    "meaning": "弱的; 软弱的",
    "example": "The child was too weak to move the boulder.",
    "exampleTranslation": "孩子太虚弱了，搬不动那块大石头。"
  },
  {
    "word": "weakness",
    "phonetic": "/ˈwiːk.nəs/",
    "pos": "n",
    "meaning": "虚弱, 软弱; 弱点",
    "example": "In a small number of horses, muscle weakness may progress to paralysis.",
    "exampleTranslation": "在少数马匹中，肌肉无力可能会发展为瘫痪。"
  },
  {
    "word": "wealth",
    "phonetic": "/wɛlθ/",
    "pos": "n",
    "meaning": "财富, 财产; 大量",
    "example": "She brings a wealth of knowledge to the project.",
    "exampleTranslation": "她为项目带来了丰富的知识。"
  },
  {
    "word": "wealthy",
    "phonetic": "/ˈwɛl.θi/",
    "pos": "adj",
    "meaning": "富的, 富裕的",
    "example": "This is wealthy.",
    "exampleTranslation": "这是富裕的。"
  },
  {
    "word": "weather",
    "phonetic": "/ˈwɛðə/",
    "pos": "n",
    "meaning": "天气",
    "example": "Wooden garden furniture must be well oiled as it is continuously exposed to weather.",
    "exampleTranslation": "木质花园家具必须经常上油，因为它持续暴露在天气中。"
  },
  {
    "word": "web",
    "phonetic": "/wɛb/",
    "pos": "n",
    "meaning": "网",
    "example": "Some of that content is now only available on the Web.",
    "exampleTranslation": "其中一些内容现在只能在网络上找到。"
  },
  {
    "word": "website",
    "phonetic": "/ˈwɛbˌsaɪt/",
    "pos": "n",
    "meaning": "网站",
    "example": "The website is important.",
    "exampleTranslation": "这个网站很重要。"
  },
  {
    "word": "wedding",
    "phonetic": "/ˈwɛdɪŋ/",
    "pos": "n",
    "meaning": "婚礼",
    "example": "The priest wed the couple.",
    "exampleTranslation": "牧师为这对夫妇主持了婚礼。"
  },
  {
    "word": "weed",
    "phonetic": "/wiːd/",
    "pos": "n",
    "meaning": "杂草, 野草",
    "example": "If it isn't in a straight line or marked with a label, it's a weed.",
    "exampleTranslation": "如果它不在一条直线上或标有标签，它就是杂草。"
  },
  {
    "word": "week",
    "phonetic": "/wiːk/",
    "pos": "n",
    "meaning": "星期, 周",
    "example": "A 4-day week consists of Monday, Tuesday, Wednesday, and Thursday.",
    "exampleTranslation": "一周四天包括星期一、星期二、星期三和星期四。"
  },
  {
    "word": "weekday",
    "phonetic": "/ˈwiːkdeɪ/",
    "pos": "n",
    "meaning": "周日, 工作日",
    "example": "The weekday is important.",
    "exampleTranslation": "这个工作日很重要。"
  },
  {
    "word": "weekend",
    "phonetic": "/wiːˈkɛnd/",
    "pos": "n",
    "meaning": "周末",
    "example": "We'll weekend at the beach.",
    "exampleTranslation": "我们周末去海滩。"
  },
  {
    "word": "weekly",
    "phonetic": "/wiːk.li/",
    "pos": "adj",
    "meaning": "每周的 adv. 每周一次",
    "example": "He's going for his weekly check-up at the hospital.",
    "exampleTranslation": "他去医院做每周检查。"
  },
  {
    "word": "weigh",
    "phonetic": "/weɪ/",
    "pos": "v",
    "meaning": "称…的重量; 掂量",
    "example": "He weighed out two kilos of oranges for a client.",
    "exampleTranslation": "他为一位顾客称了两公斤橙子。"
  },
  {
    "word": "weight",
    "phonetic": "/weɪt/",
    "pos": "n",
    "meaning": "重; 砝码; 重担",
    "example": "He's working out with weights.",
    "exampleTranslation": "他在举重锻炼。"
  },
  {
    "word": "welcome",
    "phonetic": "/ˈwɛlkəm/",
    "pos": "n",
    "meaning": "欢迎 v. 欢迎 int.欢迎 adj.受欢迎的",
    "example": "We entered the house and found a ready welcome.",
    "exampleTranslation": "我们进了房子，受到了热情的欢迎。"
  },
  {
    "word": "welfare",
    "phonetic": "/ˈwɛlˌfɛə/",
    "pos": "n",
    "meaning": "幸福, 福利",
    "example": "welfaring the poor",
    "exampleTranslation": "福利穷人"
  },
  {
    "word": "well",
    "phonetic": "/wɛl/",
    "pos": "n",
    "meaning": "井",
    "example": "I had been sick, but now I'm well.",
    "exampleTranslation": "我病了，但现在我好了。"
  },
  {
    "word": "west",
    "phonetic": "/wɛst/",
    "pos": "n",
    "meaning": "西; 西部 adj.西方的 adv. 向西方",
    "example": "The west is important.",
    "exampleTranslation": "西方很重要。"
  },
  {
    "word": "western",
    "phonetic": "/ˈwɛstən/",
    "pos": "adj",
    "meaning": "西方的, 西部的；有西方特征的",
    "example": "the western approaches",
    "exampleTranslation": "西部通道"
  },
  {
    "word": "westward",
    "phonetic": "/ˈwɛstwəd/",
    "pos": "adj",
    "meaning": "西方的, 向西的 adv.向西",
    "example": "ride westward.",
    "exampleTranslation": "向西骑行。"
  },
  {
    "word": "wet",
    "phonetic": "/wɛt/",
    "pos": "adj",
    "meaning": "湿的; 下雨的",
    "example": "Don't go out in the wet.",
    "exampleTranslation": "下雨天不要出去。"
  },
  {
    "word": "whale",
    "phonetic": "/weɪl/",
    "pos": "n",
    "meaning": "鲸",
    "example": "The whale is important.",
    "exampleTranslation": "这头鲸很重要。"
  },
  {
    "word": "what",
    "phonetic": "/wɔt/",
    "pos": "pron",
    "meaning": "什么 adj.什么样的",
    "example": "The market will calculate these higher risks in their funding costs what might result in higher lending rates.",
    "exampleTranslation": "市场将在其融资成本中计算这些较高的风险，这可能导致更高的贷款利率。"
  },
  {
    "word": "whatever",
    "phonetic": "/wɒtˈɛvə/",
    "pos": "pron",
    "meaning": "凡是...,无论什么 adj.无论怎样的, 无论哪一种的",
    "example": "There is no point whatever in going on with this discussion.",
    "exampleTranslation": "继续这次讨论毫无意义。"
  },
  {
    "word": "wheat",
    "phonetic": "/wiːt/",
    "pos": "n",
    "meaning": "小麦",
    "example": "This is a wheat.",
    "exampleTranslation": "这是小麦。"
  },
  {
    "word": "wheel",
    "phonetic": "/ʍiːl/",
    "pos": "n",
    "meaning": "轮, 车轮",
    "example": "the wheel of life",
    "exampleTranslation": "生命之轮"
  },
  {
    "word": "when",
    "phonetic": "/ʍɛn/",
    "pos": "conj",
    "meaning": "就在那个时候, 在...的时候 adv.什么时候, ...的时候",
    "example": "A good article will cover the who, the what, the when, the where, the why and the how.",
    "exampleTranslation": "一篇好文章会涵盖谁、什么、何时、何地、为什么和如何。"
  },
  {
    "word": "whenever",
    "phonetic": "/wəˈnɛvə/",
    "pos": "conj",
    "meaning": "无论何时, 每当",
    "example": "Whenever will I find time to finish that jigsaw?",
    "exampleTranslation": "我什么时候才能找到时间完成那个拼图？"
  },
  {
    "word": "where",
    "phonetic": "/wɛə(ɹ)/",
    "pos": "adv",
    "meaning": "在哪里；什么地方  conj. …的地方",
    "example": "A good article will cover the who, the what, the when, the where, the why and the how.",
    "exampleTranslation": "一篇好文章会涵盖谁、什么、何时、何地、为什么和如何。"
  },
  {
    "word": "wherever",
    "phonetic": "/wɛəˈɹɛvə/",
    "pos": "conj",
    "meaning": "无论哪里，无论什么地方",
    "example": "Wherever have you been all my life?",
    "exampleTranslation": "你一直都在哪里？"
  },
  {
    "word": "whether",
    "phonetic": "/ˈwɛðə(ɹ)/",
    "pos": "conj",
    "meaning": "是否",
    "example": "He chose the correct answer, but I don't know whether it was by luck or (whether it was) by skill.",
    "exampleTranslation": "他选择了正确答案，但我不知道是靠运气还是靠技巧。"
  },
  {
    "word": "which",
    "phonetic": "/wɪt͡ʃ/",
    "pos": "pron",
    "meaning": "哪一个 adj.哪一个",
    "example": "By now, you must surely know which is which.",
    "exampleTranslation": "现在你一定知道哪个是哪个了。"
  },
  {
    "word": "whichever",
    "phonetic": "/wɪtʃˈɛvɚ/",
    "pos": "pron",
    "meaning": "无论那一个, 任何一个",
    "example": "These chocolates all look delicious. Whichever shall I choose?",
    "exampleTranslation": "这些巧克力看起来都很好吃。我该选哪一个？"
  },
  {
    "word": "while",
    "phonetic": "/waɪl/",
    "pos": "conj",
    "meaning": "当…的时候; 而n.一会儿, 时间",
    "example": "He lectured for quite a long while.",
    "exampleTranslation": "他讲了很长时间。"
  },
  {
    "word": "whisper",
    "phonetic": "/ˈ(h)wɪspə/",
    "pos": "v",
    "meaning": "低声地讲; 低语n.耳语, 私语",
    "example": "There are whispers of rebellion all around.",
    "exampleTranslation": "到处都有叛乱的低语。"
  },
  {
    "word": "whistle",
    "phonetic": "/wɪsl̩/",
    "pos": "n",
    "meaning": "哨子；汽笛 v.吹口哨, 鸣汽笛",
    "example": "the whistle of the wind in the trees",
    "exampleTranslation": "树林里风的呼啸声"
  },
  {
    "word": "white",
    "phonetic": "/waɪt/",
    "pos": "adj",
    "meaning": "白的 n.白色",
    "example": "Write in black ink on white paper.",
    "exampleTranslation": "用黑墨水在白纸上写字。"
  },
  {
    "word": "who",
    "phonetic": "/huː/",
    "pos": "pron",
    "meaning": "谁",
    "example": "I don't know who it is. (indirect question)",
    "exampleTranslation": "我不知道是谁。（间接问句）"
  },
  {
    "word": "whole",
    "phonetic": "/həʊl/",
    "pos": "adj",
    "meaning": "完整的 n.全部",
    "example": "This variety of fascinating details didn't fall together into an enjoyable, coherent whole.",
    "exampleTranslation": "这些迷人的细节并没有组合成一个令人愉快的、连贯的整体。"
  },
  {
    "word": "whom",
    "phonetic": "/huːm/",
    "pos": "pron",
    "meaning": "谁",
    "example": "He's a person with whom I work. (defining)",
    "exampleTranslation": "他是一个和我一起工作的人。（限定性）"
  },
  {
    "word": "whose",
    "phonetic": "/huːz/",
    "pos": "pron",
    "meaning": "谁的; 哪个人的",
    "example": "Several people have lost their suitcases. Whose have you found?",
    "exampleTranslation": "几个人丢了行李箱。你找到了谁的？"
  },
  {
    "word": "why",
    "phonetic": "/waɪ/",
    "pos": "adv",
    "meaning": "为什么int.哎呀!什么?",
    "example": "A good article will cover the who, the what, the when, the where, the why and the how.",
    "exampleTranslation": "一篇好文章会涵盖谁、什么、何时、何地、为什么和如何。"
  },
  {
    "word": "wide",
    "phonetic": "/wɑed/",
    "pos": "adj",
    "meaning": "宽的, 广阔的",
    "example": "We walked down a wide corridor.",
    "exampleTranslation": "我们沿着一条宽阔的走廊走去。"
  },
  {
    "word": "widespread",
    "phonetic": "/ˈwaɪdspred/",
    "pos": "adj",
    "meaning": "分布广的, 普遍的",
    "example": "This is widespread.",
    "exampleTranslation": "这是普遍的。"
  },
  {
    "word": "widow",
    "phonetic": "/ˈwɪ.dəʊ/",
    "pos": "n",
    "meaning": "寡妇",
    "example": "This is a widow.",
    "exampleTranslation": "这是一位寡妇。"
  },
  {
    "word": "wife",
    "phonetic": "/waɪf/",
    "pos": "n",
    "meaning": "妻子",
    "example": "A new wife for the gander is introduced into the pen.",
    "exampleTranslation": "一只新的母鹅被引入鹅圈。"
  },
  {
    "word": "wild",
    "phonetic": "/waɪld/",
    "pos": "adj",
    "meaning": "野生的; 野蛮的",
    "example": "After mending the lion's leg, we returned him to the wild.",
    "exampleTranslation": "治好狮子的腿后，我们把它放回了野外。"
  },
  {
    "word": "wildlife",
    "phonetic": "/ˈwaɪldlaɪf/",
    "pos": "n",
    "meaning": "野生动植物",
    "example": "This is a wildlife.",
    "exampleTranslation": "这是一种野生动物。"
  },
  {
    "word": "willing",
    "phonetic": "/ˈwɪlɪŋ/",
    "pos": "adj",
    "meaning": "愿意的, 心甘情愿的",
    "example": "All the fans were willing their team to win the game.",
    "exampleTranslation": "所有的球迷都希望他们的球队赢得比赛。"
  },
  {
    "word": "wind",
    "phonetic": "/ˈwaɪnd/",
    "pos": "n",
    "meaning": "风; 气息, 呼吸",
    "example": "As they accelerated onto the motorway, the wind tore the plywood off the car's roof-rack.",
    "exampleTranslation": "当他们加速上高速公路时，风把车顶架上的胶合板吹掉了。"
  },
  {
    "word": "window",
    "phonetic": "/ˈwɪndəʊ/",
    "pos": "n",
    "meaning": "窗子, 窗户, 窗口",
    "example": "To separate out the chaff, early cultures tossed baskets of grain into the air and let the wind blow away the lighter chaff.",
    "exampleTranslation": "为了分离出谷壳，早期文化将一篮篮谷物抛向空中，让风吹走较轻的谷壳。"
  },
  {
    "word": "windy",
    "phonetic": "/ˈwɪndi/",
    "pos": "adj",
    "meaning": "有风的, 刮风的, 多风的",
    "example": "It was a long and windy night.",
    "exampleTranslation": "有风的。"
  },
  {
    "word": "wine",
    "phonetic": "/waɪn/",
    "pos": "n",
    "meaning": "葡萄酒, 果酒",
    "example": "She ordered some wine for the meal.",
    "exampleTranslation": "葡萄酒。"
  },
  {
    "word": "wing",
    "phonetic": "/wɪŋ/",
    "pos": "n",
    "meaning": "翼, 翅膀, 翅",
    "example": "to take wing",
    "exampleTranslation": "翼。"
  },
  {
    "word": "winner",
    "phonetic": "/ˈwɪnə/",
    "pos": "n",
    "meaning": "获胜者, 优胜者",
    "example": "This is a winner.",
    "exampleTranslation": "这是一个赢家。"
  },
  {
    "word": "winter",
    "phonetic": "/ˈwɪntɚ/",
    "pos": "n",
    "meaning": "冬天, 冬季",
    "example": "When they retired, they hoped to winter in Florida.",
    "exampleTranslation": "退休后，他们希望在佛罗里达过冬。"
  },
  {
    "word": "wipe",
    "phonetic": "/waɪp/",
    "pos": "v",
    "meaning": "擦, 揩, 擦去",
    "example": "multiple wipes of a computer's hard disk",
    "exampleTranslation": "多次擦除计算机硬盘"
  },
  {
    "word": "wire",
    "phonetic": "/waɪə(ɹ)/",
    "pos": "n",
    "meaning": "金属线; 电缆",
    "example": "This election is going to go right to the wire",
    "exampleTranslation": "这次选举将进行到最后一刻"
  },
  {
    "word": "wisdom",
    "phonetic": "/ˈwɪzdəm/",
    "pos": "n",
    "meaning": "智慧, 才智",
    "example": "I need the wisdom.",
    "exampleTranslation": "我需要这种智慧。"
  },
  {
    "word": "wise",
    "phonetic": "/waɪz/",
    "pos": "adj",
    "meaning": "有智慧的, 聪明的",
    "example": "After Mo had a word with him, he wised up.",
    "exampleTranslation": "莫和他说了一句话后，他变聪明了。"
  },
  {
    "word": "wish",
    "phonetic": "/wɪʃ/",
    "pos": "v",
    "meaning": "希望, 想要, 但愿n. 愿望, 心愿",
    "example": "My dearest wish is to see them happily married.",
    "exampleTranslation": "我最亲爱的愿望是看到他们幸福地结婚。"
  },
  {
    "word": "with",
    "phonetic": "/wɪθ/",
    "pos": "prep",
    "meaning": "prep.有, 以, 用, 同...,由于, 和...一致",
    "example": "Do you want to come with?",
    "exampleTranslation": "你想一起来吗？"
  },
  {
    "word": "withdraw",
    "phonetic": "/wɪðˈdɹɔː/",
    "pos": "v",
    "meaning": "收回; 撤回; 撤退",
    "example": "to withdraw false charges",
    "exampleTranslation": "撤回虚假指控"
  },
  {
    "word": "within",
    "phonetic": "/wɪˈθɪn/",
    "pos": "prep",
    "meaning": "在…里面",
    "example": "the within appeal",
    "exampleTranslation": "内部上诉"
  },
  {
    "word": "without",
    "phonetic": "/wɪθˈʌʊt/",
    "pos": "prep",
    "meaning": "无, 没有, 不",
    "example": "Being from a large, poor family, he learned to live without.",
    "exampleTranslation": "来自一个贫穷的大家庭，他学会了没有东西也能生活。"
  },
  {
    "word": "witness",
    "phonetic": "/ˈwɪtnəs/",
    "pos": "n",
    "meaning": "证据; 证人 v. 目击",
    "example": "She can bear witness, since she was there at the time.",
    "exampleTranslation": "她可以作证，因为她当时在那里。"
  },
  {
    "word": "wolf",
    "phonetic": "/wʊlf/",
    "pos": "n",
    "meaning": "狼",
    "example": "Check out my pet. He's a wolf.",
    "exampleTranslation": "看看我的宠物。他是一匹狼。"
  },
  {
    "word": "woman",
    "phonetic": "/ˈwʊmɘn/",
    "pos": "n",
    "meaning": "妇女, 女人, 女性",
    "example": "The woman is important.",
    "exampleTranslation": "这位女性很重要。"
  },
  {
    "word": "wonder",
    "phonetic": "/ˈwʌndə/",
    "pos": "n",
    "meaning": "惊异, 惊奇; 奇迹",
    "example": "Wonders of the World seem to come in sevens.",
    "exampleTranslation": "世界奇迹似乎总是七个一组。"
  },
  {
    "word": "wonderful",
    "phonetic": "/ˈwʌn.də.fl/",
    "pos": "adj",
    "meaning": "惊人的; 极好的",
    "example": "They served a wonderful six-course meal.",
    "exampleTranslation": "他们提供了一顿美妙的六道菜餐。"
  },
  {
    "word": "wood",
    "phonetic": "/wʊd/",
    "pos": "n",
    "meaning": "树林; 木头",
    "example": "There was lots of wood on the beach.",
    "exampleTranslation": "海滩上有很多木头。"
  },
  {
    "word": "wool",
    "phonetic": "/wʊl/",
    "pos": "n",
    "meaning": "羊毛; 毛线,  绒线",
    "example": "This is a wool.",
    "exampleTranslation": "这是一种羊毛。"
  },
  {
    "word": "woollen",
    "phonetic": "/ˈwʊlən/",
    "pos": "adj",
    "meaning": "羊毛制的, 毛线的",
    "example": "Put all the woolens in this basket.",
    "exampleTranslation": "把所有羊毛制品放在这个篮子里。"
  },
  {
    "word": "word",
    "phonetic": "/wɜːd/",
    "pos": "n",
    "meaning": "词; 话; 消息; 语言",
    "example": "mum's the word",
    "exampleTranslation": "保持沉默"
  },
  {
    "word": "work",
    "phonetic": "/wɜːk/",
    "pos": "n",
    "meaning": "工作; 职业 v. 工作",
    "example": "We don't have much time. Let's get to work piling up those sandbags.",
    "exampleTranslation": "我们时间不多了。让我们开始堆沙袋吧。"
  },
  {
    "word": "worker",
    "phonetic": "/ˈwɜː.kə/",
    "pos": "n",
    "meaning": "工人; 工作人员",
    "example": "This FTP client spawns a separate worker for each file to be uploaded.",
    "exampleTranslation": "这个FTP客户端为每个要上传的文件生成一个单独的工作线程。"
  },
  {
    "word": "world",
    "phonetic": "/wɝld/",
    "pos": "n",
    "meaning": "世界; 世人; 世间",
    "example": "There will always be lovers, till the world’s end.",
    "exampleTranslation": "世界; 世人; 世间。"
  },
  {
    "word": "worldwide",
    "phonetic": "/ˈwɜːldwaɪd/",
    "pos": "adj",
    "meaning": "遍及全球的",
    "example": "A large meteorite impact would cause worldwide extinction of life.",
    "exampleTranslation": "大型陨石撞击将导致全球生命灭绝。"
  },
  {
    "word": "worm",
    "phonetic": "/wɜːm/",
    "pos": "n",
    "meaning": "虫, 蠕虫",
    "example": "Don't try to run away, you little worm!",
    "exampleTranslation": "别想逃跑，小虫子！"
  },
  {
    "word": "worried",
    "phonetic": "/ˈwʌɹid/",
    "pos": "adj",
    "meaning": "闷闷不乐的",
    "example": "She was worried about her son who had been sent off to fight in the war.",
    "exampleTranslation": "她担心被派去参战的儿子。"
  },
  {
    "word": "worry",
    "phonetic": "/ˈwɒɹi/",
    "pos": "v",
    "meaning": "使烦恼; 发愁 n. 烦恼;  忧虑",
    "example": "I'm afflicted by worry throughout the night.",
    "exampleTranslation": "我整夜被忧虑困扰。"
  },
  {
    "word": "worth",
    "phonetic": "/wɜːθ/",
    "pos": "adj",
    "meaning": "值…的 n.价值",
    "example": "I’ll have a dollar's worth of candy, please.",
    "exampleTranslation": "值…的 价值"
  },
  {
    "word": "worthwhile",
    "phonetic": "/wɜː(ɹ)θˈwaɪl/",
    "pos": "adj",
    "meaning": "值得做的, 值得出力的",
    "example": "Doing volunteer work to help others is truly worthwhile.",
    "exampleTranslation": "做志愿者帮助别人是真正值得的。"
  },
  {
    "word": "worthy",
    "phonetic": "/ˈwɜːði/",
    "pos": "adj",
    "meaning": "有价值的, 应...的, 可敬的, 值得的, 相称的",
    "example": "That is worthy.",
    "exampleTranslation": "那是值得的。"
  },
  {
    "word": "wound",
    "phonetic": "/wuːnd/",
    "pos": "v",
    "meaning": "使受伤n.创伤, 伤",
    "example": "It took a long time to get over the wound of that insult.",
    "exampleTranslation": "那次侮辱的创伤花了很长时间才愈合。"
  },
  {
    "word": "wrestle",
    "phonetic": "/ˈɹɛ.səl/",
    "pos": "v",
    "meaning": "摔跤, 格斗",
    "example": "We must wrestle.",
    "exampleTranslation": "我们必须摔跤。"
  },
  {
    "word": "wrinkle",
    "phonetic": "/ˈɹɪŋkl̩/",
    "pos": "n",
    "meaning": "皱褶, 皱纹",
    "example": "Spending time out in the sun may cause you to develop wrinkles sooner.",
    "exampleTranslation": "在阳光下度过时间可能会让你更早出现皱纹。"
  },
  {
    "word": "wrist",
    "phonetic": "/ɹɪst/",
    "pos": "n",
    "meaning": "腕, 腕关节",
    "example": "I need the wrist.",
    "exampleTranslation": "我需要这个手腕。"
  },
  {
    "word": "wrong",
    "phonetic": "/ɹɒŋ/",
    "pos": "adj",
    "meaning": "错误的",
    "example": "Injustice is a heinous wrong.",
    "exampleTranslation": "不公正是一种令人发指的错误。"
  },
  {
    "word": "x-ray",
    "phonetic": "/ˈeks reɪ/",
    "pos": "n",
    "meaning": "X射线; X光",
    "example": "X-rays are light with a wavelength between 0.1 and 10 nm.",
    "exampleTranslation": "X射线是波长在0.1到10纳米之间的光。"
  },
  {
    "word": "yard",
    "phonetic": "/jɑːd/",
    "pos": "n",
    "meaning": "码; 院子; 场地",
    "example": "The yard is important.",
    "exampleTranslation": "这个院子很重要。"
  },
  {
    "word": "yawn",
    "phonetic": "/jɔːn/",
    "pos": "v",
    "meaning": "打呵欠",
    "example": "The slideshow we sat through was such a yawn. I was glad when it finished.",
    "exampleTranslation": "我们坐着的幻灯片演示太无聊了。我很高兴它结束了。"
  },
  {
    "word": "year",
    "phonetic": "/jɪə/",
    "pos": "n",
    "meaning": "年",
    "example": "we moved to this town a year ago;  I quit smoking exactly one year ago",
    "exampleTranslation": "年。"
  },
  {
    "word": "yell",
    "phonetic": "/jɛl/",
    "pos": "v",
    "meaning": "大叫, 忍不住笑, 呼喊",
    "example": "He yelled directions to the party from the car.",
    "exampleTranslation": "他从车里大声喊着去聚会的方向。"
  },
  {
    "word": "yes",
    "phonetic": "/jɛs/",
    "pos": "adv",
    "meaning": "是, 好, 同意",
    "example": "Was that a yes?",
    "exampleTranslation": "那是同意吗？"
  },
  {
    "word": "yesterday",
    "phonetic": "/ˈjɛstədeɪ/",
    "pos": "n",
    "meaning": "& adv. 昨天",
    "example": "Today is the child of yesterday and the parent of tomorrow.",
    "exampleTranslation": "今天是昨天的孩子，明天的父母。"
  },
  {
    "word": "yet",
    "phonetic": "/jɛt/",
    "pos": "adv",
    "meaning": "尚, 还, 仍然; 然而, 但是",
    "example": "He has never yet been late for an appointment;   I’m not yet wise enough to answer that;   Have you finished yet?",
    "exampleTranslation": "尚。"
  },
  {
    "word": "yoghurt",
    "phonetic": "/ˈjoʊɡərt/",
    "pos": "n",
    "meaning": "酸奶酪",
    "example": "The yoghurt is important.",
    "exampleTranslation": "这种酸奶很重要。"
  },
  {
    "word": "you",
    "phonetic": "/jʉː/",
    "pos": "pron",
    "meaning": "你; 你们",
    "example": "Both of you should get ready now.",
    "exampleTranslation": "你们俩现在都应该准备好了。"
  },
  {
    "word": "young",
    "phonetic": "/jʌŋ/",
    "pos": "adj",
    "meaning": "年轻的",
    "example": "The young of today are well-educated.",
    "exampleTranslation": "今天的年轻人受过良好的教育。"
  },
  {
    "word": "your",
    "phonetic": "/jʊr/",
    "pos": "pron",
    "meaning": "你的; 你们的",
    "example": "your is my friend.",
    "exampleTranslation": "你的是我的朋友。"
  },
  {
    "word": "yours",
    "phonetic": "/jɔː(ɹ)z/",
    "pos": "pron",
    "meaning": "你的; 你们的",
    "example": "If this edit is mine, the other must be yours.  Their encyclopedia is good, but yours is even better.  It’s all yours.",
    "exampleTranslation": "你的; 你们的。"
  },
  {
    "word": "yourself",
    "phonetic": "/jɔːˈsɛlf/",
    "pos": "pron",
    "meaning": "你自己",
    "example": "Be careful with that fire or you'll burn yourself.",
    "exampleTranslation": "小心那火，否则你会烧伤自己。"
  },
  {
    "word": "yourselves",
    "phonetic": "/jɔːˈsɛlvz/",
    "pos": "pron",
    "meaning": "你们自己",
    "example": "You shouldn't blame yourselves.",
    "exampleTranslation": "你们不应该责怪自己。"
  },
  {
    "word": "youth",
    "phonetic": "/juθ/",
    "pos": "n",
    "meaning": "青春; 青年",
    "example": "Her youth and beauty attracted him to her.",
    "exampleTranslation": "她的青春和美貌吸引了他。"
  },
  {
    "word": "yummy",
    "phonetic": "/ˈjʌm.i/",
    "pos": "adj",
    "meaning": "美味的",
    "example": "This is yummy.",
    "exampleTranslation": "这很好吃。"
  },
  {
    "word": "zebra",
    "phonetic": "/ˈziːbɹə/",
    "pos": "n",
    "meaning": "斑马",
    "example": "I need the zebra.",
    "exampleTranslation": "我需要这匹斑马。"
  },
  {
    "word": "zero",
    "phonetic": "/ˈzɪəɹəʊ/",
    "pos": "n",
    "meaning": "& num. 零; 零度; 零点",
    "example": "In unary and k-adic notation in general, zero is the empty string.",
    "exampleTranslation": "在一进制和k进制表示法中，零是空字符串。"
  },
  {
    "word": "zip",
    "phonetic": "/zɪp/",
    "pos": "v",
    "meaning": "拉开(或扣上)…的拉链;  n. 拉链",
    "example": "I know zip about economics.",
    "exampleTranslation": "我对经济学一无所知。"
  },
  {
    "word": "zipper",
    "phonetic": "/ˈzɪpɚ/",
    "pos": "n",
    "meaning": "拉链",
    "example": "He zippered his sweater against the cold.",
    "exampleTranslation": "他拉上毛衣拉链抵御寒冷。"
  },
  {
    "word": "zone",
    "phonetic": "/zəʊn/",
    "pos": "n",
    "meaning": "区域; 范围",
    "example": "Files in the Internet zone are blocked by default, as a security measure.",
    "exampleTranslation": "作为安全措施，互联网区域中的文件默认被阻止。"
  },
  {
    "word": "zoo",
    "phonetic": "/zuː/",
    "pos": "n",
    "meaning": "动物园",
    "example": "The shopping center was a zoo the week before Christmas.",
    "exampleTranslation": "圣诞节前一周，购物中心像动物园一样拥挤。"
  },
  {
    "word": "zoom",
    "phonetic": "/zuːm/",
    "pos": "v",
    "meaning": "摄象机移动",
    "example": "prices zoomed",
    "exampleTranslation": "价格飙升"
  }
]
