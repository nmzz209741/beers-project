<template>
  <div class="col-md-12 col-lg-6 col-sm-12">
    <b-card no-body class="overflow-hidden beer-card">
      <b-row no-gutters class="beer-card-row">
        <b-col md="3" class="beer-card-row__image">
          <b-card-img-lazy
            :blank-src="defaultImg"
            blank-height="2px"
            blank-width="2px"
            :src="imageSrc"
            alt="image"
            class="card-img-left rounded-0 beer-image"
            fluid
            v-b-tooltip.hover.top :title="tooltip"
          ></b-card-img-lazy>
        </b-col>
        <b-col md="9" class="beer-card-row__desc">
          <b-card-title class="beer-title">{{ title }}</b-card-title>
          <h6 class="beer-subtitle">{{ subtitle }}</h6>
          <p class="beer-description">
            {{ description }}
          </p>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import def from '@/assets/loading.gif';

export default {
  data() {
    return {
      defaultImg: def,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    tooltip: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.beer-card {
  margin: 0.75em 0;
  border: white;
  height: 15vh;
  border-radius: 0px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

.beer-card:hover {
  background-color: #f2f9fc;
  box-shadow: none;
  cursor: pointer;
}
.beer-card-row {
  height: inherit;
  padding: 0 1em;

  &__image {
    padding: 1em;
    height: inherit;
  }

  &__desc {
  padding: 1em;
  height: inherit;
  color: #252425;
}
}

.beer-image {
  height: -webkit-fill-available;
  object-fit: contain;
}
.beer-title {
  font-size: 20px;
  margin-top: 0.5em;
}
.beer-subtitle {
  margin-top: 1em 0;
  font-size: 12px;
  color: #d4a13c;
}
.beer-description {
  padding: 3px 6px 3px 0px;
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
  text-align: justify;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.b-tooltip {
  width: 10em;
}

@media screen and (max-width: 769px) {
  .beer-card {
    height: auto;
  }
  .beer-image {
    height: 25vh;
  }
}
</style>
