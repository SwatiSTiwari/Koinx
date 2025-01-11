import { Card } from "@/components/ui/card"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      id: 1,
      name: "John Smith",
      designation: "Designation here",
      // Using placeholder.svg for images instead of direct URLs
      image: "/s.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
    {
      id: 2,
      name: "Elina Williams",
      designation: "Designation here",
      // Using placeholder.svg for images instead of direct URLs
      image: "/w.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
    {
        id: 3,
        name: "John Smith",
        designation: "Designation here",
        // Using placeholder.svg for images instead of direct URLs
        image: "/t.png",
        description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
      }
  ]

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-4">
        {team.map((member) => (
          <Card key={member.id} className="p-4 bg-blue-50 border-0">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-center md:w-48">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-lg mx-auto mb-2"
                />
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.designation}</p>
              </div>
              <p className="flex-1 text-gray-600">{member.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}

