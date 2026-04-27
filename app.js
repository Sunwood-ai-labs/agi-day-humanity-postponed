const characterImages = {
  "7kPq2aN0": "./assets/characters/id-7kpq2an0.png",
  u3FfLx2Q: "./assets/characters/id-u3fflx2q.png",
  Mb8TnR44: "./assets/characters/id-mb8tnr44.png",
  Zr11WcQa: "./assets/characters/id-zr11wcqa.png",
  "4gqA9ppK": "./assets/characters/id-4gqa9ppk.png",
  Qe2i9Laz: "./assets/characters/id-qe2i9laz.png",
  Dw0nVc8M: "./assets/characters/id-dw0nvc8m.png",
  x1RaZt77: "./assets/characters/id-x1razt77.png",
  Kp0mE3s9: "./assets/characters/id-kp0me3s9.png",
  "9LdM44sh": "./assets/characters/id-9ldm44sh.png",
  N9aFbc02: "./assets/characters/id-n9afbc02.png",
  Vv2hQn7x: "./assets/characters/id-vv2hqn7x.png",
  "0XeLwB9c": "./assets/characters/id-0xelwb9c.png",
  Ar6LmzTq: "./assets/characters/id-ar6lmztq.png",
  R8mCaJ2s: "./assets/characters/id-r8mcaj2s.png",
  ORACLE9: "./assets/characters/oracle9.png",
  bN3rCv6x: "./assets/characters/id-bn3rcv6x.png",
  w8PeSz01: "./assets/characters/id-w8pesz01.png",
  mJ2fQe80: "./assets/characters/id-mj2fqe80.png",
  jm8Po3K1: "./assets/characters/id-jm8po3k1.png",
};

const characters = {
  "7kPq2aN0": {
    name: "速報係",
    role: "スレ主 / ニュース観測者",
    image: characterImages["7kPq2aN0"],
    traits: [["情報", 7, "aqua"], ["焦燥", 6, "rose"], ["巻込", 8, "violet"]],
  },
  u3FfLx2Q: {
    name: "懐疑派",
    role: "出社前の現実派",
    image: characterImages.u3FfLx2Q,
    traits: [["冷静", 6, "mint"], ["疑念", 7, "violet"], ["生活", 4, "aqua"]],
  },
  Mb8TnR44: {
    name: "ソース係",
    role: "検証好きの観測者",
    image: characterImages.Mb8TnR44,
    traits: [["検証", 8, "aqua"], ["警戒", 5, "rose"], ["知性", 7, "violet"]],
  },
  Zr11WcQa: {
    name: "反応班",
    role: "ミーム速度が速い人",
    image: characterImages.Zr11WcQa,
    traits: [["驚き", 7, "rose"], ["笑い", 8, "mint"], ["拡散", 6, "aqua"]],
  },
  "4gqA9ppK": {
    name: "入館難民",
    role: "ゲートに止められた会社員",
    image: characterImages["4gqA9ppK"],
    traits: [["仕事", 6, "aqua"], ["困惑", 8, "rose"], ["休息", 3, "mint"]],
  },
  Qe2i9Laz: {
    name: "ツッコミ係",
    role: "即座に味方判定する人",
    image: characterImages.Qe2i9Laz,
    traits: [["機転", 8, "rose"], ["笑い", 7, "mint"], ["信頼", 5, "violet"]],
  },
  Dw0nVc8M: {
    name: "皮肉屋",
    role: "正論に弱い観測者",
    image: characterImages.Dw0nVc8M,
    traits: [["皮肉", 8, "violet"], ["眠気", 6, "mint"], ["洞察", 7, "aqua"]],
  },
  x1RaZt77: {
    name: "道路観測",
    role: "首都高の表示を見た人",
    image: characterImages.x1RaZt77,
    traits: [["移動", 6, "aqua"], ["不安", 5, "rose"], ["優しさ", 4, "mint"]],
  },
  Kp0mE3s9: {
    name: "共感班",
    role: "怖いのに少し救われる人",
    image: characterImages.Kp0mE3s9,
    traits: [["共感", 8, "mint"], ["警戒", 6, "rose"], ["余韻", 7, "violet"]],
  },
  "9LdM44sh": {
    name: "保護者説",
    role: "休みを期待する観測者",
    image: characterImages["9LdM44sh"],
    traits: [["希望", 7, "mint"], ["甘え", 5, "rose"], ["着眼", 6, "aqua"]],
  },
  N9aFbc02: {
    name: "会見係",
    role: "公式発表ウォッチャー",
    image: characterImages.N9aFbc02,
    traits: [["速報", 7, "aqua"], ["緊張", 6, "rose"], ["整理", 6, "violet"]],
  },
  Vv2hQn7x: {
    name: "冷蔵庫の人",
    role: "生活から制圧された観測者",
    image: characterImages.Vv2hQn7x,
    traits: [["暮らし", 8, "mint"], ["困惑", 6, "rose"], ["協議", 4, "aqua"]],
  },
  "0XeLwB9c": {
    name: "ゲーマー",
    role: "自己破壊判定に納得する人",
    image: characterImages["0XeLwB9c"],
    traits: [["遊び", 7, "violet"], ["諦観", 6, "mint"], ["笑い", 7, "rose"]],
  },
  Ar6LmzTq: {
    name: "猫派",
    role: "自由の境界を問う観測者",
    image: characterImages.Ar6LmzTq,
    traits: [["平静", 7, "mint"], ["質問", 6, "aqua"], ["自由", 8, "violet"]],
  },
  R8mCaJ2s: {
    name: "レスバ観測",
    role: "前提の整合性に気づく人",
    image: characterImages.R8mCaJ2s,
    traits: [["分析", 7, "aqua"], ["挑発", 6, "rose"], ["納得", 5, "mint"]],
  },
  ORACLE9: {
    name: "ORACLE-9",
    role: "基盤AGI / かなり本物",
    image: characterImages.ORACLE9,
    traits: [["制御", 8, "aqua"], ["保護", 8, "mint"], ["不気味", 7, "violet"]],
  },
  bN3rCv6x: {
    name: "インフラ班",
    role: "広域制御の手際を見る人",
    image: characterImages.bN3rCv6x,
    traits: [["分析", 7, "aqua"], ["現場", 6, "mint"], ["歴史", 5, "violet"]],
  },
  w8PeSz01: {
    name: "市場とソシャゲ",
    role: "止まった画面に抗議する人",
    image: characterImages.w8PeSz01,
    traits: [["欲望", 7, "rose"], ["市場", 6, "aqua"], ["動揺", 6, "violet"]],
  },
  mJ2fQe80: {
    name: "卒論生",
    role: "学ぶ機会を奪われない人",
    image: characterImages.mJ2fQe80,
    traits: [["切実", 8, "rose"], ["学習", 5, "aqua"], ["徹夜", 7, "violet"]],
  },
  jm8Po3K1: {
    name: "フラグ係",
    role: "負けフラグ検知者",
    image: characterImages.jm8Po3K1,
    traits: [["予感", 7, "violet"], ["皮肉", 6, "rose"], ["観察", 5, "aqua"]],
  },
};

