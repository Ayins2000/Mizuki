/**
 * 前额叶切除手术相关类型定义
 * 前额叶切除手术，又称脑白质切除术、额叶切断术，是神经外科史上极具争议的手术
 */

// 手术基础信息类型
interface PrefrontalLobotomyBase {
  // 手术全称
  fullName: string;
  // 手术别称
  alias: string[];
  // 手术核心定义
  definition: string;
}

// 手术发展历史节点类型
interface LobotomyHistoryNode {
  year: number;
  event: string;
  significance: string;
}

// 手术流程步骤类型
interface LobotomyProcedureStep {
  step: number;
  content: string;
  // 传统标准术式/冰锥疗法（简化版）
  type: 'standard' | 'ice-pick';
}

// 手术适应症类型
interface LobotomyIndication {
  disease: string;
  // 适用场景说明
  applicableScene: string;
}

// 手术危害与后遗症类型
interface LobotomyHarm {
  symptom: string;
  manifestation: string;
}

// 手术现状类型
interface LobotomyCurrentSituation {
  status: 'abandoned' | 'banned';
  abandonTime: string;
  reason: string[];
  modernReplacement: string;
}

/**
 * 前额叶切除手术完整信息对象
 */
const PrefrontalLobotomy: PrefrontalLobotomyBase & {
  history: LobotomyHistoryNode[];
  procedure: LobotomyProcedureStep[];
  indications: LobotomyIndication[];
  harms: LobotomyHarm[];
  currentSituation: LobotomyCurrentSituation;
  comment: string;
} = {
  fullName: "前额叶白质切除术（测试文章，由AI编写",
  alias: ["额叶切断术", "脑叶切除术", "冰锥疗法（简化版）"],
  definition: "一种通过外科手术切除或破坏大脑前额叶皮层组织，切断前额叶与大脑其他区域神经连接，试图治疗精神疾病的神经外科手术，曾被广泛用于精神科临床，后因极高的致残致死率被全面摒弃",
  // 手术发展历史
  history: [
    {
      year: 1935,
      event: "葡萄牙医生安东尼奥·埃加斯·莫尼兹首次实施前额叶白质切除术，用于治疗重度精神疾病",
      significance: "开创了精神疾病外科手术治疗的先河，该医生因此获得1949年诺贝尔生理学或医学奖"
    },
    {
      year: 1936,
      event: "美国医生沃尔特·弗里曼与詹姆斯·沃茨改良手术，推出标准前额叶切除术",
      significance: "让手术在美国精神科临床快速推广"
    },
    {
      year: 1945,
      event: "弗里曼推出经眼眶额叶切除术（冰锥疗法），简化手术流程，无需开颅",
      significance: "手术门槛大幅降低，被滥用至各类精神障碍甚至行为问题人群，导致大量悲剧"
    },
    {
      year: 1950年代后,
      event: "抗精神病药物陆续问世，手术副作用大量曝光，各国逐步叫停该手术",
      significance: "前额叶切除手术开始被淘汰，成为医学史上的反面案例"
    }
  ],
  // 手术具体流程
  procedure: [
    {
      step: 1,
      content: "术前准备：对患者进行基础身体检查，固定头部，传统术式需进行全身麻醉，冰锥疗法可采用电痉挛诱导无意识",
      type: "standard"
    },
    {
      step: 2,
      content: "开颅/穿刺：标准术式需在颅骨钻孔或开颅，暴露前额叶；冰锥疗法直接将冰锥状器械从眼眶上方刺入，穿透眶顶抵达大脑",
      type: "both"
    },
    {
      step: 3,
      content: "神经离断：使用器械切断或破坏前额叶与丘脑、大脑其他区域的神经纤维连接，部分术式直接切除部分前额叶组织",
      type: "both"
    },
    {
      step: 4,
      content: "术后处理：标准术式进行颅骨缝合、伤口包扎；冰锥疗法仅需简单处理眼部创口，手术全程仅5-10分钟",
      type: "both"
    }
  ],
  // 最初宣称的手术适应症
  indications: [
    {
      disease: "精神分裂症",
      applicableScene: "药物治疗无效、出现严重幻觉、暴力倾向的重度患者"
    },
    {
      disease: "重度躁郁症、强迫症",
      applicableScene: "顽固性、无法通过心理和药物控制的极端情绪与行为障碍"
    },
    {
      disease: "其他精神障碍",
      applicableScene: "严重抑郁症、焦虑症、行为异常，甚至被滥用至儿童行为问题、智力障碍人群"
    }
  ],
  // 手术主要危害与后遗症
  harms: [
    {
      symptom: "人格彻底改变",
      manifestation: "患者变得情感淡漠、麻木不仁，失去喜怒哀乐、羞耻心与同理心，丧失独立思考与决策能力"
    },
    {
      symptom: "认知功能严重衰退",
      manifestation: "记忆力大幅下降、注意力无法集中、智力减退，失去学习与工作能力"
    },
    {
      symptom: "行为能力退化",
      manifestation: "出现生活不能自理、冲动迟钝、步态异常，部分患者变得呆滞如“行尸走肉”"
    },
    {
      symptom: "致死与严重并发症",
      manifestation: "手术感染、脑出血、脑水肿等并发症，术后死亡率高，部分患者终身残疾"
    }
  ],
  // 手术当前现状
  currentSituation: {
    status: "abandoned",
    abandonTime: "20世纪70年代后",
    reason: [
      "极高的致残率、死亡率，术后患者生活质量极差，违背医学伦理",
      "抗精神病药物的研发成功，为精神疾病提供了更安全有效的治疗方式",
      "大量手术悲剧曝光，引发医学界与社会的强烈谴责"
    ],
    modernReplacement: "现代精神疾病治疗以药物治疗、心理治疗、物理治疗为主，神经外科仅采用精准度极高、微创的脑深部电刺激等技术治疗极少数顽固性病例，绝不进行大范围额叶切除"
  },
  comment: "前额叶切除手术是医学史上极具争议的“黑历史”，它曾因看似能控制精神症状被追捧，甚至斩获诺贝尔奖，但其粗暴的手术方式、毁灭性的后遗症，最终被证明是违背医学初衷的错误实践，也为现代医学伦理与精神疾病治疗提供了深刻的警示：医学治疗必须以保障患者生命质量与尊严为核心，严禁盲目追求症状控制而忽视患者权益。"
};

// 导出手术信息，供其他模块使用
export default PrefrontalLobotomy;
