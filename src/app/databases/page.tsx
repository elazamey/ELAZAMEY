import Link from 'next/link';

const DatabasesPage = () => {
  const databases = [
    {
      name: 'Supabase',
      type: 'PostgreSQL + Auth + Storage',
      description: 'قاعدة بيانات SQL مفتوحة المصدر مع مصادقة مدمجة وتخزين ملفات. مثالية للتطبيقات التي تحتاج هيكل بيانات واضح.',
      pros: ['مصادقة مدمجة', 'تخزين ملفات مجاني', 'واجهة سهلة الاستخدام'],
      cons: ['أقل مرونة من NoSQL', 'قد يحتاج إعداد إضافي للأداء العالي'],
      setupLink: 'https://supabase.com/docs/guides/getting-started',
      codeExample: `import { createClient } from '@supabase/supabase-js';

const supabase = createClient('your-url', 'your-anon-key');

// إدراج تصميم
const { data, error } = await supabase
  .from('designs')
  .insert([{ name: 'Dress', category: 'dresses' }]);`
    },
    {
      name: 'Firebase Firestore',
      type: 'NoSQL + Real-time',
      description: 'قاعدة بيانات NoSQL من Google مع تحديثات فورية. مثالية للتطبيقات التفاعلية والمرنة.',
      pros: ['تحديثات فورية', 'تكامل مع Google services', 'سهولة في التوسع'],
      cons: ['تكلفة عالية عند النمو', 'أقل هيكلية من SQL'],
      setupLink: 'https://firebase.google.com/docs/firestore/quickstart',
      codeExample: `import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// إضافة تصميم
await addDoc(collection(db, 'designs'), {
  name: 'Dress',
  category: 'dresses'
});`
    },
    {
      name: 'PlanetScale',
      type: 'MySQL Serverless',
      description: 'قاعدة بيانات MySQL serverless مع دعم للتفرعات. مثالية للتطبيقات التي تحتاج أداء عالي وتوسع سريع.',
      pros: ['أداء عالي', 'دعم التفرعات', 'تكامل مع Prisma'],
      cons: ['أقل مرونة للبيانات غير المنظمة', 'قد يحتاج إعداد للأمان'],
      setupLink: 'https://planetscale.com/docs',
      codeExample: `import { connect } from '@planetscale/database';

const conn = connect({
  host: 'your-host',
  username: 'your-username',
  password: 'your-password'
});

// إدراج تصميم
await conn.execute('INSERT INTO designs (name, category) VALUES (?, ?)', ['Dress', 'dresses']);`
    },
    {
      name: 'Neon',
      type: 'PostgreSQL Serverless',
      description: 'قاعدة بيانات PostgreSQL serverless مع autoscaling ونسخ احتياطي تلقائي. مثالية للتطبيقات السحابية.',
      pros: ['autoscaling', 'نسخ احتياطي تلقائي', 'تكامل مع Vercel'],
      cons: ['قد يكون بطيئاً في البداية', 'أقل دعم للتحديثات الفورية'],
      setupLink: 'https://neon.tech/docs',
      codeExample: `import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://user:password@host/db'
});

await client.connect();

// إدراج تصميم
await client.query('INSERT INTO designs (name, category) VALUES ($1, $2)', ['Dress', 'dresses']);`
    },
    {
      name: 'Google Sheets + Notebook LLM',
      type: 'Spreadsheet + AI Processing',
      description: 'دمج Google Sheets كواجهة إدخال بيانات مع Notebook LLM لمعالجة البيانات وتوليد استجابات ذكية.',
      pros: ['سهولة الاستخدام', 'معالجة ذكية', 'تزامن متعدد القواعد'],
      cons: ['أقل أماناً للبيانات الحساسة', 'قد يحتاج إعداد API'],
      setupLink: 'https://developers.google.com/sheets/api',
      codeExample: `// استخدام gspread للقراءة من Sheets
import gspread

gc = gspread.service_account()
sh = gc.open("Fashion Designs")

// Notebook LLM يعالج البيانات
# استخدم API لإرسال البيانات إلى Notebook
response = requests.post('notebook-api-endpoint', json=data)`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          خيارات قواعد البيانات المجانية
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          استكشف بدائل مجانية لـ MongoDB Atlas لمشروع CELIA FASHION DESIGN
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {databases.map((db, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{db.name}</h2>
              <p className="text-sm text-purple-600 font-medium mb-3">{db.type}</p>
              <p className="text-gray-600 mb-4">{db.description}</p>

              <div className="mb-4">
                <h3 className="font-semibold text-green-600">المميزات:</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {db.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-red-600">العيوب:</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {db.cons.map((con, i) => <li key={i}>{con}</li>)}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800">مثال كود:</h3>
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                  <code>{db.codeExample}</code>
                </pre>
              </div>

              <a
                href={db.setupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                دليل الإعداد
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DatabasesPage;
