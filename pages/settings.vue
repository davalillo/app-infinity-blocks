<template>
  <v-main id="settings">
    <div id="settings-content" class="divcol center relative" style="gap: .8em">
      <div id="settings-content--button-back" class="center">
        <v-btn
          id="go-back"
          class="btn"
          style="--min-w: max-content; --p: .2em; --br: 50%"
          @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        
        <label for="go-back" class="hspan" style="--fw: 500">Volver</label>
      </div>

      <h2 class="p">CONFIGURACIÓN</h2>
      
      <v-card id="settings--header" class="card divcol center">
        <h3 class="p">USUARIO</h3>
        
        <v-file-input
          id="avatar-preview"
          v-model="avatarModel"
          style="display: none"
          @change="avatarPreview()"
        ></v-file-input>
        <v-badge avatar offset-x="40px" offset-y="60px">
          <img
            :src="avatarImg ? avatarImg : require('~/assets/sources/images/avatar-profile.png')" alt="avatar" class="aspect my-2"
            style="--w: 16em; border-radius: 50% !important; --p: 1px; --b: 0.25em solid #fff; --of: cover"
          >
          <template #badge>
            <v-btn icon>
              <label for="avatar-preview">
                <img src="~/assets/sources/icons/edit.svg" alt="edit avatar" style="--w: clamp(2em, 5vw, 2.7em)">
              </label>
            </v-btn>
          </template>
        </v-badge>
        
        <h3 class="p mb-1" style="--fw: 400">pedroperez01</h3>
        <span class="hspan" style="opacity: .6; --fs: max(15px, 1.2em)">pedroperez@gmail.com</span>
      </v-card>


      <h3 class="p">INFORMACIÓN PERSONAL</h3>
      
      <v-card class="card divcol" style="gap: 5px">
        <div class="divcol" style="gap: inherit">
          <label for="names-profile">Nombres</label>
          <v-text-field
            v-if="!existDataUser"
            id="names-profile"
            v-model="formProfile.names"
            placeholder="Nombres"
            solo hide-details
          ></v-text-field>
          
          <span v-else class="hspan mb-2" style="--fs: max(16px, 1.3em); opacity: .6">Pedro Jose</span>
        </div>
        
        <div class="divcol" style="gap: inherit">
          <label for="surnames-profile">Apellidos</label>
          <v-text-field
            v-if="!existDataUser"
            id="surnames-profile"
            v-model="formProfile.surnames"
            placeholder="Apellidos"
            solo hide-details
          ></v-text-field>
          
          <span v-else class="hspan mb-2" style="--fs: max(16px, 1.3em); opacity: .6">Perez Gonzalez</span>
        </div>
        
        <div class="divcol" style="gap: inherit">
          <label for="birthday-profile">Fecha De Nacimiento</label>
          <div v-if="!existDataUser" id="container-birthday" class="fnowrap" style="gap: 10px">
            <v-menu v-model="menuDay" bottom>
              <template #activator="{ on, attrs }">
                <v-text-field
                  :id="!birthday_day && !birthday_month && !birthday_year ? 'birthday-profile' : ''"
                  ref="birthday_day"
                  v-model="onlyDay"
                  placeholder="Día"
                  type="number"
                  solo hide-details
                  hide-spin-buttons
                  readonly
                  class="surnames"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              
              <v-date-picker
                v-model="birthday_day"
                type="date"
                class="headerless"
                color="var(--secondary)"
                event-color="var(--secondary)"
                @change="menuDay = false"
              ></v-date-picker>
            </v-menu>

            <v-menu v-model="menuMonth" bottom>
              <template #activator="{ on, attrs}">
                <v-text-field
                  :id="birthday_day && !birthday_month && !birthday_year ? 'birthday-profile' : ''"
                  ref="birthday_month"
                  v-model="onlyMonth"
                  placeholder="Mes"
                  type="number"
                  solo hide-details
                  hide-spin-buttons
                  readonly
                  class="surnames"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              
              <v-date-picker
                v-model="birthday_month"
                type="month"
                class="headerless"
                @change="menuMonth = false"
              ></v-date-picker>
            </v-menu>

            <v-menu ref="menuYear" v-model="menuYear" bottom>
              <template #activator="{ on, attrs }">
                <v-text-field
                  :id="birthday_day && birthday_month && !birthday_year ? 'birthday-profile' : ''"
                  ref="birthday_year"
                  v-model="onlyYear"
                  placeholder="Año"
                  type="number"
                  solo hide-details
                  hide-spin-buttons
                  readonly
                  class="surnames"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              
              <v-date-picker
                ref="yearPicker"
                v-model="birthday_year"
                class="headerless"
                no-title
                scrollable
                reactive
                @click:year="updateYear(birthday_year)"
              ></v-date-picker>
            </v-menu>
          </div>
          
          <span v-else class="hspan mb-2" style="--fs: max(16px, 1.3em); opacity: .6">04/12/1992</span>
        </div>
        
        <div class="divcol" style="gap: inherit">
          <label for="nationality-profile">Nacionalidad</label>
          <v-select
            v-if="!existDataUser"
            id="nationality-profile"
            v-model="formProfile.nationality"
            :items="countryList"
            item-text="name"
            placeholder="Selecciona el país"
            append-icon="mdi-chevron-down"
            solo hide-details
          >
            <template #selection="{ item }">
              <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
              <span style="--fw: 100">{{item.name}}</span>
            </template>
            
            <template #item="{ item }">
              <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
              <span class="not_clr" style="--fw: 100">{{item.name}}</span>
            </template>
          </v-select>
          
          <span v-else class="hspan mb-2" style="--fs: max(16px, 1.3em); opacity: .6">Ecuatoriana</span>
        </div>
        
        <div class="divcol" style="gap: inherit">
          <label for="residence-profile">País De Residencia</label>
          <v-select
            id="residence-profile"
            v-model="formProfile.residence"
            :items="countryList"
            item-text="name"
            placeholder="Selecciona el país"
            append-icon="mdi-chevron-down"
            solo hide-details
          >
            <template #selection="{ item }">
              <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
              <span style="--fw: 100">{{item.name}}</span>
            </template>
            
            <template #item="{ item }">
              <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
              <span class="not_clr" style="--fw: 100">{{item.name}}</span>
            </template>
          </v-select>
        </div>
        
        <div class="divcol" style="gap: inherit">
          <label for="phone-profile">Número de Teléfono</label>
          <v-text-field
            id="phone-profile"
            v-model="formProfile.phone"
            type="number"
            placeholder="Ingresar teléfono"
            hide-spin-buttons
            solo hide-details
          >
            <template #prepend>
              <v-select
                v-model="formProfile.phonePrefix"
                :items="countryList"
                item-text="number"
                solo hide-details
                menu-props="auto"
                append-icon="mdi-chevron-down"
              >
                <template #selection="{ item }">
                  <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
                  <span style="--fw: 100">{{item.number}}</span>
                </template>
                
                <template #item="{ item }">
                  <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
                  <span class="not_clr" style="--fw: 100">{{item.number}}</span>
                </template>
              </v-select>
            </template>
          </v-text-field>
        </div>
        
        <v-btn class="btn align mt-5">
          Guardar
        </v-btn>
      </v-card>


      <h3 class="p">VERIFICACIÓN DE CUENTA</h3>
      
      <v-card class="card divcol center tcenter" style="gap: 8px">
        <img :src="require(`~/assets/sources/icons/${verified ? 'success' : 'cancel'}.svg`)" alt="verify stat icon" style="--w: 6em">
        
        <h3 class="p" style="--fs: max(16px, 1.4em)">CUENTA {{verified ? '' : 'NO'}} VERIFICADA</h3>
        
        <v-btn
          v-if="!verified" class="btn" style="--p: .3em .5em"
          @click="$router.push(localePath('/verification'))"
        >Solicitar Verificación</v-btn>
        <span v-else style="opacity: .7; word-break: break-all">0x5d2D75ED51D4A3B275f00F86632543f4010E9232</span>
      </v-card>


      <div id="beneficiaries">
        <h3 class="p" style="gap: 5px">BENEFICIARIOS
          <span>(Hasta 3 personas)</span>
        </h3>
      </div>
      
      <v-card class="card divcol center" style="--gap: 1.25em; gap: var(--gap)">
        <div class="divcol fill_w" style="gap: 1em">
          <v-card
            v-for="(item, i) in dataBeneficiaries" :key="i"
            class="card divcol" style="--bg: var(--primary); --p: .8em 1em .8em 1.6em"
          >
            <div class="space" style="gap: inherit">
              <h3 class="p tcap" style="text-align: start">{{item.fullname}}</h3>
              
              <v-btn icon small @click="editBeneficiary()">
                <img src="~/assets/sources/icons/edit-outline.svg" alt="edit icon" style="--w: 1.5em">
              </v-btn>
            </div>
            <div class="space" style="gap: inherit">
              <span class="hspan tcap" style="--fs: max(16px, 1.3em); opacity: .7">
                {{item.relationship}} - {{item.profitPercentage}}
              </span>
              
              <v-btn icon small class="relative" style="bottom: -5px" @click="deleteBeneficiary()">
                <img src="~/assets/sources/icons/delete-outline.svg" alt="edit icon" style="--w: 1.3em">
              </v-btn>
            </div>
          </v-card>
        </div>

        <v-btn
          v-if="!addBeneficiariesState"
          class="btn" style="--bg: var(--primary)"
          @click="addBeneficiariesState = true"
        >
          Agregar
        </v-btn>

        <v-form
          v-else ref="formBeneficiaries" class="fill_w anchorlineb divcol"
          style="--b: auto; --w-line: 55%; --h-line: 2.5px; --bg-line: #ffF; padding-top: var(--gap); gap: inherit"
          @submit.prevent="saveBeneficiary()">
          <div class="divcol" style="gap: calc(var(--gap) / 3)">
            <label for="fullname-beneficiary">Nombre Completo</label>
            <v-text-field
              id="fullname-beneficiary"
              v-model="formBeneficiaries.fullname"
              placeholder="Ingresar el nombre"
              solo hide-details
              :rules="rules.required"
            ></v-text-field>
          </div>
          
          <div class="divcol" style="gap: calc(var(--gap) / 3)">
            <label for="phone-beneficiary">Número de Teléfono</label>
            <v-text-field
              id="phone-beneficiary"
              v-model="formBeneficiaries.phone"
              type="number"
              placeholder="Ingresar teléfono"
              hide-spin-buttons
              solo hide-details
              :rules="rules.required"
            >
              <template #prepend>
                <v-select
                  v-model="formBeneficiaries.phonePrefix"
                  :items="countryList"
                  item-text="number"
                  solo hide-details
                  menu-props="auto"
                  append-icon="mdi-chevron-down"
                >
                  <template #selection="{ item }">
                    <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
                    <span style="--fw: 100">{{item.number}}</span>
                  </template>
                  
                  <template #item="{ item }">
                    <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
                    <span class="not_clr" style="--fw: 100">{{item.number}}</span>
                  </template>
                </v-select>
              </template>
            </v-text-field>
          </div>
          
          <div class="divcol" style="gap: calc(var(--gap) / 3)">
            <label for="email-beneficiary">Correo Electrónico</label>
            <v-text-field
              id="email-beneficiary"
              v-model="formBeneficiaries.email"
              placeholder="Ingresar correo"
              solo hide-details
              :rules="rules.email"
            ></v-text-field>
          </div>
          
          <div class="divcol" style="gap: calc(var(--gap) / 3)">
            <label for="relationship-beneficiary">Parentesco</label>
            <v-select
              id="relationship-beneficiary"
              v-model="formBeneficiaries.relationship"
              :items="dataRelationship"
              placeholder="Ingresar Parentesco"
              solo hide-details
              :rules="rules.required"
            ></v-select>
          </div>
          
          <div class="divcol" style="gap: calc(var(--gap) / 3)">
            <label for="relationship-beneficiary">Porcentaje a Beneficio</label>
            <v-select
              id="relationship-beneficiary"
              v-model="formBeneficiaries.profitPercentage"
              placeholder="Seleccionar %"
              append-icon="mdi-chevron-down"
              :items="profitPercentages"
              solo hide-details
              :rules="rules.required"
              style="--w: min(100%, 9em); --h: 30px"
            ></v-select>
          </div>
          
          <div class="center align" style="gap: 10px">
            <v-btn class="btn" @click="saveBeneficiary()">
              Guardar
            </v-btn>
            
            <v-btn class="btn" style="--bg: var(--secondary)" @click="cancelBeneficiary()">
              Cancelar
            </v-btn>
          </div>
        </v-form>
      </v-card>


      <div id="security" style="width: min(100%, 30em)" class="center">
        <h3 class="p" style="padding-left: 1ch; text-align: start">SEGURIDAD</h3>
      </div>
      
      <v-card class="card divcol center" style="gap: 12px">
        <v-btn class="btn" style="--bg: var(--primary); --w: min(100%, 13em); --fw: 800">
          Cambiar Contraseña
        </v-btn>
        
        <v-btn class="btn" style="--bg: var(--primary); --w: min(100%, 13em); --fw: 800">
          Congelar mi cuenta
        </v-btn>
      </v-card>
    </div>
  </v-main>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "SettingsPage",
  mixins: [computeds],
  layout: "empty-layout",
  data() {
    return {
      existDataUser: false,
      verified: false,
      // for test <---------------
      
      avatarModel: undefined,
      avatarImg: undefined,
      birthday_day: undefined,
      birthday_month: undefined,
      birthday_year: undefined,
      formProfile: {
        names: undefined,
        surnames: undefined,
        birthday: undefined,
        nationality: undefined,
        residence: undefined,
        phonePrefix: "+593",
        phone: undefined,
      },
      countryList: [
        {
          icon: require("~/assets/sources/images/spain-flag.jpg"),
          number: "+593",
          name: "ecuador",
        },
        {
          icon: require("~/assets/sources/images/usa-flag.jpg"),
          number: "+2134",
          name: "estados unidos",
        },
        {
          icon: require("~/assets/sources/images/spain-flag.jpg"),
          number: "+58",
          name: "venezuela",
        },
      ],
      addBeneficiariesState: false,
      formBeneficiaries: {
        fullname: undefined,
        phonePrefix: "+593",
        phone: undefined,
        email: undefined,
        relationship: undefined,
        profitPercentage: undefined,
      },
      profitPercentages: ["10%", "20%", "30%"],
      dataBeneficiaries: [
        {
          fullname: "juan perez sosa",
          relationship: "padre",
          profitPercentage: "40%",
        },
        {
          fullname: "maría rico andrade",
          relationship: "madre",
          profitPercentage: "40%",
        },
      ],
      dataRelationship: [
        "padre/madre", "hermano/a", "hijo/a", "sobrino/a", "abuelo/a", "otro"
      ],
      menuDay: false,
      menuMonth: false,
      menuYear: false,
    }
  },
  head() {
    const title = 'Configuración';
    return {
      title,
    }
  },
  computed: {
    onlyDay() {
      return this.birthday_day?.split("-")[2] || undefined
    },
    onlyMonth() {
      return this.birthday_month?.split("-")[1] || undefined
    },
    onlyYear() {
      return this.birthday_year?.split("-")[0] || undefined
    },
    fullBirthday() {
      return `${this.onlyDay}-${this.onlyMonth}-${this.onlyYear}`
    },
  },
  watch: {
    menuYear(val) {
      setTimeout(() => {
        if (val) this.updateYear()
      }, 0);
    },
  },
  mounted() {
  },
  methods: {
    avatarPreview() {
      if (this.avatarModel) this.avatarImg = URL.createObjectURL(this.avatarModel)
    },
    birthdaySelection(day, month, year) {
      return 2
    },
    saveBeneficiary() {
      if (!this.$refs.formBeneficiaries.validate()) return alert("need fill all fields");
      this.addBeneficiariesState = false
    },
    editBeneficiary() {
      console.log("edit")
    },
    deleteBeneficiary() {
      console.log("delete")
    },
    cancelBeneficiary() {
      this.addBeneficiariesState = false
      Object.keys(this.formBeneficiaries).forEach(e => {
        this.formBeneficiaries[e] = undefined
      })
      this.formBeneficiaries.phonePrefix = "+593"
    },
    updateYear() {
      this.$refs.yearPicker.internalActivePicker = 'YEAR'
    },
  }
};
</script>

<style src="~/assets/styles/pages/settings.scss" lang="scss" />
