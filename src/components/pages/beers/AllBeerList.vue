<template>
  <div class="all-beers container">
    <card-list-layout class="all-beers-list">
      <template v-slot:default>
        <beer-item-card
          class="all-beers-list__item"
          v-for="beer in beers"
          :key="beer.id"
          :title="beer.name"
          :subtitle="beer.tagline"
          :description="beer.description"
          :imageSrc="beer.image_url"
          :tooltip="getIngredient(beer.id)"
        >
        </beer-item-card>
        <loading-spinner :state="loading"></loading-spinner>
        <custom-button :handler="loadMore" type="transparent"
          >Load More</custom-button
        >
      </template>
    </card-list-layout>
  </div>
</template>

<script>
import BeerApi from '@/api/beers';
import BeerConstant from '@/constants/beers';

import CardListLayout from '@/components/common/layouts/CardListLayout.vue';

import CustomButton from '@/components/common/ui/CustomButton.vue';
import LoadingSpinner from '@/components/common/ui/LoadingSpinner.vue';
import BeerItemCard from '@/components/views/beers/BeerItemCard.vue';

export default {
  name: 'BeerList',
  components: {
    CardListLayout,
    BeerItemCard,
    CustomButton,
    LoadingSpinner,
  },
  data() {
    return {
      page: 1,
      limit: BeerConstant.PAGINATION_LIMIT,
      beers: [],
      loading: false,
    };
  },
  async mounted() {
    this.beers = await this.loadBeers();
  },
  methods: {
    async loadBeers() {
      this.loading = true;
      const fetchData = await BeerApi.getAllBeers(this.page, this.limit);
      this.loading = false;
      return fetchData;
    },

    async loadMore() {
      this.page += 1;
      const moreData = await this.loadBeers();
      this.beers.push(...moreData);
    },

    getIngredient(id) {
      const beer = this.beers.find((b) => b.id === id);
      return `Ingredients: ${Object.keys(beer.ingredients).join(', ')}`;
    },
  },
};
</script>

<style>
.all-beers {
  height: inherit;
  display: flex;
}
</style>
