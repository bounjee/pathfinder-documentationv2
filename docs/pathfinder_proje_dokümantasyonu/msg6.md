---
sidebar_position: 7
---

# 6. Nasıl Çalışır
**Kullanıcı Arayüzü ve Etkileşim**
- **Ana Ekran:** Kullanıcı, ana ekranda öncelikle, seyahat etmek istediği şehri ve gideceği tarihleri seçerek sürece başlar. Ardından, sunulan altı ana gezi türünden kendisine en uygun olanları işaretler. Bir sonraki aşamada, yemek tercihlerini ve bu yemeklerin fiyat aralığını—ucuz, orta, pahalı— olarak belirler. Son olarak kullanıcıya kaç gün kalacağı sorulur, oluşturulacak rota kullanıcının belirlediği gün sayısına göre optimize edilerek en ideal gezi planı sunulmuş olur.
- **Sesli Komutlar:** Kullanıcılar, robotla sesli komutlar aracılığıyla etkileşim kurabilir. Örneğin, kullanıcıya, ek taleplerini belirtmek isteyip istemediği de sorulur ve bu talepler, uygulama içindeki mikrofon aracılığıyla sözlü olarak ifade edilebilir.
- **Rota Seçimi:** Kullanıcı, önerilen rotalar arasından seçim yapabilir veya kendi özelleştirilmiş rotasını oluşturabilir.

**Rota Planlama**
- **Yapay Zekâ Desteği:** Uygulamamızın gelişmiş AI Agent'ı, OpenAI’ın GPT API'sini kullanarak kullanıcıdan alınan talepleri ve seçimleri analiz eder. Bu AI Agent, oluşturduğumuz veri setindeki bilgileri filtreleyerek en uygun destinasyonları belirler. Analiz edilen bu veriler, orijinal formuna dönüştürülerek frontend'e iletilir. Pathfinder'ın doğal dil işleme yetenekleri sayesinde, kullanıcının sözlü talepleri yüksek doğruluk oranıyla anlaşılır ve bu bilgiler, kullanıcının tercihlerine entegre edilerek kişiye özel bir rota oluşturulur.
- **Dinamik Güncellemeler:** Kullanıcı tercihlerine göre oluşturulan rota anlık olarak güncellenir.

**Sponsorluk Entegrasyonu**
- **Sponsorlu İçerikler:** Sponsorlu yerel işletmeler veri setine eklenir. Oluşturulan rotada bu işletmeler de yer alır.

**Veri Yönetimi**
- **Veri Toplama:** Kullanıcı seçeneklerinin verileri toplanır ve bu verilerin sahip olduğu etiketler analiz edilir.

**Sistem Bakımı ve Güncellemeler**
- **Otomatik Güncellemeler:** Yazılım ve rota verileri, düzenli olarak otomatik güncellemelerle güncel tutulur.