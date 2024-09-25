import { FaFeatherAlt, FaPaintRoller, FaCarBattery, FaShieldAlt } from "react-icons/fa";
import { FaArrowsLeftRightToLine } from "react-icons/fa6";
import { MdOutlineSettingsRemote, MdCandlestickChart,MdOutlineRoute, MdTouchApp } from "react-icons/md";
import { RiSpeedFill } from "react-icons/ri";
import { GiTankTread, GiStickyBoot } from "react-icons/gi";

const Specifications = () => {
  return (
    <section className="bg-primary text-white -mx-10">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:mx-auto lg:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Öne Çıkan Özelliklerimiz
          </h2>

          <p className="mt-4 text-gray-300 text-justify">
          Gelişmiş teknolojisi ve üstün mühendislik çözümleriyle tasarlanan solar panel temizlik robotu, verimliliğinizi artırmak ve operasyonel maliyetlerinizi düşürmek için ideal bir çözümdür. Hafif ve dayanıklı yapısından hassas temizleme fırçalarına kadar her detayıyla profesyonel ihtiyaçlarınızı karşılayacak şekilde üretilen bu robot, en zorlu koşullarda dahi sorunsuz çalışarak uzun ömürlü kullanım sunar. Yüksek performansı, kullanıcı dostu kontrol özellikleri ve uzun süreli batarya kapasitesi sayesinde temizlik operasyonlarınızı en üst düzeye çıkarın.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <FaFeatherAlt/>
            </span>

            <div>
              <h2 className="text-lg font-bold">Hafif Alüminyum Gövde</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Solar temizleme robotu, dayanıklı ve hafif alüminyum gövdesi sayesinde hem kolay taşınabilir hem de yüksek manevra kabiliyetine sahiptir. Paslanmaya karşı dirençli yapısıyla uzun ömürlü kullanım sunar, böylece bakım maliyetlerinizi minimuma indirir.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <FaPaintRoller />
            </span>

            <div>
              <h2 className="text-lg font-bold">Elektrostatik Boya</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Elektrostatik kaplama teknolojisi, robotun yüzeyinde üstün koruma sağlar ve çevresel koşullara karşı dayanıklılığı artırır. Bu özel kaplama, UV ışınlarına, yağmur ve toza karşı ekstra koruma sunarak cihazın ömrünü uzatır.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <FaArrowsLeftRightToLine />
            </span>

            <div>
              <h2 className="text-lg font-bold">50cm Aralığa Kadar Panelden Panele Geçişlere Uygun Mekanik Yapı</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              50 cm aralığa kadar esnek mekanik yapısıyla solar temizleme robotu, panelden panale rahatça geçebilir. Bu özelliği sayesinde temizlik işlemleri daha hızlı ve verimli bir şekilde gerçekleşir.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <MdOutlineSettingsRemote />
            </span>

            <div>
              <h2 className="text-lg font-bold">75 Metreye Kadar Etkili Endüstriyel Uzaktan Kumanda</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Robotunuzu 75 metre mesafeden dahi tam kontrol edebilmenizi sağlayan endüstriyel uzaktan kumanda, operasyonel esnekliği ve güvenliği artırır. İster yakından ister uzaktan, temizlik operasyonlarınızı sorunsuz yönetebilirsiniz.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <MdCandlestickChart />
            </span>

            <div>
              <h2 className="text-lg font-bold">Panel Yüzeylerini Çizmeden Hassas Temizlik Yapabilen İthal Fırçalar</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Robot, yüksek kaliteli ithal fırçaları sayesinde panel yüzeylerinde çizik oluşturmaz ve optimum temizlik sağlar. Hassas yapılı fırçalar, en zorlu kir ve toz birikintilerini dahi güvenli bir şekilde temizler.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <RiSpeedFill />
            </span>

            <div>
              <h2 className="text-lg font-bold">Ayarlanabilir Yürüme ve Fırça Hız</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Ayarlanabilir yürüme ve fırça hızı özellikleri ile farklı yüzeyler ve temizlik ihtiyaçlarına göre hız optimizasyonu yapabilirsiniz. Bu, hem enerji tasarrufu sağlar hem de temizlik kalitesini artırır.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <MdOutlineRoute />
            </span>

            <div>
              <h2 className="text-lg font-bold">Eğimli Yüzeylerde Rotadan Şaşmadan Düz İlerlemeyi Sağlayan &quot;Rota Stabilizasyon Sistemi&quot;</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Rota stabilizasyon sistemi, robotun eğimli ve zorlu yüzeylerde dahi rotasından sapmadan doğru ilerlemesini sağlar. Bu sayede dik yüzeylerde bile güvenli ve etkili temizlik yapılabilir.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <GiTankTread />
            </span>

            <div>
              <h2 className="text-lg font-bold">Silikon Palet Yapısı ile Panellere Daha Yumuşak</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Silikon paletler, panellere daha yumuşak temas ederek aşınma ve hasar riskini minimuma indirir. Bu palet yapısı, yüksek performanslı temizlik sağlarken panellerin ömrünü de uzatır.
              </p>
            </div>
          </div><div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <GiStickyBoot />
            </span>

            <div>
              <h2 className="text-lg font-bold">Kaymayan ve Uzun Ömürlü Baskı</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Özel olarak tasarlanmış kaymaz ve uzun ömürlü baskı, robotun her türlü hava koşulunda güvenli bir şekilde hareket etmesini sağlar. Bu, performans kaybı yaşanmadan uzun süreli kullanımı mümkün kılar.
              </p>
            </div>
          </div><div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <FaCarBattery />
            </span>

            <div>
              <h2 className="text-lg font-bold">Yedek Lityum Bataryalar ile 9 Saate Varan Durmadan Çalışma Süreleri</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Yüksek kapasiteli lityum bataryalar sayesinde robotunuz 9 saate kadar durmaksızın çalışabilir. Yedek batarya opsiyonuyla daha uzun süreli operasyonlar için kesintisiz bir temizlik deneyimi sunar.
              </p>
            </div>
          </div><div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <MdTouchApp />
            </span>

            <div>
              <h2 className="text-lg font-bold">4&quot; Dokunmatik Panel (PLT Serisi) </h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Gelişmiş 4&quot; dokunmatik ekranı ile PLT serisi, kullanıcı dostu bir arayüz sunar. Kolayca kontrol edilebilen bu ekran sayesinde robotunuzun tüm işlevlerine hızlıca erişebilir, temizlik modlarını anında ayarlayabilirsiniz.
              </p>
            </div>
          </div><div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <FaShieldAlt />
            </span>

            <div>
              <h2 className="text-lg font-bold">Mekanik Darbelere Karşı, Motor Koruma Sistemi</h2>

              <p className="mt-1 text-sm text-gray-300 text-justify">
              Robotun motoru, mekanik darbelere karşı özel olarak tasarlanmış bir koruma sistemi ile donatılmıştır. Bu sistem, uzun ömürlü ve sorunsuz bir kullanım sağlayarak robotun en zorlu şartlarda bile yüksek performans göstermesini garantiler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
