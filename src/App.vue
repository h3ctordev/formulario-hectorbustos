<template>
  <div id="app">
    <b-container class="my-5">
      <h2 class="my-5 text-center">Desafio Formulario - Héctor Bustos</h2>
      <v-form :fields="fields" :values="values" @send-form="onSendForm" />
    </b-container>
  </div>
</template>

<script>
import VForm from "@/components/VForm.vue";
export default {
  name: "App",
  components: {
    VForm,
  },
  data() {
    return {
      values: {
        firstname: "",
        lastname: "",
        years: "",
      },
      fields: [
        {
          name: "firstname",
          label: "Nombre",
          required: true,
          minlength: 2,
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Nombre es requerido",
              minlength: "Debe tener al menos 2 (dos) caracteres",
            },
          },
        },
        {
          name: "lastname",
          label: "Apellido",
          required: true,
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Apellido es requerido",
            },
          },
        },
        {
          name: "dob",
          label: "Fecha de Nacimiento",
          required: true,
          type: "date",
          min: new Date(),
          max: new Date("1940-01-01"),
          messages: {
            success: "Correcto!",
            errors: {
              required: "La fecha es requerida",
              max: "La fecha no puede ser mayor a hoy",
              min: "La fecha no puede ser menor a 1940",
            },
          },
        },
      ],
      rows: [],
    };
  },
  methods: {
    onSendForm(value) {
      console.table(value);
      this.rows.push({ ...value });
      this.values = {
        firstname: "",
        lastname: "",
        years: "",
      };
    },
  },
};
</script>
