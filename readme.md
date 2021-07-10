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
  2. The app should remind eating times by setting alarms.

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
      - Take their diet report.
      - See their diet history.

## Screens:
  1. Login Screen - Signup Screen (Stack Navigation)
  **After Auth: Bottom Bar Navigation**
  1. My Diets Screen - Daily Diet Times Screen. (Top Bar Navigation) 
  2. Discover Meals (Stack Container)
  3. Profile Screen


## Step by Step Presentation:
  ### 1. Sign up into the system.
  
  #### Positive Case
  1. User comes to the sign up screen.
  2. User fills in the mail input.
  3. Mail is checked.
  4. User fills in the password input.
  5. Password is checked.
  6. User fills in the re-password input.
  7. Password again is checked.
  8. User presses the sign up button.
  9. Credentials is sent to the system.
  10. System returns OK.
  11. User is directed to the login screen.

  #### Negative Case #1
   2. User fills in the mail input.
   3. Mail is checked.
   4. Mail is not valid.
   5. Show an error message below the mail input.

  #### Negative Case #2
  4. User fills in the password input.
  5. Password is checked.
  6. Password is not valid.
  7. Show an error message below the password input.

  #### Negative Case #3
  6. User fills in the re-password input.
  7. Password again is checked.
  8. Password and password again are not matched.
  9. Show an error message below the re-password input.

  #### Negative Case #4
  10. System returns ERROR.
  11. Show an error message below the sign up button.


  ### 2. Login into the system.
  
  #### Positive Case
  1. User comes to the sign up screen.
  2. User fills in the mail input.
  3. Mail is checked.
  4. User fills in the password input.
  5. Password is checked.
  6. User presses the login button.
  7. Credentials is sent to the system.
  8. System returns OK.
  9. User is directed to the home page.

 #### Negative Case #1
   2. User fills in the mail input.
   3. Mail is checked.
   4. Mail is not valid.
   5. Show an error message below the mail input.

#### Negative Case #2
  4. User fills in the password input.
  5. Password is checked.
  6. Password is not valid.
  7. Show an error message below the password input.

 #### Negative Case #3
  8. System returns ERROR.
  9. Show an error message below the sign up button.


  ### 3. See Meals && See meals nutritional values && See the most selected meals.

  #### Positive Case
  1. Set the loading state.
  2. Set the mealData state.
  3. Fetch meal history information about user from the system.
  4. System returns OK.
  5. Fetch meal informations from the server.
  6. Server returns OK.
  7. Set informations as mealData state.
  8. set loading state false.

  #### Negative Case #1
  3. Fetch meal history information about user from the system.
  4. System returns ERROR.
  5. Show an error and wait for the refresh command.

  #### Negative Case #2
  5. Fetch meal informations from the server.
  6. Server returns ERROR.
  5. Show an error and wait for the refresh command.


  ### 4. Create the diet menu && see the diet menu.

  #### Positive Case 
  1. User presses the add diet menu button.



  ### 4. Select meals onto the diet menu.

  #### Positive Case 
  1. User presses the add button on the meal container.
  2. User chooses the diet menu.
     or
  2. User create a new diet menu.
  3. The meal code added to the diet menu.








-----------------------------------------------
- [] Teknik - Firebase - Auth0 entegrasyonu
- [] Teknik - Firestore ayarlarını güncelle ve auth check et
- [] Performans iyileştirmeleri - Axios işlemlerini kontrol et
- [] Performans iyileştirmeleri - Dynamic Import dene
- [] Görsel - Loading ve Error Animasyonları (Lottie)
- [x] Görsel - React native vector icons kullan
- [] Görsel - Loading ve Error Animasyonları
- [] UI - Hızlı giriş için Logout yaparken access tokenı saklama seçeneği ekle
----------------------------------------------------------------
1. Auth0 Entegrasyonu
2. React Navigation, Nested Routes, Modal,
3. Firebase Cloud Firestore NoSQL tecrübesi,
4. Detaylı Rapor,
5. Test yazmak