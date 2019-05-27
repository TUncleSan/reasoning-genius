const play = {
  "begin": [
    "这个故事是由现实中不会发生的离奇和无聊的故事组成的。",
    "好孩子们，不要轻易模仿吖！"
  ],
  "part1": {
    "one": [
      "侦探: 这就是案发现场吗?",
      "侦探: 被害人丢了什么吗？",
      "助理: 丢了几个值钱物品，还有内裤",
      "侦探: 原来如此。。我认为犯人拿值钱的物品只是障眼法，真正的目的其实是内裤。嫌疑人带来了吗？",
      "助理: 带来了！我找到了在附近走来走去的可疑男子，以及可能偷走内裤的被害女性的熟人们。",
      "侦探: 原来如此，不亏是我的助手，接下来只要找到证据让犯人暴露，案件就解决了！",
      "助理：是的！"
    ],
    "clickBlack": [
      "助理:这个是什么？",
      "侦探：唔，看起来像是。。。黑色液体的痕迹？",
      "获取道具完成",
      "物品可以通过拖动点击进行使用哦。"
    ]
  },
  "part2": {
    "talkToSuspect": {
      "neikunan": [
        "头戴内裤的男人：真是的，你们有什么证据说我是内裤小偷。。。",
        "侦探：哦，你头上戴着的就是内裤吧？",
        "头戴内裤的男人：啊！？你说啥米？",
        "侦探：我说你现在正戴着内裤呀！",
        "助理：这条内裤的颜色和外形与被害女性一模一样！",
        "头戴内裤的男人：啊啊啊",
        "助理：我看他就是犯人把！真是愚蠢！竟然还敢顶着偷来的内裤！",
        "侦探：等一下，我认为这可能是敌人的陷阱。",
        "助理：哎？",
        "侦探：不管怎样的猪脑子犯人，都不会把失窃物品明晃晃的呆在头上。",
        "侦探：这亏怕是真犯人想把罪转移到他身上，趁他不注意的时候给他戴上的",
        "助理：原来如此！不愧是柯南侦探。"
      ],
      "moxiansheng": [
        "墨先生：怎么了墨？",
        "侦探：你这个样子。。。不用看也知道会喷汁液，案发现场的黑色汁液八成是你留下的吧？",
        "墨先生：不是的墨！我不会喷汁的墨！"
      ],
      "shenmiren": [
        "神秘的男人：干嘛呀突然就把人带到这里给人添乱。。。我到底哪里可疑了！",
        "侦探：可以，你不管怎么看都很可疑呀，为什么你全身都是黑的？",
        "神秘的男人：我生下来就这样好吗？！我受够了！鬼才要在这里待着！我要回家去！！",
        "侦探：如果你现在逃跑的话，我就定你是犯人",
        "神秘的男人：可恶！！我凭什么要天天遭这种怀疑啊！我只是天生长得黑而已啊！"
      ]
    },
    "identifySuspect": {
      "neikunan": {
        talk: [
          "拖动到头戴内裤的男人身上：",
          "侦探：犯人就是你丫！",
          "头戴内裤的男人：啊！？我是冤枉的",
          "侦探：因为你是个蠢货，戴着偷来的内裤沾沾自喜着就被带来了！我的推理绝对没错！",
          "头戴内裤的男人：不！错了啊！",
          "助理：闭嘴！只要南柯侦探指认，你就是犯人没跑了！"
        ],
        result: [
          "就这样，可怜的头戴内裤的男人因为冤罪被警察带走了。"
          "Game over."
        ]
      },
      "moxiansheng": {
        talk: [
          "侦探：你才是真凶！",
          "墨先生：墨？！",
          "侦探：案发现场遗留的黑色汁液，一定是你的！",
          "墨先生：不可能，你搞错了！墨！",
          "助理：闭嘴！只要南柯侦探指认，你就是犯人！",
          "侦探：南柯侦探说的话是没有错的"
        ],
        result: [
          "就这样，可怜的头戴内裤的男人因为冤罪被警察带走了。",
          "Game over."
        ]
      },
      "shenmiren": {
        talk: [
          "侦探：你才是真凶！",
          "神秘的男人：你说什么！?你有什么证据这么说",
          "侦探：现场留下来的这黑色的汁液，就是证据！",
          "神秘的男人：胡说，那种东西我不认识！",
          "侦探：你这全身黑并不是天生的。。而是涂了黑色的颜料，所以有一部分流下来了。",
          "侦探：为了在漆黑的夜里盗取内裤，你就把全身涂黑伪装自己，我说的没错吧！",
          "神秘的男人：什么，为什么你连这个也。。。",
          "侦探：没想到吧？一切都真相大白了。",
          "神秘的男人：可恶。。。我一直以为，像那个漫画的犯人那样变成全黑，就不会暴露。。。"
        ],
        result: [
          "就这样， 真凶被警察带走了。",
          "Clear."
        ]
      }
    }
  },
  "end": {
    "f": [

    ],
    "t": [
      "就这样，真凶被警察带走了。",
      "Clear."
    ]
  }
}

export default play;