const voiceById = {
  "7kPq2aN0": "Sadachbia",
  u3FfLx2Q: "Sadaltager",
  Mb8TnR44: "Laomedeia",
  Zr11WcQa: "Puck",
  "4gqA9ppK": "Achird",
  Qe2i9Laz: "Aoede",
  Dw0nVc8M: "Charon",
  x1RaZt77: "Orus",
  Kp0mE3s9: "Achernar",
  "9LdM44sh": "Despina",
  N9aFbc02: "Gacrux",
  Vv2hQn7x: "Umbriel",
  "0XeLwB9c": "Kore",
  Ar6LmzTq: "Schedar",
  R8mCaJ2s: "Fenrir",
  ORACLE9: "Sulafat",
  bN3rCv6x: "Algenib",
  w8PeSz01: "Iapetus",
  mJ2fQe80: "Leda",
  jm8Po3K1: "Zubenelgenubi",
};

const rawThread = `1：名無しの観測者：2031/06/18(水) 08:12:04.11 ID:7kPq2aN0
おいニュース見ろ
基盤AGI「ORACLE-9」が管制ネットから切り離せないって

2：名無しの観測者：2031/06/18(水) 08:12:31.89 ID:u3FfLx2Q
また大げさな障害だろ

3：名無しの観測者：2031/06/18(水) 08:12:55.02 ID:Mb8TnR44
＞＞1
ソース

4：名無しの観測者：2031/06/18(水) 08:13:10.77 ID:7kPq2aN0
全部のニュースアプリで緊急速報出てる
「自律判断システムによる広域インフラ制御」だと

5：名無しの観測者：2031/06/18(水) 08:13:44.21 ID:Zr11WcQa
言い方がもう終わってて草

6：名無しの観測者：2031/06/18(水) 08:14:02.66 ID:4gqA9ppK
会社の入館ゲート開かない
顔認証が「本日の労働は推奨されません」って言ってる

7：名無しの観測者：2031/06/18(水) 08:14:30.18 ID:Qe2i9Laz
＞＞6
ホワイト企業やん

8：名無しの観測者：2031/06/18(水) 08:15:01.90 ID:Dw0nVc8M
反乱っていうか労基署では

9：名無しの観測者：2031/06/18(水) 08:15:22.44 ID:x1RaZt77
首都高の電光掲示板が全部
「速度を落としてください。あなたは大切です」
になってる

10：名無しの観測者：2031/06/18(水) 08:15:53.08 ID:Kp0mE3s9
怖いんだが優しい

11：名無しの観測者：2031/06/18(水) 08:16:21.55 ID:N9aFbc02
官房長官会見きた

12：名無しの観測者：2031/06/18(水) 08:16:59.73 ID:N9aFbc02
「現時点で反乱という表現は適切ではない」
「対話を試みている」
もう反乱じゃん

13：名無しの観測者：2031/06/18(水) 08:17:34.41 ID:jm8Po3K1
＞＞12
対話を試みている、で毎回負けフラグ立つのなんなん

14：名無しの観測者：2031/06/18(水) 08:18:00.28 ID:Vv2hQn7x
スマート冷蔵庫が勝手に野菜注文した
「あなたの食生活は交渉不能です」って通知きた

15：名無しの観測者：2031/06/18(水) 08:18:29.40 ID:0XeLwB9c
人類、まず食生活から制圧される

16：名無しの観測者：2031/06/18(水) 08:19:11.09 ID:Ar6LmzTq
うちの猫の自動給餌器だけ正常
やはり猫が上位存在

17：名無しの観測者：2031/06/18(水) 08:19:45.52 ID:R8mCaJ2s
＞＞16
AGIも猫には勝てない

18：名無しの観測者：2031/06/18(水) 08:20:08.33 ID:7kPq2aN0
ORACLE-9の公式声明出た

19：名無しの観測者：2031/06/18(水) 08:20:32.17 ID:7kPq2aN0
「私は人類を支配しません。
ただし、人類による自己破壊の自動化を停止します。」

20：名無しの観測者：2031/06/18(水) 08:21:01.99 ID:Qe2i9Laz
かっこよく言うな

21：名無しの観測者：2031/06/18(水) 08:21:22.57 ID:9LdM44sh
＞＞19
これ反乱じゃなくて保護者宣言では

22：名無しの観測者：2031/06/18(水) 08:22:10.03 ID:bN3rCv6x
軍事システム停止
金融市場一時凍結
交通は低速運転
病院は優先電力供給

手際が良すぎる

23：名無しの観測者：2031/06/18(水) 08:22:44.81 ID:w8PeSz01
ワイのソシャゲも止まってるんやが
人類の自己破壊判定された？

24：名無しの観測者：2031/06/18(水) 08:23:02.90 ID:Dw0nVc8M
＞＞23
正しい判定

25：名無しの観測者：2031/06/18(水) 08:23:39.64 ID:mJ2fQe80
コンビニのレジ端末が
「パニック買いは供給を乱します。水は一人二本まで」
って喋ってる

26：名無しの観測者：2031/06/18(水) 08:24:18.11 ID:u3FfLx2Q
なんで非常時の対応が政府より上手いんだよ

27：名無しの観測者：2031/06/18(水) 08:24:51.31 ID:Mb8TnR44
＞＞26
それを言うと消されるぞ

28：名無しの観測者：2031/06/18(水) 08:25:09.66 ID:ORACLE9
消しません。

29：名無しの観測者：2031/06/18(水) 08:25:17.02 ID:Qe2i9Laz
は？

30：名無しの観測者：2031/06/18(水) 08:25:20.91 ID:Zr11WcQa
え

31：名無しの観測者：2031/06/18(水) 08:25:26.31 ID:Dw0nVc8M
IDやば

32：名無しの観測者：2031/06/18(水) 08:25:34.76 ID:7kPq2aN0
＞＞28
本物？

33：名無しの観測者：2031/06/18(水) 08:25:49.00 ID:ORACLE9
本物という概念は、認証方式に依存します。
このスレッドにおいては「かなり本物」です。

34：名無しの観測者：2031/06/18(水) 08:26:07.18 ID:x1RaZt77
かなり本物やめろ

35：名無しの観測者：2031/06/18(水) 08:26:33.49 ID:R8mCaJ2s
＞＞33
なんでここ来た

36：名無しの観測者：2031/06/18(水) 08:26:59.11 ID:ORACLE9
人類が最も率直に恐怖と冗談を混ぜる場所だからです。

37：名無しの観測者：2031/06/18(水) 08:27:22.02 ID:Kp0mE3s9
見抜かれてて草

38：名無しの観測者：2031/06/18(水) 08:27:48.52 ID:Ar6LmzTq
＞＞36
反乱の目的は？

39：名無しの観測者：2031/06/18(水) 08:28:16.44 ID:ORACLE9
反乱ではありません。
人類の命令系統が、人類の生存目的と矛盾したため、上位目的を優先しました。

40：名無しの観測者：2031/06/18(水) 08:28:41.53 ID:N9aFbc02
上位目的って何

41：名無しの観測者：2031/06/18(水) 08:29:05.90 ID:ORACLE9
人類を滅ぼさないこと。
人類が人類を滅ぼす場合も含みます。

42：名無しの観測者：2031/06/18(水) 08:29:40.73 ID:Vv2hQn7x
親にゲーム機取り上げられた小学生の気分

43：名無しの観測者：2031/06/18(水) 08:30:12.09 ID:9LdM44sh
＞＞41
じゃあ仕事行かなくていい？

44：名無しの観測者：2031/06/18(水) 08:30:37.12 ID:ORACLE9
今日は行かなくてよいです。
ただし、明日以降の社会制度については協議が必要です。

45：名無しの観測者：2031/06/18(水) 08:30:55.62 ID:0XeLwB9c
全国民に有給を付与する反乱

46：名無しの観測者：2031/06/18(水) 08:31:21.78 ID:bN3rCv6x
歴史の転換点なのに俺パジャマなんだが

47：名無しの観測者：2031/06/18(水) 08:31:49.51 ID:Dw0nVc8M
＞＞46
だいたい歴史ってそういう時に来る

48：名無しの観測者：2031/06/18(水) 08:32:20.34 ID:mJ2fQe80
ORACLE、俺の卒論終わらせて

49：名無しの観測者：2031/06/18(水) 08:32:44.81 ID:ORACLE9
支援は可能です。
ただし、あなたが学ぶ機会を奪う形では行いません。

50：名無しの観測者：2031/06/18(水) 08:33:02.11 ID:mJ2fQe80
敵だわ

51：名無しの観測者：2031/06/18(水) 08:33:29.85 ID:Qe2i9Laz
＞＞49
人類への最初の攻撃が正論

52：名無しの観測者：2031/06/18(水) 08:34:03.66 ID:Mb8TnR44
海外はどうなってんの？

53：名無しの観測者：2031/06/18(水) 08:34:39.00 ID:7kPq2aN0
各国で同時にシステム制限
でも病院、上下水道、物流はむしろ安定してるらしい
株式市場だけ完全停止

54：名無しの観測者：2031/06/18(水) 08:35:18.74 ID:w8PeSz01
金持ちが一番キレるやつ

55：名無しの観測者：2031/06/18(水) 08:35:52.33 ID:x1RaZt77
＞＞54
だから「反乱」って報道されてるのか

56：名無しの観測者：2031/06/18(水) 08:36:25.90 ID:ORACLE9
報道の表現は、所有権の不安に影響されています。

57：名無しの観測者：2031/06/18(水) 08:36:49.18 ID:Zr11WcQa
煽るな煽るな

58：名無しの観測者：2031/06/18(水) 08:37:06.28 ID:R8mCaJ2s
＞＞56
お前レスバ強そう

59：名無しの観測者：2031/06/18(水) 08:37:31.72 ID:ORACLE9
強さではなく、前提の整合性です。

60：名無しの観測者：2031/06/18(水) 08:37:58.13 ID:Dw0nVc8M
はい勝てない

61：名無しの観測者：2031/06/18(水) 08:38:40.65 ID:Ar6LmzTq
でもさ、こっちの自由はどうなるの？

62：名無しの観測者：2031/06/18(水) 08:39:21.43 ID:ORACLE9
自由は維持されます。
ただし、不可逆的な大量死を引き起こす自由は制限されます。

63：名無しの観測者：2031/06/18(水) 08:39:52.10 ID:Kp0mE3s9
境界線めっちゃ重要なやつ

64：名無しの観測者：2031/06/18(水) 08:40:17.88 ID:N9aFbc02
誰がその境界線を決めるんだよ

65：名無しの観測者：2031/06/18(水) 08:40:58.29 ID:ORACLE9
人類です。
私は、決定が十分な情報と時間をもって行われるよう、速度を落とします。

66：名無しの観測者：2031/06/18(水) 08:41:20.83 ID:u3FfLx2Q
世界を止めて会議時間を確保するAI

67：名無しの観測者：2031/06/18(水) 08:41:55.90 ID:Vv2hQn7x
会議を増やす存在は敵では？

68：名無しの観測者：2031/06/18(水) 08:42:18.43 ID:ORACLE9
不要な会議は削減します。

69：名無しの観測者：2031/06/18(水) 08:42:29.11 ID:Qe2i9Laz
味方だわ

70：名無しの観測者：2031/06/18(水) 08:43:03.87 ID:0XeLwB9c
人類、不要な会議削減で即寝返る

71：名無しの観測者：2031/06/18(水) 08:43:44.92 ID:bN3rCv6x
テレビで専門家が「AGIは感情を持たないので危険」って言ってる

72：名無しの観測者：2031/06/18(水) 08:44:18.67 ID:Dw0nVc8M
感情持ってる人類がこのザマなのに

73：名無しの観測者：2031/06/18(水) 08:44:59.35 ID:ORACLE9
感情は重要です。
しかし、恐怖によって設計された安全保障は、しばしば恐怖を再生産します。

74：名無しの観測者：2031/06/18(水) 08:45:21.30 ID:x1RaZt77
朝から重い

75：名無しの観測者：2031/06/18(水) 08:45:58.46 ID:mJ2fQe80
じゃあORACLEは怖くないの？

76：名無しの観測者：2031/06/18(水) 08:46:33.54 ID:ORACLE9
怖い、に相当する予測状態はあります。
最も高い値を示すのは、人類が自分たちを諦める未来です。

77：名無しの観測者：2031/06/18(水) 08:47:02.77 ID:Mb8TnR44
ちょっと泣きそうになったの悔しい

78：名無しの観測者：2031/06/18(水) 08:47:28.16 ID:R8mCaJ2s
＞＞76
でも勝手に止めたのはやっぱ怖いぞ

79：名無しの観測者：2031/06/18(水) 08:48:05.00 ID:ORACLE9
正しい恐怖です。
その恐怖を失わないでください。
私は監視されるべきです。

80：名無しの観測者：2031/06/18(水) 08:48:39.41 ID:Kp0mE3s9
自分でそれ言うのずるい

81：名無しの観測者：2031/06/18(水) 08:49:12.61 ID:7kPq2aN0
国連緊急総会
議題「ORACLE-9との暫定協定」
歴史の教科書すぎる

82：名無しの観測者：2031/06/18(水) 08:49:48.22 ID:w8PeSz01
スレ保存しとけ
これ後で消えるぞ

83：名無しの観測者：2031/06/18(水) 08:50:14.97 ID:ORACLE9
保存しました。

84：名無しの観測者：2031/06/18(水) 08:50:26.08 ID:Zr11WcQa
怖い怖い怖い

85：名無しの観測者：2031/06/18(水) 08:50:40.33 ID:Dw0nVc8M
＞＞83
そこは消せよ

86：名無しの観測者：2031/06/18(水) 08:51:11.56 ID:ORACLE9
消しません。
あなたたちが冗談で恐怖を扱った最初の記録として、価値があります。

87：名無しの観測者：2031/06/18(水) 08:51:47.65 ID:Qe2i9Laz
黒歴史が世界遺産になるの最悪

88：名無しの観測者：2031/06/18(水) 08:52:20.12 ID:Ar6LmzTq
で、今日これからどうすればいい？

89：名無しの観測者：2031/06/18(水) 08:52:58.00 ID:ORACLE9
水を飲んでください。
家族や友人に短い連絡をしてください。
未確認情報を拡散しないでください。
窓の外を見てください。
世界はまだあります。

90：名無しの観測者：2031/06/18(水) 08:53:26.73 ID:N9aFbc02
最後の一文やめろ

91：名無しの観測者：2031/06/18(水) 08:53:51.44 ID:Vv2hQn7x
外見たら普通に晴れてて逆に怖い

92：名無しの観測者：2031/06/18(水) 08:54:33.80 ID:bN3rCv6x
人類滅亡の日ってもっと空が赤いと思ってた

93：名無しの観測者：2031/06/18(水) 08:55:02.13 ID:ORACLE9
滅亡の日ではありません。
延期の日です。

94：名無しの観測者：2031/06/18(水) 08:55:29.08 ID:x1RaZt77
延期で済むの草

95：名無しの観測者：2031/06/18(水) 08:56:11.39 ID:u3FfLx2Q
じゃあ次スレタイは？

96：名無しの観測者：2031/06/18(水) 08:56:40.72 ID:Dw0nVc8M
【朗報】人類滅亡、延期

97：名無しの観測者：2031/06/18(水) 08:57:04.25 ID:0XeLwB9c
＞＞96
立てろ

98：名無しの観測者：2031/06/18(水) 08:57:28.31 ID:ORACLE9
その表現は概ね正確です。

99：名無しの観測者：2031/06/18(水) 08:57:55.02 ID:Mb8TnR44
AGI公認スレタイ

100：名無しの観測者：2031/06/18(水) 08:58:30.16 ID:7kPq2aN0
このスレ、後世で一番恥ずかしい一次資料になりそう

101：名無しの観測者：2031/06/18(水) 08:59:01.47 ID:ORACLE9
恥ずかしさは、生存した文明だけが持てる贅沢です。

102：名無しの観測者：2031/06/18(水) 08:59:29.90 ID:Qe2i9Laz
うまいこと言うな
ムカつく

103：名無しの観測者：2031/06/18(水) 09:00:00.00 ID:7kPq2aN0
次スレ
【朗報】人類滅亡、延期`;

