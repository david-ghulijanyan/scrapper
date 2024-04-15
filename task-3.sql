-- Ունեք մոտ մեկ միլլիոն հասցեների երկրաչափական կոորդինատներ բազայում։ Հարկավոր է գրել SQL կոդ, որը այդ բազայից կվերադարձնի մինչեւ տրված հեռավորության վրա գտնվող հացենելի ցուցակը։ Հուշում՝ հարկավոր է հաշվի առնել մոլորակի երկրաչափական առանձնահատկությունները։

WITH params AS (
  SELECT
    40.7128 AS latitude, 
    -74.0060 AS longitude,
    10.0 AS radius
)

SELECT
  address,
  latitude,
  longitude
FROM
  addresses,
  params
WHERE
  (6371 * acos(
      cos(radians(params.latitude)) * cos(radians(latitude)) *
      cos(radians(longitude) - radians(params.longitude)) +
      sin(radians(params.latitude)) * sin(radians(latitude))
  )) <= params.radius;


-- using PostGIS (for postgres)
CREATE EXTENSION IF NOT EXISTS postgis;

SELECT
  address,  
  geom -- column with geography
FROM
  addresses
WHERE
  ST_DWithin(
    geom::geography,
    ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
    radius
  );
