<template>
  <v-dialog v-model="modalFreezeAccount" content-class="modal-freeze-account divcol relative isolate">
    <aside class="space">
      <span style="--fw: 700" class="h9_em">Congelar Cuenta</span>
      
      <v-btn icon @click="modalFreezeAccount = false">
        <v-icon size="1.5em">mdi-close</v-icon>
      </v-btn>
    </aside>

    <v-sheet class="divcol" color="transparent" style="gap: 1em">
      <p style="--fw: 200">¿ Está seguro que desea congelar su cuenta ?</p>
      
      <div class="spacee" style="gap: 1em">
        <v-btn class="btn" style="--bg: var(--success)" @click="freezeAccount()">
          <v-icon>mdi-check</v-icon>
        </v-btn>
        
        <v-btn class="btn" style="--bg: var(--error)" @click="modalFreezeAccount = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "FreezeAccountModal",
  mixins: [computeds],
  data() {
    return {
      modalFreezeAccount: false,
    };
  },
  mounted() {
  },
  methods: {
    freezeAccount() {
      this.modalFreezeAccount = false
      this.$parent.loadingBtnFreezeAccount = true

      // freeze account endpoint
      this.$axios.post(`${this.baseDomainUrl}/configuracion/bloquearCuenta`, {"userId": this.uid}) // error <---------------- 👈
      .then(result => {
        console.info("<<--freeze account-->>", result.data) // console
        this.$parent.loadingBtnFreezeAccount = false
        
        this.$alert("success", {desc: "su cuenta ha sido congelada"})
        this.$router.go()
      }).catch(err => {
        console.error(err)
        this.$parent.loadingBtnFreezeAccount = false
        this.$alert("cancel", {desc: err.message})
      })
    },
  }
};
</script>

<style lang="scss">
.modal-freeze-account {
  @include card;
  --min-w: 330px;
  --w: max-content;
  --br: 30px;
  --bg: var(--accent);
  --p: 30px;
  --tt: capitalize;
  gap: 20px;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background-clip: content-box, border-box;
    background-image: linear-gradient(var(--bg),var(--bg)),
      linear-gradient(135deg, rgba($primary,.2), rgba($secondary,.2));
    z-index: -1;
  }

  i:not(.v-sheet i) {color: hsl(225 225% 225% / .5) !important}

  .v-sheet {
    .btn {
      --p: 5px 20px;
      // i {--c: #000}
    }
  }
}
</style>