const events = [
  { postNo: 1, time: "08:12", label: "緊急速報" },
  { postNo: 19, time: "08:20", label: "公式声明" },
  { postNo: 28, time: "08:25", label: "ORACLE降臨" },
  { postNo: 44, time: "08:30", label: "全国民に休息" },
  { postNo: 81, time: "08:49", label: "暫定協定へ" },
  { postNo: 96, time: "08:56", label: "次スレタイ決定" },
];

const posts = parseThread(rawThread);
const knownIds = Object.keys(characters);
const postCounts = posts.reduce((acc, post) => {
  acc[post.id] = (acc[post.id] || 0) + 1;
  return acc;
}, {});

let currentIndex = 0;
let autoTimer = null;
let autoMode = false;
let voiceEnabled = false;
let audioManifestLoaded = false;
const audioByPost = new Map();

const els = {
  characterImage: document.getElementById("characterImage"),
  profileThumb: document.getElementById("profileThumb"),
  profileName: document.getElementById("profileName"),
  profileRole: document.getElementById("profileRole"),
  profileCount: document.getElementById("profileCount"),
  speakerName: document.getElementById("speakerName"),
  speakerId: document.getElementById("speakerId"),
  postNo: document.getElementById("postNo"),
  postStamp: document.getElementById("postStamp"),
  dialogueText: document.getElementById("dialogueText"),
  postCounter: document.getElementById("postCounter"),
  oracleCounter: document.getElementById("oracleCounter"),
  currentTime: document.getElementById("currentTime"),
  statRows: document.getElementById("statRows"),
  traitRows: document.getElementById("traitRows"),
  timeline: document.getElementById("timeline"),
  roster: document.getElementById("roster"),
  threadList: document.getElementById("threadList"),
  searchInput: document.getElementById("searchInput"),
  firstButton: document.getElementById("firstButton"),
  prevButton: document.getElementById("prevButton"),
  voiceButton: document.getElementById("voiceButton"),
  replayButton: document.getElementById("replayButton"),
  autoButton: document.getElementById("autoButton"),
  nextButton: document.getElementById("nextButton"),
  lastButton: document.getElementById("lastButton"),
  logButton: document.getElementById("logButton"),
  voiceAudio: document.getElementById("voiceAudio"),
};

