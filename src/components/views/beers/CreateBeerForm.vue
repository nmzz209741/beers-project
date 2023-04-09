<template>
  <b-modal
    centered
    id="add-beer"
    ref="beer-modal"
    title="Add a New Beer"
    ok-title="Save"
    hide-header-close
    @ok="handleOk"
    @hidden="resetModal"
  >
    <b-form ref="beer-form" @submit.stop.prevent="handleSubmit">
      <div class="container def-image">
        <img
          id="default-beer"
          src="@/assets/beer.png"
          alt="default beer image"
        />
      </div>
      <b-form-group class="form-group">
        <b-form-input
          id="beer-name"
          v-model="form.name"
          type="text"
          placeholder="Beer Name*"
          :state="formValidationState.name.state"
          required
        ></b-form-input>
        <b-form-invalid-feedback v-if="!initial">
          {{ formValidationState.name.message }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="form-group">
        <b-form-input
          id="beer-genre"
          v-model="form.genre"
          type="text"
          placeholder="Genre*"
          :state="formValidationState.genre.state"
          required
        ></b-form-input>
        <b-form-invalid-feedback v-if="!initial">
          {{ formValidationState.genre.message }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="form-group">
        <b-form-textarea
          id="beer-description"
          v-model="form.description"
          placeholder="Description*"
          rows="4"
          :state="formValidationState.description.state"
        ></b-form-textarea>
        <b-form-invalid-feedback v-if="!initial">
          {{ formValidationState.description.message }}
        </b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
const formFields = ['name', 'genre', 'description'];
const defaultForm = {};
formFields.forEach((element) => {
  defaultForm[`${element}`] = null;
});
export default {
  name: 'CreateBeer',
  data() {
    return {
      form: { ...defaultForm },
      initial: true,
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      this.initial = false;
      bvModalEvent.preventDefault();
      this.handleSubmit();
    },

    handleSubmit() {
      if (!this.isFormValid) return;
      const myBeer = { ...this.form };
      this.$emit('add-my-beer', myBeer);
      this.$nextTick(() => {
        this.$bvModal.hide('add-beer');
      });
    },

    resetModal() {
      this.form = { ...defaultForm };
      this.initial = true;
    },
  },

  computed: {
    isFormValid() {
      let valid = true;

      Object.values(this.formValidationState).forEach((validationState) => {
        if (validationState.state === false) {
          valid = false;
        }
      });

      return valid;
    },

    formValidationState() {
      const states = {};
      formFields.forEach((field) => {
        states[`${field}`] = {
          state: null,
          message: null,
        };
        if (!this.form[`${field}`] && !this.initial) {
          states[`${field}`] = {
            state: false,
            message: `Field ${field} cannot be empty.`,
          };
        }
      });

      return states;
    },
  },
};
</script>

<style>
.modal-content {
  border-radius: 4px;
  border: none;
  padding: 1em;
}
.modal-header {
  border: none;
}
.modal-footer {
  border: none;
}
.modal-body {
  padding: 0 1em;
}
.form-group {
  margin-bottom: 0.5em;
}
.form-control {
  border: #ccc 0.5px solid;
  border-radius: 4px;
}
.invalid-feedback {
    margin-top: 0;
    font-size: .65rem;
}
.def-image {
  display: table;
  height: 10vh;
  margin: 0.5em 0;
  padding: 0.5em 2em;
  border: #ccc 0.5px solid;
  width: max-content;
  border-radius: 4px;
}
#default-beer {
  object-fit: contain;
  height: inherit;
}
</style>
