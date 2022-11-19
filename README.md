# Ecodation Teknoloji Staj Projesi - To Do List
<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://cdn1.iconfinder.com/data/icons/productivity-aesthetics-vol-2/256/To_Do_List-512.png" width="100" height="100" alt="logo" > 
  <h3 align="center">TODOLIST WEB APP</h3>
  <p align="center">
    Ecodation Teknoloji Staj Projesi 
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## Proje Hakkında

Bu proje Kayıt Ol, Giriş Yap ve Yapılacaklar Listesi olamak üzere 3 sayfadan oluşmaktadır.

![Auth Page](/images/login-register-page.png)


Register sayfası üzerinden kayıt oluşturup. Login sayfası üzerinden giriş yapılabilmektedir. Login sayfasından giriş yapıldıktan sonra yapılacaklar listesi oluşturabileceğimiz Todos sayfasına yönlendirmektedir.

![Todos Page](/images/todos-pages.png)

Todos sayfası Yapılacaklar Listesinin oluşturalacağı sayfadır. Bu sayfada todo ekleme, güncelleme ve silme işlemlerini yapabilirsiniz.

![Notifications](/images/notifications/notifications.png)
Todos sayfasında yapılan ekleme, silme, güncelleme ve todo durumunun değiştiğini bildiren uyarılar bulunmakdır.

![Modals](/images/modal/modals.png)

Todo eklemek istediğimizde "ADD" butonuna tıkladığımızda yukarıdaki Add To Do modal penceresi karşımıza gelmektedir. Olan todo'lardan birini güncellemek istediğimizde güncelleme iconuna tıkladığımızda Update To Do modal penceresi ve tıkladığımız todo bilgileri ekrana 
yazılı şekilde gelmektedir ve üzerinde değişiklik yapılabilmektedir. Silme işlemini yapmak istediğimizde çöp kovası iconuna tıkladığımızda bir uyarı modal penceresi gelmektedir. Bu modalı onayladıktan sonra todo silinmektedir.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Kullanılan Teknolojiler

Bu projenin Frontend'inde React ve Bootstrap kullanılmıştır. Backend'inde Java Spring kullanılmıştır.
Database işlemleri için H2-Database ve PostgreSQL kullanılmıştır.

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Java][Java]][Java-url]
* [![Java Spring][Java-Spring]][Java-Spring-url]
* [![PostgreSql][PostgreSql]][PostgreSql-url]
* [![MySql][MySql]][MySql-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Başlangıç

Projeyi bilgisayarınıza kurup çalıştırabilmek için aşağıdaki adımları takip ediniz.

### KURULUM

_Projeyi Çalıştırabilmek için aşağıdaki adımları takip ediniz._

1. Proje Reposunu Klonlayın
   ```sh
   git clone https://github.com/umutcangider/EcodationInternshipProject-ToDoList.git
   ```
2. NPM Paketlerini Yükleyin
   ```sh
   npm install
   ```
3. Java Spring Backend Projesini başlatın.

4. React Frontend Projesini başlatın.
   ```sh
   npm start
   ```

### DATABASE

 _Projedeki Hangi Database'yi kullanmak istiyorsanız application.properties dosyasından aşağıdaki adımları takip ederek ilgili alanı aktif ediniz._

 1. PostgreSQL için 
   ```sh
   spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true
   spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect
   spring.datasource.url=jdbc:postgresql://localhost:5432/todolist_database
   spring.datasource.username=postgres
   spring.datasource.password=root
   ```

 2. MySQL için 
   ```sh
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect
   spring.datasource.url=jdbc:mysql://localhost:3306/todolist_database?createDatabaseIfNotExist=true&autoReconnect=true&useSSL=false
   spring.datasource.username=root
   spring.datasource.password=root
   ```   

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Umutcan Gider - [Linkedin](https://www.linkedin.com/in/umutcan-gider/) - umtcngdr@gmail.com

Project Link: [https://github.com/umutcangider/EcodationInternshipProject-ToDoList](https://github.com/umutcangider/EcodationInternshipProject-ToDoList)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [React](https://reactjs.org/)
* [React Router Dom](https://reactrouter.com/)
* [Lottie Files](https://lottiefiles.com/)
* [React - Bootstrap](https://react-bootstrap.github.io/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Java]: https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white
[Java-url]: https://www.java.com/tr/
[Java-Spring]: https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[Java-Spring-url]: https://spring.io/
[PostgreSql]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSql-url]: https://www.postgresql.org/
[MySql]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[MySql-url]: https://www.mysql.com/