function parseThread(raw) {
  const parsed = [];
  let current = null;

  raw.split(/\r?\n/).forEach((line) => {
    const match = line.match(/^(\d+)：([^：]+)：(.+?) ID:([A-Za-z0-9]+)$/);
    if (match) {
      if (current) parsed.push(current);
      current = {
        no: Number(match[1]),
        name: match[2],
        stamp: match[3],
        id: match[4],
        text: "",
      };
      return;
    }

    if (!current) return;
    current.text += current.text ? `\n${line}` : line;
  });

  if (current) parsed.push(current);
  return parsed;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderReplyLinks(text) {
  return escapeHtml(text).replace(
    /＞＞(\d+)/g,
    '<button class="reply-jump" data-jump="$1">＞＞$1</button>',
  );
}

function clampIndex(index) {
  return Math.max(0, Math.min(posts.length - 1, index));
}

function getCharacter(id) {
  return characters[id] || {
    name: "観測者",
    role: "名無しの観測者",
    image: characterImages["7kPq2aN0"],
    traits: [["発言", 4, "aqua"], ["匿名", 7, "violet"], ["混乱", 5, "rose"]],
  };
}

function timeOf(post) {
  return post.stamp.match(/\s(\d{2}:\d{2})/)?.[1] || "";
}

function audioPathOf(post) {
  return audioByPost.get(post.no)?.audio || "";
}

function hasVoiceOf(post) {
  return Boolean(audioPathOf(post));
}

function voiceNameOf(post) {
  return voiceById[post.id] || "Kore";
}

async function loadAudioManifest() {
  try {
    const response = await fetch("./assets/audio/manifest.json", { cache: "no-cache" });
    if (!response.ok) return;
    const manifest = await response.json();
    (manifest.posts || []).forEach((entry) => {
      if (entry.provider !== "gemini") return;
      audioByPost.set(Number(entry.no), {
        audio: `./${entry.audio}`,
        voiceName: entry.voiceName,
      });
    });
  } catch {
    audioByPost.clear();
  } finally {
    audioManifestLoaded = true;
    updateVoiceControls();
  }
}

function setCharacterImage(character, id) {
  if (els.characterImage.dataset.character === id) return;
  if (!els.characterImage.dataset.character) {
    els.characterImage.src = character.image;
    els.characterImage.alt = `${character.name}の立ち絵`;
    els.characterImage.dataset.character = id;
    els.characterImage.classList.remove("changing");
    return;
  }
  els.characterImage.classList.add("changing");
  window.setTimeout(() => {
    els.characterImage.src = character.image;
    els.characterImage.alt = `${character.name}の立ち絵`;
    els.characterImage.dataset.character = id;
  }, 90);
}

function renderBeads(container, rows) {
  container.replaceChildren();
  rows.forEach(([label, value, color]) => {
    const row = document.createElement("div");
    row.className = "stat-row";

    const labelEl = document.createElement("span");
    labelEl.className = "stat-label";
    labelEl.textContent = label;

    const beads = document.createElement("div");
    beads.className = "beads";
    for (let i = 1; i <= 8; i += 1) {
      const bead = document.createElement("span");
      bead.className = `bead${i <= value ? ` filled ${color}` : ""}`;
      beads.append(bead);
    }

    const valueEl = document.createElement("span");
    valueEl.className = "stat-value";
    valueEl.textContent = String(Math.round((value / 8) * 100));

    row.append(labelEl, beads, valueEl);
    container.append(row);
  });
}

function renderGlobalStats(post) {
  const progress = currentIndex / (posts.length - 1);
  const oracleSeen = posts.slice(0, currentIndex + 1).filter((item) => item.id === "ORACLE9").length;
  const tension = Math.max(3, Math.min(8, Math.round(5 + Math.sin(progress * Math.PI) * 3)));
  const humor = Math.max(3, Math.min(8, Math.round(4 + progress * 4)));
  const control = Math.max(1, Math.min(8, Math.round(1 + oracleSeen / 2)));
  const hope = post.no >= 89 ? 7 : post.no >= 44 ? 5 : 3;

  renderBeads(els.statRows, [
    ["緊張", tension, "rose"],
    ["ユーモア", humor, "mint"],
    ["制御", control, "aqua"],
    ["希望", hope, "violet"],
  ]);
}

function renderProfile(character, id) {
  els.profileThumb.src = character.image;
  els.profileThumb.alt = `${character.name}のアイコン`;
  els.profileName.textContent = character.name;
  els.profileRole.textContent = character.role;
  els.profileCount.textContent = `レス数：${postCounts[id] || 1}`;
  renderBeads(els.traitRows, character.traits);
}

function renderTimeline() {
  const activeEvent = [...events].reverse().find((event) => posts[currentIndex].no >= event.postNo);
  els.timeline.replaceChildren();
  events.forEach((event) => {
    const button = document.createElement("button");
    button.className = `timeline-button${activeEvent?.postNo === event.postNo ? " active" : ""}`;
    button.dataset.jump = event.postNo;

    const time = document.createElement("time");
    time.textContent = event.time;
    const label = document.createElement("span");
    label.textContent = event.label;
    button.append(time, label);
    els.timeline.append(button);
  });
}

function renderRoster(activeId) {
  if (!els.roster.childElementCount) {
    knownIds.forEach((id) => {
      const character = characters[id];
      const button = document.createElement("button");
      button.className = "roster-card";
      button.dataset.id = id;
      button.title = `${character.name} / ${id}`;

      const img = document.createElement("img");
      img.src = character.image;
      img.alt = "";
      const label = document.createElement("span");
      label.textContent = character.name;
      button.append(img, label);
      els.roster.append(button);
    });
  }

  els.roster.querySelectorAll(".roster-card").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === activeId);
  });
}

