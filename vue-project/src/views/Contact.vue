<script>
import {useToast} from 'vue-toast-notification';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      v$: useVuelidate(),
      email_address: '',
      name: '',
      questions: '',
    };
  },
  mounted() {
    const toast = useToast();
    toast.success('Email Submitted!', 
    {
      position: 'bottom-right',
      duration: '3000',
      pauseOnHover: true,
    });
  },
  validations() {
    const validations = {
      email_address: {
        required,
      },
      name: {
        required,
      },
      questions: {
        required,
      },
    };
    return validations;
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_8jd5fzi', 'template_6bznafq', e.target,
        'SkCx9ndyvfgQcWIp0')
      } catch (error) {
        throw(e);
      }
    },
  }
};
</script>

<template>
  <form class="container my-3" @submit.prevent="sendEmail">
    <div class="form-floating mb-3">
      <input
        v-model="email_address"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': v$.email_address.$error }"
        placeholder="Email Address"
        aria-label="Email Address"
      >
      <label>Your Email Address</label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="name"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': v$.name.$error }"
        placeholder="Name"
        aria-label="Name"
      >
      <label>Name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="questions"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': v$.questions.$error }"
        placeholder="Questions or Concerns"
        aria-label="Questions or Concerns"
      >
      <label>Questions/Concerns</label>
    </div>
    <div class="mw-480 mx-auto">
      <button
        type="submit"
        class="btn btn-primary"
      >
        Send
      </button>
    </div>
  </form>
</template>

<style scoped>
* {box-sizing: border-box;}
label {
  float: left;
}
input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #b8c7b9;
}
.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
</style>