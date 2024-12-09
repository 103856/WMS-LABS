<template>
  <CursorCircle>
    <div class="category-filter">
      <div class="left-panel">
        <ul>
          <li v-for="category in categories" :key="category.categoryId"
            :class="{ active: selectedCategory === category.categoryId }" @click="selectCategory(category.categoryId)">
            <span>{{ category.name }}</span>
          </li>
        </ul>
      </div>

      <div class="right-panel">
        <div class="grid">
          <div v-for="item in filteredItems" :key="item.itemId" class="card">
            <Icon :icon="item.icon" width="40" height="40" />
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </CursorCircle>
</template>

<script>
import { Icon } from '@iconify/vue'; 
import CursorCircle from './CursorCircle.vue';
export default {
  name: "CategoryFilter",

  components: {
    Icon,
    CursorCircle
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedCategory: 1,
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory === null) {
        return this.items;
      }
      return this.items.filter(
        (item) => item.categoryId === this.selectedCategory
      );
    },
  },
  methods: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
    },
  },
};
</script>

<style scoped>
.category-filter {
  display: flex;
  gap: 1rem;
  background-color: #1f1f1f;
}

.left-panel {
  --main-color: #f7e479;
  --main-color-opacity: #f7e4791c;
  width: 30%;
  background-color: #212121;
  padding: 10px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 0.5rem;
}

.left-panel ul {
  list-style-type: none;
  padding: 0;

}

.left-panel li {
  margin: 2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 30px;
  box-shadow: 15px 15px 30px rgb(25, 25, 25),
    -15px -15px 30px rgb(60, 60, 60);
  font-size: 18px;
  font-weight: bold;
  font-weight: bolder;
  background: linear-gradient(45deg, #000000 4%, #fff, #000);
  background-clip: text;
  color: transparent;

}

.left-panel li.active {
  background-color: #d4d4d4;
  color: white;
}

.right-panel {
  width: 70%;
  padding: 10px;
}
.right-panel::before,
.right-panel::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 0, 150, 0.5), transparent 70%);
  border-radius: 50%;
  filter: blur(50px);
  z-index: 0; 
}


.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 9px;
  border: solid 1px #202222;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

}

.card:hover {
  transform: translateY(-5px);
}

.card svg {
  font-size: 40px;
  color: #ffffffd3 !important;
  margin-bottom: 10px;

  .path {

    fill: white;
  }
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px;
  font-weight: bolder;
  background: linear-gradient(45deg, #000000 4%, #fff, #000);
  background-clip: text;
  color: transparent;
}

.card-description {
  font-size: 14px;
  color: #666;
}
</style>
