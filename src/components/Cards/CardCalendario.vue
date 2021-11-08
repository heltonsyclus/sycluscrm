<template>
  <div class="subcontent">
    <navigation-bar @hoje="onToday" @voltar="onPrev" @adiantar="onNext" />

    <div class="row justify-center">
      <div style="display: flex;width: 80%;">
        <q-calendar-month
          ref="calendar"
          v-model="selectedDate"
          animated
          bordered
          focusable
          hoverable
          locale="pt-BR"
          no-active-date
          :day-min-height="70"
          :day-height="0"
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-day="onClickDay"
          @click-workweek="onClickWorkweek"
          @click-head-workweek="onClickHeadWorkweek"
          @click-head-day="onClickHeadDay"
        >
          <template #day="{ scope: { timestamp } }">
            <template
              v-for="event in eventsMap[timestamp.date]"
              :key="event.id"
            >
              <div
                :class="badgeClasses(event, 'day')"
                :style="badgeStyles(event, 'day')"
                class="my-event"
              >
                <div class="title q-calendar__ellipsis">
                  {{ event.title + (event.time ? " - " + event.time : "") }}
                  <q-tooltip>{{ event.details }}</q-tooltip>
                </div>
              </div>
            </template>
          </template>
        </q-calendar-month>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QCalendarMonth,
  addToDate,
  parseDate,
  parseTimestamp,
  today
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";

import { defineComponent } from "vue";
import NavigationBar from "app/src/components/Cards/NavigationBar.vue";

const CURRENT_DAY = new Date();
function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY);
  newDay.setDate(day);
  const tm = parseDate(newDay);
  return tm.date;
}

export default defineComponent({
  name: "AgendaAlignment",
  components: {
    NavigationBar,
    QCalendarMonth
  },
  data() {
    return {
      selectedDate: today(),
      dateAlign: "center",
      weekdayAlign: "center",
      dateHeader: "stacked",
      events: [
        {
          id: 1,
          title: "Reunião",
          details:
            "Reunião da area de desenvolvimento",
          date: getCurrentDay(1),
          bgcolor: "orange"
        },
        {
          id: 2,
          title: "Instalar biblioteca",
          details: "Biblioteca de gráficos",
          date: getCurrentDay(4),
          bgcolor: "green"
        },
        {
          id: 3,
          title: "Layout",
          details: "Mudança no layout",
          date: getCurrentDay(10),
          time: "10:00",
          duration: 120,
          bgcolor: "red"
        },
        {
          id: 4,
          title: "Almoço",
          details: "Company is paying!",
          date: getCurrentDay(10),
          time: "12:00",
          duration: 90,
          bgcolor: "teal"
        },
        {
          id: 5,
          title: "Visitar cliente",
          details: "Ir na sucolândia",
          date: getCurrentDay(20),
          time: "17:00",
          duration: 90,
          bgcolor: "grey"
        },
        {
          id: 6,
          title: "Javascript",
          details: "Estudar Javascript 101",    
          date: getCurrentDay(22),
          time: "18:00",
          duration: 540,
          bgcolor: "blue",
        },
        {
          id: 7,
          title: "Academia",
          details: "Ir para academia",
          date: getCurrentDay(22),
          time: "19:00",
          duration: 180,
          bgcolor: "teal"
        },
        {
          id: 9,
          title: "Férias",
          details: "Descanso",
          date: getCurrentDay(27),
          bgcolor: "purple",
          icon: "fas fa-fish",
          days: 2
        },
        {
          id: 10,
          title: "Descanso",
          details:
            "Descanso",
          date: getCurrentDay(29),
          bgcolor: "purple",
          icon: "fas fa-plane",
          days: 5
        }
      ]
    };
  },
  computed: {
    eventsMap() {
      const map = {};
      if (this.events.length > 0) {
        this.events.forEach(event => {
          (map[event.date] = map[event.date] || []).push(event);
          if (event.days !== undefined) {
            let timestamp = parseTimestamp(event.date);
            let days = event.days;
            // add a new event for each day
            // skip 1st one which would have been done above
            do {
              timestamp = addToDate(timestamp, { day: 1 });
              if (!map[timestamp.date]) {
                map[timestamp.date] = [];
              }
              map[timestamp.date].push(event);
              // already accounted for 1st day
            } while (--days > 1);
          }
        });
      }
      console.log(map);
      return map;
    }
  },

  methods: {
    badgeClasses(event, type) {
      return {
        [`text-white bg-${event.bgcolor}`]: true,
        "rounded-border": true
      };
    },

    badgeStyles(day, event) {
      const s = {};
      // s.left = day.weekday === 0 ? 0 : (day.weekday * this.parsedCellWidth) + '%'
      // s.top = 0
      // s.bottom = 0
      // s.width = (event.days * this.parsedCellWidth) + '%'
      return s;
    },

    onToday() {
      this.$refs.calendar.moveToToday();
    },
    onPrev() {
      this.$refs.calendar.prev();
    },
    onNext() {
      this.$refs.calendar.next();
    },
    onMoved(data) {
      console.log("onMoved", data);
    },
    onChange(data) {
      console.log("onChange", data);
    },
    onClickDate(data) {
      console.log("onClickDate", data);
    },
    onClickDay(data) {
      console.log("onClickDay", data);
    },
    onClickWorkweek(data) {
      console.log("onClickWorkweek", data);
    },
    onClickHeadDay(data) {
      console.log("onClickHeadDay", data);
    },
    onClickHeadWorkweek(data) {
      console.log("onClickHeadWorkweek", data);
    }
  }
});
</script>
<style lang="sass" scoped>
.my-event
  position: relative
  font-size: 12px
  width: 100%
  margin: 1px 0 0 0
  justify-content: center
  text-overflow: ellipsis
  overflow: hidden
  cursor: pointer

.title
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: 100%

.text-white
  color: white

.bg-blue
  background: blue

.bg-green
  background: green

.bg-orange
  background: orange

.bg-red
  background: red

.bg-teal
  background: teal

.bg-grey
  background: grey

.bg-purple
  background: purple

.rounded-border
  border-radius: 2px
</style>
