<template>

  <div class="h-full w-full p-10 flex flex-col justify-center gap-10">
      <h1 class="text-2xl">Tâches à effectuer</h1>
      <div class="w-auto">
          <div class="btn btn-sm btn-success">Ajouter une tâche</div>

      </div>
      <div class="overflow-x-auto">
          <table class="table">
              <!-- head -->
              <thead>
              <tr>
                  <th>Fait</th>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Importance</th>
                  <th>Supprimer</th>
              </tr>
              </thead>
              <tbody>

              <tr v-for="i in 5" >
                  <th>
                      <label>
                          <input type="checkbox" class="checkbox" />
                      </label>
                  </th>
                  <td>
                      Brancher switch
                  </td>
                  <td>
                      Brancher le nouveau switch sur la baie
                  </td>
                  <td>Moyen</td>
                  <th>
                      <button class="btn btn-xs btn-outline btn-error"><X class="h-5 w-5"/></button>
                  </th>
              </tr>
              <!-- row 1 -->
              <tr>

              </tr>
              </tbody>
              <!-- foot -->
              <tfoot>
              <tr>
                  <th>Fait</th>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Importance</th>
                  <th>Supprimer</th>
              </tr>
              </tfoot>

          </table>
      </div>
  </div>
</template>

<script setup lang="ts">
import {X} from 'lucide-vue-next'

</script>