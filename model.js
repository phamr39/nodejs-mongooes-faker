import mongoose from 'mongoose';

const AnalysisSchema = mongoose.Schema({
  carId: {
    type: String,
    required: true,
  },
  data: {
    lat: {
      type: Number,
      required: true,
    },
    lon: {
      type: Number,
      required: true,
    },
    alt: {
      type: Number,
      required: true,
    },
  },
  timestamp: {
    type: Number,
    required: true,
  },
  controlMode: {
    type: String,
  },
  autowareState: {
    type: String,
  },
  map_transform_probability: {
    type: Number,
  },
  pause_state_response: {
    type: Boolean,
  },
  energyLevel: {
    type: Number,
  },
  velocity: {
    type: Number,
  },
  // dfz: Distance from zero, when the car is initalized, Unit: km
  dfz: {
    type: Number,
    required: true,
    default: 0,
  },
});

AnalysisSchema.set('autoIndex', false);
AnalysisSchema.index({ carId: 1, timestamp: 1, dfz: 1 });
const Analysis = mongoose.model('Analysis', AnalysisSchema, 'Analysis');
Analysis.on('index', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('[Analysis]: Analysis index created');
  }
});

// module.exports = Analysis;
export default Analysis;
