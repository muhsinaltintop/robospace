import Image from "next/image"

export const AboutOdaksan = () => {
    return (
      <div className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
          Odaksan Mühendislik A.Ş.
        </h2>
  
        <div className="w-full md:w-3/4 lg:w-1/2 h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg mt-6">
          <Image
            src="/odaksan-fabrika-2.png"
            width={800}
            height={300}
            alt="Odaksan Fabrika"
            className="object-cover object-center w-full h-full"
          />
        </div>
  
        <p className="text-justify mt-6 w-full md:w-11/12 lg:w-10/12">
          Odaksan Mühendislik A.Ş. 2011 yılından bu yana Streçleme Makineleri
          üretmekte ve bu makinelerin yazılımını yapmaktadır. Odaksan öncelikle
          kendi bölgesinde tanınır hale gelmiş ve piyasada yüksek kabul görmüştür.
          Kısa zaman içinde bölgesinde lider konuma gelen Odaksan, Türkiye’de
          tanınırlığını başarılı bir şekilde arttırmış ve Türkiye’de konusunda
          lider konuma gelirken Dünya’da tanınır hale gelmeyi hedef edinmiştir.
          Odaksan Mühendislik, müşteri memnuniyetini ön planda tutan, müşteriyi
          anlayarak, müşteri ihtiyaçları doğrultusunda makineleri geliştirmeyi
          ilke edinen bir üreticidir.
        </p>
      </div>
    );
  };
  

export const Vision = () => {
    return (
        <div className="p-4 md:p-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">Vizyonumuz</h2>
            <p className="text-justify mt-6 w-full md:w-11/12 lg:w-10/12">Odaksan Mühendislik A.Ş.’nin vizyonu streç makinesi kullanıcılarına dayanıklı ve benzerlerine göre daha az streç sarfiyatı olan makineler sunup; kullanıcıların yedek parça bağımlılıklarını azaltıp; sürekli gider kalemlerinden biri olan strecin kullanım miktarını en aza indirmektir.</p>
        </div>
    )
}

export const Mission = () => {
    return (
      <div className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">Misyonumuz</h2>
        <p className="text-justify mt-6 w-full md:w-11/12 lg:w-10/12">Streç makinelerinin zayıf noktalarını ve sorunlarını tespit edip; bunları iyileştirmek, streci en optimum noktada kullanacak makineleri geliştirmek ve bu makineleri müşterilerine 2 yılın altında bir amortisman süresiyle ulaştırmak Odaksan’ın misyonudur. Bu doğrultuda her geçen gün ürün yelpazemizi genişleterek, AR-GE inovasyon yatırımlarıyla hali hazırdaki ürünlerimizi geliştirerek büyümeye devam ediyoruz.

</p>
      </div>
    )
}

export const Quality = () => {
    return (
      <div className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">Kalite Politikamız</h2>
        <p className="text-justify mt-6 w-full md:w-11/12 lg:w-10/12">Üretimini yaptığımız streçleme makinelerini iki ana grupta sınıflandırmak mümkün. Bunlardan ilki mobil streç sarım makineleri; ikincisi ise döner tablalı streç sarım makineleridir. Bizi sektörümüzde öne çıkaran farklarımız tüm makinelerimizi PLC otomasyon sistemleri ile tasarlıyor olmamız ve dokunmatik ekran ile satışa sunuyor olmamızdır. Mobil streç sarım makinelerde dünyada bilinen teknoloji DC Fırçalı motorlu modellerdir. Bu modeller bakımları yapılmazsa ciddi masraflar çıkartırlar. Dünyada tek bakım gerektirmeyen SERVO motorlu modelleri ise biz üretiyoruz. Bunun yanı sıra 7” dokunmatik ekran ile görsel ve kolay programlama, traksiyoner akü ile uzun ve sorunsuz batarya sistemi ve akü değiştirme özelliği ile 7/24 çalışabilme opsiyonu, geniş yüzeyli izleme tekeri ile palete %100 adaptasyon ve metal gövde ile yüksek dayanım sektöre getirmiş olduğumuz yeniliklerin başında geliyor. Tüm bunların yanı sıra acil stop düğmesi ve ön güvenlik bariyeri sayesinde iş güvenliği de en üst düzeyde tutulmaktadır. Döner tablalı makinelerde müşteri geri dönüşleri daha önce başka firmalar ile yaşadıkları birtakım sıkıntılar nedeniyle oldukça olumsuzdur. Biz ise bir makinenin kullanılabilir olmasını çok önemsiyoruz. Bunun için tabla kalınlığını, tablayı döndüren dişli ve zincirleri; makinenin ilk günkü gibi çalışması için en iyi malzemelerden seçiyoruz. Ayrıca 7” dokunmatik ekran ile operatörün makineyi kolayca kullanabilmesini sağlıyoruz. 4 farklı program opsiyonu, sarımın her aşamasında farklı öngerme ve germe ayarlarının yapılabilmesi, yapılan reçetelerin kaydedilebilmesi ve kısa yol tuşları ile reçetelere kolaylıkla giriş yapılabilmesi öne çıkan özelliklerimizdir. Tüm bunların yanı sıra acil stop düğmesi ve ön güvenlik bariyeriyle çalışanlarınız güvende! Odaksan Mühendislik ile streçleme operasyonunun zorluklarından, yüklerinden kurtulun!</p>
      </div>
    )
}

export const Production = () => {
    return (
      <div className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">Üretimlerimiz</h2>
      <p className="text-justify mt-6 w-full md:w-11/12 lg:w-10/12">Tasarım ve üretim bölümündeki çalışanlarıyla, bilinen en yüksek teknolojiyi kullanarak ve seçerek üretim yapan firmamız kendi bünyesindeki AR–GE departmanı ile özgün tasarımlarını hayata geçirmektedir. Tasarım bizim için bir sistemin nasıl göründüğü değil nasıl çalıştığıdır. Dolayısıyla tasarımlarını bilgisayar destekli programlar (CAD) ile gerçekleştirmektedir. Tasarlanan sistemlerin imalatında da aynı hassasiyeti gösteren firmamız; kendi metal işleme tezgâhları ile malzeme üretimini gerçekleştirmektedir. Firmamız tasarım ve üretimde gösterdiği hassasiyet ve titizliği kendi üretimi olmayan Elektrik, Elektronik ve mekanik malzemelerin seçiminde de göstermektedir. Dünyaca kalitesini ispatlamış 1.sınıf markaları makinelerinde tercih eden firmamız aynı zamanda bünyesinde ayrı bir Elektrik–Elektronik AR – GE departmanı bulundurmaktadır. Tasarım bizim için bir sistemin nasıl göründüğü değil nasıl çalıştığıdır. Dolayısıyla tasarımlarını bilgisayar destekli programlar (CAD) ile gerçekleştirmektedir. Tasarlanan sistemlerin imalatında da aynı hassasiyeti gösteren firmamız; kendi metal işleme tezgâhları ile malzeme üretimini gerçekleştirmektedir. Firmamız tasarım ve üretimde gösterdiği hassasiyet ve titizliği kendi üretimi olmayan Elektrik, Elektronik ve mekanik malzemelerin seçiminde de göstermektedir. Dünyaca kalitesini ispatlamış 1.sınıf markaları makinelerinde tercih eden firmamız aynı zamanda bünyesinde ayrı bir Elektrik–Elektronik AR – GE departmanı bulundurmaktadır.</p>
</div>
    )
}