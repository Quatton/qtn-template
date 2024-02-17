<script setup lang="ts">
  const name = ref("client");

  const { data, error, pending, refresh } = await useFetch("/api/example", {
    method: "POST",
    body: {
      name,
    },
  });
</script>

<template>
  <UCard class="prose dark:prose-invert">
    <template #header>
      <span class="flex items-center gap-4">
        <p>This is an example of calling an API endpoint.<br /></p>
        <UButton
          size="sm"
          color="primary"
          square
          icon="i-heroicons-arrow-path"
          variant="ghost"
          :loading="pending"
          class="ml-auto"
          @click="refresh"
        />
      </span>
    </template>

    <UInput v-model="name" placeholder="Your name" />
    <div v-if="error" class="text-red-500">
      {{ error.message }}
    </div>

    <div v-if="data" class="text-green-500">
      {{ data.message }}
    </div>
  </UCard>
</template>
