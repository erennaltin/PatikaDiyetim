# **Diyetim**

## Customer Needs:
Kullanıcılara yemek alışkanlığı konusunda yardımcı olabilecek bir uygulama yapmak.
Kullanıcı uygulama içerisinde istediği şekilde bir diyet programı oluşturabilmeli ve yemek menüsü oluşturabilmelidir.
Uygulama içerisinde bir yemek hatırlatıcısı oluşturulmalı ve vakit geldiğinde kullanıcıya bildirim gönderilmelidir.
Kullanıcılar dilerse alarmı kaldırabilmeli ve güncelleyebilmelidir. Kullanıcılar diyet raporu alabilmeli ve yemek geçmişini görüntüleyip ağırlıklı olarak neleri tercih ettiği kullanıcıya özet olarak sunulmalıdır.
Kullanıcılar yemek seçimi yaparken besin değeri bilgileri de dahil edilmeli ve rapor alınırken toplam ve ortalama tüketilen besin değerleri de kullanıcıya sunulmalıdır.


## Project Name: **Diyetim**

## Project Content: 

Users should be able to create a diet and configure it according to meals nutritional values and the app should remind meal time by alarm.


## Requirements:
  1. Users can create a diet menu.
  2. Users can see their diet menu.
  1. Users can configure their diet menu.
  2. Users can configure their eating times.
  3. Users can remove the alarm.
  4. Users can update the alarm.
  5. Users can take their diet report.
  6. Users can see their meal history.
  7. Users can see their most selected meals.
  8. Users can see meal's nutritional values.
  9. Users can see total number of nutritional values.
  10. Users can see avarage number of nutritional values.

## Extra Requirements:
  1. The app should remind eating times to users by notifications.

## Actors and Actions:
  1. User
      - Sign up into the system.
      - Login into the system.
      - See meals.
      - See meals nutritional values.
      - See the most selected meals.
      - Create the diet menu.
      - See the diet menu.
      - Update the diet menu.
      - Select meals onto the diet menu.
      - See total number of nutritional values of diet menu.
      - See avarage number of nutritional values of diet menu.
      - Set eating times.
      - Set the alarm.
      - Update the alarm.
      - Take diet report.
      - See diet history.

## Screens:
  1. Login Screen - Signup Screen (Stack Navigation)
  **After Auth: Bottom Bar Navigation**
  1. My Diets Screen - Daily Diet Times Screen. (Top Bar Navigation) 
  2. Discover Meals (Stack Container)
  3. Profile Screen

-----------------------------------------------
- [x] Teknik - Firestore ayarlarını güncelle ve auth check et
- [x] Teknik - Large Meal Container Calory hesabı yanlış.
- [x] Performans iyileştirmeleri - Axios işlemlerini kontrol et
- [-] Performans iyileştirmeleri - Dynamic Import dene
- [] Görsel - Loading ve Error Animasyonları (Lottie)
- [x] Görsel - React native vector icons kullan
- [x] Görsel - Yemek detay sayfasını değiştir
- [x] Görsel - Loading ve Error Animasyonları
- [x] Görsel - Navigation style düzenle
- [x] Görsel - Meal Information sayfasını diet sayfası gibi yap
- [x] UI - Diyet planı eklerken karakter sınırı koy
- [x] UI - Günün Menüsünü rastgele değil güne göre ayarla
----------------------------------------------------------------
1. Auth0 Entegrasyonu
2. React Navigation, Nested Routes, Modal,
2. Redux & Redux Persist
3. Firebase Cloud Firestore NoSQL tecrübesi,
4. Detaylı Rapor,
5. Test yazmak
6. Restyle, Theme
7. API ile çalışmak
8. Native tarafı yönetecek paketler Alarm notifications