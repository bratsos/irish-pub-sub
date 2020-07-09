type Subscriber = (event: any) => void

type Unsub = () => true

type SubState = {
  [topic: string]: Subscriber[]
}

type PubSubReturn = [
  (topic: string, callback: Subscriber) => Unsub,
  (topic: string, event: any) => void
]

const createSub = (state: SubState = {}): PubSubReturn => {
  return [
    (topic, callback) => {
      if (!state[topic]) {
        state[topic] = [];
      }

      state[topic].push(callback);

      return () => {
        state[topic] = state[topic].filter(fn => fn !== callback)
        return true 
      }
    },
    (topic, msg) => {
      (state[topic] || []).map(fn => fn(msg))
    }
  ]
}


export default createSub;