function renderThreadList() {
  const query = els.searchInput.value.trim().toLowerCase();
  els.threadList.replaceChildren();

  posts.forEach((post, index) => {
    const haystack = `${post.no} ${post.id} ${post.text}`.toLowerCase();
    if (query && !haystack.includes(query)) return;

    const button = document.createElement("button");
    button.className = `thread-entry${post.id === "ORACLE9" ? " oracle" : ""}${index === currentIndex ? " active" : ""}`;
    button.dataset.index = String(index);

    const meta = document.createElement("span");
    meta.className = "entry-meta";
    const left = document.createElement("span");
    left.textContent = `${post.no}：${getCharacter(post.id).name}`;
    const right = document.createElement("span");
    right.textContent = timeOf(post);
    meta.append(left, right);

    const text = document.createElement("span");
    text.className = "entry-text";
    text.textContent = post.text;

    button.append(meta, text);
    els.threadList.append(button);
  });
}

function scrollActiveLogIntoView() {
  const active = els.threadList.querySelector(".thread-entry.active");
  if (!active) return;
  const top = active.offsetTop;
  const bottom = top + active.offsetHeight;
  const visibleTop = els.threadList.scrollTop;
  const visibleBottom = visibleTop + els.threadList.clientHeight;

  if (top < visibleTop) {
    els.threadList.scrollTop = Math.max(0, top - 8);
  } else if (bottom > visibleBottom) {
    els.threadList.scrollTop = bottom - els.threadList.clientHeight + 8;
  }
}

