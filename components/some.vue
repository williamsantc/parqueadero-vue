<template>
  <div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Repudiandae quae tenetur {{ foo }} aliquid itaque, ducimus esse,
      eius laudantium neque consequatur sit vitae! {{ bar }} modi
      obcaecati consectetur {{ baz }} culpa fugiat {{ todos.length }}.
    </p>
    <button @click="alterFoo">click me!</button>
  </div>
</template>

<script>
export default {
  name: 'Heeeey',
  data () {
    return {
      foo: 'someting',
      bar: 'in',
      baz: 'the world'
    }
  },
  computed: {
    todos () {
      return [ this.foo, this.bar, this.baz ]
    }
  },
  methods: {
    alterFoo () {
      this.foo = 'yazz!'
    }
  }
}
</script>
