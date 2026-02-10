import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const destinations = [
  { name: "Manali", region: "India", season: "Oct–Feb", types: ["Adventure", "Trekking", "Nature"], image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80" },
  { name: "Goa", region: "India", season: "Nov–Mar", types: ["Beach", "City"], image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80" },
  { name: "Leh Ladakh", region: "India", season: "Jun–Sep", types: ["Adventure", "Trekking"], image: "https://images.unsplash.com/photo-1626015365107-3b5b41100410?w=600&q=80" },
  { name: "Bali", region: "International", season: "Apr–Oct", types: ["Beach", "Nature"], image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80" },
  { name: "Swiss Alps", region: "International", season: "Dec–Mar", types: ["Adventure", "Trekking"], image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80" },
  { name: "Kerala", region: "India", season: "Sep–Mar", types: ["Nature", "Beach"], image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80" },
];

const PopularDestinations = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Popular Destinations</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Trending spots loved by travelers across India and the world
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/plan?destination=${encodeURIComponent(dest.name)}`}
                className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={`${dest.name} travel destination`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">{dest.region}</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">{dest.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Best season: {dest.season}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {dest.types.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">{t}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