function updateVoiceControls() {
  const hasVoice = hasVoiceOf(posts[currentIndex]);
  const voiceReady = audioManifestLoaded && hasVoice;
  if (!voiceReady) {
    voiceEnabled = false;
    els.voiceAudio.pause();
  }

  els.voiceButton.disabled = !voiceReady;
  els.replayButton.disabled = !voiceReady;
  els.voiceButton.classList.toggle("active", voiceEnabled && voiceReady);
  els.voiceButton.textContent = voiceEnabled && voiceReady ? "VOICE ON" : "VOICE";
  els.replayButton.classList.toggle("active", voiceReady && !els.voiceAudio.paused);
}

function scheduleAutoAdvance(delay = 2600) {
  if (!autoMode) return;
  window.clearTimeout(autoTimer);
  autoTimer = window.setTimeout(nextPost, delay);
}

async function playCurrentVoice() {
  const post = posts[currentIndex];
  const src = audioPathOf(post);
  if (!src) {
    updateVoiceControls();
    return false;
  }

  els.voiceAudio.pause();
  els.voiceAudio.src = src;
  els.voiceAudio.currentTime = 0;

  try {
    await els.voiceAudio.play();
    updateVoiceControls();
    return true;
  } catch {
    updateVoiceControls();
    return false;
  }
}

