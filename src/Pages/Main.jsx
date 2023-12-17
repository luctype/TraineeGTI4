import "../Styles/Main.css";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Coments from "../Components/Coments";
import { Chart } from "react-google-charts";
import { useState } from "react";

register();
function Main() {
  return (
    <div className="corpo">
      <Swiper
        className="slide"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide className="item">
          <img src="https://picsum.photos/1920/600?random=1" alt="foto1" />
          <div className="centralizar">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              neque ratione quas delectus sequi!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src="https://picsum.photos/1920/600?random=2" alt="foto2" />
          <div className="centralizar">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              neque ratione quas delectus sequi!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src="https://picsum.photos/1920/600?random=3" alt="foto3" />
          <div className="centralizar">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              neque ratione quas delectus sequi!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src="https://picsum.photos/1920/600?random=4" alt="foto4" />
          <div className="centralizar">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              neque ratione quas delectus sequi!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="titulo">
        <h1>Bem vindo a nossa empresa</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut
          repellendus accusantium voluptas aspernatur fugit tenetur mollitia
          similique commodi maxime officia nemo aut cum, temporibus asperiores
          officiis saepe sit consequatur. Distinctio, sint quidem qui error ab
          consequatur tenetur dicta saepe architecto voluptatibus quod nostrum
          veniam fugit nam atque in repellat quasi laborum libero cumque
          cupiditate! Quasi est rem porro accusamus! Eos iusto aspernatur error
          deserunt laboriosam, ratione reprehenderit blanditiis velit maiores
          officiis non tenetur ut aperiam consequatur alias provident nulla
          eveniet quae necessitatibus est aut ipsa. Saepe nam cupiditate labore!
          Quia aliquam temporibus perferendis saepe quos nihil necessitatibus
          beatae atque, architecto tenetur repellat magnam natus velit eveniet
          maiores voluptate quibusdam incidunt? Doloribus commodi vitae qui,
          saepe obcaecati laborum quisquam corrupti. Quaerat expedita at
          necessitatibus similique impedit! Sequi illum corporis aperiam nemo!
          Iusto, eveniet sunt ut tenetur voluptates aliquam cum. Iste voluptates
          beatae voluptatibus magni quas. Eligendi porro sunt repellat sed.
          Quasi amet animi, nisi impedit modi praesentium asperiores
          perspiciatis! Quod eligendi veniam dolor earum iusto placeat corporis
          commodi quam, numquam id. At odio libero quae sapiente mollitia
          deserunt porro autem. Quis, porro natus! Ea iste quo voluptatibus eos,
          odit ratione ipsam doloremque. Repellendus suscipit tempora minus
          accusamus omnis, blanditiis fugiat, dignissimos labore exercitationem
          facilis mollitia magni voluptatum quos a eos. Neque necessitatibus
          voluptatum quia ducimus voluptate suscipit, ab reiciendis, iure fugit
          sunt, voluptatibus ratione est aperiam ea laboriosam. Numquam, neque
          corrupti quisquam placeat ratione fugit adipisci ut perspiciatis ipsa
          fuga! Enim, inventore, repellendus incidunt sed fuga eum, quisquam
          nihil maxime esse at nulla tempora magnam ducimus eveniet voluptatibus
          illo? Sit voluptatibus vitae illo deserunt neque officia quae eveniet.
          Vel, ducimus? Dolorem itaque suscipit quia animi eius minus labore
          nam. Culpa cumque omnis doloribus alias nihil sunt mollitia? Eos,
          doloremque. Pariatur, esse ut odit consectetur iure praesentium in a
          minus incidunt?
        </p>
      </div>
      <div className="centralizar">
        <Coments />
      </div>
    </div>
  );
}
export default Main;
