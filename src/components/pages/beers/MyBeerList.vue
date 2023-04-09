<template>
  <div class="my-beers container">
    <create-beer-form @add-my-beer="pushToMyBeers"></create-beer-form>
    <card-list-layout class="all-beers-list" v-if="myBeers.length">
      <template v-slot:default>
        <beer-item-card
          class="all-beers-list__item"
          v-for="(beer, id) in myBeers"
          :key="id"
          :title="beer.name"
          :subtitle="beer.genre"
          :description="beer.description"
          :imageSrc="customImg"
        ></beer-item-card>
      </template>
    </card-list-layout>
    <blank-layout v-else>
      <template v-slot:default>
        <b-container class="my-beers-list--empty">
          <p>Nothing to see yet.</p>
          <p>
            <a id="add-beer-link" v-b-modal.add-beer>Click here</a> to add your
            first beer!
          </p>
        </b-container>
      </template>
    </blank-layout>
  </div>
</template>

<script>
import BlankLayout from '@/components/common/layouts/BlankLayout.vue';
import CardListLayout from '@/components/common/layouts/CardListLayout.vue';
import img from '@/assets/beer.png';
import CreateBeerForm from '@/components/views/beers/CreateBeerForm.vue';
import BeerItemCard from '@/components/views/beers/BeerItemCard.vue';
import { db } from '@/service/db';
import { ref, onMounted, watch } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { liveQuery } from 'dexie';

export default {
  name: 'MyBeer',
  components: {
    CreateBeerForm,
    BlankLayout,
    CardListLayout,
    BeerItemCard,
  },
  data() {
    return {
      customImg: img,
    };
  },
  setup() {
    const myBeers = ref([]);

    onMounted(async () => {
      try {
        // Open the database connection
        await db.open();

        // Retrieve the list of my beers from the database
        myBeers.value = await db.myBeers.toArray();

        // Watch for changes to the list of my beers and persist them to the database
        watch(myBeers, async (newBeers) => {
          await db.myBeers.bulkPut(newBeers);
        }, { deep: true });

        // Update the list of my beers in real-time
        liveQuery(() => db.myBeers.toArray()).subscribe((newBeers) => {
          myBeers.value = newBeers;
        });
      } catch (error) {
        throw new Error(error);
      }
    });
    return {
      myBeers,
    };
  },
  methods: {
    pushToMyBeers(formData) {
      this.myBeers.push({ ...formData });
    },
  },
};
</script>

<style>
.my-beers {
  height: inherit;
}
#add-beer-link {
  color: #023f80;
}
</style>
<style>
.my-beers {
  height: inherit;
}
#add-beer-link {
  color: #023f80;
}
</style>
