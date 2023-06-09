<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div class="text-light d-flex">
        <h4 class="title-letters p-2 m-2">J</h4>
        <h4 class="title-letters p-2 m-2">O</h4>
        <h4 class="title-letters p-2 m-2">T</h4>
      </div>
      <div class="col-10 p-4">
        <div class="row">
          <div class="col-4">
            <p>note details</p>
          </div>
          <div class="col-8">
            <textarea name="note" id="note" cols="70" rows="10" placeholder="Jot something down..."></textarea>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";

export default {
  setup() {
    function getNotes() {
      try {
        const userId = AppState.account.id
        await
      } catch (error) {
        Pop.error(error.message)
        logger.error(error)
      }
    }
    onMounted(() => {
      getNotes();
    }

    )
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.title-letters {
  border: 3px solid whitesmoke;
  border-radius: 50%;
}
</style>
