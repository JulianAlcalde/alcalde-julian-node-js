class Conductor:
    def __init__(self, nombre, licencia):
        self.nombre = nombre
        self.licencia = licencia

class Colectivo:
    def __init__(self, capacidad, conductor):
        self.capacidad = capacidad
        self.pasajeros = 0
        self.conductor = conductor

    def subir(self, pasajeros):
        if self.pasajeros + pasajeros <= self.capacidad:
            self.pasajeros += pasajeros
        else:
            self.pasajeros = self.capacidad

    def bajar(self, pasajeros):
        if self.pasajeros - pasajeros >= 0:
            self.pasajeros -= pasajeros
        else:
            self.pasajeros = 0

            conductor_jose = Conductor("José", 1234)

            linea1 = Colectivo(40, conductor_jose)
            linea1.subir(25)

print("Número de pasajeros en línea1:", linea1.pasajeros)
linea1.subir(35)
print("Número de pasajeros en línea1:", linea1.pasajeros)
linea1.bajar(45)
print("Número de pasajeros en línea1:", linea1.pasajeros)
linea1.subir(35)
linea1.bajar(40)
print("Número de pasajeros en línea1:", linea1.pasajeros)