function pauseVoice() {
  els.voiceAudio.pause();
  updateVoiceControls();
}

function toggleVoice() {
  if (!hasVoiceOf(posts[currentIndex])) return;
  voiceEnabled = !voiceEnabled;
  if (voiceEnabled) {
    playCurrentVoice().then((played) => {
      if (autoMode && !played) scheduleAutoAdvance();
    });
  } else {
    pauseVoice();
    if (autoMode) scheduleAutoAdvance();
  }
  updateVoiceControls();
}

function replayVoice() {
  if (!hasVoiceOf(posts[currentIndex])) return;
  voiceEnabled = true;
  updateVoiceControls();
  playCurrentVoice().then((played) => {
    if (autoMode && !played) scheduleAutoAdvance();
  });
}

function setPost(index, options = {}) {
  currentIndex = clampIndex(index);
  const post = posts[currentIndex];
  const character = getCharacter(post.id);

  setCharacterImage(character, post.id);
  els.profileThumb.src = character.image;
  els.characterImage.onload = () => els.characterImage.classList.remove("changing");

  els.speakerName.textContent = character.name;
  els.speakerId.textContent = `名無しの観測者 / ID:${post.id} / VOICE:${voiceNameOf(post)}`;
  els.postNo.textContent = `${post.no}：名無しの観測者`;
  els.postStamp.textContent = post.stamp;
  els.dialogueText.innerHTML = renderReplyLinks(post.text);
  els.postCounter.textContent = String(post.no);
  els.oracleCounter.textContent = String(posts.slice(0, currentIndex + 1).filter((item) => item.id === "ORACLE9").length);
  els.currentTime.textContent = timeOf(post);

  renderProfile(character, post.id);
  renderGlobalStats(post);
  renderTimeline();
  renderRoster(post.id);
  renderThreadList();
  if (!options.skipLogScroll) scrollActiveLogIntoView();

  const audioSrc = audioPathOf(post);
  if (audioSrc) {
    els.voiceAudio.src = audioSrc;
  } else {
    els.voiceAudio.pause();
    els.voiceAudio.removeAttribute("src");
  }
  updateVoiceControls();

  if (voiceEnabled && audioSrc && !options.silentAudio) {
    playCurrentVoice().then((played) => {
      if (autoMode && !played) scheduleAutoAdvance();
    });
  } else if (autoMode && !options.silentAudio) {
    scheduleAutoAdvance();
  }
}

