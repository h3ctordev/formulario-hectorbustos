<template>
  <div id="app">
    <b-container class="my-5">
      <h2 class="my-5 text-center">Desafio Formulario - Héctor Bustos</h2>
      <v-form :fields="fields" :values="values" @send-form="onSendForm" />
      <v-data-table :fields="fields" :items="items" />
    </b-container>
  </div>
</template>

<script>
import VForm from "@/components/VForm.vue";
import VDataTable from "@/components/VDataTable.vue";
export default {
  name: "App",
  components: {
    VForm,
    VDataTable,
  },
  data() {
    return {
      items: [],
      values: {
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        password: "",
      },
      fields: [
        {
          key: "firstname",
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
          key: "lastname",
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
          key: "email",
          label: "Email",
          required: true,
          type: "email",
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Mail es requerido",
              email: "El Mail no es valido",
            },
          },
        },
        {
          key: "password",
          label: "Clave",
          required: true,
          type: "password",
          passwd: true,
          messages: {
            success: "Correcto!",
            errors: {
              required: "La clave es requerida",
              passwd:
                "La clave debe teenr almenos 8 caracteres, mayusculas, minusculas y un caracteres especial",
            },
          },
        },
        {
          key: "dob",
          label: "Fecha de Nacimiento",
          required: true,
          type: "date",
          messages: {
            success: "Correcto!",
            errors: {
              required: "La fecha es requerida",
            },
          },
        },
      ],
    };
  },
  methods: {
    onSendForm(value) {
      this.items.push({ ...value });
      console.log(this.items);
      this.values = {
        firstname: "",
        lastname: "",
        years: "",
      };
    },
  },
};
</script>
