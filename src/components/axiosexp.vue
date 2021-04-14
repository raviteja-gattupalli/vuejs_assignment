<template>
  <div>
    <div v-if="loading === true">
      <h1>Data is loading ....</h1>
    </div>
    <div v-else>
         <v-btn
        class="mx-2"
        fab
        dark
        color="indigo"
        @click="additem"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
      <br><br>
      <div v-for="post in todolist" :key="post.id">
        <v-app id="inspire">
          <v-card class="mx-auto" max-width="344">
            <v-img
              :src="`${post.thumbnailUrl}`"
              alt="image"
              height="200"
            ></v-img>
            <v-card-title>{{ post.title }}</v-card-title>
            <v-btn
              :disabled="loading"
              class="ma-1"
              color="grey"
              plain
              @click="editpost(post.id)"
            >
              EDIT
            </v-btn>
            <v-btn
              :loading="loading"
              class="ma-1"
              color="error"
              plain
              @click="deletepost(post.id)"
            >
              Delete
            </v-btn>
          </v-card>
        </v-app>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'axiosexp',
  data() {
    return {
      loading: false,
      todolist: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.loading = true;
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos',
        );
        this.todolist = response.data;
        this.loading = false;
      } catch (error) {
        window.console.log(error);
        this.loading = false;
      }
    },
    async deletepost(id) {
      try {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
        const response = await axios.delete(url);
        if (response.status === 200) {
          this.loadData();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async editpost(id) {
      try {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
        const response = await axios.get(url);
        const newdata = {
          albumId: response.data.id,
          id: response.data.id,
          title: 'new data appened',
          url: response.data.url,
          thumbnailUrl: response.data.thumbnailUrl,
        };
        const updateresponse = await axios.put(url, newdata);
        if (updateresponse.status === 200) {
          this.loadData();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async additem() {
      const newdata = {
        albumId: 5,
        id: 55001,
        title: 'new data added',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
      };
      const response = await axios.post('https://jsonplaceholder.typicode.com/photos', newdata);
      if (response.status === 201) {
        this.loadData();
      }
    },
  },
};
</script>