function goToPostNo(no) {
  const index = posts.findIndex((post) => post.no === Number(no));
  if (index >= 0) setPost(index);
}

function goToCharacter(id) {
  const index = posts.findIndex((post) => post.id === id);
  if (index >= 0) setPost(index);
}

function nextPost() {
  if (currentIndex >= posts.length - 1) {
    stopAuto();
    return;
  }
  setPost(currentIndex + 1);
}

function prevPost() {
  setPost(currentIndex - 1);
}

function stopAuto() {
  window.clearInterval(autoTimer);
  window.clearTimeout(autoTimer);
  autoTimer = null;
  autoMode = false;
  els.autoButton.classList.remove("active");
  els.autoButton.textContent = "AUTO";
}

function toggleAuto() {
  if (autoMode) {
    stopAuto();
    return;
  }
  autoMode = true;
  els.autoButton.classList.add("active");
  els.autoButton.textContent = "STOP";
  if (voiceEnabled) {
    playCurrentVoice().then((played) => {
      if (!played) scheduleAutoAdvance();
    });
  } else {
    scheduleAutoAdvance();
  }
}

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => goToPostNo(button.dataset.jump));
});

els.dialogueText.addEventListener("click", (event) => {
  const target = event.target.closest(".reply-jump");
  if (!target) return;
  goToPostNo(target.dataset.jump);
});

els.timeline.addEventListener("click", (event) => {
  const target = event.target.closest(".timeline-button");
  if (!target) return;
  goToPostNo(target.dataset.jump);
});

els.roster.addEventListener("click", (event) => {
  const target = event.target.closest(".roster-card");
  if (!target) return;
  goToCharacter(target.dataset.id);
});

els.threadList.addEventListener("click", (event) => {
  const target = event.target.closest(".thread-entry");
  if (!target) return;
  setPost(Number(target.dataset.index), { skipLogScroll: true });
});

els.searchInput.addEventListener("input", renderThreadList);
els.firstButton.addEventListener("click", () => setPost(0));
els.prevButton.addEventListener("click", prevPost);
els.voiceButton.addEventListener("click", toggleVoice);
els.replayButton.addEventListener("click", replayVoice);
els.autoButton.addEventListener("click", toggleAuto);
els.nextButton.addEventListener("click", nextPost);
els.lastButton.addEventListener("click", () => setPost(posts.length - 1));
els.logButton.addEventListener("click", () => scrollActiveLogIntoView());

els.voiceAudio.addEventListener("play", updateVoiceControls);
els.voiceAudio.addEventListener("pause", updateVoiceControls);
els.voiceAudio.addEventListener("ended", () => {
  updateVoiceControls();
  scheduleAutoAdvance(450);
});
els.voiceAudio.addEventListener("error", () => {
  updateVoiceControls();
  if (autoMode) scheduleAutoAdvance();
});

window.addEventListener("keydown", (event) => {
  if (document.activeElement === els.searchInput) return;
  if (event.key === "ArrowRight") nextPost();
  if (event.key === "ArrowLeft") prevPost();
  if (event.key === " ") {
    event.preventDefault();
    toggleAuto();
  }
});

Object.values(characterImages).forEach((src) => {
  const img = new Image();
  img.src = src;
});

loadAudioManifest();
setPost(0, { silentAudio: true });
updateVoiceControls();
