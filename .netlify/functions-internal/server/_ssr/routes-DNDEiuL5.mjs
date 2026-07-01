import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNDEiuL5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AI_MODELS = [{
	id: "groq/llama-3.3-70b-versatile",
	label: "Groq — Llama 3.3 70B (مفتاحك الخاص)"
}, {
	id: "google/gemini-3-flash-preview",
	label: "Lovable Cloud — Gemini 3 Flash"
}];
var MODEL_STORAGE_KEY = "acadarchiv_ai_model";
var DEFAULT_MODEL = "groq/llama-3.3-70b-versatile";
function getSelectedModel() {
	try {
		const v = localStorage.getItem(MODEL_STORAGE_KEY);
		if (v && AI_MODELS.some((m) => m.id === v)) return v;
	} catch {}
	return DEFAULT_MODEL;
}
function setSelectedModel(id) {
	try {
		localStorage.setItem(MODEL_STORAGE_KEY, id);
	} catch {}
}
async function callLLM({ system, messages = [], max_tokens = 1024, forceProvider } = {}) {
	const model = getSelectedModel();
	try {
		const resp = await fetch("/api/ai-chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				system,
				messages,
				max_tokens,
				model,
				forceProvider
			})
		});
		const data = await resp.json().catch(() => ({}));
		if (!resp.ok || data?.error) throw new Error(data?.error || `HTTP ${resp.status}`);
		return { content: [{
			type: "text",
			text: data?.content?.[0]?.text || ""
		}] };
	} catch (err) {
		console.error("[callLLM]", model, err);
		return { content: [{
			type: "text",
			text: `حدث خطأ في الاتصال بالذكاء الاصطناعي: ${err.message || err}`
		}] };
	}
}
var CHAPTERS_DATA = [
	{
		id: 1,
		titleAr: "الفصل الأول: أوضاع منطقة الخليج العربي عشية الحرب العالمية الثانية (1918-1939)",
		color: "#3B82F6",
		sections: [
			{
				id: "1-1",
				title: "م1: الموقع الجغرافي وممرات التجارة العالمية في منطقة الخليج العربي"
			},
			{
				id: "1-2",
				title: "م2: بنية الإمارات ومشيخات الخليج العربي السياسية حتى عام 1939"
			},
			{
				id: "1-3",
				title: "م3: مظاهر التنافس الدولي في الخليج العربي قبيل اندلاع الحرب العالمية الثانية"
			},
			{
				id: "1-4",
				title: "م4: الأوضاع الاقتصادية وبداية التغير الاقتصادي قبل اكتشاف النفط واستغلاله"
			}
		]
	},
	{
		id: 2,
		titleAr: "الفصل الثاني: أهمية منطقة الخليج العربي الاستراتيجية والعسكرية إبان الحرب العالمية الثانية",
		color: "#8B5CF6",
		sections: [
			{
				id: "2-1",
				title: "م1: موقع الخليج العربي الاستراتيجي في خطط الحلفاء العسكرية"
			},
			{
				id: "2-1a",
				title: "   ↳ إنشاء وتطوير القواعد البريطانية والأمريكية الجوية والبحرية"
			},
			{
				id: "2-1b",
				title: "   ↳ الأدوار العسكرية للقواعد في حماية طرق النفط والإمدادات"
			},
			{
				id: "2-1c",
				title: "   ↳ التنسيق العسكري بين بريطانيا والولايات المتحدة في الخليج"
			},
			{
				id: "2-2",
				title: "م2: القواعد العسكرية وموانئ الخليج ودورها في العمليات الحربية"
			},
			{
				id: "2-2a",
				title: "   ↳ دور موانئ البحرين والكويت ومسقط في دعم الحلفاء"
			},
			{
				id: "2-2b",
				title: "   ↳ استخدام الطرق البحرية لنقل النفط والعتاد العسكري"
			},
			{
				id: "2-2c",
				title: "   ↳ الأمن البحري ومواجهة التهديدات الألمانية واليابانية في المحيط الهندي"
			},
			{
				id: "2-3",
				title: "م3: السيادة والسيطرة البحرية والأمن العسكري في الخليج إبان الحرب"
			},
			{
				id: "2-3a",
				title: "   ↳ تعزيز السيطرة البحرية البريطانية في الخليج العربي"
			},
			{
				id: "2-3b",
				title: "   ↳ أهمية الخليج في تأمين طرق الملاحة وخطوط الإمداد العسكرية"
			},
			{
				id: "2-3c",
				title: "   ↳ الإجراءات الأمنية والعسكرية لحماية المصالح الاستراتيجية"
			}
		]
	},
	{
		id: 3,
		titleAr: "الفصل الثالث: أثر الحرب العالمية الثانية على الأوضاع السياسية في منطقة الخليج",
		color: "#10B981",
		sections: [
			{
				id: "3-1",
				title: "م1: التغيرات السياسية والإدارية في إمارات الخليج إبان الحرب"
			},
			{
				id: "3-1a",
				title: "   ↳ سياسة الحياد وميل بعض الأطراف الخليجية نحو الحلفاء"
			},
			{
				id: "3-1b",
				title: "   ↳ العلاقات الدبلوماسية مع بريطانيا والولايات المتحدة"
			},
			{
				id: "3-1c",
				title: "   ↳ الدور السياسي للملك عبد العزيز آل سعود في التوازن الإقليمي"
			},
			{
				id: "3-2",
				title: "م2: تأثير الحرب على الوعي السياسي وبداية التحولات الحديثة في الخليج"
			},
			{
				id: "3-2a",
				title: "   ↳ تنامي الوعي السياسي في مجتمعات الخليج خلال سنوات الحرب"
			},
			{
				id: "3-2b",
				title: "   ↳ تأثير المتغيرات الاقتصادية في بروز بوادر التحول الحديث"
			},
			{
				id: "3-2c",
				title: "   ↳ بداية تشكّل علاقات سياسية وإدارية جديدة مهّدت لمرحلة التحديث"
			},
			{
				id: "3-3",
				title: "م3: أثر الحرب على العلاقات الخليجية مع دول الحرب (الحلفاء والمحور)"
			},
			{
				id: "3-3a",
				title: "   ↳ طبيعة العلاقة مع القوى الكبرى أثناء الحرب"
			},
			{
				id: "3-3b",
				title: "   ↳ محاولات دول المحور اختراق النفوذ البريطاني في المنطقة"
			},
			{
				id: "3-3c",
				title: "   ↳ تعزيز النفوذ البريطاني والأمريكي بعد عام 1943م"
			}
		]
	},
	{
		id: 4,
		titleAr: "الفصل الرابع: التحولات الاقتصادية في الخليج إبان الحرب العالمية الثانية",
		color: "#F59E0B",
		sections: [
			{
				id: "4-1",
				title: "م1: أثر الحرب العالمية الثانية في التجارة والملاحة في الخليج"
			},
			{
				id: "4-1a",
				title: "   ↳ تأثير الحرب في حركة التجارة البحرية في الخليج العربي"
			},
			{
				id: "4-1b",
				title: "   ↳ التغيرات التي طرأت على الملاحة وطرق النقل البحري"
			},
			{
				id: "4-1c",
				title: "   ↳ انعكاسات ظروف الحرب في الموانئ والأسواق التجارية"
			},
			{
				id: "4-2",
				title: "م2: النفط في الخليج ودوره في الاستراتيجية الاقتصادية للحلفاء"
			},
			{
				id: "4-2a",
				title: "   ↳ بدايات التنقيب عن النفط في السعودية والبحرين والكويت"
			},
			{
				id: "4-2b",
				title: "   ↳ الشركات الأجنبية والامتيازات النفطية في ظل الحرب"
			},
			{
				id: "4-2c",
				title: "   ↳ النفط كمورد استراتيجي رئيسي للحلفاء أثناء الحرب"
			},
			{
				id: "4-3",
				title: "م3: انعكاسات الحرب على البنية الاقتصادية المحلية في مجتمعات الخليج"
			},
			{
				id: "4-3a",
				title: "   ↳ التغير في حركة التجارة الإقليمية بسبب الحرب"
			},
			{
				id: "4-3b",
				title: "   ↳ تأثير الحصار البحري وارتفاع الطلب العالمي على النفط"
			},
			{
				id: "4-3c",
				title: "   ↳ نشوء البنية التحتية الاقتصادية الحديثة بعد انتهاء الحرب"
			}
		]
	}
];
var SECTION_MAP = {};
CHAPTERS_DATA.forEach((ch) => ch.sections.forEach((s) => {
	SECTION_MAP[s.id] = {
		chapterId: ch.id,
		sectionTitle: s.title
	};
}));
CHAPTERS_DATA.flatMap((ch) => ch.sections.filter((s) => !s.id.includes("a") && !s.id.includes("b") && !s.id.includes("c")));
var DOCS_FROM_INDEX = [
	{
		id: 1,
		title: "دليل الخليج، مجلد II، الخصائص الجغرافية والإحصائية (لوريمر 1908)",
		archiveRef: "IOR/L/PS/20/C91/4",
		chapterId: 1,
		sectionId: "1-1",
		section: "م1: الموقع الجغرافي وممرات التجارة العالمية",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "المرجع الجغرافي الأهم للخليج قبل الحرب — لا غنى عنه لوصف الموقع"
	},
	{
		id: 2,
		title: "مجموعة المعاهدات والالتزامات، المجلد 11 (الخليج ومسقط)",
		archiveRef: "IOR/L/PS/20/G3/12",
		chapterId: 1,
		sectionId: "1-2",
		section: "م2: بنية الإمارات ومشيخات الخليج السياسية حتى 1939",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "نصوص المعاهدات المؤسِّسة: السلم البحري 1853، الأنجلو-قطرية 1916"
	},
	{
		id: 3,
		title: "مذكرة ملخص معاهدات الخليج (جيبسون ومونتيث، بطلب ابن سعود)",
		archiveRef: "IOR/L/PS/18/B387",
		chapterId: 1,
		sectionId: "1-2",
		section: "م2: بنية الإمارات ومشيخات الخليج السياسية حتى 1939",
		priority: "★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "ملخص نظام المعاهدات 1926-1927 — خلفية للبنية السياسية عشية الحرب"
	},
	{
		id: 4,
		title: "مسؤول الدفاع، الخليج الفارسي. قائد المحطة بالبحرين",
		archiveRef: "IOR/R/15/2/656",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي في خطط الحلفاء العسكرية — إنشاء وتطوير القواعد",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "إنشاء وتطوير القواعد البريطانية"
	},
	{
		id: 5,
		title: "الدفاع ضد قوات المظلات وإعاقة المطارات",
		archiveRef: "IOR/R/15/2/659",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي — الأدوار العسكرية للقواعد",
		priority: "★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 6,
		title: "زيارة طائرات معادية للبحرين 28/1 P",
		archiveRef: "IOR/R/15/2/669",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي — الأدوار العسكرية للقواعد",
		priority: "★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 7,
		title: "سياسة دفاع للخليج 28/75 (مذكرة فاول 1938: حقول النفط من الكويت إلى مسقط)",
		archiveRef: "IOR/R/15/2/762",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي — التنسيق العسكري بريطانيا-أمريكا",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "التنسيق العسكري — يشمل كل الخليج من الكويت لمسقط"
	},
	{
		id: 8,
		title: "العلاقات الأنجلو-أمريكية (سياسة) 28/51",
		archiveRef: "IOR/R/15/2/743",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي — التنسيق العسكري بريطانيا-أمريكا",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "التنسيق السياسي والعسكري الأنجلو-أمريكي في الخليج"
	},
	{
		id: 9,
		title: "الملف 7 (سلاح الجو الملكي RAF) - مجموعة كاملة IOR/R/15/2/259-293",
		archiveRef: "IOR/R/15/2/259-293",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي — إنشاء وتطوير القواعد الجوية والبحرية",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "كنز للفصل الثاني — مجموعة RAF الكاملة في البحرين"
	},
	{
		id: 10,
		title: "الملف 7/5 اقتراح إنشاء قاعدة RAF في البحرين",
		archiveRef: "IOR/R/15/2/271",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي — إنشاء وتطوير القواعد الجوية والبحرية",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 11,
		title: "استبدال وحدة طائرات مائية بوحدة برية في البحرين (إعفاء RAF الجمركي)",
		archiveRef: "IOR/L/PS/12/1998",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي — إنشاء وتطوير القواعد الجوية والبحرية",
		priority: "★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 12,
		title: "خريطة أراضي RAF في المحرّق بالبحرين",
		archiveRef: "IOR/R/15/2/262",
		chapterId: 2,
		sectionId: "2-1",
		section: "م1: الموقع الاستراتيجي — إنشاء وتطوير القواعد الجوية والبحرية",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "تطوير قاعدة المحرّق الجوية — وثيقة خرائطية نادرة"
	},
	{
		id: 13,
		title: "ملف 7/10 حوادث طائرات سلاح الجو الملكي",
		archiveRef: "IOR/R/15/2/275",
		chapterId: 2,
		sectionId: "2-2",
		section: "م2: القواعد العسكرية وموانئ الخليج — الأمن الجوي والعمليات",
		priority: "★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 14,
		title: "ملف 7/11 رحلات طائرات مجهولة الهوية",
		archiveRef: "IOR/R/15/2/276",
		chapterId: 2,
		sectionId: "2-2",
		section: "م2: القواعد العسكرية وموانئ الخليج — الأمن البحري ومواجهة التهديدات",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "مواجهة التهديدات الألمانية واليابانية"
	},
	{
		id: 15,
		title: "ملف 8/16 ملخصات استخباراتية بشأن البحرين 1943-44",
		archiveRef: "IOR/R/15/2 (8/16)",
		chapterId: 2,
		sectionId: "2-2",
		section: "م2: القواعد العسكرية وموانئ الخليج — الأمن البحري ومواجهة التهديدات",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 16,
		title: "ملف 28/17-B الإجراءات عند دخول اليابان الحرب",
		archiveRef: "IOR/R/15/2/706",
		chapterId: 2,
		sectionId: "2-2",
		section: "م2: القواعد العسكرية وموانئ الخليج — الأمن البحري / التهديد الياباني",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "مواجهة التهديد الياباني في المحيط الهندي"
	},
	{
		id: 17,
		title: "مرافق تخزين نفط للجيش الأمريكي في المحرّق 28/74",
		archiveRef: "IOR/R/15/2/761",
		chapterId: 2,
		sectionId: "2-2",
		section: "م2: القواعد العسكرية وموانئ الخليج — دور موانئ البحرين في دعم الحلفاء",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "دور موانئ البحرين في دعم الحلفاء"
	},
	{
		id: 18,
		title: "مراقب بحري أمريكي في البحرين 28/23",
		archiveRef: "IOR/R/15/2/715",
		chapterId: 2,
		sectionId: "2-2",
		section: "م2: القواعد العسكرية وموانئ الخليج — الأمن البحري ومواجهة التهديدات",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 19,
		title: "تشريعات طوارئ الحرب 28/34-(i)",
		archiveRef: "IOR/R/15/2/726",
		chapterId: 2,
		sectionId: "2-3",
		section: "م3: السيادة والسيطرة البحرية — تعزيز السيطرة البريطانية",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "تعزيز السيطرة البحرية البريطانية في الخليج"
	},
	{
		id: 20,
		title: "تشريعات طوارئ الحرب 28/34-II",
		archiveRef: "IOR/R/15/2/727",
		chapterId: 2,
		sectionId: "2-3",
		section: "م3: السيادة والسيطرة البحرية — تعزيز السيطرة البريطانية",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 21,
		title: "إجراءات الدفاع في الخليج - البحرين 28/16 I",
		archiveRef: "IOR/R/15/2/703",
		chapterId: 2,
		sectionId: "2-3",
		section: "م3: السيادة والسيطرة البحرية — تأمين طرق الملاحة وخطوط الإمداد",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "تأمين طرق الملاحة وخطوط الإمداد العسكرية"
	},
	{
		id: 22,
		title: "الحرب: البروباغندا: الرأي المحلي I",
		archiveRef: "IOR/R/15/2/687",
		chapterId: 3,
		sectionId: "3-2",
		section: "م2: تأثير الحرب على الوعي السياسي — تنامي الوعي السياسي",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "تنامي الوعي السياسي في مجتمعات الخليج"
	},
	{
		id: 23,
		title: "الحرب: البروباغندا - الرأي المحلي II",
		archiveRef: "IOR/R/15/2/688",
		chapterId: 3,
		sectionId: "3-2",
		section: "م2: تأثير الحرب على الوعي السياسي — تنامي الوعي السياسي",
		priority: "★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 24,
		title: "ملف 1/A/50 الدعاية والنشر (البروباغندا البريطانية)",
		archiveRef: "IOR/R/15/2 (1/A/50)",
		chapterId: 3,
		sectionId: "3-2",
		section: "م2: تأثير الحرب على الوعي السياسي — البروباغندا وصحيفة البحرين",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "البروباغندا البريطانية وأثرها في الوعي السياسي المحلي"
	},
	{
		id: 25,
		title: "ملف 46/11 الدعاية في الخليج الفارسي",
		archiveRef: "IOR/R/15/6/397",
		chapterId: 3,
		sectionId: "3-2",
		section: "م2: تأثير الحرب على الوعي السياسي — البروباغندا (مجلات العرب والنفير)",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "مجلات البروباغندا البريطانية (العرب، النفير) في الخليج"
	},
	{
		id: 26,
		title: "أنشطة عبد الله بن فارس (سكرتير شيخ الشارقة)",
		archiveRef: "IOR/R/15/2/694",
		chapterId: 3,
		sectionId: "3-3",
		section: "م3: العلاقات الخليجية مع دول الحرب — محاولات المحور اختراق النفوذ البريطاني",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "البروباغندا النازية في الشارقة — اختراق المحور للنفوذ البريطاني"
	},
	{
		id: 27,
		title: "الحرب: سانت جون فيلبي",
		archiveRef: "IOR/R/15/2/696",
		chapterId: 3,
		sectionId: "3-3",
		section: "م3: العلاقات الخليجية مع دول الحرب — محاولات المحور اختراق النفوذ البريطاني",
		priority: "★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "اختراق المحور للنفوذ البريطاني عبر الوسطاء"
	},
	{
		id: 28,
		title: "اضطرابات في العراق 28/27",
		archiveRef: "IOR/R/15/2/717",
		chapterId: 3,
		sectionId: "3-3",
		section: "م3: العلاقات الخليجية مع دول الحرب — طبيعة العلاقة مع القوى الكبرى",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "الانعكاسات الإقليمية على دول الخليج"
	},
	{
		id: 29,
		title: "الحرب: الأعمال العدائية في إيران 28/30",
		archiveRef: "IOR/R/15/2/722",
		chapterId: 3,
		sectionId: "3-3",
		section: "م3: العلاقات الخليجية مع دول الحرب — طبيعة العلاقة مع القوى الكبرى",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 30,
		title: "مسودة رد تشامبرلين على ابن سعود 1939",
		archiveRef: "IOR/L/PS/12/2088",
		chapterId: 3,
		sectionId: "3-1",
		section: "م1: التغيرات السياسية والإدارية — العلاقات الدبلوماسية مع بريطانيا",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "العلاقات الدبلوماسية مع بريطانيا"
	},
	{
		id: 31,
		title: "رسالة بولارد: قلق بريطانيا من وفاة ابن سعود 1938",
		archiveRef: "IOR/L/PS/12/2082",
		chapterId: 3,
		sectionId: "3-1",
		section: "م1: التغيرات السياسية والإدارية — الدور السياسي للملك عبد العزيز في التوازن الإقليمي",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "الدور السياسي للملك عبد العزيز في التوازن الإقليمي"
	},
	{
		id: 32,
		title: "مذكرة إشعيا برلين عن خطط أمريكا في السعودية 1944",
		archiveRef: "IOR/L/PS/12/2124",
		chapterId: 3,
		sectionId: "3-3",
		section: "م3: العلاقات الخليجية مع دول الحرب — تعزيز النفوذ الأمريكي بعد 1943",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "تعزيز النفوذ الأمريكي بعد 1943م"
	},
	{
		id: 33,
		title: "موارد البحرين المالية (ملصقات دعاية بالعربية على ظهرها)",
		archiveRef: "IOR/R/15/2 (مالي)",
		chapterId: 3,
		sectionId: "3-2",
		section: "م2: تأثير الحرب على الوعي السياسي — ملصقات الدعاية البريطانية بالعربية",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "ملصقات الدعاية البريطانية بالعربية — أثرها في الوعي السياسي"
	},
	{
		id: 34,
		title: "تمديد نظام ترخيص التصدير I 28/5(أ)",
		archiveRef: "IOR/R/15/2/684",
		chapterId: 4,
		sectionId: "4-1",
		section: "م1: أثر الحرب في التجارة والملاحة — انعكاسات الحرب في الموانئ والأسواق",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "انعكاسات الحرب في الموانئ والأسواق التجارية"
	},
	{
		id: 35,
		title: "نظام تراخيص التصدير II (بيانات شهرية)",
		archiveRef: "IOR/R/15/2/685",
		chapterId: 4,
		sectionId: "4-1",
		section: "م1: أثر الحرب في التجارة والملاحة — انعكاسات الحرب في الموانئ والأسواق",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "بيانات شهرية عن حركة التجارة البحرية"
	},
	{
		id: 36,
		title: "وضع المخزون في البحرين والساحل المتصالح 29/20",
		archiveRef: "IOR/R/15/2/773",
		chapterId: 4,
		sectionId: "4-3",
		section: "م3: انعكاسات الحرب على البنية الاقتصادية — الحصار البحري وارتفاع الطلب",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "الحصار البحري وارتفاع الطلب العالمي على النفط"
	},
	{
		id: 37,
		title: "تخريب آبار النفط 28/1 J",
		archiveRef: "IOR/R/15/2/660",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — النفط كمورد استراتيجي رئيسي للحلفاء",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "النفط كمورد استراتيجي — خطط التخريب لمنع وقوعه بيد العدو"
	},
	{
		id: 38,
		title: "دفاع حقل النفط ومصفاة التكرير 28/1 K I",
		archiveRef: "IOR/R/15/2/661",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — النفط كمورد استراتيجي رئيسي للحلفاء",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: ""
	},
	{
		id: 39,
		title: "برنامج الإنكار في قطر 28/35",
		archiveRef: "IOR/R/15/2/729",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — النفط كمورد استراتيجي (قطر)",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "النفط كمورد استراتيجي في قطر"
	},
	{
		id: 40,
		title: "نفط البحرين 28/1 N I",
		archiveRef: "IOR/R/15/2/666",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — بدايات التنقيب في السعودية والبحرين والكويت",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "بدايات التنقيب عن النفط في البحرين"
	},
	{
		id: 41,
		title: "نفط البحرين - أرقام الإنتاج 28/1 N II",
		archiveRef: "IOR/R/15/2/667",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — النفط كمورد استراتيجي رئيسي للحلفاء",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: false,
		status: "لم يُراجع",
		notes: "أرقام إنتاج النفط خلال الحرب"
	},
	{
		id: 42,
		title: "الملف 38/3 امتياز نفط قطر",
		archiveRef: "IOR/R/15/2/864",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — الشركات الأجنبية والامتيازات النفطية في ظل الحرب",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "الامتيازات النفطية في قطر"
	},
	{
		id: 43,
		title: "النفط وعلاقته بالشرق الأوسط (مج64) - الكويت",
		archiveRef: "IOR/R/15/2 (31/86)",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — بدايات التنقيب في السعودية والبحرين والكويت",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "النفط في الكويت وأرامكو وخط التابلاين"
	},
	{
		id: 44,
		title: "الدفاع عن الخليج الفارسي - قطر (نفط قطر إمدادات وقود الإمبراطورية + خريطة آبار 1939)",
		archiveRef: "IOR/L/PS/12/3936",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — النفط كمورد استراتيجي رئيسي للحلفاء",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "نفط قطر كمورد استراتيجي + خريطة نادرة لآبار 1939"
	},
	{
		id: 45,
		title: "تنقيح إتاوات النفط للشيخ من بابكو 10/6 A",
		archiveRef: "IOR/R/15/2 (10/6 A)",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — الشركات الأجنبية والامتيازات النفطية في ظل الحرب",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "الامتيازات النفطية في ظل الحرب — بابكو والبحرين"
	},
	{
		id: 46,
		title: "ملف 28/33 التعويضات والتأمين ضد مخاطر الحرب",
		archiveRef: "IOR/R/15/2 (28/33)",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — الشركات الأجنبية والامتيازات النفطية في ظل الحرب",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "مخاطر الحرب على منشآت بابكو النفطية"
	},
	{
		id: 47,
		title: "ملف 86/7 امتيازات النفط في الساحل المتصالح",
		archiveRef: "IOR/R/15/2 (86/7)",
		chapterId: 4,
		sectionId: "4-2",
		section: "م2: النفط في الخليج — الشركات الأجنبية والامتيازات النفطية في ظل الحرب",
		priority: "★★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "الامتيازات النفطية في الساحل المتصالح (الإمارات)"
	},
	{
		id: 48,
		title: "المتطلبات المدنية للخليج الفارسي (كهرباء الكويت بعد الحرب)",
		archiveRef: "IOR/L/PS/12/1010",
		chapterId: 4,
		sectionId: "4-3",
		section: "م3: انعكاسات الحرب على البنية الاقتصادية — نشوء البنية التحتية الحديثة بعد الحرب",
		priority: "★★",
		category: "مصدر أولي",
		isNew: true,
		status: "لم يُراجع",
		notes: "نقص البنية التحتية في الكويت — جذور التحديث الاقتصادي"
	}
];
var COUNTRIES = [
	"السعودية",
	"الكويت",
	"البحرين",
	"قطر",
	"الإمارات/الساحل المتصالح",
	"عُمان",
	"بريطانيا",
	"الولايات المتحدة",
	"ألمانيا"
];
var CATEGORIES = [
	"مصدر أولي",
	"كتاب",
	"رسالة علمية",
	"بحث",
	"صحيفة",
	"مقالة",
	"تقرير"
];
function genRef(doc, fmt) {
	const a = doc.author || "مصدر أولي";
	const y = doc.year || "د.ت";
	const t = doc.title;
	const r = doc.archiveRef ? ` [${doc.archiveRef}]` : "";
	if (fmt === "APA") return `${a} (${y}). ${t}.${r}`;
	if (fmt === "Chicago") return `${a}. "${t}."${r} ${y}.`;
	return `${a}. "${t}."${r} ${y}.`;
}
function App() {
	const [page, setPage] = (0, import_react.useState)("home");
	const [aiModel, setAiModel] = (0, import_react.useState)(getSelectedModel());
	const [docs, setDocs] = (0, import_react.useState)(DOCS_FROM_INDEX);
	const [searchFilters, setSearchFilters] = (0, import_react.useState)({
		query: "",
		chapterId: "",
		priority: "",
		isNew: "",
		status: ""
	});
	const [selectedDoc, setSelectedDoc] = (0, import_react.useState)(null);
	const [aiResult, setAiResult] = (0, import_react.useState)("");
	const [aiLoading, setAiLoading] = (0, import_react.useState)(false);
	const [notif, setNotif] = (0, import_react.useState)(null);
	const [exportFormat, setExportFormat] = (0, import_react.useState)("Chicago");
	const [exportSelected, setExportSelected] = (0, import_react.useState)([]);
	const [exportText, setExportText] = (0, import_react.useState)("");
	const [customFormats, setCustomFormats] = (0, import_react.useState)(() => {
		try {
			const v = localStorage.getItem("acadarchiv_custom_formats");
			return v && v !== "undefined" ? JSON.parse(v) : [];
		} catch {
			return [];
		}
	});
	const [showCustomBuilder, setShowCustomBuilder] = (0, import_react.useState)(false);
	const [editingCustomFmt, setEditingCustomFmt] = (0, import_react.useState)(null);
	const [customFmtForm, setCustomFmtForm] = (0, import_react.useState)({
		name: "",
		templates: {
			"كتاب": "{المؤلف}. {العنوان}. {مكان_النشر}: {الناشر}، {السنة}م.",
			"وثيقة أرشيفية": "{المؤلف}. {العنوان}. {الرقم_الأرشيفي}، {السنة}م.",
			"رسالة علمية": "{المؤلف}. {العنوان}. رسالة {الدرجة}، {الجامعة}، {السنة}م.",
			"مقالة": "{المؤلف}. \"{العنوان}\". {اسم_المجلة}، م{المجلد}، ع{العدد} ({السنة})، ص{الصفحات}.",
			"صحيفة": "{المؤلف}. \"{العنوان}\". {اسم_الصحيفة}، {التاريخ}.",
			"موقع إلكتروني": "{المؤلف}. {العنوان}. متاح على: {الرابط}، تاريخ الزيارة: {تاريخ_الزيارة}.",
			"تقرير": "{المؤلف}. {العنوان}. {الجهة}، {السنة}م.",
			"أطروحة دكتوراه": "{المؤلف}. {العنوان}. أطروحة دكتوراه، {الجامعة}، {السنة}م."
		}
	});
	const [addForm, setAddForm] = (0, import_react.useState)({
		title: "",
		author: "",
		year: "",
		archiveRef: "",
		chapterId: "",
		section: "",
		priority: "★★",
		category: "مصدر أولي",
		country: "",
		keywords: "",
		notes: "",
		isNew: false,
		status: "لم يُراجع"
	});
	const [urlImport, setUrlImport] = (0, import_react.useState)("");
	const [urlLoading, setUrlLoading] = (0, import_react.useState)(false);
	const [urlResult, setUrlResult] = (0, import_react.useState)(null);
	const [tgMode, setTgMode] = (0, import_react.useState)(false);
	const [tgQuery, setTgQuery] = (0, import_react.useState)("");
	const [tgResults, setTgResults] = (0, import_react.useState)([]);
	const [tgLoading, setTgLoading] = (0, import_react.useState)(false);
	const aiInputRef = (0, import_react.useRef)(null);
	const [chapters, setChapters] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("acadarchiv_chapters");
			return saved ? JSON.parse(saved) : CHAPTERS_DATA.map((ch) => ({
				...ch,
				sections: ch.sections.map((s) => ({ ...s }))
			}));
		} catch {
			return CHAPTERS_DATA.map((ch) => ({
				...ch,
				sections: ch.sections.map((s) => ({ ...s }))
			}));
		}
	});
	const [editingChapter, setEditingChapter] = (0, import_react.useState)(null);
	const [editingSection, setEditingSection] = (0, import_react.useState)(null);
	const saveChapters = (updated) => {
		setChapters(updated);
		try {
			localStorage.setItem("acadarchiv_chapters", JSON.stringify(updated));
		} catch {}
	};
	const commitChapterEdit = () => {
		if (!editingChapter) return;
		const updated = chapters.map((ch) => ch.id === editingChapter.id ? {
			...ch,
			titleAr: editingChapter.value
		} : ch);
		setDocs((prev) => prev.map((d) => d.chapterId === editingChapter.id ? {
			...d,
			chapterTitle: editingChapter.value
		} : d));
		saveChapters(updated);
		setEditingChapter(null);
		showNotif("✅ تم تحديث عنوان الفصل");
	};
	const commitSectionEdit = () => {
		if (!editingSection) return;
		const updated = chapters.map((ch) => ch.id === editingSection.chId ? {
			...ch,
			sections: ch.sections.map((s) => s.id === editingSection.secId ? {
				...s,
				title: editingSection.value
			} : s)
		} : ch);
		setDocs((prev) => prev.map((d) => d.sectionId === editingSection.secId ? {
			...d,
			section: editingSection.value
		} : d));
		saveChapters(updated);
		setEditingSection(null);
		showNotif("✅ تم تحديث عنوان المبحث وإعادة فرز الوثائق تلقائياً");
	};
	const [footnoteModal, setFootnoteModal] = (0, import_react.useState)(null);
	const [footnotePageNum, setFootnotePageNum] = (0, import_react.useState)("");
	const [footnoteResult, setFootnoteResult] = (0, import_react.useState)("");
	const footnotePageRef = (0, import_react.useRef)(null);
	const generateFootnote = (doc, pageNum) => {
		const cat = doc.category || doc.sourceType || "وثيقة أرشيفية";
		const author = doc.author || "[اسم المؤلف]";
		const title = doc.title || "[العنوان]";
		const year = doc.year || "[السنة]";
		const page = pageNum || "[رقم الصفحة]";
		if (cat === "كتاب") return `${author}، ${title}، ط${doc.edition || "1"}، (${doc.place || "[مكان النشر]"}: ${doc.publisher || "[دار النشر]"}، ${year})، ص${page}.`;
		if (cat === "رسالة علمية" || cat === "أطروحة دكتوراه") return `${author}، "${title}"، (${cat === "أطروحة دكتوراه" ? "أطروحة دكتوراه غير منشورة" : "رسالة ماجستير غير منشورة"})، ${doc.college || "[الكلية]"}، ${doc.university || "[الجامعة]"}، ${year}، ص${page}.`;
		if (cat === "صحيفة") return `صحيفة ${doc.newspaper || doc.title || "[اسم الصحيفة]"}، العدد (${doc.issue || "[رقم العدد]"})، التاريخ ${doc.date || year}، ص${page}.`;
		if (cat === "مقالة") return `${author}، "${title}"، ${doc.journal || "[اسم المجلة]"}، م${doc.volume || "[م]"}، ع${doc.issue || "[ع]"} (${year})، ص${page}.`;
		if (cat === "مصدر أولي" || cat === "وثيقة أرشيفية") return `${title}، ${doc.archiveRef || "[الرقم الأرشيفي]"}، ${year}، ص${page}.`;
		return `${author}، ${title}، (${year})، ص${page}.`;
	};
	const openFootnoteModal = (doc) => {
		setFootnoteModal(doc);
		setFootnotePageNum("");
		setFootnoteResult("");
		setTimeout(() => footnotePageRef.current?.focus(), 100);
	};
	const handleGenerateFootnote = () => {
		if (!footnoteModal) return;
		setFootnoteResult(generateFootnote(footnoteModal, footnotePageNum));
	};
	const copyFootnoteAndRegister = () => {
		if (!footnoteResult) return;
		navigator.clipboard.writeText(footnoteResult).then(() => {
			addToBibliography(footnoteModal, footnoteResult);
			showNotif("✅ تم نسخ الهامش وإضافة المصدر لقائمة المراجع النهائية");
			setFootnoteModal(null);
		});
	};
	const [bibliography, setBibliography] = (0, import_react.useState)(() => {
		try {
			const v = localStorage.getItem("acadarchiv_bibliography");
			return v && v !== "undefined" ? JSON.parse(v) : [];
		} catch {
			return [];
		}
	});
	const saveBibliography = (updated) => {
		setBibliography(updated);
		try {
			localStorage.setItem("acadarchiv_bibliography", JSON.stringify(updated));
		} catch {}
	};
	const formatAuthorLastFirst = (fullName) => {
		if (!fullName || fullName.trim() === "") return "[مؤلف غير معروف]";
		const parts = fullName.trim().split(/\s+/);
		if (parts.length === 1) return fullName;
		return `${parts[parts.length - 1]}، ${parts.slice(0, parts.length - 1).join(" ")}`;
	};
	const getBibSection = (cat) => {
		if (!cat) return "أخرى";
		if (cat === "مصدر أولي" || cat === "وثيقة أرشيفية") return "الوثائق الأرشيفية";
		if (cat === "كتاب") return "الكتب";
		if (cat === "رسالة علمية" || cat === "أطروحة دكتوراه") return "الرسائل والأطاريح";
		if (cat === "صحيفة") return "الصحف";
		if (cat === "مقالة") return "المقالات";
		if (cat === "تقرير" || cat === "بحث") return "التقارير والبحوث";
		return "أخرى";
	};
	const addToBibliography = (doc, footnoteText) => {
		if (!doc) return;
		const cat = doc.category || doc.sourceType || "وثيقة أرشيفية";
		const section = getBibSection(cat);
		const authorFormatted = formatAuthorLastFirst(doc.author || "");
		const year = doc.year || "د.ت";
		const title = doc.title || "";
		let bibEntry = "";
		if (cat === "كتاب") bibEntry = `${authorFormatted}، ${title}، ط${doc.edition || "1"}، (${doc.place || "[مكان النشر]"}: ${doc.publisher || "[دار النشر]"}، ${year}).`;
		else if (cat === "رسالة علمية" || cat === "أطروحة دكتوراه") bibEntry = `${authorFormatted}، "${title}"، (${cat === "أطروحة دكتوراه" ? "أطروحة دكتوراه غير منشورة" : "رسالة ماجستير غير منشورة"})، ${doc.college || "[الكلية]"}، ${doc.university || "[الجامعة]"}، ${year}.`;
		else if (cat === "صحيفة") bibEntry = `صحيفة ${doc.newspaper || title || "[اسم الصحيفة]"}، العدد (${doc.issue || "[رقم العدد]"})، التاريخ ${doc.date || year}.`;
		else if (cat === "مقالة") bibEntry = `${authorFormatted}، "${title}"، ${doc.journal || "[اسم المجلة]"}، م${doc.volume || "[م]"}، ع${doc.issue || "[ع]"} (${year}).`;
		else if (cat === "مصدر أولي" || cat === "وثيقة أرشيفية") bibEntry = `${title}، ${doc.archiveRef || "[الرقم الأرشيفي]"}، ${year}.`;
		else bibEntry = `${authorFormatted}، ${title}، (${year}).`;
		const newEntry = {
			id: Date.now() + Math.random(),
			docId: doc.id,
			section,
			author: authorFormatted,
			title,
			year,
			category: cat,
			bibEntry,
			sortKey: authorFormatted || title,
			addedAt: (/* @__PURE__ */ new Date()).toLocaleDateString("ar-IQ")
		};
		if (bibliography.some((b) => b.docId === doc.id || b.bibEntry === bibEntry)) {
			showNotif("ℹ️ المصدر موجود مسبقاً في قائمة المراجع");
			return;
		}
		saveBibliography([...bibliography, newEntry]);
	};
	const BIBO_SECTIONS_ORDER = [
		"الوثائق الأرشيفية",
		"الكتب",
		"الرسائل والأطاريح",
		"الصحف",
		"المقالات",
		"التقارير والبحوث",
		"أخرى"
	];
	const getBibGrouped = () => {
		const grouped = {};
		BIBO_SECTIONS_ORDER.forEach((s) => {
			grouped[s] = [];
		});
		bibliography.forEach((b) => {
			grouped[grouped[b.section] ? b.section : "أخرى"].push(b);
		});
		BIBO_SECTIONS_ORDER.forEach((s) => {
			grouped[s].sort((a, b) => (a.sortKey || "").localeCompare(b.sortKey || "", "ar"));
		});
		return grouped;
	};
	const copyFullBibliography = () => {
		const grouped = getBibGrouped();
		let text = "قائمة المصادر والمراجع\n";
		text += "═".repeat(40) + "\n\n";
		BIBO_SECTIONS_ORDER.forEach((sec) => {
			if (!grouped[sec]?.length) return;
			text += `◆ ${sec}\n${"─".repeat(30)}\n`;
			grouped[sec].forEach((b, i) => {
				text += `${i + 1}. ${b.bibEntry}\n`;
			});
			text += "\n";
		});
		navigator.clipboard.writeText(text).then(() => showNotif("✅ تم نسخ قائمة المراجع كاملة"));
	};
	const removeFromBibliography = (id) => {
		saveBibliography(bibliography.filter((b) => b.id !== id));
		showNotif("🗑️ تم حذف المرجع من القائمة");
	};
	const [library, setLibrary] = (0, import_react.useState)([]);
	const [libUploading, setLibUploading] = (0, import_react.useState)(false);
	const [libAnalyzing, setLibAnalyzing] = (0, import_react.useState)(null);
	const [libFilter, setLibFilter] = (0, import_react.useState)({
		query: "",
		chapterId: "",
		category: "",
		priority: ""
	});
	const [libSelected, setLibSelected] = (0, import_react.useState)(null);
	const [libUrlInput, setLibUrlInput] = (0, import_react.useState)("");
	const [libUrlLoading, setLibUrlLoading] = (0, import_react.useState)(false);
	const libFileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const loadLibrary = async () => {
			try {
				const { supabase } = await import("./client-DtY4EFKJ.mjs").then((n) => n.t);
				const { data: { user } } = await supabase.auth.getUser();
				if (!user) return;
				const { data, error } = await supabase.from("library_sources").select("*").order("created_at", { ascending: false });
				if (!error && data) setLibrary(data);
			} catch (e) {
				console.error("loadLibrary error:", e);
			}
		};
		loadLibrary();
	}, []);
	const saveLibrary = async (updated) => {
		setLibrary(updated);
	};
	const analyzeSource = async (src, fileText) => {
		setLibAnalyzing(src.id);
		const prompt = `أنت مساعد بحثي متخصص في تاريخ "الخليج العربي خلال الحرب العالمية الثانية 1939-1945".

حلّل هذا المصدر وصنّفه للأطروحة التي تتكون من أربعة فصول:
- الفصل الأول: أوضاع الخليج عشية الحرب (1918-1939)
- الفصل الثاني: الأهمية الاستراتيجية والعسكرية
- الفصل الثالث: أثر الحرب على الأوضاع السياسية
- الفصل الرابع: التحولات الاقتصادية في الخليج

اسم الملف: ${src.fileName}
نوع الملف: ${src.fileType}
المحتوى (أول 3000 حرف):
${fileText.substring(0, 3e3)}

أجب بـ JSON فقط بدون أي نص آخر:
{
  "title": "عنوان المصدر المستخلص",
  "author": "المؤلف",
  "year": "السنة (رقم أو null)",
  "language": "عربي أو إنجليزي أو أخرى",
  "sourceType": "كتاب أو رسالة علمية أو بحث أو مقالة أو صحيفة أو وثيقة أرشيفية أو تقرير أو أطروحة دكتوراه أو موقع إلكتروني",
  "chapterId": 1,
  "chapterName": "اسم الفصل",
  "sections": ["م1: ...", "م2: ..."],
  "priority": "★★★ أو ★★ أو ★",
  "importantPages": "الصفحات المهمة مثل: 45-67، 102، 230-245",
  "summary": "ملخص أكاديمي موجز (4-5 أسطر)",
  "keywords": ["كلمة1", "كلمة2", "كلمة3"],
  "whyImportant": "لماذا هذا المصدر مهم للأطروحة",
  "howToUse": "كيف تستخدمه في الكتابة"
}`;
		try {
			const clean = ((await callLLM({
				max_tokens: 1500,
				messages: [{
					role: "user",
					content: prompt
				}]
			})).content?.map((c) => c.text || "").join("") || "{}").replace(/```json|```/g, "").trim();
			return JSON.parse(clean);
		} catch {
			return null;
		} finally {
			setLibAnalyzing(null);
		}
	};
	const handleLibFileUpload = async (files) => {
		if (!files?.length) return;
		setLibUploading(true);
		for (const file of Array.from(files)) {
			const ext = file.name.split(".").pop().toLowerCase();
			if (![
				"pdf",
				"md",
				"txt",
				"docx"
			].includes(ext)) {
				showNotif(`⚠️ الملف ${file.name} — يُقبل فقط PDF و MD و TXT`, "error");
				continue;
			}
			const reader = new FileReader();
			const fileText = await new Promise((resolve) => {
				reader.onload = (e) => resolve(e.target.result);
				if (ext === "pdf") reader.readAsDataURL(file);
				else reader.readAsText(file, "utf-8");
			});
			const srcId = Date.now() + Math.random();
			const newSrc = {
				id: srcId,
				fileName: file.name,
				fileType: ext,
				fileSize: file.size,
				uploadDate: (/* @__PURE__ */ new Date()).toLocaleDateString("ar-IQ"),
				status: "جاري التحليل...",
				analyzed: false,
				title: "",
				author: "",
				year: "",
				language: "",
				sourceType: "",
				chapterId: null,
				sections: [],
				priority: "★★",
				importantPages: "",
				summary: "",
				keywords: [],
				whyImportant: "",
				howToUse: "",
				fileData: ext !== "pdf" ? fileText : null
			};
			saveLibrary([newSrc, ...library]);
			const analysis = await analyzeSource(newSrc, ext === "pdf" ? `[ملف PDF: ${file.name}]` : fileText);
			const analyzed = analysis ? {
				...newSrc,
				...analysis,
				analyzed: true,
				status: "تم التحليل ✅"
			} : {
				...newSrc,
				analyzed: false,
				status: "فشل التحليل ⚠️ — عدّل يدوياً"
			};
			saveLibrary((prev) => {
				const _v = localStorage.getItem("acadarchiv_library");
				return (_v && _v !== "undefined" ? JSON.parse(_v) : []).map((s) => s.id === srcId ? analyzed : s);
			});
		}
		setLibUploading(false);
		showNotif("✅ اكتمل رفع وتحليل الملفات");
	};
	const handleLibUrlImport = async () => {
		if (!libUrlInput.trim()) return;
		setLibUrlLoading(true);
		try {
			const text = (await callLLM({
				max_tokens: 1500,
				tools: [{
					type: "web_search_20250305",
					name: "web_search"
				}],
				messages: [{
					role: "user",
					content: `اذهب لهذا الرابط واستخرج بيانات المصدر لأطروحة "الخليج العربي في الحرب العالمية الثانية 1939-1945":\n${libUrlInput}\n\nأجب بـ JSON فقط:\n{"title":"","author":"","year":null,"language":"","sourceType":"","chapterId":1,"chapterName":"","sections":[],"priority":"★★","importantPages":"","summary":"","keywords":[],"whyImportant":"","howToUse":"","fileName":"${libUrlInput}"}`
				}]
			})).content?.map((c) => c.text || "").join("") || "{}";
			const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
			saveLibrary([{
				id: Date.now(),
				fileName: libUrlInput,
				fileType: "url",
				uploadDate: (/* @__PURE__ */ new Date()).toLocaleDateString("ar-IQ"),
				status: "تم التحليل ✅",
				analyzed: true,
				...parsed
			}, ...library]);
			setLibUrlInput("");
			showNotif("✅ تمت إضافة المصدر من الرابط");
		} catch {
			showNotif("⚠️ تعذّر استخراج البيانات — حاول مرة أخرى", "error");
		}
		setLibUrlLoading(false);
	};
	const updateLibSrc = (id, changes) => {
		saveLibrary(library.map((s) => s.id === id ? {
			...s,
			...changes
		} : s));
		if (libSelected?.id === id) setLibSelected({
			...libSelected,
			...changes
		});
	};
	const deleteLibSrc = (id) => {
		saveLibrary(library.filter((s) => s.id !== id));
		if (libSelected?.id === id) setLibSelected(null);
		showNotif("🗑️ تم حذف المصدر");
	};
	const filteredLib = library.filter((s) => {
		const q = libFilter.query.toLowerCase();
		if (q && !s.title?.toLowerCase().includes(q) && !s.author?.toLowerCase().includes(q) && !s.fileName?.toLowerCase().includes(q) && !(s.keywords || []).join(" ").toLowerCase().includes(q)) return false;
		if (libFilter.chapterId && s.chapterId !== parseInt(libFilter.chapterId)) return false;
		if (libFilter.category && s.sourceType !== libFilter.category) return false;
		if (libFilter.priority && s.priority !== libFilter.priority) return false;
		return true;
	});
	const showNotif = (msg, type = "success") => {
		setNotif({
			msg,
			type
		});
		setTimeout(() => setNotif(null), 3500);
	};
	const filtered = docs.filter((d) => {
		const q = searchFilters.query.toLowerCase();
		if (q && !d.title.toLowerCase().includes(q) && !(d.archiveRef || "").toLowerCase().includes(q) && !(d.notes || "").toLowerCase().includes(q) && !(d.section || "").toLowerCase().includes(q)) return false;
		if (searchFilters.chapterId && d.chapterId !== parseInt(searchFilters.chapterId)) return false;
		if (searchFilters.priority && d.priority !== searchFilters.priority) return false;
		if (searchFilters.isNew === "new" && !d.isNew) return false;
		if (searchFilters.status && d.status !== searchFilters.status) return false;
		return true;
	}).sort((a, b) => {
		const p = {
			"★★★": 3,
			"★★": 2,
			"★": 1
		};
		return (p[b.priority] || 0) - (p[a.priority] || 0);
	});
	const stats = {
		total: docs.length,
		highP: docs.filter((d) => d.priority === "★★★").length,
		newDocs: docs.filter((d) => d.isNew).length,
		unreviewed: docs.filter((d) => d.status === "لم يُراجع").length,
		byChapter: CHAPTERS_DATA.map((ch) => ({
			...ch,
			count: docs.filter((d) => d.chapterId === ch.id).length
		}))
	};
	const handleUrlImport = async () => {
		if (!urlImport.trim()) return;
		setUrlLoading(true);
		setUrlResult(null);
		try {
			const text = (await callLLM({
				max_tokens: 1e3,
				tools: [{
					type: "web_search_20250305",
					name: "web_search"
				}],
				messages: [{
					role: "user",
					content: `اذهب إلى هذا الرابط وأخرج لي بيانات الوثيقة الأرشيفية المذكورة فيه بصيغة JSON فقط بدون أي شرح:
رابط: ${urlImport}

JSON المطلوب (أعده فقط بدون backticks):
{
  "title": "عنوان الوثيقة بالعربية",
  "author": "المؤلف أو الجهة",
  "year": "السنة (رقم فقط أو null)",
  "archiveRef": "رقم الأرشيف مثل IOR/R/15/...",
  "category": "نوع الوثيقة",
  "notes": "ملاحظة مختصرة عن محتواها",
  "keywords": "كلمات مفتاحية مفيدة"
}
إذا كان الرابط لصفحة QDL أو أرشيف بريطاني، استخرج المعلومات منه.`
				}]
			})).content?.map((c) => c.text || "").join("") || "";
			try {
				const clean = text.replace(/```json|```/g, "").trim();
				const parsed = JSON.parse(clean);
				setUrlResult(parsed);
				setAddForm((prev) => ({
					...prev,
					title: parsed.title || "",
					author: parsed.author || "",
					year: parsed.year || "",
					archiveRef: parsed.archiveRef || "",
					category: parsed.category || "مصدر أولي",
					notes: parsed.notes || "",
					keywords: parsed.keywords || ""
				}));
				setPage("add");
				showNotif("✅ تم استخراج بيانات الوثيقة — راجع النموذج وأكمل البيانات");
			} catch {
				showNotif("⚠️ لم يتمكن من استخراج البيانات تلقائياً — يمكنك الإدخال يدوياً", "warn");
			}
		} catch {
			showNotif("حدث خطأ في الاتصال", "error");
		}
		setUrlLoading(false);
	};
	const handleTgSearch = async () => {
		if (!tgQuery.trim()) return;
		setTgLoading(true);
		setTgResults([]);
		try {
			const text = (await callLLM({
				max_tokens: 1500,
				messages: [{
					role: "user",
					content: `أنت مساعد بحثي لأطروحة دكتوراه: "الخليج العربي خلال الحرب العالمية الثانية 1939-1945".

الباحث يبحث في مجموعات تيليغرام الأرشيفية والتاريخية عن: "${tgQuery}"

بناءً على معرفتك بمصادر هذا الموضوع، اقترح له:
1. ما هي قنوات/مجموعات تيليغرام الموثوقة التي قد تحتوي مصادر تاريخية وأرشيفية مشابهة؟
2. ما هي الوثائق أو المصادر المتوقع وجودها في هذا الموضوع؟
3. ما هي الكلمات المفتاحية الأفضل للبحث؟
4. هل هناك مصادر من QDL أو الأرشيف البريطاني مرتبطة بهذا الموضوع؟

أجب بصيغة JSON فقط:
{
  "channels": [{"name":"اسم القناة/المجموعة","description":"وصف","url":"رابط إن وجد"}],
  "related_docs": [{"title":"عنوان المصدر المتوقع","archiveRef":"IOR/...","relevance":"السبب"}],
  "keywords": ["كلمة1","كلمة2"],
  "qdl_suggestions": ["اقتراح QDL 1","اقتراح QDL 2"]
}`
				}]
			})).content?.map((c) => c.text || "").join("") || "";
			try {
				const clean = text.replace(/```json|```/g, "").trim();
				setTgResults(JSON.parse(clean));
			} catch {
				setTgResults({ error: text });
			}
		} catch {
			setTgResults({ error: "حدث خطأ في الاتصال" });
		}
		setTgLoading(false);
	};
	const handleAddDoc = () => {
		if (!addForm.title) {
			showNotif("يجب إدخال عنوان الوثيقة", "error");
			return;
		}
		const newDoc = {
			...addForm,
			id: docs.length + 100 + Math.floor(Math.random() * 100),
			chapterId: addForm.chapterId ? parseInt(addForm.chapterId) : null,
			year: addForm.year || null
		};
		setDocs((prev) => [newDoc, ...prev]);
		setAddForm({
			title: "",
			author: "",
			year: "",
			archiveRef: "",
			chapterId: "",
			section: "",
			priority: "★★",
			category: "مصدر أولي",
			country: "",
			keywords: "",
			notes: "",
			isNew: false,
			status: "لم يُراجع"
		});
		showNotif(`✅ تمت إضافة الوثيقة — الإجمالي: ${docs.length + 1}`);
		setPage("search");
	};
	const handleAI = async (doc) => {
		setAiLoading(true);
		setAiResult("");
		try {
			setAiResult((await callLLM({
				max_tokens: 1e3,
				messages: [{
					role: "user",
					content: `أنت مساعد بحثي متخصص في "الخليج العربي خلال الحرب العالمية الثانية 1939-1945".

حلّل هذه الوثيقة الأرشيفية:
العنوان: ${doc.title}
الرقم الأرشيفي: ${doc.archiveRef || "—"}
الفصل: ${CHAPTERS_DATA.find((c) => c.id === doc.chapterId)?.titleAr || "—"}
المبحث: ${doc.section || "—"}
الأولوية: ${doc.priority}
ملاحظات: ${doc.notes || "—"}

أعطني:
1. ملخص أكاديمي موجز عن محتوى هذه الوثيقة المتوقع (3-4 أسطر)
2. أهميتها للأطروحة وللمبحث المحدد
3. الأسئلة البحثية التي قد تجيب عنها
4. وثائق أخرى مكملة لها من نفس السلسلة (IOR)
5. كيف تدمجها مع باقي مصادر فصلها

أجب بالعربية بأسلوب أكاديمي مختصر.`
				}]
			})).content?.map((c) => c.text || "").join("") || "لم يُحصل على رد");
		} catch {
			setAiResult("خطأ في الاتصال");
		}
		setAiLoading(false);
	};
	const handleAISearch = async (q) => {
		if (!q) return;
		setAiLoading(true);
		setAiResult("");
		const docsCtx = docs.slice(0, 30).map((d) => `[${d.id}] ${d.title} | ${d.archiveRef || ""} | ف${d.chapterId}`).join("\n");
		try {
			setAiResult((await callLLM({
				max_tokens: 1200,
				messages: [{
					role: "user",
					content: `أنت مساعد بحثي لأطروحة "الخليج العربي خلال الحرب العالمية الثانية 1939-1945".
سؤال الباحث: "${q}"
الوثائق المتاحة (${docs.length} وثيقة):
${docsCtx}
أجب بتحليل أكاديمي، اذكر أرقام الوثائق الأكثر صلة، واقترح خطوات بحثية. أجب بالعربية.`
				}]
			})).content?.map((c) => c.text || "").join("") || "");
		} catch {
			setAiResult("خطأ في الاتصال");
		}
		setAiLoading(false);
	};
	const saveCustomFormat = () => {
		if (!customFmtForm.name.trim()) {
			showNotif("أدخل اسم الصيغة", "error");
			return;
		}
		let updated;
		if (editingCustomFmt !== null) {
			updated = customFormats.map((f, i) => i === editingCustomFmt ? { ...customFmtForm } : f);
			showNotif(`✅ تم تحديث الصيغة: ${customFmtForm.name}`);
		} else {
			if (customFormats.find((f) => f.name === customFmtForm.name)) {
				showNotif("يوجد صيغة بنفس الاسم", "error");
				return;
			}
			updated = [...customFormats, { ...customFmtForm }];
			showNotif(`✅ تم حفظ الصيغة: ${customFmtForm.name}`);
		}
		setCustomFormats(updated);
		try {
			localStorage.setItem("acadarchiv_custom_formats", JSON.stringify(updated));
		} catch {}
		setEditingCustomFmt(null);
		setShowCustomBuilder(false);
		setCustomFmtForm({
			name: "",
			templates: {
				"كتاب": "{المؤلف}. {العنوان}. {مكان_النشر}: {الناشر}، {السنة}م.",
				"وثيقة أرشيفية": "{المؤلف}. {العنوان}. {الرقم_الأرشيفي}، {السنة}م.",
				"رسالة علمية": "{المؤلف}. {العنوان}. رسالة {الدرجة}، {الجامعة}، {السنة}م.",
				"مقالة": "{المؤلف}. \"{العنوان}\". {اسم_المجلة}، م{المجلد}، ع{العدد} ({السنة})، ص{الصفحات}.",
				"صحيفة": "{المؤلف}. \"{العنوان}\". {اسم_الصحيفة}، {التاريخ}.",
				"موقع إلكتروني": "{المؤلف}. {العنوان}. متاح على: {الرابط}، تاريخ الزيارة: {تاريخ_الزيارة}.",
				"تقرير": "{المؤلف}. {العنوان}. {الجهة}، {السنة}م.",
				"أطروحة دكتوراه": "{المؤلف}. {العنوان}. أطروحة دكتوراه، {الجامعة}، {السنة}م."
			}
		});
	};
	const deleteCustomFormat = (i) => {
		const updated = customFormats.filter((_, idx) => idx !== i);
		setCustomFormats(updated);
		try {
			localStorage.setItem("acadarchiv_custom_formats", JSON.stringify(updated));
		} catch {}
		if (exportFormat === `custom_${i}`) setExportFormat("Chicago");
		showNotif("🗑️ تم حذف الصيغة");
	};
	const applyCustomTemplate = (tmpl, doc) => tmpl.replace(/{المؤلف}/g, doc.author || "أرشيف مكتب الهند").replace(/{العنوان}/g, doc.title || "").replace(/{السنة}/g, doc.year || "د.ت").replace(/{الرقم_الأرشيفي}/g, doc.archiveRef || "").replace(/{النوع}/g, doc.category || "").replace(/{الفصل}/g, CHAPTERS_DATA.find((c) => c.id === doc.chapterId)?.titleAr || "").replace(/{الملاحظات}/g, doc.notes || "").replace(/{الناشر}/g, doc.publisher || "[الناشر]").replace(/{مكان_النشر}/g, doc.place || "[مكان النشر]").replace(/{الجامعة}/g, doc.university || "[الجامعة]").replace(/{الدرجة}/g, doc.degree || "[الدرجة]").replace(/{اسم_المجلة}/g, doc.journal || "[اسم المجلة]").replace(/{المجلد}/g, doc.volume || "[م]").replace(/{العدد}/g, doc.issue || "[ع]").replace(/{الصفحات}/g, doc.pages || "[ص]").replace(/{اسم_الصحيفة}/g, doc.newspaper || "[الصحيفة]").replace(/{التاريخ}/g, doc.date || doc.year || "[التاريخ]").replace(/{الرابط}/g, doc.url || "[الرابط]").replace(/{تاريخ_الزيارة}/g, doc.accessDate || "[تاريخ الزيارة]").replace(/{الجهة}/g, doc.institution || "[الجهة]");
	const handleExport = () => {
		if (!exportSelected.length) {
			showNotif("اختر وثيقة واحدة على الأقل", "error");
			return;
		}
		const sel = docs.filter((d) => exportSelected.includes(d.id));
		let text;
		if (exportFormat.startsWith("custom_")) {
			const fmt = customFormats[parseInt(exportFormat.replace("custom_", ""))];
			text = sel.map((d) => {
				const docType = d.category || "وثيقة أرشيفية";
				return applyCustomTemplate(fmt.templates[docType] || fmt.templates["وثيقة أرشيفية"] || Object.values(fmt.templates)[0] || "{المؤلف}. {العنوان}. {السنة}.", d);
			}).join("\n\n");
		} else text = sel.map((d) => genRef(d, exportFormat)).join("\n\n");
		setExportText(text);
		showNotif(`✅ تم توليد ${sel.length} مرجع`);
	};
	const [cards, setCards] = (0, import_react.useState)(() => {
		try {
			const v = localStorage.getItem("acadarchiv_cards");
			return v && v !== "undefined" ? JSON.parse(v) : [];
		} catch {
			return [];
		}
	});
	const [cardView, setCardView] = (0, import_react.useState)("grid");
	const [selectedCard, setSelectedCard] = (0, import_react.useState)(null);
	const [cardForm, setCardForm] = (0, import_react.useState)({
		title: "",
		topic: "",
		date: "",
		chapterId: "",
		sectionId: "",
		tags: "",
		notes: ""
	});
	const [showCardForm, setShowCardForm] = (0, import_react.useState)(false);
	const [cardAiLoading, setCardAiLoading] = (0, import_react.useState)(false);
	const [cardAiResult, setCardAiResult] = (0, import_react.useState)("");
	const [cardFilterCh, setCardFilterCh] = (0, import_react.useState)("");
	const [cardSearchQ, setCardSearchQ] = (0, import_react.useState)("");
	const saveCards = (updated) => {
		setCards(updated);
		try {
			localStorage.setItem("acadarchiv_cards", JSON.stringify(updated));
		} catch {}
	};
	const generateSmartCard = async () => {
		if (!cardForm.title.trim()) {
			showNotif("أدخل عنوان البطاقة أولاً", "error");
			return;
		}
		setCardAiLoading(true);
		setCardAiResult("");
		const relatedDocs = docs.filter((d) => {
			if (cardForm.chapterId && d.chapterId !== parseInt(cardForm.chapterId)) return false;
			const q = cardForm.topic.toLowerCase();
			return !q || d.title.toLowerCase().includes(q) || (d.notes || "").toLowerCase().includes(q) || (d.section || "").toLowerCase().includes(q);
		}).slice(0, 12);
		const docsContext = relatedDocs.map((d) => `[${d.id}] "${d.title}" — ${d.archiveRef || ""} — ${d.section || ""} — ${d.notes || ""}`).join("\n");
		const chapName = chapters.find((c) => c.id === parseInt(cardForm.chapterId))?.titleAr || "كل الفصول";
		const prompt = `أنت مؤرخ أكاديمي متخصص في تاريخ "الخليج العربي خلال الحرب العالمية الثانية 1939-1945".

عنوان الجذاذة/البطاقة: "${cardForm.title}"
الموضوع: ${cardForm.topic || "—"}
التاريخ/الحقبة: ${cardForm.date || "—"}
الفصل المرتبط: ${chapName}
وسوم التصنيف: ${cardForm.tags || "—"}

المصادر المرتبطة من الأرشيف (${relatedDocs.length} مصدر):
${docsContext || "لم يُعثر على مصادر مطابقة"}

المطلوب: اصنع لي "بطاقة بحثية أكاديمية" متكاملة تتضمن:

1. **السياق التاريخي**: فقرة تحليلية (4-6 أسطر) توضح السياق التاريخي لهذا الحدث/الموضوع في إطار أطروحة الخليج والحرب العالمية الثانية.

2. **الاقتباسات والشواهد المرجعية**: استخرج أو اقترح الأفكار المحورية الموثقة في المصادر المذكورة أعلاه التي تصب في هذا الموضوع (3-5 نقاط).

3. **الصلة بالفصول**: حدد أي الفصول والمباحث يخدمها هذا الموضوع وكيف.

4. **أسئلة بحثية**: 3 أسئلة تحليلية يمكن للباحث طرحها عند صياغة هذا المحور.

5. **مصادر مقترحة إضافية**: اقترح مصادر إضافية (IOR أو غيرها) يمكن البحث عنها في QDL.

أجب بالعربية الأكاديمية الرصينة.`;
		try {
			setCardAiResult((await callLLM({
				max_tokens: 1500,
				messages: [{
					role: "user",
					content: prompt
				}]
			})).content?.map((c) => c.text || "").join("") || "لم يُحصل على رد");
		} catch {
			setCardAiResult("خطأ في الاتصال — تأكد من الإنترنت وحاول مجدداً");
		}
		setCardAiLoading(false);
	};
	const saveCard = () => {
		if (!cardForm.title.trim()) {
			showNotif("أدخل عنوان البطاقة", "error");
			return;
		}
		const relatedDocs = docs.filter((d) => {
			if (cardForm.chapterId && d.chapterId !== parseInt(cardForm.chapterId)) return false;
			const q = cardForm.topic.toLowerCase();
			return !q || d.title.toLowerCase().includes(q) || (d.notes || "").toLowerCase().includes(q);
		}).slice(0, 8).map((d) => d.id);
		saveCards([{
			id: Date.now() + Math.random(),
			title: cardForm.title,
			topic: cardForm.topic,
			date: cardForm.date,
			chapterId: cardForm.chapterId ? parseInt(cardForm.chapterId) : null,
			sectionId: cardForm.sectionId || null,
			tags: cardForm.tags.split("،").map((t) => t.trim()).filter(Boolean),
			notes: cardForm.notes,
			aiContent: cardAiResult,
			relatedDocIds: relatedDocs,
			createdAt: (/* @__PURE__ */ new Date()).toLocaleDateString("ar-IQ")
		}, ...cards]);
		setCardForm({
			title: "",
			topic: "",
			date: "",
			chapterId: "",
			sectionId: "",
			tags: "",
			notes: ""
		});
		setCardAiResult("");
		setShowCardForm(false);
		showNotif("✅ تم حفظ البطاقة البحثية");
	};
	const deleteCard = (id) => {
		saveCards(cards.filter((c) => c.id !== id));
		if (selectedCard?.id === id) {
			setSelectedCard(null);
			setCardView("grid");
		}
		showNotif("🗑️ تم حذف البطاقة");
	};
	const filteredCards = cards.filter((c) => {
		if (cardFilterCh && c.chapterId !== parseInt(cardFilterCh)) return false;
		if (cardSearchQ) {
			const q = cardSearchQ.toLowerCase();
			return c.title.toLowerCase().includes(q) || (c.topic || "").toLowerCase().includes(q) || (c.tags || []).join(" ").toLowerCase().includes(q);
		}
		return true;
	});
	const [translatorText, setTranslatorText] = (0, import_react.useState)("");
	const [translatorFile, setTranslatorFile] = (0, import_react.useState)(null);
	const [translatorFileName, setTranslatorFileName] = (0, import_react.useState)("");
	const [translatedResult, setTranslatedResult] = (0, import_react.useState)("");
	const [keyPoints, setKeyPoints] = (0, import_react.useState)([]);
	const [translatorLoading, setTranslatorLoading] = (0, import_react.useState)(false);
	const [translatorLang, setTranslatorLang] = (0, import_react.useState)("إنجليزية");
	const [translatorDocMeta, setTranslatorDocMeta] = (0, import_react.useState)(null);
	const [savedTranslations, setSavedTranslations] = (0, import_react.useState)(() => {
		try {
			const v = localStorage.getItem("acadarchiv_translations");
			return v && v !== "undefined" ? JSON.parse(v) : [];
		} catch {
			return [];
		}
	});
	const [selectedTranslation, setSelectedTranslation] = (0, import_react.useState)(null);
	const translatorFileRef = (0, import_react.useRef)(null);
	const saveTranslations = (updated) => {
		setSavedTranslations(updated);
		try {
			localStorage.setItem("acadarchiv_translations", JSON.stringify(updated));
		} catch {}
	};
	const handleTranslatorFileUpload = (file) => {
		if (!file) return;
		const ext = file.name.split(".").pop().toLowerCase();
		if (!["txt", "md"].includes(ext)) {
			showNotif("ارفع ملف TXT أو MD فقط — PDF يُلصق نصه يدوياً أدناه", "warn");
			return;
		}
		const reader = new FileReader();
		reader.onload = (e) => {
			setTranslatorText(e.target.result);
			setTranslatorFileName(file.name);
			setTranslatorFile(file);
			showNotif(`✅ تم تحميل: ${file.name}`);
		};
		reader.readAsText(file, "utf-8");
	};
	const runTranslation = async () => {
		const textToTranslate = translatorText.trim();
		if (!textToTranslate) {
			showNotif("أدخل أو ألصق النص الأجنبي أولاً", "error");
			return;
		}
		setTranslatorLoading(true);
		setTranslatedResult("");
		setKeyPoints([]);
		setTranslatorDocMeta(null);
		const prompt = `أنت مترجم ومؤرخ أكاديمي متخصص في وثائق الأرشيف البريطاني (مكتب الهند) والأمريكي المتعلقة بالخليج العربي في الحرب العالمية الثانية 1939-1945.

المهمة: ترجمة وتحليل الوثيقة/النص التالي (${translatorLang}) إلى العربية.

النص الأصلي:
"""
${textToTranslate.substring(0, 4e3)}
"""

أجب بـ JSON فقط بدون أي نص خارجه:
{
  "docMeta": {
    "estimatedTitle": "العنوان المستنتج من المحتوى",
    "author": "المؤلف أو الجهة إن وُجد",
    "date": "التاريخ إن وُجد",
    "docType": "نوع الوثيقة (تقرير/مراسلة/تعليمات/...)",
    "language": "${translatorLang}",
    "suggestedChapter": "اسم الفصل الأنسب"
  },
  "translation": "الترجمة العربية الكاملة بلغة تاريخية رصينة، محافظاً على أسماء الأعلام والأماكن والمصطلحات التاريخية الدقيقة",
  "keyPoints": [
    {"rank": 1, "point": "النقطة الجوهرية الأولى", "chapter": "الفصل المرتبط", "importance": "★★★"},
    {"rank": 2, "point": "النقطة الجوهرية الثانية", "chapter": "الفصل المرتبط", "importance": "★★★"},
    {"rank": 3, "point": "النقطة الجوهرية الثالثة", "chapter": "الفصل المرتبط", "importance": "★★"},
    {"rank": 4, "point": "النقطة الرابعة", "chapter": "الفصل المرتبط", "importance": "★★"},
    {"rank": 5, "point": "النقطة الخامسة", "chapter": "الفصل المرتبط", "importance": "★"}
  ]
}`;
		try {
			const clean = ((await callLLM({
				max_tokens: 2e3,
				messages: [{
					role: "user",
					content: prompt
				}]
			})).content?.map((c) => c.text || "").join("") || "{}").replace(/```json|```/g, "").trim();
			const parsed = JSON.parse(clean);
			setTranslatedResult(parsed.translation || "لم يتم الحصول على الترجمة");
			setKeyPoints(parsed.keyPoints || []);
			setTranslatorDocMeta(parsed.docMeta || null);
		} catch {
			setTranslatedResult("حدث خطأ في الترجمة — تأكد من الاتصال بالإنترنت");
			setKeyPoints([]);
		}
		setTranslatorLoading(false);
	};
	const saveTranslation = () => {
		if (!translatedResult) {
			showNotif("لا يوجد محتوى للحفظ", "error");
			return;
		}
		saveTranslations([{
			id: Date.now() + Math.random(),
			fileName: translatorFileName || "نص ملصوق",
			originalText: translatorText.substring(0, 500),
			translation: translatedResult,
			keyPoints,
			docMeta: translatorDocMeta,
			savedAt: (/* @__PURE__ */ new Date()).toLocaleDateString("ar-IQ")
		}, ...savedTranslations]);
		showNotif("✅ تم حفظ الترجمة في السجل");
	};
	const deleteTranslation = (id) => {
		saveTranslations(savedTranslations.filter((t) => t.id !== id));
		if (selectedTranslation?.id === id) setSelectedTranslation(null);
		showNotif("🗑️ تم حذف الترجمة");
	};
	const pColor = (p) => p === "★★★" ? "#16a34a" : p === "★★" ? "#ca8a04" : "#94a3b8";
	const pBg = (p) => p === "★★★" ? "#dcfce7" : p === "★★" ? "#fef9c3" : "#f1f5f9";
	const calcChapterProgress = (chapterId) => {
		const chDocs = docs.filter((d) => d.chapterId === chapterId);
		const chBibs = bibliography.filter((b) => {
			return docs.find((d) => d.id === b.docId)?.chapterId === chapterId;
		});
		const docScore = Math.min(chDocs.length / 10, 1) * 60;
		const bibScore = Math.min(chBibs.length / 5, 1) * 40;
		return Math.round(docScore + bibScore);
	};
	const calcOverallProgress = () => {
		const scores = [
			1,
			2,
			3,
			4
		].map((id) => calcChapterProgress(id));
		return Math.round(scores.reduce((a, b) => a + b, 0) / 4);
	};
	const DIVERSITY_CATEGORIES = [
		{
			key: "archival",
			label: "الوثائق الأرشيفية",
			color: "#8B5CF6",
			cats: ["مصدر أولي", "وثيقة أرشيفية"]
		},
		{
			key: "books",
			label: "الكتب",
			color: "#3B82F6",
			cats: ["كتاب"]
		},
		{
			key: "theses",
			label: "الرسائل والأطاريح",
			color: "#10B981",
			cats: ["رسالة علمية", "أطروحة دكتوراه"]
		},
		{
			key: "journals",
			label: "المجلات والصحف",
			color: "#F59E0B",
			cats: [
				"مقالة",
				"صحيفة",
				"بحث"
			]
		},
		{
			key: "reports",
			label: "التقارير والمواقع",
			color: "#EF4444",
			cats: ["تقرير", "موقع إلكتروني"]
		}
	];
	const calcDiversityForChapter = (chapterId) => {
		const chDocs = docs.filter((d) => d.chapterId === chapterId);
		const total = chDocs.length || 1;
		return DIVERSITY_CATEGORIES.map((dc) => {
			const count = chDocs.filter((d) => dc.cats.includes(d.category || "مصدر أولي")).length;
			return {
				...dc,
				count,
				pct: Math.round(count / total * 100)
			};
		}).filter((dc) => dc.count > 0);
	};
	const calcDiversityForSection = (sectionId) => {
		const secDocs = docs.filter((d) => d.sectionId === sectionId || d.sectionId?.startsWith(sectionId));
		const total = secDocs.length || 1;
		return DIVERSITY_CATEGORIES.map((dc) => {
			const count = secDocs.filter((d) => dc.cats.includes(d.category || "مصدر أولي")).length;
			return {
				...dc,
				count,
				pct: Math.round(count / total * 100)
			};
		}).filter((dc) => dc.count > 0);
	};
	const MOTIVATIONAL_QUOTES = [
		"يا دكتور أسعد، كلُّ وثيقةٍ تضيفها اليوم هي لَبِنةٌ راسخةٌ في صرحٍ علميٍّ سيُخلِّد اسمك بين مؤرخي الخليج العربي.",
		"يا دكتور أسعد، مجهودك اليوم يُقرِّبك خطوةً كبرى نحو اللقب الأكاديمي — استمر فأنت على الطريق الصحيح!",
		"يا دكتور أسعد، المؤرخُ الحقيقيُّ لا يخشى عمق الأرشيف، فأنت تُنقِّب في ذاكرة الخليج ما أهمله الآخرون.",
		"يا دكتور أسعد، أطروحتك تُعيدُ اكتشافَ فصلٍ مجهولٍ من تاريخ الخليج — لا يُنجز هذا إلا بالصبر والمثابرة التي أراها فيك.",
		"يا دكتور أسعد، إن وثيقةَ IOR التي تقرأها الآن ظلَّت حبيسةَ الأرشيف أكثر من ثمانين عاماً — أنت مَن يُعطيها صوتاً.",
		"يا دكتور أسعد، كلُّ هامشٍ تكتبه يُرسِّخ أمانةَ التوثيق العلمي — فابقَ شامخاً كالمحرّق التي حرستها قواعد الحلفاء.",
		"يا دكتور أسعد، الأرشيفُ البريطانيُّ فتحَ أبوابه لك — فاستخلص منه ما لم يستخلصه غيرك بعد."
	];
	const HISTORICAL_EVENTS = [
		{
			month: 1,
			day: 15,
			text: "في مثل هذا اليوم عام 1942م، صدرت تعليمات بريطانية سرية بتعزيز الحراسة على حقول نفط البحرين إثر تقارير عن تحركات غواصات ألمانية في المحيط الهندي."
		},
		{
			month: 2,
			day: 10,
			text: "في مثل هذا اليوم عام 1941م، وصل أول دفعة من الطائرات الأمريكية إلى قاعدة المحرّق الجوية في البحرين ضمن برنامج التعاون الأنجلو-أمريكي."
		},
		{
			month: 3,
			day: 20,
			text: "في مثل هذا اليوم عام 1943م، أجرت القوات البريطانية تدريبات دفاعية في مضيق هرمز استعداداً لأي هجوم بحري محتمل من دول المحور."
		},
		{
			month: 4,
			day: 5,
			text: "في مثل هذا اليوم عام 1940م، رصد المراقبون البريطانيون في الكويت تحركات مريبة لسفن تجارية لم تُفصح عن هويتها في شمال الخليج."
		},
		{
			month: 5,
			day: 12,
			text: "في مثل هذا اليوم عام 1942م، بدأت شركة بابكو (نفط البحرين) تطبيق خطة الإنكار الطارئة التي تقضي بتدمير المنشآت النفطية عند اقتراب العدو."
		},
		{
			month: 6,
			day: 8,
			text: "في مثل هذا اليوم عام 1941م، تسلّم الملك عبد العزيز آل سعود تقريراً بريطانياً سرياً حول تطورات الحرب في شمال أفريقيا وانعكاساتها على الخليج."
		},
		{
			month: 7,
			day: 22,
			text: "في مثل هذا اليوم عام 1943م، أفادت التقارير البريطانية بأن إنتاج نفط الكويت والبحرين بلغ ذروته لتلبية الطلب المتصاعد من الحلفاء في الجبهة الأوروبية."
		},
		{
			month: 8,
			day: 3,
			text: "في مثل هذا اليوم عام 1940م، أصدرت المقيمية البريطانية في بوشهر تعليمات لشيوخ الخليج بتشديد الرقابة على الموانئ لمنع التهريب إلى دول المحور."
		},
		{
			month: 9,
			day: 17,
			text: "في مثل هذا اليوم عام 1941م، أجرت بريطانيا والاتحاد السوفيتي عملية الغزو المشترك لإيران مما ألقى بظلاله الثقيلة على الأوضاع السياسية في الخليج العربي المجاور."
		},
		{
			month: 10,
			day: 28,
			text: "في مثل هذا اليوم عام 1942م، وصل إلى البحرين مراقبٌ بحريٌّ أمريكي رفيع المستوى لتقييم الأوضاع الأمنية في الخليج بعد تقارير عن اختراقات استخباراتية."
		},
		{
			month: 11,
			day: 14,
			text: "في مثل هذا اليوم عام 1944م، عُقد اجتماع سري في البحرين بين ضباط البحرية البريطانية والأمريكية لمناقشة مستقبل القواعد العسكرية في الخليج بعد الحرب."
		},
		{
			month: 12,
			day: 7,
			text: "في مثل هذا اليوم عام 1941م، هاجمت اليابان ميناء بيرل هاربر؛ الأمر الذي دفع القيادة البريطانية في الخليج إلى رفع درجة الاستعداد القصوى فوراً."
		}
	];
	const getTodayHistoricalEvent = () => {
		const now = /* @__PURE__ */ new Date();
		const month = now.getMonth() + 1;
		const day = now.getDate();
		const found = HISTORICAL_EVENTS.find((e) => e.month === month && e.day === day);
		if (found) return found.text;
		const byMonth = HISTORICAL_EVENTS.filter((e) => e.month === month);
		return byMonth.length > 0 ? byMonth[Math.floor(Math.random() * byMonth.length)].text : HISTORICAL_EVENTS[Math.floor(Math.random() * HISTORICAL_EVENTS.length)].text;
	};
	const [dailyQuoteIdx, setDailyQuoteIdx] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).getDate() % MOTIVATIONAL_QUOTES.length);
	const [historicalEvent] = (0, import_react.useState)(getTodayHistoricalEvent);
	const [fuelCardExpanded, setFuelCardExpanded] = (0, import_react.useState)(true);
	const [defenseMessages, setDefenseMessages] = (0, import_react.useState)([]);
	const [defenseInput, setDefenseInput] = (0, import_react.useState)("");
	const [defenseLoading, setDefenseLoading] = (0, import_react.useState)(false);
	const [defenseActive, setDefenseActive] = (0, import_react.useState)(false);
	const [defenseChapter, setDefenseChapter] = (0, import_react.useState)(null);
	const defenseChatEndRef = (0, import_react.useRef)(null);
	const startDefenseSession = async (ch) => {
		setDefenseChapter(ch);
		setDefenseActive(true);
		setDefenseMessages([]);
		setDefenseLoading(true);
		const chDocs = docs.filter((d) => d.chapterId === ch.id);
		const diversityText = calcDiversityForChapter(ch.id).map((d) => `${d.label}: ${d.count} مصدر (${d.pct}%)`).join("، ");
		const docsContext = chDocs.slice(0, 15).map((d) => `• "${d.title}" [${d.archiveRef || "—"}]`).join("\n");
		const systemPrompt = `أنت أستاذ دكتور متخصص في التاريخ الحديث، وتؤدي دور رئيس لجنة مناقشة أطروحة دكتوراه بجامعة الموصل. أسلوبك علمي صارم ورصين، تطرح أسئلة نقدية ذكية ومباشرة. لا تُجامل ولا تُهادن، لكنك منصف وبنّاء.

الأطروحة: "الخليج العربي في سنوات الحرب العالمية الثانية 1939-1945"
الطالب: اسعد حامد اسعد النعيمي — جامعة الموصل
الفصل المُناقَش: ${ch.titleAr}

المصادر المُعتمدة في هذا الفصل (${chDocs.length} مصدر):
${docsContext}

توزيع أنواع المصادر: ${diversityText || "لم تُحدد بعد"}

ابدأ المناقشة بسؤال افتتاحي واحد محدد ومركَّز يتعلق بالفصل المذكور ومصادره. اجعل سؤالك يعكس ملاحظة دقيقة من قراءة المصادر الواردة. أجب دائماً بالعربية الفصحى الأكاديمية.`;
		try {
			setDefenseMessages([{
				role: "committee",
				text: (await callLLM({
					max_tokens: 600,
					system: systemPrompt,
					messages: [{
						role: "user",
						content: "ابدأ المناقشة"
					}]
				})).content?.map((c) => c.text || "").join("") || "حدث خطأ في بدء الجلسة.",
				ts: (/* @__PURE__ */ new Date()).toLocaleTimeString("ar")
			}]);
		} catch {
			setDefenseMessages([{
				role: "committee",
				text: "تعذّر الاتصال بنظام المحاكاة — تأكد من الاتصال بالإنترنت.",
				ts: (/* @__PURE__ */ new Date()).toLocaleTimeString("ar")
			}]);
		}
		setDefenseLoading(false);
	};
	const sendDefenseReply = async () => {
		if (!defenseInput.trim() || defenseLoading) return;
		const userMsg = {
			role: "student",
			text: defenseInput.trim(),
			ts: (/* @__PURE__ */ new Date()).toLocaleTimeString("ar")
		};
		const newMsgs = [...defenseMessages, userMsg];
		setDefenseMessages(newMsgs);
		setDefenseInput("");
		setDefenseLoading(true);
		const chDocs = docs.filter((d) => d.chapterId === defenseChapter?.id);
		const diversityText = calcDiversityForChapter(defenseChapter?.id).map((d) => `${d.label}: ${d.count} مصدر (${d.pct}%)`).join("، ");
		const systemPrompt = `أنت رئيس لجنة مناقشة أطروحة دكتوراه صارم وعالم. الأطروحة: "الخليج العربي في سنوات الحرب العالمية الثانية 1939-1945". الفصل: ${defenseChapter?.titleAr}. المصادر: ${chDocs.length} مصدر. توزيعها: ${diversityText}. بعد كل إجابة من الطالب، علِّق عليها بجملتين علميتين ثم اطرح سؤالاً نقدياً جديداً ذكياً يتعمق في الموضوع أو يكشف ثغرة محتملة. أسلوبك رصين وصارم وبنّاء. أجب بالعربية الفصحى الأكاديمية دائماً. لا تطل الردود: رد + سؤال واحد فقط.`;
		const apiMessages = newMsgs.map((m) => ({
			role: m.role === "student" ? "user" : "assistant",
			content: m.text
		}));
		try {
			const text = (await callLLM({
				max_tokens: 500,
				system: systemPrompt,
				messages: apiMessages
			})).content?.map((c) => c.text || "").join("") || "حدث خطأ.";
			setDefenseMessages((prev) => [...prev, {
				role: "committee",
				text,
				ts: (/* @__PURE__ */ new Date()).toLocaleTimeString("ar")
			}]);
		} catch {
			setDefenseMessages((prev) => [...prev, {
				role: "committee",
				text: "تعذّر الاتصال — حاول مرة أخرى.",
				ts: (/* @__PURE__ */ new Date()).toLocaleTimeString("ar")
			}]);
		}
		setDefenseLoading(false);
		setTimeout(() => defenseChatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
	};
	const endDefenseSession = () => {
		setDefenseActive(false);
		setDefenseChapter(null);
		setDefenseMessages([]);
		setDefenseInput("");
	};
	const [thesWordInput, setThesWordInput] = (0, import_react.useState)("");
	const [thesWordResult, setThesWordResult] = (0, import_react.useState)(null);
	const [thesWordLoading, setThesWordLoading] = (0, import_react.useState)(false);
	const [thesWordHistory, setThesWordHistory] = (0, import_react.useState)([]);
	const [thesPhrase, setThesPhrase] = (0, import_react.useState)("");
	const [thesPhraseResult, setThesPhraseResult] = (0, import_react.useState)(null);
	const [thesPhraseLoading, setThesPhraseLoading] = (0, import_react.useState)(false);
	const [thesPhraseHistory, setThesPhraseHistory] = (0, import_react.useState)([]);
	const [thesActiveTab, setThesActiveTab] = (0, import_react.useState)("synonyms");
	const runThesaurusSearch = async () => {
		const word = thesWordInput.trim();
		if (!word) {
			showNotif("أدخل كلمة للبحث عن مرادفاتها", "error");
			return;
		}
		setThesWordLoading(true);
		setThesWordResult(null);
		const prompt = `أنت معجم لغوي أكاديمي متخصص في اللغة العربية الفصحى والكتابة التاريخية الأكاديمية.

الكلمة المطلوب إيجاد مرادفاتها: "${word}"

السياق: هذه الكلمة تُستخدم في كتابة أطروحة دكتوراه بعنوان "الخليج العربي في سنوات الحرب العالمية الثانية 1939-1945".

المطلوب: قدّم 8 مرادفات أكاديمية فصيحة متنوعة، مراعياً تنوع السياقات الأكاديمية (سياسي، اقتصادي، عسكري، تاريخي).

أجب بـ JSON فقط بدون أي نص خارجه:
{
  "word": "${word}",
  "category": "الفئة الصرفية (فعل/اسم/صفة)",
  "semanticField": "الحقل الدلالي الرئيسي للكلمة",
  "synonyms": [
    {
      "word": "المرادف الأول",
      "formType": "ماضٍ/مضارع/مصدر/صفة",
      "register": "رسمي/تاريخي/أكاديمي/دبلوماسي",
      "context": "السياق الأنسب لاستخدامه (جملة أو وصف قصير)",
      "example": "مثال جملة كاملة بأسلوب أكاديمي تاريخي"
    }
  ],
  "avoidNote": "ملاحظة عن سبب تكرار الكلمة الأصلية وكيفية تفاديه"
}`;
		try {
			const clean = ((await callLLM({
				max_tokens: 1500,
				messages: [{
					role: "user",
					content: prompt
				}]
			})).content?.map((c) => c.text || "").join("") || "{}").replace(/```json|```/g, "").trim();
			const parsed = JSON.parse(clean);
			setThesWordResult(parsed);
			setThesWordHistory((prev) => [{
				word,
				result: parsed
			}, ...prev.filter((h) => h.word !== word)].slice(0, 8));
		} catch {
			showNotif("حدث خطأ في الاتصال — حاول مجدداً", "error");
		}
		setThesWordLoading(false);
	};
	const runPhraseUpgrade = async () => {
		const phrase = thesPhrase.trim();
		if (!phrase) {
			showNotif("أدخل العبارة أو التركيب المراد ترقيته", "error");
			return;
		}
		if (phrase.split(/\s+/).length > 12) {
			showNotif("الرجاء إدخال عبارة قصيرة (حتى 12 كلمة)", "warn");
			return;
		}
		setThesPhraseLoading(true);
		setThesPhraseResult(null);
		const prompt = `أنت أستاذ في اللغة العربية وأسلوب الكتابة التاريخية الأكاديمية، متخصص في أطاريح الدكتوراه.

العبارة أو التركيب المُدخَل: "${phrase}"
السياق: أطروحة دكتوراه بعنوان "الخليج العربي في سنوات الحرب العالمية الثانية 1939-1945"

المطلوب: أعد صياغة هذه العبارة بأساليب تاريخية أكاديمية رصينة تليق بمستوى الدكتوراه. قدّم 5 صياغات مختلفة تتباين في الأسلوب والتركيب.

أجب بـ JSON فقط بدون أي نص خارجه:
{
  "original": "${phrase}",
  "diagnosis": "تشخيص مختصر لمشكلة الصياغة الأصلية (ركاكة/تبسيط/غموض/...)",
  "upgrades": [
    {
      "text": "الصياغة المُرقَّاة",
      "style": "الأسلوب المُعتمد (وصفي/تحليلي/استنتاجي/علّي/بلاغي)",
      "note": "ملاحظة توضح ما أضافه هذا الأسلوب"
    }
  ],
  "generalTip": "نصيحة عامة للباحث حول كيفية الارتقاء بأسلوبه في هذا السياق التاريخي"
}`;
		try {
			const clean = ((await callLLM({
				max_tokens: 1500,
				messages: [{
					role: "user",
					content: prompt
				}]
			})).content?.map((c) => c.text || "").join("") || "{}").replace(/```json|```/g, "").trim();
			const parsed = JSON.parse(clean);
			setThesPhraseResult(parsed);
			setThesPhraseHistory((prev) => [{
				phrase,
				result: parsed
			}, ...prev.filter((h) => h.phrase !== phrase)].slice(0, 6));
		} catch {
			showNotif("حدث خطأ في الاتصال — حاول مجدداً", "error");
		}
		setThesPhraseLoading(false);
	};
	const REGISTER_COLOR = {
		"رسمي": "#3B82F6",
		"تاريخي": "#8B5CF6",
		"أكاديمي": "#10B981",
		"دبلوماسي": "#F59E0B",
		"وصفي": "#3B82F6",
		"تحليلي": "#8B5CF6",
		"استنتاجي": "#10B981",
		"علّي": "#F59E0B",
		"بلاغي": "#EF4444"
	};
	const navItems = [
		{
			id: "home",
			label: "الرئيسية",
			icon: "🏠"
		},
		{
			id: "structure",
			label: "هيكل الأطروحة",
			icon: "📖"
		},
		{
			id: "search",
			label: "الوثائق",
			icon: "🗂️"
		},
		{
			id: "cards",
			label: `بطاقات وجذاذات (${cards.length})`,
			icon: "🗃️"
		},
		{
			id: "translator",
			label: "ترجمة الوثائق الأجنبية",
			icon: "🌐"
		},
		{
			id: "thesaurus",
			label: "قاموس المؤرخ",
			icon: "📜"
		},
		{
			id: "library",
			label: `مكتبتي (${library.length})`,
			icon: "📚"
		},
		{
			id: "url_import",
			label: "استيراد رابط",
			icon: "🔗"
		},
		{
			id: "add",
			label: "إضافة",
			icon: "➕"
		},
		{
			id: "export",
			label: "تصدير",
			icon: "📤"
		},
		{
			id: "bibliography",
			label: `المراجع النهائية (${bibliography.length})`,
			icon: "📋"
		},
		{
			id: "defense",
			label: "محاكي المناقشة",
			icon: "🎓"
		},
		{
			id: "ai",
			label: "مساعد ذكي",
			icon: "🤖"
		},
		{
			id: "telegram",
			label: "تيليغرام",
			icon: "✈️"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			fontFamily: "'Segoe UI',Tahoma,Geneva,Verdana,sans-serif",
			direction: "rtl",
			minHeight: "100vh",
			background: "#f1f5f9",
			color: "#1e293b"
		},
		children: [
			notif && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "fixed",
					top: 14,
					left: "50%",
					transform: "translateX(-50%)",
					zIndex: 9999,
					background: notif.type === "error" ? "#fee2e2" : notif.type === "warn" ? "#fef9c3" : "#dcfce7",
					color: notif.type === "error" ? "#dc2626" : notif.type === "warn" ? "#92400e" : "#16a34a",
					padding: "10px 24px",
					borderRadius: 12,
					fontWeight: 500,
					fontSize: 13,
					border: `1px solid ${notif.type === "error" ? "#fca5a5" : notif.type === "warn" ? "#fde68a" : "#86efac"}`,
					boxShadow: "0 4px 20px rgba(0,0,0,0.12)"
				},
				children: notif.msg
			}),
			footnoteModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "fixed",
					inset: 0,
					background: "rgba(0,0,0,0.5)",
					zIndex: 1e4,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: 16
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: "white",
						borderRadius: 16,
						padding: 24,
						maxWidth: 560,
						width: "100%",
						boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
						direction: "rtl"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 16
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 700,
									fontSize: 15,
									color: "#1e293b"
								},
								children: "📝 توليد هامش المتن"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFootnoteModal(null),
								style: {
									background: "#f1f5f9",
									border: "none",
									borderRadius: 8,
									width: 30,
									height: 30,
									cursor: "pointer",
									fontSize: 16,
									color: "#64748b"
								},
								children: "✕"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "#f8fafc",
								borderRadius: 10,
								padding: 12,
								marginBottom: 14,
								border: "0.5px solid #e2e8f0"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 12,
										color: "#64748b",
										marginBottom: 3
									},
									children: "المصدر المختار:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										fontSize: 13,
										marginBottom: 4
									},
									children: footnoteModal.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 8,
										flexWrap: "wrap",
										fontSize: 11,
										color: "#64748b"
									},
									children: [
										footnoteModal.author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["👤 ", footnoteModal.author] }),
										footnoteModal.year && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", footnoteModal.year] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												background: "#eff6ff",
												color: "#3B82F6",
												borderRadius: 4,
												padding: "1px 6px"
											},
											children: footnoteModal.category || footnoteModal.sourceType || "مصدر أولي"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { marginBottom: 14 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								style: {
									fontSize: 12,
									color: "#475569",
									display: "block",
									marginBottom: 6,
									fontWeight: 500
								},
								children: "رقم الصفحة المراد توثيقها *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: footnotePageRef,
								type: "text",
								value: footnotePageNum,
								onChange: (e) => {
									setFootnotePageNum(e.target.value);
									setFootnoteResult("");
								},
								onKeyDown: (e) => {
									if (e.key === "Enter") handleGenerateFootnote();
								},
								placeholder: "مثال: 45 أو 45-47",
								style: {
									width: "100%",
									padding: "10px 14px",
									borderRadius: 8,
									border: "1.5px solid #cbd5e1",
									fontSize: 14,
									fontFamily: "inherit",
									boxSizing: "border-box",
									outline: "none"
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleGenerateFootnote,
							style: {
								width: "100%",
								padding: "9px",
								borderRadius: 8,
								background: "#3B82F6",
								color: "white",
								border: "none",
								cursor: "pointer",
								fontWeight: 600,
								fontFamily: "inherit",
								fontSize: 13,
								marginBottom: 14
							},
							children: "توليد الهامش"
						}),
						footnoteResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { marginBottom: 14 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 11,
									color: "#64748b",
									marginBottom: 6,
									fontWeight: 500
								},
								children: "الهامش المُولَّد:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									background: "#f0fdf4",
									borderRadius: 8,
									padding: 12,
									border: "1px solid #86efac",
									fontSize: 13,
									lineHeight: 1.9,
									color: "#1e293b",
									direction: "rtl"
								},
								children: footnoteResult
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								gap: 8
							},
							children: [footnoteResult && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: copyFootnoteAndRegister,
								style: {
									flex: 1,
									padding: "9px",
									borderRadius: 8,
									background: "#10B981",
									color: "white",
									border: "none",
									cursor: "pointer",
									fontWeight: 600,
									fontFamily: "inherit",
									fontSize: 13
								},
								children: "📋 نسخ الهامش + إضافة للمراجع النهائية"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFootnoteModal(null),
								style: {
									padding: "9px 16px",
									borderRadius: 8,
									background: "transparent",
									border: "0.5px solid #cbd5e1",
									cursor: "pointer",
									fontFamily: "inherit",
									fontSize: 13
								},
								children: "إغلاق"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					background: "linear-gradient(135deg,#1e3a5f 0%,#2d5a8e 100%)",
					color: "white",
					padding: "0 16px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						maxWidth: 1200,
						margin: "0 auto",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						height: 60
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 10
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { fontSize: 24 },
							children: "🗂️"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontWeight: 700,
								fontSize: 15
							},
							children: "أرشيف الأطروحة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 10,
								opacity: .75
							},
							children: "الخليج العربي • الحرب العالمية الثانية 1939-1945 • د. اسعد النعيمي"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: 2,
							flexWrap: "wrap",
							alignItems: "center"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: aiModel,
							onChange: (e) => {
								setAiModel(e.target.value);
								setSelectedModel(e.target.value);
							},
							title: "اختر نموذج الذكاء الاصطناعي",
							style: {
								border: "1px solid rgba(255,255,255,0.3)",
								borderRadius: 6,
								padding: "4px 8px",
								fontSize: 11,
								background: "rgba(255,255,255,0.15)",
								color: "white",
								cursor: "pointer",
								fontFamily: "inherit",
								marginLeft: 6
							},
							children: AI_MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: m.id,
								style: { color: "#1e293b" },
								children: ["🤖 ", m.label]
							}, m.id))
						}), navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPage(n.id),
							style: {
								background: page === n.id ? "rgba(255,255,255,0.2)" : "transparent",
								border: "none",
								color: "white",
								padding: "5px 9px",
								borderRadius: 6,
								cursor: "pointer",
								fontSize: 12,
								fontFamily: "inherit",
								display: "flex",
								alignItems: "center",
								gap: 3
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { display: "none" },
								className: "nav-label",
								children: n.label
							})]
						}, n.id))]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						maxWidth: 1200,
						margin: "0 auto",
						display: "flex",
						gap: 2,
						paddingBottom: 6
					},
					children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setPage(n.id),
						style: {
							background: page === n.id ? "rgba(255,255,255,0.15)" : "transparent",
							border: "none",
							color: "white",
							padding: "3px 8px",
							borderRadius: 5,
							cursor: "pointer",
							fontSize: 11,
							fontFamily: "inherit",
							opacity: page === n.id ? 1 : .75
						},
						children: n.label
					}, n.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					maxWidth: 1200,
					margin: "0 auto",
					padding: "20px 14px"
				},
				children: [
					page === "structure" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "flex-start",
							marginBottom: 20,
							flexWrap: "wrap",
							gap: 10
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							style: {
								fontSize: 20,
								fontWeight: 700,
								marginBottom: 4
							},
							children: "📖 هيكل الأطروحة — الفصول والمباحث والوثائق"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								color: "#64748b",
								fontSize: 12
							},
							children: "الخليج العربي في سنوات الحرب العالمية الثانية 1939-1945 — اسعد حامد اسعد النعيمي — جامعة الموصل"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 11,
								color: "#94a3b8",
								background: "#f8fafc",
								borderRadius: 8,
								padding: "6px 12px",
								border: "0.5px solid #e2e8f0"
							},
							children: "💡 اضغط \"تعديل\" بجانب أي فصل أو مبحث لتغيير عنوانه — ستُحدَّث الوثائق المرتبطة تلقائياً"
						})]
					}), chapters.map((ch) => {
						const chDocs = docs.filter((d) => d.chapterId === ch.id);
						const mainSections = ch.sections.filter((s) => !s.id.includes("a") && !s.id.includes("b") && !s.id.includes("c"));
						const isEditingThisChapter = editingChapter?.id === ch.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 14,
								border: `2px solid ${ch.color}30`,
								borderTop: `4px solid ${ch.color}`,
								marginBottom: 20,
								overflow: "hidden"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									padding: "14px 18px",
									background: `${ch.color}08`,
									borderBottom: `0.5px solid ${ch.color}20`
								},
								children: isEditingThisChapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 8,
										alignItems: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											autoFocus: true,
											value: editingChapter.value,
											onChange: (e) => setEditingChapter((p) => ({
												...p,
												value: e.target.value
											})),
											onKeyDown: (e) => {
												if (e.key === "Enter") commitChapterEdit();
												if (e.key === "Escape") setEditingChapter(null);
											},
											style: {
												flex: 1,
												padding: "7px 12px",
												borderRadius: 7,
												border: `2px solid ${ch.color}`,
												fontSize: 13,
												fontFamily: "inherit",
												fontWeight: 600,
												outline: "none"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: commitChapterEdit,
											style: {
												padding: "6px 14px",
												borderRadius: 7,
												background: ch.color,
												color: "white",
												border: "none",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 12,
												fontWeight: 600
											},
											children: "حفظ"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setEditingChapter(null),
											style: {
												padding: "6px 10px",
												borderRadius: 7,
												background: "transparent",
												border: "0.5px solid #cbd5e1",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 12
											},
											children: "إلغاء"
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "flex-start",
										flexWrap: "wrap",
										gap: 8
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { flex: 1 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 700,
												fontSize: 14,
												color: ch.color,
												marginBottom: 4
											},
											children: ch.titleAr
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												gap: 8,
												fontSize: 11,
												color: "#64748b"
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"📄 ",
													chDocs.length,
													" وثيقة"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"⭐ ",
													chDocs.filter((d) => d.priority === "★★★").length,
													" عالية الأولوية"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"🆕 ",
													chDocs.filter((d) => d.isNew).length,
													" جديدة"
												] })
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 6
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setEditingChapter({
												id: ch.id,
												value: ch.titleAr
											}),
											style: {
												padding: "4px 10px",
												borderRadius: 6,
												background: "white",
												border: `1px solid ${ch.color}`,
												color: ch.color,
												cursor: "pointer",
												fontSize: 11,
												fontFamily: "inherit"
											},
											children: "✏️ تعديل"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setSearchFilters((p) => ({
													...p,
													chapterId: ch.id.toString(),
													query: ""
												}));
												setPage("search");
											},
											style: {
												padding: "4px 10px",
												borderRadius: 6,
												background: ch.color,
												color: "white",
												border: "none",
												cursor: "pointer",
												fontSize: 11,
												fontFamily: "inherit"
											},
											children: "عرض الوثائق"
										})]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { padding: "12px 18px" },
								children: mainSections.map((sec) => {
									const secDocs = docs.filter((d) => d.sectionId === sec.id || d.sectionId?.startsWith(sec.id));
									const subSections = ch.sections.filter((s) => s.id.startsWith(sec.id) && s.id !== sec.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											marginBottom: 16,
											paddingBottom: 16,
											borderBottom: "0.5px solid #f1f5f9"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													marginBottom: 8,
													gap: 8
												},
												children: [editingSection?.chId === ch.id && editingSection?.secId === sec.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														display: "flex",
														gap: 6,
														alignItems: "center",
														flex: 1
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															autoFocus: true,
															value: editingSection.value,
															onChange: (e) => setEditingSection((p) => ({
																...p,
																value: e.target.value
															})),
															onKeyDown: (e) => {
																if (e.key === "Enter") commitSectionEdit();
																if (e.key === "Escape") setEditingSection(null);
															},
															style: {
																flex: 1,
																padding: "5px 10px",
																borderRadius: 6,
																border: `2px solid ${ch.color}`,
																fontSize: 12,
																fontFamily: "inherit",
																fontWeight: 600,
																outline: "none"
															}
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: commitSectionEdit,
															style: {
																padding: "4px 10px",
																borderRadius: 6,
																background: ch.color,
																color: "white",
																border: "none",
																cursor: "pointer",
																fontSize: 11,
																fontFamily: "inherit",
																fontWeight: 600
															},
															children: "حفظ"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => setEditingSection(null),
															style: {
																padding: "4px 8px",
																borderRadius: 6,
																background: "transparent",
																border: "0.5px solid #cbd5e1",
																cursor: "pointer",
																fontSize: 11,
																fontFamily: "inherit"
															},
															children: "إلغاء"
														})
													]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: 6,
														flex: 1
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontWeight: 600,
															fontSize: 13,
															color: "#1e293b",
															flex: 1
														},
														children: sec.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: (e) => {
															e.stopPropagation();
															setEditingSection({
																chId: ch.id,
																secId: sec.id,
																value: sec.title
															});
														},
														style: {
															padding: "2px 8px",
															borderRadius: 5,
															background: "transparent",
															border: `0.5px solid ${ch.color}`,
															color: ch.color,
															cursor: "pointer",
															fontSize: 10,
															fontFamily: "inherit",
															flexShrink: 0
														},
														children: "✏️"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: {
														background: `${ch.color}15`,
														color: ch.color,
														borderRadius: 5,
														padding: "1px 8px",
														fontSize: 10,
														fontWeight: 600,
														flexShrink: 0
													},
													children: [secDocs.length, " وثيقة"]
												})]
											}),
											subSections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													marginBottom: 8,
													paddingRight: 8,
													borderRight: `2px solid ${ch.color}30`
												},
												children: subSections.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontSize: 11,
														color: "#64748b",
														padding: "2px 0"
													},
													children: sub.title
												}, sub.id))
											}),
											secDocs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													display: "grid",
													gap: 5
												},
												children: secDocs.sort((a, b) => ({
													"★★★": 3,
													"★★": 2,
													"★": 1
												}[b.priority] || 0) - ({
													"★★★": 3,
													"★★": 2,
													"★": 1
												}[a.priority] || 0)).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														display: "flex",
														gap: 8,
														alignItems: "flex-start",
														padding: "7px 10px",
														background: "#f8fafc",
														borderRadius: 7,
														border: "0.5px solid #f1f5f9",
														transition: "all 0.15s"
													},
													onMouseEnter: (e) => {
														e.currentTarget.style.background = "#eff6ff";
														e.currentTarget.style.borderColor = ch.color + "40";
													},
													onMouseLeave: (e) => {
														e.currentTarget.style.background = "#f8fafc";
														e.currentTarget.style.borderColor = "#f1f5f9";
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															style: {
																background: pBg(d.priority),
																color: pColor(d.priority),
																borderRadius: 4,
																padding: "1px 5px",
																fontSize: 9,
																fontWeight: 700,
																flexShrink: 0,
																marginTop: 2
															},
															children: d.priority
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															style: {
																flex: 1,
																minWidth: 0,
																cursor: "pointer"
															},
															onClick: () => {
																setSelectedDoc(d);
																setPage("detail");
															},
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																style: {
																	fontSize: 12,
																	fontWeight: 500,
																	marginBottom: 1,
																	overflow: "hidden",
																	textOverflow: "ellipsis",
																	whiteSpace: "nowrap"
																},
																children: d.title
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																style: {
																	display: "flex",
																	gap: 6,
																	fontSize: 10,
																	color: "#94a3b8",
																	flexWrap: "wrap"
																},
																children: [
																	d.archiveRef && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		style: {
																			color: "#8B5CF6",
																			fontFamily: "monospace"
																		},
																		children: d.archiveRef
																	}),
																	d.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		style: { color: "#16a34a" },
																		children: "🆕 جديد"
																	}),
																	d.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [d.notes.substring(0, 50), d.notes.length > 50 ? "..." : ""] })
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: (e) => {
																e.stopPropagation();
																openFootnoteModal(d);
															},
															title: "توليد هامش",
															style: {
																padding: "3px 8px",
																borderRadius: 5,
																background: "#faf5ff",
																border: "0.5px solid #d8b4fe",
																color: "#7C3AED",
																cursor: "pointer",
																fontSize: 10,
																fontFamily: "inherit",
																flexShrink: 0
															},
															children: "📝"
														})
													]
												}, d.id))
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													padding: "8px 10px",
													background: "#fff7ed",
													borderRadius: 7,
													border: "0.5px solid #fed7aa",
													fontSize: 11,
													color: "#c2410c"
												},
												children: "⚠️ لا توجد وثائق مرتبطة بهذا المبحث بعد — أضف مصادر من مكتبتك أو ابحث في QDL"
											})
										]
									}, sec.id);
								})
							})]
						}, ch.id);
					})] }),
					page === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								textAlign: "center",
								marginBottom: 20
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: 22,
									fontWeight: 700,
									marginBottom: 4
								},
								children: "الفهرس الشامل للأطروحة"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "#64748b",
									fontSize: 12
								},
								children: "الطالب: اسعد حامد اسعد النعيمي — جامعة الموصل — إشراف: أ.م.د فواز موفق ذنون"
							})]
						}),
						(() => {
							const overallPct = calcOverallProgress();
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 14,
									padding: "18px 20px",
									border: "0.5px solid #e2e8f0",
									marginBottom: 16,
									boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 10
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 700,
												fontSize: 14,
												color: "#1e3a5f"
											},
											children: "📈 مسار إنجاز الأطروحة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												alignItems: "center",
												gap: 8
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													fontSize: 11,
													color: "#64748b"
												},
												children: "الإنجاز العام"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													fontSize: 22,
													fontWeight: 800,
													color: overallPct >= 70 ? "#10B981" : overallPct >= 40 ? "#F59E0B" : "#3B82F6"
												},
												children: [overallPct, "%"]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											height: 14,
											background: "#e2e8f0",
											borderRadius: 7,
											overflow: "hidden",
											marginBottom: 16,
											position: "relative"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
											height: "100%",
											width: `${overallPct}%`,
											background: `linear-gradient(90deg, #1e3a5f, ${overallPct >= 70 ? "#10B981" : overallPct >= 40 ? "#F59E0B" : "#3B82F6"})`,
											borderRadius: 7,
											transition: "width 0.8s ease"
										} }), overallPct > 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												position: "absolute",
												right: 8,
												top: "50%",
												transform: "translateY(-50%)",
												fontSize: 10,
												color: "white",
												fontWeight: 600
											},
											children: [overallPct, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											display: "grid",
											gridTemplateColumns: "repeat(2,1fr)",
											gap: 12
										},
										children: chapters.map((ch) => {
											const pct = calcChapterProgress(ch.id);
											const cnt = docs.filter((d) => d.chapterId === ch.id).length;
											const bibs = bibliography.filter((b) => docs.find((d) => d.id === b.docId && d.chapterId === ch.id)).length;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													background: "#f8fafc",
													borderRadius: 9,
													padding: "10px 12px",
													border: `0.5px solid ${ch.color}20`
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															display: "flex",
															justifyContent: "space-between",
															alignItems: "center",
															marginBottom: 5
														},
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															style: {
																fontSize: 11,
																fontWeight: 600,
																color: ch.color
															},
															children: ch.titleAr.split(":")[0]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															style: {
																fontSize: 13,
																fontWeight: 700,
																color: pct >= 70 ? "#10B981" : pct >= 40 ? "#F59E0B" : ch.color
															},
															children: [pct, "%"]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															height: 8,
															background: "#e2e8f0",
															borderRadius: 4,
															overflow: "hidden",
															marginBottom: 5
														},
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
															height: "100%",
															width: `${pct}%`,
															background: ch.color,
															borderRadius: 4,
															transition: "width 0.7s ease"
														} })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															display: "flex",
															gap: 10,
															fontSize: 10,
															color: "#94a3b8"
														},
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"📄 ",
															cnt,
															" وثيقة"
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"📝 ",
															bibs,
															" هامش"
														] })]
													})
												]
											}, ch.id);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											marginTop: 10,
											fontSize: 10,
											color: "#94a3b8",
											textAlign: "center"
										},
										children: "* تُحسب النسبة بناءً على عدد الوثائق المؤرشفة (60٪) والهوامش المُستخرجة (40٪) لكل فصل"
									})
								]
							});
						})(),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(4,1fr)",
								gap: 12,
								marginBottom: 16
							},
							children: [
								{
									label: "إجمالي الوثائق",
									v: stats.total,
									c: "#3B82F6",
									i: "📄"
								},
								{
									label: "عالية الأولوية ★★★",
									v: stats.highP,
									c: "#10B981",
									i: "⭐"
								},
								{
									label: "هوامش مُستخرجة",
									v: bibliography.length,
									c: "#8B5CF6",
									i: "📝"
								},
								{
									label: "بطاقات بحثية",
									v: cards.length,
									c: "#F59E0B",
									i: "🗃️"
								}
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: "14px 12px",
									border: "0.5px solid #e2e8f0",
									textAlign: "center",
									boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 24,
											marginBottom: 6
										},
										children: s.i
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 26,
											fontWeight: 700,
											color: s.c,
											lineHeight: 1
										},
										children: s.v
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 11,
											color: "#64748b",
											marginTop: 4
										},
										children: s.label
									})
								]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: 16,
								marginBottom: 16
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 16,
									border: "0.5px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										fontSize: 13,
										marginBottom: 14,
										color: "#1e293b"
									},
									children: "📊 تنوع الأوزان العلمية لكل فصل"
								}), chapters.map((ch) => {
									const diversity = calcDiversityForChapter(ch.id);
									const total = docs.filter((d) => d.chapterId === ch.id).length;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { marginBottom: 14 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												justifyContent: "space-between",
												marginBottom: 5,
												alignItems: "center"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													fontSize: 12,
													fontWeight: 600,
													color: ch.color
												},
												children: ch.titleAr.split(":")[0]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													fontSize: 10,
													color: "#94a3b8"
												},
												children: [total, " مصدر"]
											})]
										}), total === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 11,
												color: "#94a3b8",
												fontStyle: "italic"
											},
											children: "لا توجد مصادر مُضافة بعد"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												height: 10,
												background: "#f1f5f9",
												borderRadius: 5,
												overflow: "hidden",
												display: "flex",
												marginBottom: 5
											},
											children: diversity.map((dc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												title: `${dc.label}: ${dc.pct}%`,
												style: {
													height: "100%",
													width: `${dc.pct}%`,
													background: dc.color,
													transition: "width 0.5s"
												}
											}, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												display: "flex",
												flexWrap: "wrap",
												gap: 4
											},
											children: diversity.map((dc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													fontSize: 10,
													background: `${dc.color}15`,
													color: dc.color,
													borderRadius: 4,
													padding: "1px 6px"
												},
												children: [
													dc.label,
													": ",
													dc.pct,
													"%"
												]
											}, i))
										})] })]
									}, ch.id);
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "grid",
									gap: 14
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 14,
										border: "0.5px solid #e2e8f0"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 10
										},
										children: "🕐 آخر الوثائق المضافة"
									}), docs.slice(0, 5).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => {
											setSelectedDoc(d);
											setPage("detail");
										},
										style: {
											padding: "6px 0",
											borderBottom: "0.5px solid #f1f5f9",
											cursor: "pointer",
											display: "flex",
											gap: 8,
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												fontSize: 10,
												background: pBg(d.priority),
												color: pColor(d.priority),
												borderRadius: 4,
												padding: "1px 5px",
												flexShrink: 0
											},
											children: d.priority
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 12,
												fontWeight: 500,
												flex: 1,
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap"
											},
											children: d.title
										})]
									}, d.id))]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 50%, #1e3a5f 100%)",
								borderRadius: 14,
								padding: "18px 20px",
								marginBottom: 16,
								color: "white",
								border: "none",
								position: "relative",
								overflow: "hidden"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
									position: "absolute",
									top: -20,
									left: -20,
									width: 120,
									height: 120,
									borderRadius: "50%",
									background: "rgba(255,255,255,0.04)",
									pointerEvents: "none"
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
									position: "absolute",
									bottom: -30,
									right: -10,
									width: 160,
									height: 160,
									borderRadius: "50%",
									background: "rgba(255,255,255,0.03)",
									pointerEvents: "none"
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 14
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											fontWeight: 700,
											fontSize: 14,
											display: "flex",
											alignItems: "center",
											gap: 8
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { fontSize: 20 },
											children: "⚡"
										}), " حافز المؤرخ اليومي"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 6
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setDailyQuoteIdx((i) => (i + 1) % MOTIVATIONAL_QUOTES.length),
											style: {
												padding: "4px 10px",
												borderRadius: 6,
												background: "rgba(255,255,255,0.15)",
												border: "none",
												color: "white",
												cursor: "pointer",
												fontSize: 11,
												fontFamily: "inherit"
											},
											children: "تجديد ←"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setFuelCardExpanded((p) => !p),
											style: {
												padding: "4px 10px",
												borderRadius: 6,
												background: "rgba(255,255,255,0.15)",
												border: "none",
												color: "white",
												cursor: "pointer",
												fontSize: 11,
												fontFamily: "inherit"
											},
											children: fuelCardExpanded ? "طيّ ▲" : "توسيع ▼"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "rgba(255,255,255,0.1)",
										borderRadius: 10,
										padding: "12px 16px",
										marginBottom: fuelCardExpanded ? 14 : 0,
										lineHeight: 1.8,
										fontSize: 13,
										fontStyle: "italic",
										backdropFilter: "blur(4px)"
									},
									children: [
										"\"",
										MOTIVATIONAL_QUOTES[dailyQuoteIdx],
										"\""
									]
								}),
								fuelCardExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										borderTop: "0.5px solid rgba(255,255,255,0.2)",
										paddingTop: 12
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											fontSize: 11,
											opacity: .7,
											marginBottom: 6,
											display: "flex",
											alignItems: "center",
											gap: 5
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حدث في مثل هذا اليوم من سنوات الحرب في الخليج (1939-1945)" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											background: "rgba(255,255,255,0.08)",
											borderRadius: 9,
											padding: "10px 14px",
											fontSize: 12,
											lineHeight: 1.8,
											borderRight: "3px solid rgba(255,255,255,0.3)"
										},
										children: historicalEvent
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 16,
								border: "0.5px solid #e2e8f0"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									fontWeight: 600,
									fontSize: 13,
									marginBottom: 14,
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔬 مؤشر تنوع المصادر — تفصيل المباحث" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: 11,
										color: "#94a3b8",
										fontWeight: 400
									},
									children: "يساعدك على ضمان عدم الاعتماد على نوع واحد من المراجع"
								})]
							}), chapters.map((ch) => {
								const mainSections = ch.sections.filter((s) => !s.id.includes("a") && !s.id.includes("b") && !s.id.includes("c"));
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										marginBottom: 16,
										borderBottom: "0.5px solid #f1f5f9",
										paddingBottom: 16
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 12,
											fontWeight: 700,
											color: ch.color,
											marginBottom: 8
										},
										children: ch.titleAr.split(":")[0]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											display: "grid",
											gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
											gap: 8
										},
										children: mainSections.map((sec) => {
											const secDiversity = calcDiversityForSection(sec.id);
											if (docs.filter((d) => d.sectionId === sec.id || d.sectionId?.startsWith(sec.id)).length === 0) return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													background: "#f8fafc",
													borderRadius: 8,
													padding: "9px 11px",
													border: `0.5px solid ${ch.color}15`
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 11,
															fontWeight: 600,
															color: "#475569",
															marginBottom: 6,
															overflow: "hidden",
															textOverflow: "ellipsis",
															whiteSpace: "nowrap"
														},
														title: sec.title,
														children: sec.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															height: 7,
															background: "#e2e8f0",
															borderRadius: 4,
															overflow: "hidden",
															display: "flex",
															marginBottom: 5
														},
														children: secDiversity.map((dc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															title: `${dc.label}: ${dc.pct}%`,
															style: {
																height: "100%",
																width: `${dc.pct}%`,
																background: dc.color
															}
														}, i))
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															display: "flex",
															flexWrap: "wrap",
															gap: 3
														},
														children: secDiversity.map((dc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															style: {
																fontSize: 9,
																background: `${dc.color}12`,
																color: dc.color,
																borderRadius: 3,
																padding: "0 4px"
															},
															children: [
																dc.label.split(" ")[0],
																": ",
																dc.pct,
																"%"
															]
														}, i))
													})
												]
											}, sec.id);
										})
									})]
								}, ch.id);
							})]
						})
					] }),
					page === "search" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 16
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: 20,
									fontWeight: 700
								},
								children: "🗂️ قاعدة الوثائق الأرشيفية"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									fontSize: 12,
									color: "#64748b",
									background: "#eff6ff",
									padding: "3px 10px",
									borderRadius: 20
								},
								children: [filtered.length, " وثيقة"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 14,
								border: "0.5px solid #e2e8f0",
								marginBottom: 14
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "2fr 1fr 1fr 1fr",
									gap: 10
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										placeholder: "ابحث في العناوين، أرقام IOR، المباحث...",
										value: searchFilters.query,
										onChange: (e) => setSearchFilters((p) => ({
											...p,
											query: e.target.value
										})),
										style: {
											padding: "8px 12px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 13,
											fontFamily: "inherit"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: searchFilters.chapterId,
										onChange: (e) => setSearchFilters((p) => ({
											...p,
											chapterId: e.target.value
										})),
										style: {
											padding: "8px 10px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 12,
											fontFamily: "inherit"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "كل الفصول"
										}), CHAPTERS_DATA.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: ch.id,
											children: ch.titleAr.split(":")[0]
										}, ch.id))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: searchFilters.priority,
										onChange: (e) => setSearchFilters((p) => ({
											...p,
											priority: e.target.value
										})),
										style: {
											padding: "8px 10px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 12,
											fontFamily: "inherit"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "كل الأولويات"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "★★★",
												children: "★★★ اقرأه كاملاً"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "★★",
												children: "★★ أوراق محددة"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "★",
												children: "★ احفظ المرجع"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: searchFilters.isNew,
										onChange: (e) => setSearchFilters((p) => ({
											...p,
											isNew: e.target.value
										})),
										style: {
											padding: "8px 10px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 12,
											fontFamily: "inherit"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "الكل"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "new",
											children: "🆕 الجديدة فقط"
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								border: "0.5px solid #e2e8f0",
								overflow: "hidden"
							},
							children: [filtered.map((d) => {
								const ch = CHAPTERS_DATA.find((c) => c.id === d.chapterId);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => {
										setSelectedDoc(d);
										setPage("detail");
									},
									style: {
										padding: "11px 16px",
										borderBottom: "0.5px solid #f1f5f9",
										cursor: "pointer",
										display: "flex",
										gap: 10,
										alignItems: "flex-start",
										transition: "background 0.15s"
									},
									onMouseEnter: (e) => e.currentTarget.style.background = "#f8fafc",
									onMouseLeave: (e) => e.currentTarget.style.background = "white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											flexDirection: "column",
											gap: 3,
											flexShrink: 0,
											width: 36,
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												background: pBg(d.priority),
												color: pColor(d.priority),
												borderRadius: 5,
												padding: "1px 5px",
												fontSize: 10,
												fontWeight: 700
											},
											children: d.priority
										}), d.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												background: "#f0fdf4",
												color: "#16a34a",
												borderRadius: 5,
												padding: "1px 5px",
												fontSize: 9
											},
											children: "جديد"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											flex: 1,
											minWidth: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontWeight: 500,
													fontSize: 13,
													marginBottom: 2
												},
												children: d.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													display: "flex",
													gap: 8,
													flexWrap: "wrap",
													fontSize: 11,
													color: "#64748b"
												},
												children: [
													d.archiveRef && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														style: {
															color: "#8B5CF6",
															fontFamily: "monospace"
														},
														children: d.archiveRef
													}),
													ch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														style: { color: ch.color },
														children: ["● ", ch.titleAr.split(":")[0]]
													}),
													d.section && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.section })
												]
											}),
											d.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 11,
													color: "#94a3b8",
													marginTop: 2
												},
												children: d.notes
											})
										]
									})]
								}, d.id);
							}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									padding: 40,
									textAlign: "center",
									color: "#94a3b8"
								},
								children: "لا توجد نتائج"
							})]
						})
					] }),
					page === "detail" && selectedDoc && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPage("search"),
							style: {
								marginBottom: 14,
								padding: "7px 14px",
								borderRadius: 8,
								border: "0.5px solid #cbd5e1",
								background: "transparent",
								cursor: "pointer",
								fontFamily: "inherit",
								fontSize: 12
							},
							children: "← العودة"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 20,
								border: "0.5px solid #e2e8f0",
								marginBottom: 14
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "flex-start",
										marginBottom: 14
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { flex: 1 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											style: {
												fontSize: 17,
												fontWeight: 700,
												marginBottom: 8,
												lineHeight: 1.5
											},
											children: selectedDoc.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												gap: 6,
												flexWrap: "wrap"
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														background: pBg(selectedDoc.priority),
														color: pColor(selectedDoc.priority),
														borderRadius: 6,
														padding: "2px 10px",
														fontSize: 12,
														fontWeight: 600
													},
													children: selectedDoc.priority
												}),
												selectedDoc.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														background: "#f0fdf4",
														color: "#16a34a",
														borderRadius: 6,
														padding: "2px 8px",
														fontSize: 11
													},
													children: "🆕 وثيقة جديدة"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														background: "#f5f3ff",
														color: "#8B5CF6",
														borderRadius: 6,
														padding: "2px 8px",
														fontSize: 11,
														fontFamily: "monospace"
													},
													children: selectedDoc.archiveRef
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														background: "#f1f5f9",
														color: "#64748b",
														borderRadius: 6,
														padding: "2px 8px",
														fontSize: 11
													},
													children: selectedDoc.status
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `https://www.qdl.qa/en/archive/81055/vdc_${selectedDoc.archiveRef?.replace(/\//g, "_")}`,
										target: "_blank",
										rel: "noopener noreferrer",
										style: {
											padding: "7px 14px",
											borderRadius: 8,
											background: "#eff6ff",
											color: "#3B82F6",
											border: "0.5px solid #bfdbfe",
											textDecoration: "none",
											fontSize: 12,
											flexShrink: 0
										},
										children: "🔗 QDL"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "grid",
										gridTemplateColumns: "repeat(2,1fr)",
										gap: 12,
										marginBottom: 14
									},
									children: [
										{
											label: "الفصل",
											value: CHAPTERS_DATA.find((c) => c.id === selectedDoc.chapterId)?.titleAr
										},
										{
											label: "المبحث",
											value: selectedDoc.section
										},
										{
											label: "النوع",
											value: selectedDoc.category
										},
										{
											label: "الحالة",
											value: selectedDoc.status
										}
									].map((f) => f.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 11,
											color: "#94a3b8",
											marginBottom: 2
										},
										children: f.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 13,
											fontWeight: 500
										},
										children: f.value
									})] }, f.label))
								}),
								selectedDoc.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										background: "#f8fafc",
										borderRadius: 8,
										padding: 12,
										marginBottom: 14,
										fontSize: 13,
										color: "#475569"
									},
									children: selectedDoc.notes
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 8,
										flexWrap: "wrap"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleAI(selectedDoc),
											disabled: aiLoading,
											style: {
												padding: "8px 16px",
												borderRadius: 8,
												background: "#7C3AED",
												color: "white",
												border: "none",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 13
											},
											children: aiLoading ? "⏳ جاري..." : "🤖 تحليل بالذكاء الاصطناعي"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => openFootnoteModal(selectedDoc),
											style: {
												padding: "8px 14px",
												borderRadius: 8,
												background: "#10B981",
												color: "white",
												border: "none",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 13
											},
											children: "📝 تصدير الهامش"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setExportSelected([selectedDoc.id]);
												setPage("export");
											},
											style: {
												padding: "8px 14px",
												borderRadius: 8,
												background: "transparent",
												border: "0.5px solid #cbd5e1",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 13
											},
											children: "📤 تصدير المرجع"
										})
									]
								})
							]
						}),
						aiLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "#faf5ff",
								borderRadius: 12,
								padding: 24,
								textAlign: "center",
								border: "0.5px solid #d8b4fe"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { fontSize: 32 },
								children: "🤖"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									color: "#64748b",
									marginTop: 8
								},
								children: "جاري التحليل..."
							})]
						}),
						aiResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "#faf5ff",
								borderRadius: 12,
								padding: 20,
								border: "0.5px solid #d8b4fe"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 600,
									color: "#7C3AED",
									marginBottom: 12,
									fontSize: 13
								},
								children: "🤖 تحليل الذكاء الاصطناعي"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								style: {
									whiteSpace: "pre-wrap",
									fontFamily: "inherit",
									fontSize: 13,
									lineHeight: 1.8,
									margin: 0
								},
								children: aiResult
							})]
						})
					] }),
					page === "url_import" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							style: {
								fontSize: 20,
								fontWeight: 700,
								marginBottom: 6
							},
							children: "🔗 استيراد وثيقة من رابط"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								color: "#64748b",
								fontSize: 13,
								marginBottom: 20
							},
							children: "الصق رابط أي وثيقة من QDL أو الأرشيف البريطاني أو أي موقع أرشيفي وسيستخرج الذكاء الاصطناعي بياناتها تلقائياً"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 20,
								border: "0.5px solid #e2e8f0",
								marginBottom: 16
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: { marginBottom: 14 },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									style: {
										fontSize: 13,
										fontWeight: 500,
										display: "block",
										marginBottom: 6
									},
									children: "رابط الوثيقة"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 10
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: urlImport,
										onChange: (e) => setUrlImport(e.target.value),
										placeholder: "https://www.qdl.qa/en/archive/...",
										style: {
											flex: 1,
											padding: "10px 14px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 13,
											fontFamily: "inherit"
										},
										onKeyDown: (e) => {
											if (e.key === "Enter") handleUrlImport();
										}
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleUrlImport,
										disabled: urlLoading,
										style: {
											padding: "10px 20px",
											borderRadius: 8,
											background: "#3B82F6",
											color: "white",
											border: "none",
											cursor: "pointer",
											fontFamily: "inherit",
											fontWeight: 500,
											fontSize: 13,
											whiteSpace: "nowrap"
										},
										children: urlLoading ? "⏳ جاري..." : "استخراج البيانات"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "#f8fafc",
									borderRadius: 8,
									padding: 14,
									fontSize: 12,
									color: "#64748b"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										color: "#475569",
										marginBottom: 6
									},
									children: "المواقع المدعومة:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										flexWrap: "wrap",
										gap: 8
									},
									children: [
										{
											name: "Qatar Digital Library",
											"url": "https://www.qdl.qa"
										},
										{
											name: "British National Archives",
											"url": "https://discovery.nationalarchives.gov.uk"
										},
										{
											name: "Internet Archive",
											"url": "https://archive.org"
										},
										{
											name: "Jstor",
											"url": "https://www.jstor.org"
										},
										{
											name: "Google Scholar",
											"url": "https://scholar.google.com"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: s.url,
										target: "_blank",
										rel: "noopener noreferrer",
										style: {
											background: "#eff6ff",
											color: "#3B82F6",
											borderRadius: 6,
											padding: "3px 10px",
											textDecoration: "none",
											fontSize: 11
										},
										children: ["🔗 ", s.name]
									}, s.name))
								})]
							})]
						}),
						urlLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 30,
								textAlign: "center",
								border: "0.5px solid #e2e8f0"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { fontSize: 36 },
								children: "🔍"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									color: "#64748b",
									marginTop: 8,
									fontSize: 13
								},
								children: "جاري تحليل الرابط واستخراج البيانات..."
							})]
						}),
						urlResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "#f0fdf4",
								borderRadius: 12,
								padding: 16,
								border: "0.5px solid #86efac"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										color: "#16a34a",
										marginBottom: 10,
										fontSize: 13
									},
									children: "✅ تم استخراج البيانات — ستُضاف للنموذج تلقائياً"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									style: {
										whiteSpace: "pre-wrap",
										fontFamily: "inherit",
										fontSize: 12,
										background: "white",
										borderRadius: 8,
										padding: 12,
										border: "0.5px solid #e2e8f0"
									},
									children: JSON.stringify(urlResult, null, 2)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setPage("add"),
									style: {
										marginTop: 10,
										padding: "8px 18px",
										borderRadius: 8,
										background: "#16a34a",
										color: "white",
										border: "none",
										cursor: "pointer",
										fontFamily: "inherit",
										fontSize: 13
									},
									children: "إكمال البيانات وإضافة الوثيقة ←"
								})
							]
						})
					] }),
					page === "add" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							style: {
								fontSize: 20,
								fontWeight: 700,
								marginBottom: 6
							},
							children: "➕ إضافة وثيقة"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								color: "#64748b",
								fontSize: 12,
								marginBottom: 16
							},
							children: "أضف وثيقة يدوياً أو أكمل البيانات المستخرجة من رابط"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 20,
								border: "0.5px solid #e2e8f0"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "repeat(2,1fr)",
									gap: 14
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { gridColumn: "1/-1" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											style: {
												fontSize: 12,
												color: "#64748b",
												display: "block",
												marginBottom: 4
											},
											children: "العنوان *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: addForm.title,
											onChange: (e) => setAddForm((p) => ({
												...p,
												title: e.target.value
											})),
											placeholder: "عنوان الوثيقة",
											style: {
												width: "100%",
												padding: "9px 12px",
												borderRadius: 8,
												border: "0.5px solid #cbd5e1",
												fontSize: 13,
												fontFamily: "inherit",
												boxSizing: "border-box"
											}
										})]
									}),
									[
										{
											key: "archiveRef",
											label: "الرقم الأرشيفي (IOR)",
											ph: "IOR/R/15/2/..."
										},
										{
											key: "author",
											label: "المؤلف / الجهة",
											ph: "اسم المؤلف"
										},
										{
											key: "year",
											label: "السنة",
											ph: "1942",
											type: "number"
										},
										{
											key: "keywords",
											label: "الكلمات المفتاحية",
											ph: "بريطانيا، نفط، استراتيجية"
										}
									].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										style: {
											fontSize: 12,
											color: "#64748b",
											display: "block",
											marginBottom: 4
										},
										children: f.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: f.type || "text",
										value: addForm[f.key],
										onChange: (e) => setAddForm((p) => ({
											...p,
											[f.key]: e.target.value
										})),
										placeholder: f.ph,
										style: {
											width: "100%",
											padding: "8px 12px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 13,
											fontFamily: "inherit",
											boxSizing: "border-box"
										}
									})] }, f.key)),
									[
										{
											key: "chapterId",
											label: "الفصل",
											opts: [{
												v: "",
												l: "اختر فصلاً"
											}, ...CHAPTERS_DATA.map((c) => ({
												v: c.id,
												l: c.titleAr.split(":")[0]
											}))]
										},
										{
											key: "priority",
											label: "الأولوية",
											opts: [
												{
													v: "★★★",
													l: "★★★ اقرأه كاملاً"
												},
												{
													v: "★★",
													l: "★★ أوراق محددة"
												},
												{
													v: "★",
													l: "★ احفظ المرجع"
												}
											]
										},
										{
											key: "category",
											label: "النوع",
											opts: CATEGORIES.map((c) => ({
												v: c,
												l: c
											}))
										},
										{
											key: "country",
											label: "الدولة",
											opts: [{
												v: "",
												l: "اختر"
											}, ...COUNTRIES.map((c) => ({
												v: c,
												l: c
											}))]
										}
									].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										style: {
											fontSize: 12,
											color: "#64748b",
											display: "block",
											marginBottom: 4
										},
										children: f.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: addForm[f.key],
										onChange: (e) => setAddForm((p) => ({
											...p,
											[f.key]: e.target.value
										})),
										style: {
											width: "100%",
											padding: "8px 10px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 12,
											fontFamily: "inherit"
										},
										children: f.opts.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: o.v,
											children: o.l
										}, o.v))
									})] }, f.key)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { gridColumn: "1/-1" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											style: {
												fontSize: 12,
												color: "#64748b",
												display: "block",
												marginBottom: 4
											},
											children: "المبحث"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: addForm.section,
											onChange: (e) => setAddForm((p) => ({
												...p,
												section: e.target.value
											})),
											placeholder: "مثال: م1: الموقع الاستراتيجي في خطط الحلفاء",
											style: {
												width: "100%",
												padding: "8px 12px",
												borderRadius: 8,
												border: "0.5px solid #cbd5e1",
												fontSize: 13,
												fontFamily: "inherit",
												boxSizing: "border-box"
											}
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { gridColumn: "1/-1" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											style: {
												fontSize: 12,
												color: "#64748b",
												display: "block",
												marginBottom: 4
											},
											children: "ملاحظات"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: addForm.notes,
											onChange: (e) => setAddForm((p) => ({
												...p,
												notes: e.target.value
											})),
											rows: 3,
											placeholder: "أهمية الوثيقة، المحتوى المتوقع...",
											style: {
												width: "100%",
												padding: "8px 12px",
												borderRadius: 8,
												border: "0.5px solid #cbd5e1",
												fontSize: 13,
												fontFamily: "inherit",
												resize: "vertical",
												boxSizing: "border-box"
											}
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: 8,
											cursor: "pointer",
											fontSize: 13
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: addForm.isNew,
											onChange: (e) => setAddForm((p) => ({
												...p,
												isNew: e.target.checked
											}))
										}), "وثيقة جديدة (مُكتشفة مؤخراً)"]
									}) })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 10,
									marginTop: 16
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleAddDoc,
										style: {
											padding: "9px 22px",
											borderRadius: 8,
											background: "#3B82F6",
											color: "white",
											border: "none",
											cursor: "pointer",
											fontWeight: 600,
											fontFamily: "inherit",
											fontSize: 13
										},
										children: "إضافة الوثيقة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setAddForm({
											title: "",
											author: "",
											year: "",
											archiveRef: "",
											chapterId: "",
											section: "",
											priority: "★★",
											category: "مصدر أولي",
											country: "",
											keywords: "",
											notes: "",
											isNew: false,
											status: "لم يُراجع"
										}),
										style: {
											padding: "9px 16px",
											borderRadius: 8,
											background: "transparent",
											border: "0.5px solid #cbd5e1",
											cursor: "pointer",
											fontFamily: "inherit",
											fontSize: 13
										},
										children: "مسح"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setUrlImport("");
											setPage("url_import");
										},
										style: {
											padding: "9px 16px",
											borderRadius: 8,
											background: "#eff6ff",
											color: "#3B82F6",
											border: "0.5px solid #bfdbfe",
											cursor: "pointer",
											fontFamily: "inherit",
											fontSize: 13
										},
										children: "🔗 استيراد من رابط"
									})
								]
							})]
						})
					] }),
					page === "export" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							style: {
								fontSize: 20,
								fontWeight: 700,
								marginBottom: 16
							},
							children: "📤 تصدير المراجع الأكاديمية"
						}),
						showCustomBuilder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 20,
								border: "2px solid #7C3AED",
								marginBottom: 16
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 16
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											fontWeight: 700,
											fontSize: 14,
											color: "#7C3AED"
										},
										children: ["⭐ ", editingCustomFmt !== null ? `تعديل: ${customFormats[editingCustomFmt]?.name}` : "إنشاء صيغة توثيق جديدة"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setShowCustomBuilder(false);
											setEditingCustomFmt(null);
										},
										style: {
											background: "transparent",
											border: "none",
											fontSize: 18,
											cursor: "pointer",
											color: "#94a3b8"
										},
										children: "✕"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: { marginBottom: 14 },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										style: {
											fontSize: 12,
											color: "#64748b",
											display: "block",
											marginBottom: 4
										},
										children: ["اسم الصيغة * ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: "#94a3b8" },
											children: "(مثال: صيغة جامعة الموصل)"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: customFmtForm.name,
										onChange: (e) => setCustomFmtForm((p) => ({
											...p,
											name: e.target.value
										})),
										placeholder: "اسم الصيغة...",
										style: {
											width: "100%",
											padding: "8px 12px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 13,
											fontFamily: "inherit",
											boxSizing: "border-box"
										}
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#faf5ff",
										borderRadius: 8,
										padding: 12,
										marginBottom: 14,
										border: "0.5px solid #e9d5ff"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 11,
											color: "#7C3AED",
											fontWeight: 600,
											marginBottom: 6
										},
										children: "المتغيرات المتاحة — اضغط لنسخها:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											display: "flex",
											flexWrap: "wrap",
											gap: 4
										},
										children: [
											"{المؤلف}",
											"{العنوان}",
											"{السنة}",
											"{الرقم_الأرشيفي}",
											"{النوع}",
											"{الفصل}",
											"{الملاحظات}",
											"{الناشر}",
											"{مكان_النشر}",
											"{الجامعة}",
											"{الدرجة}",
											"{اسم_المجلة}",
											"{المجلد}",
											"{العدد}",
											"{الصفحات}",
											"{اسم_الصحيفة}",
											"{التاريخ}",
											"{الرابط}",
											"{تاريخ_الزيارة}",
											"{الجهة}"
										].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												navigator.clipboard.writeText(v);
												showNotif(`📋 تم نسخ ${v}`);
											},
											style: {
												background: "white",
												color: "#7C3AED",
												border: "0.5px solid #d8b4fe",
												borderRadius: 5,
												padding: "2px 7px",
												fontSize: 10,
												fontFamily: "monospace",
												cursor: "pointer"
											},
											children: v
										}, v))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 12,
										color: "#64748b",
										fontWeight: 600,
										marginBottom: 8
									},
									children: "قالب لكل نوع مصدر:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "grid",
										gap: 10
									},
									children: Object.keys(customFmtForm.templates).map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "#f8fafc",
											borderRadius: 8,
											padding: 10,
											border: "0.5px solid #e2e8f0"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 11,
													fontWeight: 600,
													color: "#475569",
													marginBottom: 5,
													display: "flex",
													alignItems: "center",
													gap: 6
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														background: "#eff6ff",
														color: "#3B82F6",
														borderRadius: 4,
														padding: "1px 6px",
														fontSize: 10
													},
													children: type
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: customFmtForm.templates[type],
												onChange: (e) => setCustomFmtForm((p) => ({
													...p,
													templates: {
														...p.templates,
														[type]: e.target.value
													}
												})),
												rows: 2,
												style: {
													width: "100%",
													padding: "6px 10px",
													borderRadius: 6,
													border: "0.5px solid #cbd5e1",
													fontSize: 11,
													fontFamily: "'Courier New',monospace",
													resize: "vertical",
													boxSizing: "border-box",
													direction: "ltr"
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													fontSize: 10,
													color: "#94a3b8",
													marginTop: 4,
													direction: "rtl"
												},
												children: ["معاينة: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														color: "#475569",
														fontFamily: "inherit"
													},
													children: applyCustomTemplate(customFmtForm.templates[type], {
														title: "عنوان الوثيقة التجريبية",
														author: "اسم المؤلف",
														year: "1942",
														archiveRef: "IOR/R/15/2/656",
														category: type
													})
												})]
											})
										]
									}, type))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 10,
										marginTop: 16
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: saveCustomFormat,
										style: {
											padding: "9px 22px",
											borderRadius: 8,
											background: "#7C3AED",
											color: "white",
											border: "none",
											cursor: "pointer",
											fontWeight: 600,
											fontFamily: "inherit",
											fontSize: 13
										},
										children: ["💾 ", editingCustomFmt !== null ? "تحديث الصيغة" : "حفظ الصيغة"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setShowCustomBuilder(false);
											setEditingCustomFmt(null);
										},
										style: {
											padding: "9px 16px",
											borderRadius: 8,
											background: "transparent",
											border: "0.5px solid #cbd5e1",
											cursor: "pointer",
											fontFamily: "inherit",
											fontSize: 13
										},
										children: "إلغاء"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: 16
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 16,
									border: "0.5px solid #e2e8f0"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 10
										},
										children: "صيغة التوثيق"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											flexWrap: "wrap",
											gap: 6,
											marginBottom: 10
										},
										children: [
											[
												"Chicago",
												"APA",
												"MLA"
											].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setExportFormat(f),
												style: {
													padding: "6px 12px",
													borderRadius: 8,
													border: `2px solid ${exportFormat === f ? "#3B82F6" : "#e2e8f0"}`,
													background: exportFormat === f ? "#eff6ff" : "transparent",
													color: exportFormat === f ? "#3B82F6" : "inherit",
													cursor: "pointer",
													fontWeight: exportFormat === f ? 600 : 400,
													fontFamily: "inherit",
													fontSize: 12
												},
												children: f
											}, f)),
											customFormats.map((cf, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: 2
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => setExportFormat(`custom_${i}`),
														style: {
															padding: "6px 12px",
															borderRadius: "8px 0 0 8px",
															border: `2px solid ${exportFormat === `custom_${i}` ? "#7C3AED" : "#e9d5ff"}`,
															background: exportFormat === `custom_${i}` ? "#faf5ff" : "transparent",
															color: exportFormat === `custom_${i}` ? "#7C3AED" : "#7C3AED",
															cursor: "pointer",
															fontWeight: exportFormat === `custom_${i}` ? 700 : 400,
															fontFamily: "inherit",
															fontSize: 12
														},
														children: ["⭐ ", cf.name]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => {
															setEditingCustomFmt(i);
															setCustomFmtForm({
																...customFormats[i],
																templates: { ...customFormats[i].templates }
															});
															setShowCustomBuilder(true);
														},
														title: "تعديل",
														style: {
															padding: "6px 6px",
															border: `2px solid ${exportFormat === `custom_${i}` ? "#7C3AED" : "#e9d5ff"}`,
															borderLeft: "none",
															background: "transparent",
															cursor: "pointer",
															fontSize: 11,
															color: "#7C3AED"
														},
														children: "✏️"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => deleteCustomFormat(i),
														title: "حذف",
														style: {
															padding: "6px 6px",
															borderRadius: "0 8px 8px 0",
															border: `2px solid ${exportFormat === `custom_${i}` ? "#7C3AED" : "#e9d5ff"}`,
															borderLeft: "none",
															background: "transparent",
															cursor: "pointer",
															fontSize: 11,
															color: "#dc2626"
														},
														children: "🗑️"
													})
												]
											}, i)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setEditingCustomFmt(null);
													setShowCustomBuilder(true);
												},
												style: {
													padding: "6px 12px",
													borderRadius: 8,
													border: "2px dashed #d8b4fe",
													background: "transparent",
													color: "#7C3AED",
													cursor: "pointer",
													fontFamily: "inherit",
													fontSize: 12
												},
												children: "+ صيغة خاصة"
											})
										]
									}),
									exportFormat.startsWith("custom_") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											background: "#faf5ff",
											borderRadius: 8,
											padding: 8,
											marginBottom: 10,
											fontSize: 11,
											color: "#7C3AED",
											border: "0.5px solid #e9d5ff"
										},
										children: "⭐ صيغة مخصصة — سيُطبَّق القالب المناسب تلقائياً حسب نوع كل مصدر"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 8,
											marginBottom: 10
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setExportSelected(docs.map((d) => d.id)),
												style: {
													padding: "5px 10px",
													borderRadius: 6,
													border: "0.5px solid #cbd5e1",
													cursor: "pointer",
													fontSize: 11,
													fontFamily: "inherit"
												},
												children: [
													"تحديد الكل (",
													docs.length,
													")"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setExportSelected(docs.filter((d) => d.priority === "★★★").map((d) => d.id)),
												style: {
													padding: "5px 10px",
													borderRadius: 6,
													border: "0.5px solid #cbd5e1",
													cursor: "pointer",
													fontSize: 11,
													fontFamily: "inherit"
												},
												children: [
													"★★★ فقط (",
													stats.highP,
													")"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setExportSelected([]),
												style: {
													padding: "5px 10px",
													borderRadius: 6,
													border: "0.5px solid #cbd5e1",
													cursor: "pointer",
													fontSize: 11,
													fontFamily: "inherit"
												},
												children: "مسح"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											maxHeight: 300,
											overflowY: "auto",
											borderRadius: 8,
											border: "0.5px solid #f1f5f9"
										},
										children: docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											style: {
												display: "flex",
												alignItems: "center",
												gap: 8,
												padding: "6px 10px",
												borderBottom: "0.5px solid #f8fafc",
												cursor: "pointer",
												fontSize: 11
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: exportSelected.includes(d.id),
													onChange: () => setExportSelected((p) => p.includes(d.id) ? p.filter((x) => x !== d.id) : [...p, d.id])
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														background: pBg(d.priority),
														color: pColor(d.priority),
														borderRadius: 4,
														padding: "1px 4px",
														fontSize: 9,
														flexShrink: 0
													},
													children: d.priority
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														flex: 1,
														overflow: "hidden",
														textOverflow: "ellipsis",
														whiteSpace: "nowrap"
													},
													children: d.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														fontSize: 9,
														color: "#94a3b8",
														flexShrink: 0
													},
													children: d.category || "وثيقة"
												})
											]
										}, d.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleExport,
										style: {
											marginTop: 12,
											width: "100%",
											padding: "9px",
											borderRadius: 8,
											background: "#3B82F6",
											color: "white",
											border: "none",
											cursor: "pointer",
											fontWeight: 600,
											fontFamily: "inherit",
											fontSize: 13
										},
										children: [
											"توليد ",
											exportSelected.length,
											" مرجع"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 16,
									border: "0.5px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										fontSize: 13,
										marginBottom: 10
									},
									children: "المراجع المُولَّدة"
								}), exportText ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: exportText,
									readOnly: true,
									rows: 16,
									style: {
										width: "100%",
										padding: 10,
										borderRadius: 8,
										border: "0.5px solid #cbd5e1",
										fontSize: 11,
										fontFamily: "'Courier New',monospace",
										resize: "vertical",
										background: "#f8fafc",
										boxSizing: "border-box",
										direction: "rtl",
										lineHeight: 1.8
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										gap: 8,
										marginTop: 8
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											navigator.clipboard.writeText(exportText);
											showNotif("✅ تم النسخ!");
										},
										style: {
											padding: "7px 14px",
											borderRadius: 8,
											background: "#10B981",
											color: "white",
											border: "none",
											cursor: "pointer",
											fontFamily: "inherit",
											fontSize: 12
										},
										children: "📋 نسخ"
									})
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										color: "#94a3b8",
										fontSize: 13,
										padding: 20,
										textAlign: "center"
									},
									children: "اختر الوثائق ثم اضغط \"توليد\""
								})]
							})]
						})
					] }),
					page === "ai" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							style: {
								fontSize: 20,
								fontWeight: 700,
								marginBottom: 6
							},
							children: "🤖 المساعد البحثي الذكي"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								color: "#64748b",
								fontSize: 13,
								marginBottom: 16
							},
							children: [
								"اسأل أي سؤال بحثي حول أطروحتك ومصادرها — يعمل بـ ",
								AI_MODELS.find((m) => m.id === aiModel)?.label || aiModel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										display: "inline-block",
										width: 8,
										height: 8,
										borderRadius: "50%",
										background: "#10b981",
										marginInlineStart: 6,
										verticalAlign: "middle"
									},
									title: "متصل"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 16,
								border: "0.5px solid #e2e8f0",
								marginBottom: 14
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 10,
									marginBottom: 10
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: aiInputRef,
									placeholder: "مثال: ما هي أبرز وثائق RAF في البحرين؟ أو: حلّل وثائق الفصل الرابع المتعلقة بالنفط",
									style: {
										flex: 1,
										padding: "9px 14px",
										borderRadius: 8,
										border: "0.5px solid #cbd5e1",
										fontSize: 13,
										fontFamily: "inherit"
									},
									onKeyDown: (e) => {
										if (e.key === "Enter" && aiInputRef.current) handleAISearch(aiInputRef.current.value);
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => aiInputRef.current && handleAISearch(aiInputRef.current.value),
									disabled: aiLoading,
									style: {
										padding: "9px 18px",
										borderRadius: 8,
										background: "#7C3AED",
										color: "white",
										border: "none",
										cursor: "pointer",
										fontFamily: "inherit",
										fontSize: 13
									},
									children: aiLoading ? "⏳" : "تحليل →"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									gap: 6,
									flexWrap: "wrap"
								},
								children: [
									"وثائق RAF وسلاح الجو في البحرين",
									"النفط ودوره الاستراتيجي في الحرب",
									"البروباغندا البريطانية في الخليج",
									"فجوات بحثية في مصادر الأطروحة",
									"أفضل وثائق الفصل الثالث"
								].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										if (aiInputRef.current) aiInputRef.current.value = q;
										handleAISearch(q);
									},
									style: {
										padding: "4px 10px",
										borderRadius: 20,
										border: "0.5px solid #d8b4fe",
										background: "#faf5ff",
										color: "#7C3AED",
										cursor: "pointer",
										fontSize: 11,
										fontFamily: "inherit"
									},
									children: q
								}, q))
							})]
						}),
						aiLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "#faf5ff",
								borderRadius: 12,
								padding: 30,
								textAlign: "center",
								border: "0.5px solid #d8b4fe"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { fontSize: 36 },
								children: "🤖"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									color: "#64748b",
									marginTop: 8
								},
								children: "جاري التحليل..."
							})]
						}),
						aiResult && !aiLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "#faf5ff",
								borderRadius: 12,
								padding: 20,
								border: "0.5px solid #d8b4fe"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										color: "#7C3AED",
										marginBottom: 12,
										fontSize: 13
									},
									children: "🤖 تحليل المساعد الذكي"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									style: {
										whiteSpace: "pre-wrap",
										fontFamily: "inherit",
										fontSize: 13,
										lineHeight: 1.9,
										margin: 0
									},
									children: aiResult
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										navigator.clipboard.writeText(aiResult);
										showNotif("✅ تم النسخ!");
									},
									style: {
										marginTop: 12,
										padding: "7px 14px",
										borderRadius: 8,
										background: "white",
										border: "0.5px solid #d8b4fe",
										color: "#7C3AED",
										cursor: "pointer",
										fontFamily: "inherit",
										fontSize: 12
									},
									children: "📋 نسخ التحليل"
								})
							]
						})
					] }),
					page === "library" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-start",
								marginBottom: 16,
								flexWrap: "wrap",
								gap: 10
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: 20,
									fontWeight: 700,
									marginBottom: 4
								},
								children: "📚 مكتبتي البحثية"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "#64748b",
									fontSize: 12
								},
								children: "ارفع مصادرك (PDF، MD، TXT) أو أضف رابطاً — سيحللها الذكاء الاصطناعي ويصنفها لفصول أطروحتك تلقائياً"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 8
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: libFileRef,
									type: "file",
									accept: ".pdf,.md,.txt",
									multiple: true,
									style: { display: "none" },
									onChange: (e) => handleLibFileUpload(e.target.files)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => libFileRef.current?.click(),
									disabled: libUploading,
									style: {
										padding: "9px 18px",
										borderRadius: 8,
										background: "#3B82F6",
										color: "white",
										border: "none",
										cursor: "pointer",
										fontWeight: 600,
										fontFamily: "inherit",
										fontSize: 13
									},
									children: libUploading ? "⏳ جاري الرفع..." : "📁 رفع ملفات"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 16,
								border: "2px dashed #bfdbfe",
								marginBottom: 14,
								textAlign: "center",
								cursor: "pointer"
							},
							onClick: () => libFileRef.current?.click(),
							onDragOver: (e) => {
								e.preventDefault();
								e.currentTarget.style.borderColor = "#3B82F6";
							},
							onDragLeave: (e) => e.currentTarget.style.borderColor = "#bfdbfe",
							onDrop: (e) => {
								e.preventDefault();
								e.currentTarget.style.borderColor = "#bfdbfe";
								handleLibFileUpload(e.dataTransfer.files);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 36,
										marginBottom: 6
									},
									children: "📂"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										color: "#3B82F6",
										marginBottom: 4
									},
									children: "اسحب وأسقط ملفاتك هنا أو اضغط للاختيار"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 11,
										color: "#94a3b8"
									},
									children: "يدعم: PDF • Markdown (MD) • نص عادي (TXT) — حجم أقصى 10MB للملف الواحد"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 11,
										color: "#94a3b8",
										marginTop: 4
									},
									children: "يمكن رفع عدة ملفات دفعة واحدة — كتب، رسائل، بحوث، مقالات، صحف، وثائق..."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 14,
								border: "0.5px solid #e2e8f0",
								marginBottom: 14
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 600,
									fontSize: 12,
									marginBottom: 8,
									color: "#475569"
								},
								children: "🔗 إضافة مصدر من رابط إنترنت"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 8
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: libUrlInput,
									onChange: (e) => setLibUrlInput(e.target.value),
									placeholder: "https://www.qdl.qa/... أو jstor.org أو archive.org أو أي رابط",
									style: {
										flex: 1,
										padding: "8px 12px",
										borderRadius: 8,
										border: "0.5px solid #cbd5e1",
										fontSize: 12,
										fontFamily: "inherit"
									},
									onKeyDown: (e) => {
										if (e.key === "Enter") handleLibUrlImport();
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleLibUrlImport,
									disabled: libUrlLoading,
									style: {
										padding: "8px 16px",
										borderRadius: 8,
										background: "#10B981",
										color: "white",
										border: "none",
										cursor: "pointer",
										fontFamily: "inherit",
										fontSize: 12,
										whiteSpace: "nowrap"
									},
									children: libUrlLoading ? "⏳ جاري..." : "إضافة + تحليل"
								})]
							})]
						}),
						library.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(4,1fr)",
								gap: 10,
								marginBottom: 14
							},
							children: [
								{
									label: "إجمالي المصادر",
									v: library.length,
									c: "#3B82F6",
									i: "📄"
								},
								{
									label: "تم تحليلها",
									v: library.filter((s) => s.analyzed).length,
									c: "#10B981",
									i: "✅"
								},
								{
									label: "عالية الأولوية ★★★",
									v: library.filter((s) => s.priority === "★★★").length,
									c: "#F59E0B",
									i: "⭐"
								},
								{
									label: "بانتظار المراجعة",
									v: library.filter((s) => !s.analyzed).length,
									c: "#EF4444",
									i: "⏳"
								}
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 10,
									padding: "10px 12px",
									border: "0.5px solid #e2e8f0",
									textAlign: "center"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 20,
											marginBottom: 3
										},
										children: s.i
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 22,
											fontWeight: 700,
											color: s.c
										},
										children: s.v
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 10,
											color: "#64748b",
											marginTop: 2
										},
										children: s.label
									})
								]
							}, i))
						}),
						library.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 10,
								padding: 12,
								border: "0.5px solid #e2e8f0",
								marginBottom: 12,
								display: "grid",
								gridTemplateColumns: "2fr 1fr 1fr 1fr",
								gap: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "ابحث في العنوان، المؤلف، الكلمات المفتاحية...",
									value: libFilter.query,
									onChange: (e) => setLibFilter((p) => ({
										...p,
										query: e.target.value
									})),
									style: {
										padding: "7px 10px",
										borderRadius: 7,
										border: "0.5px solid #cbd5e1",
										fontSize: 12,
										fontFamily: "inherit"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: libFilter.chapterId,
									onChange: (e) => setLibFilter((p) => ({
										...p,
										chapterId: e.target.value
									})),
									style: {
										padding: "7px 8px",
										borderRadius: 7,
										border: "0.5px solid #cbd5e1",
										fontSize: 11,
										fontFamily: "inherit"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "كل الفصول"
									}), CHAPTERS_DATA.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: ch.id,
										children: ch.titleAr.split(":")[0]
									}, ch.id))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: libFilter.category,
									onChange: (e) => setLibFilter((p) => ({
										...p,
										category: e.target.value
									})),
									style: {
										padding: "7px 8px",
										borderRadius: 7,
										border: "0.5px solid #cbd5e1",
										fontSize: 11,
										fontFamily: "inherit"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "كل الأنواع"
									}), [
										"كتاب",
										"رسالة علمية",
										"بحث",
										"مقالة",
										"صحيفة",
										"وثيقة أرشيفية",
										"تقرير",
										"أطروحة دكتوراه",
										"موقع إلكتروني"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t,
										children: t
									}, t))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: libFilter.priority,
									onChange: (e) => setLibFilter((p) => ({
										...p,
										priority: e.target.value
									})),
									style: {
										padding: "7px 8px",
										borderRadius: 7,
										border: "0.5px solid #cbd5e1",
										fontSize: 11,
										fontFamily: "inherit"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "كل الأولويات"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "★★★",
											children: "★★★ عالية"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "★★",
											children: "★★ متوسطة"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "★",
											children: "★ منخفضة"
										})
									]
								})
							]
						}),
						library.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 50,
								textAlign: "center",
								border: "0.5px solid #e2e8f0"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 48,
										marginBottom: 12
									},
									children: "📚"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										fontSize: 15,
										marginBottom: 6
									},
									children: "مكتبتك البحثية فارغة"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										color: "#64748b",
										fontSize: 13
									},
									children: "ارفع أول مصدر بحثي لتبدأ التحليل التلقائي"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gap: 10
							},
							children: filteredLib.map((src) => {
								const ch = CHAPTERS_DATA.find((c) => c.id === src.chapterId);
								const isAnalyzing = libAnalyzing === src.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										border: `0.5px solid ${libSelected?.id === src.id ? "#3B82F6" : "#e2e8f0"}`,
										overflow: "hidden"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setLibSelected(libSelected?.id === src.id ? null : src),
										style: {
											padding: "12px 16px",
											cursor: "pointer",
											display: "flex",
											gap: 10,
											alignItems: "flex-start"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 28,
													flexShrink: 0
												},
												children: src.fileType === "pdf" ? "📕" : src.fileType === "url" ? "🌐" : src.fileType === "md" ? "📝" : "📄"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													flex: 1,
													minWidth: 0
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontWeight: 600,
															fontSize: 13,
															marginBottom: 4
														},
														children: src.title || src.fileName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															display: "flex",
															gap: 6,
															flexWrap: "wrap",
															fontSize: 11,
															color: "#64748b"
														},
														children: [
															src.author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["👤 ", src.author] }),
															src.year && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", src.year] }),
															src.language && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["🌐 ", src.language] }),
															src.sourceType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																style: {
																	background: "#f1f5f9",
																	borderRadius: 4,
																	padding: "1px 6px"
																},
																children: src.sourceType
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															display: "flex",
															gap: 6,
															marginTop: 4,
															flexWrap: "wrap"
														},
														children: [
															src.priority && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																style: {
																	background: src.priority === "★★★" ? "#dcfce7" : src.priority === "★★" ? "#fef9c3" : "#f1f5f9",
																	color: src.priority === "★★★" ? "#16a34a" : src.priority === "★★" ? "#ca8a04" : "#94a3b8",
																	borderRadius: 4,
																	padding: "1px 6px",
																	fontSize: 10,
																	fontWeight: 700
																},
																children: src.priority
															}),
															ch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																style: {
																	background: `${ch.color}15`,
																	color: ch.color,
																	borderRadius: 4,
																	padding: "1px 6px",
																	fontSize: 10
																},
																children: [
																	"ف",
																	src.chapterId,
																	": ",
																	ch.titleAr.split(":")[0]
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																style: {
																	background: src.analyzed ? "#f0fdf4" : "#fff7ed",
																	color: src.analyzed ? "#16a34a" : "#f59e0b",
																	borderRadius: 4,
																	padding: "1px 6px",
																	fontSize: 10
																},
																children: isAnalyzing ? "⏳ جاري التحليل..." : src.status
															})
														]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													display: "flex",
													gap: 4,
													flexShrink: 0
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: (e) => {
														e.stopPropagation();
														deleteLibSrc(src.id);
													},
													style: {
														padding: "4px 8px",
														borderRadius: 6,
														background: "#fee2e2",
														color: "#dc2626",
														border: "none",
														cursor: "pointer",
														fontSize: 11
													},
													children: "🗑️"
												})
											})
										]
									}), libSelected?.id === src.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											borderTop: "0.5px solid #f1f5f9",
											padding: "14px 16px",
											background: "#fafafa"
										},
										children: [isAnalyzing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												textAlign: "center",
												padding: 20,
												color: "#7C3AED"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 28,
													marginBottom: 6
												},
												children: "🤖"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: { fontWeight: 500 },
												children: "جاري تحليل المصدر بالذكاء الاصطناعي..."
											})]
										}), !isAnalyzing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "grid",
												gridTemplateColumns: "1fr 1fr",
												gap: 12
											},
											children: [
												src.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														gridColumn: "1/-1",
														background: "#eff6ff",
														borderRadius: 8,
														padding: 12,
														border: "0.5px solid #bfdbfe"
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 11,
															fontWeight: 600,
															color: "#3B82F6",
															marginBottom: 5
														},
														children: "📋 ملخص المصدر"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 12,
															lineHeight: 1.8
														},
														children: src.summary
													})]
												}),
												src.whyImportant && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														background: "#f0fdf4",
														borderRadius: 8,
														padding: 12,
														border: "0.5px solid #86efac"
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 11,
															fontWeight: 600,
															color: "#16a34a",
															marginBottom: 5
														},
														children: "⭐ لماذا مهم"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 12,
															lineHeight: 1.7
														},
														children: src.whyImportant
													})]
												}),
												src.howToUse && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														background: "#faf5ff",
														borderRadius: 8,
														padding: 12,
														border: "0.5px solid #e9d5ff"
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 11,
															fontWeight: 600,
															color: "#7C3AED",
															marginBottom: 5
														},
														children: "✍️ كيف تستخدمه"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 12,
															lineHeight: 1.7
														},
														children: src.howToUse
													})]
												}),
												src.importantPages && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														background: "#fffbeb",
														borderRadius: 8,
														padding: 12,
														border: "0.5px solid #fde68a"
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 11,
															fontWeight: 600,
															color: "#f59e0b",
															marginBottom: 5
														},
														children: "📄 الصفحات المهمة"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 13,
															fontWeight: 600
														},
														children: src.importantPages
													})]
												}),
												src.sections?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														background: "#f8fafc",
														borderRadius: 8,
														padding: 12,
														border: "0.5px solid #e2e8f0"
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 11,
															fontWeight: 600,
															color: "#475569",
															marginBottom: 5
														},
														children: "📌 المباحث ذات الصلة"
													}), src.sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															fontSize: 11,
															padding: "2px 0",
															color: "#64748b"
														},
														children: ["• ", s]
													}, i))]
												}),
												src.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: { gridColumn: "1/-1" },
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 11,
															fontWeight: 600,
															color: "#475569",
															marginBottom: 5
														},
														children: "🔑 الكلمات المفتاحية"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															display: "flex",
															flexWrap: "wrap",
															gap: 4
														},
														children: src.keywords.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															style: {
																background: "#f1f5f9",
																borderRadius: 5,
																padding: "2px 8px",
																fontSize: 11
															},
															children: k
														}, i))
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														gridColumn: "1/-1",
														background: "white",
														borderRadius: 8,
														padding: 12,
														border: "0.5px solid #e2e8f0"
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															style: {
																fontSize: 11,
																fontWeight: 600,
																color: "#475569",
																marginBottom: 8
															},
															children: "✏️ تعديل يدوي"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															style: {
																display: "grid",
																gridTemplateColumns: "1fr 1fr",
																gap: 8
															},
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	style: {
																		fontSize: 10,
																		color: "#94a3b8",
																		display: "block",
																		marginBottom: 3
																	},
																	children: "الفصل"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
																	value: src.chapterId || "",
																	onChange: (e) => updateLibSrc(src.id, { chapterId: e.target.value ? parseInt(e.target.value) : null }),
																	style: {
																		width: "100%",
																		padding: "5px 8px",
																		borderRadius: 6,
																		border: "0.5px solid #cbd5e1",
																		fontSize: 11,
																		fontFamily: "inherit"
																	},
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																		value: "",
																		children: "اختر فصلاً"
																	}), CHAPTERS_DATA.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																		value: ch.id,
																		children: ch.titleAr.split(":")[0]
																	}, ch.id))]
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	style: {
																		fontSize: 10,
																		color: "#94a3b8",
																		display: "block",
																		marginBottom: 3
																	},
																	children: "الأولوية"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
																	value: src.priority || "★★",
																	onChange: (e) => updateLibSrc(src.id, { priority: e.target.value }),
																	style: {
																		width: "100%",
																		padding: "5px 8px",
																		borderRadius: 6,
																		border: "0.5px solid #cbd5e1",
																		fontSize: 11,
																		fontFamily: "inherit"
																	},
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																			value: "★★★",
																			children: "★★★ عالية — اقرأه كاملاً"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																			value: "★★",
																			children: "★★ متوسطة — صفحات محددة"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																			value: "★",
																			children: "★ منخفضة — احفظ المرجع"
																		})
																	]
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	style: {
																		fontSize: 10,
																		color: "#94a3b8",
																		display: "block",
																		marginBottom: 3
																	},
																	children: "الصفحات المهمة"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: src.importantPages || "",
																	onChange: (e) => updateLibSrc(src.id, { importantPages: e.target.value }),
																	placeholder: "مثال: 45-67، 102، 230",
																	style: {
																		width: "100%",
																		padding: "5px 8px",
																		borderRadius: 6,
																		border: "0.5px solid #cbd5e1",
																		fontSize: 11,
																		fontFamily: "inherit",
																		boxSizing: "border-box"
																	}
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	style: {
																		fontSize: 10,
																		color: "#94a3b8",
																		display: "block",
																		marginBottom: 3
																	},
																	children: "نوع المصدر"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
																	value: src.sourceType || "",
																	onChange: (e) => updateLibSrc(src.id, { sourceType: e.target.value }),
																	style: {
																		width: "100%",
																		padding: "5px 8px",
																		borderRadius: 6,
																		border: "0.5px solid #cbd5e1",
																		fontSize: 11,
																		fontFamily: "inherit"
																	},
																	children: [
																		"كتاب",
																		"رسالة علمية",
																		"بحث",
																		"مقالة",
																		"صحيفة",
																		"وثيقة أرشيفية",
																		"تقرير",
																		"أطروحة دكتوراه",
																		"موقع إلكتروني"
																	].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																		value: t,
																		children: t
																	}, t))
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	style: { gridColumn: "1/-1" },
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		style: {
																			fontSize: 10,
																			color: "#94a3b8",
																			display: "block",
																			marginBottom: 3
																		},
																		children: "ملاحظات إضافية"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		value: src.howToUse || "",
																		onChange: (e) => updateLibSrc(src.id, { howToUse: e.target.value }),
																		rows: 2,
																		style: {
																			width: "100%",
																			padding: "5px 8px",
																			borderRadius: 6,
																			border: "0.5px solid #cbd5e1",
																			fontSize: 11,
																			fontFamily: "inherit",
																			resize: "vertical",
																			boxSizing: "border-box"
																		}
																	})]
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => showNotif("✅ تم حفظ التعديلات"),
															style: {
																marginTop: 8,
																padding: "6px 14px",
																borderRadius: 7,
																background: "#3B82F6",
																color: "white",
																border: "none",
																cursor: "pointer",
																fontFamily: "inherit",
																fontSize: 11
															},
															children: "حفظ التعديلات"
														})
													]
												})
											]
										})]
									})]
								}, src.id);
							})
						})
					] }),
					page === "cards" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-start",
								marginBottom: 20,
								flexWrap: "wrap",
								gap: 12
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: 20,
									fontWeight: 700,
									marginBottom: 4
								},
								children: "🗃️ بطاقات وجذاذات المباحث"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "#64748b",
									fontSize: 12
								},
								children: "بطاقات بحثية ذكية تجمع الاقتباسات والشواهد المصدرية حول حدث أو موضوع تاريخي محدد"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setShowCardForm(true);
									setCardAiResult("");
									setCardForm({
										title: "",
										topic: "",
										date: "",
										chapterId: "",
										sectionId: "",
										tags: "",
										notes: ""
									});
								},
								style: {
									padding: "9px 18px",
									borderRadius: 8,
									background: "#1e3a5f",
									color: "white",
									border: "none",
									cursor: "pointer",
									fontFamily: "inherit",
									fontSize: 13,
									fontWeight: 600
								},
								children: "＋ بطاقة جديدة"
							})]
						}),
						showCardForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 14,
								border: "2px solid #1e3a5f",
								padding: 22,
								marginBottom: 20
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 16
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 700,
											fontSize: 15,
											color: "#1e3a5f"
										},
										children: "🗃️ إنشاء بطاقة بحثية جديدة"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setShowCardForm(false),
										style: {
											background: "#f1f5f9",
											border: "none",
											borderRadius: 7,
											padding: "4px 10px",
											cursor: "pointer",
											fontSize: 12,
											color: "#64748b",
											fontFamily: "inherit"
										},
										children: "إغلاق"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "grid",
										gridTemplateColumns: "1fr 1fr",
										gap: 12,
										marginBottom: 14
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: { gridColumn: "1/-1" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												style: {
													fontSize: 11,
													color: "#64748b",
													display: "block",
													marginBottom: 4,
													fontWeight: 500
												},
												children: "عنوان البطاقة / الجذاذة *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: cardForm.title,
												onChange: (e) => setCardForm((p) => ({
													...p,
													title: e.target.value
												})),
												placeholder: "مثال: أزمة التموين والإعاشة عام 1942 في البحرين",
												style: {
													width: "100%",
													padding: "9px 12px",
													borderRadius: 8,
													border: "1.5px solid #cbd5e1",
													fontSize: 13,
													fontFamily: "inherit",
													boxSizing: "border-box"
												}
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											style: {
												fontSize: 11,
												color: "#64748b",
												display: "block",
												marginBottom: 4,
												fontWeight: 500
											},
											children: "الموضوع / الكلمة المفتاحية"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: cardForm.topic,
											onChange: (e) => setCardForm((p) => ({
												...p,
												topic: e.target.value
											})),
											placeholder: "مثال: تموين، إعاشة، حصار، نفط...",
											style: {
												width: "100%",
												padding: "8px 12px",
												borderRadius: 8,
												border: "0.5px solid #cbd5e1",
												fontSize: 12,
												fontFamily: "inherit",
												boxSizing: "border-box"
											}
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											style: {
												fontSize: 11,
												color: "#64748b",
												display: "block",
												marginBottom: 4,
												fontWeight: 500
											},
											children: "التاريخ / الحقبة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: cardForm.date,
											onChange: (e) => setCardForm((p) => ({
												...p,
												date: e.target.value
											})),
											placeholder: "مثال: 1942 أو 1939-1945",
											style: {
												width: "100%",
												padding: "8px 12px",
												borderRadius: 8,
												border: "0.5px solid #cbd5e1",
												fontSize: 12,
												fontFamily: "inherit",
												boxSizing: "border-box"
											}
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											style: {
												fontSize: 11,
												color: "#64748b",
												display: "block",
												marginBottom: 4,
												fontWeight: 500
											},
											children: "الفصل المرتبط"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: cardForm.chapterId,
											onChange: (e) => setCardForm((p) => ({
												...p,
												chapterId: e.target.value,
												sectionId: ""
											})),
											style: {
												width: "100%",
												padding: "8px 10px",
												borderRadius: 8,
												border: "0.5px solid #cbd5e1",
												fontSize: 12,
												fontFamily: "inherit"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "كل الفصول"
											}), chapters.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: ch.id,
												children: ch.titleAr.split(":")[0]
											}, ch.id))]
										})] }),
										cardForm.chapterId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											style: {
												fontSize: 11,
												color: "#64748b",
												display: "block",
												marginBottom: 4,
												fontWeight: 500
											},
											children: "المبحث"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: cardForm.sectionId,
											onChange: (e) => setCardForm((p) => ({
												...p,
												sectionId: e.target.value
											})),
											style: {
												width: "100%",
												padding: "8px 10px",
												borderRadius: 8,
												border: "0.5px solid #cbd5e1",
												fontSize: 12,
												fontFamily: "inherit"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "اختر مبحثاً"
											}), (chapters.find((c) => c.id === parseInt(cardForm.chapterId))?.sections || []).filter((s) => !s.id.includes("a") && !s.id.includes("b") && !s.id.includes("c")).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: s.id,
												children: s.title
											}, s.id))]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: { gridColumn: "1/-1" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												style: {
													fontSize: 11,
													color: "#64748b",
													display: "block",
													marginBottom: 4,
													fontWeight: 500
												},
												children: "وسوم التصنيف (افصل بـ ،)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: cardForm.tags,
												onChange: (e) => setCardForm((p) => ({
													...p,
													tags: e.target.value
												})),
												placeholder: "مثال: نفط، بريطانيا، استراتيجية، البحرين",
												style: {
													width: "100%",
													padding: "8px 12px",
													borderRadius: 8,
													border: "0.5px solid #cbd5e1",
													fontSize: 12,
													fontFamily: "inherit",
													boxSizing: "border-box"
												}
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: { gridColumn: "1/-1" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												style: {
													fontSize: 11,
													color: "#64748b",
													display: "block",
													marginBottom: 4,
													fontWeight: 500
												},
												children: "ملاحظات أو اقتباسات أولية"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: cardForm.notes,
												onChange: (e) => setCardForm((p) => ({
													...p,
													notes: e.target.value
												})),
												placeholder: "أي ملاحظات أو اقتباسات أولية تريد إضافتها للبطاقة...",
												rows: 3,
												style: {
													width: "100%",
													padding: "8px 12px",
													borderRadius: 8,
													border: "0.5px solid #cbd5e1",
													fontSize: 12,
													fontFamily: "inherit",
													resize: "vertical",
													boxSizing: "border-box"
												}
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 10,
										flexWrap: "wrap"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: generateSmartCard,
											disabled: cardAiLoading || !cardForm.title.trim(),
											style: {
												padding: "9px 20px",
												borderRadius: 8,
												background: "#7C3AED",
												color: "white",
												border: "none",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 13,
												fontWeight: 600
											},
											children: cardAiLoading ? "⏳ جاري التوليد الذكي..." : "🤖 توليد البطاقة بالذكاء الاصطناعي"
										}),
										cardAiResult && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: saveCard,
											style: {
												padding: "9px 18px",
												borderRadius: 8,
												background: "#10B981",
												color: "white",
												border: "none",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 13,
												fontWeight: 600
											},
											children: "💾 حفظ البطاقة"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: saveCard,
											style: {
												padding: "9px 16px",
												borderRadius: 8,
												background: "transparent",
												border: "0.5px solid #cbd5e1",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 13
											},
											children: "حفظ بدون ذكاء اصطناعي"
										})
									]
								}),
								cardAiLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										marginTop: 16,
										background: "#faf5ff",
										borderRadius: 10,
										padding: 24,
										textAlign: "center",
										border: "0.5px solid #d8b4fe"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 36,
											marginBottom: 8
										},
										children: "🤖"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											color: "#7C3AED",
											fontWeight: 500
										},
										children: "جاري تجميع المصادر وصياغة البطاقة التاريخية..."
									})]
								}),
								cardAiResult && !cardAiLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										marginTop: 16,
										background: "#faf5ff",
										borderRadius: 10,
										padding: 18,
										border: "0.5px solid #d8b4fe"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											color: "#7C3AED",
											marginBottom: 10,
											fontSize: 13
										},
										children: "🤖 محتوى البطاقة المُولَّد — راجعه ثم احفظ"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										style: {
											whiteSpace: "pre-wrap",
											fontFamily: "inherit",
											fontSize: 12,
											lineHeight: 1.9,
											margin: 0,
											color: "#1e293b"
										},
										children: cardAiResult
									})]
								})
							]
						}),
						cards.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 10,
								padding: 12,
								border: "0.5px solid #e2e8f0",
								marginBottom: 14,
								display: "flex",
								gap: 10,
								flexWrap: "wrap",
								alignItems: "center"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "ابحث في البطاقات...",
									value: cardSearchQ,
									onChange: (e) => setCardSearchQ(e.target.value),
									style: {
										flex: 1,
										minWidth: 180,
										padding: "7px 12px",
										borderRadius: 7,
										border: "0.5px solid #cbd5e1",
										fontSize: 12,
										fontFamily: "inherit"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: cardFilterCh,
									onChange: (e) => setCardFilterCh(e.target.value),
									style: {
										padding: "7px 10px",
										borderRadius: 7,
										border: "0.5px solid #cbd5e1",
										fontSize: 11,
										fontFamily: "inherit"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "كل الفصول"
									}), chapters.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: ch.id,
										children: ch.titleAr.split(":")[0]
									}, ch.id))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										fontSize: 12,
										color: "#64748b"
									},
									children: [filteredCards.length, " بطاقة"]
								})
							]
						}),
						cards.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 50,
								textAlign: "center",
								border: "0.5px solid #e2e8f0"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 48,
										marginBottom: 12
									},
									children: "🗃️"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										fontSize: 15,
										marginBottom: 6
									},
									children: "لا توجد بطاقات بعد"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										color: "#64748b",
										fontSize: 13,
										marginBottom: 16
									},
									children: "أنشئ بطاقتك الأولى لتجميع الشواهد التاريخية حول موضوع محدد"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setShowCardForm(true);
										setCardAiResult("");
									},
									style: {
										padding: "9px 20px",
										borderRadius: 8,
										background: "#1e3a5f",
										color: "white",
										border: "none",
										cursor: "pointer",
										fontFamily: "inherit",
										fontSize: 13
									},
									children: "＋ إنشاء أول بطاقة"
								})
							]
						}) : cardView === "detail" && selectedCard ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setCardView("grid");
								setSelectedCard(null);
							},
							style: {
								marginBottom: 14,
								padding: "7px 14px",
								borderRadius: 8,
								border: "0.5px solid #cbd5e1",
								background: "transparent",
								cursor: "pointer",
								fontFamily: "inherit",
								fontSize: 12
							},
							children: "← العودة لشبكة البطاقات"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 14,
								border: "0.5px solid #e2e8f0",
								overflow: "hidden"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "linear-gradient(135deg,#1e3a5f,#2d5a8e)",
									color: "white",
									padding: "18px 22px"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 700,
											fontSize: 17,
											marginBottom: 6
										},
										children: selectedCard.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 10,
											flexWrap: "wrap",
											fontSize: 11,
											opacity: .85
										},
										children: [
											selectedCard.date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", selectedCard.date] }),
											selectedCard.topic && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["🔍 ", selectedCard.topic] }),
											selectedCard.chapterId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📖 ", chapters.find((c) => c.id === selectedCard.chapterId)?.titleAr?.split(":")[0]] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📆 أُنشئت: ", selectedCard.createdAt] })
										]
									}),
									selectedCard.tags?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											marginTop: 8,
											display: "flex",
											gap: 4,
											flexWrap: "wrap"
										},
										children: selectedCard.tags.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												background: "rgba(255,255,255,0.2)",
												borderRadius: 4,
												padding: "1px 8px",
												fontSize: 11
											},
											children: ["#", t]
										}, i))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: { padding: "18px 22px" },
								children: [
									selectedCard.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "#fffbeb",
											borderRadius: 9,
											padding: 14,
											marginBottom: 16,
											border: "0.5px solid #fde68a"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 11,
												fontWeight: 600,
												color: "#92400e",
												marginBottom: 6
											},
											children: "📝 ملاحظات وجذاذات أولية"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 13,
												lineHeight: 1.8,
												color: "#1e293b"
											},
											children: selectedCard.notes
										})]
									}),
									selectedCard.aiContent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "#faf5ff",
											borderRadius: 9,
											padding: 16,
											marginBottom: 16,
											border: "0.5px solid #d8b4fe"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												color: "#7C3AED",
												marginBottom: 10,
												fontSize: 13
											},
											children: "🤖 التحليل والسياق التاريخي المُولَّد"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
											style: {
												whiteSpace: "pre-wrap",
												fontFamily: "inherit",
												fontSize: 13,
												lineHeight: 1.9,
												margin: 0
											},
											children: selectedCard.aiContent
										})]
									}),
									selectedCard.relatedDocIds?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 10,
											color: "#475569"
										},
										children: [
											"📄 الوثائق الأرشيفية المرتبطة (",
											selectedCard.relatedDocIds.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											display: "grid",
											gap: 6
										},
										children: selectedCard.relatedDocIds.map((dId) => {
											const d = docs.find((doc) => doc.id === dId);
											if (!d) return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													display: "flex",
													gap: 8,
													padding: "8px 12px",
													background: "#f8fafc",
													borderRadius: 7,
													border: "0.5px solid #e2e8f0",
													alignItems: "flex-start"
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														style: {
															background: pBg(d.priority),
															color: pColor(d.priority),
															borderRadius: 4,
															padding: "1px 5px",
															fontSize: 9,
															fontWeight: 700,
															flexShrink: 0,
															marginTop: 2
														},
														children: d.priority
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															flex: 1,
															minWidth: 0
														},
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															style: {
																fontSize: 12,
																fontWeight: 500,
																overflow: "hidden",
																textOverflow: "ellipsis",
																whiteSpace: "nowrap"
															},
															children: d.title
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															style: {
																fontSize: 10,
																color: "#8B5CF6",
																fontFamily: "monospace"
															},
															children: d.archiveRef
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => openFootnoteModal(d),
														style: {
															padding: "3px 8px",
															borderRadius: 5,
															background: "#faf5ff",
															border: "0.5px solid #d8b4fe",
															color: "#7C3AED",
															cursor: "pointer",
															fontSize: 10,
															fontFamily: "inherit",
															flexShrink: 0
														},
														children: "📝 هامش"
													})
												]
											}, dId);
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 8,
											marginTop: 16,
											flexWrap: "wrap"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												navigator.clipboard.writeText(`${selectedCard.title}\n\n${selectedCard.aiContent || ""}\n\n${selectedCard.notes || ""}`).then(() => showNotif("✅ تم نسخ محتوى البطاقة"));
											},
											style: {
												padding: "7px 16px",
												borderRadius: 8,
												background: "#eff6ff",
												color: "#3B82F6",
												border: "0.5px solid #bfdbfe",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 12
											},
											children: "📋 نسخ المحتوى"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => deleteCard(selectedCard.id),
											style: {
												padding: "7px 14px",
												borderRadius: 8,
												background: "#fee2e2",
												color: "#dc2626",
												border: "none",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 12
											},
											children: "🗑️ حذف البطاقة"
										})]
									})
								]
							})]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
								gap: 16
							},
							children: filteredCards.map((card) => {
								const ch = chapters.find((c) => c.id === card.chapterId);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										border: "0.5px solid #e2e8f0",
										overflow: "hidden",
										cursor: "pointer",
										transition: "all 0.2s",
										boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
										e.currentTarget.style.transform = "translateY(-2px)";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
										e.currentTarget.style.transform = "translateY(0)";
									},
									onClick: () => {
										setSelectedCard(card);
										setCardView("detail");
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
										height: 4,
										background: ch?.color || "#94a3b8"
									} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { padding: "14px 16px" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontWeight: 700,
													fontSize: 14,
													marginBottom: 6,
													color: "#1e293b",
													lineHeight: 1.4
												},
												children: card.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													display: "flex",
													gap: 6,
													flexWrap: "wrap",
													marginBottom: 8,
													fontSize: 11,
													color: "#64748b"
												},
												children: [
													card.date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														style: {
															background: "#f1f5f9",
															borderRadius: 4,
															padding: "1px 6px"
														},
														children: ["📅 ", card.date]
													}),
													card.topic && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														style: {
															background: "#f1f5f9",
															borderRadius: 4,
															padding: "1px 6px"
														},
														children: ["🔍 ", card.topic]
													}),
													ch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														style: {
															background: `${ch.color}15`,
															color: ch.color,
															borderRadius: 4,
															padding: "1px 6px"
														},
														children: ch.titleAr.split(":")[0]
													})
												]
											}),
											card.tags?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													display: "flex",
													gap: 3,
													flexWrap: "wrap",
													marginBottom: 8
												},
												children: [card.tags.slice(0, 4).map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: {
														background: "#eff6ff",
														color: "#3B82F6",
														borderRadius: 4,
														padding: "1px 7px",
														fontSize: 10
													},
													children: ["#", t]
												}, i)), card.tags.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: {
														fontSize: 10,
														color: "#94a3b8"
													},
													children: ["+", card.tags.length - 4]
												})]
											}),
											(card.aiContent || card.notes) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													fontSize: 11,
													color: "#64748b",
													lineHeight: 1.6,
													overflow: "hidden",
													display: "-webkit-box",
													WebkitLineClamp: 3,
													WebkitBoxOrient: "vertical"
												},
												children: [(card.aiContent || card.notes).substring(0, 150), "..."]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													marginTop: 10,
													paddingTop: 10,
													borderTop: "0.5px solid #f1f5f9"
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: {
														fontSize: 10,
														color: "#94a3b8"
													},
													children: [
														"📄 ",
														card.relatedDocIds?.length || 0,
														" وثيقة مرتبطة"
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														display: "flex",
														gap: 4
													},
													children: [card.aiContent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														style: {
															fontSize: 10,
															background: "#faf5ff",
															color: "#7C3AED",
															borderRadius: 4,
															padding: "1px 6px"
														},
														children: "🤖 AI"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														style: {
															fontSize: 10,
															color: "#94a3b8"
														},
														children: card.createdAt
													})]
												})]
											})
										]
									})]
								}, card.id);
							})
						})
					] }),
					page === "translator" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { marginBottom: 20 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: 20,
									fontWeight: 700,
									marginBottom: 4
								},
								children: "🌐 مستعرض وترجمة الوثائق الأجنبية"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "#64748b",
									fontSize: 12
								},
								children: "ترجمة فورية للوثائق الأجنبية (إنجليزية/فرنسية/ألمانية) إلى العربية التاريخية الرصينة مع استخراج النقاط الجوهرية"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: 16,
								marginBottom: 16
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 18,
									border: "0.5px solid #e2e8f0",
									marginBottom: 12
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 12,
											color: "#1e293b"
										},
										children: "📂 رفع الوثيقة الأجنبية"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											border: "2px dashed #bfdbfe",
											borderRadius: 10,
											padding: "20px 14px",
											textAlign: "center",
											cursor: "pointer",
											marginBottom: 12,
											background: "#f8fafc"
										},
										onClick: () => translatorFileRef.current?.click(),
										onDragOver: (e) => {
											e.preventDefault();
											e.currentTarget.style.borderColor = "#3B82F6";
										},
										onDragLeave: (e) => {
											e.currentTarget.style.borderColor = "#bfdbfe";
										},
										onDrop: (e) => {
											e.preventDefault();
											e.currentTarget.style.borderColor = "#bfdbfe";
											handleTranslatorFileUpload(e.dataTransfer.files[0]);
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: translatorFileRef,
												type: "file",
												accept: ".txt,.md",
												style: { display: "none" },
												onChange: (e) => handleTranslatorFileUpload(e.target.files[0])
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 28,
													marginBottom: 6
												},
												children: "📄"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 12,
													fontWeight: 500,
													color: "#3B82F6",
													marginBottom: 3
												},
												children: translatorFileName ? `✅ ${translatorFileName}` : "اسحب ملف TXT أو MD هنا أو اضغط للاختيار"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 10,
													color: "#94a3b8"
												},
												children: "للـ PDF: افتحه وانسخ النص وألصقه في الحقل أدناه"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { marginBottom: 10 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											style: {
												fontSize: 11,
												color: "#64748b",
												display: "block",
												marginBottom: 4,
												fontWeight: 500
											},
											children: "لغة الوثيقة الأصلية"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: translatorLang,
											onChange: (e) => setTranslatorLang(e.target.value),
											style: {
												width: "100%",
												padding: "7px 10px",
												borderRadius: 7,
												border: "0.5px solid #cbd5e1",
												fontSize: 12,
												fontFamily: "inherit"
											},
											children: [
												"إنجليزية",
												"فرنسية",
												"ألمانية",
												"إيطالية",
												"روسية",
												"فارسية",
												"عثمانية"
											].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: l,
												children: l
											}, l))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { marginBottom: 12 },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												style: {
													fontSize: 11,
													color: "#64748b",
													display: "block",
													marginBottom: 4,
													fontWeight: 500
												},
												children: "النص الأجنبي (الصق هنا أو ارفع ملفاً)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: translatorText,
												onChange: (e) => setTranslatorText(e.target.value),
												placeholder: "الصق هنا نص الوثيقة الأجنبية (من PDF أو أي مصدر)...",
												rows: 10,
												style: {
													width: "100%",
													padding: "9px 12px",
													borderRadius: 8,
													border: "0.5px solid #cbd5e1",
													fontSize: 12,
													fontFamily: "'Courier New',monospace",
													resize: "vertical",
													boxSizing: "border-box",
													direction: "ltr",
													lineHeight: 1.7
												}
											}),
											translatorText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													fontSize: 10,
													color: "#94a3b8",
													marginTop: 3
												},
												children: [
													translatorText.length,
													" حرف (",
													Math.ceil(translatorText.split(/\s+/).length),
													" كلمة)",
													translatorText.length > 4e3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														style: { color: "#f59e0b" },
														children: " — سيُترجم أول 4000 حرف فقط"
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: runTranslation,
										disabled: translatorLoading || !translatorText.trim(),
										style: {
											width: "100%",
											padding: "10px",
											borderRadius: 8,
											background: translatorLoading || !translatorText.trim() ? "#94a3b8" : "#1e3a5f",
											color: "white",
											border: "none",
											cursor: translatorLoading || !translatorText.trim() ? "not-allowed" : "pointer",
											fontFamily: "inherit",
											fontSize: 13,
											fontWeight: 600
										},
										children: translatorLoading ? "⏳ جاري الترجمة والتحليل..." : "🌐 ترجمة وتكشيف الوثيقة"
									})
								]
							}), translatorDocMeta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 16,
									border: "0.5px solid #e2e8f0"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 12,
											marginBottom: 10,
											color: "#475569"
										},
										children: "📋 بيانات الوثيقة المستنتجة تلقائياً"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											display: "grid",
											gap: 6
										},
										children: [
											{
												label: "العنوان المستنتج",
												value: translatorDocMeta.estimatedTitle
											},
											{
												label: "المؤلف / الجهة",
												value: translatorDocMeta.author
											},
											{
												label: "التاريخ",
												value: translatorDocMeta.date
											},
											{
												label: "نوع الوثيقة",
												value: translatorDocMeta.docType
											},
											{
												label: "الفصل المقترح",
												value: translatorDocMeta.suggestedChapter
											}
										].map((f) => f.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												gap: 6
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													fontSize: 10,
													color: "#94a3b8",
													minWidth: 100,
													flexShrink: 0
												},
												children: f.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													fontSize: 12,
													fontWeight: 500,
													flex: 1
												},
												children: f.value
											})]
										}, f.label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 8,
											marginTop: 12
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: saveTranslation,
											style: {
												padding: "6px 14px",
												borderRadius: 7,
												background: "#10B981",
												color: "white",
												border: "none",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 12
											},
											children: "💾 حفظ في سجل الترجمات"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setAddForm((p) => ({
													...p,
													title: translatorDocMeta.estimatedTitle || "",
													author: translatorDocMeta.author || "",
													year: translatorDocMeta.date || "",
													notes: translatorText.substring(0, 200)
												}));
												setPage("add");
												showNotif("تم نقل البيانات لنموذج الإضافة — أكمل البيانات");
											},
											style: {
												padding: "6px 14px",
												borderRadius: 7,
												background: "#eff6ff",
												color: "#3B82F6",
												border: "0.5px solid #bfdbfe",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 12
											},
											children: "➕ إضافة للأرشيف"
										})]
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								translatorLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 40,
										border: "0.5px solid #e2e8f0",
										textAlign: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 40,
												marginBottom: 12
											},
											children: "🌐"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												color: "#1e3a5f",
												marginBottom: 6
											},
											children: "جاري الترجمة..."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 12,
												color: "#64748b"
											},
											children: "يترجم النص ويستخرج النقاط الجوهرية بلغة تاريخية رصينة"
										})
									]
								}),
								translatedResult && !translatorLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										border: "0.5px solid #e2e8f0",
										marginBottom: 14,
										overflow: "hidden"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "#1e3a5f",
											color: "white",
											padding: "10px 16px",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												fontSize: 13
											},
											children: "🌐 الترجمة العربية الرصينة"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												navigator.clipboard.writeText(translatedResult).then(() => showNotif("✅ تم نسخ الترجمة"));
											},
											style: {
												padding: "3px 10px",
												borderRadius: 5,
												background: "rgba(255,255,255,0.2)",
												border: "none",
												color: "white",
												cursor: "pointer",
												fontSize: 11,
												fontFamily: "inherit"
											},
											children: "📋 نسخ"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											padding: 16,
											maxHeight: 320,
											overflowY: "auto"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												fontSize: 13,
												lineHeight: 2,
												color: "#1e293b",
												margin: 0,
												direction: "rtl"
											},
											children: translatedResult
										})
									})]
								}),
								keyPoints.length > 0 && !translatorLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										border: "0.5px solid #e2e8f0",
										overflow: "hidden"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "#7C3AED",
											color: "white",
											padding: "10px 16px",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												fontSize: 13
											},
											children: "⭐ النقاط الجوهرية والأفكار المفتاحية"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												const text = keyPoints.map((p, i) => `${i + 1}. [${p.importance}] ${p.point}\n   الفصل: ${p.chapter}`).join("\n\n");
												navigator.clipboard.writeText(text).then(() => showNotif("✅ تم نسخ النقاط"));
											},
											style: {
												padding: "3px 10px",
												borderRadius: 5,
												background: "rgba(255,255,255,0.2)",
												border: "none",
												color: "white",
												cursor: "pointer",
												fontSize: 11,
												fontFamily: "inherit"
											},
											children: "📋 نسخ"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: { padding: 14 },
										children: keyPoints.map((kp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												gap: 10,
												padding: "10px 0",
												borderBottom: i < keyPoints.length - 1 ? "0.5px solid #f1f5f9" : "none",
												alignItems: "flex-start"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													background: pBg(kp.importance),
													color: pColor(kp.importance),
													borderRadius: 5,
													padding: "2px 7px",
													fontSize: 10,
													fontWeight: 700,
													flexShrink: 0,
													minWidth: 28,
													textAlign: "center"
												},
												children: kp.rank
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: { flex: 1 },
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontSize: 13,
														fontWeight: 500,
														lineHeight: 1.6,
														marginBottom: 3
													},
													children: kp.point
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														display: "flex",
														gap: 6,
														alignItems: "center"
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														style: {
															fontSize: 10,
															background: "#eff6ff",
															color: "#3B82F6",
															borderRadius: 4,
															padding: "1px 6px"
														},
														children: ["📖 ", kp.chapter]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														style: {
															background: pBg(kp.importance),
															color: pColor(kp.importance),
															borderRadius: 4,
															padding: "1px 6px",
															fontSize: 10,
															fontWeight: 600
														},
														children: kp.importance
													})]
												})]
											})]
										}, i))
									})]
								}),
								!translatorLoading && !translatedResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 36,
										border: "0.5px solid #e2e8f0",
										textAlign: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 40,
												marginBottom: 10
											},
											children: "🌐"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												fontSize: 14,
												marginBottom: 6,
												color: "#1e3a5f"
											},
											children: "بوابة الترجمة الأرشيفية"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												fontSize: 12,
												color: "#64748b",
												lineHeight: 1.8
											},
											children: [
												"ارفع ملف TXT/MD أو الصق نص الوثيقة الأجنبية",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"ستحصل على ترجمة بالعربية التاريخية الرصينة",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"مع استخراج النقاط الجوهرية ومقترح الفصل المرتبط"
											]
										})
									]
								})
							] })]
						}),
						savedTranslations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								border: "0.5px solid #e2e8f0",
								overflow: "hidden"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									padding: "12px 18px",
									background: "#f8fafc",
									borderBottom: "0.5px solid #e2e8f0",
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										fontWeight: 600,
										fontSize: 13
									},
									children: [
										"📁 سجل الترجمات المحفوظة (",
										savedTranslations.length,
										")"
									]
								})
							}), savedTranslations.map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									padding: "12px 18px",
									borderBottom: "0.5px solid #f1f5f9",
									display: "flex",
									gap: 12,
									alignItems: "flex-start"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										flex: 1,
										minWidth: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 500,
												fontSize: 13,
												marginBottom: 3
											},
											children: tr.docMeta?.estimatedTitle || tr.fileName
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												fontSize: 11,
												color: "#64748b",
												display: "flex",
												gap: 8,
												flexWrap: "wrap"
											},
											children: [
												tr.docMeta?.date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 ", tr.docMeta.date] }),
												tr.docMeta?.docType && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📄 ", tr.docMeta.docType] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["💾 ", tr.savedAt] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"⭐ ",
													tr.keyPoints?.length || 0,
													" نقطة جوهرية"
												] })
											]
										}),
										tr.originalText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												fontSize: 10,
												color: "#94a3b8",
												marginTop: 3,
												fontFamily: "monospace",
												direction: "ltr",
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap"
											},
											children: [tr.originalText, "..."]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 4,
										flexShrink: 0
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setSelectedTranslation(tr);
											setTranslatedResult(tr.translation);
											setKeyPoints(tr.keyPoints || []);
											setTranslatorDocMeta(tr.docMeta);
											setTranslatorText("");
											setTranslatorFileName(tr.fileName || "");
										},
										style: {
											padding: "4px 10px",
											borderRadius: 6,
											background: "#eff6ff",
											color: "#3B82F6",
											border: "none",
											cursor: "pointer",
											fontSize: 11,
											fontFamily: "inherit"
										},
										children: "عرض"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => deleteTranslation(tr.id),
										style: {
											padding: "4px 8px",
											borderRadius: 6,
											background: "#fee2e2",
											color: "#dc2626",
											border: "none",
											cursor: "pointer",
											fontSize: 11
										},
										children: "🗑️"
									})]
								})]
							}, tr.id))]
						})
					] }),
					page === "defense" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { marginBottom: 20 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							style: {
								fontSize: 20,
								fontWeight: 700,
								marginBottom: 4
							},
							children: "🎓 محاكي مناقشة الأطروحة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								color: "#64748b",
								fontSize: 12
							},
							children: [
								"يتقمّص الذكاء الاصطناعي دور رئيس لجنة مناقشة صارم — اختر الفصل لتبدأ جلسة تدريبية أكاديمية حقيقية · يعمل بـ ",
								AI_MODELS.find((m) => m.id === aiModel)?.label || aiModel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
									display: "inline-block",
									width: 7,
									height: 7,
									borderRadius: "50%",
									background: "#10b981",
									marginInlineStart: 4,
									verticalAlign: "middle"
								} })
							]
						})]
					}), !defenseActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							background: "#fffbeb",
							borderRadius: 10,
							padding: 14,
							border: "0.5px solid #fde68a",
							marginBottom: 18,
							fontSize: 12,
							color: "#78350f"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "💡 كيف تعمل المحاكاة؟" }), " يقرأ النظام مصادر الفصل الذي تختاره ويحلل تنوع مصادرك، ثم يُشغّل أستاذاً دكتوراً صارماً يوجّه لك أسئلة ونقوداً علمية حقيقية كما يحدث في قاعة المناقشة بجامعة الموصل. أجب بالعربية الفصحى الأكاديمية."]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
							gap: 16
						},
						children: chapters.map((ch) => {
							const chDocs = docs.filter((d) => d.chapterId === ch.id);
							const diversity = calcDiversityForChapter(ch.id);
							const progress = calcChapterProgress(ch.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 14,
									border: `2px solid ${ch.color}30`,
									borderTop: `4px solid ${ch.color}`,
									padding: 18,
									boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 700,
											fontSize: 13,
											color: ch.color,
											marginBottom: 10,
											lineHeight: 1.4
										},
										children: ch.titleAr
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 8,
											marginBottom: 10,
											flexWrap: "wrap"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												fontSize: 11,
												background: `${ch.color}10`,
												color: ch.color,
												borderRadius: 5,
												padding: "2px 8px"
											},
											children: [
												"📄 ",
												chDocs.length,
												" مصدر"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												fontSize: 11,
												background: "#f1f5f9",
												color: "#475569",
												borderRadius: 5,
												padding: "2px 8px"
											},
											children: [
												"📈 ",
												progress,
												"% إنجاز"
											]
										})]
									}),
									diversity.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { marginBottom: 12 },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 10,
													color: "#94a3b8",
													marginBottom: 5
												},
												children: "توزيع المصادر:"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													height: 6,
													background: "#f1f5f9",
													borderRadius: 3,
													overflow: "hidden",
													display: "flex",
													marginBottom: 5
												},
												children: diversity.map((dc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														height: "100%",
														width: `${dc.pct}%`,
														background: dc.color
													},
													title: `${dc.label}: ${dc.pct}%`
												}, i))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													display: "flex",
													flexWrap: "wrap",
													gap: 3
												},
												children: diversity.map((dc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: {
														fontSize: 9,
														background: `${dc.color}12`,
														color: dc.color,
														borderRadius: 3,
														padding: "0 5px"
													},
													children: [
														dc.label.split(" ")[0],
														": ",
														dc.pct,
														"%"
													]
												}, i))
											})
										]
									}),
									chDocs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 11,
											color: "#94a3b8",
											fontStyle: "italic",
											marginBottom: 10
										},
										children: "لا توجد مصادر مضافة لهذا الفصل بعد"
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => startDefenseSession(ch),
										disabled: chDocs.length === 0,
										style: {
											width: "100%",
											padding: "9px",
											borderRadius: 8,
											background: chDocs.length > 0 ? ch.color : "#94a3b8",
											color: "white",
											border: "none",
											cursor: chDocs.length > 0 ? "pointer" : "not-allowed",
											fontFamily: "inherit",
											fontSize: 12,
											fontWeight: 600
										},
										children: "🎓 بدء محاكاة مناقشة هذا الفصل"
									})
								]
							}, ch.id);
						})
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: defenseChapter?.color || "#1e3a5f",
								color: "white",
								borderRadius: 12,
								padding: "12px 18px",
								marginBottom: 14,
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 700,
									fontSize: 13,
									marginBottom: 2
								},
								children: "🎓 جلسة مناقشة نشطة"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 11,
									opacity: .85
								},
								children: defenseChapter?.titleAr
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: endDefenseSession,
								style: {
									padding: "6px 14px",
									borderRadius: 7,
									background: "rgba(255,255,255,0.2)",
									border: "none",
									color: "white",
									cursor: "pointer",
									fontFamily: "inherit",
									fontSize: 12
								},
								children: "إنهاء الجلسة ✕"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								background: "#fffbeb",
								borderRadius: 8,
								padding: "8px 14px",
								marginBottom: 12,
								fontSize: 11,
								color: "#78350f",
								border: "0.5px solid #fde68a"
							},
							children: "أنت الآن أمام لجنة المناقشة — أجب بالعربية الفصحى الأكاديمية. اللجنة ستنتقد مصادرك وتختبر منهجيتك. استعد!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								border: "0.5px solid #e2e8f0",
								overflow: "hidden",
								marginBottom: 12
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									maxHeight: 460,
									overflowY: "auto",
									padding: 16,
									display: "flex",
									flexDirection: "column",
									gap: 12
								},
								children: [
									defenseMessages.map((msg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 10,
											alignItems: "flex-start",
											flexDirection: msg.role === "committee" ? "row" : "row-reverse"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												width: 36,
												height: 36,
												borderRadius: "50%",
												flexShrink: 0,
												background: msg.role === "committee" ? "#1e3a5f" : "#10B981",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: 16
											},
											children: msg.role === "committee" ? "👨‍🏫" : "🎓"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												maxWidth: "75%",
												background: msg.role === "committee" ? "#f8fafc" : "#f0fdf4",
												borderRadius: msg.role === "committee" ? "4px 12px 12px 12px" : "12px 4px 12px 12px",
												padding: "10px 14px",
												border: `0.5px solid ${msg.role === "committee" ? "#e2e8f0" : "#86efac"}`
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontSize: 11,
														fontWeight: 600,
														color: msg.role === "committee" ? "#1e3a5f" : "#16a34a",
														marginBottom: 5
													},
													children: msg.role === "committee" ? "🎓 رئيس لجنة المناقشة" : "👨‍💼 الباحث: اسعد النعيمي"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontSize: 13,
														lineHeight: 1.85,
														color: "#1e293b",
														direction: "rtl"
													},
													children: msg.text
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontSize: 10,
														color: "#94a3b8",
														marginTop: 5,
														textAlign: "left"
													},
													children: msg.ts
												})
											]
										})]
									}, i)),
									defenseLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											gap: 10,
											alignItems: "flex-start"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												width: 36,
												height: 36,
												borderRadius: "50%",
												background: "#1e3a5f",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: 16,
												flexShrink: 0
											},
											children: "👨‍🏫"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												background: "#f8fafc",
												borderRadius: "4px 12px 12px 12px",
												padding: "10px 16px",
												border: "0.5px solid #e2e8f0"
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													display: "flex",
													gap: 4,
													alignItems: "center"
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
														width: 7,
														height: 7,
														borderRadius: "50%",
														background: "#94a3b8",
														animation: "pulse 1.4s infinite"
													} }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
														width: 7,
														height: 7,
														borderRadius: "50%",
														background: "#94a3b8",
														animation: "pulse 1.4s 0.2s infinite"
													} }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
														width: 7,
														height: 7,
														borderRadius: "50%",
														background: "#94a3b8",
														animation: "pulse 1.4s 0.4s infinite"
													} }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														style: {
															fontSize: 11,
															color: "#64748b",
															marginRight: 6
														},
														children: "اللجنة تصوغ سؤالها..."
													})
												]
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: defenseChatEndRef })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									borderTop: "0.5px solid #e2e8f0",
									padding: 14,
									background: "#fafafa"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: 8
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: defenseInput,
										onChange: (e) => setDefenseInput(e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter" && !e.shiftKey) {
												e.preventDefault();
												sendDefenseReply();
											}
										},
										placeholder: "اكتب إجابتك أمام اللجنة بالعربية الفصحى... (Enter للإرسال، Shift+Enter لسطر جديد)",
										rows: 3,
										style: {
											flex: 1,
											padding: "9px 12px",
											borderRadius: 8,
											border: "0.5px solid #cbd5e1",
											fontSize: 13,
											fontFamily: "inherit",
											resize: "vertical",
											direction: "rtl",
											lineHeight: 1.7
										},
										disabled: defenseLoading
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: sendDefenseReply,
										disabled: defenseLoading || !defenseInput.trim(),
										style: {
											padding: "9px 16px",
											borderRadius: 8,
											background: defenseLoading || !defenseInput.trim() ? "#94a3b8" : "#1e3a5f",
											color: "white",
											border: "none",
											cursor: defenseLoading || !defenseInput.trim() ? "not-allowed" : "pointer",
											fontFamily: "inherit",
											fontSize: 13,
											fontWeight: 600,
											alignSelf: "flex-end"
										},
										children: "إرسال →"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 10,
										color: "#94a3b8",
										marginTop: 5
									},
									children: "💡 نصيحة: استند في إجابتك إلى مصادرك المحددة — اللجنة ستتحقق من ذلك"
								})]
							})]
						}),
						defenseMessages.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								const log = defenseMessages.map((m) => `[${m.role === "committee" ? "اللجنة" : "الباحث"}] ${m.text}`).join("\n\n---\n\n");
								navigator.clipboard.writeText(log).then(() => showNotif("✅ تم نسخ سجل المناقشة"));
							},
							style: {
								padding: "8px 16px",
								borderRadius: 8,
								background: "white",
								border: "0.5px solid #e2e8f0",
								cursor: "pointer",
								fontFamily: "inherit",
								fontSize: 12,
								color: "#475569"
							},
							children: "📋 نسخ سجل المناقشة كاملاً"
						})
					] })] }),
					page === "bibliography" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-start",
								marginBottom: 20,
								flexWrap: "wrap",
								gap: 12
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: 20,
									fontWeight: 700,
									marginBottom: 4
								},
								children: "📋 قائمة المصادر والمراجع النهائية للرسالة"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "#64748b",
									fontSize: 12
								},
								children: "تُضاف المراجع تلقائياً عند نسخ أي هامش — الاسم مُحوَّل (اللقب، الاسم الأول) — مرتّبة أبجدياً داخل كل قسم"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 8,
									flexWrap: "wrap"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: copyFullBibliography,
									disabled: bibliography.length === 0,
									style: {
										padding: "9px 20px",
										borderRadius: 8,
										background: bibliography.length > 0 ? "#3B82F6" : "#94a3b8",
										color: "white",
										border: "none",
										cursor: bibliography.length > 0 ? "pointer" : "not-allowed",
										fontFamily: "inherit",
										fontSize: 13,
										fontWeight: 600
									},
									children: "📋 نسخ القائمة كاملة"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										if (window.confirm("هل تريد مسح جميع المراجع من القائمة؟")) saveBibliography([]);
									},
									disabled: bibliography.length === 0,
									style: {
										padding: "9px 14px",
										borderRadius: 8,
										background: "transparent",
										border: "0.5px solid #fca5a5",
										color: "#dc2626",
										cursor: bibliography.length > 0 ? "pointer" : "not-allowed",
										fontFamily: "inherit",
										fontSize: 13
									},
									children: "🗑️ مسح الكل"
								})]
							})]
						}),
						bibliography.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
								gap: 10,
								marginBottom: 16
							},
							children: BIBO_SECTIONS_ORDER.map((sec) => {
								const cnt = bibliography.filter((b) => b.section === sec).length;
								if (!cnt) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 10,
										padding: "10px 12px",
										border: "0.5px solid #e2e8f0",
										textAlign: "center"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 20,
											fontWeight: 700,
											color: "#3B82F6"
										},
										children: cnt
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 10,
											color: "#64748b",
											marginTop: 2
										},
										children: sec
									})]
								}, sec);
							})
						}),
						bibliography.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 50,
								textAlign: "center",
								border: "0.5px solid #e2e8f0"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 48,
										marginBottom: 12
									},
									children: "📋"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontWeight: 600,
										fontSize: 15,
										marginBottom: 6
									},
									children: "القائمة فارغة"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										color: "#64748b",
										fontSize: 13
									},
									children: "عند نسخ أي هامش من أي مصدر، يُضاف تلقائياً هنا"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										color: "#94a3b8",
										fontSize: 12,
										marginTop: 6
									},
									children: "يمكنك أيضاً الضغط على زر \"📝 تصدير الهامش\" من داخل أي مصدر"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "grid",
								gap: 16
							},
							children: BIBO_SECTIONS_ORDER.map((sec) => {
								const entries = getBibGrouped()[sec] || [];
								if (!entries.length) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										border: "0.5px solid #e2e8f0",
										overflow: "hidden"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											padding: "12px 18px",
											background: "#1e3a5f",
											color: "white",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												fontWeight: 700,
												fontSize: 14
											},
											children: ["◆ ", sec]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												background: "rgba(255,255,255,0.2)",
												borderRadius: 20,
												padding: "2px 10px",
												fontSize: 11
											},
											children: [entries.length, " مرجع"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: { padding: "4px 0" },
										children: entries.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												padding: "12px 18px",
												borderBottom: i < entries.length - 1 ? "0.5px solid #f1f5f9" : "none",
												display: "flex",
												gap: 12,
												alignItems: "flex-start"
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														color: "#94a3b8",
														fontSize: 12,
														fontWeight: 600,
														minWidth: 24,
														textAlign: "center",
														marginTop: 2
													},
													children: i + 1
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: { flex: 1 },
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 13,
															lineHeight: 1.9,
															color: "#1e293b",
															direction: "rtl"
														},
														children: b.bibEntry
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															display: "flex",
															gap: 6,
															marginTop: 4,
															flexWrap: "wrap",
															fontSize: 10,
															color: "#94a3b8"
														},
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["🏷️ ", b.category] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📅 أُضيف: ", b.addedAt] })]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														display: "flex",
														gap: 4,
														flexShrink: 0
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => {
															navigator.clipboard.writeText(b.bibEntry).then(() => showNotif("✅ تم نسخ المرجع"));
														},
														title: "نسخ",
														style: {
															padding: "4px 8px",
															borderRadius: 5,
															background: "#eff6ff",
															color: "#3B82F6",
															border: "none",
															cursor: "pointer",
															fontSize: 11
														},
														children: "📋"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => removeFromBibliography(b.id),
														title: "حذف",
														style: {
															padding: "4px 8px",
															borderRadius: 5,
															background: "#fee2e2",
															color: "#dc2626",
															border: "none",
															cursor: "pointer",
															fontSize: 11
														},
														children: "🗑️"
													})]
												})
											]
										}, b.id))
									})]
								}, sec);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								marginTop: 16,
								background: "#fffbeb",
								borderRadius: 10,
								padding: 14,
								border: "0.5px solid #fde68a",
								fontSize: 12,
								color: "#78350f"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "💡 كيف تعمل القائمة:" }), " عند الضغط على \"📝 تصدير الهامش\" من أي مصدر وإدخال رقم الصفحة ثم \"نسخ الهامش\"، يُنسخ الهامش للحافظة ويُضاف المصدر هنا تلقائياً بصيغة قائمة المراجع (بدون رقم الصفحة، مع تقديم اللقب، مرتّب أبجدياً)."]
						})
					] }),
					page === "thesaurus" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { marginBottom: 20 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: 20,
									fontWeight: 700,
									marginBottom: 4
								},
								children: "📜 قاموس المؤرخ للمرادفات والسبك"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "#64748b",
									fontSize: 12
								},
								children: "أداة لغوية أكاديمية لمعالجة تكرار الكلمات وترقية التراكيب إلى مستوى الكتابة التاريخية الرصينة"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								gap: 0,
								marginBottom: 20,
								background: "white",
								borderRadius: 12,
								padding: 4,
								border: "0.5px solid #e2e8f0",
								width: "fit-content"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setThesActiveTab("synonyms"),
								style: {
									padding: "8px 20px",
									borderRadius: 9,
									border: "none",
									cursor: "pointer",
									fontFamily: "inherit",
									fontSize: 13,
									fontWeight: thesActiveTab === "synonyms" ? 700 : 400,
									background: thesActiveTab === "synonyms" ? "#1e3a5f" : "transparent",
									color: thesActiveTab === "synonyms" ? "white" : "#64748b",
									transition: "all 0.2s"
								},
								children: "🔤 مستكشف المرادفات الأكاديمية"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setThesActiveTab("upgrade"),
								style: {
									padding: "8px 20px",
									borderRadius: 9,
									border: "none",
									cursor: "pointer",
									fontFamily: "inherit",
									fontSize: 13,
									fontWeight: thesActiveTab === "upgrade" ? 700 : 400,
									background: thesActiveTab === "upgrade" ? "#1e3a5f" : "transparent",
									color: thesActiveTab === "upgrade" ? "white" : "#64748b",
									transition: "all 0.2s"
								},
								children: "✍️ ترقية التراكيب القصيرة"
							})]
						}),
						thesActiveTab === "synonyms" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "340px 1fr",
								gap: 16,
								alignItems: "start"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 18,
									border: "0.5px solid #e2e8f0",
									marginBottom: 12
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 14,
											color: "#1e293b"
										},
										children: "🔤 اكتب الكلمة المكررة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: thesWordInput,
										onChange: (e) => {
											setThesWordInput(e.target.value);
											setThesWordResult(null);
										},
										onKeyDown: (e) => {
											if (e.key === "Enter") runThesaurusSearch();
										},
										placeholder: "مثال: أدى، قال، حدث، أهمية، كبير...",
										style: {
											width: "100%",
											padding: "10px 14px",
											borderRadius: 8,
											border: "1.5px solid #cbd5e1",
											fontSize: 14,
											fontFamily: "inherit",
											boxSizing: "border-box",
											outline: "none",
											marginBottom: 12,
											direction: "rtl"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: runThesaurusSearch,
										disabled: thesWordLoading || !thesWordInput.trim(),
										style: {
											width: "100%",
											padding: "10px",
											borderRadius: 8,
											background: thesWordLoading || !thesWordInput.trim() ? "#94a3b8" : "#1e3a5f",
											color: "white",
											border: "none",
											cursor: thesWordLoading || !thesWordInput.trim() ? "not-allowed" : "pointer",
											fontFamily: "inherit",
											fontSize: 13,
											fontWeight: 600,
											marginBottom: 10
										},
										children: thesWordLoading ? "⏳ جارٍ البحث..." : "🔍 استكشاف المرادفات"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { marginTop: 8 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 11,
												color: "#94a3b8",
												marginBottom: 6
											},
											children: "كلمات شائعة التكرار في الكتابة التاريخية:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												display: "flex",
												flexWrap: "wrap",
												gap: 5
											},
											children: [
												"أدى",
												"قال",
												"حدث",
												"أهمية",
												"كبير",
												"مهم",
												"تأثير",
												"دور",
												"يشير",
												"أسفر"
											].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setThesWordInput(w);
													setThesWordResult(null);
												},
												style: {
													padding: "3px 9px",
													borderRadius: 5,
													background: "#f1f5f9",
													border: "0.5px solid #e2e8f0",
													color: "#475569",
													cursor: "pointer",
													fontSize: 11,
													fontFamily: "inherit"
												},
												children: w
											}, w))
										})]
									})
								]
							}), thesWordHistory.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 14,
									border: "0.5px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 12,
										fontWeight: 600,
										color: "#475569",
										marginBottom: 8
									},
									children: "🕐 آخر الكلمات المبحوثة"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										flexWrap: "wrap",
										gap: 5
									},
									children: thesWordHistory.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setThesWordInput(h.word);
											setThesWordResult(h.result);
										},
										style: {
											padding: "3px 10px",
											borderRadius: 5,
											background: "#eff6ff",
											border: "0.5px solid #bfdbfe",
											color: "#3B82F6",
											cursor: "pointer",
											fontSize: 11,
											fontFamily: "inherit"
										},
										children: h.word
									}, i))
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								thesWordLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 40,
										border: "0.5px solid #e2e8f0",
										textAlign: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 40,
												marginBottom: 10
											},
											children: "📚"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												color: "#1e3a5f",
												marginBottom: 4
											},
											children: "يستشير المعاجم الأكاديمية..."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 12,
												color: "#64748b"
											},
											children: "يبحث عن مرادفات أكاديمية رصينة تليق بمستوى الدكتوراه"
										})
									]
								}),
								thesWordResult && !thesWordLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "#1e3a5f",
											borderRadius: "12px 12px 0 0",
											padding: "14px 18px",
											color: "white"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												gap: 12,
												alignItems: "center",
												flexWrap: "wrap"
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontSize: 20,
														fontWeight: 800
													},
													children: thesWordResult.word
												}),
												thesWordResult.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: {
														background: "rgba(255,255,255,0.2)",
														borderRadius: 5,
														padding: "2px 10px",
														fontSize: 11
													},
													children: thesWordResult.category
												}),
												thesWordResult.semanticField && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													style: {
														background: "rgba(255,255,255,0.15)",
														borderRadius: 5,
														padding: "2px 10px",
														fontSize: 11
													},
													children: ["الحقل: ", thesWordResult.semanticField]
												})
											]
										}), thesWordResult.avoidNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												marginTop: 8,
												fontSize: 11,
												opacity: .8,
												lineHeight: 1.6,
												background: "rgba(255,255,255,0.07)",
												borderRadius: 7,
												padding: "6px 10px"
											},
											children: ["💡 ", thesWordResult.avoidNote]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											background: "white",
											borderRadius: "0 0 12px 12px",
											border: "0.5px solid #e2e8f0",
											padding: "4px 0",
											overflow: "hidden"
										},
										children: (thesWordResult.synonyms || []).map((syn, i) => {
											const regColor = REGISTER_COLOR[syn.register] || "#64748b";
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													padding: "13px 18px",
													borderBottom: i < (thesWordResult.synonyms || []).length - 1 ? "0.5px solid #f1f5f9" : "none",
													display: "flex",
													gap: 12,
													alignItems: "flex-start"
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														flexShrink: 0,
														width: 30,
														height: 30,
														borderRadius: "50%",
														background: "#f1f5f9",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														fontSize: 12,
														fontWeight: 700,
														color: "#475569"
													},
													children: i + 1
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: { flex: 1 },
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															style: {
																display: "flex",
																gap: 8,
																alignItems: "center",
																marginBottom: 5,
																flexWrap: "wrap"
															},
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	style: {
																		fontSize: 16,
																		fontWeight: 700,
																		color: "#1e293b"
																	},
																	children: syn.word
																}),
																syn.formType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	style: {
																		fontSize: 10,
																		background: "#f1f5f9",
																		color: "#64748b",
																		borderRadius: 4,
																		padding: "1px 7px"
																	},
																	children: syn.formType
																}),
																syn.register && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	style: {
																		fontSize: 10,
																		background: `${regColor}15`,
																		color: regColor,
																		borderRadius: 4,
																		padding: "1px 7px",
																		fontWeight: 600
																	},
																	children: syn.register
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	onClick: () => {
																		navigator.clipboard.writeText(syn.word).then(() => showNotif(`✅ تم نسخ: ${syn.word}`));
																	},
																	style: {
																		padding: "2px 8px",
																		borderRadius: 4,
																		background: "#eff6ff",
																		color: "#3B82F6",
																		border: "none",
																		cursor: "pointer",
																		fontSize: 10,
																		fontFamily: "inherit",
																		marginRight: "auto"
																	},
																	children: "نسخ"
																})
															]
														}),
														syn.context && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															style: {
																fontSize: 12,
																color: "#64748b",
																marginBottom: 5,
																display: "flex",
																gap: 5,
																alignItems: "flex-start"
															},
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																style: {
																	flexShrink: 0,
																	color: "#94a3b8"
																},
																children: "السياق:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: syn.context })]
														}),
														syn.example && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															style: {
																background: "#f8fafc",
																borderRadius: 7,
																padding: "7px 10px",
																fontSize: 12,
																lineHeight: 1.7,
																color: "#334155",
																borderRight: "3px solid #e2e8f0"
															},
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	style: {
																		fontSize: 10,
																		color: "#94a3b8",
																		display: "block",
																		marginBottom: 2
																	},
																	children: "مثال:"
																}),
																syn.example,
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	onClick: () => {
																		navigator.clipboard.writeText(syn.example).then(() => showNotif("✅ تم نسخ المثال"));
																	},
																	style: {
																		display: "block",
																		marginTop: 5,
																		padding: "2px 8px",
																		borderRadius: 4,
																		background: "white",
																		color: "#64748b",
																		border: "0.5px solid #e2e8f0",
																		cursor: "pointer",
																		fontSize: 10,
																		fontFamily: "inherit"
																	},
																	children: "نسخ المثال"
																})
															]
														})
													]
												})]
											}, i);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											marginTop: 10,
											display: "flex",
											gap: 8
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												const text = (thesWordResult.synonyms || []).map((s, i) => `${i + 1}. ${s.word} (${s.register || ""}) — ${s.context || ""}\n   مثال: ${s.example || ""}`).join("\n\n");
												navigator.clipboard.writeText(`مرادفات "${thesWordResult.word}":\n\n${text}`).then(() => showNotif("✅ تم نسخ قائمة المرادفات كاملة"));
											},
											style: {
												padding: "7px 16px",
												borderRadius: 8,
												background: "white",
												border: "0.5px solid #e2e8f0",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 12,
												color: "#475569"
											},
											children: "📋 نسخ القائمة كاملة"
										})
									})
								] }),
								!thesWordLoading && !thesWordResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 40,
										border: "0.5px solid #e2e8f0",
										textAlign: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 44,
												marginBottom: 10
											},
											children: "🔤"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												fontSize: 14,
												marginBottom: 6,
												color: "#1e3a5f"
											},
											children: "مستكشف المرادفات الأكاديمية"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												fontSize: 12,
												color: "#64748b",
												lineHeight: 1.8
											},
											children: [
												"أدخل أي كلمة تتكرر في كتابتك",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"ستحصل على 8 مرادفات أكاديمية فصيحة",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"مع السياق الأنسب ومثال جملة كاملة لكل منها"
											]
										})
									]
								})
							] })]
						}),
						thesActiveTab === "upgrade" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "340px 1fr",
								gap: 16,
								alignItems: "start"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 18,
									border: "0.5px solid #e2e8f0",
									marginBottom: 12
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 4,
											color: "#1e293b"
										},
										children: "✍️ أدخل التركيب أو الجملة القصيرة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 11,
											color: "#94a3b8",
											marginBottom: 12
										},
										children: "حتى 12 كلمة — سيُرقَّى أسلوبها إلى مستوى الدكتوراه"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: thesPhrase,
										onChange: (e) => {
											setThesPhrase(e.target.value);
											setThesPhraseResult(null);
										},
										placeholder: "مثال:\n\"دخلت بريطانيا الحرب\"\n\"النفط مهم جداً\"\n\"تغيرت أوضاع الخليج\"",
										rows: 4,
										style: {
											width: "100%",
											padding: "10px 12px",
											borderRadius: 8,
											border: "1.5px solid #cbd5e1",
											fontSize: 13,
											fontFamily: "inherit",
											boxSizing: "border-box",
											resize: "vertical",
											direction: "rtl",
											lineHeight: 1.7,
											marginBottom: 12
										}
									}),
									thesPhrase && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											fontSize: 10,
											color: "#94a3b8",
											marginBottom: 8
										},
										children: [thesPhrase.split(/\s+/).filter(Boolean).length, " كلمة"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: runPhraseUpgrade,
										disabled: thesPhraseLoading || !thesPhrase.trim(),
										style: {
											width: "100%",
											padding: "10px",
											borderRadius: 8,
											background: thesPhraseLoading || !thesPhrase.trim() ? "#94a3b8" : "#7C3AED",
											color: "white",
											border: "none",
											cursor: thesPhraseLoading || !thesPhrase.trim() ? "not-allowed" : "pointer",
											fontFamily: "inherit",
											fontSize: 13,
											fontWeight: 600,
											marginBottom: 10
										},
										children: thesPhraseLoading ? "⏳ جارٍ الترقية..." : "✨ ترقية الأسلوب إلى مستوى الدكتوراه"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: { marginTop: 6 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 11,
												color: "#94a3b8",
												marginBottom: 6
											},
											children: "أمثلة جاهزة — اضغط للتطبيق:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												display: "grid",
												gap: 4
											},
											children: [
												"دخلت بريطانيا الحرب",
												"النفط مهم جداً للحلفاء",
												"تغيرت أوضاع الخليج خلال الحرب",
												"كانت البحرين مهمة",
												"قاومت دول الخليج التدخل"
											].map((ex, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setThesPhrase(ex);
													setThesPhraseResult(null);
												},
												style: {
													padding: "5px 10px",
													borderRadius: 6,
													background: "#faf5ff",
													border: "0.5px solid #e9d5ff",
													color: "#7C3AED",
													cursor: "pointer",
													fontSize: 11,
													fontFamily: "inherit",
													textAlign: "right"
												},
												children: ex
											}, i))
										})]
									})
								]
							}), thesPhraseHistory.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "white",
									borderRadius: 12,
									padding: 14,
									border: "0.5px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 12,
										fontWeight: 600,
										color: "#475569",
										marginBottom: 8
									},
									children: "🕐 آخر العبارات المُرقَّاة"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "grid",
										gap: 4
									},
									children: thesPhraseHistory.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setThesPhrase(h.phrase);
											setThesPhraseResult(h.result);
										},
										style: {
											padding: "4px 10px",
											borderRadius: 5,
											background: "#faf5ff",
											border: "0.5px solid #e9d5ff",
											color: "#7C3AED",
											cursor: "pointer",
											fontSize: 11,
											fontFamily: "inherit",
											textAlign: "right",
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap"
										},
										children: h.phrase
									}, i))
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								thesPhraseLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 40,
										border: "0.5px solid #e2e8f0",
										textAlign: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 40,
												marginBottom: 10
											},
											children: "✍️"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												color: "#7C3AED",
												marginBottom: 4
											},
											children: "يُرقِّي الأسلوب..."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 12,
												color: "#64748b"
											},
											children: "يصوغ تراكيب تاريخية رصينة تليق بمستوى الدكتوراه"
										})
									]
								}),
								thesPhraseResult && !thesPhraseLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "#fff7ed",
											borderRadius: 12,
											padding: "12px 16px",
											border: "0.5px solid #fed7aa",
											marginBottom: 14,
											display: "flex",
											gap: 10,
											alignItems: "flex-start"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												fontSize: 18,
												flexShrink: 0
											},
											children: "🩺"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												fontWeight: 600,
												fontSize: 12,
												color: "#92400e",
												marginBottom: 3
											},
											children: [
												"تشخيص الصياغة الأصلية: «",
												thesPhraseResult.original,
												"»"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 12,
												color: "#78350f",
												lineHeight: 1.6
											},
											children: thesPhraseResult.diagnosis
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											display: "grid",
											gap: 10,
											marginBottom: 14
										},
										children: (thesPhraseResult.upgrades || []).map((upg, i) => {
											const styleColor = REGISTER_COLOR[upg.style] || "#64748b";
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													background: "white",
													borderRadius: 10,
													border: `1.5px solid ${styleColor}25`,
													overflow: "hidden"
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: {
														background: `${styleColor}10`,
														padding: "8px 14px",
														borderBottom: `0.5px solid ${styleColor}20`,
														display: "flex",
														justifyContent: "space-between",
														alignItems: "center"
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															display: "flex",
															gap: 6,
															alignItems: "center"
														},
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															style: {
																fontSize: 13,
																fontWeight: 700,
																color: "#64748b"
															},
															children: ["#", i + 1]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															style: {
																fontSize: 11,
																background: `${styleColor}20`,
																color: styleColor,
																borderRadius: 5,
																padding: "2px 8px",
																fontWeight: 600
															},
															children: upg.style
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => {
															navigator.clipboard.writeText(upg.text).then(() => showNotif(`✅ تم نسخ الصياغة #${i + 1}`));
														},
														style: {
															padding: "3px 10px",
															borderRadius: 5,
															background: "white",
															border: `0.5px solid ${styleColor}40`,
															color: styleColor,
															cursor: "pointer",
															fontSize: 11,
															fontFamily: "inherit"
														},
														children: "📋 نسخ"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													style: { padding: "12px 14px" },
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 14,
															fontWeight: 600,
															lineHeight: 1.8,
															color: "#1e293b",
															marginBottom: 6,
															direction: "rtl"
														},
														children: upg.text
													}), upg.note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														style: {
															fontSize: 11,
															color: "#94a3b8",
															lineHeight: 1.6,
															borderTop: "0.5px solid #f1f5f9",
															paddingTop: 6
														},
														children: ["💡 ", upg.note]
													})]
												})]
											}, i);
										})
									}),
									thesPhraseResult.generalTip && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "#f0fdf4",
											borderRadius: 10,
											padding: "12px 16px",
											border: "0.5px solid #86efac",
											display: "flex",
											gap: 10,
											alignItems: "flex-start"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												fontSize: 18,
												flexShrink: 0
											},
											children: "🎓"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												fontSize: 12,
												color: "#16a34a",
												marginBottom: 3
											},
											children: "نصيحة للباحث"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 12,
												color: "#15803d",
												lineHeight: 1.7
											},
											children: thesPhraseResult.generalTip
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: { marginTop: 12 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												const text = (thesPhraseResult.upgrades || []).map((u, i) => `الصياغة ${i + 1} (${u.style}):\n${u.text}`).join("\n\n");
												navigator.clipboard.writeText(`ترقية: "${thesPhraseResult.original}"\n\n${text}`).then(() => showNotif("✅ تم نسخ جميع الصياغات"));
											},
											style: {
												padding: "7px 16px",
												borderRadius: 8,
												background: "white",
												border: "0.5px solid #e2e8f0",
												cursor: "pointer",
												fontFamily: "inherit",
												fontSize: 12,
												color: "#475569"
											},
											children: "📋 نسخ جميع الصياغات"
										})
									})
								] }),
								!thesPhraseLoading && !thesPhraseResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 40,
										border: "0.5px solid #e2e8f0",
										textAlign: "center"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontSize: 44,
												marginBottom: 10
											},
											children: "✍️"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												fontSize: 14,
												marginBottom: 6,
												color: "#7C3AED"
											},
											children: "ترقية التراكيب القصيرة"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												fontSize: 12,
												color: "#64748b",
												lineHeight: 1.8
											},
											children: [
												"أدخل جملة قصيرة بسيطة أو تركيباً عادياً",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"ستحصل على 5 صياغات أكاديمية رصينة",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"بأساليب متنوعة: وصفية، تحليلية، استنتاجية، علّية، بلاغية"
											]
										})
									]
								})
							] })]
						})
					] }),
					page === "telegram" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							style: {
								fontSize: 20,
								fontWeight: 700,
								marginBottom: 6
							},
							children: "✈️ محرك البحث — تيليغرام والمصادر الرقمية"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								color: "#64748b",
								fontSize: 13,
								marginBottom: 4
							},
							children: "ابحث عن مصادر أطروحتك في قنوات تيليغرام الأرشيفية والتاريخية"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "#fef9c3",
								borderRadius: 8,
								padding: 12,
								marginBottom: 16,
								border: "0.5px solid #fde68a",
								fontSize: 12,
								color: "#78350f"
							},
							children: [
								"⚠️ ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ملاحظة:" }),
								" تيليغرام لا يوفر API بحث عام مجاني. هذا المحرك يستخدم الذكاء الاصطناعي لاقتراح القنوات والمصادر ذات الصلة، ثم تنتقل إليها يدوياً."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 16,
								border: "0.5px solid #e2e8f0",
								marginBottom: 14
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 10,
									marginBottom: 12
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: tgQuery,
									onChange: (e) => setTgQuery(e.target.value),
									placeholder: "مثال: وثائق IOR الخليج العربي، أرشيف بريطاني، RAF البحرين...",
									style: {
										flex: 1,
										padding: "9px 14px",
										borderRadius: 8,
										border: "0.5px solid #cbd5e1",
										fontSize: 13,
										fontFamily: "inherit"
									},
									onKeyDown: (e) => {
										if (e.key === "Enter") handleTgSearch();
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleTgSearch,
									disabled: tgLoading,
									style: {
										padding: "9px 18px",
										borderRadius: 8,
										background: "#0088cc",
										color: "white",
										border: "none",
										cursor: "pointer",
										fontFamily: "inherit",
										fontSize: 13
									},
									children: tgLoading ? "⏳ بحث..." : "🔍 بحث"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									gap: 6,
									flexWrap: "wrap"
								},
								children: [
									"وثائق تاريخية خليج عربي",
									"IOR أرشيف بريطاني",
									"RAF البحرين الحرب العالمية",
									"نفط الكويت 1940",
									"تاريخ الخليج العثماني"
								].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setTgQuery(q),
									style: {
										padding: "4px 10px",
										borderRadius: 20,
										border: "0.5px solid #e2e8f0",
										background: "#f8fafc",
										color: "#475569",
										cursor: "pointer",
										fontSize: 11,
										fontFamily: "inherit"
									},
									children: q
								}, q))
							})]
						}),
						tgLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 30,
								textAlign: "center",
								border: "0.5px solid #e2e8f0"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { fontSize: 36 },
								children: "🔍"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									color: "#64748b",
									marginTop: 8
								},
								children: "جاري البحث والتحليل..."
							})]
						}),
						tgResults && !tgLoading && !tgResults.error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gap: 14
							},
							children: [
								tgResults.channels && tgResults.channels.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 16,
										border: "0.5px solid #e2e8f0"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 12,
											color: "#0088cc"
										},
										children: "📢 قنوات ومجموعات تيليغرام مقترحة"
									}), tgResults.channels.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											padding: "10px 0",
											borderBottom: "0.5px solid #f1f5f9",
											display: "flex",
											gap: 10,
											alignItems: "flex-start"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													fontSize: 20,
													flexShrink: 0
												},
												children: "✈️"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: { flex: 1 },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontWeight: 500,
															fontSize: 13
														},
														children: ch.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														style: {
															fontSize: 12,
															color: "#64748b",
															marginTop: 2
														},
														children: ch.description
													}),
													ch.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: ch.url,
														target: "_blank",
														rel: "noopener noreferrer",
														style: {
															fontSize: 11,
															color: "#0088cc",
															display: "block",
															marginTop: 3
														},
														children: ch.url
													})
												]
											}),
											ch.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: ch.url,
												target: "_blank",
												rel: "noopener noreferrer",
												style: {
													padding: "5px 10px",
													borderRadius: 6,
													background: "#e7f3ff",
													color: "#0088cc",
													textDecoration: "none",
													fontSize: 11,
													flexShrink: 0
												},
												children: "فتح"
											})
										]
									}, i))]
								}),
								tgResults.related_docs && tgResults.related_docs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 16,
										border: "0.5px solid #e2e8f0"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 12,
											color: "#8B5CF6"
										},
										children: "📄 وثائق مقترحة للإضافة"
									}), tgResults.related_docs.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											padding: "10px 0",
											borderBottom: "0.5px solid #f1f5f9",
											display: "flex",
											gap: 10,
											alignItems: "flex-start"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: { flex: 1 },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontWeight: 500,
														fontSize: 13
													},
													children: d.title
												}),
												d.archiveRef && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontSize: 11,
														color: "#8B5CF6",
														fontFamily: "monospace",
														marginTop: 2
													},
													children: d.archiveRef
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: {
														fontSize: 12,
														color: "#64748b",
														marginTop: 2
													},
													children: d.relevance
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setAddForm((p) => ({
													...p,
													title: d.title,
													archiveRef: d.archiveRef || "",
													notes: d.relevance || ""
												}));
												setPage("add");
												showNotif("تم نقل بيانات الوثيقة للنموذج");
											},
											style: {
												padding: "5px 10px",
												borderRadius: 6,
												background: "#f5f3ff",
												color: "#8B5CF6",
												border: "none",
												cursor: "pointer",
												fontSize: 11,
												fontFamily: "inherit",
												flexShrink: 0
											},
											children: "إضافة +"
										})]
									}, i))]
								}),
								tgResults.keywords && tgResults.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "white",
										borderRadius: 12,
										padding: 16,
										border: "0.5px solid #e2e8f0"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontWeight: 600,
											fontSize: 13,
											marginBottom: 10
										},
										children: "🔑 كلمات مفتاحية للبحث في تيليغرام"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											display: "flex",
											gap: 6,
											flexWrap: "wrap"
										},
										children: tgResults.keywords.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												background: "#f1f5f9",
												borderRadius: 6,
												padding: "4px 10px",
												fontSize: 12
											},
											children: k
										}, i))
									})]
								}),
								tgResults.qdl_suggestions && tgResults.qdl_suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#eff6ff",
										borderRadius: 12,
										padding: 16,
										border: "0.5px solid #bfdbfe"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												fontSize: 13,
												marginBottom: 10,
												color: "#3B82F6"
											},
											children: "🔗 اقتراحات QDL ذات الصلة"
										}),
										tgResults.qdl_suggestions.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												padding: "6px 0",
												borderBottom: "0.5px solid #dbeafe",
												fontSize: 13
											},
											children: ["• ", s]
										}, i)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://www.qdl.qa/en/search#q=%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A&start=0",
											target: "_blank",
											rel: "noopener noreferrer",
											style: {
												display: "inline-block",
												marginTop: 10,
												padding: "7px 14px",
												borderRadius: 8,
												background: "#3B82F6",
												color: "white",
												textDecoration: "none",
												fontSize: 12
											},
											children: "فتح QDL ←"
										})
									]
								})
							]
						}),
						tgResults && tgResults.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								background: "#fee2e2",
								borderRadius: 12,
								padding: 14,
								border: "0.5px solid #fca5a5",
								fontSize: 13,
								color: "#dc2626"
							},
							children: tgResults.error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								background: "white",
								borderRadius: 12,
								padding: 16,
								border: "0.5px solid #e2e8f0",
								marginTop: 14
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 600,
									fontSize: 13,
									marginBottom: 12
								},
								children: "🔗 روابط مباشرة لقنوات أرشيفية موثوقة"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: 10
								},
								children: [
									{
										name: "قناة الوثائق التاريخية العربية",
										"url": "https://t.me/tarikh_waثائق"
									},
									{
										name: "أرشيف الخليج والجزيرة العربية",
										"url": "https://t.me/gulf_archive"
									},
									{
										name: "مكتبة التاريخ الإسلامي",
										"url": "https://t.me/islamic_history_lib"
									},
									{
										name: "Qatar Digital Library (موقع رسمي)",
										"url": "https://www.qdl.qa"
									},
									{
										name: "British National Archives",
										"url": "https://discovery.nationalarchives.gov.uk"
									},
									{
										name: "Internet Archive — الوثائق العربية",
										"url": "https://archive.org/search?query=gulf+arabia+1940"
									}
								].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: l.url,
									target: "_blank",
									rel: "noopener noreferrer",
									style: {
										display: "flex",
										alignItems: "center",
										gap: 8,
										padding: "8px 12px",
										borderRadius: 8,
										background: "#f8fafc",
										border: "0.5px solid #e2e8f0",
										textDecoration: "none",
										color: "#1e293b",
										fontSize: 12
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { fontSize: 16 },
										children: l.url.includes("t.me") ? "✈️" : "🌐"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.name })]
								}, i))
							})]
						})
					] })
				]
			})
		]
	});
}
function ClientApp() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		minHeight: "100vh",
		background: "#f8fafc"
	} });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { ClientApp as component };
