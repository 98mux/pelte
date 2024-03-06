<script>
  let count = $state(1);
  let double = $derived(count * 2);
</script>

<button on:click={() => count++}>
  Count: {count}
</button>
Double is {double}
