const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 33.44,
    lng: -117.22,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
