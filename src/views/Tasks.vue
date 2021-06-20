<template >
  <h3 class="text-white">Всего активных задач: 0</h3>
  <div class="card">
    <h2 class="card-title">
      Название задачи
      <AppStatus :type="'done'" />
    </h2>
    <p>
      <strong>
        <small>
          {{new Date().toLocaleDateString()}}
        </small>
      </strong>
    </p>
    <button class="btn primary" @click="navigate" >Посмотреть</button>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const navigate = () => {
      router.push('/task')
    }

    return {
      navigate
    }
  },
  components: {AppStatus}
}
</script>
