<template>
  <b-navbar toggleable="md" type="light" sticky>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="item in navItems"
          :key="item.id"
          :to="item.link"
          :active="currentRoute == item.link"
          @click="activeId = item.id"
        >
          {{ item.title }}
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-item v-if="addNewBeer">
          <custom-button :modal-id="'add-beer'" :handler="onClick"
            >Add new beer</custom-button
          >
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import CustomButton from '@/components/common/ui/CustomButton.vue';

export default {
  components: { CustomButton },
  data() {
    return {
      activeId: 0,
      navItems: [
        {
          id: 0,
          title: 'All Beers',
          link: '/all',
        },
        {
          id: 1,
          title: 'My Beers',
          link: '/my-beers',
        },
      ],
    };
  },
  methods: {
    checkActive(id) {
      return this.activeId === id;
    },

    onClick() {
      this.$root.$emit('bv::show::modal', 'add-beer');
    },
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
    addNewBeer() {
      return this.$route.path === '/my-beers';
    },
  },
};
</script>

<style>
.navbar {
  height: 6vh;
  background-color: #fff;
  margin: 0.5em 0;
  padding: 0 0.2em;
}
.navbar-collapse {
  background-color: #fff;
  margin-top: 1em;
  width: 100%;
}
.nav-link {
  font-size: 1.4em;
  color: #aaa;
}
#add-beer-btn {
  margin-left: auto;
}
</style>
