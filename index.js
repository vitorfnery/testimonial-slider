"use strict";

const testimonials = [
  {
    name: "Glynnis P.",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "Apple is worth much more than I paid. I have gotten at least 50 times the value from apple. Thanks guys, keep up the good work!",
  },
  {
    name: "Denice C.",
    photoUrl:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "You guys rock! Nice work on your apple. I don't know what else to say. Apple is the real deal!",
  },
  {
    name: "Kellyann D.",
    photoUrl:
      "https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "I wish I would have thought of it first. It's just amazing. Apple impressed me on multiple levels. The best on the net!",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

const updateTestimonial = () => {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) idx = 0;
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
};

updateTestimonial();
